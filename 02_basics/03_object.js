// Singleton

// Objects literals

const mysym = Symbol("key1")

const user = {
    name : "preet",
    fullname : "preeti rai",
    age : 19,
    [mysym] : "mykey12",
    gmail : "preet@google.com",
    location : "bhopal",
    isLoggedIn : true,  
}

// console.log(user.age); // not a good way to access objects
// console.log(user["age"]);
// console.log(user["fullname"]);
// console.log(user[mysym]);

user.gmail = "ppppp@gemini.com"
// Object.freeze(user)
user.gmail = "rrrrrrr@gemini.com"
// console.log(user);

user.greeting = function () {
    console.log("Hii preet i am here");
};


user.greetingTwo = function () {
    console.log(`Hii preet i am here, ${this.gmail}`);
};

console.log(user.greeting());
console.log(user.greetingTwo());

