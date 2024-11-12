//ES6

class user {
    constructor(username, email, password){
        this.username= username;
        this.email= email;
        this.password= password
    }

    encryptpassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}


const sark = new user("sark", "sark@king.com", "5621")

console.log(sark.encryptpassword());
console.log(sark.changeusername());

