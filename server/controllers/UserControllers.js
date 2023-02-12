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
        //if no email
        //display error message
        return res.status(400).json({
            message: 'Please enter your email address.'
        })
    }
    else if (email || !password){
        //if no password
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
            //if the user does not exist -> error message stating email address is incorrect
            if (!user){
                return res.status(401).json({
                    message: 'Invalid email address and/or password. Please try again.'
                })
            }
            bcrypt.compare(user.password, req.body.password).then(
                //check if hashed db password (user.password) and entered password are equivalent
                (correct)=>{
                    //if not, return error message (password is incorrect)
                    if (!correct){
                        return res.status(401).json({
                            message: 'Invalid email address and/or password. Please try again.'
                        })
                    }
                    //if passwords are equivalent, create session token
                    const payload = {
                        username: req.body.email,
                        exp: Math.floor(Date.now() / 1000) + 60 * 30, // Token expires in 30 minutes
                      };
                    const token = jwt.sign(payload, secret);
                }
            )
        }
    )



}


/**
* @description Sign Out user
*/
export const signOut = async (req, res) => {}



