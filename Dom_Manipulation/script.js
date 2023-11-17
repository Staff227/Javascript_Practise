let subscribeButtton = document.querySelector('button');
let calculate = document.querySelector('.calculate');


function compareItems() {
    let bar = document.querySelector('.bar');
    let cost = Number(bar.value);
    cost = cost * 100;
    let display = document.querySelector('.display');
    if (cost < 40 && cost >= 0) {
        cost = cost + 10;

        display.innerHTML = `$${cost / 100}`;
    } else if (cost >= 40) {
        display.innerHTML = `$${cost / 100}`;
    }
};




subscribeButtton.addEventListener('click', function () {
    if (subscribeButtton.innerText === 'Subscribe') {
        subscribeButtton.innerHTML = 'Subscribed'
        subscribeButtton.classList.add('subscribed');
    } else {
        subscribeButtton.innerHTML = 'Subscribe';
        subscribeButtton.classList.remove("subscribed");
    }
});




