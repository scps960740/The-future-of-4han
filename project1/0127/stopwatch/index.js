window.addEventListener("load", function () {
  const timeCircle = document.querySelector(".timeCircle");

  // 算圓周率
  const circumference = Math.PI * 2 * 180;
  // 不斷推的距離
  let offset = 0;
  timeCircle.style.strokeDasharray = `${circumference}`;
  timeCircle.style.strokeDashoffset = "0";

  // 計時器
  const cicleInterval = setInterval(function () {
    if (offset >= circumference - circumference * 0.05) {
      clearInterval(cicleInterval);
      timeCircle.style.strokeDashoffset = `${circumference}`;
    }

    offset = offset + circumference * 0.05;
    timeCircle.style.strokeDashoffset = `${offset}`;
  }, 1000);

});
