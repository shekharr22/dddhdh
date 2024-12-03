// new  - use for create new instance while not use the problem override the function

const user = {
    username : "shekhar",
    loginCount : 8,
    signedIn: true,
       
    getUserDetails: function() {
        // console.log("Got User details form database");
        console.log(this)
    }
} 
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)

function User(username,  signedIn, loginCount){
    this.username = username;
    this.signedIn = signedIn;
    this.loginCount = loginCount

    this.greeting = function(){
        console.log(`welcome ${username}`);
    }
    return this 
}

const userOne = new User("shekhar", 12, true)
const userTwo = new User("sarthak", 8, false)
console.log(userOne.constructor)
// console.log(userOne);
// console.log(userTwo);


