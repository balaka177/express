const express=require('express');
const path=require('path')

const shop=express.Router();

shop.get('/',(req,res,next) => {
    
    res.sendFile(path.join(__dirname,'../','views','shop.html'));

});

module.exports=shop;
