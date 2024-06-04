// print the biggest number in an array
const ages = [21,40,78,35,100000,56,2,7,98];
// const maxi = Math.max(...ages)
let maxi = -Infinity;
for(let i = 0;i<ages.length;i++){
    if(ages[i]>maxi){
        maxi = ages[i];
    }
}
console.log("Biggest number is: "+maxi);