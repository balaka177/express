const http=require('http');

const express=require('express');
const app=express();

const routeAdmin=require('./routes/admin');
const routeShop=require('./routes/shop');

app.use('/admin',routeAdmin);
app.use('/shop',routeShop);






app.use((req,res,next) =>{
    res.status(404).send('<h1>Page not found</h1>');
})

app.listen(8080);