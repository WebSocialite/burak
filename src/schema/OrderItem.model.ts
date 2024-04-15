import mongoose, { Schema } from 'mongoose';


const orderItemSchema = new Schema({

    itemQuantity: {
        type: Number,
        required: true,
    },
    itemPrice: {
        type: Number,
        required: true,
    },
    orderId: {
        type: Schema.Types.ObjectId,
        ref: "Order",
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
    },
},
 { timestamps: true, 
    collection: "orderItems" } //bu yerda "collection" orqali default bolip turgan OrderItem ni orderItem ga ozgartishini beryapmiz
);

export default mongoose.model("OrderItem", orderItemSchema );