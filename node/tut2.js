// A code which is execute line by line by line is called synchronous code

// synchronous or blocking 
// -line by line execution
// Asynchronous or non-blocking 
// - line by line exwcution is not guranteed 
// -callbacks will fire

const fs  = require("fs");

fs.readFile("delete.txt","utf-8" , (err,data)=>{
    console.log(data);
})
console.log("this is a last message");