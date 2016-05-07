var mongoose = require("../config/db");

var CharacterModel = mongoose.model("Character", { 
    name: String,
    darkSideOfTheForce: Boolean
});

module.exports = CharacterModel;
