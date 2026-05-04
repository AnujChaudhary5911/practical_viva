import User from "../models/user.js"
import bcrypt from 'bcrypt'

export const login=async(req,resp)=>{
    try{
        const{email,password,role}=req.body
        if(!email||!password||!role){
        return resp.redirect("/login?error=All Field Must Be Required");
        }
        const user= await User.findOne({email:email})
         if (!user){
            return resp.redirect("/login?error=Invalid password or Email");
        }
        if(!await bcrypt.compare(password,user.password)){
         return resp.redirect("/login?error=Invalid password or Email");
        }else{
            req.session.Email=email
            req.session.role=role
        resp.status.send("login success full")
        }
    }catch(error){
        console.log(error)
        resp.status(500).send("there are some internal error")
    }
};
export const register =async(req,resp)=>{
    try{
        const {name,email,password,role}=req.body
        const user=await User.findOne({email:email})
        if(!user){
          const salt=await bcrypt.genSalt(10)
          const hashed=await bcrypt.hash(password,salt)
          const data={
            name,
            role,
            email,password:hashed,
            createdAt:new Date
          }
          await User.create(data)
          console.log(data)
           return resp.status(201).send("register done")
        }else{
            console.log(req.body)
            return resp.send("user already registerd")
        }

    }catch(error){
        console.log(error)
        resp.status(500).send("enternal error in your register function")

    }

}