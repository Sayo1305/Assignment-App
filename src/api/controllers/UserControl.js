const user = require('../Model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


exports.GetallUserasync = async(req , res)=>{
      const response = await user.find();
      res.json(response);
};

exports.DeleteUserById = async (req , res)=>{
      const result = await user.findByIdAndDelete(req.params.id);
      res.json(result);
};

exports.PostUserLogin = async(req , res)=>{
      const {email, password } = req.body
	const User = await user.findOne({ email }).lean();
	if (!User) {
		return res.json({ status: 'error', error: 'Invalid email/password' })
	}
	if (await bcrypt.compare(password, User.password)) {
		const token = jwt.sign(
			{
				id: User._id,
				email: User.email
			},
			process.env.JWT_TOKEN_SECRET
		)

		return res.json({ status: 'ok', data: token , User: User })
	}
	res.json({ status: 'error', error: 'Invalid email/password' });
}

exports.PostUserRegister =  async(req , res)=>{
      const {email  , username , password} = req.body;
      console.log(email  + " " + username + " " + password);
      if(!email &&  typeof email != 'string')
      {
            return res.json({"status" : "Email is invalid","Ok" : "false"});
      }
      if(!username && typeof username != 'string')
      {
            return res.json({"status" : "Username is invalid","Ok" : "false"});
      }
      if(!password)
      {
            return res.json({"status" : "Password is invalid","Ok" : "false"});
      }
      if(!password && password.length < 8)
      {
            return res.json({"status" : "password Must be greater than 8 words" ,"Ok" : "false" });
      }
      const hashedpassword = await bcrypt.hash(password , 10);
      try{
            const response = await user.create({
                  email,
                  username,
                  password: hashedpassword,
                  isLogin : true,
            })
            return res.json({response , "Ok" : "true"});
      }catch (Err) {
            if(Err.code === 11000)
            {
                  console.log("same name ");
                  return res.json({"status" : "same Username already exist" , "Ok" : "false"});
            }
            else  console.log(Err);
      };
}


exports.PostLogOut = async (req, res) =>{
      const email = req.body.email;
      const userfind = await user.findOne({email});
      const _id = userfind._id;
      const userupdate = user.findByIdAndUpdate(_id , {isLogin  : false}  , (err , docs)=>{
            if(err){
                  return res.json({"status" : "error" , result : err});
            }
            return res.json({"status" : "ok" , result : docs});
      });
      console.log(userfuserupdateind);
}