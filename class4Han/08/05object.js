  // https://javascript.alphacamp.co/object.html


  // 1. 更新name的內容成許綸
  let obj = {
      name: "許善",
      age: 24
  }
  obj["name"] = "許綸"
  console.log(obj)
  // 2. 更新name的內容成許綸
  // let obj = { name: "許善", age: 24 }

  // 3. 讀取name的內容然後印出來
  // let obj = { name: "許善", age: 24 }
  console.log(obj.name)
  // 4. 追加address屬性
  // let obj = { name: "許善", age: 24 }
  obj['address'] = "高雄市"
  console.log(obj)