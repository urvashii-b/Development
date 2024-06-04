function greet(name){
    console.log("Hi "+name);
}

let names = "Urvashi"
// setTimeout(greet,3*1000) - after 3 secs, prints "Hi undefined"
setTimeout(()=>greet(names),3*1000)

