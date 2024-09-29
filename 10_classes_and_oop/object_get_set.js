const User = {
    _email : "s@shekhar.com",
    _password: 123,


    get email(){
         return this._email.toUpperCase()
    },
    set password(value){
     this._email = value
    } 

}

// const shekhar = new User -- new>>constructor function
// const shekhar = Object.create(user) -- object.create()>>factory function

const shekhar = Object.create(User)
console.log(User.email);
