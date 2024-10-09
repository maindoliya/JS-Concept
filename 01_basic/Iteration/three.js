
const coding = ['js','ruby','cpp','java','python',"1"]

 const value = coding.forEach((item) => {
    console.log(item);
    return item
})

//console.log(value); // undefined

// for each not return anything.....

const myNum = [1,2,3,4,5,6,7,8,9,10]
//const newNum = myNum.filter((num) => num > 5)
const newNum = myNum.filter((num) => {
   return (num > 5)
})
////console.log(newNum);


const newNums = []
myNum.forEach((num) => {
    if(num > 5){
        newNums.push(num)
    }
})

//// console.log(newNums);

