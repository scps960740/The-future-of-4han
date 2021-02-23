window.addEventListener("load", function () {

    const HOST_API = "https://ptx.transportdata.tw/MOTC"
    const ALL_STATION_API = `${HOST_API}/v2/Rail/THSR/Station?$format=JSON`

    // 取得資料跟整理資料
    $.get(ALL_STATION_API, function (data) {

        // StationID
        // StationName
        

        // item, index, data
        // 整理資料 - 改變每個物件的內容 （共12個）
        const filterData = data.map(function (item, index) {
            const stationID = item.StationID
            const stationName = item.StationName.Zh_tw

            return {
                id: stationID,
                name: stationName,
            }
            // return item
        })
        // [{ id: xxx, name: xxx }, ......]

        // ....
        console.log("data", data);
        console.log("filterData", filterData);

        // 把整理好的資料塞進<select>
        const startSelector = document.getElementById("startSelector")
        filterData.map(function (item) {
            const optionNode = document.createElement("option")
            optionNode.value = item.id
            optionNode.innerHTML = item.name

            startSelector.appendChild(optionNode)
            
            // 不return就好
        });

        // 把整理好的資料塞進<select>
        const endSelector = document.getElementById("endSelector")
        filterData.forEach((item) => {
            const optionNode = document.createElement("option")
            optionNode.value = item.id
            optionNode.innerHTML = item.name

            endSelector.appendChild(optionNode)
        });

    })



})