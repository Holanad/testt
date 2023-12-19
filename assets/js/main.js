        AOS.init({
        offset: 250,
        duration: 1000,
        delay: 150,
        wait:0,
        once: true,
    });

let ok = false;                    
window.addEventListener('scroll', function() {
    if (ok === false) {
        ok = true;   
        setTimeout(() => {                    
            let script = document.createElement('script');
            script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=cf4ffb1c-ff82-486f-a1c9-7e53e63a7a41';
            script.type= 'text/javascript';
             document.getElementById('yamap').replaceWith(script);                        
        }, 1000);  
        setTimeout(() => {                    
            let scripts = document.createElement('script');
            scripts.src = 'assets/js/icon_customImage.js';
            scripts.defer;
            document.getElementById('yamapimg').replaceWith(scripts);                        
        }, 4000);
    }
});


var myLazyLoad = new LazyLoad();

if ($("#contact-form__tel").length) {
    let telInput = document.querySelector("#contact-form__tel");

    window.intlTelInput(telInput, {
        autoHideDialCode: false,
        autoPlaceholder: "aggressive",
        placeholderNumberType: "MOBILE",
        allowExtensions: false,
        allowPlus: true,
        autoFormat: true,
        onlyCountries: [
            "al",
            "ad",
            "at",
            "by",
            "be",
            "ba",
            "bg",
            "hr",
            "cz",
            "dk",
            "ee",
            "fo",
            "fi",
            "fr",
            "de",
            "gi",
            "gr",
            "va",
            "hu",
            "is",
            "ie",
            "it",
            "lv",
            "li",
            "lt",
            "lu",
            "mk",
            "mt",
            "md",
            "mc",
            "me",
            "nl",
            "no",
            "pl",
            "pt",
            "ro",
            "ru",
            "sm",
            "rs",
            "sk",
            "si",
            "es",
            "se",
            "ch",
            "ua",
            "gb",
        ],
        preferredCountries: ["ru", "ua", "by"],
        nationalMode: false,
        utilsScript: "bower_components/intl-tel-input/build/js/utils.js",
    });
}
if ($("#contact-popup__email").length) {
    let telInput = document.querySelector("#contact-popup__email");

    window.intlTelInput(telInput, {
        autoHideDialCode: false,
        autoPlaceholder: "aggressive",
        placeholderNumberType: "MOBILE",
        allowExtensions: false,
        allowPlus: true,
        autoFormat: true,
        onlyCountries: [
            "al",
            "ad",
            "at",
            "by",
            "be",
            "ba",
            "bg",
            "hr",
            "cz",
            "dk",
            "ee",
            "fo",
            "fi",
            "fr",
            "de",
            "gi",
            "gr",
            "va",
            "hu",
            "is",
            "ie",
            "it",
            "lv",
            "li",
            "lt",
            "lu",
            "mk",
            "mt",
            "md",
            "mc",
            "me",
            "nl",
            "no",
            "pl",
            "pt",
            "ro",
            "ru",
            "sm",
            "rs",
            "sk",
            "si",
            "es",
            "se",
            "ch",
            "ua",
            "gb",
        ],
        preferredCountries: ["ru", "ua", "by"],
        nationalMode: false,
        utilsScript: "bower_components/intl-tel-input/build/js/utils.js",
    });
}
if ($("#service-popup-form__email").length) {
    let telInput = document.querySelector("#service-popup-form__email");

    window.intlTelInput(telInput, {
        autoHideDialCode: false,
        autoPlaceholder: "aggressive",
        placeholderNumberType: "MOBILE",
        allowExtensions: false,
        allowPlus: true,
        autoFormat: true,
        onlyCountries: [
            "al",
            "ad",
            "at",
            "by",
            "be",
            "ba",
            "bg",
            "hr",
            "cz",
            "dk",
            "ee",
            "fo",
            "fi",
            "fr",
            "de",
            "gi",
            "gr",
            "va",
            "hu",
            "is",
            "ie",
            "it",
            "lv",
            "li",
            "lt",
            "lu",
            "mk",
            "mt",
            "md",
            "mc",
            "me",
            "nl",
            "no",
            "pl",
            "pt",
            "ro",
            "ru",
            "sm",
            "rs",
            "sk",
            "si",
            "es",
            "se",
            "ch",
            "ua",
            "gb",
        ],
        preferredCountries: ["ru", "ua", "by"],
        nationalMode: false,
        utilsScript: "bower_components/intl-tel-input/build/js/utils.js",
    });
}
if ($("#consultation-form__tel").length) {
    let telInput = document.querySelector("#consultation-form__tel");

    window.intlTelInput(telInput, {
        autoHideDialCode: false,
        autoPlaceholder: "aggressive",
        placeholderNumberType: "MOBILE",
        allowExtensions: false,
        allowPlus: true,
        autoFormat: true,
        onlyCountries: [
            "al",
            "ad",
            "at",
            "by",
            "be",
            "ba",
            "bg",
            "hr",
            "cz",
            "dk",
            "ee",
            "fo",
            "fi",
            "fr",
            "de",
            "gi",
            "gr",
            "va",
            "hu",
            "is",
            "ie",
            "it",
            "lv",
            "li",
            "lt",
            "lu",
            "mk",
            "mt",
            "md",
            "mc",
            "me",
            "nl",
            "no",
            "pl",
            "pt",
            "ro",
            "ru",
            "sm",
            "rs",
            "sk",
            "si",
            "es",
            "se",
            "ch",
            "ua",
            "gb",
        ],
        preferredCountries: ["ru", "ua", "by"],
        nationalMode: false,
        utilsScript: "bower_components/intl-tel-input/build/js/utils.js",
    });
}
//--------------------------------------- Слайдер на партнеров -----------------------------------------//
if ($('.partners-slider').length) {
    $(window).on('load resize', function () {
        if ($(window).width() <= 768) {
            $('.partners-slider:not(.slick-initialized)').slick({
                prevArrow: '<span class="slider-arrow right-arrow slick-next" aria-label="Next"><svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="19.5" cy="19.5" r="19.5" fill="#F9F7F6"/><path d="M17.3523 19.5023L21.8097 15.3871C21.9325 15.274 22 15.1229 22 14.9617C22 14.8005 21.9325 14.6494 21.8097 14.5362L21.4192 14.1758C21.2966 14.0624 21.1328 14 20.9582 14C20.7837 14 20.6201 14.0624 20.4974 14.1758L15.1901 19.0754C15.0669 19.189 14.9995 19.3407 15 19.5021C14.9995 19.6641 15.0668 19.8157 15.1901 19.9294L20.4925 24.8242C20.6151 24.9376 20.7787 25 20.9534 25C21.128 25 21.2916 24.9376 21.4143 24.8242L21.8048 24.4638C22.0589 24.2292 22.0589 23.8473 21.8048 23.6128L17.3523 19.5023Z" fill="#B9B9B9"/></svg></span>',
                nextArrow: '<span class="slider-arrow left-arrow slick-prev" aria-label="Next"><svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="19.5" cy="19.5" r="19.5" fill="#289678"/><path d="M20.6478 19.5116L16.1425 23.5744C16.0184 23.686 15.9492 23.8363 15.9473 23.9975C15.9454 24.1587 16.0111 24.3106 16.1325 24.4252L16.5189 24.7901C16.6401 24.905 16.8032 24.9693 16.9777 24.9713C17.1523 24.9734 17.3166 24.9129 17.4406 24.8009L22.8048 19.9638C22.9293 19.8516 22.9985 19.7007 22.9999 19.5393C23.0023 19.3773 22.9367 19.2249 22.8148 19.1098L17.57 14.1534C17.4487 14.0385 17.2858 13.9742 17.1112 13.9722C16.9366 13.9701 16.7723 14.0306 16.6482 14.1426L16.2536 14.4984C15.9967 14.73 15.9923 15.1118 16.2436 15.3493L20.6478 19.5116Z" fill="white"/></svg></span>',
                lazyLoad: 'ondemand',
                responsive: [

                    {
                        breakpoint: 768,
                        settings: {
                            infinite: true,
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },

                    {
                        breakpoint: 568,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    }
                ]
            });
        } else {
            $(".partners-slider.slick-initialized").slick("unslick");
        }
    });
}

//--------------------------------------- Чекбокс -----------------------------------------//
function formCheckbox() {
    $.each($('.consultation-form-send__checkbox'), function (index, val) {
        if ($(this).find('input').prop('checked') == true) {
            $(this).addClass('active');

        }
    });

    $(document).on('click', '.consultation-form-send__checkbox', function (event) {
        if ($(this).hasClass('active')) {
            $(this).find('input').prop('checked', false);
            $(".consultation-form-send__checkbox img").attr('src', 'assets/img/checkboxgray/checkbox.svg');
            $(".consultation-form-send__checkbox label").toggleClass('active');
            $(".consultation-form-send button").toggleClass('hidden-unset');
        } else {
            $(this).find('input').prop('checked', true);
            $(".consultation-form-send__checkbox img").attr('src', 'assets/img/checkboxgray/checkbox-active.svg');
            $(".consultation-form-send__checkbox label").toggleClass('active');
            $(".consultation-form-send button").toggleClass('hidden-unset');
        }
        $(this).toggleClass('active');
        return false;
    });
}
formCheckbox();
//--------------------------------------- Чекбокс в разделе контакты -----------------------------------------//
function formCheckboxContact() {
    $.each($('.contact-form-send__checkbox'), function (index, val) {
        if ($(this).find('input').prop('checked') == true) {
            $(this).addClass('active');

        }
    });

    $(document).on('click', '.contact-form-send__checkbox', function (event) {
        if ($(this).hasClass('active')) {
            $(this).find('input').prop('checked', false);
            $(".contact-form-send__checkbox img").attr('src', 'assets/img/checkboxgray/checkbox.svg');
            $(".contact-form-send__checkbox label").toggleClass('active');
            $(".contact-form form button").toggleClass('hidden-unset');
        } else {
            $(this).find('input').prop('checked', true);
            $(".contact-form-send__checkbox img").attr('src', 'assets/img/checkboxgray/checkbox-active.svg');
            $(".contact-form-send__checkbox label").toggleClass('active');
            $(".contact-form form button").toggleClass('hidden-unset');
        }
        $(this).toggleClass('active');
        return false;
    });
}
formCheckboxContact();
//--------------------------------------- Чекбокс на попап получить консультацию -----------------------------------------//
function formCheckboxPopup() {
    $.each($('.contact-popup__checkbox'), function (index, val) {
        if ($(this).find('input').prop('checked') == true) {
            $(this).addClass('active-second');

        }
    });

    $(document).on('click', '.contact-popup__checkbox', function (event) {
        if ($(this).hasClass('active-second')) {
            $(this).find('input').prop('checked', false);
            $(".contact-popup__checkbox img").attr('src', 'assets/img/popup/checkbox.svg');
            $(".contact-popup__checkbox label").toggleClass('active-second');
            $(".contact-popup form button").toggleClass('hidden-unset-second');
        } else {
            $(this).find('input').prop('checked', true);
            $(".contact-popup__checkbox img").attr('src', 'assets/img/popup/checkbox-active.svg');
            $(".contact-popup__checkbox label").toggleClass('active-second');
            $(".contact-popup form button").toggleClass('hidden-unset-second');
        }
        $(this).toggleClass('active-second');
        return false;
    });
}
formCheckboxPopup();

//--------------------------------------- Чекбокс на попап с услугой и форммой -----------------------------------------//
function formCheckboxPopupForm() {
    $.each($('.service-popup-form__checkbox'), function (index, val) {
        if ($(this).find('input').prop('checked') == true) {
            $(this).addClass('active-second');

        }
    });

    $(document).on('click', '.service-popup-form__checkbox', function (event) {
        if ($(this).hasClass('active-second')) {
            $(this).find('input').prop('checked', false);
            $(".service-popup-form__checkbox img").attr('src', 'assets/img/popup/checkbox.svg');
            $(".service-popup-form__checkbox label").toggleClass('active-second');
            $(".service-popup-form form button").toggleClass('hidden-unset-second');
        } else {
            $(this).find('input').prop('checked', true);
            $(".service-popup-form__checkbox img").attr('src', 'assets/img/popup/checkbox-active.svg');
            $(".service-popup-form__checkbox label").toggleClass('active-second');
            $(".service-popup-form form button").toggleClass('hidden-unset-second');
        }
        $(this).toggleClass('active-second');
        return false;
    });
}
formCheckboxPopupForm();

//--------------------------------------- Услуга 1 -----------------------------------------//
$('#popup-one-close').click(function () {
    $('#popup-one').fadeOut();
    $('html').removeClass('hidden-html');
})
$('#service-one').click(function () {
    event.preventDefault();
    $('#popup-one').fadeIn();
    $('#popup-one').css({
        'display': 'flex'
    });
    $('html').addClass('hidden-html');
})
//--------------------------------------- Услуга 2 -----------------------------------------//
$('#popup-second-close').click(function () {
    $('#popup-second').fadeOut();
    $('html').removeClass('hidden-html');
})
$('#service-second').click(function () {
    event.preventDefault();
    $('#popup-second').fadeIn();
    $('#popup-second').css({
        'display': 'flex'
    });
    $('html').addClass('hidden-html');
})
//--------------------------------------- Услуга 3 -----------------------------------------//
$('#popup-third-close').click(function () {
    $('#popup-third').fadeOut();
    $('html').removeClass('hidden-html');
})
$('#service-third').click(function () {
    event.preventDefault();
    $('#popup-third').fadeIn();
    $('#popup-third').css({
        'display': 'flex'
    });
    $('html').addClass('hidden-html');
})
//--------------------------------------- Услуга 4 -----------------------------------------//
$('#popup-fourth-close').click(function () {
    $('#popup-fourth').fadeOut();
    $('html').removeClass('hidden-html');
})
$('#service-fourth').click(function () {
    event.preventDefault();
    $('#popup-fourth').fadeIn();
    $('#popup-fourth').css({
        'display': 'flex'
    });
    $('html').addClass('hidden-html');

})
//--------------------------------------- Услуга 5 -----------------------------------------//
$('#popup-fifth-close').click(function () {
    $('#popup-fifth').fadeOut();
    $('html').removeClass('hidden-html')

})
$('#service-fifth').click(function () {
    event.preventDefault();
    $('#popup-fifth').fadeIn();
    $('#popup-fifth').css({
        'display': 'flex'
    });
    $('html').addClass('hidden-html');
})
//--------------------------------------- Услуга 6 -----------------------------------------//
$('#popup-sixth-close').click(function () {
    $('#popup-sixth').fadeOut();
    $('html').removeClass('hidden-html');
})
$('#service-sixth').click(function () {
    event.preventDefault();
    $('#popup-sixth').fadeIn();
    $('#popup-sixth').css({
        'display': 'flex'
    });
    $('html').addClass('hidden-html');
})

//--------------------------------------- Закрытие попапа услуг -----------------------------------------//
$(document).mouseup(function (e) {
    var container = $(".service-popup__wrapper");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.service-popup').fadeOut();
        $('html').removeClass('hidden-html');
    }
});
//--------------------------------------- Попап консультации -----------------------------------------//
$('#contact-popup-close').click(function () {
    $('#contact-popup').fadeOut();
    $('html').removeClass('hidden-html');

})
$('.intro-btn__consult, .header-contact-button, .footer-contact-button, .header-connect-mobile__button').click(function () {
    event.preventDefault();
    $('#contact-popup').fadeIn();
    $('#contact-popup').css({
        'display': 'flex'
    });
    $('.header-nav nav').removeClass('burger-active');
    $('.header-burger span').removeClass('burger-revert');
    $('html').addClass('hidden-html');
})
//--------------------------------------- Закрытие попапа консультации -----------------------------------------//
$(document).mouseup(function (e) {
    var containerTwo = $(".contact-popup__wrapper, .iti");
    if (!containerTwo.is(e.target) && containerTwo.has(e.target).length === 0) {
        $('.contact-popup').fadeOut();
        $('html').removeClass('hidden-html');
    }
});
//--------------------------------------- Закрытие попапа услуг с формой -----------------------------------------//
$(document).mouseup(function (e) {
    var containerThree = $(".service-popup-form__wrapper, .iti");
    if (!containerThree.is(e.target) && containerThree.has(e.target).length === 0) {
        $('.service-popup-form').fadeOut();
    }
});
//--------------------------------------- Бургер меню -----------------------------------------//
$('.header-burger').click(function () {
  //  $('html').toggleClass('hidden-html');
    $('.header-nav nav').toggleClass('burger-active');
    $('.header-burger span').toggleClass('burger-revert');
    if($('.header-burger span').hasClass('burger-revert')){
        $('html').addClass('hidden-html');
    } else{
        $('html').removeClass('hidden-html');
    }
});
$('.header-nav nav ul li a').click(function () {
    $('.header-burger span').removeClass('burger-revert');
    $('.header-nav nav').removeClass('burger-active');  
    $('.header-nav nav').removeClass('burger-active'); 
});

