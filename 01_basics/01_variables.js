const accountId = 13425
let accountEmail = "prashant@gmail.com"
var accountPass = "12345"
accountCity = "pune" 
let accountState;

// accountId = 18763// not allowed

accountEmail = "jhsd.com"
accountPass = "43245"
accountCity = "mumbai"

console.log(accountId);

/*
Prefer not to use var
beacuse of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPass, accountCity, accountState])
