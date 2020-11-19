let title = "請輸入要買的....";
// let title2 = "再一次請輸入要買的....";

// 第一次輸入
let content = window.prompt(title);

// if (content === "蘋果") {
//   window.alert("你第一次就買到蘋果！");
// } else {
//   content = window.prompt(title2)
//   if (content === "蘋果") {
//     window.alert("你二次來買到蘋果");
//   } else {
//     window.alert("廢物，給你第二次機會還買不到");
//   }
// }


if (content === "蘋果") {

  console.log("買到蘋果");
  
} else if (content === "香蕉") {

  console.log("買到香蕉");
  
} else if (content === "西瓜") {

  console.log("買到西瓜");
  
} else if (content === "橘子") {

  console.log("買到橘子");
  
} else {

  console.log("啥都沒法買");

}


// 終極密碼 （一個答案）。
// 條件輸入1~100的數字去猜一個答案。
// 如果輸入超出範圍，要提示重新整理網頁重新輸入。
// 只給3次機會。

// 終極密碼二 （多個答案）。
// 條件輸入1~100的數字去猜多個答案。
// 機會次數讓用戶自訂。
// 但如果用戶自訂的機會次數小於你有幾個答案，重新整理網頁重新輸入。。
// ex 有3個答案，用戶輸入2，跳彈窗提示要輸入3以上的數字。

