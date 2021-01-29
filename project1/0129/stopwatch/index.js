window.addEventListener("load", function () {
  const timeCircle = document.querySelector(".timeCircle");

  const cirumference = Math.PI * 2 * 180;

  let offset = 0;
  timeCircle.style.strokeDasharray = `${cirumference}`;
  timeCircle.style.strokeDashoffset = "0";

  // const cicleInterval = setInterval(function () {
  //     if (offset >= cirumference - cirumference * 0.05) {
  //         clearInterval(cicleInterval);
  //         timeCircle.style.strokeDashoffset = `${cirumference}`;
  //     }

  //     offset = offset + cirumference * 0.05;
  //     timeCircle.style.strokeDashoffset = `${offset}`;

  // }, 1000);

  // ------------ 變數區 ------------

  const buttom1img1 = document.getElementById("buttom1img1");
  const buttom1img2 = document.getElementById("buttom1img2");
  const buttomClass = document.getElementById("buttomClass");
  const project2 = document.getElementById("project2");

  const timeVal = document.getElementById("timeVal");
  const inputclass1 = document.getElementById("inputclass1");
  const inputclass2 = document.getElementById("inputclass2");
  const inputclass3 = document.getElementById("inputclass3");

  const playImg = document.getElementById("playImg");

  let buttomVul = 1;
  let vul1 = 00;
  let vul2 = 00;
  let vul3 = 00;
  let cicleInterval = undefined;

  // ------------ function區 ------------

  function addZero(num) {
    // "" '' ``
    return num < 10 ? `0${num}` : `${num}`;
  }

  function getTotalSecond() {
    // 00:00:00
    let timeString = timeVal.innerText;
    // ["00", "00", "00"]
    let timeArray = timeString.split(":");

    let hour = parseInt(timeArray[0]);
    let minute = parseInt(timeArray[1]);
    let second = parseInt(timeArray[2]);

    let totalSecond = 3600 * hour + 60 * minute + second;
    return totalSecond;
  }

  function convertToTimeFormat(second) {
    // 轉換 -> ex: 3700 轉成 01:01:40
    // 1. 3700 / 3600 = 1 hour
    // 2. (3700 % 3600) / 60 = 1 minute
    // 3. ((3700 % 3600) % 60) = 40 sec
    let h = Math.floor(second / 3600);
    let m = Math.floor((second % 3600) / 60);
    let s = (second % 3600) % 60;

    return `${addZero(h)}:${addZero(m)}:${addZero(s)}`;
  }

  function reset() {
    clearInterval(cicleInterval);
    timeVal.innerText = "00:00:00";
    inputclass1.value = "00";
    inputclass2.value = "00";
    inputclass3.value = "00";
    playImg.src = "play.svg";
  }

  function stop() {
    clearInterval(cicleInterval);
  }

  function start() {
    let totalSecond = getTotalSecond();

    cicleInterval = setInterval(function () {
      if (totalSecond <= 0) {
        reset();
        return;
      }

      totalSecond = totalSecond - 1;

      timeVal.innerText = convertToTimeFormat(totalSecond);
    }, 1000);
  }

  // ------------ event click區 ------------

  buttom1img1.addEventListener("click", function () {
    reset();
  });

  buttom1img2.addEventListener("click", function () {
    if (getTotalSecond() <= 0) return;

    if (buttomVul === 0) {
      project2.innerText = "Start";
      buttomVul = 1;
      stop();
      playImg.src = "play.svg";
    } else {
      project2.innerText = "Pause";
      buttomVul = 0;
      start();
      playImg.src = "pause.svg";
    }
  });

  buttomClass.addEventListener("click", function () {
    let hour = parseInt(inputclass1.value);
    let minute = parseInt(inputclass2.value);
    let second = parseInt(inputclass3.value);
    if (hour < 0) {
      hour = 0;
      inputclass1.value = "00";
    }
    if (minute < 0) {
      minute = 0;
      inputclass2.value = "00";
    }
    if (second < 0) {
      second = 0;
      inputclass3.value = "00";
    }
    // if (hour < 10) {
    //     vul1 = `0${hour}`
    // } else {
    //     vul1 = `${hour}`
    // }
    vul1 = addZero(hour);
    vul2 = addZero(minute);
    vul3 = addZero(second);

    // timeVal.innerText = vul1 + ":" + vul2 + ":" + vul3;
    timeVal.innerText = `${vul1}:${vul2}:${vul3}`;
  });
});
