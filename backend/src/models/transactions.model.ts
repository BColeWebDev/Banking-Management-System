import mongoose, { Schema, model } from "mongoose";

interface TransactionsDocument extends mongoose.Document{
    transactionName:string
    transactionAmmount:number
}

const transactionSchema = new Schema<TransactionsDocument>({
    transactionAmmount:Number,
    transactionName:String
    

})

 const Transaction= model<TransactionsDocument>("Transactions", transactionSchema)

 export {Transaction,TransactionsDocument}