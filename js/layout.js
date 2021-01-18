var num = 50;
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.menu').addClass('fixed-top');
    } else {
        $('.menu').removeClass('fixed-top');
    }
});