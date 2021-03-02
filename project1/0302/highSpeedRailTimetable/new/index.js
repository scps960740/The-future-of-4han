window.addEventListener("load",function(){
    const search = document.getElementById("search")

    search.addEventListener("click",function () {
        if(this.value === "Search..."){
            this.value=""    
        } 
    })

    let arr = ["我是1", "我是2", "我是3"]
    const box3 = document.getElementById("box3")

    let htmlStr = ""
    arr.map(function(s, index) {

        console.log("s", s, "index", index);

        const level = Math.floor(index / 3)
        const target = 2 + level * 3

        // let className = ""
        // if (index + 1 === target) {
        //     className = "box3-1-space"
        // } else {
        //     className = ""
        // }

        let item = `
        <div class="box3-1 ${index + 1 === target ? "box3-1-space" : ""}">
            <div class="box3-1-1">
                <div class="box3-1-1-1">
                    <img src="../new/images/a.svg">
                </div>
                <div class="textMargin">
                    North Core 250
                </div>
            </div>
            <div class="box3-1-2">
                <div class="box3-1-3-1">
                    <img src="../new/images/calendar.svg">
                </div>
                <div class="textMargin1">
                    21 Apr 2018
                </div>
            </div>
            <div class="box3-1-3">
                <div class="box3-1-3-1">
                    <img src="../new/images/placeholder.svg">
                </div>
                <div class="textMargin1">
                    New Zealand,sth Elyse
                </div>
            </div>
            <div class="box3-1-4">
                <div class="box3-1-4-1">
                    <div class="box3-1-4-1-1">
                        <div class="box3-1-4-1-1-1">
                            <img src="../new/images/grid.svg">
                        </div>
                    </div>
                    <div class="box3-1-4-1-2">
                        <div class="miniBox1">Growth</div>
                        <div class="miniBox2">16.56%</div>
                    </div>
                </div>
                <div class="box3-1-4-2">
                    <div class="miniBox3">Financing</div>
                    <div class="miniBox4">$14.5m</div>
                </div>
            </div>
        </div>
        `
        htmlStr += item
    })

    box3.innerHTML = htmlStr

})
