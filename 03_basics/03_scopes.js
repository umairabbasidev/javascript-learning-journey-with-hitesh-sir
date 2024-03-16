// var c = 300;

let a = 300;

if (true) {
  let a = 10;
  const b = 20; // block scope
  // var c = 30;
  console.log("inner", a);
}

// console.log(a); // error
// console.log(b);  // error
// console.log(c); // 30

console.log(a);

// note  node or browser ka global scope alag alag h
