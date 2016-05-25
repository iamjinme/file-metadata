'use strict';

var multer = require('multer');

function FileUpload() {
  
  var upload = multer({ dest: __dirname + "../../public/upload"}).single('file');
  
  this.getInfo = function(req, res) {
    console.log(__dirname);
    upload(req,res,function(err) {
      if(err) {
        return res.json({"error": true});
      }
      res.json({"file_size": req.file.size});
    });
  };
};

module.exports = FileUpload;
