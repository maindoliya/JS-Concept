
// Object.keys
//Object.value
//Object.entries

const myList = Symbol('list')

const JSUser = {
    name : 'Manish',
    [myList]: "MyOwnList"
}

JSUser.greetingName = function(){
    console.log(`my name is ${this.name}`);
    
}

console.log(JSUser.greetingName());
console.log(JSUser[myList]);
console.log(JSUser);


//*************************** */

const tinderUser = {}
tinderUser.id = '123ef'
tinderUser.name = 'fref'
tinderUser.isLoggedIn = false
console.log(tinderUser);

const obj1 = {1:'a' , 2:'b'}
const obj2 = {3:'a' , 4:'b'}

// const obj3 = Object.assign(obj1,obj2)
// console.log(obj3);
const obj = {5:'a' , 6:'b'}

const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)

const value = {...obj1,...obj2,...obj}
console.log(value);

console.log(Object.keys(JSUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// ******************************* 

const course = {
    courseName: "js in hindi",
    price: "999",
    courceInstructer:"Manish"
}

// const {courceInstructer} = course
// De-Structuring
const {courceInstructer: instructor} = course

//console.log(courceInstructer);
console.log(instructor);
