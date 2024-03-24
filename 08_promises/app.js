// const promiseOne = new Promise((resolve, reject) => {
// Do an async task
// DB calls, cryptography, netwrok
//   setTimeout(() => {
//     console.log("Async task is complete");
//     resolve();
//   }, 1000);
// });
// promiseOne.then(() => {
//   console.log("Promise consumed");
// });

// new Promise((resolve,reject) => {
//   setTimeout(() => {
//     console.log("Async task 2 is completed");
//     resolve()
//   },3000);
// }).then(()=>{
//  console.log("Promise 2 comsumed")
// });

// third promise

// const thirdPromies = new Promise((resolve,reject)=>{
//  setTimeout(()=>{
//   resolve({name:"Umair Abbbasi",age:21,skill:"Developer"})
//  },2000)
// })

// thirdPromies.then((user)=>{
// })

// fourth promise

// const fourPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ name: "Umair Abbbasi", age: 21, skill: "Developer" });
//     } else {
//       console.log("ERROR: something went wrong");
//     }
//   }, 2000);
// });
// fourPromise
//   .then((user) => {
//     console.log(user);
//     return user.name;
//   })
//   .then((name) => {
//     console.log(name);
//   })
//   .catch((error) => {
//     console.log(error);
//   }).finally(()=>{
//    console.log("The promise is either is resolve or rejected")
//   });

// promiseFive

// let fivePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ name: "Umair Abbasi", skill: "Deveoper" });
//     } else {
//       reject("Error: js went wrong");
//     }
//   }, 1000);
// });

// async function consumePrmiseFive() {
//   try {
//     let response = await fivePromise;
//     console.log(response);
//   } catch (error) {
//    console.log(error)
//   }
// }

// consumePrmiseFive();

// async function users() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(response);

//     let convetData = await response.json();
//     console.log(convetData);
//   } catch (error) {
//     console.log("E",error);
//   }
// }

// users();

// let usersPromise = new Promise((resolve ,reject)=>{
// resolve()
// })
let response = fetch("https://jsonplaceholder.typicode.com/users");

response
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
