// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}

// Hover Pointer
var cursor = document.querySelector(".cursor");
var cursorinner = document.querySelector(".cursor2");
var a = document.querySelectorAll("a");

document.addEventListener("mousemove", function(e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3D(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
})
document.addEventListener("mousemove", function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + "px";
    cursorinner.style.top = y + "px";
})
document.addEventListener("mousedown", function(){
    cursor.classList.add("click");
    cursorinner.classList.add("cursorinnerhover");
})
document.addEventListener("mouseup", function(){
    cursor.classList.remove("click");
    cursorinner.classList.remove("cursorinnerhover");
})

// nav hide
// let navBar = document.querySelectorAll(".nav-link");
// let navCollapse = document.querySelector(".navbar-collapse.collapse");
// navBar.forEach(function(a){
//     a.addEventListener("click", function(){
//         navCollapse.classList.remove("show");
//     })
// })