import express from 'express';
const router = express.Router()
import accountsController from '../controllers/accounts.controller';
// Accounts Controllers
router.route("/:id")
      .get(accountsController.GetAllAccounts)
router.route('/create')
    .post(accountsController.CreateNewAccount)
router.route('/update')
    .post(accountsController.UpdateAccount)
router.route('/delete')
    .post(accountsController.DeleteAccount)

export default router