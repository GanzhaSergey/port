$('#OS').click(function () {
    $(this).removeClass();
    $(this).addClass('webDevBanner__btn-HIN');
    $('#HIN').removeClass();
    $('#HIN').addClass('webDevBanner__btn-OS');
});

$('#HIN').click(function () {
    $(this).removeClass();
    $(this).addClass('webDevBanner__btn-HIN');
    $('#OS').removeClass();
    $('#OS').addClass('webDevBanner__btn-OS');
});

$('.ourServices__row-deactive').click(function() {
    $('.ourServices__row-active').removeClass().addClass('ourServices__row-deactive');
    $(this).removeClass();
    $(this).addClass('ourServices__row-active');
});


$('.latestWorks__rowItem').click(function() {
    $('.latestWorks__rowItem-active').removeClass('latestWorks__rowItem-active');
    $(this).addClass('latestWorks__rowItem-active');

})


// burger menu
$('.header__burger').click(function(event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
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
