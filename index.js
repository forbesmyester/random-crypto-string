"use strict";
/// <reference path="./typings/main.d.ts" />
var crypto_1 = require('crypto');
function randomCryptoString(length, next) {
    "use strict";
    var value = '';
    var addMore = function () {
        crypto_1.randomBytes(128, function (err, buf) {
            if (err) {
                return next(err);
            }
            value = value + buf.toString('base64').replace(/\//g, '').replace(/\+/g, '');
            if (value.length < length) {
                return addMore();
            }
            next(null, value.substr(0, length));
        });
    };
    addMore();
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = randomCryptoString;
module.exports = exports.default
//# sourceMappingURL=index.js.map