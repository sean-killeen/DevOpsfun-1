var expect = require("chai").expect;
var sinon = require("sinon");
var CharacterController = require("../src/controllers/character_controller");

describe("UserController", () => {

    var sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it("Should be able to use middleware as configuration", () => {
        
        // TODO
        var characterController = new CharacterController();
        
    });

});
