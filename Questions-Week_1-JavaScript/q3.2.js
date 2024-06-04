// function that displays this result in a pretty format
function sum(a,b){
    return a+b
}

function prettySum(sum){
    return `The sum is ${sum}`
}
const value = sum(1,2)
const pretty = prettySum(value)
console.log(pretty);