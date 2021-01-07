const buttom1 = document.getElementById("buttom1")
buttom1.addEventListener("click", function () {
    result.innerText = "1"
})
const buttom2 = document.getElementById("buttom2")
buttom2.addEventListener("click", function () {
    result.innerText = "2"
})
const buttom3 = document.getElementById("buttom3")
buttom3.addEventListener("click", function () {
    result.innerText = "3"
})
const buttom4 = document.getElementById("buttom4")
// buttom4.addEventListener("click",function () {
//     result.innerText = "0"   
// })
const buttom5 = document.getElementById("buttom5")
buttom5.addEventListener("click", function () {
    result.innerText = "4"
})
const buttom6 = document.getElementById("buttom6")
buttom6.addEventListener("click", function () {
    result.innerText = "5"
})
const buttom7 = document.getElementById("buttom7")
buttom7.addEventListener("click", function () {
    result.innerText = "6"
})
const buttom8 = document.getElementById("buttom8")
buttom8.addEventListener("click", function () {
    result.innerText = "+"
})
const buttom9 = document.getElementById("buttom9")
buttom9.addEventListener("click", function () {
    result.innerText = "-"
})
const buttom10 = document.getElementById("buttom10")
buttom10.addEventListener("click", function () {
    result.innerText = "7"
})
const buttom11 = document.getElementById("buttom11")
buttom11.addEventListener("click", function () {
    result.innerText = "8"
})
const buttom12 = document.getElementById("buttom12")
buttom12.addEventListener("click", function () {
    result.innerText = "9"
})
const buttom13 = document.getElementById("buttom13")
buttom13.addEventListener("click", function () {
    result.innerText = "x"
})
const buttom14 = document.getElementById("buttom14")
buttom14.addEventListener("click", function () {
    result.innerText = "÷"
})
const buttom15 = document.getElementById("buttom15")
// buttom15.addEventListener("click",function () {
//     result.innerText = "."   
// })
const buttom16 = document.getElementById("buttom16")
buttom16.addEventListener("click", function () {
    result.innerText = "0"
})
const buttom17 = document.getElementById("buttom17")
// buttom17.addEventListener("click",function () {
//     result.innerText = "~"   
// })
const buttom18 = document.getElementById("buttom18")
buttom18.addEventListener("click", function () {
    result.innerText = "="
})
const detail = document.getElementById("detail")
const result = document.getElementById("result")

let pendingVal;
let evalStrAry = [];
let evalStrAry_math = [];
let displayVal = '0';
let btnText;

buttom4.addEventListener("click", () => {
    displayVal = "0";
    pendingVal = undefined;
    evalStrAry = [];
    evalStrAry_math = [];
    detail.innerText = displayVal;
    result.innerText = displayVal;
}, false);

// slice 指從頭到尾的所有內容
buttom17.addEventListener("click", () => {
    let displayVal_lenth = displayVal.length;
    displayVal = displayVal.slice(0, displayVal_lenth - 1);
    if (displayVal === "") {
        displayVal = "0";
    }
    result.innerText = displayVal;
    detail.innerText = displayVal;
}, false)


// includes檢測[]裡面是否有包含該內容
//if (數字裡面沒有.才可以加.所以用!去讓他把數字裡有點 變成false使他不成立if)
buttom15.addEventListener("click", () => {
    if (!displayVal.includes(".")) {
        displayVal += ".";
    }
    result.innerText = displayVal;
    detail.innerText = displayVal;
}, false);


let updateDisplayVal = (e) => {
    btnText = e.tatget.dataset.num;
    if (displayVal === "0") {
        displayVal = "";
        displayVal += btnText;
    } else {
        displayVal += btnText;
    }
    result.innerText = displayVal;
    detail.innerText = displayVal;
}