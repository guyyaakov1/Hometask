const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const cors=require('cors');
app.use(cors());
const port=1000;
const cofing=require("./cofing/db")
const feedbackRoutes=require("./routes/feedbackRoutes")
app.use("/", feedbackRoutes);

mongoose.connect(cofing.mongoURI,{ useNewUrlParser: true })
.then(()=>{
  console.log('connction sucsses')
})
.catch(()=>{
  console.log('connction failed');
})
 
const server = app.listen(port, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});