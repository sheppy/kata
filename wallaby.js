"use strict";

module.exports = function() {
    return {
        files: [
            "src/**/*.js",
            { pattern: "tests/_helpers/index.js", instrument: false }
        ],

        tests: ["tests/**/*.spec.js"],
        env: { type: "node" },

        setup: function(wallaby) {
            require("./tests/_helpers");
        },

        testFramework: "mocha",
        lowCoverageThreshold: 70
    };
};
