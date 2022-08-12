"use strict";

var inp = document.getElementsByClassName('first-inp')[0];
var inbtn = document.getElementsByClassName('pop-btn')[0];
var radio = document.getElementsByClassName('p-radio');
var UserName = document.getElementsByClassName('u-name')[0];
var pop = document.getElementsByClassName('main-pop')[0];
var error = document.getElementsByClassName('error')[0];
var username;

function start(val) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = radio[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var p = _step.value;

      if (p.checked) {
        inp.style.display = "block";
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

inp.onkeyup = function () {
  if (inp.value.length < 5) {
    inbtn.style.display = "none";
  } else if (inp.value.length >= 5) {
    inbtn.style.display = "block";
  }
};

inbtn.onclick = function () {
  var username = "Hello, " + inp.value;
  var j = 0;

  function textin() {
    if (j < username.length) {
      UserName.innerHTML += username[j];
      j++;
    }
  }

  setInterval(textin, 100);
  pop.style.display = "none";
};

setInterval(function () {
  if (!UserName == undefined) {
    UserName.innerHTML = username;
  }
}, 1000);
var ham = document.getElementsByClassName('ham')[0];
var nav = document.getElementsByClassName('navs')[0];
var change = false;

ham.onclick = function () {
  change = !change;

  if (change) {
    ham.classList.add('active');
    nav.classList.remove('active');
  } else if (!change) {
    ham.classList.remove('active');
    nav.classList.add('active');
  }
};

var help = document.getElementsByClassName('helpline')[0];
var changer = false;

help.onclick = function () {
  changer = !changer;

  if (changer) {
    help.classList.add('active');
  } else {
    help.classList.remove('active');
  }
};

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
var counts = document.getElementsByClassName('v-counts')[0]; //      visits value reset
//  https://api.countapi.xyz/set/codefoxx.com/26cebc23-af0a-4315-9daa-aba484e10e80?value=0

function websiteVisits(response) {
  counts.textContent = response.value;
}