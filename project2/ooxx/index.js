function circle(res) {
    let circleImg = document.createElement("img");
    circleImg.src = "circle.png";
    // circleImg.setAttribute("id","img1");
    // (return img1 ID無效)
    res.appendChild(circleImg)
}
// (給這張圖片新增ID)

function cross(res) {
    let crossImg = document.createElement("img");
    crossImg.src = "cross.png";
    res.appendChild(crossImg)
}

const player1 = document.getElementById("player1")
const ties = document.getElementById("ties")
const player2 = document.getElementById("player2")


let i = 0
let positionArray = [
    [false, false, false],
    [false, false, false],
    [false, false, false]
]
let circle1 = undefined
let cross1 = undefined
let circle2 = undefined
let cross2 = undefined
let circle3 = undefined
let cross3 = undefined
let circle4 = undefined
let cross4 = undefined
let circle5 = undefined
let cross5 = undefined
let circle6 = undefined
let cross6 = undefined
let circle7 = undefined
let cross7 = undefined
let circle8 = undefined
let cross8 = undefined
let circle9 = undefined
let cross9 = undefined
let player1Score = 0
let player2Score = 0
let tieScore = 0



function p1Win() {
    player1Score = player1Score + 1
    player1.innerText = player1Score
    $('#exampleModal').modal('show')
}

function p2Win() {
    player2Score = player2Score + 1
    player2.innerText = player2Score
    $('#exampleModal').modal('show')
}

function tie() {
    tieScore = tieScore + 1
    ties.innerText = tieScore
    $('#exampleModal').modal('show')
}


function win() {
    if (circle4 === "o" && circle5 === "o" && circle6 === "o") {
        p1Win()
        return
    }
    if (circle1 === "o" && circle2 === "o" && circle3 === "o") {
        p1Win()
        return

    }
    if (circle7 === "o" && circle8 === "o" && circle9 === "o") {
        p1Win()
        return
    }
    if (circle1 === "o" && circle4 === "o" && circle7 === "o") {
        p1Win()
        return
    }
    if (circle2 === "o" && circle5 === "o" && circle8 === "o") {
        p1Win()
        return
    }
    if (circle3 === "o" && circle6 === "o" && circle9 === "o") {
        p1Win()
        return
    }
    if (circle1 === "o" && circle5 === "o" && circle9 === "o") {
        p1Win()
        return
    }
    if (circle3 === "o" && circle5 === "o" && circle7 === "o") {
        p1Win()
        return
    }
    if (cross4 === "x" && cross5 === "x" && cross6 === "x") {
        p2Win()
        return
    }
    if (cross1 === "x" && cross2 === "x" && cross3 === "x") {
        p2Win()
        return
    }
    if (cross7 === "x" && cross8 === "x" && cross9 === "x") {
        p2Win()
        return
    }
    if (cross1 === "x" && cross4 === "x" && cross7 === "x") {
        p2Win()
        return
    }
    if (cross2 === "x" && cross5 === "x" && cross8 === "x") {
        p2Win()
        return
    }
    if (cross3 === "x" && cross6 === "x" && cross9 === "x") {
        p2Win()
        return
    }
    if (cross1 === "x" && cross5 === "x" && cross9 === "x") {
        p2Win()
        return
    }
    if (cross3 === "x" && cross5 === "x" && cross7 === "x") {
        p2Win()
        return
    }
    if (i === 9) {
        tie()
        return
    }
}

function restart(){
    i = 0
    positionArray = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ]
    circle1 = undefined
    cross1 = undefined
    circle2 = undefined
    cross2 = undefined
    circle3 = undefined
    cross3 = undefined
    circle4 = undefined
    cross4 = undefined
    circle5 = undefined
    cross5 = undefined
    circle6 = undefined
    cross6 = undefined
    circle7 = undefined
    cross7 = undefined
    circle8 = undefined
    cross8 = undefined
    circle9 = undefined
    cross9 = undefined

    let list1 = document.getElementById("frame1");
    if (list1.childNodes[0] !== undefined) {
        list1.removeChild(list1.childNodes[0]);
    }
    let list2 = document.getElementById("frame2");
    if (list2.childNodes[0] !== undefined) {
        list2.removeChild(list2.childNodes[0]);
    }
    let list3 = document.getElementById("frame3");
    if (list3.childNodes[0] !== undefined) {
        list3.removeChild(list3.childNodes[0]);
    }
    let list4 = document.getElementById("frame4");
    if (list4.childNodes[0] !== undefined) {
        list4.removeChild(list4.childNodes[0]);
    }
    let list5 = document.getElementById("frame5");
    if (list5.childNodes[0] !== undefined) {
        list5.removeChild(list5.childNodes[0]);
    }
    let list6 = document.getElementById("frame6");
    if (list6.childNodes[0] !== undefined) {
        list6.removeChild(list6.childNodes[0]);
    }
    let list7 = document.getElementById("frame7");
    if (list7.childNodes[0] !== undefined) {
        list7.removeChild(list7.childNodes[0]);
    }
    let list8 = document.getElementById("frame8");
    if (list8.childNodes[0] !== undefined) {
        list8.removeChild(list8.childNodes[0]);
    }
    let list9 = document.getElementById("frame9");
    if (list9.childNodes[0] !== undefined) {
        list9.removeChild(list9.childNodes[0]);
    }
}


