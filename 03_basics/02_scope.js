// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);


//var c = 300       // global scope

if(true){
    let a = 10
    const b = 20
}                  // block scope

// console.log(a);
// console.log(b);
// console.log(c);


let a = 300
if(true){
    let a = 10
    const b = 20
    // console.log("INNER", a);
}  

// console.log(a);


// nested 

function one(){
    const username = "Preet"

    function two(){
        const teacher = "youtube"
        console.log(username);
    }
    // console.log(teacher);  //out of scope
    
    two()
}
// one()


//--------------------------- Intresting -----------------------------

// console.log(addone(5));

// function addone(num){
//     return num + 1
// }


addtwo(5)

const addtwo = function(num){
    return num + 2
}

