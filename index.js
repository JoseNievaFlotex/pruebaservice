const DbUser = require("./User");
var express = require("express");
var bodyP = require("body-parser");
var cors = require("cors");

var app = express();

var router = express.Router();

app.use(bodyP.urlencoded({ entended: true }));

app.use(bodyP.json());
app.use(cors());

app.use("/api", router);

router.route("/User").get(DbUser.getUser);

router.route("/User/new").post(DbUser.creatUser);

var portcnx = process.env.PORT || 5000;
app.listen(portcnx);
