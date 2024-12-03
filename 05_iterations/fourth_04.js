// for in loop >> for object ,,, for of >> for Array  

const myObject = {
   js: 'javascript',
   cpp: 'c++',
   rb: "ruby",
   swift: "swift by apple"

}
for (const key in myObject) {
  // console.log(`${key} shortcut id for ${myObject[key]}`);
}

const myArr = ["js", "cpp", "java", "rb"]
for (const key in myArr) {
  // console.log(myArr[key]); // [key] get value by default myarry only get index value
}

// Map is not iterable not in loop 

// const map = new Map()
// map.set("IN", "India")
// map.set("USA", "United States of America")
// map.set("Fr", "France")

// for (const key in map) {
//   console.log(key);
// }


