const accountId = 12345;
let accountEmail = "asdf@gmail";
var accountPassword = "1234"
accountCity = "jaipur";


// accountId = 2345; not allowed

accountEmail = "cvbnm@gmail123";
accountPassword = "6789";
accountCity = "bangaluru";


/*
prefer not to use var
beacuse of issue in block scope and functional scope


*/

console.log(accountId);
console.table([accountEmail,accountPassword,accountCity]);
