import express from 'express';
const router = express.Router()
import authCtrl from "../controllers/auth.controller"
import validationMiddleware from '../middleware/validationMiddleware';
router.route("/register")
      .post(validationMiddleware.registerIsValid,authCtrl.RegisterUser)
router.route("/login")
      .post(authCtrl.LoginUser)

export default router