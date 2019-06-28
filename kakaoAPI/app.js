// var express = require('express');

// var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// app.get('/auth',function(req,res){
//     res.send('auth')
// });

// app.listen(8080, function () {
//   console.log('Example app listening on port 8080!');
// });

// app.use('/static',express.static('./example.html'));

var express = require('express');
var app = express()
var request = require('request');
var bodyParser =require('body-parser')
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

app.use('/static',express.static('./example.html'));

// var geturl = 'https://kauth.kakao.com/oauth/authorize?client_id=6938006ff64472b18203faf1286b745a&redirect_uri=http://localhost:8080/oauth&response_type=code'
// request.get({
//     url : geturl
//     },function(error,res,body){
//         // res.json(JSON.parser(body));
//         console.log(body)
// });
