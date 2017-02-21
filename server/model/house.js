var mongoose = require('mongoose')

var Schema = mongoose.Schema

var houseSchema = new Schema({
  name:String,
  image:String,
  location:String,
  price:Number,
  description:String
},{
  timestamps:true
})

var House = mongoose.model('House',houseSchema)

module.exports = House;
