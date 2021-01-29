window.addEventListener("load", function () {
    const timeCircle = document.querySelector(".timeCircle");

    const cirumference = Math.PI * 2 * 180;

    let offset = 0;
    timeCircle.style.strokeDasharray = `${cirumference}`;
    timeCircle.style.strokeDashoffset = "0"

    const cicleInterval = setInterval(function () {
        if (offset >= cirumference - cirumference * 0.05) {
            clearInterval(cicleInterval);
            timeCircle.style.strokeDashoffset = `${cirumference}`;
        }

        offset = offset + cirumference * 0.05;
        timeCircle.style.strokeDashoffset = `${offset}`;

    }, 1000);

    const buttom1img1 = document.getElementById('buttom1img1')
    buttom1img1.addEventListener("click", function () {

    })

    const project2 = document.getElementById("project2")
    let buttomVul = 0

    function stop() {
        clearInterval(cicleInterval);
    }

    function start() {
        cicleInterval = setInterval(function () {
            if (offset >= cirumference - cirumference * 0.05) {
                clearInterval(cicleInterval);
                timeCircle.style.strokeDashoffset = `${cirumference}`;
            }

            offset = offset + cirumference * 0.05;
            timeCircle.style.strokeDashoffset = `${offset}`;

        }, 1000);
    }

    const buttom1img2 = document.getElementById('buttom1img2')
    buttom1img2.addEventListener("click", function () {
        if (buttomVul === 0) {
            project2.innerText = "Start";
            buttomVul = 1;
            stop();
        } else {
            project2.innerText = "Pause"
            buttomVul = 0;
            start();
        }
    })

    const timeVal = document.getElementById('timeVal')
    const inputclass1 = document.getElementById('inputclass1')
    const inputclass2 = document.getElementById('inputclass2')
    const inputclass3 = document.getElementById('inputclass3')

    let vul1 = 00
    let vul2 = 00
    let vul3 = 00

    const buttomClass = document.getElementById("buttomClass")
    buttomClass.addEventListener('click', function () {
        vul1 = inputclass1.value;
        vul2 = inputclass2.value;
        vul3 = inputclass3.value;
        timeVal.innerText = vul1 + ":" + vul2 + ":" + vul3;
    })

        
    
});

    
new Date([hours[minures[seconds]]])
let c = new Date(7[2][3])

console.log(c)
