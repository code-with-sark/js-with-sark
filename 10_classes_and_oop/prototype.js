let myname= "sark      "
let mygit= "sarky"

// console.log(myname.length);
// console.log(myname.trueLength);

let myheros= ["thor", "spiderman"]

let heropower= {
    thor: "hammer",
    spiderman: "sling",

    getspiderpower: function(){
        console.log(`spiderman power is ${this.spiderman}`);
    }
}
// console.log(getspiderpower);

Object.prototype.sark = function(){
    console.log(`Sark is present in all objects`);
}

Array.prototype.heysark = function(){
    console.log(`Sark says hello`);
}

// heropower.sark()
// myheros.sark()

// heropower.heysark()
// myheros.heysark()


// inheritance

const user = {
    name: "Sark",
    email: "sark@king.com"
}

const teacher= {
    makevideo: true
}

const teachingsupport= {
    isavailable: false
}

const TAsupport= {
    makeassignment: 'js assignment',
    fulltime: true,
    __proto__: teachingsupport
}

teacher.__proto__ = user

//modern syntax
Object.setPrototypeOf(teachingsupport, teacher)

let anotherusername = "modak    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
}

anotherusername.trueLength()
"sark".trueLength()
"icetea    ".trueLength()