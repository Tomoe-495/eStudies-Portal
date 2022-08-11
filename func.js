
function reveal(){
    let reveal = document.querySelectorAll('.reveal');

    for(let i = 0; i < reveal.length; i++){
        let windowheight = window.innerHeight;
        let revealtop = reveal[i].getBoundingClientRect().top;
        let revealpoint = 100;

        if(revealtop < windowheight - revealpoint){
            reveal[i].classList.add('active');
        }
    }
}

let nav = document.getElementsByClassName('nav')[0];

//      scroll event listener
window.addEventListener("scroll", () =>{
    let scrolled = window.scrollY;

    if(scrolled < 700){
        nav.style.backgroundColor = "rgba(53, 53, 53, .3)";
    }else if(scrolled > 700){
        nav.style.backgroundColor = "rgba(53, 53, 53, 1)"
    }
})