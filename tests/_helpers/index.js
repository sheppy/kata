var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");

chai.should();
chai.use(sinonChai);

var Assertion = chai.Assertion;


chai.use(function(_chai, utils) {
    // Add integer assertion
    utils.addProperty(Assertion.prototype, 'integer', function() {
        this.assert(
            /^-?\d+$/.test(this._obj),
            "expected #{this} to be an integer",
            "expected #{this} not to be an integer"
        );
    });

    // Add return alias of equal and also be a chain
    utils.addChainableMethod(Assertion.prototype, "return", function(str) {
        var obj = utils.flag(this, "object");
        new Assertion(obj).to.be.equal(str);
    });
});


module.exports = {};
