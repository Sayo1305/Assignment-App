const express = require('express');

const {GetallUserasync , PostUserLogin , PostUserRegister ,DeleteUserById , PostLogOut }  = require('../controllers/UserControl');

const router = express.Router();

router.get('/getall' , GetallUserasync);
router.post('/DeleteUser/:id' , DeleteUserById);
router.post('/User/Login', PostUserLogin);
router.post('/User/Register', PostUserRegister);
router.post('/User/Logout' , PostLogOut);
// router.post('/User/Login' , PostLogIn);

module.exports = router;