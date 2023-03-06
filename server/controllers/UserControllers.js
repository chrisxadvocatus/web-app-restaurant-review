import User from '../models/UserModel.js'
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
       const newUser = await User.create({name, email, password});
       return res.status(200).json({
        message: 'User created successfully', 
        newUser
       })
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
    if (!email && password){
        //if no email
        //display error message
        return res.status(400).json({
            message: 'Please enter your email address.'
        })
    }
    else if (email && !password){
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
    // const existing user = 
    const existingUser = await User.findOne({"email": req.body.email});
    if (existingUser){
        bcrypt.compare(existingUser.password, req.body.password).then(
            //check if hashed db password (user.password) and entered password are equivalent
            (correct)=>{
                //if not, return error message (password is incorrect)
                if (correct){
                    console.log('login successful')
                    // res.redirect('login')
                }
                else{
                    return res.status(401).json({
                        message: 'Invalid email address and/or password. Please try again.'
                    })
                } 
                }
        )}
    else{
        return res.status(401).json({
            message: 'Invalid email address and/or password. Please try againn.'
        })
    }
        
    // User.findOne({"email": req.body.email}).then(
    //     (user)=>{
    //         //if the user does not exist -> error message stating email address is incorrect
    //         if (!user){
    //             return res.status(401).json({
    //                 message: 'Invalid email address and/or password. Please try again.'
    //             })
    //         }
    //         bcrypt.compare(user.password, req.body.password).then(
    //             //check if hashed db password (user.password) and entered password are equivalent
    //             (correct)=>{
    //                 //if not, return error message (password is incorrect)
    //                 if (!correct){
    //                     return res.status(401).json({
    //                         message: 'Invalid email address and/or password. Please try again.'
    //                     })
    //                 }
    //             }
    //         )
    //     }
    // )
}


/**
* @description Sign Out user
*/
export const signOut = async (req, res) => {
    try{
        const user = await User.findById(req.user._id);
        req.logout();
        res.status(200).json({message: 'User signed out successfully'})
    }catch(error){
        console.log(error);
        res.status(500).json({error: 'Internal server error'});
    }
};



