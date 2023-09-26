const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours'); 
const minE1 = document.getElementById('min');
const secE1 = document.getElementById('sec');

// Initializing the first date of new year
const newyears = '1 Jan 2024';

function countdown() {
    const nyd = new Date(newyears); // initialize the first date time and sec
    const currentdate = new Date();  // initialize the current date time and sec

    const sec = (nyd - currentdate) / 1000; // the result will be in form of seconds

    // Math operations on the variables to get the result of remaining time till new year
    const days = Math.floor(sec / 3600 / 24); 
    const hours = Math.floor(sec / 3600) % 24;
    const min = Math.floor(sec / 60) % 60;
    const seco = Math.floor(sec % 60);

    //Printing the result in the webpage
    daysE1.innerHTML = days;
    hoursE1.innerHTML = format(hours);
    minE1.innerHTML = format(min);
    secE1.innerHTML = format(seco);
}
function format(n) {
    return (n < 10) ? ("0" + n) : n;
}
//initial call
countdown();


setInterval(countdown, 1000)
