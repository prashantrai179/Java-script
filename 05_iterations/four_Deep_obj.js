// for object use for-in loop

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// now describe for-in loop
// for-in loop is used for objects

for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}.`);
   
}

const programming = ["js", "rb", "py", "cpp", "java"]

for (const key in programming) {
//    console.log(key); // in for-of loop , with the help of key all data is shown but in for-in only keys is shown

   console.log(programming[key]);
   
}