const score = 400;

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // convert the input value with indian form like 1000000>>10,00,00

// //............Math................

console.log(Math)
console.log(Math.abs(-8)) 
console.log(Math.round(2.4)) 

console.log(Math.ceil(2.2)) 
console.log(Math.floor(2.6)) 
console.log(Math.sqrt(25)) 

console.log(Math.min(2,3,4,5))
console.log(Math.max(2,3,4,5))

console.log(Math.random());
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log (Math.floor(Math.random() * (max - min + 1)) + min)














