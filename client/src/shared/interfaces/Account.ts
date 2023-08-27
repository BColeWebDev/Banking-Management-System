import { Transactions } from "./Transactions"

export interface Accounts{
    _id:string
    accountName:string
    accountType:string
    userid:string
    balance:number
    accountId:string
    transactions: Transactions[]
}