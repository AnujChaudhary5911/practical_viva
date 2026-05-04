import mongoose from "mongoose";
const Order=new mongoose.Schema({
  name:String,
  price:Number,
  stock:String,
 category:String
  
})
export default mongoose.model('Order',Order)