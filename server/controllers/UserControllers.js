import User from '../models/UserModel.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


/**
* @description Sign Up user
*/
export const signUp = async (req, res) => {
   const {name, email, password} = req.body


   if (!name || !email || !password){
       //if no name, no email, or no password
       return res.status(400).json({
           message: 'Missing 1 or more required fields.'
       })
   }
   try{
       //validate if email already exists, and user is signed up
       //check if email is already registered
       const isDuplicate = await User.findOne({email}).exec()


       if (isDuplicate){
           return res.status(409).json({
               message:'Email is already registered'
           })
       }
   }catch (error){
       console.log(error)
       return res.status(500).json({
           message: 'SERVER ERROR',
           error
       })
   }
}


/**
* @description Sing In user
*/
export const signIn = async (req, res) => {}


/**
* @description Sign Out user
*/
export const signOut = async (req, res) => {}



