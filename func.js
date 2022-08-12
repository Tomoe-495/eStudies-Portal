let inp = document.getElementsByClassName('first-inp')[0];
let inbtn = document.getElementsByClassName('pop-btn')[0];
let radio = document.getElementsByClassName('p-radio');
let UserName = document.getElementsByClassName('u-name')[0];
let pop = document.getElementsByClassName('main-pop')[0];
let error = document.getElementsByClassName('error')[0];
let username;

function start(val){
    for(let p of radio){
        if(p.checked){
            inp.style.display = "block";
        }
    }
}

inp.onkeyup = ()=>{
    if(inp.value.length < 5){
        inbtn.style.display = "none";
    }else if(inp.value.length >= 5){
        inbtn.style.display = "block";
    }
}

inbtn.onclick = () => {
    let username = "Hello, " + inp.value;
    let j = 0;
    function textin(){
        if(j < username.length){
            UserName.innerHTML += username[j];
            j++
        }
    }
    setInterval(textin, 100);
    pop.style.display = "none";
}

setInterval( ()=>{
    if(! UserName == undefined){
        UserName.innerHTML = username;
    }
}, 1000);

let ham = document.getElementsByClassName('ham')[0];
let nav = document.getElementsByClassName('navs')[0];
let change = false;

ham.onclick = () => {
    change = ! change;
    if(change){
        ham.classList.add('active');
        nav.classList.remove('active');
    }else if(! change){
        ham.classList.remove('active');
        nav.classList.add('active');
    }
}

let help = document.getElementsByClassName('helpline')[0];
let changer = false;

help.onclick = () =>{
    changer = ! changer
    if(changer){
        help.classList.add('active');
    }else{
        help.classList.remove('active');
    }
}

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

//      visits value reset
//  https://api.countapi.xyz/set/codefoxx.com/26cebc23-af0a-4315-9daa-aba484e10e80?value=0

function websiteVisits(response) {
    counts.textContent = response.value;
}

