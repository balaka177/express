const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');

const app = express();

const product=require('./models/product');
const User=require('./models/user');

product.belongsTo(User);
User.hasMany(product);

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next)=>{
  console.log('execute')
  User.findByPk(1)
  .then(user => {
      console.log(user);
      req.user=user;
      next();
  })
  .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

product.belongsTo(User,{constraints: true,onDelete:'CASCADE'});
User.hasMany(product);

app.use(errorController.get404);

sequelize
.sync()
.then(resp =>{
  //console.log(resp);
  console.log('a')
  return User.findByPk(1);
})
.then(user =>{
  console.log('b')
  if(!user){
    console.log('c')
      return User.create({name:'Vinod',email:'test@gmail.com'});
      
  }
  console.log('d')
  return user;
})
.then(user =>{
 // console.log(user);
 console.log('e')
  app.listen(8080);
})
.catch(err =>{
  console.log(err);
})
