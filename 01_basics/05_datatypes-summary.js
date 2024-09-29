// primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTamp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)

const bigNumber = 32656565656565656566n


// Reference (non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj ={
    name: "shekhar",
    age : 22,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof anotherId);