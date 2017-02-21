var express = require('express');
var router = express.Router();
var house_controller = require('../controller/houseController')
var multer = require('multer')

router.get('/house',house_controller.get_all_house)
router.get('/house/findone/:houseID',house_controller.get_one_house)
router.delete('/house/:id',house_controller.delete_house)
router.put('/house',house_controller.update_house)

  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })

  var upload = multer({
    storage: storage
  })

  router.post('/house', upload.any(), house_controller.create_house)

module.exports = router;
