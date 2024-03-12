// console.log("concept of numbers and maths in javascript")

// **************** Numbers ******************

// const score  = 400;
// console.log(typeof score)

// let convertValue = score.toString()
// console.log(typeof convertValue)
// now this convert into string then we have used string methods as well to done our work
// console.log(convertValue.length) // 3
// console.log(score.toFixed(2)) //  400.00
// console.log(score.toFixed(1)) // 400.0

// const otherNumber = 23.8566;
// console.log(otherNumber.toPrecision(3))// 23.9
// const otherNumber = 123.8566;
// console.log(otherNumber.toPrecision(3)) // 124
// const otherNumber = 1223.8566;
// console.log(otherNumber.toPrecision(3)) // 1.22e+3

// let hundreds = 1000000;
// console.log(hundreds.toLocaleString()) // 1,000,000
// console.log(hundreds.toLocaleString('en-in')) // 10,00,000
// const balance = new Number(500)
// console.log(typeof balance)


// **************** Maths ********************

// console.log(Math);
// console.log(Math.abs(-4)) // 4  only convert nagetive value in to postive sign
// console.log(Math.round(4.4))  4// jase hi decimalke bad 5 ho ga wo ose increase kr de ga other wise wo same hi nu,ber show kre ga jo decimal se phele h

// console.log(Math.ceil(4.1)) // 5  zara se bhi decimal value se zada ho ga to top wala use kro ga
// console.log(Math.floor(4.9)) // 4

// console.log(Math.sqrt(25))// 5

// console.log(Math.min(10,19,54,6,50,60,80)) // 6
// console.log(Math.max(10,19,54,98,50,60,80)) // 98


// console.log((Math.random()*10)+1)  // values between 0 and 1 inclusive
// console.log(Math.floor((Math.random()*10)+1))  // values between 0 and 1 inclusive

let min = 10
let max = 20;
console.log(Math.floor(Math.random() * (max-min) + 1 )+ 10)