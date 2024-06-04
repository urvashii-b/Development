const fs = require("fs")
fs.readFile("Async-Await-Promise-Week_1","utf-8", function(err,data){
    if (err) {
        console.error("Error reading file:", err);
    } else {
        console.log(data);
    }
})

console.log("hiiii");
let a = 0;
// takes very long
for(let i = 0; i< 1000000000; i++){
    a++;
}
console.log("hi there 2");