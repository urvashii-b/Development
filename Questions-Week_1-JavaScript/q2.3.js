// print all males's fname given a complex object
const users = [{
    fname: "urvashi",
    age:21,
    gender: "female"
},{
    fname: "ashish",
    age:20,
    gender: "male"
},{
    fname: "aparna",
    age:19,
    gender: "female"
},{
    fname: "rahul",
    age:21,
    gender: "male"
},{
    fname: "jessica",
    age:22,
    gender: "female"
}]

for(let i=0;i<users.length;i++){
    if(users[i]["gender"]=="male"){
        console.log(users[i]["fname"]);
    }
}