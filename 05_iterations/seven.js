const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filtering an array of product to find those are in stock 
const newNums = myNums.filter((item) => {
  return item <= 5;
});

console.log(newNums);

//example

const product = [
  { name: "laptop", instock: true },
  { name: "mobile", instock: false },
  { name: "iphone", instock: true },
];
const inStockProducts = product.filter((product) => product.instock);
console.log(inStockProducts);

// Map => converting an array objects representing users to an array of their names
const newNum = myNums.map((item) => item <= 5);
console.log(newNum);


const newnums = myNums.map((item) => item * 2 )
console.log(newnums);

// chaining = refers to the practice of calling multiple methods on the same object consecutively in a single statement.
const newnumss = myNums
                      .map((item) => item * 2 )  
                      .map((item) => item + 1 )
                      .filter((item) => item >= 9 )
console.log(newnumss);





