var users = [
    {
        name: "Alice",
        story: "https://images.unsplash.com/photo-1726232409063-00c6b4009b08?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        dp: "https://images.unsplash.com/photo-1462804993656-fac4ff489837?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Bobby",
        story: "https://images.unsplash.com/photo-1726858528377-72d8f254ed87?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        dp: "https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Charlie",
        story: "https://images.unsplash.com/photo-1580158102648-07fd219b6db4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        dp: "https://plus.unsplash.com/premium_photo-1669703777695-f8052a432411?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Diana",
        story: "https://images.unsplash.com/photo-1726758004499-b4ea21408bcf?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        dp: "https://images.unsplash.com/photo-1462804993656-fac4ff489837?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Eve",
        story: "https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        dp: "https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Frank",
        story: "https://images.unsplash.com/photo-1633331586745-fae17ffaccac?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        dp: "https://images.unsplash.com/photo-1617724757497-79b54c5444d2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Grace",
        story: "https://images.unsplash.com/photo-1542318332-034f3136b62f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        dp: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];


var clutter = ""

users.forEach(function(elem,index){
    clutter = clutter + `<div class="story">
                    <img id ="${index}" src="${elem.dp}" alt="">
                </div>`
    
})
var storiyan = document.querySelector(".storiyan")
storiyan.innerHTML = clutter

var full = document.querySelector(".full")
var growth = document.querySelector(".growth")
var dp = document.querySelector(".profileimg")
var username = document.querySelector(".username")
var close = document.querySelector(".close")


var time = 0

storiyan.addEventListener("click",function(dets){
    var value = users[dets.target.id]
    full.style.display = "block"
    full.style.backgroundImage  = `url(${value.story})`
    dp.style.backgroundImage = `url(${value.dp})`
    username.innerHTML = value.name

    
    var storyInterval = setInterval(function(){
        time++
        growth.style.width = time + "%"
        console.log("hello",time)
    },30)
    setTimeout(function(){
        clearInterval(storyInterval)
        time = 0
        full.style.display = "none"
    },3000)
    close.addEventListener("click",function(){
        clearInterval(storyInterval)
        time = 0
        full.style.display = "none"
    })
})