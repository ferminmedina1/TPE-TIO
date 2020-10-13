document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    function printMates () {
        let mates = [
            {
                type: 'Camionero',
                price: 3000,
                img: '../images/camionero.jpg',

            },
            {
                type: 'Torpedo',
                price: 3500,
                img: '../images/torpedo.jpg',
            },
        ];

        for (let mate of mates) {
            let tr = document.createElement("tr");
            let tdType = document.createElement("td");
            let tdPrice = document.createElement("td");
            let tdImg = document.createElement("td");
            let img = document.createElement("img");
            img.width = 45;
            img.height = 45;
            tdType.innerHTML = mate.type;
            tdPrice.innerHTML = mate.price;
            tdPrice.innerHTML = mate.price;
            img.src = mate.img;
            tdImg.appendChild(img);
            tr.appendChild(tdType);
            tr.appendChild(tdPrice);
            tr.appendChild(tdImg);
            document.getElementById("tbody").appendChild(tr);
        }

    }
    printMates();

});