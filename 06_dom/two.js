// access parent then find children
let parent = document.querySelector(".parent");

// console.log(parent);
// console.log(parent.children); //HTMLCollection(4) [div.day, div.day, div.day, div.day]
// console.log(parent.children[0].innerHTML); // Monday

// for (let index = 0; index < parent.children.length; index++) {
//   const element = parent.children[index];
//   element.style.color = "blue";
//   element.style.backgroundColor = "white";
//   // console.log(element)
// }

// console.log(parent.firstElementChild)
// console.log(parent.lastElementChild)

// access child then go to its parent

// let dayOne = document.querySelector(".day")
// console.log(dayOne)
// console.log(dayOne.parentElement)
// console.log(dayOne.nextElementSibling)
console.log("NODES", parent.childNodes);
// S NodeList(11) [text, comment, text, div.day, text, div.day, text, div.day, text, div.day, text]
