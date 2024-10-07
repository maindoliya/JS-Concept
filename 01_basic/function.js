
const user = {
    username: "manish",
    price:111
}

function handleObject(anyobject){
console.log(`username is ${anyobject.username}`);
}


//handleObject(user);
handleObject({
    username: "manish",
    price:111
})