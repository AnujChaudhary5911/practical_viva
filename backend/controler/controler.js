// import mongoose from "mongoose";
// import order from '../models/order'
// import User from '../models/user'
// import product from "../models/product";
// export const del=async(req,resp)=>{
// try{
//     const {_id}=req.body
//     const data =product.findOne({_id})
//     if(!data){
//         resp.send("product is not here or available")
//     }
//     await product.findByIdAndDelete(_id)
//   resp.send("deleted complete")
// }catch(error){
//     console.log(error)
//     resp.send("error in your code")
// }
// }
// export const update=async(req,resp)=>{
// try{
//     const ob=req.body
//     const data =product.findOne({_id})
//     if(!data){
//         resp.send("product is not here or available")
//     }
//     await product.findByIdAndDelete(_id)
//   resp.send("deleted complete")
// }catch(error){
//     console.log(error)
//     resp.send("error in your code")
// }
// }