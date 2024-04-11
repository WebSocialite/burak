import { HttpCode } from "../libs/Errors";
import productModel from "../schema/product.model";
import { Product, ProductInput, ProductInquiry, ProductUpdateInput } from "../libs/types/product";
import { Message } from "../libs/Errors";
import Errors from "../libs/Errors";
import { shapeIntoMongooseObjectId } from "../libs/config";
import { ProductStatus } from "../libs/enums/product.enum";
import { T } from "../libs/types/common";
import { ObjectId } from "mongoose";

class ProductService {
   private readonly productModel;

   constructor() {
    this.productModel = productModel;
   }


/** SPA */

public async getProducts(inquiry: ProductInquiry): Promise<Product[]> {

   const match: T = {productStatus: ProductStatus.PROCESS};
   if(inquiry.productCollection) 
     match.productCollection = inquiry.productCollection;
   if(inquiry.search) {
      match.productName = {$regex: new RegExp(inquiry.search, "i") };
   }
   const sort: T = 
   inquiry.order === "productPrice" //agar inquiry teng bo'lsa
      ? {[inquiry.order]: 1}  // arzonidan boshlab yuqoriga kotaril degan mantiq berdik
      : {[inquiry.order]: -1}; // eng ohiridan qoshilgandan pasga qarab ketish mantiqgi

      const result = await this.productModel.aggregate([
         {$match: match},
         {$sort: sort},
         {$skip: (inquiry.page * 1 - 1)* inquiry.limit }, // nechtadur malumotni skip qlish
         {$limit: inquiry.limit * 1}, //document soni 
      ])
      .exec();
      if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
   
      return result;
}
public async getProduct(
   memberId: ObjectId | null,
    id: string
   ): Promise<Product> {
   const  productId = shapeIntoMongooseObjectId(id);

   let result = await this.productModel.findOne({
      _id: productId, 
      productStatus: ProductStatus.PROCESS,
   }).exec();
   if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

   // TODO : IF authenticated users=> first -> view log creation
   return result;
}
/** SSR */

public async getAllProducts(): Promise<Product[]> {
     // string = > object
     const result = await this.productModel
     .find()
     .exec();
     if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
     return result;
     
   }

public async createNewProduct(input: ProductInput): Promise<Product> {
   try {
      return await this.productModel.create(input);
   } catch(err) {
      console.error("Error, model: createNewProduct:", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
      
   }
}

public async updateChosenProduct(
   id: string,
   input: ProductUpdateInput
   ): Promise<Product> {
     // string = > object
     id = shapeIntoMongooseObjectId(id);
     const result = await this.productModel.findOneAndUpdate({_id: id }, input, {new: true})
     .exec();
     if(!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);
     return result;
     
   }

}

export default ProductService;