const express = require('express');

const {GetallUserasync , PostUserLogin , PostUserRegister ,DeleteUserById , PostLogOut , PostLogin }  = require('../controllers/UserControl');

const router = express.Router();

router.get('/getall' , GetallUserasync);
router.post('/DeleteUser/:id' , DeleteUserById);
router.post('/User/Login', PostUserLogin);
router.post('/User/Register', PostUserRegister);
router.post('/User/Logoutcheck' , PostLogOut);
router.post('/User/Logincheck' , PostLogin);

module.exports = router;