const num = [1, 2, 3];

// const myTotal = num.reduce((acc, currVal) => {
//   console.log(`acc:${acc} and  currVal:${currVal}`);
//   return acc + currVal;
// }, 0);
// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "py course",
    price: 299,
  },
  {
    itemName: "js course",
    price: 99,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

let total = shoppingCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(total);
