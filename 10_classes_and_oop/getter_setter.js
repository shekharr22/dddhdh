 class User {
    constructor(username, email, password){
        this.username = username
        this.email = email;
        this.password = password
    }

    get username(){
        return this._username.toUpperCase()
    }
    set username(value){
        this._username = value
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
         this._email = value
    }

    get password(){
        return this._password
    }
    
    set password(value){ 
        this._password = value
    }
       
 } 

 const shekhar = new User("maxshekhar","s@shekhar.ai", "123")
console.log(shekhar.username);
console.log(shekhar.email);
console.log(shekhar.password);
 