export const longstripTextTemplate = `<div class="longstrip-1">班次</div>
<div class="longstrip-1">日期</div>
<div class="longstrip-1">發車時間</div>
<div class="longstrip-1">到站時間</div>
<div class="longstrip-1">起程站</div>
<div class="longstrip-1">到達站</div>`


export function getDivStation(TrainNo, TrainDate, starStationTime, endStationTime, startZh_tw, endZh_tw, index, target) {

  
  let divStation = `<div class="box3-1 ${index + 1 === target ? "box3-1-space" : ""}">
                <div class="box3-1-1">
                    <div class="box3-1-1-1">
                        <img src="./images/a.svg">
                    </div>
                    <div class="textMargin">
                        班次：${TrainNo}
                    </div>
                </div>


                <div class="box3-1-2">
                    <div class="box3-1-3-1">
                        <img src="./images/calendar.svg">
                    </div>
                    <div class="textMargin1">
                        日期：${TrainDate}
                    </div>
                </div>

                <div class="box3-1-2">
                    <div class="box3-1-3-1">
                        <img src="./images/clock2.svg">
                    </div>
                    <div class="textMargin1">
                        發車時間：${starStationTime}
                    </div>
                </div>
                <div class="box3-1-2">
                    <div class="box3-1-3-1">
                        <img src="./images/clock2.svg">
                    </div>
                    <div class="textMargin1">
                        到站時間：${endStationTime}
                    </div>
                </div>

                <div class="box3-1-2">
                    <div class="box3-1-3-1">
                        <img src="./images/placeholder.svg">
                    </div>
                    <div class="textMargin1">
                        啟程站：${startZh_tw}
                    </div>
                </div>

                <div class="box3-1-2">
                    <div class="box3-1-3-1">
                        <img src="./images/placeholder.svg">
                    </div>
                    <div class="textMargin1">
                        到達站：${endZh_tw}
                    </div>
                </div>
            </div>`

  return divStation
}

export function getLongstripTextAPI(TrainNo, TrainDate, starStationTime, endStationTime, startZh_tw, endZh_tw){
  let longstripTextAPI = `<div class="longstrip-3">
                <div class="longstrip-2">${TrainNo}</div>
                <div class="longstrip-2">${TrainDate}</div>
                <div class="longstrip-2">${starStationTime}</div>
                <div class="longstrip-2">${endStationTime}</div>
                <div class="longstrip-2">${startZh_tw}</div>
                <div class="longstrip-2">${endZh_tw}</div>
                </div>`
  return longstripTextAPI
}