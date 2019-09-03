import { randomBytes } from 'crypto';

export default function randomCryptoString(length: number, next?: (err: any, s?: string) => void): Promise<string> {
    return new Promise(function(resolve, reject) {
        var value = '';
        var addMore = function () {
            randomBytes(128, function (err, buf) {
                if (err) {
                    if (next) { next(err); }
                    return reject(err);
                }
                value = value + buf.toString('base64').replace(/\//g, '').replace(/\+/g, '');
                if (value.length < length) {
                    return addMore();
                }
                if (next) { next(null, value.substr(0, length)); }
                resolve(value.substr(0, length));
            });
        };
        addMore();
    });
}
