const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT  = 3000;

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 미들웨어 등록
app.use("/", home);

module.exports = app;




