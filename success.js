exports.success=(req,res)=>{
    res.render('/success',{
        pageTitle:'Sucess',
        path:'./success',
        productCSS:true,
    })
}