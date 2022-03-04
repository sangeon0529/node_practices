const express = require('express');

const router = express.Router();

//router.route('').get(function(req,res){
    
//    res.render('main/index');
//})

router.route('').get(function(req,res){
    const data = {
        no :req.query.no || '',
        email: req.query.email || ''
    };
    res.render('hello/02',data);
    
})

module.exports=router;