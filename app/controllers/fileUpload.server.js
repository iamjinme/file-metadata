'use strict';

function FileUpload() {
  
  this.getInfo = function(req, res) {
    console.log('Receiving...');
    res.end();
  };
  
};

module.exports = FileUpload;
