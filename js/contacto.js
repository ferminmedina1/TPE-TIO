"use strict";

document.addEventListener("DOMContentLoaded", generateCaptcha);
document.getElementById("submit-button").addEventListener("click", validateCaptcha);

document.querySelector(".left-arrow").addEventListener("click", toggleRedes);

document.querySelector(".right-arrow").addEventListener("click", toggleRedes);


function toggleRedes() {
    let redes = document.querySelector(".redes-sociales");
    let arrow = document.querySelector(".left-arrow");
    redes.classList.toggle("no-display");
    arrow.classList.toggle("no-display");
}

function generateCaptcha() {
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let captchaValue = `${letters[Math.floor(Math.random(0,1) * 28)]} ${numbers[Math.floor(Math.random(0,1) * 10)]} ${letters[Math.floor(Math.random(0,1) * 28)]} ${numbers[Math.floor(Math.random(0,1) * 10)]} ${letters[Math.floor(Math.random(0,1) * 28)]}`;
    document.getElementById("captcha").innerHTML = captchaValue;
}

function validateCaptcha() {
    event.preventDefault();
    let captcha = (document.getElementById("captcha").innerHTML).replace(/ /g, "");
    let captchaAnswer = document.getElementById("captcha-answer").value;
    let errorMessage = document.getElementById("error-message");
    if(captcha === captchaAnswer) {
        alert("La consulta fue enviada.")
    } else {
        alert("El captcha es incorrecto.")
    }
}