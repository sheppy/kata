"use strict";

class StringSum {
    static sum(num1, num2) {
        if (parseInt(num1, 10) !== num1 || num1 < 0) { num1 = 0; }
        if (parseInt(num2, 10) !== num2 || num2 < 0) { num2 = 0; }
        return num1 + num2;
    }
}

module.exports = StringSum;
