// let myName = "shekhar "
// let myName = "shekhar "

// console.log(myName.length)

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.shekhar = function(){
    console.log(`shekhar is present in all objects`);
}

// array.prototype.heyShekhar = function(){
//     console.log(`shekhar says hello `);
    
// }

// myHeros.shekhar()
// heroPower.shekhar()
// myHeros.heyShekhar()
// heroPower.heyShekhar() 

// Inheritance 

const User = {
    name:"chai",
    email: "shekhardev2025@gmail.com"
}

const Teacher = {
  makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__= User

// Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"shekhar".trueLength()
"jadhav".trueLength()