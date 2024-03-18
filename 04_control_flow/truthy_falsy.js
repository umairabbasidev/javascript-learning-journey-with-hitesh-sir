// const userEmail = "0";
// if (userEmail) {
//   console.log("Got user email");
// } else {
//   console.log("Not found");
// }

// falsy values
// false
// 0
// ""
// null
// undefined
// -0
// 0n Bigint
// NaN

//  truthy values
// []
// true
// []
// {}
// 1
// "0"
// 'false'
// " "
// function(){}

// let emptyArry = []
// if (emptyArry.length ===0) {
//  console.log("array is empty")
// }

// let emptyObj = {}
// if (Object.keys(emptyObj).length ===0) {

//  console.log("object is empty")
// }

// not importat

// false == 0 true

// false == "" true

// 0 == "" true

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
// console.log(val1);

val1 = null ?? 10;
console.log(val1); // 10

val1 = undefined ?? 20;
console.log(val1); // 20

val1 = null ?? 40 ?? 20;
console.log(val1); // 40

// null or undefined ke case mai second wli value le ga

// ternoary operator

// condition ? true:false

let totalMarks  =  10;
let obtainedMarks = 5;

let result = obtainedMarks >= 5 ? "Gongrats: Pass" :"Fail"  
console.log(result) 


