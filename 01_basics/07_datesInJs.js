// Dates

let myDate = new Date()
// console.log(myDate); // it is not readable
// console.log(myDate.toString()); // this is readable

// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())

// console.log(typeof myDate);

// let newCreatedDate = new Date (2004, 11, 5)
// let newCreatedDate = new Date (2004, 11, 5, 4,5)
let newCreatedDate = new Date ("2004-11-5")

// console.log(newCreatedDate.toLocaleString());

let myTimeStamp = Date.now

// console.log(myTimeStamp());
// console.log(newCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date

// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth());

newDate.toLocaleString('default', {
       weekday: "long"
})
