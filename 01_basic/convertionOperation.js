let score = 33
let value = "33abc"
let scoreCard = null
let scoreCardUndefine = undefined
//console.log(typeof score);



let convertWithNumber = Number(value)
console.log(typeof convertWithNumber);
console.log(convertWithNumber);   // NaN


let convertNull = Number(scoreCard)
console.log(convertNull)     //   null convert to number => 0

let convertUnderfine = Number(undefined)
console.log(convertUnderfine)     //   null convert to number => NaN



// "33" => 33
// "33abc" => NaN
// true =>1 , false=> 0

let isLoggedIn = 0
let loggedInUser = Boolean(isLoggedIn)
console.log(loggedInUser);
// 1 => true
// 0 => false


let isUser = ""
let booleanIsLoggedIn = Boolean(isUser)
console.log(booleanIsLoggedIn);
 // Empty String "" => false
 // "Manish" => true


 let someNumber = 33
 let stringNumber = String(someNumber)
 console.log(stringNumber);
 console.log(typeof stringNumber);