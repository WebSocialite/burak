import { HttpCode } from "../libs/Errors";
import { Product, ProductInput, ProductInquiry, ProductUpdateInput } from "../libs/types/product";
import { Message } from "../libs/Errors";
import Errors from "../libs/Errors";
import { shapeIntoMongooseObjectId } from "../libs/config";
import { ProductStatus } from "../libs/enums/product.enum";
import { T } from "../libs/types/common";
import { ObjectId } from "mongoose";
import ViewService from "./View.service";
import { ViewGroup } from "../libs/enums/view.enum";
import { ViewInput } from "../libs/types/view";
import productModel from "../schema/product.model";

class ProductService {
   private readonly productModel;
   public viewService;

   constructor() {
    this.productModel = productModel;
    this.viewService = new ViewService()
   }


/** SPA */

public async getProducts(inquiry: ProductInquiry): Promise<Product[]> {

   const match: T = {productStatus: ProductStatus.PROCESS};
   if(inquiry.productCollection) 
     match.productCollection = inquiry.productCollection;
   if(inquiry.search) {
      match.productName = {$regex: new RegExp(inquiry.search, "i") };  // letter katta yoki kichligiga qarama degan logic ekan
   }
   const sort: T = 
   inquiry.order === "productPrice" //agar inquiry teng bo'lsa
      ? {[inquiry.order]: 1}  // arzonidan boshlab yuqoriga kotaril degan mantiq berdik
      : {[inquiry.order]: -1}; // eng ohiridan qoshilgan vaqtida pasga qarab ketish mantiqgi

      const result = await this.productModel
      .aggregate([
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
   console.log("result:", result);
   
   if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
  
   // TODO : IF authenticated users=> first -> view log creation
   if(memberId) {
      //CHECK existence 
      const input: ViewInput = {
         memberId: memberId, 
         viewRefId: productId,
         viewGroup: ViewGroup.PRODUCT,
      };

      const existView = await this.viewService.checkViewExistence(input);

       console.log("exist:", !!existView);
       
      //Insert VIEW
      if(!existView) {
         await this.viewService.insertMemberView(input);
        //Increase Counts
         result = await this.productModel
         .findByIdAndUpdate( productId,
          { $inc: { productViews: +1 } },
          { new: true }
          ).exec();
      }
    

   }
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