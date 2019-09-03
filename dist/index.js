"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = require("crypto");
function randomCryptoString(length, next) {
    return new Promise(function (resolve, reject) {
        var value = '';
        var addMore = function () {
            crypto_1.randomBytes(128, function (err, buf) {
                if (err) {
                    if (next) {
                        next(err);
                    }
                    return reject(err);
                }
                value = value + buf.toString('base64').replace(/\//g, '').replace(/\+/g, '');
                if (value.length < length) {
                    return addMore();
                }
                if (next) {
                    next(null, value.substr(0, length));
                }
                resolve(value.substr(0, length));
            });
        };
        addMore();
    });
}
exports.default = randomCryptoString;
