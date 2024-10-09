const month = 3
switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('Febuary');
        break;
    case 3:
        console.log('March');
        break;
// shift+option+downArrow
    default:
        break;
}

//falsy value =  null, undefine, NaN, "", -0, 0, false, BigInt 0n

// truethy value => "0","false," ",[],{},function(){}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}