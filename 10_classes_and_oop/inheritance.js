class user{
    constructor(username){
        this.username= username
    }

    logme(){
        console.log(`Username is ${this.username}`);
    }
}

class teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email=email
        this.password= password
    }

    addcourse(){
        console.log(`A new course wass added by ${this.username}`);
    }
}

const sark = new teacher("sark", "sark@king.co.in", "1539")

sark.logme()
const coffee= new user ("coffee")

coffee.logme()

console.log(sark instanceof user);



