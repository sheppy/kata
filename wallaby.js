/*eslint-env node */

var babel = require("babel");

module.exports = function (wallaby) {
    return {
        debug: false,

        // set `load: false` to all of source files and tests processed by webpack
        // (except external files),
        // as they should not be loaded in browser,
        // their wrapped versions will be loaded instead
        files: [
            {
                pattern: "node_modules/babel/polyfill.js",
                instrument: false
            },
            {
                pattern: "tests/_helpers/**/*.js",
                instrument: false
            },
            { pattern: "src/**/*.js", load: false},
            { pattern: "tests/**/*.spec.js", ignore: true }
        ],

        tests: [
            { pattern: "tests/**/*.spec.js", load: true }
        ],

        compilers: {
            "**/*.js": wallaby.compilers.babel({
                babel: babel,
                stage: 2
            })
        },

        env: {
            type: "node",
            params: {
                runner: "--harmony --harmony_arrays"
            }
        }
    };
};
