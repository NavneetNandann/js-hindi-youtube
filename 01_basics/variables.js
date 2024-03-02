const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword ="12345"
accountCity ="jaipur"
let accountState;

// accountId = 123456  //not allowed
accountEmail = "ht@google.com"
accountPassword = "1234"
accountCity = "bengaluru"

/*
Preger not to use var variable.
because of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

