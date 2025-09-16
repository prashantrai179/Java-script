// console.log("p");
// console.log("r");
// console.log("e");
// console.log("e");
// console.log("t");
// instead of this you use functions

// function myname() {
//     console.log("p");
//     console.log("r");
//     console.log("e");
//     console.log("e");
//     console.log("t");
// }

// myname()      // myname => is indiviusial call reference and () => called executation

//create normal function

// function addTwoNum(num1, num2){ // parameters
//     console.log(num1 + num2);
// }

// addTwoNum(4,5) // arguments
// addTwoNum(4,"5")
// addTwoNum(4,"a")
// addTwoNum(4,null)

// const result = addTwoNum(4,5)
// console.log("Result: ", result);


function addTwoNum(num1, num2){ // parameters
    // let result = num1 + num2
    // return result
    return num1 + num2
}
const result = addTwoNum(4,5)
// console.log("Result: ", result);

function userLoginMessage(username){  // (username = "rai") so if condition is not working
    if(username === undefined){  //(!username)
        console.log("Please enter your username");
        return
    }
    return `${username} you just logged in`
}


// console.log(userLoginMessage("preet"))

console.log(userLoginMessage())