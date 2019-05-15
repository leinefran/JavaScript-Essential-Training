#!/usr/bin/node
// a script that moves the hour, minute and second hand of a clock

const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let hrPosition = 20;
let minPosition = 130;
let secPosition = 267;

HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHANDHAND.style.transform = "rotate(" + hrPosition + "deg)";
SECONDHANDHAND.style.transform = "rotate(" + hrPosition + "deg)";
