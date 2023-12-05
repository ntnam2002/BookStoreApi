const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

let routes = require("./api/routes"); //importing route
routes(app);
// Đặt các header ở đây
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header(
        "Access-Control-Allow-Headers",
        "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    );
    res.header("Content-Type", "application/json; charset=UTF-8");
    next();
});

app.options('*', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    res.header("Content-Type", "application/json; charset=UTF-8");
    res.sendStatus(204);
});


// Middleware xử lý lỗi
app.use(function (err, req, res, next) {
    console.error(err);
    res.status(500).send("Internal Server Error");
});

// Middleware xử lý yêu cầu không khớp với bất kỳ định tuyến nào
app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + " not found" });
});

app.listen(port, (err) => {
    if (err) {
        console.error("Error starting the server:", err);
    } else {
        console.log("RESTful API server started on: " + port);
    }
});

