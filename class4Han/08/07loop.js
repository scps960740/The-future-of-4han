// https://javascript.alphacamp.co/loop.html


// 寫出基本的跑10次的while迴圈，印出1 ~ 10的數字

// let i = 0
// while (i<11) {
//     console.log(i++)
// }

// 寫出基本的跑10次的for迴圈，印出1 ~ 10的數字

// for (let i = 0; i < 11; i++) {
//     console.log(i)
// }
// 寫出迴圈跑三次，連結每次的index字串，結果是"012"

// let level = ""
// for (let x = 0; x < 3; x++) {
//     level = level + x.toString()
// }
// console.log(level)

// 寫出迴圈跑三次，裡面跑三次，結果是"012 012 012"

// let res = ""

// for(y=0;y<3;y++){
//     let level = ""
// for(x=0;x<3;x++){   
//     level = level + x.toString()
//     }
//     res = res + " " +level 
// }
// console.log(res)


// 用for寫出九九乘法表

// for (let x = 1; x < 10; x++) {
//     console.log(x + "的倍數")
//     for (let y = 1; y < 10; y++) {
//         console.log(x + "X" + y + "=" + (x * y))
//     }
// }

// 用while + if寫出終極密碼
// let max = "100"
// let min = "0"

// while (true) {
//     let answer = window.prompt("請輸入終極密碼" + min + "~" + max)
//     if (answer > "75") {
//         max = answer
//         window.alert(min + "~" + max)
//     }
//     if (answer < "75") {
//         min = answer
//         window.alert(min + "~" + max)
//     }
//     if (answer === "75") {
//         window.alert("恭喜答對")
//         break;
//     }
// }

// 用迴圈while or for，計算1加到100(1 + 2 + 3... + 100)的結果

// let cel = 0

// for(let x=0;x<=100;x++){
//     cel = cel + x
// }
// console.log(cel)

// 給一個陣列 
let arr = [100, 200, 300]
// 用迴圈遍歷arr並印出大於100的數字的index跟數字本身 （需搭配if）

for (let c = 0; c < arr.length; c++) {
    if (arr[c] > 100) {
        console.log(arr[c],c)
    }
}

// 給一個陣列 
// let arr = [100, 200, 300]
// 用迴圈遍歷arr並修改大於100的數字變成999 （需搭配if）

for(let a = 0;a < arr.length;a++){
    if (arr[a]>100) {
        arr[a] = 999
    }
}
console.log(arr)
// 給一個陣列 
// let arr = [100, 200, 300]
// 用迴圈遍歷arr並修改大於100的數字變成999 （需搭配if）
