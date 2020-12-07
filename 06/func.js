// // let a = 1;

// // // 1. 無參數
// // // 宣告
// // function print() {
// //   let a = 100;
// //   console.log(a);
// // }

// // // 執行
// // // print()

// // // 2. 有參數
// // // 宣告
// // function print2(a) {
// //   console.log("a", a);
// // }

// // // 執行
// // // print2(1000)

// // // 3. 有預設值的參數
// // // 宣告
// // function print3(a = 1000) {
// //   console.log("a", a);
// // }

// // // 執行
// // // print3()
// // // print3(3000)

// // // 4. 有回傳東西
// // // 宣告
// // function plus(a, b) {
// //   let res = a + b;
// //   return res;
// // }

// // let rr = plus(100, 200);

// // console.log(rr);

// // 封裝！！！！
// // function startSuperNumber(title, ans, min, max) {
// //   while (true) {
// //     let x = parseInt(window.prompt(title + min + "~" + max));
// //     if (x > ans) {
// //       max = x;
// //       window.alert(min + "~" + max);
// //     } else if (x < ans) {
// //       min = x;
// //       window.alert(min + "~" + max);
// //     } else if (x === ans) {
// //       window.alert("恭喜答對");
// //       break;
// //     }
// //   }
// // }
// // // 第一關
// // startSuperNumber("終極密碼第一關開始:", 80, 1, 1000);
// // // 第二關
// // startSuperNumber("終極密碼第二關開始:", 90, 1, 2000);
// // // 第三關
// // startSuperNumber("終極密碼第三關開始:", 90, 1, 2000);

// // let ooxx = [
// //   ["*1", "*2", "*3"], // 0
// //   ["*", "*", "*"], // 1
// //   ["*", "*", "*"], // 2
// // ];

// // console.log(ooxx[0][0]);
// // console.log(ooxx[0][1]);
// // console.log(ooxx[0][3]);

// let ooxx = [
//   ["*1", "*2", "*3"], // 0
//   ["*4", "*5", "*6"], // 1
//   ["*7", "*8", "*9"], // 2
// ];

// for (let i = 0; i < ooxx.length; i++) {
//   let level = "";
//   for (let k = 0; k < ooxx[i].length; k++) {
//     level = level + " " + ooxx[i][k];
//   }
//   console.log(level);
// }

// ooxx[0][0] = "X";

// for (let i = 0; i < ooxx.length; i++) {
//   let level = "";
//   for (let k = 0; k < ooxx[i].length; k++) {
//     level = level + " " + ooxx[i][k];
//   }
//   console.log(level);
// }


// function test (num) {
//   if (num > 90) {
//     console.log("歡樂牛排館 豬排加鐵板麵")
//   }

//   if (num > 80) {
//     console.log("陳亮夫的獎勵卡")
//   }

//   if (num > 70) {
//     console.log("50嵐珍珠奶茶")
//   }

//   if (num > 60) {
//     console.log("麥香奶茶")
//   }

//   if (num > 0) {
//     console.log("捏奶頭")
//   }
// }

// function test (num) {
//   if (num > 90) {
//     console.log("歡樂牛排館 豬排加鐵板麵")
//   } else if (num > 80) {
//     console.log("陳亮夫的獎勵卡")
//   } else if (num > 70) {
//     console.log("50嵐珍珠奶茶")
//   } else if (num > 60) {
//     console.log("麥香奶茶")
//   } else if (num > 0) {
//     console.log("捏奶頭")
//   }
// }

function test (num) {
  if (num > 90) {
    console.log("歡樂牛排館 豬排加鐵板麵")
    return
  }

  if (num > 80) {
    console.log("陳亮夫的獎勵卡")
    return
  }

  if (num > 70) {
    console.log("50嵐珍珠奶茶")
    return
  }

  if (num > 60) {
    console.log("麥香奶茶")
    return
  }

  if (num > 0) {
    console.log("捏奶頭")
    return
  }
}

test(100)