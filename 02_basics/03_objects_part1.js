// singleton means ye apni tarah ka ek hi object h . jab constructor se object bane ga to wo singleton obejct ho ga
// Object.create() // contructor object

const mySym = Symbol("key1");
// console.log(mySym);
// console.log(typeof mySym);

// object literals
const jsUser = {
  fName: "umair",
  [mySym]: "key1",
  "full name": "Muhammad Umair Abbasi",
  age: 21,
  location: "pakistan",
  email: "umair@google.com",
  isLoggedIn: false,
  lastLoggedInDays: ["monday", "saturday"],
};
// console.log(jsUser);
// console.log(jsUser.fName);
// console.log(jsUser["isLoggedIn"]);
// console.log(jsUser["full name"]);
// Object.freeze(jsUser) // freeze objectso no one can change the object values
// jsUser.email = "umair@ai.com";
// jsUser.abc = "Hello"; // adding new values in obj
// delete jsUser.abc; // delete value in obj

// console.log(jsUser[mySym]); //string
// adding function in object
jsUser.greeting = function(){
 return "Hello Js users"
}

jsUser.greetingUserName = function(){
 // return `Hello ${jsUser['full name']}`
 return `Hello ${this['full name']}`
}
console.log(jsUser);
console.log(jsUser.greeting())
console.log(jsUser.greetingUserName())
