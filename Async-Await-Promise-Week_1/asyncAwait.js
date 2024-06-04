function UrvashiReads(){
    let p = new Promise(function(resolve){
        resolve("Hiiii")
    });
    return p;
}

// used on caller side
async function main(){
    const value = await UrvashiReads();
    console.log(value);
}

main();