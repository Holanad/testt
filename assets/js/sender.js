$(document).on('submit', '#consultation-form-page', function(e) {
    e.preventDefault();
    let $this = $(this);
    let fd = new FormData(this);
    $.ajax({
        type: 'POST',
        url: "actions/consultation.php",
        data: fd,
        contentType: false,
        processData: false,
        success: function () {
            $('.success-popup').addClass('active');
            $("#consultation-form-page").trigger('reset');
        },
    });
});
$(document).on('submit', '#contact-popup-form', function(e) {
    e.preventDefault();
    let $this = $(this);
    let fd = new FormData(this);
    $.ajax({
        type: 'POST',
        url: "actions/consultation.php",
        data: fd,
        contentType: false,
        processData: false,
        success: function () {
            $('.contact-popup').fadeOut();
            $('.success-popup').addClass('active');
            $("#contact-popup-form").trigger('reset');
        },
    });
});
$(document).on('submit', '#contact-form', function(e) {
    e.preventDefault();
    let $this = $(this);
    let fd = new FormData(this);
    $.ajax({
        type: 'POST',
        url: "actions/recall.php",
        data: fd,
        contentType: false,
        processData: false,
        success: function () {
            $('.success-popup').addClass('active');
            $("#contact-form").trigger('reset');
        },
    });
});
$(document).on('submit', '#service-popup-form', function(e) {
    e.preventDefault();
    let $this = $(this);
    let fd = new FormData(this);
    $.ajax({
        type: 'POST',
        url: "actions/service.php",
        data: fd,
        contentType: false,
        processData: false,
        success: function () {
            $('.service-popup-form').fadeOut();
            $('.success-popup').addClass('active');
            $("#service-popup-form").trigger('reset');
        },
    });
});