const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const Product=sequelize.define('product',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        alowNull:false,
        primaryKey:true
    },
    title:{
        type:Sequelize.STRING,
        allowNull:true,

    },
    imageUrl:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    descrition:{
        type:Sequelize.STRING,
        allowNull:true,
    }
});
module.exports=Product;