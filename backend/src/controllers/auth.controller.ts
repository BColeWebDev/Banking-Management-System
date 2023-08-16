import { Response, Request } from "express";
import { User } from "../models/user.model";
import hashPassword from "../config/hash";
import { generateToken, createToken } from '../config/jwt';
let error: string[] = [];
const RegisterUser = async (req:Request, res:Response) =>{
    const{
        first_name, 
        last_name, 
        email, 
        password,
    } = req.body
    const userExist = await User.findOne({email})
    if(userExist){
        error.push( "email already exists!" )
        res.status(409).json({ errors: error.map(err => err)});
        error = []
    }else{
        const hashedPassword = await hashPassword.hash({rounds:10,password})

                      // Create User 
                     const newUser =   await User.create({
                        first_name,
                        last_name,
                        email,
                        password: hashedPassword,
                      }).then((val)=> val)
                    

                      if(newUser){
                        try {
                            return res.status(201).json({message:"User Created!"});           

                        } catch (error) {
                            console.log(error)
                            User.findByIdAndDelete(newUser?._id)
                            return res
                                   .status(403)
                                   .send({message: `Impossible to send an email to ${newUser.email}, try again. Our service may be down.`});
      
                        }
                      }
    }

}
const LoginUser = async(req:Request, res:Response) =>{
    const {email, password} = req.body

    const existingUser = await User.findOne({email:email});
    console.log(password,existingUser)
    try {
        if(existingUser === null || !(await hashPassword.compare(password,existingUser.password))){
       
            return res.status(400).json( "Invalid user credentials")
    
        }
    
       
        const userToken  = generateToken(existingUser!.email, existingUser!.first_name, existingUser!.last_name)
      
  
        res.status(200).json({existingUser, userToken});
    } catch (error) {
        console.log(error)
        res.status(400).json({error:error})
    }


}
export default {RegisterUser,LoginUser}