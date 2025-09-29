// this => current context ko refer karta hai

const user = {
    username : "Preet",
    price :  99,

    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to Website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "Raj"
// user.welcomeMessage()

// console.log(this);


// ================= Arrow function ==================

// declaring arrow function in different ways

// function codi(){
//     let username = "preet"
//     console.log(this); 
// }
// codi()


// function codi(){
//     let username = "preet"
//     console.log(this.username); 
// }
// codi()


// const codi = function(){
//     let username = "preet"
//     console.log(this.username); 
// }
// codi()

const codi = () => {
    let username = "preet"
    console.log(this.username); 
}
// codi()


// const addOne = (num1, num2) => {
//     return num1 + num2             //  basic arrow function
                                      //  explicit return
// }

// const addOne = (num1, num2) =>  num1 + num2     // inplicit return

// const addOne = (num1, num2) =>  (num1 + num2) 

const addOne = (num1, num2) =>  ({username: "preet"})   // object return

console.log(addOne(2,4));



