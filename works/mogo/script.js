$(document).ready(function(){
    $('.service__content-tabTitle').click(function(event) {

        if ($('.service__content-tabs').hasClass('one')) {
            $('.service__content-tabTitle').not($(this)).removeClass('active');
            $('.service__content-tabText').not($(this).next()).slideUp(400);
        }
        $(this).toggleClass('active').next().slideToggle(400);
    });


function ibg(){
    $.each($('.ibg'), function(index, val) { 
        if($(this).find('img').length>0){ 
            $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")'); 
        }
        });
    }
    ibg();
    

// burger menu
$('.header__burger').click(function(event) {
    $('.header__burger, .menu__body').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

// slow scroll
$("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });

