// Immediately Invoked Function Expressions (IIFE)

// function one(){
//     console.log(`db connected`); 
//     //normal function way
    
// }
// one()

(function one(){
    console.log(`DB connected`); 
    //iife way
    //this is called name IIFE
})
();
                                 //to call two or more IIFE together then you need to give ";" after previous IIFE ends
((name) => {
    console.log(`MR. ${name},DB connected`);
    //IIFE
}) ("sark")