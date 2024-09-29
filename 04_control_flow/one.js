// // if 

// const temperature = 50;

// if ( temperature == 50){
//   console.log("less than 50 ");
// }else{
//   console.log("temperature is greater than 50");
// }
// console.log("Execute");


// const score = 200;

// if(score == 200){
//   const power = "fly";
//   console.log(`user power:  ${power}`);
// }

// const balance = 1000;
// // if(balance > 500) console.log("yes"); 

// if(balance < 500){
//   console.log("less than 500");
// }else if(balance < 750){
//   console.log("less than 750");
// }else if(balance < 850){
//   console.log("less than 850");
// }
// else{
//   console.log("less than 1200");
// }

const userLoggedIn = true
const debitcard = true
const loggedInFormGoogle = true 
const loggedInFormEmail = true

if (userLoggedIn && debitcard && 2==2 ){     // && means OR checked two condition true or false
  console.log("allow to buy the score");
}
if (loggedInFormGoogle || loggedInFormEmail){  // symbol || use for checked multiple condition
    console.log("user logged in ");
}
