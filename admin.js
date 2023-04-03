const path = require('path');
const express = require('express');

const router=express.Router();
const rootDir=require('../util/path');

const bodyParser=require('body-parser');
router.use(bodyParser.urlencoded({extended:false}));



router.get('/add-product',(req,res,next) => {
    res.sendFile(path.join(rootDir,'views','add_product.html'));

});
router.post('/add-product',(req,res,next) => {
    console.log(req.body.title);
    res.redirect('/');
});
router.get('/contactus',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'));
});
router.post('/success',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','success.html'));
});

module.exports=router;