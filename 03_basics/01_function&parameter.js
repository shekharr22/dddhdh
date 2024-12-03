
function sayMyName() {
  console.log("S");
  console.log("H");
  console.log("E");
  console.log("K");
  console.log("H");
  console.log("A");
  console.log("R");
}

// sayMyName()

function addTwoNumbers(number1, number2){        // (number1, number2) ~ Parameter
      // let result = number1 + number2;
      // return result;
       return  number1 + number2;
}

const result = addTwoNumbers(5, 6)  // (5, 6) ~ argument

// console.log("result:", result);

function loginUserMessage(username){
  if (!username){
     console.log("Please enter a username");
     return
  }
  return `${username} just logged in`
}

// console.log(loginUserMessage("shekhar"));
console.log(loginUserMessage())