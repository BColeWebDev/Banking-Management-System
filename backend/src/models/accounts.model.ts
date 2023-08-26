import mongoose from "mongoose";
import { Transaction, TransactionsDocument } from "./transactions.model";

// Interface that describe property to create new user
interface AccountDetailsAttrs{
    accountName:string
    accountType:string
    userid:string
    balance:number
    accountId:string
    transactions:TransactionsDocument[]
}

export interface AccountDocument extends mongoose.Document{
    accountName:string
    accountType:string
    userid:string
    balance:number
    accountId:string
    transactions:TransactionsDocument[]
}


const accountSchema = new mongoose.Schema({
    accountName:{
        type: String,
        required:true
    },
    accountType:{
        type: String,
        required:true
    },
    accountId:{
        type: String,
        required:true
    },
    userid:{
        type: String,
        required:true
    },
    balance: {
      type: Number,
      required: true,
      unique: true
    },
    transactions:{
        type: [Transaction.schema],
        required: true,
    }
})
// Interface that describe property a account model has
interface AccountModel extends mongoose.Model<AccountDocument>{
    build(attrs: AccountDetailsAttrs): AccountDocument;
}

const Account = mongoose.model<AccountDocument, AccountModel> ('Accounts', accountSchema);

export { Account };