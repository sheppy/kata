"use strict";

/* global global, describe, it, beforeEach, afterEach */
/* eslint no-unused-expressions: 0, max-statements: 0 */

const StringSum = require("../../src/kata-03-string-sum/kata-03-1");

describe("StringSum", function() {
    describe("sum", function() {
        it("should be a method", function() {
            StringSum.should.have.property("sum");
            StringSum.sum.should.be.a.func;
        });

        const sumTests = [
            { num1: 1, num2: 1, result: 2 },
            { num1: 4, num2: 3, result: 7 },
            { num1: 0, num2: 3, result: 3 },
            { num1: "0", num2: 3, result: 3 },
            { num1: 2, num2: "3", result: 2 },
            { num1: 2, num2: "x", result: 2 },
            { num1: 0, num2: 0, result: 0 },
            { num1: 2.5, num2: 2.5, result: 0 },
            { num1: -2, num2: -5, result: 0 }
        ];

        sumTests.forEach(function(test) {
            it(`returns ${test.result} when given ${test.num1} and ${test.num2}`, function() {
                StringSum.sum(test.num1, test.num2).should.equal(test.result);
            })
        });

    });

});
