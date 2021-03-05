window.addEventListener("load", function () {
    const startSelector = document.getElementById("startSelector")
    const endSelector = document.getElementById("endSelector")
    const startName = document.getElementById("startName")
    const endName = document.getElementById("endName")
    const dateSelector = document.getElementById("dateSelector")
    const dateName = document.getElementById("dateName")
    const searchBtn = document.getElementById("searchBtn")
    const timeTable = document.getElementById("timeTable")

    const HOST_API = "https://ptx.transportdata.tw/MOTC"

    const ALL_STATION_API = `${HOST_API}/v2/Rail/THSR/Station?$format=JSON`
    const SEARCH_API = `${HOST_API}/v2/Rail/THSR/DailyTimetable/OD/$$s1/to/$$s2/$$date?$format=JSON`

    let filterData = []

    // 按下搜尋鍵同時 抓到要輸入時刻表查詢的三個東西 起車站名 終車站名 日期
    searchBtn.addEventListener('click', function() {
        const startID = startSelector.value
        const endID = endSelector.value
        const date = dateSelector.value

        // 增加判斷 讓用戶必須輸入
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

        // 把搜尋資料用成table的格式 再用字串插入
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
        // replace ===> 讓我們自定義的東西 去取代$$s1
        const composedSearchAPIURL = SEARCH_API.replace("$$s1", startID).replace("$$s2", endID).replace("$$date", date)

        // 執行此API後把取得的三條件都帶入 執行此函式
        $.get(composedSearchAPIURL, function(data) {
            data.map(function (item) {
                const { TrainDate, DailyTrainInfo, OriginStopTime, DestinationStopTime } = item
                const { TrainNo } = DailyTrainInfo
                // 因為站名代碼會重複 例如起始跟終點的StationName 用{a : c}的方法辨別 => 讓a改名叫c 注意當要使用a的同時必須用c去叫他 因為已改名
                // 因為StationName的資料是在OriginStopTime裡  所以要在執行一次 抓取資料 {, , ,}=OriginStopTime
                const { StationName: StartStationName, ArrivalTime: StartArrivalTime } = OriginStopTime
                const { Zh_tw: StartZh_tw } = StartStationName

                const { StationName: EndStationName, ArrivalTime: EndArrivalTime } = DestinationStopTime
                const { Zh_tw: EndZh_tw } = EndStationName

                // 把上述資料整合 完整的插入到table字串裡
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

            // 自串轉成table格式
            timeTable.innerHTML = tdStr
        })
    })

    // 讓終點站在選項時 一變換選項就取得他的value(change函式) 不需再按其他鍵
    // 並用if判斷如果不改變選項 那value就等於""
    endSelector.addEventListener("change", function(e) {
        let displayName = ""
        const selected = e.target.value
        if (selected === "none"){
            endName.innerText = ""
            return
        }
        //如果value等於API裡面對應到的車站代碼(id) 那就顯示API裡的車站名(name)
        filterData.map(function (item) {
            const { id, name } = item
            if (id === selected) {
                displayName = name
            }
        })

        endName.innerText = displayName
    })

    // 此步驟如上所示
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

    dateSelector.addEventListener("change", function(e) {
        dateName.innerText = e.target.value
    })

    // 讓option自動插入API裡 我們需要的車站名跟代碼名
    function createStationOption(data) {
        let optionStr = `<option value='none'>請選擇</option>`
        data.map(function (item) {
            const {
                name,
                id
            } = item

            const currentElement = `<option value='${id}'>${name}</option>`
            optionStr = optionStr + currentElement

            // 文字會變成 ===> "<option value='0990'>南港</option><option value='1000'>台北</option><option value='1010'>板橋</option><option value='1020'>桃園</option><option value='1030'>新竹</option><option value='1035'>苗栗</option><option value='1040'>台中</option><option value='1043'>彰化</option><option value='1047'>雲林</option><option value='1050'>嘉義</option><option value='1060'>台南</option><option value='1070'>左營</option>"
            // 在一次用innerHTML轉成option格式
            startSelector.innerHTML = optionStr
            endSelector.innerHTML = optionStr
        })
    }

    // 取得API 車站跟代碼 好用來做時刻表的搜尋項目代入
    $.get(ALL_STATION_API, function (data) {
        filterData = data.map(function (item) {
            const stationID = item.StationID
            const stationName = item.StationName.Zh_tw
            return {
                id: stationID,
                name: stationName,
            }
        })
        // 執行API時就自董執行此段function => 帶入option選項
        createStationOption(filterData)
    })
    
})