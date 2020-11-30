// for

// 計數器

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// for (let i = 5; i >= 0; i--) {
//   console.log(i);
// }

// let i = 5
// for (; i >= 0; i--) {
//   console.log(i);
// }
// // TODO del
// console.log('外面', i);

// let sum = 0
// for (let i = 5; i >= 0; i--) {
//   sum = sum + i
// }

//   // 群組有三組
//   // 每組有兩個人

// for (let y = 0 ;y <= 5; y++){
//   console.log(y)
// }

// console.log("結束")

// for (let i = 3 ;i >= 0; i*2){
//   console.log(i)
// }

//---------終極密碼----------------

// let max = "100"
// let min = "1"
// let ans = "50"

// while (true) {
//   let x = window.prompt("終極密碼開始:" + min + "~" + max)
//   if (x > ans) {
//     max = x
//     window.alert(min + "~" + max)
//   } else if(x < ans){
//     min = x
//     window.alert(min + "~" + max)
//   } else if (x === ans) {
//     window.alert("恭喜答對")
//     break;
//   }
// }

// 封裝！！！！
function startSuperNumber(title, ans, min, max) {
  while (true) {
    let x = parseInt(window.prompt(title + min + "~" + max))
    if (x > ans) {
      max = x
      window.alert(min + "~" + max)
    } else if(x < ans){
      min = x
      window.alert(min + "~" + max)
    } else if (x === ans) {
      window.alert("恭喜答對")
      break;
    }
  }
}
// 第一關
startSuperNumber("終極密碼第一關開始:", 80, 1, 1000)
// 第二關
startSuperNumber("終極密碼第二關開始:", 90, 1, 2000)
// 第三關
startSuperNumber("終極密碼第三關開始:", 90, 1, 2000)

//---------九九乘法表-------------

// 留言的陣列
// let arr = [
//   {
//     name: "許善",
//     comment: "留言一",
//   },
//   {
//     name: "許綸",
//     comment: "留言二",
//   },
//   {
//     name: "鈺霖",
//     comment: "留言三",
//   },
//   {
//     name: "爽哲",
//     comment: "留言四",
//   },
// ];

// for (let i = 0; i < arr.length; i++) {
//   console.log("名字：", arr[i].name)
//   console.log("留言內容：", arr[i].comment)
// }

// arr.forEach(data => {
//   console.log("名字：", data.name)
//   console.log("留言內容：", data.comment)
// })


// for (let i = 1; i < 10; i++) {
//   console.log("九九乘法表:", i);

//   let l = 1;
//   for (let k = 1; k < 10; k++) {
//     console.log(i + "x" + k + "=" + k * k);
//   }
// }

//--------加法乘法除法減法----------

// 減法
// let q = 5
// while(q > 0){
//   console.log(q + "-" +"1" +"="+ (q-1))
//   q--
// }

// 除法
// let s = 1
// while(s <= 6){
//   console.log(s + "除" + "2" +"="+ (s/2))
//   s++
// }
