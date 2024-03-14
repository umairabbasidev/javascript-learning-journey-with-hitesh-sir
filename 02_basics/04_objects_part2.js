// const tinderUser = new Object({ name: "umair", age: 21 });  // singleton object b/c we created this obj with contructor . singleton means ye apne ap mai ek hi object h
// console.log(tinderUser)

const tinderUser = {};
tinderUser.id = "123abc";
(tinderUser.name = "umair"), (tinderUser.isLoggedIn = false);
// console.log(tinderUser);

const regularUser = {
  email: "some@gamil.com",
  fullname: {
    usersFullName: {
      firstName: "umair",
      lastName: "abbasi",
    },
  },
};

// console.log(regularUser.fullname.usersFullName.firstName);

let obj1 = {
  name: "ali",
  age: 21,
  skill: "Developer",
  currentEducation: "BSCS",
};
let obj2 = {
  laptop: "Hp",
  phone: "Techno",
};

// let final = Object.assign({}, obj1, obj2);
// console.log("Using assign", final);
// let combine = { ...obj1, ...obj2 };
// console.log("using spread",combine)

let users = [
  { id: 1, email: "u@mail.com" },
  { id: 2, email: "m@mail.com" },
  { id: 3, email: "m@mail.com" },
  { id: 4, email: "a@mail.com" },
  { id: 5, email: "i@mail.com" },
  { id: 6, email: "r@mail.com" },
];

// console.log(users[0].id);
// console.log(users[5].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // all keys
console.log(Object.values(tinderUser)); // all values
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true
