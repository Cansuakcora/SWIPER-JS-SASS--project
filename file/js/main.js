//////////// THANKYOU - BUTTONS  /////////

$('#asiabtn1').click(function () {
  $('#asiabtn1').addClass('card-thankyou-session__btn-active');
  $('#asiabtn2').removeClass('card-thankyou-session__btn-active');
  $('#thankyou-asia2').hide('slow');
  $('#thankyou-asia1').show('slow');
});
$('#asiabtn2').click(function () {
  $('#asiabtn2').addClass('card-thankyou-session__btn-active');
  $('#asiabtn1').removeClass('card-thankyou-session__btn-active');
  $('#thankyou-asia1').hide('slow')
  $('#thankyou-asia2').show('slow');
});

$('#agenda-asia-btn').click(function () {
  $('#agenda-asia-btn').addClass('agenda__thankyou-btn-active');
  $('#agenda-latam-btn').removeClass('agenda__thankyou-btn-active');
  $('#agenda-afme-btn').removeClass('agenda__thankyou-btn-active');
  $('#agenda-3').hide('slow');
  $('#agenda-2').hide('slow');
  $('#agenda-1').show('slow');
});
$('#agenda-afme-btn').click(function () {
  $('#agenda-afme-btn').addClass('agenda__thankyou-btn-active');
  $('#agenda-latam-btn').removeClass('agenda__thankyou-btn-active');
  $('#agenda-asia-btn').removeClass('agenda__thankyou-btn-active');
  $('#agenda-3').hide('slow');
  $('#agenda-1').hide('slow');
  $('#agenda-2').show('slow');
});
$('#agenda-latam-btn').click(function () {
  $('#agenda-latam-btn').addClass('agenda__thankyou-btn-active');
  $('#agenda-afme-btn').removeClass('agenda__thankyou-btn-active');
  $('#agenda-asia-btn').removeClass('agenda__thankyou-btn-active');
  $('#agenda-2').hide('slow');
  $('#agenda-1').hide('slow');
  $('#agenda-3').show('slow');
});

//! ----- LATAM ----- //!

var btnSessionlatam1 = document.querySelector('#latam_btn1');
var btnSessionlatam2 = document.querySelector('#latam_btn2');
 
btnSessionlatam1.addEventListener('click', function () {
    // Button session class
    btnSessionlatam1.classList.add('card-session__city__btn-active');
    btnSessionlatam2.classList.remove('card-session__city__btn-active');
 
    // Table scheuld class
    document.querySelector('#latam_agenda1').classList.remove('hide');
    document.querySelector('#latam_agenda1').classList.add('show');
 
    document.querySelector('#latam_agenda2').classList.remove('show');
    document.querySelector('#latam_agenda2').classList.add('hide');
 
});

btnSessionlatam2.addEventListener('click', function () {
  // Button session class
  btnSessionlatam2.classList.add('card-session__city__btn-active');
  btnSessionlatam1.classList.remove('card-session__city__btn-active');

  // Table scheuld class
  document.querySelector('#latam_agenda2').classList.remove('hide');
  document.querySelector('#latam_agenda2').classList.add('show');

  document.querySelector('#latam_agenda1').classList.remove('show');
  document.querySelector('#latam_agenda1').classList.add('hide');

});

//button session

//! ----- ASIA ----- //!
    
var btnSession1 = document.querySelector('#asia_btn1');
var btnSession2 = document.querySelector('#asia_btn2');
 
btnSession1.addEventListener('click', function () {
    // Button session class
    btnSession1.classList.add('card-session__city__btn-active');
    btnSession2.classList.remove('card-session__city__btn-active');
 
    // Table scheuld class
    document.querySelector('#asia_agenda1').classList.remove('hide');
    document.querySelector('#asia_agenda1').classList.add('show');
 
    document.querySelector('#asia_agenda2').classList.remove('show');
    document.querySelector('#asia_agenda2').classList.add('hide');
 
});

btnSession2.addEventListener('click', function () {
  // Button session class
  btnSession2.classList.add('card-session__city__btn-active');
  btnSession1.classList.remove('card-session__city__btn-active');

  // Table scheuld class
  document.querySelector('#asia_agenda2').classList.remove('hide');
  document.querySelector('#asia_agenda2').classList.add('show');

  document.querySelector('#asia_agenda1').classList.remove('show');
  document.querySelector('#asia_agenda1').classList.add('hide');

});

