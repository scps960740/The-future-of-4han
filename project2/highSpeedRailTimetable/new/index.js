window.addEventListener("load",function(){
    const search = document.getElementById("search")

    search.addEventListener("click",function () {
        if(this.value === "Search..."){
            this.value=""    
        } 
    })
})
