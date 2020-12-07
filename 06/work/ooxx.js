// let ooxx = [
//   ["1", "2", "3"], // 0
//   ["4", "5", "6"], // 1
//   ["7", "8", "9"], // 2
// ];

// // let level = "";

// // for (let i = 0; i < ooxx.length; i++) {
// //   let level = "";
// //   console.log("重置 - ", level);
// //   for (let k = 0; k < ooxx[i].length; k++) {
// //     level = level + " " + ooxx[i][k];
// //     console.log(i, level);
// //   }
// //   // level = "4 5 6"
// // }

// // 1 2 3 * * * * * *

// // ooxx[0][0] = "X";

// // for (let i = 0; i < ooxx.length; i++) {
// //   let level = "";
// //   for (let k = 0; k < ooxx[i].length; k++) {
// //     level = level + " " + ooxx[i][k];
// //   }
// //   console.log(level);
// // }

// // let str = ""

// // // str = str + " " + '1' str === " 1"
// // // str = str + " " + '2' str === " 1 2"
// // // str = str + " " + '3' str === " 1 2 3"
// // // str = str + " " + '4' str === " 1 2 3 4"

// // for (let i = 1; i < 5; i++) {
// //     str = str + " " + i
// // }

// // let result = " 1 2 3 4"

// // console.log(result === str)
// // console.log(result === str)

// // let arr = []

// // arr.push("1") // [1]
// // arr.push("2") // [1, 2]
// // arr.push("3") // [1, 2, 3]

// // for (let i = 1; i < 4; i++) {
// //     arr.push(i)
// // }

// // console.log(arr);

// let level = ""
// let level2 = ""

// level = level = "1"

// console.log(level)
// console.log(level2)

let ooxx = [["*", "*", "*"], ["*", "*", "*"], ["*", "*", "*"]];

//架設9*9框架

function print() {
  let res = ""
  // 123 '\n'
  // 123 '\n' 456 '\n'
  // 123 456 789
  for (i = 0; i < ooxx.length; i++) {
    let level = "";
    for (k = 0; k < ooxx[i].length; k++) {
      level = level + " " + ooxx[i][k];
    }
    res = res + level + "\n"
  }

  window.alert(res)
}

//判別是否有位置可以下

function valid() {
  let res = false;
  for (i = 0; i < ooxx.length; i++) {
    for (k = 0; k < ooxx[i].length; k++) {
      if (ooxx[i][k] === "*") {
        res = true;
      }
    }
  }
  return res;
}

let rr = valid();
let x = "";
let y = "";
let z = "";

while (rr === true) {
  rr = valid();
  if (rr === false) {
    break;
  }
  x = window.prompt("請輸入第幾列");
  y = window.prompt("請輸入第幾行");
  z = window.prompt("選擇O或X");
  ooxx[x][y] = z;
  print();
}
