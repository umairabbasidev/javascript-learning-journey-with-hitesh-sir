// for loop

for (let i = 0; i < 10; i++) {
  let outPut = i;
  if (outPut === 5) {
    // console.log("5 is best number");
  }
  // console.log(outPut);
}

for (let i = 1; i <= 10; i++) {
  // console.log(`Table of ${i} `);
  for (let j = 1; j <= 10; j++) {
    // console.log(`${i} x ${j} = ${i*j}`);
  }
}

// for loop with string

let str = "Umair";


for (let i = 0; i < str.length; i++) {
 const element = str[i];
//  console.log(element)
 
}



// for loop with array

let arr = ["laptops","phones",'chargers',"keyboards","mouse","tablet"]

for (let i = 0; i < arr.length; i++) {
 const element = arr[i];
//  console.log(i,element)
}


// for loop with objects

let obj = {
 name:"Umair",
 age:21,
 skill:"Developer",
 education:"BSCS"
}
// console.log(obj['education'])
let val = Object.values(obj)

// console.log(val)
// console.log(obj['name'])
let getValueFormLoop = []

for (let i = 0; i < Object.keys(obj).length; i++) {
  // console.log(i)

  // console.log(`The User ${Object.keys(obj)[i]} is ${Object.values(obj)[i]}`)
  let data = `The User ${Object.keys(obj)[i]} is ${obj[Object.keys(obj)[i]]}`
// getValueFormLoop.push(data)

}

// console.log(getValueFormLoop)


// understand break and continue keyword in js

// let myArray = ["umair","noman","ali","asad","marsad"];
// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   if (element === "asad") {
//     console.log(`Got ${element} name`)
//     break  // if condition is  match it stops the flow of loop
//   }
//   console.log(element)
// }


// let myArray = ["umair","noman","ali","asad","marsad"];
// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   if (element === "asad") {
//     // console.log(`Got ${element} name`)
//     continue   
//   }
//   console.log(element)
// }