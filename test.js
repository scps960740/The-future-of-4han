class Car {
  constructor() {
      this.name = "我的車子"
  }
  // 箭頭函式的宣告方式，自動綁定this為Car
  start = () => {
    console.log("啟動：", this.name)
  }
}
const myBus = { name: "我的公車" }
const myCar = new Car()
// 輸出「啟動：我的車子」
myCar.start()
// 把myCar的start交給myBus
myBus.start = myCar.start
// 依然輸出「啟動：我的車子」
myBus.start()