// Two types of memory
// Stack(all primitive), Heap(non-primitive)

let myYoutubeName = "umairdotcom";
let anotherYoutubeName = myYoutubeName;

anotherYoutubeName = "umairabbasidotcom";
// console.log(myYoutubeName);
// console.log(anotherYoutubeName);

let userOne = {
  name: "Muhammad Umair Abbasi",
  email: "umair@goggledotcom",
  Position: "CEO",
};

let userTwo = userOne;
userTwo.name = "Uzair Abbasi"
console.log(userOne.name); // Uzair Abbasi
console.log(userTwo.name); // Uzair Abbasi
