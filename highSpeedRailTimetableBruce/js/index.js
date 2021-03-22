import {
    search,
    box3,
    box4,
    menuhome,
    menu,
    starStation,
    endStation,
    box231,
    box232,
    buttonStation,
} from "./name"

import { toggleDisplay } from './utils'

import { HishspeedRailTimeTable } from './HishspeedRailTimeTable'
import { SationSelector } from './SationSelector'

// 主程式
window.addEventListener("load", function () {

    const selectorStationOptions = new SationSelector()
    selectorStationOptions.setupStationOption()

    const timeTable = new HishspeedRailTimeTable()
    buttonStation.addEventListener("click", function () {
        timeTable.search()
    })

    search.addEventListener("click", function () {
        if (this.value === "Search...") {
            this.value = ""
        }
    })

    menuhome.addEventListener("click", function () {
        toggleDisplay(box3, box4, box232, box231)
    })

    menu.addEventListener("click", function () {
        toggleDisplay(box4, box3, box231, box232)
    })

    starStation.addEventListener("click", () => {
        selectorStationOptions.selectStartStation()
    })
    
    endStation.addEventListener("click", function () {
        selectorStationOptions.selectEndStation()
    })

})