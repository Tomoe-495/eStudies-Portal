"use strict";

function reveal() {
  var reveal = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveal.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveal[i].getBoundingClientRect().top;
    var revealpoint = 100;

    if (revealtop < windowheight - revealpoint) {
      reveal[i].classList.add('active');
    }
  }
}

var scrollBtn = document.getElementsByClassName('scroll-up-btn')[0];
window.addEventListener("scroll", function () {
  var scrolled = window.scrollY;

  if (scrolled > 200) {
    scrollBtn.classList.add('active');
  } else {
    scrollBtn.classList.remove('active');
  }
});

scrollBtn.onclick = function () {
  window.scrollTo(0, 0);
};

var current = new Date();
var time = current.toLocaleTimeString("en-US");
setInterval(console.log(time), 100);
var counts = document.getElementsByClassName('v-counts')[0];
var vCounts;
fetch('./accounts.json').then(function (Response) {
  return Response.json();
}).then(name1 = 'edward');
fetch("./accounts.json").then(function (response) {
  return response.json();
}).then(function (name) {
  return console.log(name[0].name);
}); // let name1;
// fetch('./accounts.json').then((Response) => Response.json()).then((name1)='edware');
// console.log(name1);