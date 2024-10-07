const user = {
    userName: "manish",
    price:999,

    welcomeMessage: function() {
        console.log(`${this.userName} , welcome to website`);
        
    }
}

// user.welcomeMessage()
// user.userName = "pankaj"
// user.welcomeMessage()
// console.log(this);

// function chai() {
//     let username = "manish"
//     console.log(this);
//     console.log(this.username); // undefined
    
// }

//chai()
//this => using object , undifine in function



// ************** Arrow function ************

const chai = () => {
    let username = "manish"
    console.log(this); // empty in arrow function this is difference between func vs arrow function
    console.log(this.username); // undefined
    
}

//chai()

// exiplicit using return
const addTwo = (num1, num2) => {
    return num1 + num2
}

//console.log(addTwo(2,4));


// implicit return
// const addTwoNum = (num1, num2) =>  num1 + num2
//console.log(addTwoNum(2,4));

// const addTwoNum = (num1, num2) =>  (num1 + num2)
// console.log(addTwoNum(2,4));



// return Object
// const addTwoNum = (num1, num2) =>  ({username:"manish"})
// console.log(addTwoNum(2,4));

