let ul = document.querySelector(".language");

// function addLanguages(languageName) {
//   let li = document.createElement("li");
//   li.innerHTML = `${languageName}`;
//   ul.appendChild(li);
// }

// addLanguages("Java");
// addLanguages("javascripr");
// optimization issue in the  above code

function addOptimzeLanguages(languageName) {
  let li = document.createElement("li");
  let Text = document.createTextNode(languageName);
  li.appendChild(Text);
  ul.appendChild(li);
}
addOptimzeLanguages("python");
addOptimzeLanguages("typescript");
addOptimzeLanguages("golang");

// Edit

// let secondLanguage = document.querySelector("li:nth-child(2)");
// // secondLanguage.innerHTML = "Umair"  // not optimzed approach
// let li = document.createElement("li");
// li.innerText = "Umair";
// secondLanguage.replaceWith(li); // optimzed

// console.log(secondLanguage);

// one more example of edit

// let thirdLanguage = document.querySelector("li:nth-child(3)");
// let newLi = document.createElement("li");
// newLi.innerHTML = "HTML";
// thirdLanguage.replaceWith(newLi);
// console.log(newLi);
// console.log(thirdLanguage);

// one more

// const firstLang = document.querySelector("li:first-child")
// firstLang.outerHTML = "<li>Umair</li>"
// console.log(firstLang)


// remove

const lastLang = document.querySelector("li:last-child")
lastLang.remove()
console.log(lastLang)