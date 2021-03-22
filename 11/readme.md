# 複習

- 1. new出來，環境隔離，不像直接指派，環境會共用
- 2. this => 看當下誰執行它，比如car.start => this就是car，aa.start => this就是aa
- 3. JS的this不忠誠啊
- 4. 用箭頭函式可以讓this綁定好，讓他忠誠。
- 5. JS的class只是語法糖。
- 6. 內容有this的funtion叫做「構造function」。 (constructor function)
- 7. 物件導向 OOP
- 8. 用extend繼承父層的東西，super就是代表繼承的父層(Car)
- 9. 有兩種屬性：public公開、private私有（用#開頭）


## 2重For

```

// 2D

let data = [
  [ 1, 2, 3], 
  [4, 5, 6, 7], 
  [8, 9]
] // length 3

// 1D
let data2 = [1, 2, 4, 6]

for (let i = 0; i < data.length; i++) {
  // TODO del
  console.log('i-----', i)
  // 0 1 2
  for (let s = 0; s < data[i].length; s++) {
    // TODO del
    console.log('s', data[i][s])
  }
}

// // TODO del
// console.log('data[i][s]', data[0][1])


```

## IF

```

// ---- 漏斗

if (i < 100) {

} else if (i < 80) {

} else {

}

// ---- 模擬if else if

if (i < 100) {
 return 
} 

if (i < 80) {
  return 
 } 

// ---- 兩個都會執行

if (i < 100) {
} 

if (i < 80) {

} 
```


## function 

```

function test () {

}

const test = () => {

}

// -------

function test2 () {
  return 1
}

// 確定fuction裡只會有一行，而且是return，那就可以這樣簡寫
const test2 = () => 1

// -------

function test3 (a, b) {
  let c = 100
  return a + b * c
}

const test3 = (a, b) => {
  let c = 100
  return a + b * c 
}

// -------

function test4 (a, b) {
  return a + b
}

const test4 = (a, b) => a + b 


```

## class
- 1. new出來，環境隔離，不像直接指派，環境會共用
- 2. this => 看當下誰執行它，比如car.start => this就是car，aa.start => this就是aa
- 3. JS的this不忠誠啊
- 4. 用箭頭函式可以讓this綁定好，讓他忠誠。
- 5. JS的class只是語法糖。
- 6. 內容有this的funtion叫做「構造function」。 (constructor function)

```


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

// this亂跑
// 範例：this亂跑
// const div1 = document.getElementById('div1')
// const callback = c1.start
// div1.addEventListener('click', callback)

const aa = { name: 'AA' }
// aa.start = c1.start
// // console.log('aa', aa)
// aa.start()
// console.log('c1', c1)


// 只要內容有this，都不能簡寫
// const Car = () => {
//   this.name = carName
// }
```

## 繼承Extend

```
class Car {
  #name = ""

  constructor(carName, v) {
    this.#name = carName
  }

  start() {
    console.log('開跑囉：', this.#name)
  }

  // 綁定this到Car身上
  // start = () => {
  //   console.log('開跑囉：', this.name)
  // }

  stop() {
    console.log('踩煞車', this.#name)
  }
}

class Porshe extends Car{
  constructor(porsheName) {
    super(porsheName)
  }
  sound() {
    console.log('跑車聲浪....')
  }

  start() {
    // TODO del
    console.log('跑車聲浪開跑！！')
    // 舊的 父層的start
    super.start()
  }
}

const p1 = new Porshe("我的保時捷")
// TODO del
console.log('p1.name', p1.#name)
```