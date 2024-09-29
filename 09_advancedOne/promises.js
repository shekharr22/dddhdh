let promise = new Promise(function(resolve, reject) {
    alert("Hello")
    resolve(56)
})


console.log("Hello One")
setTimeout(function(){
    console.log("Hello Two")
}, 2000)

console.log("Hello Three");
console.log(promise);
