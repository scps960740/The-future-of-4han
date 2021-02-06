window.addEventListener("load", function () {
    const timeCircle = document.querySelector(".timeCircle");

    const cirumference = Math.PI * 2 * 180;

    let offset = 0;
    timeCircle.style.strokeDasharray = `${cirumference}`;
    timeCircle.style.strokeDashoffset = "0"
    const buttomClass = document.getElementById("buttomClass")
    const buttom1img2 = document.getElementById('buttom1img2')
    const timeVal = document.getElementById('timeVal')
    const inputclass1 = document.getElementById('inputclass1')
    const inputclass2 = document.getElementById('inputclass2')
    const inputclass3 = document.getElementById('inputclass3')
    const playimg = document.getElementById('playimg')
    const buttom1img1 = document.getElementById('buttom1img1')
    let cicleInterval = undefined
    let TOTAL_SECOND = undefined

    let val1 = 00
    let val2 = 00
    let val3 = 00

    let buttomVul = 1

    function addZero(num) {
        return num < 10 ? `0${num}` : `${num}`
    }
    // const cicleInterval = setInterval(function () {
    //     if (offset >= cirumference - cirumference * 0.05) {
    //         clearInterval(cicleInterval);
    //         timeCircle.style.strokeDashoffset = `${cirumference}`;
    //     }

    //     offset = offset + cirumference * 0.05;
    //     timeCircle.style.strokeDashoffset = `${offset}`;

    // }, 1000);

    function stop() {
        clearInterval(cicleInterval)
    }

    function reset() {
        timeVal.innerText = "00:00:00"
        inputclass1.value = 00
        inputclass2.value = 00
        inputclass3.value = 00
        clearInterval(cicleInterval)
        playimg.src = 'play.svg'
        val1 = 00
        val2 = 00
        val3 = 00

        buttomVul = 1
        offset = 0;
        timeCircle.style.strokeDasharray = `${cirumference}`;
        timeCircle.style.strokeDashoffset = "0"
        TOTAL_SECOND = undefined;
    }

    function getTotalSecond() {
        let timeString = timeVal.innerText

        let timeArray = timeString.split(':')

        let hour = parseInt(timeArray[0])
        let minute = parseInt(timeArray[1])
        let second = parseInt(timeArray[2])

        let totalSecond = (3600 * hour) + (minute * 60) + second
        return totalSecond
    }

    function convertToTimeFormat(res) {
        let h = Math.floor(res / 3600)
        let m = Math.floor((res % 3600) / 60)
        let s = (res % 3600) % 60
        return `${addZero(h)}:${addZero(m)}:${addZero(s)}`
    }

    function start() {
        let totalSecond = getTotalSecond()

        if (TOTAL_SECOND === undefined) {
            TOTAL_SECOND = totalSecond;
        }

        const OFFSET_EVERY_SECOND = cirumference / TOTAL_SECOND;

        function task() {
            if (totalSecond <= 0) {
                reset()
                return
            }

            offset = offset + OFFSET_EVERY_SECOND;
            timeCircle.style.strokeDashoffset = `${offset}`

            totalSecond = totalSecond - 1

            timeVal.innerText = convertToTimeFormat(totalSecond)
        }

        cicleInterval = setInterval(task, 1000);
    }

    buttom1img2.addEventListener("click", function () {
        if (getTotalSecond() <= 0) return
        if (buttomVul === 0) {
            project2.innerText = "Start";
            buttomVul = 1;
            playimg.src = 'play.svg'
            stop()

        } else {
            project2.innerText = "Pause"
            buttomVul = 0;
            playimg.src = "pause.svg"
            start()
        }
    })

    buttom1img1.addEventListener("click", function () {
        reset()
    })

    buttomClass.addEventListener('click', function () {
        let hour = parseInt(inputclass1.value);
        let minute = parseInt(inputclass2.value);
        let second = parseInt(inputclass3.value);

        if (hour < 0) {
            hour = 0
            inputclass1.value = "00";
        }
        if (minute < 0) {
            minute = 0
            inputclass2.value = "00";
        }
        if (second < 0) {
            second = 0
            inputclass3.value = "00";
        }

        timeVal.innerText = convertToTimeFormat(hour * 3600 + minute * 60 + second);
        
    })
});