const name = "Preeti"
const repoCount = 50

// console.log(name + repoCount + "rai");   // not a goo way

// console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String (`Preeticute`)

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(8)); // charAt is used for at this index value what is your character.
// console.log(gameName.indexOf(`e`));

const newString = gameName.substring(0,5)
// console.log(newString);

const anotherString = gameName.slice(-9,5)
// console.log(anotherString);

const newStringOne = "   shreeji  "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "http://preet.com/products1222"
console.log(url.replace(`12`, `-`))

console.log(url.includes(`preet`))

console.log(gameName.split(``));


