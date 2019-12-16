$(function() {

  var menu_ul = $('.faq > li > ul'),
       menu_a  = $('.faq > li > a');
  
  menu_ul.hide();

  menu_a.click(function(e) {
    e.preventDefault();
    if(!$(this).hasClass('active')) {
      menu_a.removeClass('active');
      menu_ul.filter(':visible').slideUp('normal');
      $(this).addClass('active').next().stop(true,true).slideDown('normal');
    } else {
      $(this).removeClass('active');
      $(this).next().stop(true,true).slideUp('normal');
    }
  });

});
 // You can also use "$(window).load(function() {"
 $(function () {
    // Slideshow 5
    $("#slider5").responsiveSlides({
    auto: true,
    pager: false,
    nav: true,
    speed: 500,
    namespace: "callbacks",
    before: function () {
      $('.events').append("<li>before event fired.</li>");
    },
    after: function () {
      $('.events').append("<li>after event fired.</li>");
    }
    });

  });


  (document).ready(function(c) {
    $('.close1').on('click', function(c){
        $('.rem1').fadeOut('slow', function(c){
            $('.rem1').remove();
        });
        });	  
  

    $('.close2').on('click', function(c){
      $('.rem2').fadeOut('slow', function(c){
          $('.rem2').remove();
      });
      });	  
  

    $('.close3').on('click', function(c){
        $('.rem3').fadeOut('slow', function(c){
            $('.rem3').remove();
        });
        });	  
    });

    $('.value-plus').on('click', function(){
      var divUpd = $(this).parent().find('.value'), newVal = parseInt(divUpd.text(), 10)+1;
      divUpd.text(newVal);
  });

  $('.value-minus').on('click', function(){
      var divUpd = $(this).parent().find('.value'), newVal = parseInt(divUpd.text(), 10)-1;
      if(newVal>=1) divUpd.text(newVal);
  });