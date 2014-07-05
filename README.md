# random-crypto-string

There are a lot of node packages for generating random strings, most do so synchronously and a few might return you a random set of ints. This will return you real random strings of whatever length you wish asynchronously.

## Usage

```javascript
var randomCryptoString = require('random-crypto-string');
randomCryptoString(
    64,
    function(err, randomString) {
        console.log(randomString);
    }
);
```
