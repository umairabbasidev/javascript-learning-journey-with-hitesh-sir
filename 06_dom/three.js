let h1 = document.createElement("h1");
h1.setAttribute("class", "heading");
h1.setAttribute("title", "myTitle");
h1.id = Math.floor(Math.random() * 10 + 1);
h1.style.color = "blue";
h1.style.textAlign = "center";
// h1.innerHTML = "<h3>Muhammad Umair Abbasi</h3>"; 
let text = document.createTextNode("Muhammad Umair Abbasi"); // moreoptimization as above
h1.appendChild(text);
// document.body.appendChild(h1)

let img = document.createElement("img");
img.className = "my-img";
img.src = "https://umairabbasi.netlify.app/images/umair-img.png";
img.style.width = "200px";
img.style.display = "block";
img.style.margin = "0 auto";
img.style.borderRadius = "100%";
img.style.border = "2px solid blue";

console.log(img);

let div = document.createElement("div");

div.appendChild(h1);
div.appendChild(img);
div.id = "main";
document.body.appendChild(div);
console.log(div);

console.log(h1);
