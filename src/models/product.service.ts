import { HttpCode } from "../libs/Errors";
import productModel from "../schema/product.model";
import { Product, ProductInput, ProductUpdateInput } from "../libs/types/product";
import { Message } from "../libs/Errors";
import Errors from "../libs/Errors";
import { shapeIntoMongooseObjectId } from "../libs/config";
class ProductService {
   private readonly productModel;

   constructor() {
    this.productModel = productModel;
   }


/** SPA */


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