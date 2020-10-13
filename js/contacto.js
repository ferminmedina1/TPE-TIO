document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    document.getElementById("form").addEventListener("submit", validateCaptcha);
    document.querySelector("#left-arrow").addEventListener("click", toggleRedes);
    document.querySelector("#right-arrow").addEventListener("click", toggleRedes);
    
    function toggleRedes() {
        let redes = document.querySelector("#redes-sociales");
        let arrow = document.querySelector("#left-arrow");
        redes.classList.toggle("no-display");
        arrow.classList.toggle("no-display");
    }
    
    function generateCaptcha() {
        let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        let str = "";
        for (let i = 0; i < 2; i++) {
            // Podes hacer un captcha con todos los caracteres que vos quieras solo cambiando las vueltas del for, que pueden venir desde afuera.
            str += `${letters[Math.floor(Math.random(0,1) * 28)]} ${numbers[Math.floor(Math.random(0,1) * 10)]} `;
        }
        document.getElementById("captcha").innerHTML = str;
    }
    
    function validateCaptcha(e) {
        e.preventDefault();
        let captcha = (document.getElementById("captcha").innerHTML).replace(/ /g, "");
        let captchaAnswer = document.getElementById("captcha-answer").value;
        let pError = document.getElementById("message");
        if(captcha === captchaAnswer) {
            pError.classList.add('succesMessage');
            pError.innerHTML = "Formulario enviado.";
            return;
        }
        pError.classList.add('badMessage');
        pError.innerHTML = "Captcha incorrecto."
    }
    generateCaptcha();

});