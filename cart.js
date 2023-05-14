const { json } = require('body-parser');
const fs= require('fs');
const path=require('path');
const p=path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
);
module.exports= class Cart{
   static addProduct(id,productPrice){
    fs.readFile(p,(err,fileContent) => {
        let cart={products: [],totalPrice:0}
        if(!err) {
            cart=JSON.parse(fileContent);
        }

        const existngProductIndex=cart.products.findIndex(prod => prod.id===id)
        const existngProduct=cart.products.find(prod =>prod.id === id);
        let updatedProduct;
        if(existngProduct){
            updatedProduct={...existngProduct};
            updatedProduct.qty=updatedProduct.qty+1;
            cart.products=[...cart.products];
            cart.products[existngProductIndex]=updatedProduct;
        }
        else{
            updatedProduct={id:id,qty:1};
            cart.products=[...cart.products,updatedProduct];
        }
        cart.totalPrice=cart.totalPrice+ +productPrice;
        fs.writeFile(p,JSON.stringify(cart),err => {
            console.log(err);
        })
    });
   }

}