import express from 'express';
const router = express.Router()
import authCtrl from "../controllers/auth.controller"

router.route("/register")
      .post(authCtrl.RegisterUser)
router.route("/login")
      .post(authCtrl.LoginUser)

export default router