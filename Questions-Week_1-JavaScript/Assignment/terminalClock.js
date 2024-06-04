function formatTime(date){
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function display(){
    const curr = new Date();
    process.stdout.write('\x1Bc');
    console.log(formatTime(curr));
}
setInterval(display, 1000);