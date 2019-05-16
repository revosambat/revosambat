const mongoose = require('mongoose');
const Schema =mongoose.Schema;
const Blogpost =new Schema({
    Name:String,
    Post:String,
    Salary:Int32Array,
   // date:Date
})
module.exports=Blogpost;