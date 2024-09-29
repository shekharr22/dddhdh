 var c = 300  // global scope
 let a = 300
if (true){
  let a = 10 
  const b = 20 // block scope
  // console.log("INNER: ", a);
}
// console.log(a);
// console.log(b);
// console.log(c);


function one(){
  const username = "shekhar"

  function two(){
    const website = "youtube"
    // console.log(username);
  }
  // console.log(website);

  two()

}

// one();

if (true){
  const username = "shekhar"
  if(username === "shekhar") {
    const website = "youtube"
    // console.log(username + website);
  }
  // console.log(website);
}

// console.log(username); 



// ++++++++++++++++++++++ interesting ++++++++++++

console.log(addone(5))

function addone(num){
  return num + 1
}


const addTwo = function(num){
  return num + 2 
}

addTwo(5)
