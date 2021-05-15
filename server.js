const express = require('express');
const app = express();

//변수 선언
const users = [];
const port = 3000;

// Get 방식으로 /경로로 "Hello, World" 찍기 
// app.get('/',(req, res)=>{
//     return res.send("Hello, World");
// });

// Get 방식으로 url /user 반응
// users는 json 형식으로 보낸다.
// req, res 순서가 다르면 에러뜸ㅋㅋㅋ
app.get('/user',(req,res)=>{
    return res.send({ users : users});
});

// Post 방식으로 /user
app.post('/user',(req,res)=>{
    users.push({name:'JeongWoon', age: 28});
    return res.send({success: true});
});

app.listen(3000, (err)=>{
    console.log(`connect server ${port}`);
});