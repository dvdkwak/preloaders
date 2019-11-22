// script to handle the preloader (so to stop it when ready)
$(document).ready(function(){
  setTimeout(function(){
    $('.active-preloader').fadeOut('fast');
  }, 1000);
});


// some script to put the preloader verticaly in the center
wH = $(window).height();
tH = $('.active-preloader-loader').height();

$('.active-preloader-loader').css({'margin-top': (wH/2 - tH/2)});