//! ----- MOBILE MENU ----- //!
var menuLinks = document.querySelectorAll(".menuLink");
var navigationCheckbox = document.querySelector(".nav-mobile__checkbox");
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}
menuLinks.forEach(
    function (menuLink) {
        menuLink.addEventListener("click", function () {
            document.querySelector(".nav-mobile__nav").style.cssText = "transform: translateX(-50%); visibility: hidden; opacity: 0;"

            document.querySelector(".nav-mobile__background").style.cssText = "transform: scale(0);"

            // document.querySelector("body").style.cssText = "overflow-y: inherit;"

            document.querySelector(".nav-mobile__checkbox").checked = false;
        })

        navigationCheckbox.addEventListener("click", function (e) {
            document.querySelector(".nav-mobile__nav").style.cssText = "transform: translateX(-50%); visibility: hiden; opacity: 0;"

            document.querySelector(".nav-mobile__background").style.cssText = "transform: scale(0);"

            // document.querySelector("body").style.cssText = "overflow-y: inherit;"

            var target = e.target;

            if (document.querySelector(".nav-mobile__checkbox").checked) {

                document.querySelector(".nav-mobile__nav").style.cssText = "transform: translateX(0); visibility: initial; opacity: 1;"

                document.querySelector(".nav-mobile__background").style.cssText = "transform: scale(100);"

                // document.querySelector("body").style.cssText = "overflow-y: hidden;"
            }
        })
    }
)
//! ----- MOBILE MENU ----- //!


///////////////// [ CARD CLIKS ] START  ////////////////

if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;
}

//ELEMENT SELECTED CARD HIDE - VISIBLE
const imgPfizerPro = document.getElementById("comingSoonIMG1");
const imgMdd = document.getElementById("comingSoonIMG2");
const imgPacient = document.getElementById("comingSoonIMG3");

const cardComingSoonPfizerPro = document.querySelector("#comingSoonCardShow1");
const cardComingSoonMdd = document.querySelector("#comingSoonCardShow2");
const cardComingSoonPaciente = document.querySelector("#comingSoonCardShow3");

const cardComingIconArrowPro = document.getElementById("comingSoonIcon1");
const cardComingIconArrowMdd = document.getElementById("comingSoonIcon2");
const cardComingIconArrowPaciente = document.getElementById("comingSoonIcon3");

//ELEMENT SELECTED CARD UPCOMING
const upcomingCard1 = document.getElementById("upcomingCard1");
const upcomingCard2 = document.getElementById("upcomingCard2");
const upcomingCard3 = document.getElementById("upcomingCard3");
const upcomingCard4 = document.getElementById("upcomingCard4");

//EVENT LISTENERS
eventListeners();

function eventListeners() {
  //CARD HIDE - VISIBLE
  imgPfizerPro.addEventListener("click", cardShow1);
  // cardComingSoonPfizerPro.addEventListener("click", cardShow1);
  cardComingIconArrowPro.addEventListener("click", cardShow1);

  imgMdd.addEventListener("click", cardShow2);
  // cardComingSoonMdd.addEventListener("click", cardShow2);
  cardComingIconArrowMdd.addEventListener("click", cardShow2);

  imgPacient.addEventListener("click", cardShow3);
  // cardComingSoonPaciente.addEventListener("click", cardShow3);
  cardComingIconArrowPaciente.addEventListener("click", cardShow3);

  imgPacient.addEventListener("click", cardShow4);
  // cardComingSoonPaciente.addEventListener("click", cardShow3);
  cardComingIconArrowPaciente.addEventListener("click", cardShow4);

  //CARD UPCOMING
  upcomingCard1.addEventListener("click", upcomingCardSlide1);
  upcomingCard2.addEventListener("click", upcomingCardSlide2);
  upcomingCard3.addEventListener("click", upcomingCardSlide3);
  upcomingCard4.addEventListener("click", upcomingCardSlide4);
}



//CARD HIDE - VISIBLE FUNCTIONS
function cardShow1() {
  if (window.innerWidth > 991) {
    cardComingIconArrowPro.classList.add("arrow-rotate-up");

    if (
      cardComingSoonPfizerPro.classList.contains("card-coming__hide-card--show")
    ) {
      cardComingSoonPfizerPro.classList.remove("card-coming__hide-card--show");
      cardComingSoonPfizerPro.classList.remove("card-coming__hide-card--show");

      cardComingIconArrowPro.classList.remove("arrow-rotate-up");
      cardComingIconArrowPro.classList.add("arrow-rotate-down");

      setTimeout(function () {
        cardComingSoonPfizerPro.style["display"] = "none";
      }, 300);
    } else {
      cardComingSoonPfizerPro.classList.add("card-coming__hide-card--show");

      cardComingSoonPfizerPro.classList.add("card-coming__hide-card--show");

      cardComingIconArrowPro.classList.add("arrow-rotate-up");
      cardComingIconArrowPro.classList.remove("arrow-rotate-down");

      setTimeout(function () {
        cardComingSoonPfizerPro.style["display"] = "block";
      }, 300);
    }
  } else {
    setTimeout(function () {
      cardComingSoonPfizerPro.style["display"] = "block";
    }, 10);
  }
}

