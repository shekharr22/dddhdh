// ... rest or spread
function calculateCartPrice(...num1){
  return num1
}

// console.log(calculateCartPrice(200, 400, 600, 700));

const user = {
  username : "shekhar",
  prices : 999
}

function handleObject(anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
  username : "sam",
  price : 399
})

const mynewArray = [200, 300, 400, 500]
    function returnSecondValue(getArray){
      return getArray[2]
    }

console.log(returnSecondValue(mynewArray));