import { HttpCode } from "../libs/Errors";
import productModel from "../schema/product.model";
import { Product, ProductInput } from "../libs/types/product";
import { Message } from "../libs/Errors";
import Errors from "../libs/Errors";
class ProductService {
   private readonly productModel;

   constructor() {
    this.productModel = productModel;
   }


/** SPA */


/** SSR */

public async createNewProduct(input: ProductInput): Promise<Product> {
   try {
      return await this.productModel.create(input);
   } catch(err) {
      console.error("Error, model: createNewProduct:", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
      
   }
}
}

export default ProductService;