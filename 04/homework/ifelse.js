// let title = "你要買啥"
// let title2 = "再問你一次要買啥"

// let waper = window.prompt(title)


// console.log('waper', waper)


// //可在結果再加一個if else
// if (waper === "蘋果") {
//     window.alert('你買到蘋果');
// } else {
//     waper = window.prompt(title2)
//     if (waper === "蘋果") {
//         window.alert('太棒了 你買到了');
//     } else {
//         window.alert('拉基,還是沒買到')
//     }
// }

//if 可以有多種輸入結果

// if (waper === "蘋果") {
//     window.alert('你買到蘋果')
// } else if(waper === "香蕉") {
//     window.alert("你買到香蕉")
// }else{
//     window.alert('你果然是拉基')
// }

//第一次作業:

// let number1 = "1~100請猜一個數字 你有三次機會"
// let number2 = "請猜一個數字 你剩兩次機會囉"
// let number3 = "請猜一個數字 這是你最後的機會"

// let answer = window.prompt(number1)

// console.log(answer)

// if (answer === "57") {
//     window.alert("太猛了吧 第一次就中")
// } else {
//     answer = window.prompt(number2)
//     if (answer === '57') {
//         window.prompt("第二次中,也是不錯喔")
//     } else {
//         answer = window.prompt(number3)
//         if (answer === '57') {
//             window.alert("恭喜你答對囉")
//         } else {
//             window.alert("三次都沒中,可憐哪")
//         }
//     }
// }

// =============解答1===============

// let count = 3
// // true
// while (count > 0) {
//     let res = window.prompt("請輸入")
//     count = count - 1

//     if (res === "57") {
//         window.alert("恭喜猜對")
//         break;
//     } else {
//         window.alert("猜錯囉，剩下" + count + "次機會")
//     }
// }

// window.alert('GG 沒機會了');
// while (count > 0) {
//     count = count - 1
//     console.log(count);
//     // break;
// }

// =============解答1===============


// let number4 = "請猜2個數字  輸入幾個你自己選"
// let number5 = "在猜一次  多輸入點給自己機會嘛"
// let number6 = "再給你一次機會讓自己能多輸入點"

// let answer1 = window.prompt(number4)

// let number7 = "1~100請猜2個數字 你可以開始猜了"
// let number8 = "你還剩兩次機會喔 請猜2個數字"
// let number9 = "你還剩最後一次喔 請猜2個數字"


// if (answer1 > "2") {
//     window.alert('好喔 你可以開始猜數字囉')
//     let answer2 = window.prompt(number7)
//     if (answer2 === 28) {

//         window.alert("太猛了吧 第一次就中")
//     } else {
//         answer2 = window.prompt(number8)
//         if (answer2 === '28') {
//             window.prompt("第二次中,也是不錯喔")

//         } else {
//             answer1 = window.prompt(number5)
//             if (answer1 > "2") {
//                 window.alert('好喔 你可以開始猜數字囉')
//             } else {
//                 window.alert("跟你說要給自己多次了拉")
//                 answer1 = window.prompt(number6)
//                 if (answer1 > "2") {
//                     window.alert('好喔 你可以開始猜數字囉')
//                 } else {
//                     window.alert('你真的沒救了')
//                 }

//             }
//         }
//     }
// }


// =============解答2===============

// 1. 讓用戶自訂count 
// 2. 多個答案 -> 2
// 3. 自訂count > 答案的數量

// 前置設定
const answers = 4
let count = window.prompt("請輸入猜的次數")

while (count < answers) {
    count = window.prompt("猜的次數必須大於" + answers)
}


// 開始猜
// while (count > 0) {
//     // parseInt 用意 "100" -> 100 
//     let res = parseInt(window.prompt("請輸入"))
//     count = count - 1

//     if (res === 57) {
//         window.alert("恭喜猜對")
//         break;
//     } else if (res === 58) {
//         window.alert("恭喜猜對")
//         break;
//     } else if (res === 59) {
//         window.alert("恭喜猜對")
//         break;
//     } else if (res === 60) {
//         window.alert("恭喜猜對")
//         break;
//     } else {
//         if (count === 0) {
//             window.alert('GG 沒機會了');
//         } else {
//             window.alert("猜錯囉，剩下" + count + "次機會")
//         }
//     }
// }

while (count > 0) {
    // parseInt 用意 "100" -> 100 
    let res = parseInt(window.prompt("請輸入"))
    count = count - 1

    // if (res === 57) {
    //     window.alert("恭喜猜對")
    //     break;
    // } else if (res === 58) {
    //     window.alert("恭喜猜對")
    //     break;
    // } else if (res === 59) {
    //     window.alert("恭喜猜對")
    //     break;
    // } else if (res === 60) {
    //     window.alert("恭喜猜對")
    //     break;
    // } else {
    //     if (count === 0) {
    //         window.alert('GG 沒機會了');
    //     } else {
    //         window.alert("猜錯囉，剩下" + count + "次機會")
    //     }
    // }

    switch (res) {
        case 57:
            window.alert("恭喜猜對57")
            break;
        case 58:
            window.alert("恭喜猜對58")
            break;
        case 59:
            window.alert("恭喜猜對59")
            break;
        case 60:
            window.alert("恭喜猜對60")
            break;
        default:
            if (count === 0) {
                window.alert('GG 沒機會了');
            } else {
                window.alert("猜錯囉，剩下" + count + "次機會")
            }
            break;
    }

}


// =============解答2===============

// const res = 99

// switch (res) {
//     case 99:
//         window.alert("99")
//         break;
//     case 100:
//         window.alert("100")
//         break;
//     default:
//         window.alert("default")
//         break;
// }