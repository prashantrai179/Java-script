// Object throw singleton and with the help of construtor

// const tinderuser = new Object() // this is singleton object
const tinderuser = {}   // this is not a singleton object

tinderuser.id = "12232"
tinderuser.name = "thor"
tinderuser.location = "Itily"

// console.log(tinderuser);

const regularUser = {
    email: "thoramerica.com",
    name: {
        fullName: {
            firstname : "thor",
            lastname : "bolt"        }
    }
}

// console.log(regularUser.name.fullName.firstname);

// key - number, value- String

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}
const obj4 = {7: "a", 8: "b"}

// const obj3 = {obj1, obj2}

// const objfinal = Object.assign({}, obj1, obj2, obj3, obj4) // {} => this act as a traget and remaining act as a source

const objfinal = {...obj1, ...obj2, ...obj3} // spread datatype
// console.log(objfinal);

const user = [
    {
        user : 1,
        email: "p@gamil.com" 
    },
    {
        user : 1,
        email: "p@gamil.com" 
    },
    {
        user : 1,
        email: "p@gamil.com" 
    }
]

user[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));

// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('location'));


// Object de-structure

const course = {
    coursename : "coding",
    price : "999",
    courseInstructor : "preet"
}

// course.courseInstructor

const {courseInstructor : instructor} = course  // this is called object de-structure means - {}.

// console.log(instructor); 

// when JSON call APIs

// 1st form
// {
//     "name" : "preet"
//     "address" : "Bhopal"
// }

// 2 form
// [
//     {},
//     {},
//     {}
// ]

