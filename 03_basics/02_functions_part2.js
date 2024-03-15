// console.log("Hello")

// rest operator for e-commerece website or shopping cards

// function calculateCartPrice(...num1) {
//   return num1;
// }

// let result = calculateCartPrice(200, 300, 400, 500,1000);
// console.log(result);  // [200, 300, 400, 500, 1000]

// function calculateCartPrice(val1, val2, ...num1) {
//   return num1;
// }

// let result = calculateCartPrice(200, 300, 400, 500, 1000);
// console.log(result); //  [400, 500, 1000]

// pass object in function and use

// let user = {
//  name:"umair",
//  skill:"Developer"
// }

// function handleObj(anyObject){
// return `Name is ${anyObject.name} and Skill is ${anyObject.skill}`
// }

// const result = handleObj(user)

// console.log(result)

// handle object in arguments

// function handleObjArg(myObj) {
//   return `username is ${myObj.name} and skill is ${myObj.skill}`;
// }

// let result = handleObjArg(
//   (myObj = {
//     name: "Umair Abbasi",
//     skill: "Developer",
//   })
// );

// console.log(result);

// handle arrray in function

// let myArray = ["laptops", 10, "cell-phones", 20];

// function handleArray(anyArray) {
//   return `Quantity of ${anyArray[0]} are ${anyArray[1]} and the Quantity of ${anyArray[2]} are ${anyArray[3]}.\nok we will check it out and latter respond you.`;
// }

// const result = handleArray(myArray)
// console.log(result)

// handle array in arrgument

function handleArrArg(anyArray) {
 return `Quantity of ${anyArray[0]} are ${anyArray[1]} and the Quantity of ${anyArray[2]} are ${anyArray[3]}.\nok we will check it out and latter respond you.`;
}

const result = handleArrArg(["laptops", 5, "cell-phones", 10])


console.log(result)