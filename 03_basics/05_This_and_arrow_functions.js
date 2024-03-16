const user = {
  username: "Umair Abbasi",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this); // refer the currrent context
  },
};

// user.welcomeMessage();
// // console.log(user);
// user.username = "Asadullah";
// user.welcomeMessage();
// console.log(user);

// console.log(this)  // {} in node environment
// console.log(this)  // window object

// function one(){
//  // console.log(this); // global object milta  h node mai bhi or browser mai bhi

//  // let userName = "Umair";
//  // console.log(this.userName) // undefined . only work on object
// }

// one()

// const one = function(){
//  let userName = "Umair";
//  console.log(this.userName) // same result as above undefined . only work on object

// }

// one()

// arrow function

// const two = () => {
//   let userName = "Umair";
//   console.log(this.userName); // same result as above in functions undefined . only work on object
//   console.log(this)
// };

// two();

// function one(){
//  console.log("regular function this",this)
//  let userName = "umair"
//  console.log(this.userName)
// }

// one()

// const two = ()=>{
//  let userName = "Umair"
//  console.log(this.userName)
//  console.log("arrow function this",this) // give empty object in node enviornemnt
// }

// two()

// pure arrow function talk

const arrowFunWithExpliciteReturn = (num1, num2) => {
  return num1 + num2;
};

// console.log(arrowFunWithExpliciteReturn("ExpliciteReturn ", 5, 5)); // 10

// const arrowFunWithImpliciteReturn = (num1, num2) => num1 + num2;
// const arrowFunWithImpliciteReturn = (num1, num2) =>( num1 + num2);
// when return object
const arrowFunWithImpliciteReturn = (num1, num2) =>({name:"Umair",age:21});

console.log(arrowFunWithImpliciteReturn("ImpliciteReturn ", 5, 5)); // 10


// note: curly braces mai wrap kia to return likhna pre ga . or agr paranthisis mai wrap kia to return keyword ni likhna pare ga