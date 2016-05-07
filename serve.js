var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

//******************************************************************************
//* ENV
//******************************************************************************
var port = process.env.PORT || 8080;
var connectionString = process.env.MONGO_URL|| "mongodb://127.0.0.1:27017/devopsfun";

//******************************************************************************
//* DATABASE
//******************************************************************************
mongoose.connect(connectionString);
mongoose.connection.on('error', function() {
  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
});

//******************************************************************************
//* DAL
//******************************************************************************
var CharacterModel = mongoose.model("Character", { 
    name: String, 
    darkSideOfTheForce: Boolean 
});

//******************************************************************************
//* WEB SERVICES
//******************************************************************************
var CharacterController = (function(){

    function CharacterController(model) {
        this.Character = model;
    }

    CharacterController.prototype.get = function (err, req, res, next) {
        
        console.log("HTTP GET /character");
        
        this.Character.find({}, function(err, users) {
            if (err) {
                console.error(err.stack);
                res.status(500).send("Internal Server Error!");
            } else {
                res.send(users);
            }
        });
    };
    
    CharacterController.prototype.post = function (err, req, res, next) {
        
        console.log("HTTP POST /character");
        
        var character = new this.Character();

        // Set the character properties that came from the POST data
        beer.name = req.body.name;
        beer.type = req.body.darkSideOfTheForce;
        
        // Save the character
        character.save(function (err) {
            if (err) {
                console.error(err.stack);
                res.status(500).send("Internal Server Error!");
            } else {
                res.json({ message: 'Beer added to the locker!', data: beer });
            }
        });
    };
    
    return CharacterController;
    
})();

var characterController = new CharacterController(CharacterModel);

//******************************************************************************
//* WEB SERVER
//******************************************************************************
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/character", characterController.get);
app.post("/character", characterController.post);

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
