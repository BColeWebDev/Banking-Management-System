import { Response, Request } from "express";
import { Account } from "../models/accounts.model";
import { uniqueId } from "lodash";
let error: string[] = [];
const CreateNewAccount =  async (req:Request,res:Response) =>{
const {
     accountName, 
        balance, 
        email, 
} = req.body

const createAccount = await Account.create({
    accountId:1,
    accountName:"testing",
    accountType:"Testing",
    userid:710,
    balance:100,
    transactions:[]
})
createAccount.save().then((val)=>{
    return res.status(200).json(val)
})

}

const GetAllAccounts =  async (req:Request,res:Response) =>{   

    const allAccounts = await Account.find({userid:req.params.id})
    return res.status(200).json(allAccounts)
}


const UpdateAccount = async(req:Request,res:Response) =>{
    const updateAccount = await Account.findOneAndUpdate()
    updateAccount?.save()
    return res.status(200).json();
 }  

 
const DeleteAccount = async(req:Request,res:Response) =>{
    // const deleteAccount = await Account.findByIdAndDelete()
    // deleteAccount?.save()
    return res.status(200).json()
}  


    

export default {
    CreateNewAccount,
    GetAllAccounts,
    UpdateAccount,
    DeleteAccount
}