const frame1 = document.getElementById("frame1")
frame1.addEventListener("click", function () {
    if (positionArray[0][0] === true) {
        return
    }
    if (i % 2 === 0) {
        circle(frame1)
        circle1 = "o"
    } else {
        cross(frame1)
        cross1 = "x"
    }
    positionArray[0][0] = true
    i++
    win()
    // if (i === 0) {
    //     circle(frame1)
    //     i = 1
    //     circle1 = "o"
    // } else {
    //     cross(frame1)
    //     i = 0
    //     cross1 = "x"
    //     console.log(cross1)
    // }
})
const frame2 = document.getElementById("frame2")
frame2.addEventListener("click", function () {
    if (positionArray[0][1] === true) {
        return
    }
    if (i % 2 === 0) {
        circle(frame2)
        circle2 = "o"
    } else {
        cross(frame2)
        cross2 = "x"
    }
    positionArray[0][1] = true
    i++
    win()
})
const frame3 = document.getElementById("frame3")
frame3.addEventListener("click", function () {
    if (positionArray[0][2] === true) {
        return
    }
    if (i % 2 === 0) {
        circle(frame3)
        circle3 = "o"
    } else {
        cross(frame3)
        cross3 = "x"
    }
    positionArray[0][2] = true
    i++
    win()
})
const frame4 = document.getElementById("frame4")
frame4.addEventListener("click", function () {
    if (positionArray[1][0] === true) {
        return
    }
    if (i % 2 === 0) {
        circle(frame4)
        circle4 = "o"
    } else {
        cross(frame4)
        cross4 = "x"
    }
    positionArray[1][0] = true
    i++
    win()
})
const frame5 = document.getElementById("frame5")
frame5.addEventListener("click", function () {
    if (positionArray[1][1] === true) {
        return
    }
    if (i % 2 === 0) {
        circle(frame5)
        circle5 = "o"
    } else {
        cross(frame5)
        cross5 = "x"
    }
    positionArray[1][1] = true
    i++
    win()
})
const frame6 = document.getElementById("frame6")
frame6.addEventListener("click", function () {
    if (positionArray[1][2] === true) {
        return
    }
    if (i % 2 === 0) {
        circle(frame6)
        circle6 = "o"
    } else {
        cross(frame6)
        cross6 = "x"
    }
    positionArray[1][2] = true
    i++
    win()
})
const frame7 = document.getElementById("frame7")
frame7.addEventListener("click", function () {
    if (positionArray[2][0] === true) {
        return
    }
    if (i % 2 === 0) {
        circle(frame7)
        circle7 = "o"
    } else {
        cross(frame7)
        cross7 = "x"
    }
    positionArray[2][0] = true
    i++
    win()
})
const frame8 = document.getElementById("frame8")
frame8.addEventListener("click", function () {
    if (positionArray[2][1] === true) {
        return
    }
    if (i % 2 === 0) {
        circle(frame8)
        circle8 = "o"
    } else {
        cross(frame8)
        cross8 = "x"
    }
    positionArray[2][1] = true
    i++
    win()
})
const frame9 = document.getElementById("frame9")
frame9.addEventListener("click", function () {
    if (positionArray[2][2] === true) {
        return
    }
    if (i % 2 === 0) {
        circle(frame9)
        circle9 = "o"
    } else {
        cross(frame9)
        cross9 = "x"
    }
    positionArray[2][2] = true
    i++
    win()
})


const restartButton = document.getElementById("restartButton")
restartButton.addEventListener("click", function () {
    restart()
})

const ooxxModel = document.getElementById("ooxxModel")
ooxxModel.addEventListener("click", function () {
    restart()
    $('#exampleModal').modal('hide')
})

const meanbar = document.getElementById('meanbar')

const sidebar = document.getElementById("sidebar")
sidebar.addEventListener("click", function () {
    sidebar.style.right = "-9999px"
    meanbar.style.right = "-9999px"
})


const mobileheaderContent2 = document.getElementById('mobileheaderContent2')
mobileheaderContent2.addEventListener('click',function(){
    meanbar.style.right = "0px"
    sidebar.style.right = "0px"
})