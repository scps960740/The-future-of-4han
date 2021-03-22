import $ from 'jquery'
import {
    box3,
    selectorDate,
    starStation,
    endStation,
    noTittle,
    noTittle2,
    longstrip,
    LAST_STATION_API
} from "./name"

import {
    longstripTextTemplate,
    getDivStation,
    getLongstripTextAPI
} from './constant'

export class HishspeedRailTimeTable {

    validate = () => {
        if (selectorDate.value === "") {
            window.alert("請輸入日期")
            return
        }
        if (starStation.dataset.val === "" || endStation.dataset.val === "") {
            window.alert("請輸入站別")
            return
        }

    }

    fetchData = () => {

        let newSearchData = []
        let time = selectorDate.value
        let start = starStation.dataset.val
        let end = endStation.dataset.val
        const composedSearchAPIURL = LAST_STATION_API.replace("start", start).replace("end", end).replace("date", time)
        noTittle.style.display = "none"
        noTittle2.style.display = "none"
        let divdata = ""

        $.get(composedSearchAPIURL, function (data) {
            let longstripText = longstripTextTemplate
            data.map(function (item, index) {

                // 找出當資料再3筆以上時 要讓第2筆往左右推開
                // 用Math.floor取整數
                // 這裡的邏輯是 第2筆時index是1 =>
                //  index : 0 1 2   => 第幾筆資料   1 2 3   level = 層數
                //          3 4 5                  4 5 6   target = 要讓它等於的值
                //          6 7 8                  7 8 9 

                const level = Math.floor(index / 3)
                const target = 2 + level * 3

                // index 0 1 2 3 
                const {
                    TrainDate,
                    DailyTrainInfo,
                    OriginStopTime,
                    DestinationStopTime
                } = item
                const {
                    TrainNo
                } = DailyTrainInfo
                const {
                    StationName: startStationName,
                    DepartureTime: starStationTime
                } = OriginStopTime
                const {
                    Zh_tw: startZh_tw
                } = startStationName
                const {
                    StationName: endStationName,
                    ArrivalTime: endStationTime
                } = DestinationStopTime
                const {
                    Zh_tw: endZh_tw
                } = endStationName


                const divStation = getDivStation(TrainNo, TrainDate, starStationTime, endStationTime, startZh_tw, endZh_tw, index, target)
                divdata = divdata + divStation

                const longstripTextAPI = getLongstripTextAPI(TrainNo, TrainDate, starStationTime, endStationTime, startZh_tw, endZh_tw)
                longstripText += longstripTextAPI

            })

            box3.innerHTML = divdata
            longstrip.innerHTML = longstripText
        })
    }
    search = () => {
        this.validate()
        this.fetchData()
    }
}