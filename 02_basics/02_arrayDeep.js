const marvel_heroes = ["captionamerica", "thor", "ironman"]

const dc_heroes = ["batman", "superman", "flash"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);

const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4,5], 6, [6, 7, 8, [4, 5]]]

const all_another_arry = another_array.flat(Infinity)
// console.log(all_another_arry);

// all value converted to array

// console.log(Array.isArray("preet"));
// console.log(Array.from("preet"));
console.log(Array.from({name:"preet"})); // instresting because it gives null means => []

let num1 = 100
let num2 = 200
let num3 = 300

console.log(Array.of(num1, num2, num3));
