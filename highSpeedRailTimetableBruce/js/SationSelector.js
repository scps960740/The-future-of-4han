import $ from 'jquery'
import {
    tri3,
    tri4,
    selectorItem3,
    selectorItem4,
    starStation,
    endStation,
    starStationSelector,
    endStationSelector,
    starStationName,
    endStationName,
    ALL_STATION_API,
} from "./name"


// 類似class 閉包
function createDownAnime() {
    let toggle = 0
    return function (date, img) {
        if (toggle === 0) {
            date.style.height = "150px"
            date.style.boxShadow = "1px 3px 7px 2px #e4e6fa"
            img.style.transform = "rotate(180deg)"
            toggle = 1
        } else {
            date.style.height = "0px"
            date.style.boxShadow = "0px"
            img.style.transform = "rotate(0deg)"
            toggle = 0
        }
    }
}

const ainme1 = createDownAnime()
const ainme2 = createDownAnime()

export class SationSelector{

    constructor() {
        this.arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
        this.arr2 = ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
    }
    
    setupStationOption = () => {
        let filterData = []

        function createStationOption(data) {
            let divHtml1 = ``
            let divHtml2 = ``
            let a = 0
            let b = 20
            data.map(function (item) {
                const {
                    id,
                    name
                } = item
    
                const currentElement = `<div id=id${a++} class="box2-dropdown-items" data-val="${id}">${name}</div>`
                divHtml1 += currentElement
    
                const currentElement2 = `<div id=id${b++} class="box2-dropdown-items" data-val="${id}">${name}</div>`
                divHtml2 += currentElement2
    
                starStationSelector.innerHTML = divHtml1
                endStationSelector.innerHTML = divHtml2
            })
        }
    
    
        $.get(ALL_STATION_API, function (date) {
            filterData = date.map(function (item) {
                const stationID = item.StationID
                const stationName = item.StationName.Zh_tw
                return {
                    id: stationID,
                    name: stationName
                }
            })
            createStationOption(filterData)
        })
    }


    startStationOnSelect = (ele) => {
        starStationName.innerText = ele.innerText
        starStation.dataset.val = ele.dataset.val
    }

    endStationOnSelect = (ele) => {
        endStationName.innerText = ele.innerText
        endStation.dataset.val = ele.dataset.val
    }

    selectStartStation = () => {
        ainme1(selectorItem3, tri3)
        this.arr.forEach((item) => {
            const stationSelecor = document.getElementById(`id${item}`)
            stationSelecor.addEventListener('click', () => {
                this.startStationOnSelect(stationSelecor)
            })
        })
    }

    selectEndStation = () => {
        ainme2(selectorItem4, tri4)
        this.arr2.forEach((item) => {
            const stationSelecor = document.getElementById(`id${item}`)
            stationSelecor.addEventListener('click', () => {
                this.endStationOnSelect(stationSelecor)
            })
        })
        // const id20 = document.getElementById("id20")
        // id20.addEventListener('click', function () {
        //     endStationName.innerText = id20.innerText
        //     endStation.dataset.val = id20.dataset.val
        // })
        // const id21 = document.getElementById("id21")
        // id21.addEventListener('click', function () {
        //     endStationName.innerText = id21.innerText
        //     endStation.dataset.val = id21.dataset.val
        // })
        // .....
    }
}