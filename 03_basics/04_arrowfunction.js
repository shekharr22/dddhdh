const user = {
  username : "shekhar",
  price : 999,

  welcomeMessage: function(){
    console.log(`${this.username} , welcome to  website`); // this. current context
    
  }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this) // in browser ouput will be "window"

// function chai(){
//   let username = "shekhar"
//   console.log(this.username);
// }

// chai()

//  const chai = function (){
//   let username = "shekhar"
//   console.log(this.username);
// } 
 
// function chai(){
//   let username = "shekhar"
//   console.log(this.username);
// }

const chai = () => {
  let username = "shekhar"
  console.log(this.username);
}
// chai()

// const addTwo = (num1, num2) => {
//   return num1 + num2 
// }
// console.log(addTwo(5, 3));

// const addTwo = (num1, num2) =>  num1 + num2 
// console.log(addTwo(5, 3));

// const addTwo = (num1, num2) =>  (num1 + num2)
// console.log(addTwo(5, 3));

const addTwo = (num1, num2) =>  ({username : "shekhar"})
console.log(addTwo(5, 3));