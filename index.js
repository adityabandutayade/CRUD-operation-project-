const express = require("express");
const mongoose = require("mongoose");
const assistant = require("./models/model.js");
const Data_Route = require("./routes/assistant.route.js");

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("dotenv").config();


app.use("/api/", Data_Route);

const URL=process.env.url;

mongoose.connect(URL)
  .then(() =>{
    console.log("DB connected sucessfully");
  })
  .catch((error) => {
    console.log("moongo db connection error occured!!",error.message);
}); 


app.listen(process.env.PORT,()=>{
       console.log(`server started on PORT ${process.env.PORT}`);
  })
