
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
arr1.shift(100)
console.log(arr1)

// 8. 移除arr的第三個元素(index = 2)
let arr2 = [100, 200, 300, 400]
arr2.splice(2,1)
console.log(arr2)