function cardShow2() {
  if (window.innerWidth > 991) {
    cardComingIconArrowMdd.classList.add("arrow-rotate-up");

    if (cardComingSoonMdd.classList.contains("card-coming__hide-card--show")) {
      cardComingIconArrowMdd.classList.remove("arrow-rotate-up");
      cardComingIconArrowMdd.classList.add("arrow-rotate-down");

      cardComingSoonMdd.classList.remove("card-coming__hide-card--show");

      setTimeout(function () {
        cardComingSoonMdd.style["display"] = "none";
      }, 500);
    } else {
      cardComingIconArrowMdd.classList.add("arrow-rotate-up");
      cardComingIconArrowMdd.classList.remove("arrow-rotate-down");

      cardComingSoonMdd.classList.add("card-coming__hide-card--show");

      setTimeout(function () {
        cardComingSoonMdd.style["display"] = "block";
      }, 300);
    }
  } else {
    setTimeout(function () {
      cardComingSoonMdd.style["display"] = "block";
    }, 10);
  }
}

function cardShow3() {
  if (window.innerWidth > 991) {
    cardComingIconArrowPaciente.classList.add("arrow-rotate-up");

    if (
      cardComingSoonPaciente.classList.contains("card-coming__hide-card--show")
    ) {
      cardComingIconArrowPaciente.classList.remove("arrow-rotate-up");
      cardComingIconArrowPaciente.classList.add("arrow-rotate-down");

      cardComingSoonPaciente.classList.remove("card-coming__hide-card--show");

      setTimeout(function () {
        cardComingSoonPaciente.style["display"] = "none";
      }, 300);
    } else {
      cardComingIconArrowPaciente.classList.add("arrow-rotate-up");
      cardComingIconArrowPaciente.classList.remove("arrow-rotate-down");

      cardComingSoonPaciente.classList.add("card-coming__hide-card--show");

      setTimeout(function () {
        cardComingSoonPaciente.style["display"] = "block";
      }, 300);
    }
  } else {
    setTimeout(function () {
      cardComingSoonPaciente.style["display"] = "block";
    }, 10);
  }
}

function cardShow4() {
  if (window.innerWidth > 991) {
    cardComingIconArrowPaciente.classList.add("arrow-rotate-up");

    if (
      cardComingSoonPaciente.classList.contains("card-coming__hide-card--show")
    ) {
      cardComingIconArrowPaciente.classList.remove("arrow-rotate-up");
      cardComingIconArrowPaciente.classList.add("arrow-rotate-down");

      cardComingSoonPaciente.classList.remove("card-coming__hide-card--show");

      setTimeout(function () {
        cardComingSoonPaciente.style["display"] = "none";
      }, 300);
    } else {
      cardComingIconArrowPaciente.classList.add("arrow-rotate-up");
      cardComingIconArrowPaciente.classList.remove("arrow-rotate-down");

      cardComingSoonPaciente.classList.add("card-coming__hide-card--show");

      setTimeout(function () {
        cardComingSoonPaciente.style["display"] = "block";
      }, 300);
    }
  } else {
    setTimeout(function () {
      cardComingSoonPaciente.style["display"] = "block";
    }, 10);
  }
}

//[ CARD CLIK VISIBLITE, BUTTONS] START
function cardHideBtn() {
  document.getElementById("cardHideBtnList").classList.toggle("show");
}

imgPfizerPro.addEventListener("click", function () {
  document.querySelector(".btn-card-hide__child").classList.remove("show");
});

