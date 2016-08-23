"use strict";

/* global global, describe, it, beforeEach, afterEach */
/* eslint no-unused-expressions: 0, max-statements: 0 */

require("../_helpers");

const chop = require("../../src/kata-02-karate-chop/kata-02-1.js");


describe("chop", () => {
    it("is a function", () => {
        chop.should.be.a.func;
    });

    it("returns an integer", () => {
        chop().should.return.an.integer;
    });


    const tests = [
        { needle: 3, haystack: [], result: -1 },
        { needle: 3, haystack: [1], result: -1 },
        { needle: 1, haystack: [1], result: 0 },

        { needle: 1, haystack: [1, 3, 5], result: 0 },
        { needle: 3, haystack: [1, 3, 5], result: 1 },
        { needle: 5, haystack: [1, 3, 5], result: 2 },
        { needle: 0, haystack: [1, 3, 5], result: -1 },
        { needle: 2, haystack: [1, 3, 5], result: -1 },
        { needle: 4, haystack: [1, 3, 5], result: -1 },
        { needle: 6, haystack: [1, 3, 5], result: -1 },

        { needle: 1, haystack: [1, 3, 5, 7], result: 0 },
        { needle: 3, haystack: [1, 3, 5, 7], result: 1 },
        { needle: 5, haystack: [1, 3, 5, 7], result: 2 },
        { needle: 7, haystack: [1, 3, 5, 7], result: 3 },
        { needle: 0, haystack: [1, 3, 5, 7], result: -1 },
        { needle: 2, haystack: [1, 3, 5, 7], result: -1 },
        { needle: 4, haystack: [1, 3, 5, 7], result: -1 },
        { needle: 6, haystack: [1, 3, 5, 7], result: -1 },
        { needle: 8, haystack: [1, 3, 5, 7], result: -1 }
    ];

    tests.forEach((test) => {
        it(`returns ${test.result} when searching [${test.haystack}] for ${test.needle}`, () => {
            chop(test.needle, test.haystack).should.return(test.result);
        });
    });
});
