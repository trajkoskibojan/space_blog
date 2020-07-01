$(function() {
//SECOND MENU
let navSecond = $('.nav-wrap-blog');
let menu = true;
$('.navbar-right .slideSecNav').click(function(e) {
  e.preventDefault();
  if(menu) {
    navSecond.css({display:'flex'}).stop().animate({
        minHeight: '5rem',
        height: '5rem',
        opacity: 1
      }, 300)
      menu = false;
  } else {
    navSecond.stop().animate({
      minHeight: 0,
      height: 0,
      opacity: 0
    }, 300)
    menu = true;
  }
  })
  
 let btnFirst = $('button.navbar-toggle.first') 
 let btnSec = $('button.navbar-toggle.sec') 
 let navSec = $('.navbar-header.sec') 
 
 $(window).scroll(function () { 
 navSec.css({
    position: 'absolute',
    top: '-9rem',
    right: '6rem'
  })
});

 $(btnFirst).click(function (e) { 
   e.preventDefault();
     navSec.css({
      position: 'fixed',
      top: '0px',
      right: '6rem'
     })
     if($('.in')) $('.nav-wrap.second div').last().removeClass('in')
 });

 $(btnSec).click(function () { 
 if($('.in')) $('.nav-wrap.first div').last().removeClass('in')
 });

//CAROUSEL
$('.carousel').carousel({
    interval: '7000'
});

//POP UP FORM
let mediaForm = window.matchMedia("(max-width: 767px)")
$("#signup").click(function() {
  if(mediaForm.matches) {
    $(".message").css("transform", "translateY(0%)");
  } else {
    $(".message").css("transform", "translateX(100%)");
  }
    if ($(".message").hasClass("login")) {
      $(".message").removeClass("login");
    }
    $(".message").addClass("signup");
  });
  
  $("#login").click(function() {
    if(mediaForm.matches) {
      $(".message").css("transform", "translateY(-100%)");
    } else {
      $(".message").css("transform", "translateX(0)");
    }
    if ($(".message").hasClass("login")) {
      $(".message").removeClass("signup");
    }
    $(".message").addClass("login");
  });
  
let popup = $('.popup-form')
$('.last.desk, .last.mob, .btn-position').click(function (e) { 
  e.preventDefault();
  popup.toggle('d-none')
 });

 popup.click(function(e) {
   if(popup.is(e.target) && e.target != $('.container-new'))
   popup.toggle('d-none');
 })


$('.close_icon').click(function() {
  $('.popup-form').toggle('d-none');
})

//HOME SWITCH PICTURE ON CLICK
let academyBtn = $('.btnAcademy');
let comapnyBtn = $('.btnCompany');

comapnyBtn.on('click', function(e) {
  e.preventDefault()
 $('.home-education').slideUp()
 $('.home-company').slideDown()
})

academyBtn.on('click', function(e) {
  e.preventDefault()
  $('.home-company').slideUp()
 $('.home-education').slideDown()
})

//HOME SHOW MESSAGE
let showMsg = $('.btnReserve');

showMsg.click(function (e) { 
  e.preventDefault();
  $('.msgDiv').stop().slideDown().fadeOut(3000);
});

//FOOTER
$('[data-toggle="popover"]').popover();
$('[data-toggle="popover"]').click(function(e){
  e.preventDefault()
});

//EVENT SPACE
$('.btnSlide').click(function () {
  $('html, body').animate({scrollTop: $('.events-host').offset().top}, 1000); 
});
$('.bt-lg').click(function (e) {e.preventDefault()})

//FORM VALIDATE
let inputs = $('[data-content="blur"]');

inputs.blur(function(e) {
  e.preventDefault();
   let text = $(this).val();
  text.length >= 1 ? $(this).css({
    'box-shadow': 'none',
    'border-bottom': '1px solid rgba(128, 128, 128, 0.5)'
  }) : $(this).css({
    'border':'1px solid transparent',
    'box-shadow': 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(252, 16, 8, 0.6)',
    'border-bottom': 'transparent'
  });
})

inputs.focus(function (e) { 
  e.preventDefault();
  $(this).css({
    'box-shadow':'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgb(252, 210, 50, .6)',
    'border':'1px solid #fcd232'
})
});

/* Animations on scroll */
//HOMEPAGE
$('.js--wp-1').waypoint(function(direction) {
  $('.js--wp-1').addClass('animated fadeIn');
}, {
  offset: '30%'
}); 

$('.js--wp-3').waypoint(function(direction) {
  $('.js--wp-3').addClass('animated fadeInLeftBig');
}, {
  offset: '50%'
});

$('.js--wp-4').waypoint(function(direction) {
  $('.js--wp-4').addClass('animated fadeInRightBig');
}, {
  offset: '50%'
});

$('.js--wp-5').waypoint(function(direction) {
  $('.js--wp-5').addClass('animated fadeInUpBig');
}, {
  offset: '50%'
});

$('.js--wp-10').waypoint(function(direction) {
  $('.js--wp-10').addClass('animated lightSpeedIn');
}, {
  offset: '70%'
});

//EVENT PAGE
$('.js--wp-11').waypoint(function(direction) {
  $('.js--wp-11').addClass('animated fadeInLeftBig');
}, {
  offset: '70%'
});

$('.js--wp-12').waypoint(function(direction) {
  $('.js--wp-12').addClass('animated fadeInRightBig');
}, {
  offset: '70%'
});

$('.js--wp-13').waypoint(function(direction) {
  $('.js--wp-13').addClass('animated fadeInRightBig');
}, {
  offset: '70%'
});

$('.js--wp-15').waypoint(function(direction) {
  $('.js--wp-15').addClass('animated zoomIn');
}, {
  offset: '50%'
});
});