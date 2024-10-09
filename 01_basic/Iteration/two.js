// for of

// object iterate in for in (key value)
// map iterate in for of (key, value)

["", "", ""]

const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    console.log(i);
    
}

const greeting = "HelloWorld"
for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
}


//****************** */
// MAP
// object vs map

const map = new Map()
map.set('IN',"India")
map.set('USA',"United State Of America")
map.set('Fr',"France")

// console.log(map);

// for (const [key,value] of map) {
//     console.log(key, ':-', value);
// }

// const myObject = {
//     'game1': 'NFS' ,
//     'game2': 'Spiderman'
// }

// for (const [key,value] of myObject) {
//     console.log(key, ':-',value);
//     // myObject is not iterable
// }

const myObjects = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "Swift"
}

for (const key in myObjects) {
    //console.log(myObjects[key]);
    console.log(`${key} shortcut is for ${myObjects[key]}`);
}

// const programming = ['js','ruby','cpp','java','python']
// for (const key in programming) {
//     console.log(key);
//     console.log(programming[key]);
    
// }

for (const key in map) {
   console.log(key);
   // map is not iterable so no result
}


// *********************
// for Each
const coding = ['js','ruby','cpp','java','python',"1"]

//coding.forEach( function (item) {})

// coding.forEach((item) => {
// console.log(item);
// })

function printMe(item) {
    console.log(item);
}

//coding.forEach(printMe)

coding.forEach((item, index , array) => {
    console.log(item, index, array);
    
})


const myCoding = [
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    }, {
        languageName:"objective cc",
        languageFileName:"IOS"
    }
    , {
        languageName:"c++",
        languageFileName:"cPP"
    }
]

myCoding.forEach((item) => {
console.log(item.languageFileName);

})