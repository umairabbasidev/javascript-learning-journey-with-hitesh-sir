// IIFE Immediately Invoked Function Expressions

function one() {
  console.log("DB CONNECTED");
}
one();

// when we need to invoked function immediately so we use IIFE

(function two(name) {

 // named iife 
  console.log("SECOND DB CONNECTED USING IIFE");

})();

const three = (() => {
  // named iife 
  console.log("DB CONNECTED IN ARROW FUNCTION");
})();


((name)=>{
 // simple iife 
 console.log(`${name}, Welcome to website`)
})("Umair Abbasi")

// why we use iife
// global scope ke pollution se bachne ke liye problem hoti h to os se banchne ke liye IIFE use krte hn
// important note: jab bhi two iife ek sath likhte hn to explicitly semisollon lagana perhta h other wise error through ho ga


