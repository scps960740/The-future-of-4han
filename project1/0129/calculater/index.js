const detail = document.getElementById("detail")
const result = document.getElementById("result")
const currenResultArray = []
let beforeCalculate = false
let afterCalculate = false
let sum = undefined
let current = undefined
let status = ""

function calculate() {
    switch (status) {
        case "+":
            sum = sum + current
            result.innerText = sum
            break;
        case "-":
            sum = sum - current
            result.innerText = sum
            break;
        case "*":
            sum = sum * current
            result.innerText = sum
            break;
        case "/":
            sum = sum / current
            result.innerText = sum
            break;
    }
}

function upDatedetail(num) {
    detail.innerText = detail.innerText + num
}

function upDateresult(num) {
    if (beforeCalculate === false && afterCalculate === true) {
        result.innerText = num
    } else {
        result.innerText = result.innerText + num
    }
}

const buttom1 = document.getElementById("buttom1")
buttom1.addEventListener("click", function () {
    upDateresult("1")
    upDatedetail("1")
    beforeCalculate = true
    afterCalculate = false
})
const buttom2 = document.getElementById("buttom2")
buttom2.addEventListener("click", function () {
    upDateresult("2")
    upDatedetail("2")
    beforeCalculate = true
    afterCalculate = false
})
const buttom3 = document.getElementById("buttom3")
buttom3.addEventListener("click", function () {
    upDateresult("3")
    upDatedetail("3")
    beforeCalculate = true
    afterCalculate = false
})

const buttom4 = document.getElementById("buttom4")
buttom4.addEventListener("click", function () {
    upDateresult("4")
    upDatedetail("4")
    beforeCalculate = true
    afterCalculate = false
})
const buttom5 = document.getElementById("buttom5")
buttom5.addEventListener("click", function () {
    upDateresult("5")
    upDatedetail("5")
    beforeCalculate = true
    afterCalculate = false
})
const buttom6 = document.getElementById("buttom6")
buttom6.addEventListener("click", function () {
    upDateresult("6")
    upDatedetail("6")
    beforeCalculate = true
    afterCalculate = false
})


const buttom3Addition = document.getElementById("buttom3Addition")
buttom3Addition.addEventListener("click", function () {
    if(beforeCalculate === true && afterCalculate === false){
        upDatedetail("+")
        result.innerText = "" 
        beforeCalculate = false
        afterCalculate = false
    }
})
const buttomSubtraction = document.getElementById("buttomSubtraction")
buttomSubtraction.addEventListener("click", function () {
    if(beforeCalculate === true && afterCalculate === false){
        upDatedetail("-")
        result.innerText = "" 
        beforeCalculate = false
        afterCalculate = false
    }
})
const buttom7 = document.getElementById("buttom7")
buttom7.addEventListener("click", function () {
    upDateresult("7")
    upDatedetail("7")
    beforeCalculate = true
    afterCalculate = false
})
const buttom8 = document.getElementById("buttom8")
buttom8.addEventListener("click", function () {
    upDateresult("8")
    upDatedetail("8")
    beforeCalculate = true
    afterCalculate = false
})
const buttom9 = document.getElementById("buttom9")
buttom9.addEventListener("click", function () {
    upDateresult("9")
    upDatedetail("9")
    beforeCalculate = true
    afterCalculate = false
})

const buttom0 = document.getElementById("buttom0")
buttom0.addEventListener("click", function () {
    upDateresult("0")
    upDatedetail("0")
    beforeCalculate = true
    afterCalculate = false
})

const buttom00 = document.getElementById("buttom00")
buttom00.addEventListener("click", function () {
    upDateresult("00")
    upDatedetail("00")
    beforeCalculate = true
    afterCalculate = false
})
const buttomMultiplication = document.getElementById("buttomMultiplication")
buttomMultiplication.addEventListener("click", function () {
    if(beforeCalculate === true && afterCalculate === false){
        upDatedetail("*")
        result.innerText = "" 
        beforeCalculate = false
        afterCalculate = false
    }
})
const buttomDivision = document.getElementById("buttomDivision")
buttomDivision.addEventListener("click", function () {
    if(beforeCalculate === true && afterCalculate === false){
        upDatedetail("/")
        result.innerText = "" 
        beforeCalculate = false
        afterCalculate = false
    }
})

const buttomAC = document.getElementById("buttomAC")
buttomAC.addEventListener("click", function () {
    detail.innerText = "";
    result.innerText = "";
    currenResultArray.length = [];
    sum = 0
    beforeCalculate = false
    afterCalculate = false

})


// includes檢測[]裡面是否有包含該內容
//if (數字裡面沒有.才可以加.所以用!去讓他把數字裡有點 變成false使他不成立if)
const buttomComma = document.getElementById("buttomComma")
buttomComma.addEventListener("click", function () {
    let comma = result.innerText
    if (!comma.includes(".")) {
        comma = comma + ".";
        result.innerText = comma;
        upDatedetail(".")
    }
})

const buttomEqual =document.getElementById("buttomEqual")
buttomEqual.addEventListener("click",function(){
    let finalDetail = detail.innerText;
  if (
    finalDetail[finalDetail.length - 1] === "/" ||
    finalDetail[finalDetail.length - 1] === "*" ||
    finalDetail[finalDetail.length - 1] === "+" ||
    finalDetail[finalDetail.length - 1] === "-"
  ) {
    let ces = finalDetail.split("");
    ces = ces.slice(0, ces.length - 1);
    finalDetail = ces.join("");
  }

  let res = eval(finalDetail);
  result.innerText = res.toFixed(2);

  detail.innerText = ""
  beforeCalculate = false;
  afterCalculate = true;
})

const buttomFallback = document.getElementById("buttomFallback")
buttomFallback.addEventListener("click", function () {
    // let  detailText = detail.innerText;
    // console.log(detailText.length);
    // let res = detailText.split("");
    // res = res.slice(0,res.length - 1);
    // res = res.join("");

    // detail.innerText = res
    if (beforeCalculate === true && afterCalculate === false) {
        let resultText = result.innerText;
        let ces = resultText.split("");
        ces = ces.slice(0, ces.length - 1);
        ces = ces.join("");

        result.innerText = ces
        console.log(55)
    }
})
// (倒退鍵 先把result的文字傳換成陣列 使他產生長度(length)才有辦法去刪除最後一個字)
// (在判斷是否按下數字鍵 還沒產生結果時 才能其倒退 用IF+布林直去辨別按數字的當下)


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