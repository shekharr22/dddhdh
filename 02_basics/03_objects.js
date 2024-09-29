// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
  name: "shekhar",
  "full name": "shekhar jadhav",
  [mySym]: "mykey1", // acsses Symbol by []
  age: 18,
  location: "Jaipur",
  email: "shekharjadhav501@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "shekhardev2025@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "shekharJadhav502@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
  console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
  console.log(`Hello Js User, ${this.name}`); // 
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());