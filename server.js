const express = require('express');
const app = express();

//변수 선언
const users = [];
const port = 3000;

// 미들웨어는 요청이 지나가면서 실행되는 함수
// json을 인식하기 위해 사용
app.use(express.json());

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
// Post 방식은 데이터가 body에 키와 값을 담아서 보낸다.
// PostMan을 사용해서 json 형식으로 보내면 값이 users 배열에 저장된다.

app.post('/user',(req,res)=>{
    console.log(users);
    users.push({name:req.body.name, age:req.body.age});
    return res.send({success: true});
});

app.listen(3000, (err)=>{
    console.log(`connect server ${port}`);
});