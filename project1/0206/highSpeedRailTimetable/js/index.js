window.addEventListener("load", function () {
  const url =
    "https://ptx.transportdata.tw/MOTC/v2/Rail/THSR/DailyTimetable/Today?$top=1&$format=JSON";

  $.get(url, function (data) {
    // TODO del
    console.log('data', data);
  });
});
