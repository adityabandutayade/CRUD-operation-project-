const mongoose = require("mongoose");

const Structure_Schema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      min: 3,
      max:20,
      unique:true,
    },

    Id: {
      type: Number,
      required: true,
      unique:true, 
      max:50,
      min:1
    },

    Mobile: {
      type: Number,
      rquired: true,
      min:10,
    },
    Email: {
      type:String,
      required:true,
      unique:true, 
      max:50, 
    },
    Salary: {
      type: Number,
      required: true,
      default:0,
    },

    City: {
      type: String,
      required: true,
      default: null,
    },

    Country: {
      type: String,
      required: true,
      default: null,
    },

    department: {
      type: String,
      required: true,
      default: null,
    },

    Role: {
      type: String,
      required: true,
      default: null,
    },

    address:{
      type: String,
      required: true,
      default: null,
    }  
  },

  {
    timstamps: true,
  }
);

const Product = mongoose.model("Product", Structure_Schema);
module.exports = Product;
