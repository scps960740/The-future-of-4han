window.addEventListener("load", function () {
  // const url =
  //   "https://ptx.transportdata.tw/MOTC/v2/Rail/THSR/DailyTimetable/Today?$top=1&$format=JSON";

  // $.get(url, function (data) {
  //   // TODO del
  //   console.log('data', data);
  // });
  const mobileTitleImg = document.getElementById("mobileTitleImg")
  const menuMobile = document.getElementById("menuMobile")
  const menuProject = document.getElementById("menuProject1-2")
  const sidebar = document.getElementById("sidebar")
  const mobilebox = document.getElementById("mobilebox")
  const endStation = document.getElementById("endStation")
  const moibleEndStation = document.getElementById("moibleEndStation")
  const startStation = document.getElementById("startStation")
  const moibleStartStation = document.getElementById("moibleStartStation")
  const date = document.getElementById("date")
  const newDate = document.getElementById("newDate")
  const time = document.getElementById("time")
  const newTime = document.getElementById("newTime")


  mobileTitleImg.addEventListener("click", function () {
    menuMobile.style.right = "0px";
    sidebar.style.right = "0px"
    mobilebox.style.overflow = "hidden";
  })

  menuProject.addEventListener("click", function () {
    menuMobile.style.right = "-999px";
    sidebar.style.right = "-999px"
    mobilebox.style.overflow = "auto";
    startStation.innerText = "起始站:" + `${moibleStartStation.value}`
    endStation.innerText = "終點站:" + `${moibleEndStation.value}`
    date.innerText = "日期:" + `${newDate.value}`
    time.innerText = "發車時間:" + `${newTime.value}`
  })
});