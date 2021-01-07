console.log("hello world")

// console.log(1) // 數字 number  (小數整可)
// console.log("我是誰") // 字數 string = 內容
// console.log(ture) //布林值 boolean true(1) or false(0) 
// console.log(null) // null 甚麼都沒有


//ver let const
let gg = 100
let name ="我自己"
let boo = true 
let boo2 = false
let n = null
let nud = undefined 

//const 是無法再去做更改
const gg1 = 99

console.log(gg)
console.log(name)
console.log(1>2)
console.log(boo)
console.log(nud)
console.log(n)

gg = 99
name = "其他人"

console.log(gg)
console.log(name)

//使用Template Literals  用: `${}` 來表示總和
let score = 500
let end = `your score ${score} in the round.`

console.log(end)

let a = 1
let b = 2
let c = `a ${b}`

console.log(a+b)
console.log(c)

let myfriend = [`天使`,`惡魔`]
let myNewfriend = myfriend.concat([`撒旦`])

console.log(myNewfriend)