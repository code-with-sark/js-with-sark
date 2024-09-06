// singleton(constructor)

// const tinderuser = new Object{}

const tinderuser = {}

tinderuser.id=  "pro-gamer"
tinderuser.name= "sam"
tinderuser.isloggedin=  false

// console.log(tinderuser);

const newuser = {
        email: "sark@king.com", 
        name: {
            fullname: {
                firstname: "sougota",
                lastname: "sark",
            }
        }
}

// console.log(newuser.email);
// console.log(newuser.name.fullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4= {obj1, obj2, obj3}
// const obj4= Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1,...obj2,...obj3} //(spread)you will use this syntx much more as its used much nowadays

// console.log(obj4);

const user= [
    {
        id: 1,
        email: "dummy@dum.com"
    },

    {
        id: 2,
        email: "dot@co.in"
    },

    {
        id: 3,
        email: "com@dot.in"
    }

    
    
]

// console.log(user[0].email);

// console.log(tinderuser);
// console.log(Object.keys(tinderuser)); 
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('name'));


const course ={
    coursename: "javascript",
    price: "999",
    courseinstructor: "sark"
}

// console.log(course.courseinstructor);

    const {courseinstructor: instructor} = course //realname :givenname :-this is called de-structure which assign a givenname to short it

// console.log(courseinstructor);
console.log(instructor);


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]