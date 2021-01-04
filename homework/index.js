
// res = level + level + level
// res = "0" + "1" + "2"
// res = "012"
// let res = ""
// for (let i = 0; i < 3; i++) {
//   res = res + i.toString()
// }
let res = ""

for (let i = 0; i < 3; i++) {

  let level = ""
  for (let k = 0; k < 3; k++) {
    level = level + k.toString()
  }

  res = res + level + "\n"
}

console.log(res)