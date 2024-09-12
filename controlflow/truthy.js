const email= [] //""   //"sark@gmail.com"

if (email) {
    console.log("got user email");
} else {
console.log("email not found");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (email.length==0) {
//     console.log("email is empty");
    
// }


const emptyobj = {}

if (Object.keys(emptyobj)==0) {
    console.log("object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1= 5??10
// val1= null ?? 10
// val1=undefined ?? 15
val1= null?? 10 ?? 20
val1= null ?? undefined ?? 13

console.log(val1);

// Terniary Operator    ////in this ?? means and work different from NCO

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
