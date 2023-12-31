import Joi, { required } from "joi"

interface Register{
    first_name: string
    last_name:string
    email:string
    password: string
}
interface Login{
    email:string
    password:string
}
interface forgotPassword{
    email:string
}


// Validation Schema
const registerSchema = Joi.object({
    first_name: Joi.string()
        .min(2)
        .max(35)
        .required()
        .messages({
            'string.empty': `first name cannot be an empty field`,
            'string.min': `first name should have a minimum length of 2 characters`,
            'string.max': `last name should have a minimum length of 35 characters`,
            'any.required': `first name is required field`
        })
    ,


    last_name: Joi.string()
        .min(2)
        .max(35)
        .required()
        .messages({
            'string.empty': `last name cannot be an empty field`,
            'string.min': `last name should have a minimum length of 2 characters`,
            'string.max': `last name should have a minimum length of 35 characters`,
            'any.required': `last name is required field`
        })
    ,

    email: Joi.string()
        .max(30)
        .required()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .messages({
            'string.empty': `"email" cannot be an empty field`,
            'string.max': `email should have a minimum length of 30 characters`,
            'string.email': "must be a valid email",
            'any.required': `"email" is a required field`
        })
    ,

    //Minimum eight characters, at least one letter and one number:
    password: Joi.string()
        .pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
        .required()
        .messages({
            'string.empty': `password cannot be an empty field`,
            'string.min': `password should have a minimum length of 8 characters`,
            'string.pattern.base': `Invalid Password must contain: captialize letter, lower case letter, & special character`,
            'any.required': `password is required field`
        }),

  
    
})


const loginSchema = Joi.object({
    email: Joi.string()

        .max(30)
        .required()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .messages({
            'string.empty': `email cannot be an empty field`,
            'string.max': `email should have a max of length of 30 characters`,
            'string.email': "must be a valid email",
            'any.required': `email is a required field`
        })
    ,
    password: Joi.string()
        .pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
        .required()
        .messages({
            'string.empty': `password cannot be an empty field`,
            'string.min': `email should have a minimum length of 8 characters`,
            'string.pattern.base': `Invalid Password must contain: minimum 8 characters, captialize letter, lower case letter, & special character`,
            'any.required': `password is required field`
        })

})


class Validation {
     // Validation for registering Register
     registerValidation = (data : Register) => {
        // checks if text is not blank   
        const response = registerSchema.validate({...data}, { abortEarly: false })
        return response
    }
    // Login Valiation
    loginValidation = (data: Login) => {
        const { email, password } = data
        const response = loginSchema.validate({ email, password }, { abortEarly: false })
        return response

    }    

}

export default new Validation()