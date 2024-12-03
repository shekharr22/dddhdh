let p1 = new Promise(function (resolve, reject) {
  console.log("Promise is Pending ");
  setTimeout(() => {
    console.log("I am a Promise and I am fulfilled");
    resolve(true)
  }, 5000);
});

let p2 = new Promise(function (resolve, reject) {
  console.log("Promise is Pending ");
  setTimeout(() => {
    // console.log("I am a Promise and I am rejected");
    reject(new Error("I am a Error"));
  }, 5000);
});

p1.then((value)=> {
    console.log(value)  
})

p2.catch((Error) => {
    console.log("some error ocurred in p2");
})


