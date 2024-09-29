// Immediately Invoked Function Expressions (IIFE)
// use for Function execute immediately or remove the global scope polution

(function chai(){
  console.log('DB CONNECTED');
})();

(() => {
  console.log('DB CONNECTED TWO');
}) ();

( (name) => {
  console.log(`DB CONNECTED TWO ${name}`);
} ) ('shekhar')