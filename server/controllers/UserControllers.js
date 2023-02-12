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
export const signIn = async (req, res) => {
    const {email, password} = req.body;
    if (!email || password){
        //if no email, or no password
        //display error message
        return res.status(400).json({
            message: 'Please enter your email address.'
        })
    }
    else if (email || !password){
        //if no email, or no password
        //display error message
        return res.status(400).json({
            message: 'Please enter your password.'
        })
    }
    else if (!email && !password){
        return res.status(400).json({
            message: 'Please enter the required fields.'
        })
    }
    //asynchronous function for hashing a password
    async function hashPassword(password) {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
      }
    var EncryptedPassword = hashPassword(req.body.password);
    User.findOne({email: req.body.email}).then(
        (user)=>{
            if (!user){
                return res.status(401).json({
                    message: 'Invalid email address and/or password. Please try again.'
                })
            }
            bcrypt.compare(user.password, req.body.password).then(
                //used to be bcrypt.compare(req.body.password)
                (correct)=>{
                    if (!correct){
                        return res.status(401).json({
                            message: 'Invalid email address and/or password. Please try again.'
                        })
                    }
                }
            )
        }
    )



}


/**
* @description Sign Out user
*/
export const signOut = async (req, res) => {}



