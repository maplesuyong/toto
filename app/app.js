const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");



const app = express();
dotenv.config();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식해주는 코드
app.use(bodyParser.urlencoded({ extended: true }));


// 미들웨어 등록
app.use("/", home);

module.exports = app;




