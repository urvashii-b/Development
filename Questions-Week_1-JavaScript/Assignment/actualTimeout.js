const start = performance.now();
function A(){
    const end = performance.now();
    const diff = end - start;
    console.log("Function A has been called. Time difference:",diff.toFixed(2),"milliseconds");
}
setTimeout(A,1000);