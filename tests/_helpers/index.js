"use strict";

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const proxyquire = require("proxyquire");

chai.use(chaiAsPromised);
chai.use(sinonChai);

global.should = chai.should();
global.sinon = sinon;
global.proxyquire = proxyquire.noCallThru();


const Assertion = chai.Assertion;

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
        let obj = utils.flag(this, "object");
        new Assertion(obj).to.be.equal(str);
    });
});
