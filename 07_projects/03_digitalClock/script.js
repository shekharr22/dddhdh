const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

// The setInterval method = in JavaScript is used to repeatedly execute a specified function or block of code at fixed time intervals. It continues to call the function until it is stopped using clearInterval().

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString()
}, 1000);