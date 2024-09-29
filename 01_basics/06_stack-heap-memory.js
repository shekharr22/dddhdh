// Stack (Primitive),   Heap (Non-Primitive)

let myYoutubename = "shekhardev2025.com"

let anothername = myYoutubename
anothername = "shekhardev"

console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email:"user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "shekhar@google.com"

console.log(userOne.email);
console.log(userTwo.email);
