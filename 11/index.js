// 1. new出來，環境隔離，不像直接指派，環境會共用
// 2. this => 看當下誰執行它，比如car.start => this就是car，aa.start => this就是aa
// 3. JS的this不忠誠啊
// 4. 用箭頭函式可以讓this綁定好，讓他忠誠。
// 5. JS的class只是語法糖。
// 6. 內容有this的funtion叫做「構造function」。 (constructor function)

class Car {
  name = ""

  constructor(carName) {
    this.name = carName
  }

  start() {
    console.log('開跑囉：', this.name)
  }

  // start = () => {
  //   console.log('開跑囉：', this.name)
  // }

  stop() {
    console.log('踩煞車', this.name)
  }
}

// function Car(carName) {
//   this.name = carName
// }
// Car.prototype.start = function() {
//   console.log('開跑囉：', this.name)
// }
// Car.prototype.stop = function() {
//   console.log('踩煞車：', this.name)
// }

// 範例：this亂跑
// const div1 = document.getElementById('div1')
// const callback = c1.start
// div1.addEventListener('click', callback)


// function Car(carName) {
//   this.name = carName
// } 

// const aa = {
//   name: "AA"
// }

// class
// 構造函數
function Car(carName) {
  this.name = carName
}

// 只要內容有this，都不能簡寫
// const Car = () => {
//   this.name = carName
// }

// new 建立
const c1 = new Car("保時捷") 
// TODO del
console.log('c1.name', c1.name)

// aa.start = c1.start
// // console.log('aa', aa)
// aa.start()
// console.log('c1', c1)

const c2 = new Car("BMW")
// console.log('c2', c2)

const c3 = new Car("TOYOTA")
// console.log('c3', c3)

const c4 = new Car("TESLA")
// console.log('c4', c4)


// const car = {
//   name: "保時捷"
// }

// const cc1 = car
// cc1.name = "BMW"
// console.log('cc1', cc1);

// const cc2 = car
// console.log('cc2', cc2);

// const cc3 = car
// console.log('cc3', cc3);

// const cc4 = car
// console.log('cc4', cc4);

// function Car {

// }