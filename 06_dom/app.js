// getting element by id and some methods

// let target = document.getElementById("title").id
// console.log(target) // title
// let target = document.getElementById("title").className
// console.log(target) // dom-heading
// let target = document.getElementById("title").getAttribute('id')
// console.log(target) // title
// let target = document.getElementById("title").getAttribute("class");
// console.log(target); // dom-heading
// let target = document.getElementById("title").setAttribute("class","dom-heading test"); // overwrite the existing class. so first we have put the existing class name then space then write other class name
// console.log(target); // dom-heading
// let target = document.getElementById("title")
// target.style.color = "blue"
// target.style.backgroundColor = "#fff"
// target.style.padding = "10px"
// console.log(target);
// let target = document.getElementById("title");
// let content = target.innerHTML // supprt html tags
// let content = target.textContent   // puri values de ga chaye os mai kuch display none bhi howi ho gi wo bhi de ga
// let content = target.innerText  // serif wo text ho ga jo visible ho.
// console.log(content);

// querySelector
// querySelector

// let target = document.querySelector("h2") // only give first one
// let target = document.querySelector("#title") // only give first one
// let target = document.querySelector(".dom-heading") // only give first one

// let target = document.querySelector("input[type=password]");
// let target = document.querySelector("input[type=text]");

// const secondLi = document.querySelector("li:nth-child(2)")
// const secondLi = document.querySelector("li:first-child")
// const secondLi = document.querySelector("li:last-child")
// console.log(secondLi)

// querySelectorAll
// let allLi = document.querySelectorAll("li");

// allLi.forEach((li) => {
//   li.style.color = "red";
//   li.style.listStyle = "none";
// });
// console.log(allLi);
// note : querySelectorAll return krta h nodeList or nnodeList array jasa hota h pr complted array ni hota agar hamin filter ya map use krna ho to hum ose phele convert kre gay array mai then use kre gay . or hum forEach use kr sakte hn

let h = document.getElementsByClassName("dom-heading");
// h[0].style.color = "red"
let convertH = Array.from(h);
// convertH.forEach((h) => (h.style.color = "red"));
console.log(h);
console.log(convertH);
