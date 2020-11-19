let num1 = '10'
let num2 = "5"

// 第一種 四則運算
// + - * / %
let result1 = 1 * (100 + 2)

// 轉型 string -> number
let result2 = parseInt(num1) + parseInt(num2)
let num100 = 100
// . => 的
console.log('num100.toString()', num100.toString());

// 第二種 邏輯運算 
// 1. || or 或
// 2. && and 及
// 3. === 等於, JAVA ==
// 4. !=== 不等於, JAVA !=
// 5. ! 反向

let result3 = (1 === 2) || (100 === 99)
// || 的規則
// false || false => false
// true || true => true
// true || false => true
// false || true => true
// 有搶到錢 || 有沒有被抓 -> 有搶到就是有錢，沒搶到就被抓
// 有蘋果 || 給你籃子 -> 有買到蘋果，就拿蘋果，不然至少拿個籃子


let result4 = (1 === 1) && (100 === 100)
// true && true -> true
// false && false -> false
// true && false -> false
// false && true -> false
// 有蘋果 && 有籃子 -> 才是成功
// 有蘋果 && 沒籃子 -> 去死
// 沒蘋果 && 有籃子 -> 去死
// 沒蘋果 && 沒籃子 -> 去死

let result5 = 1 === '1' // false
let result6 = 1 == '1' // true

let result7 = 1 !== 2 // true
let result8 = 1 != '1' // false

let result9 = Boolean(1) // true
let result10 = Boolean(0) // false

let result11 = Boolean("") // false
let result12 = Boolean("dwdw") // true

// 1 === true
// 0 === false

// TODO del
console.log('result12', !result12);