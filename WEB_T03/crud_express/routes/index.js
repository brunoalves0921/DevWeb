var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  const {user, pass} = req.body;
  if(loginService.login(user,pass)){
    res.json({status:true});
  }else{
    res.json({status:false});
  }
  
});


module.exports = router;
