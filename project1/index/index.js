window.addEventListener('load', function () {

    
    
    const title = document.getElementById("title")
    
    // 兩種用法 一種用querySelector抓class 一種用getElementById抓id
    const starbutton = document.querySelector(".starButton")

    const calculater = document.getElementById("calculater")
    calculater.addEventListener("click", function () {
        title.innerText = "Calculater"
        starbutton.href = "/project1/calculater/index.html"
    })
    const ooxx = document.getElementById("ooxx")
    ooxx.addEventListener("click", function () {
        title.innerText = "ooxx"
        starbutton.href = "/project1/ooxx/index.html"
    })
    const stopwatch = document.getElementById("stopwatch")
    stopwatch.addEventListener("click", function () {
        title.innerText = "Stopwatch"
        starbutton.href = "/project/Stopwatch/index.html"
    })
})