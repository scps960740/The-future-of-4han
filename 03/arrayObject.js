// object 物件 第一種型態

// let name = "許善"
// let age = 18
// JSON === 物件
let card = {
  name: "許善",
  age: 18
}

// . === 的
console.log('card', card);
// console.log('name', card.name);
// console.log('age', card.age);
console.log('age', card['age']);

let phone = {
  keyboard: "鍵盤",
  startButton: "開機",
  screen: "螢幕"
}

let car = {
  wheel: "輪胎",
  window: "窗戶"
}

// console.log('phone', phone);

// 陣列 物件的一種

let box = [19, 18, 20, 40];
console.log(box[0]);
console.log(box[1]);
console.log(box[2]);
console.log(box[3]);
console.log(box[4]);

console.log('box', box)
console.log('box length', box.length)
