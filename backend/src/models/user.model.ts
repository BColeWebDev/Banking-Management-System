import mongoose from "mongoose"
import passwordHash from "../config/hash";
import _ from "lodash";
// Interface that describe property to create new user
interface UserAttrs{
    first_name: string
    last_name:string
    email:string
    password:string
}
export interface UserDocument extends mongoose.Document {
    first_name:string;
    last_name:string;
    email: string;
    password: string;
    comparePassword(password: string): boolean,
    hidePassword(): void,
    hashPassword(): Promise<string>
}

const userSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required:true
    },
    last_name:{
        type: String,
        required:true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
    
  })


// Interface that describe property a user model has
interface UserModel extends mongoose.Model<UserDocument>{
    build(attrs: UserAttrs): UserDocument;
}


userSchema.methods.comparePassword = function (password:string){
    return passwordHash.compare(password,this.password);
  }
userSchema.methods.hashPassword = function(){
    return passwordHash.hash({rounds: 10, password: this.password});
  }
  
  userSchema.methods.hidePasswod  = function (){
    return _.omit(["password", "__v", "_id"], this.toObject({ virtuals: true }));
  }

  const User = mongoose.model<UserDocument, UserModel> ('User', userSchema);

export { User };