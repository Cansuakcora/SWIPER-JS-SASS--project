if (window.innerWidth < 767) {
  document.querySelector(".container-slide").classList.add("container-fluid");
}

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  // spaceBetween: 40,
  slidesPerGroup: 1,
  loop: false,
  // loopFillGroupWithBlank: false,
  spaceBetween: 30,
  // slidesOffsetAfter: 200,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    // when window width is <= 1200px
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is <= 999px
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    // when window width is <= 320px
    120: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

$(function () {
  $(".remove-img").on("click", function () {
    $(this).hide();
    var id = $(this).data("id");
    var $target = $("#video" + id);
    $target.css("display", "block");
    var width = $target.width();
    var height = (width * 365) / 649;
    $target.css("height", height + "px");
    $("#content" + id).hide();

    //Buttun Down
    var $targetBtn = $("#btnSlideDown" + id);
    $targetBtn.addClass("btn-slide-down");
  });
});

//[ CARD SLIDE, BUTTONS] START
const openLink1 = document.querySelectorAll(".btn-slide-item")[0];
const openLink2 = document.querySelectorAll(".btn-slide-item")[1];
const openLink3 = document.querySelectorAll(".btn-slide-item")[2];
const openLink4 = document.querySelectorAll(".btn-slide-item")[3];
const openLink5 = document.querySelectorAll(".btn-slide-item")[4];

const linkList1 = document.querySelectorAll(".btn-slide-item__child")[0];
const linkList2 = document.querySelectorAll(".btn-slide-item__child")[1];
const linkList3 = document.querySelectorAll(".btn-slide-item__child")[2];
const linkList4 = document.querySelectorAll(".btn-slide-item__child")[3];
const linkList5 = document.querySelectorAll(".btn-slide-item__child")[4];

const btnIcon1 = document.querySelectorAll(".btn-slide-item__icon")[0];
const btnIcon2 = document.querySelectorAll(".btn-slide-item__icon")[1];
const btnIcon3 = document.querySelectorAll(".btn-slide-item__icon")[2];
const btnIcon4 = document.querySelectorAll(".btn-slide-item__icon")[3];
const btnIcon5 = document.querySelectorAll(".btn-slide-item__icon")[4];

function btnClick1() {
  if (linkList1.classList.contains("show")) {
    linkList1.classList.remove("show");

    linkList1.classList.add("drapdow-animation-down-first");
    openLink1.classList.add("border-bottom-radius-14px");
    btnIcon1.classList.remove("arrow-rotate-up");
    btnIcon1.classList.add("arrow-rotate-down");

    //
  } else if (!linkList1.classList.contains("show")) {
    linkList1.classList.add("show");

    linkList1.classList.remove("drapdow-animation-up");
    linkList1.classList.add("drapdow-animation-down-first");

    openLink1.classList.remove("border-bottom-radius-14px");
    btnIcon1.classList.add("arrow-rotate-up");
  }
}

function btnClick2() {
  if (linkList2.classList.contains("show")) {
    linkList2.classList.remove("show");

    linkList2.classList.add("drapdow-animation-down-second");
    openLink2.classList.add("border-bottom-radius-14px");
    btnIcon2.classList.remove("arrow-rotate-up");
    btnIcon2.classList.add("arrow-rotate-down");

    //
  } else if (!linkList2.classList.contains("show")) {
    linkList2.classList.add("show");

    linkList2.classList.remove("drapdow-animation-up");
    linkList2.classList.add("drapdow-animation-down-second");

    openLink2.classList.remove("border-bottom-radius-14px");
    btnIcon2.classList.add("arrow-rotate-up");
  }
}

function btnClick3() {
  if (linkList3.classList.contains("show")) {
    linkList3.classList.remove("show");

    linkList3.classList.add("drapdow-animation-down-second");
    openLink3.classList.add("border-bottom-radius-14px");
    btnIcon3.classList.remove("arrow-rotate-up");
    btnIcon3.classList.add("arrow-rotate-down");
    //
  } else if (!linkList3.classList.contains("show")) {
    linkList3.classList.add("show");
    linkList3.classList.remove("drapdow-animation-up");
    linkList3.classList.add("drapdow-animation-down-second");

    openLink3.classList.remove("border-bottom-radius-14px");
    btnIcon3.classList.add("arrow-rotate-up");
  }
}

function btnClick4() {
  if (linkList4.classList.contains("show")) {
    linkList4.classList.remove("show");

    linkList4.classList.add("drapdow-animation-down");
    openLink4.classList.add("border-bottom-radius-14px");
    btnIcon4.classList.remove("arrow-rotate-up");
    btnIcon4.classList.add("arrow-rotate-down");
    //
  } else if (!linkList4.classList.contains("show")) {
    linkList4.classList.add("show");
    linkList4.classList.remove("drapdow-animation-up");
    linkList4.classList.add("drapdow-animation-down");

    openLink4.classList.remove("border-bottom-radius-14px");
    btnIcon4.classList.add("arrow-rotate-up");
  }
}

function btnClick5() {
  if (linkList5.classList.contains("show")) {
    linkList5.classList.remove("show");

    linkList5.classList.add("drapdow-animation-down");
    openLink5.classList.add("border-bottom-radius-14px");
    btnIcon5.classList.remove("arrow-rotate-up");
    btnIcon5.classList.add("arrow-rotate-down");
    //
  } else if (!linkList5.classList.contains("show")) {
    linkList5.classList.add("show");
    linkList5.classList.remove("drapdow-animation-up");
    linkList5.classList.add("drapdow-animation-down");

    openLink5.classList.remove("border-bottom-radius-14px");
    btnIcon5.classList.add("arrow-rotate-up");
  }
}

openLink1.addEventListener("click", btnClick1);
openLink2.addEventListener("click", btnClick2);
openLink3.addEventListener("click", btnClick3);
openLink4.addEventListener("click", btnClick4);
openLink5.addEventListener("click", btnClick5);
// [ CARD SLIDE, BUTTONS] END
