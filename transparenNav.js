let navs = document.getElementsByClassName('nav')[0];
nav.style.backgroundColor = "rgba(53, 53, 53, .3)";

//      scroll event listener
window.addEventListener("scroll", () =>{
    let scrolled = window.scrollY;

    if(scrolled < 700){
        navs.style.backgroundColor = "rgba(53, 53, 53, .3)";
    }else if(scrolled > 700){
        navs.style.backgroundColor = "rgba(53, 53, 53, 1)"
    }
})