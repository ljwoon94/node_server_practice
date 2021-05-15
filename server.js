const express = require('express');
const app = express();

const port = 3000;

app.get('/',(req, res)=>{
    return res.send("Hello, World");
});

app.listen(3000, (err)=>{
    console.log(`connect server ${port}`);
});