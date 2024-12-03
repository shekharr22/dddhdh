const accountId = 14444
let accountEmail = "shekharjadhav@google.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;

//accountId = 2 NOT allowed means not duplicate 

accountEmail ="hc@hc.com"
accountPassword = "12121212"
accountCity = "Bengluru"


console.log(accountId);

/*
Prefer not to use var
beacause of issue in block scope and functional scope
*/

console.log([accountId, accountEmail, accountPassword, accountCity, accountState])
