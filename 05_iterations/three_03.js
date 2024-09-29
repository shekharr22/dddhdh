// for of 

const arr = [1, 2, 3, 4, 5]

for (const val of arr) {
  // console.log(val);
}

const greetings = "shekhar dattatray jadhav"
for (const greet of greetings) {
  if (greet === ' ') {
    // console.log(`Detected space`);
    continue;
  }
  // console.log(`Each char is ${greet}`);  
}

// Map 

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")

// console.log(map);

for (const [key, value] of map) {
  console.log(key, ':-', value ); 
}

const myObject = {
  name : "shekhar",
  id : 55,
  email : "dev2025"
}
// for (const [key, Value] of myObject) {
//   console.log(key, ':-', value);
// }

