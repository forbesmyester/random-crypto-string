var generateRandomString = require('./exported.js');

generateRandomString(8, function(err,ap) {
    console.log("Random: ", ap);
});
