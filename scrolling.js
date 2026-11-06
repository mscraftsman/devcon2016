
$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });

    // add Bootstrap's scrollspy
    $('body').scrollspy({
        target: '.navbar',
        offset: 160
    });

    // smooth scrolling
    $(document).on('click', 'nav a, .down-button a', function (event) {
        var href = $(this).attr('href');
        if (href && href.charAt(0) === '#' && href.length > 1 && href.indexOf('/') === -1) {
            var target = $(href);
            if (target.length) {
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - 100
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            }
        }
    });

    // parallax scrolling with stellar.js
    $(window).stellar();


});