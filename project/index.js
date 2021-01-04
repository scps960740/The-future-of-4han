window.addEventListener('load', function() {

  const title = document.getElementById('title')
  const starButton = document.querySelector('.starButton')

  // calculator click
  // 找到這個按鈕元素，丟進calculatorDiv變數裡
  const calculatorDiv = document.getElementById('calculator')
  // 幫這個按鈕元素裝上click監聽器
  calculatorDiv.addEventListener('click', function () {
    title.innerText = "Calculator"
    starButton.href = "/project/calculator/index.html"
  })

  // ooxx click
  const ooxxDiv = document.getElementById('ooxx')
  ooxxDiv.addEventListener('click', function () {
    title.innerText = "OOXX"
    starButton.href = "/project/ooxx/index.html"
  })

  // stopwatch click
  const stopwatchDiv = document.getElementById('stopwatch')
  stopwatchDiv.addEventListener('click', function () {
    title.innerText = "Stopwatch"
    starButton.href = "/project/stopwatch/index.html"
  })

})