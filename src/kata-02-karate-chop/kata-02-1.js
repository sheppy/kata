"use strict";

let chop = function (needle, haystack) {
    let half, result;

    if (!haystack || !haystack.length) {
        return -1;
    }

    if (haystack.length === 1) {
        return (haystack[0] === needle) ? 0 : -1;
    }

    half = Math.floor(haystack.length / 2);
    result = chop(needle, haystack.slice(0, half));

    if (result === -1) {
        result = chop(needle, haystack.slice(half));

        if (result !== -1) {
            result += half;
        }
    }

    return result;
};

module.exports = chop;
