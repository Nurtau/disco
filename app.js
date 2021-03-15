"use strict";

const box = document.querySelector(".box");

const getRandInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const changeColor = () => {
    box.style.backgroundColor = `rgb(${getRandInt(0, 255)}, ${getRandInt(0, 255)}, ${getRandInt(0, 255)})`;
}

window.addEventListener("load", () => {
    changeColor();
    setInterval(() => {
        changeColor();
    }, 50);
});