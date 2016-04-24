var generateRandomString = require('./index.js');

generateRandomString(8, function(err,ap) {
    console.log("Random: ", ap);
});
