const secondHand = document.getElementById('second-hand');
const minuteHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');

function getTime(){
    const currentdate = new Date();
    const getSecond = currentdate.getSeconds();
    const getMinute = currentdate.getMinutes();
    const getHour = currentdate.getHours();
    console.log(currentdate); //date gives day,date,sec, minute, hour. we just need sec,min,hour only.
    console.log(getHour, getMinute, getSecond );
    // 360edeg cicle/ 60second = 6deg => 1 minute rotate 6 deg
    // one sixitieth(1/6degree) of a full rotation per second = rotate using css
    const secondTimeInterval = 6
    // per second ,6 deg = (getSecond * secondInterval)deg, 
    secondHand.style.transform = 'rotate(' + (getSecond * secondTimeInterval) + 'deg)';
    // per second ,6 deg so 60sec me 60deg means 1min me 60deg= (getMinute * secondInterval*10)deg, 

    minuteHand.style.transform = 'rotate(' + (getMinute * secondTimeInterval+ getSecond/10) + 'deg)';
    // full circle 360 deg ..full ciecle means 12hour 360/12 = 30 =>  30 deg per 1 hour
    // full cicle 12 hour= 720 minute=> 360/720 = 1/2degree each minute hour rotate
    hourHand.style.transform = 'rotate(' + (getHour * 30 + getMinute/2) + 'deg)';
}
// every 100ms call function
setInterval(getTime, 100)