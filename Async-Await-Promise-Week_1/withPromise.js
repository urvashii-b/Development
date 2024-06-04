const fs = require('fs')
function UrvashiReads(){
    var p = new Promise(function(resolve){
        fs.readFile("Async-Await-Promise-Week_1/sample.txt","utf-8", function(err,data){
            if(err){
                console.log("Error! ");
            }
            else{
                resolve(data);
            }
        });
    }) 
    return p;
}

function onDone(data){
    console.log(data);
}

var a = UrvashiReads();
a.then(onDone);