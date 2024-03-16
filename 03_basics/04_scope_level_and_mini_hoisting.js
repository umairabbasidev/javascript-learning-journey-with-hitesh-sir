function one() {
  const userName = "Umair";
  function two() {
    const website = "youtube";
    console.log(userName); // Umair
  }
  // console.log(website)  // error
  // two();
}
// one();

if (true) {
  let userName = "Umair";
  if (true) {
    let website = "Youtube";
    // console.log(userName); // Umair
  }

  // console.log(website); // error
}

// ************* intresting

function addOne(value) {
 return value + 1;
}
console.log(addOne(5));


const addTwo = function (num) {
 return num + 2;
};
console.log(addTwo(5)); 

