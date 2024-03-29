$(function() {
  all_click();
});
  // scroll
    $("a.scrollto").click(function() {
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
      }, 900);
      return false;
    });

    // modal Window
      $('.button_writeAutor').click(function(){
      $('#exampleModal').arcticmodal();
    })
    
  // spoler Skills
    $('.service__content-tabTitle').click(function(event) {
      if ($('.service__content-tabs').hasClass('one')) {
          $('.service__content-tabTitle').not($(this)).removeClass('active');
          $('.service__content-tabText').not($(this).next()).slideUp(400);
      }
      $(this).toggleClass('active').next().slideToggle(400);
  });

  // skills
  $('.html_css').delay(1000).animate({'width':'90%'},3000);
  $('.wp').delay(4000).animate({'width':'70%'},3000);
  $('.js').delay(7000).animate({'width':'80%'},3000);
  $('.sass').delay(10000).animate({'width':'70%'},3000);
  $('.vue').delay(13000).animate({'width':'40%'},2000);

  // burger menu
    $('.header__burger').click(function(event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });


  // tabs portfolio
  function tabs__work(a,b) {
    $('.tabs__block-items').css("display", "none");
    $('.tabs-item').css("background", "#d9e2f3");
    $(a).css({"display": "flex","opacity":"0.3"}).animate({opacity:1},2000);
    $(b).css({"background":"#8eaadb", "opacity":"0.3"}).animate({opacity:1},1800);  }

  function all_click() {tabs__work('.tabs__block-items', '#tab_1'); }
  function lending_click() {tabs__work('.lending', '#tab_2');}
  function jsproj_click() {tabs__work('.jsProject', '#tab_3');}
  function cms_click() {tabs__work('.cms_click', '#tab_4');}







  
