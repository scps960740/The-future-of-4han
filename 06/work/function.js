// let x = 1

// function text() {
//     console.log(x)
// }

// text()


// //1.無參數
// //2.宣告

// function text1() {
//     let x = 100
//     console.log(x)
// }

// //執行
// text1()

// //1.有參數
// //2.宣告

// function text2(x) {
//     console.log('x', x)
// }

// //1.有預設值的參數
// //2.宣告

// function text3(x = 1000) {
//     console.log("x:",x)
// }

// //執行
// text3(3000)

// //有回傳功能
// //宣告
// function text4(a,b) {
//     let res = a + b    
//     return res
// }

// let rr = text4(200,200)

// console.log(rr)


//用function去整理終極密碼(封裝功能去使用)

// function starSuperNumber(tittle,ans,min,max) {
// while (true) {
//     let x = parseInt(window.prompt(tittle + min + "~" + max))
//     if (x > ans) {
//       max = x
//       window.alert(min + "~" + max)
//     } else if(x < ans){
//       min = x
//       window.alert(min + "~" + max)
//     } else if (x === ans) {
//       window.alert("恭喜答對")
//       break;
//     } 
//   }
// }

//------執行終極密碼-------

// starSuperNumber("第一關開始",50,1,100)

// starSuperNumber("第二關開始",150,1,200)


// let ooxx1 = [
//   ["*1", "*2", "*3"], // 0
//   ["*", "*", "*"], // 1
//   ["*", "*", "*"], // 2
// ];

// console.log(ooxx1[0][0]);
// console.log(ooxx1[0][1]);
// console.log(ooxx1[0][2]);


//   for (let i = 0; i < ooxx1.length; i++) {
//     let level = "";
//     for (let k = 0; k < ooxx1[i].length; k++) {
//         level = level + " " + ooxx[i][k];
//     }
//     console.log(level);
//   }

// ooxx[0][0] = "X";

// for (let i = 0; i < ooxx.length; i++) {
//     let level = "";
//     for (let k = 0; k < ooxx[i].length; k++) {
//         level = level + " " + ooxx[i][k];
//     }
//     console.log(level);
// }





// // for (let i = 0; i < ooxx.length; i++) {
// // let go = '';
// // for (let k = 0; k < ooxx[i].length; k++) {
// //     go = go + ' ' + ooxx[i][k];
// // }
// // console.log(go);
// // }


// for (let k = 0; k < ooxx.length; k++) {
//     let go = "";
//     console.log('重製-',go)
//     for (let k = 0; k < ooxx[i].length; k++) {
//         go = go + "" + ooxx[i][k];
//     }
//     console.log(go);
// }



//---------------ooxx解答----------------



let ooxx = [
    ["*", "*", "*"], 
    ["*", "*", "*"],
    ["*", "*", "*"],
];


//架設9*9框架

// res = ""
// 1. level = ""

// res = level + "\n" + level + "\n" + level


function print() {
    let res = ''
    for (i = 0; i < ooxx.length; i++) {
        let level = '' 
        // "*" k = 0
        // "**" k = 1
        // "***"
        for (k = 0; k < ooxx[i].length; k++) {
            level = level + " " + ooxx[i][k]  
        }
        res = res + level + "\n"
    }
    window.alert(res)
}

//判別是否有位置可以下

function valid() {

    let res = false
    for (i = 0; i < ooxx.length; i++) {
        for (k = 0; k < ooxx[i].length; k++) {
            if (ooxx[i][k] === "*") {
                res = true
            }
        }
    }
    return res
}

function isFilled(a, b) {
    return ooxx[a][b]
}

function outOfBound(a, b) {
    let res = true
    if (a >= ooxx.length || a < 0) {
        res = false
    }
    if (b >= ooxx[0].length || b < 0) {
        res = false
    }
    return res
}

// let ooxx = [
//     ["*", "*", "*"], // 0
//     ["*", "*", "*"], // 1
//     ["*", "*", "*"],
// ];

function checkWin() {
    // let result = false
    // [...] === "..." -> 不相等
    // if (ooxx[0] === "O" || ooxx[0] === "X") {
    //     result = true
    // };
    // if (ooxx[1] === "O" || ooxx[1] === "X") {
    //     result = true
    // };
    // if (ooxx[2] === "O" || ooxx[2] === "X") {
    //     result = true
    // };

    // O + O + O = "OOO"
    if (ooxx[0][0] + ooxx[1][0] + ooxx[2][0] === "OOO" || ooxx[0][0] + ooxx[1][0] + ooxx[2][0] === "XXX") {
        // result = true
        return true
    };
    if (ooxx[0][1] + ooxx[1][1] + ooxx[2][1] === "OOO" || ooxx[0][1] + ooxx[1][1] + ooxx[2][1] === "XXX") {
        // result = true
        return true
    };
    if (ooxx[0][2] + ooxx[1][2] + ooxx[2][2] === "OOO" || ooxx[0][2] + ooxx[1][2] + ooxx[2][2] === "XXX") {
        // result = true
        return true
    };
    if (ooxx[0][0] + ooxx[1][1] + ooxx[2][2] === "OOO" || ooxx[0][0] + ooxx[1][1] + ooxx[2][2] === "XXX") {
        // result = true
        return true
    };
    if (ooxx[0][2] + ooxx[1][1] + ooxx[2][0] === "OOO" || ooxx[0][2] + ooxx[1][1] + ooxx[2][0] === "XXX") {
        // result = true
        return true
    };
    return false
}

let rr = valid()
let x = ""
let y = ""
let z = ""

while (rr === true) {

    rr = valid()
    if (rr === false) {
        break;
    }
    x = window.prompt('請輸入第幾列')
    y = window.prompt('請輸入第幾行')
    z = window.prompt("選擇O或X")
    if (outOfBound(x, y) && isFilled(x, y) === "*" && (z === "O" || z === "X")) {
        ooxx[x][y] = z
    }
    if (checkWin() === true) {
        window.alert("有人獲勝了!!!")
        break;
    }
    print()
}


// ----不重覆下同一位置----
// ----不下在框框外----
// ----不能同時下兩個O----
// ----判斷勝負----


//-------作業------
//1.做一個OOXX的網頁
//2.使OOXX做出判斷勝負


