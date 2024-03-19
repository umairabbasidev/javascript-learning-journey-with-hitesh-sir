// forEach loop

let coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function(val){
// console.log(val)
// })

// let val = coding.forEach((item) => {
//   console.log(item);
// });

// console.log(val) // undefined

// first created  function then pass the reference  in foreach loop it is also fine
// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe);

let val = coding.forEach((item, index, array) => {
  // console.log(item,index,array)
  let data = item;
  return data;
});

// console.log(val)  // undefined

let myCoding = [
  {
    languageName: "javascript",
    languageFileName: "javascript",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "pyhton",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageFileName);
});
