const number= [1,5,2,36,9,54,87]

// const mynum= number.map( (num) => {return num+10})
const mynum = number
                .map( (num) => {return num+10})
                .map( (num) => {return num*10})
                .filter( (num) => { return num>100 && num<200})

console.log(mynum);
