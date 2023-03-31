const express=require ('express');
const router=express.Router();

const bodyParser=require('body-parser');
router.use(bodyParser.urlencoded({extended:false}));



router.get('/add-product',(req,res,next) => {
    res.send('<form action="/admin/product" method ="post"><input type="text" name="title"><button type="submit" ">Add product</button></form>');

});
router.post('/product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/shop');
})

module.exports=router;