window.onclick = function (event) {
  if (!event.target.matches(".btn-card-hide")) {
    var dropdowns = document.getElementsByClassName("btn-card-hide__child");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
  // if (!event.target.msMatchesSelector(".btn-card-hide")) {
  //   var dropdowns = document.getElementsByClassName("btn-card-hide__child");
  //   var i;
  //   for (i = 0; i < dropdowns.length; i++) {
  //     var openDropdown = dropdowns[i];
  //     if (openDropdown.classList.contains("show")) {
  //       openDropdown.classList.remove("show");
  //     }
  //   }
  // }
};

// [ CARD CLIK VISIBLITE, BUTTONS] END

// function upcomingCardSlide1(){
//   if (window.innerWidth > 1199) {
//     if(!upcomingCard1.classList.contains("upcoming-card-animation-left")) {
//       upcomingCard1.classList.remove("upcoming-card-animation-right");
//       upcomingCard1.classList.add("upcoming-card-animation-left");

//       upcomingCard2.classList.remove("upcoming-card-animation-left");
//       upcomingCard3.classList.remove("upcoming-card-animation-left");
//       upcomingCard2.classList.add("upcoming-card-animation-right");
//       upcomingCard3.classList.add("upcoming-card-animation-right");
      
//     }
//     else if (upcomingCard1.classList.contains("upcoming-card-animation-left")){
      
//       upcomingCard1.classList.remove("upcoming-card-animation-left");
//       upcomingCard1.classList.add("upcoming-card-animation-right");
      
//       upcomingCard2.classList.remove("upcoming-card-animation-left");
//       upcomingCard3.classList.remove("upcoming-card-animation-left");
//       upcomingCard2.classList.add("upcoming-card-animation-right");
//       upcomingCard3.classList.add("upcoming-card-animation-right");


//       var childNodes = document.getElementsByClassName(
//         "card-upcoming__title__block"
//       )[0].childNodes;
//       for (var i = 0; i < childNodes.length; i++) {
//         console.log(childNodes[i].nodeType);
//         if (childNodes[i].nodeType !== 3) {
//           childNodes[i].classList.add("d-block");
//         }
//       }
//     }
//     else if(upcomingCard1.classList.contains("upcoming-card-animation-right")){
//       upcomingCard1.classList.remove("upcoming-card-animation-right");
//       upcomingCard1.classList.add("upcoming-card-animation-left");

//       upcomingCard2.classList.remove("upcoming-card-animation-right");
//       upcomingCard3.classList.remove("upcoming-card-animation-right")

//       upcomingCard2.classList.add("upcoming-card-animation-left");
//       upcomingCard3.classList.add("upcoming-card-animation-left");
//     }
//   }
// }

// function upcomingCardSlide2(){
//   if (window.innerWidth > 1199) {
    
//     if(upcomingCard2.classList.contains("upcoming-card-animation-left")) {


//       upcomingCard2.classList.remove("upcoming-card-animation-left");
//       upcomingCard2.classList.add("upcoming-card-animation-right");

//       upcomingCard1.classList.remove("upcoming-card-animation-left");
//       upcomingCard3.classList.remove("upcoming-card-animation-left");
//       upcomingCard1.classList.add("upcoming-card-animation-right");
//       upcomingCard3.classList.add("upcoming-card-animation-right");
//     }
//     else if (upcomingCard2.classList.contains("upcoming-card-animation-right")){
      
//       upcomingCard2.classList.remove("upcoming-card-animation-right");
//       upcomingCard2.classList.add("upcoming-card-animation-left");
      
//       upcomingCard1.classList.remove("upcoming-card-animation-left");
//       upcomingCard3.classList.remove("upcoming-card-animation-left");
//       upcomingCard1.classList.add("upcoming-card-animation-right");
//       upcomingCard3.classList.add("upcoming-card-animation-right");
//     }
//     else {
//       upcomingCard2.classList.add("upcoming-card-animation-left");
//       upcomingCard1.classList.remove("upcoming-card-animation-left");
//       upcomingCard3.classList.remove("upcoming-card-animation-left");

//       upcomingCard1.classList.add("upcoming-card-animation-right");
//       upcomingCard3.classList.add("upcoming-card-animation-right");
//     }
//   }
// }

// function upcomingCardSlide3(){
//   if (window.innerWidth > 1199) {
//     if(upcomingCard3.classList.contains("upcoming-card-animation-left")) {


//       upcomingCard3.classList.remove("upcoming-card-animation-left");
//       upcomingCard3.classList.add("upcoming-card-animation-right");

//       upcomingCard1.classList.remove("upcoming-card-animation-left");
//       upcomingCard2.classList.remove("upcoming-card-animation-left");
//       upcomingCard1.classList.add("upcoming-card-animation-right");
//       upcomingCard2.classList.add("upcoming-card-animation-right");
//     }
//     else if (upcomingCard3.classList.contains("upcoming-card-animation-right")){
      
//       upcomingCard3.classList.remove("upcoming-card-animation-right");
//       upcomingCard3.classList.add("upcoming-card-animation-left");
      
//       upcomingCard1.classList.remove("upcoming-card-animation-left");
//       upcomingCard2.classList.remove("upcoming-card-animation-left");
//       upcomingCard1.classList.add("upcoming-card-animation-right");
//       upcomingCard2.classList.add("upcoming-card-animation-right");
//     }
//     else {
//       upcomingCard3.classList.add("upcoming-card-animation-left");
//       upcomingCard1.classList.remove("upcoming-card-animation-left");
//       upcomingCard2.classList.remove("upcoming-card-animation-left");

//       upcomingCard1.classList.add("upcoming-card-animation-right");
//       upcomingCard2.classList.add("upcoming-card-animation-right");
//     }
//   }
// }


//!CARD UPCOMING FUNTIONS
function upcomingCardSlide1(e) {
  if (window.innerWidth > 1199) {
    if (
      !upcomingCard2.classList.contains("upcoming-card-animation-left") &&
      !upcomingCard3.classList.contains("upcoming-card-animation-left") &&
      !upcomingCard4.classList.contains("upcoming-card-animation-left")
    ) {
      upcomingCard2.style["cursor"] = "inherit";
      upcomingCard3.style["cursor"] = "inherit";
      upcomingCard4.style["cursor"] = "inherit";
      upcomingCard1.classList.add("upcoming-card-animation-left");

      var childNodes = document.getElementsByClassName(
        "card-upcoming__title__block"
      )[0].childNodes;
      for (var i = 0; i < childNodes.length; i++) {
        console.log(childNodes[i].nodeType);
        if (childNodes[i].nodeType !== 3) {
          childNodes[i].classList.add("d-block");
        }
      }


      if (!upcomingCard1.classList.contains("upcoming-card-animation-left")) {
        upcominCloseIcon1.style["display"] = "none";

        upcomingCard1.classList.remove("upcoming-card-animation-left");
        upcomingCard1.classList.add("upcoming-card-animation-right");
      } else if (
        upcomingCard1.classList.contains("upcoming-card-animation-left")
      ) {
        upcominCloseIcon1.style["display"] = "block";

        upcomingCard1.classList.add("upcoming-card-animation-left");
        upcomingCard1.classList.remove("upcoming-card-animation-right");

        document.getElementById('upcomingCard2').addEventListener('click', function(evt) {
          var target = evt.target;
          if (target.id === 'upcomingCard2') {
            upcomingCard1.classList.remove("upcoming-card-animation-left");
            upcomingCard1.classList.add("upcoming-card-animation-right");
            upcominCloseIcon1.style["display"] = "none";

            upcomingCard2.classList.add("upcoming-card-animation-left");
            upcominCloseIcon2.style["display"] = "block";
          } 
        });

      }

      if (e.target.id === "upcominCloseIcon1") {
        upcominCloseIcon1.style["display"] = "none";
        upcomingCard1.classList.remove("upcoming-card-animation-left");
        upcomingCard1.classList.add("upcoming-card-animation-right");
        

        upcomingCard2.style["cursor"] = "pointer";
        upcomingCard3.style["cursor"] = "pointer";
        upcomingCard4.style["cursor"] = "pointer";

        var childNodes = document.getElementsByClassName(
          "card-upcoming__title__block"
        )[0].childNodes;
        for (var i = 0; i < childNodes.length; i++) {
          console.log(childNodes[i].nodeType);
          if (childNodes[i].nodeType !== 3) {
            childNodes[i].classList.remove("d-block");
          }
        }

      }

    }
  }
}

function upcomingCardSlide2(e) {
  if (window.innerWidth > 1199) {
    if (
      !upcomingCard1.classList.contains("upcoming-card-animation-left") &&
      !upcomingCard3.classList.contains("upcoming-card-animation-left") &&
      !upcomingCard4.classList.contains("upcoming-card-animation-left")
    ) {
      upcomingCard1.style["cursor"] = "inherit";
      upcomingCard3.style["cursor"] = "inherit";
      upcomingCard4.style["cursor"] = "inherit";

      upcomingCard2.classList.add("upcoming-card-animation-left");

      if (!upcomingCard2.classList.contains("upcoming-card-animation-left")) {
        upcominCloseIcon2.style["display"] = "none";

        upcomingCard2.classList.remove("upcoming-card-animation-left");
        upcomingCard2.classList.add("upcoming-card-animation-right");
      } else if (
        upcomingCard2.classList.contains("upcoming-card-animation-left")
      ) {
        upcominCloseIcon2.style["display"] = "block";

        upcomingCard2.classList.add("upcoming-card-animation-left");
        upcomingCard2.classList.remove("upcoming-card-animation-right");
      }

      if (e.target.id === "upcominCloseIcon2") {
        upcominCloseIcon2.style["display"] = "none";
        upcomingCard2.classList.remove("upcoming-card-animation-left");
        upcomingCard2.classList.add("upcoming-card-animation-right");

        upcomingCard1.style["cursor"] = "pointer";
        upcomingCard3.style["cursor"] = "pointer";
        upcomingCard4.style["cursor"] = "pointer";
      }
    }
  }
}

function upcomingCardSlide3(e) {
  if (window.innerWidth > 1199) {
    if (
      !upcomingCard1.classList.contains("upcoming-card-animation-left") &&
      !upcomingCard2.classList.contains("upcoming-card-animation-left") &&
      !upcomingCard4.classList.contains("upcoming-card-animation-left")
    ) {
      upcomingCard1.style["cursor"] = "inherit";
      upcomingCard2.style["cursor"] = "inherit";
      upcomingCard4.style["cursor"] = "inherit";

      upcomingCard3.classList.add("upcoming-card-animation-left");

      if (!upcomingCard3.classList.contains("upcoming-card-animation-left")) {
        upcominCloseIcon3.style["display"] = "none";

        upcomingCard3.classList.remove("upcoming-card-animation-left");
        upcomingCard3.classList.add("upcoming-card-animation-right");
      } else if (
        upcomingCard3.classList.contains("upcoming-card-animation-left")
      ) {
        upcominCloseIcon3.style["display"] = "block";

        upcomingCard3.classList.add("upcoming-card-animation-left");
        upcomingCard3.classList.remove("upcoming-card-animation-right");
      }

      if (e.target.id === "upcominCloseIcon3") {
        upcominCloseIcon3.style["display"] = "none";
        upcomingCard3.classList.remove("upcoming-card-animation-left");
        upcomingCard3.classList.add("upcoming-card-animation-right");

        upcomingCard1.style["cursor"] = "pointer";
        upcomingCard2.style["cursor"] = "pointer";
        upcomingCard4.style["cursor"] = "pointer";
      }
    }
  }
}

function upcomingCardSlide4(e) {
  if (window.innerWidth > 1199) {
    if (
      !upcomingCard1.classList.contains("upcoming-card-animation-left") &&
      !upcomingCard2.classList.contains("upcoming-card-animation-left") &&
      !upcomingCard3.classList.contains("upcoming-card-animation-left")
    ) {
      upcomingCard1.style["cursor"] = "inherit";
      upcomingCard2.style["cursor"] = "inherit";
      upcomingCard3.style["cursor"] = "inherit";

      upcomingCard4.classList.add("upcoming-card-animation-left");

      if (!upcomingCard4.classList.contains("upcoming-card-animation-left")) {
        upcominCloseIcon4.style["display"] = "none";

        upcomingCard4.classList.remove("upcoming-card-animation-left");
        upcomingCard4.classList.add("upcoming-card-animation-right");
      } else if (
        upcomingCard4.classList.contains("upcoming-card-animation-left")
      ) {
        upcominCloseIcon4.style["display"] = "block";

        upcomingCard4.classList.add("upcoming-card-animation-left");
        upcomingCard4.classList.remove("upcoming-card-animation-right");
      }

      if (e.target.id === "upcominCloseIcon4") {
        upcominCloseIcon4.style["display"] = "none";
        upcomingCard4.classList.remove("upcoming-card-animation-left");
        upcomingCard4.classList.add("upcoming-card-animation-right");

        upcomingCard1.style["cursor"] = "pointer";
        upcomingCard2.style["cursor"] = "pointer";
        upcomingCard3.style["cursor"] = "pointer";
      }
    }
  }
}



////////////////////////////////////!
///////////////// [ CARD CLIKS ] END  ///////////////////

// SCROLL ANIMATION //
function smootScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPsition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPsition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

var upcomingEventsLink = document.querySelector("#upcomingEvents");
var previousEventsLink = document.querySelector("#previousEvents");

upcomingEventsLink.addEventListener("click", function () {
  smootScroll("#upcoming-events", 1000);
});

previousEventsLink.addEventListener("click", function () {
  smootScroll("#previously-slide", 1000);
});
// SCROLL ANIMATION //


