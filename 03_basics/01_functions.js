// console.log("Hello")
function sayMyName() {
  console.log("u");
  console.log("m");
  console.log("a");
  console.log("i");
  console.log("r");
}
// sayMyName()

// function addTwoNumbers(number1,number2){
// console.log(number1 + number2)
// }

// const result = addTwoNumbers(5,5)  // 8
// console.log(result) // undefined

// function addTwoNumbers(number1,number2){
//  let result =  number1 + number2
//  return result
//  }

//  const result = addTwoNumbers(5,5)
//  console.log(result) // 10

// function addTwoNumbers(number1,number2){
//  return number1 + number2
//  }

//  const result = addTwoNumbers(5,5)
//  console.log(result) // 10

function userLoggenMessage(username) {
  if (username === undefined) {
    return "please enter a username";
  }
  return `${username} just logged in`;
}

// let result = userLoggenMessage("Asadullah Abbasi")
// let result = userLoggenMessage(); // please enter a username
// let result = userLoggenMessage("Umair"); // Umair just logged in
// console.log(result);

// function userLoggenMessage(username) {
//  if (!username) {
//   console.log(!username)
//    return "please enter a username";
//  }
//  return `${username} just logged in`;
// }

// let result = userLoggenMessage(0,null,undefined,"",false)  //  "please enter a username
// let result = userLoggenMessage("umair")  //  umair just logged in
// console.log(result)

// The function userLoggenMessage takes one parameter called username.
// Inside the function, it checks if username is not provided or is empty. This is done using the !username condition. The ! symbol means "not". So !username checks if username is falsy (like null, undefined, 0, false, or an empty string).
// If username is not provided or empty, it logs true when checking !username (because ! converts any truthy value to false and vice versa), then it returns the message "please enter a username".
// If a username is provided, it returns a message saying that the user just logged in, using the provided username.
// Finally, the function is called with no arguments (userLoggenMessage()), so it will return "please enter a username" because the !username condition inside the function will be true due to the absence of an argument.
// The result is then logged to the console.
// So, overall, this code is a simple function that checks if a username is provided, and if not, it asks the user to enter one. If a username is provided, it logs a message saying that the user just logged in.

function userLoggenMessage(username = "someOne") {
  if (!username) {
    console.log(!username);
    return "please enter a username";
  }
  return `${username} just logged in`;
}

// let result = userLoggenMessage()  // someOne just logged in
let result = userLoggenMessage("Umair"); // Umair just logged in
console.log(result);
