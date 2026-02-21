$(document).ready(function(){
    $(".header-dropdown").click(function(){
        $(".header-top-move-menubar").css("transform" , "translateX(-0)")
        $(".header-top-move-menubar").css("transition" , "0.3s")
    })

    $(".header-top-move-icon").click(function(){
        $(".header-top-move-menubar").css("transform" , "translateX(100%)")
        $(".header-top-move-menubar").css("transition" , "0s")
    })

    $(".icon-close").click(function(){
        $(".full-aside").css("transform", "translateX(-0px)")
        $(".full-aside").css("transition", "0.2s")
    })

    $(".header-top-move-items").click(function(){
        $("#header-top-move-text-tie").css("opacity", "1")
        $("#header-top-move-text-tie").css("transition" , "0.2s")
        $("#header-top-move-text-belt").css("opacity", "1")
        $("#header-top-move-text-belt").css("transition" , "1s")
    })

    $(".header-top-move-items").dblclick(function(){
        $("#header-top-move-text-tie").css("opacity", "0")
        $("#header-top-move-text-tie").css("transition" , "0.6s")
        $("#header-top-move-text-belt").css("opacity", "0")
        $("#header-top-move-text-belt").css("transition" , "0s")
    })

    $(".header-top-left-icon-user").click(function(){
        $(".full-login").css("transform", "translate(0)")
        $(".full-login").css("transition", "0.3s")
    })

    $(".full-close").click(function(){
        $(".full-login").css("transform", "translate(-350px)")
    })

    $(".header-top-left-cart").click(function(){
        $(".full-aside-shopping").css("transform", "translate(0)")
        $(".full-aside-shopping").css("transition", "0.5s")
    })

    $(".full-aside-close").click(function(){
        $(".full-aside-shopping").css("transform", "translate(-360px)")
        $(".full-aside-shopping").css("transition", "0.5s")
    })

    let menuItems = document.getElementById("menu-items")
    document.onscroll = function(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
        $(".header-top-move-menubar").css("position" , "fixed")
        $(".header-top-move-menubar").css("top" , "-30px")
        $(".full-login").css("position" , "fixed")
        $(".full-login").css("top" , "0px")
        $(".full-aside-shopping").css("position" , "fixed")
        $(".full-aside-shopping").css("top" , "0px")
        $(".header").css("position" , "sticky")
        $(".header").css("top" , "0px")
    }
    }
})
let button = document.getElementById("go-to-up")
window.onscroll = function(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        button.style.transform = "translate(15px)"
        button.style.transition = "0.5s"
        button.style.pointerEvents = "auto"
    }else{
        button.style.transform = "translate(-85px)"
        button.style.transition = "0.5s"
        button.style.pointerEvents = "none"
    }
}

let sideBar = document.getElementById("full-sidebar")
let shopping = document.getElementById("header-top-shopping")
sideBar.addEventListener("click", function(){
    shopping.style.opacity = "1"
sideBar.addEventListener("click", function(){
    shopping.style.opacity = "0"
})
})

$("#go-to-up").click(function(){
    scrollTo(0 , 0);
});