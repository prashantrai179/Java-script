// for-each loop

const coding = ["js", "rb", "py", "cpp", "java"]

// coding.forEach(function (item) {
//     console.log(item); 
// }) 
         // OR 

// coding.forEach((item) => {
//     console.log(item);
// })
         // OR

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
    
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageFileName);
    
} )