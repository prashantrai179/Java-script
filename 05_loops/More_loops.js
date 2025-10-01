// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5,6,6]

// for (const num of arr) {
//     console.log(num);  
// }

const greeting = "Hello World"
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}

// Maps  -> it store unique value

const map = new Map() // map apne aap mai obj hai and in js all are objects.
map.set('IN', "India")
map.set('fr', "France")
map.set('US', "United State")
map.set('IN', "India")

// console.log(map);


for (const [key, value] of map) {
    console.log(key, ':-', value); 
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key, ':-', value); 
// }  
// Not working this forof on this above object

