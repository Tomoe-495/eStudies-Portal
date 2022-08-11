
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

let scrollBtn = document.getElementsByClassName('scroll-up-btn')[0];


window.addEventListener("scroll", () =>{
    let scrolled = window.scrollY;
    if(scrolled > 200){
        scrollBtn.classList.add('active');
    }else{
        scrollBtn.classList.remove('active');
    }
})

const current = new Date();

const time = current.toLocaleTimeString("en-US");

setInterval(console.log(time), 100);