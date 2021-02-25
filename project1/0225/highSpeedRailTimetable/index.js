window.addEventListener("load", function () {
    const HOST_API = "https://ptx.transportdata.tw/MOTC"

    const ALL_STATION_API = `${HOST_API}/v2/Rail/THSR/Station?$format=JSON`
    const SEARCH_API = `${HOST_API}/v2/Rail/THSR/DailyTimetable/OD/$$s1/to/$$s2/$$date?$format=JSON`


    let filterData = []

    const startSelector = document.getElementById("startSelector")
    const endSelector = document.getElementById("endSelector")
    const startName = document.getElementById("startName")
    const endName = document.getElementById("endName")
    const dateSelector = document.getElementById("dateSelector")
    const dateName = document.getElementById("dateName")
    const searchBtn = document.getElementById("searchBtn")
    const timeTable = document.getElementById("timeTable")

    searchBtn.addEventListener('click', function() {
        const startID = startSelector.value
        const endID = endSelector.value
        const date = dateSelector.value

        if (startID === "none") {
            alert("請選擇啟程站")
            return
        }

        if (endID === "none") {
            alert("請選擇到達站")
            return
        }

        if (date === "") {
            alert("請選擇日期")
            return
        }

        // console.log(startID, endID, date);

        let tdStr = `
        <tr>
            <th>日期</th>
            <th>班次</th>
            <th>啟程站</th>
            <th>終點站</th>
            <th>起始時間</th>
            <th>到達時間</th>
        </tr>
        `

        const composedSearchAPIURL = SEARCH_API.replace("$$s1", startID).replace("$$s2", endID).replace("$$date", date)

        $.get(composedSearchAPIURL, function(data) {
            data.map(function (item) {
                const { TrainDate, DailyTrainInfo, OriginStopTime, DestinationStopTime } = item
                const { TrainNo } = DailyTrainInfo

                const { StationName: StartStationName, ArrivalTime: StartArrivalTime } = OriginStopTime
                const { Zh_tw: StartZh_tw } = StartStationName

                const { StationName: EndStationName, ArrivalTime: EndArrivalTime } = DestinationStopTime
                const { Zh_tw: EndZh_tw } = EndStationName

                const htmlStr = `<tr>
                    <td>${TrainDate}</td>
                    <td>${TrainNo}</td>
                    <td>${StartZh_tw}</td>
                    <td>${EndZh_tw}</td>
                    <td>${StartArrivalTime}</td>
                    <td>${EndArrivalTime}</td>
                </tr>`

                tdStr = tdStr + htmlStr
            })


            timeTable.innerHTML = tdStr
        })
    })

    dateSelector.addEventListener("change", function(e) {
        dateName.innerText = e.target.value
    })

    startSelector.addEventListener("change", function(e) {
        let displayName = ""
        const selected = e.target.value
        if (selected === "none"){
            startName.innerText = ""
            return
        }

        filterData.map(function (item) {
            const { id, name } = item
            if (id === selected) {
                displayName = name
            }
        })

        startName.innerText = displayName
    })

    endSelector.addEventListener("change", function(e) {
        let displayName = ""
        const selected = e.target.value
        if (selected === "none"){
            endName.innerText = ""
            return
        }

        filterData.map(function (item) {
            const { id, name } = item
            if (id === selected) {
                displayName = name
            }
        })

        endName.innerText = displayName
    })


    function createStationOption(data) {
        let optionStr = "<option value='none'>請選擇</option>"
        data.map(function (item) {
            // 不return就好
            // const itemName = item.name
            // const itemId = item.id
            // const age = item.age
            // if (age === undefiend) age = 10
            const { name, id, age = 10 } = item
            const currentElement = `<option value='${id}'>${name}</option>`
            optionStr = optionStr + currentElement
        });
        // 設計圖 "<option value='0990'>南港</option><option value='1000'>台北</option><option value='1010'>板橋</option><option value='1020'>桃園</option><option value='1030'>新竹</option><option value='1035'>苗栗</option><option value='1040'>台中</option><option value='1043'>彰化</option><option value='1047'>雲林</option><option value='1050'>嘉義</option><option value='1060'>台南</option><option value='1070'>左營</option>"
        // the best pratice 最佳做法
        startSelector.innerHTML = optionStr
        endSelector.innerHTML = optionStr
    }

    $.get(ALL_STATION_API, function (date) {
        filterData = date.map(function (item, index) {
            const stationID = item.StationID
            const stationName = item.StationName.Zh_tw
            return {
                id: stationID,
                name: stationName,
            }
        })
        createStationOption(filterData)
    })
})
