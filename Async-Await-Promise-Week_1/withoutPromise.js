const fs = require('fs')
function UrvashiReads(cb){
    fs.readFile("Async-Await-Promise-Week_1/sample.txt","utf-8", function(err,data){
        if(err){
            console.log("Error! ");
        }
        else{
            cb(data);
        }
    });
}

function onDone(data){
    console.log(data);
}

UrvashiReads(onDone);