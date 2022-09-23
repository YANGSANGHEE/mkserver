// Server구축

let express = require('express')

let app = express()

app.listen(2353, function () {
  console.log('express 스타트');
})
// npm install nodemon
// nodemon app.js

// URL Routing 처리
// localhost : 2353 브라우저에 res.sendFile() 내부의 파일이 띄워짐
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/public/main.html");
})
// __dirname : 요청하고자 하는 파일의 경로를 단촉시켜주는 절대경로 식별자

//localhost : 2353/main 브라우저에 res.sendFile() 내부의 파일이 띄워짐 
app.get('/main', function (req, res) {
  res.sendFile(__dirname + "/public/main.html");
})

app.get('/About', function (req, res) {
  res.sendFile(__dirname + "/public/About.html");
})

app.use(express.static('public'))