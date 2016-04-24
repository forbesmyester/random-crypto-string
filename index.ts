/// <reference path="./typings/main.d.ts" />
import { randomBytes } from 'crypto';

export default function randomCryptoString(length: number, next: (err: any, s?: string) => void) {
    "use strict";
    var value = '';
    var addMore = function () {
        randomBytes(128, function (err, buf) {
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
