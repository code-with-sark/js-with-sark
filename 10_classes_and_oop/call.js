function setusername(username){
    //complex DB calls
    this.username=username
    console.log("called");
}

function createusername(username, email, password){
    setusername.call(this, username)
    this.email= email
    this.password= password
}

const sark = new createusername("sark", "sark@king.com" , "5836")

console.log(sark);
