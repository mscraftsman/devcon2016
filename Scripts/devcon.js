/*!
 * DevCon v0.0.2 
 * Copyright 2016 Mauritius Software Craftsmanship Community
 */
// Show any email address(es)
(function () {
    var emailNodes = document.querySelectorAll('.email.obfuscated');
    if (emailNodes) {
        for (var i = 0; i < emailNodes.length; i++) {
            var emailNode = emailNodes[i];
            if (emailNode && emailNode.dataset) {
                var obfuscated = emailNode.dataset.email
                    .replace(/ /, "@")
                    .replace(/ /, ".");
                emailNode.setAttribute('href', 'mailto:' + obfuscated);
                if (!emailNode.textContent) {
                    emailNode.textContent = obfuscated;
                }
                console.log(obfuscated);
            }
        }
    }
})();

$(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});

$('body').on('click', '.scroll-link', function (e) {
    $('html, body').animate({
        scrollTop: $('html').offset().top
    }, 500);
});

$('body').on('click', '.scroll-top', function (e) {
    $('html, body').animate({
        scrollTop: $('html').offset().top
    }, 500);
});
