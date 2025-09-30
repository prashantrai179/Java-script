// truthy & falsy

const userEmail = ""

if(userEmail){
    console.log("Got an email");
    
} else {
    console.log("Donot get an email");
    
}

// Falsy values

// false, 0, -0, BigInt 0n, "", undefined, null, NaN

// Truthy values

// "0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : works on Null, Undefined

let val1;
// val1 = 5 ?? 10       // -> 5
// val1 = null ?? 10   // -> 10
// val1 = 10 ?? null   // -> 10
// val1 = undefined ?? 15  // -> 15


console.log(val1);


//Ternary Operator

// condition ? true : false

// const price = 100
// price>=90 ? console.log("less than 100") : console.log("Greater than 100");

