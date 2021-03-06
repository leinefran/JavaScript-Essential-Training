#!/usr/bin/node
// a function that runs an analogic clock.

const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
    console.log(date);

    /* retrieves the current hr, min and sec from the date object */
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log(hr, min, sec);

    /* fancy mat to ensure the hr, min, sec hands are moved accordingly to the current time */
    let hrPosition = (hr*360/12) + (min*(360/60)/12);
    let minPosition = (min*360/60) + (sec*(360/60)/60);
    let secPosition = sec*360/60;

function runTheClock(){

    hrPosition = hrPosition+(3/360);
    minPosition = minPosition+(6/60);
    secPosition = secPosition+6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

// sets the clock to run every 1k seconds.
/* Before applying the setInterval method to the clock, the script was static: it run only when the browser window was loaded/refreshed. Therefore, the clock wasn't showing the current time, but the time when the browser window was last updated */

var interval = setInterval(runTheClock, 1000);
