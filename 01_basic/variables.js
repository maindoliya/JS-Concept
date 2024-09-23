const accountID = 1234
let userID = "manishmaindoliya@gmail.com"
var userPassword = "12345"
accountCity = "Jaipur"
let userState;
var accState;

//accountID = 2  not allowd

/*
prefer not use to var
because of issue in block scope and functional scope

*/

console.log(accountID)

userID = "vinay@gmail.com"
userPassword = "34535"
accountCity = "Bengaluru"

console.table([userID,userPassword,accountCity,userState,accState])