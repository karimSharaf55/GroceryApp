$(document).ready(function () {
// PWA
if (navigator.serviceWorker) {
    navigator.serviceWorker.register("../sw.js")
    .then((reg)=>{
console.log("fileRegister",reg);
    })
    .catch((error)=>{
console.log("error",error);
    })
}




    //navbarPWD
    $(".navbar-toggler").click(function () {
        $(".shopingCart-holder").removeClass("shopingToggle");
        $(".contact-home").animate({"right":"-100%"},400);
        $(this).toggleClass("close")
    })
    // searchOpen
    $("#searchOpen").click(function () {
        $(".shopingCart-holder").removeClass("shopingToggle");
        $(".home-search").css({ "opacity": "1", "visibility": "visible" })
        $(".home-search form").animate({ "width": "70%" }, 500)
    })
    $("#searchClose").click(function () {
        $(".home-search").css({ "opacity": "0", "visibility": "hidden" })
        $(".home-search form").animate({ "width": "30%" }, 500)
    })
    //shopingCart
    //counterone
    let countertext = $("#counterOne").text();
    $("#increaseone").click(function () {
        $("#counterOne").text(++countertext)
    })
    $("#decreaseone").click(function () {
        if (countertext != 1) {
            $("#counterOne").text(--countertext)
        }
    })
    //countertwo
    let counter = $("#countertwo").text();
    $("#increasetwo").click(function () {
        $("#countertwo").text(++counter)
    })
    $("#decreasetwo").click(function () {
        if (counter != 1) {
            $("#countertwo").text(--counter)
        }
    })
//shopingToglle()
$("#shopingIcon").click((function () {
    $(".shopingCart-holder").toggleClass("shopingToggle");
}))
//aside==addclass
$("#conatct-aside").click(function () {
    $(".contact-home").animate({"right":"0"},400);
    $(".contact-close").addClass("closeIcon")
})
//aside==removeclass
$(".contact-close").click(function () {
    $(".contact-home").animate({"right":"-100%"},400);
   
})
$("#navadd").click(function () {
    $(".product-list").toggleClass("navOpen")
})
// startparallax    
$('#parallax .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
})
// start Blog
$('#blog .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
// navbarscroll
let aboutOffset = $("#slider").offset().top;
$(window).scroll(function () {

   let wsScroll = $(window).scrollTop();

if (wsScroll > aboutOffset -50) {
   $("#main-nav").css("padding-top", "9px");
   $("#main-nav").css("padding-bottom", "9px");
   $("#main-nav").css("filter", "drop-shadow(2px 4px 6px #ccc)");
   $(".shopingCart-holder").removeClass("shopingToggle");
   $(".home-search").css({ "opacity": "0", "visibility": "hidden" })
   
   // btnUp
   $("#btn-top").fadeIn(500);
} else {
    $("#main-nav").css("padding-top", "18px");
    $("#main-nav").css("padding-bottom", "18px");
    $("#main-nav").css("filter", "unset");
    // btnUp
    $("#btn-top").fadeOut(500);
}

})

// btnUp
$("#btn-top").click(function () {
    $("html,body").animate({scrollTop:"0"},1000)
})

// loadingScreen
$("#loading .ml5").fadeOut(1500,function name() {
   $("#loading").fadeOut(1500,function () {
       $("body").css("overflow-y","auto")
   })
})
anime.timeline({loop: true})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
// wow.js
new WOW().init();
})




