// Array 

// slice and splice

const myArr = [0,1,2,3,4,5]

console.log(myArr);
console.log('main===',myArr);

const sliceArr = myArr.slice(1,3)
console.log("A",sliceArr); 1,2
console.log('AMain===', myArr);// 0,1,2,3,4,5

const spliceArr = myArr.splice(1,3) // manipulate main array
console.log('Main===', myArr); // 0,4,5
console.log('SpliceArr===', spliceArr); // 1,2,3



// Array basics 2

// concate => return new array
// push
//Array.from
//Array.of
// Array.isArray

const marvelHeros = ['thor','Ironman','spiderman']
const dc_heros = ['superman','flash','batman']

const allHeros = marvelHeros.concat(dc_heros)
console.log(allHeros);

const allNewHeroes = [...marvelHeros, ...dc_heros]
console.log(allNewHeroes);

const anotherHeroes = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = anotherHeroes.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray('Hitesh'));
console.log(Array.from('Hitesh'));
console.log(Array.from({'name':'Hitesh'}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));




