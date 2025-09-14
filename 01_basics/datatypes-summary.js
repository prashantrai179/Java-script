// Primitive datatype  
// => call by value (in which a copy of memory can be produce and  this all changes takes places in that copy)

// 7 - String, Number, Null, Undefined,Boeolean, Symbol, BigInt

const num = 100; 
const outsideTemp = null;
let indore;
const isTraffic = false;

const id = Symbol('143')
const anotherId = Symbol('143')

// console.log(id === anotherId);

const BigInt = 12345432233122n



// Reference (non primitive)

// Array, Obects, Functions,


// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Stack (primitive) => When we declare a variable in memory it gives a copy  
// Heap(non-primitive) => in this it gives the reference means original value will change

let myYoutubeName = "shreepr"

let anotherName = myYoutubeName
anotherName = "prashantpr"

// console.log(myYoutubeName);
// console.log(anotherName);

let userOne = {
    email : "shree@dotcom",
    upi : "one00"
}
let userTwo = userOne

userTwo.email = "rai@001"

// console.log(userOne.email);
// console.log(userTwo.email);

