//  map

const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newnums = myNum.map((num) => {
//     return num + 10
// })

//console.log(newnums);


// chaining

const newNums = myNum
                .map((num) => num*10)
                .map((num) => num-1)
                .filter((num) => (num > 40))

//console.log(newNums);
                

const total = myNum.reduce(function (acc,curVal){
    return acc +curVal
},0)

console.log(total);


const shoppingCart = [
    {
        itemName: "Mobile Dev",
        price: 130
    },
    {
        itemName: "Web Dev",
        price: 130
    },
    {
        itemName: "Data Science Dev",
        price: 130
    },
    {
        itemName: "ML Dev",
        price: 130
    },
    {
        itemName: "Data Analyst Dev",
        price: 130
    },
]

const priceToPay = shoppingCart.reduce( (acc,item) => item.price + acc,0)
console.log(priceToPay);
