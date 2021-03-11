// const arr = [{
//     name: "mike",
//     age: 1
// }, {
//     name: "bruce",
//     age: 2
// }, {
//     name: "john",
//     age: 20
// }, {
//     name: "mike",
//     age: 1000
// }]

// key: value
const arr = {
    name: "mike",
    age: 10,
    address: "高雄市XXX"
}

// arr.forEach X物件不能用foreach

// arr.name
// arr.age
// arr.address
// ...

// 利用Object.keys遍歷「物件」的技巧
// keys [ 'name', 'age', 'address' ]
const keys = Object.keys(arr)

keys.forEach(function(key) {
    const value = arr[key]
    // TODO del
    console.log('value', value)
})


// reduce 每一次的return都會一直蓋過去brr
// const brr = arr.reduce(function(current, item, index) {
//     current = item.age
//     return current
// }, 0)


// map
// const brr = arr.map(function (item) {
//     return { name: item.name, age: item.age }
// })


// 變數的區別
// 1 "sss" true 1.00 基本變數 紙 variable類別
// [1, 2] { name: "kevin" } function(){} 物件變數 箱子 object類別
