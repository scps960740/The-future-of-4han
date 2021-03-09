import $ from 'jquery'

import { a as AA } from './a'
import bbbbb from './b'


// TODO del
console.log('AA', AA)
console.log(bbbbb)


window.addEventListener("load", function () {
    const search = document.getElementById("search")
    const box3 = document.getElementById("box3")
    const box4 = document.getElementById("box4")
    // const selector = document.getElementById("selector")
    const tri1 = document.getElementById("tri1")
    const tri2 = document.getElementById("tri2")
    const tri3 = document.getElementById("tri3")
    const tri4 = document.getElementById("tri4")
    const menuhome = document.getElementById("menuhome")
    const menu = document.getElementById("menu")
    const selectorItem = document.getElementById("selectorItem")
    const selectorItem2 = document.getElementById("selectorItem2")
    const selectorItem3 = document.getElementById("selectorItem3")
    const selectorItem4 = document.getElementById("selectorItem4")
    const selectorDate = document.getElementById("selectorDate")
    const starStation = document.getElementById("starStation")
    const endStation = document.getElementById("endStation")
    const starStationSelector = document.getElementById("starStationSelector")
    const endStationSelector = document.getElementById("endStationSelector")
    const starStationName = document.getElementById("starStationName")
    const endStationName = document.getElementById("endStationName")
    const box231 = document.getElementById("box231")
    const box232 = document.getElementById("box232")

    const HOST_API = "https://ptx.transportdata.tw/MOTC"
    const ALL_STATION_API = `${HOST_API}/v2/Rail/THSR/Station?$format=JSON`

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

    // const mockData = [{
    //     StationID: "001",
    //     StationName: {
    //         Zh_tw: "測試車站"
    //     }
    // },{
    //     StationID: "001",
    //     StationName: {
    //         Zh_tw: "測試車站"
    //     }
    // },{
    //     StationID: "001",
    //     StationName: {
    //         Zh_tw: "測試車站"
    //     }
    // },{
    //     StationID: "001",
    //     StationName: {
    //         Zh_tw: "測試車站"
    //     }
    // }]

    // Promise https://www.w3schools.com/js/js_promise.asp
    fetch(ALL_STATION_API)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            // TODO del
            console.log('data', data)
            filterData = data.map(function (item) {
                const stationID = item.StationID
                const stationName = item.StationName.Zh_tw
                return {
                    id: stationID,
                    name: stationName
                }
            })
            createStationOption(filterData)
        })
        .catch(function (error) {
            // 如果出錯了要做的事情
            window.alert("系統錯誤，請稍後再試...")
        })

    // let obj = { name: "小明", age: 200 }
    // // TODO del
    // console.log('obj', JSON.stringify(obj))

    const option = {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }

    // POST
    fetch('https://jsonplaceholder.typicode.com/posts', option)
        .then((response) => response.json())
        .then((json) => {
            console.log('json', json)
        })
        .catch(function (error) {
            // 如果出錯了要做的事情
            window.alert("系統錯誤，請稍後再試...")
        })

    // try {
    //     $.get(ALL_STATION_API, function (data) {
    //         filterData = data.map(function (item) {
    //             const stationID = item.StationID
    //             const stationName = item.StationName.Zh_tw
    //             return {
    //                 id: stationID,
    //                 name: stationName
    //             }
    //         })
    //         createStationOption(filterData)
    //     })
    //     // throw new Error("我錯了")
    // } catch (error) {
    //     // 如果出錯了要做的事情
    //     window.alert("系統錯誤，請稍後再試...")
    // } 


    // let arr = []
    // if (arr.length === 0) {
    //     throw new Error("我錯了")
    // }


    // filterData = mockData.map(function (item) {
    //     const stationID = item.StationID
    //     const stationName = item.StationName.Zh_tw
    //     return {
    //         id: stationID,
    //         name: stationName
    //     }
    // })

    createStationOption(filterData)



    search.addEventListener("click", function () {
        if (this.value === "Search...") {
            this.value = ""
        }
    })

    menuhome.addEventListener("click", function () {
        box3.style.display = "flex"
        box4.style.display = "none"
        box232.style.background = "black";
        box232.style.boxShadow = "1px 3px 5px 2px #edeefa";
        box232.style.borderRadius = "10px";
        box231.style.background = "0";
        box231.style.boxShadow = "0";
        box231.style.borderRadius = "0";
    })

    menu.addEventListener("click", function () {
        box3.style.display = "none"
        box4.style.display = "flex"
        box231.style.background = "black";
        box231.style.boxShadow = "1px 3px 5px 2px #edeefa";
        box231.style.borderRadius = "10px";
        box232.style.background = "0";
        box232.style.boxShadow = "0";
        box232.style.borderRadius = "0";
    })


    // let toggle = 0
    // function downAinme(date, img) {
    //     if (toggle === 0) {
    //         date.style.height = "150px"
    //         date.style.boxShadow = "1px 3px 7px 2px #e4e6fa"
    //         img.style.transform = "rotate(180deg)"
    //         toggle = 1
    //     } else {
    //         date.style.height = "0px"
    //         date.style.boxShadow = "0px"
    //         img.style.transform = "rotate(0deg)"
    //         toggle = 0
    //     }
    // }

    // const downAinme = function () {...}

    // class
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
    // 閉包 closure


    // function createDownAnime() {
    //     return function () { console.log("我是誰") }
    // }

    // let a = createDownAnime() //10
    // a()

    // selector.addEventListener("click", function () {
    //     downAinme(selectorItem, tri1)
    // })

    selectorDate.addEventListener("change", function (e) {
        // downAinme(selectorItem2, tri2)
        console.log(e.target.value);
    })

    const ainme1 = createDownAnime()
    starStation.addEventListener("click", function () {
        ainme1(selectorItem3, tri3)

        const id0 = document.getElementById("id0")
        id0.addEventListener('click', function () {
            starStationName.innerText = id0.innerText

            // dataset
            console.log(id0.dataset.val);
        })
        const id1 = document.getElementById("id1")
        id1.addEventListener('click', function () {
            starStationName.innerText = id1.innerText
        })
        const id2 = document.getElementById("id2")
        id2.addEventListener('click', function () {
            starStationName.innerText = id2.innerText
        })
        const id3 = document.getElementById("id3")
        id3.addEventListener('click', function () {
            starStationName.innerText = id3.innerText
        })
        const id4 = document.getElementById("id4")
        id4.addEventListener('click', function () {
            starStationName.innerText = id4.innerText
        })
        const id5 = document.getElementById("id5")
        id5.addEventListener('click', function () {
            starStationName.innerText = id5.innerText
        })
        const id6 = document.getElementById("id6")
        id6.addEventListener('click', function () {
            starStationName.innerText = id6.innerText
        })
        const id7 = document.getElementById("id7")
        id7.addEventListener('click', function () {
            starStationName.innerText = id7.innerText
        })
        const id8 = document.getElementById("id8")
        id8.addEventListener('click', function () {
            starStationName.innerText = id8.innerText
        })
        const id9 = document.getElementById("id9")
        id9.addEventListener('click', function () {
            starStationName.innerText = id9.innerText
        })
        const id10 = document.getElementById("id10")
        id10.addEventListener('click', function () {
            starStationName.innerText = id10.innerText
        })
        const id11 = document.getElementById("id11")
        id11.addEventListener('click', function () {
            starStationName.innerText = id11.innerText
        })
    })

    const ainme2 = createDownAnime()
    endStation.addEventListener("click", function () {
        ainme2(selectorItem4, tri4)


        const id20 = document.getElementById("id20")
        id20.addEventListener('click', function () {
            endStationName.innerText = id20.innerText
            console.log(id20.value)
        })
        const id21 = document.getElementById("id21")
        id21.addEventListener('click', function () {
            endStationName.innerText = id21.innerText
        })
        const id22 = document.getElementById("id22")
        id22.addEventListener('click', function () {
            endStationName.innerText = id22.innerText
        })
        const id23 = document.getElementById("id23")
        id23.addEventListener('click', function () {
            endStationName.innerText = id23.innerText
        })
        const id24 = document.getElementById("id24")
        id24.addEventListener('click', function () {
            endStationName.innerText = id24.innerText
        })
        const id25 = document.getElementById("id25")
        id25.addEventListener('click', function () {
            endStationName.innerText = id25.innerText
        })
        const id26 = document.getElementById("id26")
        id26.addEventListener('click', function () {
            endStationName.innerText = id26.innerText
        })
        const id27 = document.getElementById("id27")
        id27.addEventListener('click', function () {
            endStationName.innerText = id27.innerText
        })
        const id28 = document.getElementById("id28")
        id28.addEventListener('click', function () {
            endStationName.innerText = id28.innerText
        })
        const id29 = document.getElementById("id29")
        id29.addEventListener('click', function () {
            endStationName.innerText = id29.innerText
        })
        const id30 = document.getElementById("id30")
        id30.addEventListener('click', function () {
            endStationName.innerText = id30.innerText
        })
        const id31 = document.getElementById("id31")
        id31.addEventListener('click', function () {
            endStationName.innerText = id31.innerText
        })
    })



    // 先預設一個值  用來test格式 是否正確
    let arr = []

    // 預設一個空字串
    let htmlStr = ""

    // 跑過一開始的預設值 來檢測012是否為正確
    // 此index為arr陣列的數目 => [44,44,44] 故index為2 => [0,1,2]
    arr.map(function (s, index) {

        // 找出當資料再3筆以上時 要讓第2筆往左右推開
        // 用Math.floor取整數
        // 這裡的邏輯是 第2筆時index是1 =>
        //  index : 0 1 2   => 第幾筆資料   1 2 3   level = 層數
        //          3 4 5                  4 5 6   target = 要讓它等於的值
        //          6 7 8                  7 8 9 
        const level = Math.floor(index / 3)
        const target = 2 + level * 3

        // 讓資料轉為字串無限疊加 再用innerHtml轉成
        // ${index + 1 === target ? "box3-1-space" : ""} 簡寫 =>

        // let className = ""
        // if (index + 1 === target) {
        //     className = "box3-1-space"
        // } else {
        //     className = ""
        // } 

        let item = `
        <div class="box3-1 ${index + 1 === target ? "box3-1-space" : ""}">
            <div class="box3-1-1">
                <div class="box3-1-1-1">
                    <img src="../new/images/a.svg">
                </div>
                <div class="textMargin">
                    North Core 250
                </div>
            </div>
            <div class="box3-1-2">
                <div class="box3-1-3-1">
                    <img src="../new/images/calendar.svg">
                </div>
                <div class="textMargin1">
                    21 Apr 2018
                </div>
            </div>
            <div class="box3-1-3">
                <div class="box3-1-3-1">
                    <img src="../new/images/placeholder.svg">
                </div>
                <div class="textMargin1">
                    New Zealand,sth Elyse
                </div>
            </div>
            <div class="box3-1-4">
                <div class="box3-1-4-1">
                    <div class="box3-1-4-1-1">
                        <div class="box3-1-4-1-1-1">
                            <img src="../new/images/grid.svg">
                        </div>
                    </div>
                    <div class="box3-1-4-1-2">
                        <div class="miniBox1">Growth</div>
                        <div class="miniBox2">16.56%</div>
                    </div>
                </div>
                <div class="box3-1-4-2">
                    <div class="miniBox3">Financing</div>
                    <div class="miniBox4">$14.5m</div>
                </div>
            </div>
        </div>
        `
        // htmlStr = htmlStr + item 用此來疊加
        htmlStr += item
    })

    // box3.innerHTML = htmlStr
})