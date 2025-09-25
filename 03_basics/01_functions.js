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
        // console.log("Please enter your username");
        return
    }
    return `${username} you just logged in`
}


// console.log(userLoginMessage("preet"))

// console.log(userLoginMessage())

// function calculateCardprice(...num){
//     return num
// }
// console.log(calculateCardprice(200,543,7897));

function calculateCardprice(val1, val2,...num){
    return num
}
// console.log(calculateCardprice(200,543,789,342,123));

const user = {
    username : "preet",
    price : 30002
}

function handleObject(kucbhi){
    console.log(`username is ${kucbhi.username} and price is ${kucbhi.price}`)
}

// handleObject(user)
handleObject({
    username : "sam",
    price : 40002
})


const myNewArray = [300, 400, 600, 100]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300, 400, 600, 100]));
