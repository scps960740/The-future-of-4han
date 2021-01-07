// https://javascript.alphacamp.co/condition.html

// 1. 寫出如果變數a有6顆就印出"買七顆雞蛋"的程式
// let b = window.prompt("輸入數字")
// if(b === "6"){
//     window.alert("買七顆雞蛋")
// }

// 2. 寫出如果變數a有6顆就印出"買七顆雞蛋"否則印出"買籃子"的程式
// let a = window.prompt("輸入數字")
// if (a === "6") {

//     window.alert("買七顆雞蛋")
// } else { 
//     window.alert("買籃子")
// }
// 3. 寫出成績區間的程式
// ex:
// 90~100 印出 "菁英"
// 80~90 印出 "大師"
// 70~80 印出 "鑽石"
// 60~70 印出 "白金"
// 50~60 印出 "金牌"
// 50以下 印出 "垃圾"

let grades = window.prompt("請輸入成績1~100")

if (grades < "100",grades > "90") {
    console.log("菁英")
}
else if (grades < "90",grades > "80") {
    console.log("大師")
}
else if (grades < "80",grades > "70") {
    console.log("鑽石")
}
else if (grades < "70",grades > "60") {
    console.log("白金")
}
else if (grades < "60",grades > "50") {
    console.log("金牌")
}
else if (grades < "50",grades > "0") {
    console.log("垃圾")
}
