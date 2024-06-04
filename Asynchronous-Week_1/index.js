const fs = require("fs")
fs.readFile("Asynchronous-Week_1/sample.txt","utf-8", function(err,data){
    if (err) {
        console.error("Error reading file:", err);
    } else {
        console.log(data);
    }
})