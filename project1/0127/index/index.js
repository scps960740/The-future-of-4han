window.addEventListener("load", function () {
  const title = document.getElementById("title");

  // 兩種用法 一種用querySelector抓class 一種用getElementById抓id
  const starbutton = document.querySelector(".starButton");

  const calculater = document.getElementById("calculater");
  calculater.addEventListener("click", function () {
    title.innerText = "Calculater";
    starbutton.href = "/project1/0127/calculater/index.html";
  });
  const ooxx = document.getElementById("ooxx");
  ooxx.addEventListener("click", function () {
    title.innerText = "ooxx";
    starbutton.href = "/project1/0127/ooxx/index.html";
  });
  const stopwatch = document.getElementById("stopwatch");
  stopwatch.addEventListener("click", function () {
    title.innerText = "Stopwatch";
    starbutton.href = "/project1/0127/Stopwatch/index.html";
  });
});

const meanbar = document.getElementById("meanbar");

const sidebar = document.getElementById("sidebar");
sidebar.addEventListener("click", function () {
  sidebar.style.right = "-100%";
  meanbar.style.right = "-100%";
});

const mobileheaderContent2 = document.getElementById("mobileheaderContent2");
mobileheaderContent2.addEventListener("click", function () {
  meanbar.style.right = "0px";
  sidebar.style.right = "0px";
});