$('.service__request').click(function () {
    // e.preventDefault();

    $('.data-modal').fadeIn();
    $('.data-modal').css({
        'display': 'flex'
    });
    $('html').addClass('hidden-html');
    // vars
    let dataImage = $(this).parents('.service-card').find('.modal-img').val();
    let dataTitle = $(this).parents('.service-card').find('h3').text();
    let dataModal = $('.data-modal');

    // load
    dataModal.find('.data-title').text(dataTitle);
    dataModal.find('.data-image').attr("src", dataImage);
    dataModal.find('.data-value').val(dataTitle);
});
//--------------------------------------- Закрытие -----------------------------------------//
$('#service-popup-form-close').click(function () {
    $('.service-popup-form').fadeOut();
    $('html').removeClass('hidden-html');

})

$('.popup__close').click(function() {
    $('.popup').removeClass('active');
});

    (function formValidateService() {
        $('#service-popup-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: {
                    required: true,
                    minlength: 5
                },
                question: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
              name: {
                  required: "Заполните поле",
                  minlength: "Минимальное количество символов: 2"
              },
              phone: {
                  required: "Заполните поле",
                  minlength: "Минимальное количество символов: 4"
              },
                question: {
                  required: "Заполните поле",
                  minlength: "Минимальное количество символов: 10"
              }
            }
        });
    }());
    (function formValidateConsult() {
        $('#contact-popup-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: {
                    required: true,
                    minlength: 5
                },
                question: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
              name: {
                  required: "Заполните поле",
                  minlength: "Минимальное количество символов: 2"
              },
              phone: {
                  required: "Заполните поле",
                  minlength: "Минимальное количество символов: 4"
              },
                question: {
                  required: "Заполните поле",
                  minlength: "Минимальное количество символов: 10"
              }
            }
        });
    }());
    (function formValidateContact() {
        $('#consultation-form-page').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: {
                    required: true,
                    minlength: 5
                },
                question: {
                    required: true,
                    minlength: 10
                }
             },
            messages: {
              name: {
                  required: "Заполните поле",
                  minlength: "Количество символов менее: 2"
              },
              phone: {
                  required: "Заполните поле",
                  minlength: "Количество символов менее: 4"
              },
              question: {
                required: "Заполните поле",
                minlength: "Количество символов менее: 10"
            }
            }
        });
    }());
    (function formValidateContact() {
        $('#contact-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: {
                    required: true,
                    minlength: 5
                }
             },
            messages: {
              name: {
                  required: "Заполните поле",
                  minlength: "Количество символов менее: 2"
              },
              phone: {
                  required: "Заполните поле",
                  minlength: "Количество символов менее: 4"
              }
            }
        });
    }());
  
  