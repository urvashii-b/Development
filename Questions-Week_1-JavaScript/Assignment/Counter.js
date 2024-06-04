const element = document.getElementById('count');
let counter = 30;
function updateCountdown(){
    element.textContent = counter;
}
function startCountDown(){
    updateCountdown();
    const interval = setInterval(()=>{
        counter--;
        updateCountdown();
        if(counter==0){
            clearInterval(interval);
            alert("Time is up!!");
        }
    },1*1000);
}
startCountDown();