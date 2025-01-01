// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "shekhar03"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
  email : "dev@gmail.com",
  fullname : {
    userfullname : {
      firstname : "Shekhar",
      lastname : "Jadhav",
    }
  }
}

// console.log(regularUser.fullname.userfullname.firstname); // nested property . . .

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}
// const obj3 = Object.assign({}, obj1, obj2, obj4 )

const obj3 = {...obj1, ...obj2, ...obj4}; // ...obj1, etc spread function merge two array or object
console.log(obj3);

const user = [
 {
   id : 4,
   email : "shekharjadhav@gmail.com",
 },
 {
   id : 4,
   email : "shekharjadhav@gmail.com",
 },
 {
   id : 4,
   email : "shekharjadhav@gmail.com",
 }
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
