const express = require('express')
const app = express();
const port = 3001;
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv').config();
const Userroutes = require('./routes/UserRoutes');
// // uses
app.use(bodyparser.json());
app.use(express.json())
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
mongoose.connect(process.env.MONGODBURL).catch((err) =>{
      console.log(err);
}).then(()=>{
      console.log("Connected Mongoose");
});


app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.use('/User' , Userroutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})