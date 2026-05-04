import express from 'express'
import session from 'express-session'
import mongoose from 'mongoose'
import joi from 'joi'
import dotenv from 'dotenv';
dotenv.config();
const app=express()
app.use(express.json())
import connectDB from './config/db.js'
app.use(session({
    secret: 'secret-key', 
    resave: false,
    saveUninitialized: false

}))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
connectDB()
// import {del} from './controler/controler.js'
import {login,register} from './config/auth.js'
app.post("/register",register)
app.post("/login",login)
app.listen(3200)