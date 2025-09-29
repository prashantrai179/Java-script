// Immediately Invoked Function Expression

// global scope ke variable or pollution ko hatane ke liye iife use karte h 

(function chai(){
    
    console.log(`db connected`);
    
})();

( () => {
    console.log(`db connected two`);
})();

( (name) => {
    console.log(`db connected two ${name}`);
})(`preet`)