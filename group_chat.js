const express = require('express');
const bodyParser = require('body-parser');
const fs=require('fs');
const path=require('path');

const app=express();
path.join(__dirname,'message.txt');

app.use(bodyParser.urlencoded({extended: false}));


app.get('/login',(req,res)=>{
    const data=fs.readFileSync('/home/vijay/Music/message.txt');
    //res.send('<html><body><p id="para"></p><script>document.getElementById("para").innerHTML=data</script></body></html>')
    res.send('<htm><body><form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/user" method="POST">User name<input type="text" name="title" id="username"><br><button type="submit">Login</button></form></body></html>');

});
app.post('/user',(req,res)=>{
    const user=req.body.title;
    //console.log(user);
    fs.appendFileSync(path.join(__dirname,'message.txt'),user);
    fs.appendFileSync(path.join(__dirname,'message.txt'),":");
    res.redirect('/msg');
    
});      

app.get('/msg',(req,res) =>{
    res.send('<form action="/home" method="POST">Enter your message <input type="text" name="msg"><br><button type="submit">Send</button></form>');
    
});
app.post('/home',(req,res)=>{
    const msg=req.body.msg;
    //console.log(msg);
    fs.appendFileSync(path.join(__dirname,'message.txt'),msg);
    fs.appendFileSync(path.join(__dirname,'message.txt'),"\n");
    
    res.sendFile(path.join(__dirname,'message.txt'));
    //res.redirect('/login');
})      

app.listen(8080);