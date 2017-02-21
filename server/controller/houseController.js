var House = require('../model/house')
const multer = require('multer')


module.exports = {
  get_all_house:function(req,res){
    House.find({},function(err,data){
      if(err)throw err
      res.send(data)
    })
  },
  get_one_house:function(req,res){
    House.findOne({_id:req.params.id},function(err,data) {
      if(err)throw err
      res.send(data)
    })
  },
  create_house:function(req,res){
    var imageName = req.files[0].originalname

    var newHouse = new House({
    name : req.body.name,
    image : imageName,
    location:req.body.location,
    price:req.body.price,
    description:req.body.description
    })

    newHouse.save(function(err,house){
      if(err)throw err
      res.redirect('http://127.0.0.1:8080/home.html')
    })
  },
  update_house:function(req,res){
    House.findOneAndUpdate({_id:req.body.id},{name:req.body.name,image:req.body.image,location:req.body.location,price:req.body.price,description:req.body.description},
    function(err,data){
      if(err)throw err
      res.send(data)
    })
  },
  delete_house:function(req,res){
    console.log(req.params);
    House.findOneAndRemove({_id:req.params.id},function(err,data){
      if(err)throw err
      res.send(data)
    })
  }
}
