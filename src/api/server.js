const express = require('express')
const app = express();
const port = 3001
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const jwt = require('jsonwebtoken');
const user = require('./Module/User');
const bcrypt = require('bcrypt');
// // uses
const JWT_SECRET = "skdjddd87584^&%$574";
app.use(bodyparser.json());
app.use(express.json())
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

mongoose.connect('mongodb://localhost:27017/dbloginapp').catch((err) =>{
      console.log(err);
}).then(()=>{
      console.log("Connected Mongoose");
});

app.get('/User/all' , async(req , res)=>{
      const response = await user.find();
      res.json(response);
})

app.delete('/User/delete/:id' , async(req , res)=>{
      const result = await user.findByIdAndDelete(req.params.id);
      res.json(result);
})


app.post('/User/login' , async(req , res)=>{
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
			JWT_SECRET
		)

		return res.json({ status: 'ok', data: token , User: User })
	}
	res.json({ status: 'error', error: 'Invalid email/password' });
})

app.post('/User/register'  , async(req , res)=>{
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
})

app.get('/', (req, res) => {
  res.send('Hello World!')
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})