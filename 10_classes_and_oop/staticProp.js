class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){    //static 
        return `123`
    }
}

const shekhar = new User("shekhar")
// console.log(shekhar.createId());

class teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new teacher("iphone", "i@phone.com")
console.log(iphone.createId());





