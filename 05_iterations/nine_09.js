// Reduce

const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc value is ${acc}, currval value is ${currval}`);  
//   return acc + currval
// },0)
// console.log(myTotal);

// with arrow function

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0 )
console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js Course",
    price: 2999
  },
  {
    itemName: "Mob Dev Course",
    price: 2999
  },
  {
    itemName: "Data Sacience Course",
    price: 12999
  },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price ,0)
console.log(priceToPay);
