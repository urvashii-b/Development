// function to print the sum in passive tense.
function sum(a,b,fnToCall){
    let res = a+b
    fnToCall(res);
}
function prettySum(sum){
    console.log("The sum of the numbers is "+sum)
}
function printPassiveSum(sum){
    console.log("The sum of the numbers was calculated to be "+sum)
}
// callback
const value = sum(1,2,printPassiveSum)
