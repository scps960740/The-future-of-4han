// https://javascript.alphacamp.co/array.html


// 1. 印出跟計算陣列arr的長度
let arr = [100, 200, 300, 400]

console.log(arr.length)

// 2. 印出arr的第0筆的資料
// let arr = [100, 200, 300, 400]
console.log(arr[0])

// 3. 修改arr的第0筆的資料變成999
// let arr = [100, 200, 300, 400]
arr[0]=999
console.log(arr[0])

// 4. 在arr最後方加入新元素888
// let arr = [100, 200, 300, 400]
arr.push(888)
console.log(arr)
// 5. 在arr最後方加入新元素888
// let arr = [100, 200, 300, 400]

// 6. 在arr最前方加入新元素
// let arr = [100, 200, 300, 400]
arr.unshift(888)
console.log(arr)

// 7. 移除arr第一位元素
let arr1 = [100, 200, 300, 400]
arr1.shift()
arr1.pop()
console.log(arr1)

// 8. 移除arr的第三個元素(index = 2)
let arr2 = [100, 200, 300, 400]
arr2.splice(2,1)
console.log(arr2)

// 9. 分組寫法

let arr2 = [{
    name: "眼鏡一號",
    imageSrc: "https://s.yimg.com/zp/MerchandiseImages/6DC395190A-SP-8651505.jpg"
  },
  {
    name: "眼鏡二號",
    imageSrc: "http:....."
  }, {
    name: "眼鏡三號",
    imageSrc: "http:....."
  }, {
    name: "眼鏡四號",
    imageSrc: "http:....."
  }, {
    name: "眼鏡五號",
    imageSrc: "http:....."
  }, {
    name: "眼鏡六號",
    imageSrc: "http:....."
  }, {
    name: "眼鏡七號",
    imageSrc: "http:....."
  }, {
    name: "眼鏡八號",
    imageSrc: "http:....."
  }
]

let res = []

while (arr2.length > 0) {
  res.push(arr2.splice(0, 2))
}

// console.log(res);
// TODO del
console.log('第ㄧ');
console.log(res[0])
console.log('第二');
console.log(res[1])
console.log('第三');
console.log(res[2])
console.log('第四');
console.log(res[3])

