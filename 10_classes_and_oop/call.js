function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called")
}

function createUser(username, email, password){
   SetUsername.call(this, username) // .call for reference hold
   this.email = email
   this.username = username
   this.password = password
}

const chai = new createUser("chai", "shekharjadhav501@gmail.com", "123")
console.log(chai)








