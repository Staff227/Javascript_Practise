let renderHours = parseInt(document.querySelector('.hours').innerHTML);
let renderMinutes = parseInt(document.querySelector('.minutes').innerHTML);
let renderSeconds = parseInt(document.querySelector('.seconds').innerHTML);


let secondCount = 0;
let minuteCount = 0;
let hourCount = 0;

function renderTime() {
    setInterval(() => {
        secondCount++
        renderSeconds = secondCount;
        document.querySelector('.seconds').innerHTML = renderSeconds;
        console.log(renderSeconds);
        if (secondCount === 60) {
            secondCount = 0;
            minuteCount++;
        }
        renderMinutes = minuteCount;
        document.querySelector('.minutes').innerHTML = renderMinutes;
        console.log(renderMinutes);
        if (minuteCount === 60) {
            minuteCount = 0;
            hourCount++;
        }
        renderHours = hourCount;
        document.querySelector('.hours').innerHTML = renderHours;
        console.log(renderHours);
        if (hourCount === 60) {
            hourCount = 0;
        }
    }, 1000);

}