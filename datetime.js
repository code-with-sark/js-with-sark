// date

let mydate=new Date()
// console.log(mydate);
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toString());
// console.log(mydate.toTimeString());
// console.log(mydate.toUTCString());
// console.log(mydate.getTimezoneOffset()); 

let myCreatedDate= new Date(2024, 12, 4, 16, 10, 25) //month always starts with 0 here
let mycdate= new Date("2024-01-5")
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());
// console.log(mycdate.toDateString());

//timestamp

let mytimestamp = Date.now()

// console.log(mytimestamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); //  /100 is done to get seconds value

let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth() +1);
console.log(newdate.getDay());

newdate.toLocaleString('default', {
    weekday: "narrow" ,
    timeZone: "IST"
})


