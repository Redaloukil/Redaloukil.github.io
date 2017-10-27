$(document).ready(function(){
    $(function () {
        $(document).scroll(function () {
          var $nav = $(".navbar-fixed-top");
          $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
          
        });
      });
    $('.index').click(function () {
        var $href = $(this).attr('href');
        $('body').stop().animate({
          scrollTop: $($href).offset().top
        }, 1000);
    });
})