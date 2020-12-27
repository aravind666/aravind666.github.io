$(document).ready(function() {
    $('.move-to-top').hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 35) {
            $('.move-to-top').fadeIn();
            $('#navbarHeader').removeClass('show');
        } else {
            $('.move-to-top').fadeOut();
        }
    });

    $('.move-to-top').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

});