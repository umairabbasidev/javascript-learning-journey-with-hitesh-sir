// event types , timestamp,defaultPrevented, target, toElement , srcElement , currentTarget
// clientX,Y ofSet,screenX,Y
// altKey ctrlkey, shiftkey

// let owl = document.getElementById("owl");
//  owl.onclick = ()=>{
//  alert("Owl Clicked")
// }
// ye apraoch bhi theek ni hn is mai hamin zada information nahi milti . features kam milte hn

// event listinoer use krne chaye os main hamin propogation ki capability milti hn

// owl.addEventListener(
//   "click",
//   (e) => {
//     console.log(e);
//   },
//   false
// );

// event propogation two context
// event bubbling  third argument of addEventListener which is false by default
// event capturing   third argument of addEventListener which is true self

// event bubbling

// document.getElementById("images").addEventListener(
//   "click",
//   function () {
//     console.log("clicked inside the ul");
//   },
//   false
// );

// document.getElementById("owl").addEventListener(
//   "click",
//   function () {
//     console.log("owl clicked");
//   },
//   false
// );

// owl clicked
// clicked inside the ul  // because of event bubbling

// event capturing

// document.getElementById("images").addEventListener(
//  "click",
//  function () {
//    console.log("clicked inside the ul");
//  },
//  true
// );

// document.getElementById("owl").addEventListener(
//  "click",
//  function () {
//    console.log("owl clicked");
//  },
//  true
// );

// clicked inside the ul // beacuse of event capturing . top to bottom
//  owl clicked

// stop propagation

// document.getElementById("images").addEventListener(
//  "click",
//  function (e) {
//    console.log("clicked inside the ul");

//  },
//  false
// );

// document.getElementById("owl").addEventListener(
//  "click",
//  function (e) {
//    console.log("owl clicked");
//  e.stopPropagation()
//  },
//  false
// );

// prevant default

// document.getElementById("google").addEventListener("click", (e) => {
//   console.log("google clicked", Math.random());
//   e.preventDefault();
// });

// let li = document.querySelectorAll("li");

// .addEventListener("click",()=>{

// });
// li.forEach((li)=>{
// // console.log(li)
// li.addEventListener('click',()=>{
//  li.remove()
// })
// })

// console.log(li);
// another approach

let images = document.querySelector("#images");

images.addEventListener("click", function (e) {
  // console.log(e.target.parentNode);

  if (e.target.tagName === "IMG") {
    let removeIt = e.target.parentNode;
    removeIt.remove();

    console.log(removeIt);
  }

  // console.log(removeIt);
  // console.log(removeIt.parentNode.removeChild(removeIt))
});
// console.log(images);
