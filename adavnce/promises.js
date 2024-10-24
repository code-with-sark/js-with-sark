const promiseone= new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('async task is complete');
        resolve()
    }, 1000)
})

promiseone.then(function(){
    console.log(`promises are done`);
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    } ,2000)
}).then(function(){
    console.log('async task 2 done');
})

const promisethree= new Promise(function(resolve,reject){
    setTimeout(()=> {
        resolve({username: "sark", email: "sarky@lmail.com"})
    },5000)
})
promisethree.then((user)=> {
    console.log(user);
    
})


const promisefour= new Promise(function(resolve, reject){
    setTimeout(function(){
        let error= false
        if (!error) {
            resolve({username: "js", email: "sarky@lmail.com"})
        }else{
            reject('ERROR 404')
        }
    },10000)
})

promisefour
.then((user)=> {
    console.log(user);
    return user.username
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=> console.log("THE PROMISE IS EITHER REESOLVED OR REJECTED"))


const promisefive= new Promise(function(resolve, reject){
    setTimeout(function(){
        let error= true
        if (!error) {
            resolve({username: "java", password: "1285"})
        }else{
            reject('ERROR 404')
        }
    },10000)
})

async function consumepromisefive(){
    try {
        const response= await promisefive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumepromisefive()

// async function getAllUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data= await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch("https://api.github.com/users/hiteshchoudhary")
.then((response)=> {
    return response.json()
})
.then((data)=> {
    console.log(data);
})
.catch((error)=> {
    console.log("error");
})