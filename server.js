var express = require("express");
var bodyParser = require("body-parser");
var CharacterModel = require("./src/models/character_model");
var CharacterController = require("./src/controllers/character_controller");

var port = process.env.PORT || 8080;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var characterController = new CharacterController(CharacterModel);
app.get("/character", function (req, res) { characterController.get(req, res); });
app.post("/character", function (req, res) { characterController.post(req, res); });

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
