(function scrollLink() {
    $(".header-nav nav ul li a, .footer-nav nav ul li a").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
          scrollTop: destination
        }, 1500);
        return false;
    });
}());
