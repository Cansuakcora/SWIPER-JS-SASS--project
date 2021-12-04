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