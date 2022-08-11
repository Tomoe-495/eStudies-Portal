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

scrollBtn.onclick = () =>{
    window.scrollTo(0, 0)
}

const current = new Date();

const time = current.toLocaleTimeString("en-US");

setInterval(console.log(time), 100);

let counts = document.getElementsByClassName('v-counts')[0];
let vCounts;

//      visits value reset
//  https://api.countapi.xyz/set/codefoxx.com/26cebc23-af0a-4315-9daa-aba484e10e80?value=0

function websiteVisits(response) {
    counts.textContent = response.value;
}