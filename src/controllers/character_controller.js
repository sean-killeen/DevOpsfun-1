var CharacterController = (function(){

    function CharacterController(model) {
        this.model = model;
    }

    CharacterController.prototype.get = function (req, res) {
        
        console.log("HTTP GET /character");
        
        this.model.find({}, function(err, characters) {
            if (err) {
                console.error(err.stack);
                res.status(500).send("Internal Server Error!");
            } else {
                res.send(characters);
            }
        });
    };
    
    CharacterController.prototype.post = function (req, res) {
        
        console.log("HTTP POST /character");
        
        var character = new this.model({
            name: req.body.name,
            darkSideOfTheForce: req.body.darkSideOfTheForce
        });
        
        character.save(function (err) {
            if (err) {
                console.error(err.stack);
                res.status(500).send("Internal Server Error!");
            } else {
                res.json({ message: 'Succcess!', data: character });
            }
        });
    };
    
    return CharacterController;
    
})();

module.exports = CharacterController;
