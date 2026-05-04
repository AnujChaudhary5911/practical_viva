import mongoose from "mongoose";
const Order=new mongoose.Schema({
  userId:String,
  productId:String,
  totalAmount:Number,
  status:String,
  createdAt:Date
  
})
export default mongoose.model('Order',Order)