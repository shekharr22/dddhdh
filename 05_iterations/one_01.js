// for loop

// for (let i = 0; i < 15; i++) {
//   const element = i;
//   console.log(element);
  
// }

for (let i = 0; i < 15; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is a best number");
  }
  // console.log(element);
}

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
  for (let j = 0; j < 10; j++) {
    // console.log(`Inner loop Value: ${j} and inner loop ${i}`);
    // console.log( i + '*' + j + ' = ' + i*j);
  }
}

const myArray = ["Apple", "Mango", "Banana"]
//console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  //console.log(element);
  
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`Detected 5`);
//     break;
//   }
//    console.log(`Value of i is: ${index}`);
// }

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue;
  }
   console.log(`Value of i is: ${index}`);
}