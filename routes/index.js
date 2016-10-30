var express = require('express'); //클라이언트 요청에 대응
var router = express.Router();
var queryHome=require('../models/queryHome');

/* GET home page. */
router.get('/', function(req, res, next) { //데이터 조회
  res.render('index', { title: 'Express' });

});

router.post('/list', function(req, res, next){
  var email=req.body.email;
  var phone_num=req.body.phone_num;

  var data = [email,phone_num];
  queryHome.getEnterance(data, function(callback){
    if(callback.hasData){
      req.body.email = callback.data.email;
      req.body.phone_num = callback.data.phone_num;
      req.body.name = callback.data.name;
      req.body.birth_year = callback.data.birth_year;
      req.body.sex = callback.data.sex;
      req.body.etc = callback.data.etc;

      res.json({result:"success", sData:callback.data});
    }else{
      res.json({result:"fail", msg:callback.msg});
    }
  })
})

router.post('/drivingtest/apply', function(req, res, next) {//데이터 추가
  var name = req.body.name;
  var phoneNum = req.body.phoneNum;
  var email = req.body.email;
  var birthYear = req.body.birthYear;
  var sex = req.body.sex;
  var etc = req.body.etc;
  var data = [name,phoneNum,email,birthYear,sex,etc];
  console.log('data' + data);

  queryHome.entryDrivingTest(data, function(callback){
    if(callback){
      res.json({result:"success"});
    }else{
      res.json({result:"fail"});
    }
  });

});


module.exports = router;
