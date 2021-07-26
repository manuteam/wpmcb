$(document).ready(function() {

    /*   Toggle slider #coaching-offers__slider  */
    let x = $(window).innerWidth()

    $('#coaching-offers__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        nextArrow: "<div class='custom-arrow custom-arrow_next'> " +
            "<img src='assets/images/icons/right-chevron.svg' alt='arrow' class='custom-arrow__icon'>" +
            " </div>",
        prevArrow: "<div class='custom-arrow custom-arrow_prev'> " +
            "<img src='assets/images/icons/right-chevron.svg' alt='arrow' class='custom-arrow__icon custom-arrow__icon_prev'>" +
            " </div>",
        responsive: [
            {
                breakpoint: 992,
                settings: "unslick"
            }
        ]

    });

    /*=========================================*/

    /*   Toggle slider #coaching-offers__slider  */
    $('#diy-tutorials__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: "<div class='custom-arrow_coachs custom-arrow_coachs-next'> " +
            "<img src='assets/images/icons/slick-arrow.svg' alt='arrow' class='custom-arrow__coachs-icon'>" +
            " </div>",
        prevArrow: "<div class='custom-arrow_coachs custom-arrow_coachs-prev'> " +
            "<img src='assets/images/icons/slick-arrow.svg' alt='arrow' class='custom-arrow__coachs-icon custom-arrow__icon_prev'>" +
            " </div>",

        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    variableWidth: true,
                    arrows: false
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    variableWidth: true,
                    arrows: false
                }
            },
            {
                breakpoint: 376,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    /*==========================================*/

    /*   Toggle slider #coaching-offers__slider  */
    $('#explore-team__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 376,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    /*==========================================*/

    /*   Toggle slider #payment-coaching__slider  */
    $('#payment-coaching__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 376,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    /*==========================================*/

    /*   Custom select funstions   */
    //  areas name
    $('ul.custom-select__default-option_areas').click(function() {
        $(this).parent().toggleClass('active');
    });

    $("ul.custom-select__options-list_areas li").click(function(){
        let currentImg = $(this).find('img.custom-select__img'),
            currentText = $(this).find('div.custom-select__text');


        $('ul.custom-select__default-option_areas img.custom-select__img').attr('src', currentImg.attr('src'))
        $('ul.custom-select__default-option_areas .custom-select__text').html(currentText.html())

        $(this).parents(".custom-select__wrap_areas").removeClass("active");
        $("ul.custom-select__default-option_areas").attr({
            'data-value': currentText.html()
        })
    })

    //  areas level
    $('ul.custom-select__default-option_level').click(function() {
        $(this).parent().toggleClass('active');
    });

    $("ul.custom-select__options-list_level li").click(function(){
        let current = $(this).find('.recent-post__right-bottom-level-wrap').html()

        $("ul.custom-select__default-option_level .recent-post__right-bottom-level-wrap").html(current)
        $(this).parents(".custom-select__wrap_level").removeClass("active");
    })

    //  areas price
    $('ul.custom-select__default-option_price').click(function() {
        $(this).parent().toggleClass('active');
    });

    $("ul.custom-select__options-list_price li").click(function(){
        let current = $(this).find('.recent-post__right-bottom-level-wrap').html()

        $("ul.custom-select__default-option_price .recent-post__right-bottom-level-wrap").html(current)
        $(this).parents(".custom-select__wrap_price").removeClass("active");

    })

    /*     Checkout    */

    //  Form select
    $('ul.custom-select__default-option_pays').click(function() {
        $(this).parent().toggleClass('active');
    });

    $("ul.custom-select__options-list_pays li").click(function(){
        let current = $(this).find('.checkout__pays-wrap').html()

        $("ul.custom-select__default-option_pays .checkout__pays-wrap").html(current)
        $(this).parents(".custom-select__wrap_pays").removeClass("active");
    })

    /*=========================*/

    /*  Menu  */
    $('div.header__burger-menu').click(function () {
        $('div.overlay').fadeIn(200)
    });

    $('div.header__burger-icon').click(function () {
        $('div.overlay').fadeOut(200)
    });

    let hoverOrClickMain = function () {
        $('a.menu__item-wrap').removeClass('active');
        $(this).addClass('active');

        $('div.menu__item-text-block').removeClass('active');
        $(this).find('div.menu__item-text-block').addClass('active');

        $('img.menu__item-icon-arrow').css('display', 'block');
        $('svg.menu__item-icon-arrow_white').css('display', 'none');
        $(this).find('img.menu__item-icon-arrow').css('display', 'none');
        $(this).find('svg.menu__item-icon-arrow_white').css('display', 'block');
    };

    let cancelHover = function () {
        $('a.menu__item-wrap').removeClass('active');
        $('div.menu__item-text-block').removeClass('active');
        $('svg.menu__item-icon-arrow_white').css('display', 'none');
        $('img.menu__item-icon-arrow').css('display', 'block');
    }

    $('a.menu__item-wrap').click(hoverOrClickMain).hover(hoverOrClickMain, cancelHover);

    /*=========================*/

    /*  Checkout agree  */

    $('div.checkout__agree-box').click(function () {
        $('div.checkout__agree-box-done-wrap').toggleClass('active');
    });

    /*=========================*/

    /*  Checkout btns  */

    $('.checkout__purchase-btn-first').click(function () {
        $('.checkout__purchase-btn').removeClass('choose-amount__purchase-btn-active');
        $(this).addClass('choose-amount__purchase-btn-active');

        $('.choose-amount__purchase-btn-check').removeClass('choose-amount__purchase-btn-check-active');
        $(this).find('.choose-amount__purchase-btn-check').addClass('choose-amount__purchase-btn-check-active');

        $('.checkout__purchase').removeClass('active');
        $('.checkout__card').addClass('active');
    });

    $('.checkout__purchase-btn-second').click(function () {
        $('.checkout__purchase-btn').removeClass('choose-amount__purchase-btn-active');
        $(this).addClass('choose-amount__purchase-btn-active');

        $('.choose-amount__purchase-btn-check').removeClass('choose-amount__purchase-btn-check-active');
        $(this).find('.choose-amount__purchase-btn-check').addClass('choose-amount__purchase-btn-check-active');

        $('.checkout__purchase').removeClass('active');
        $('.checkout__letter').addClass('active');
    });

    /*=========================*/

    /*  Maskedinput card  */

    let expireValidate = false

    $("#card-number").inputmask("9999-9999-9999-9999");

    $('#card-date').inputmask({
        alias: "datetime",
        inputFormat: "mm/yy",
        outputFormat: "dd.mm.yy",
        "oncomplete": function(){
            let valDate = $("#card-date").val(),
                curYear = new Date().getFullYear().toString().substr(2,2),
                curMonth = new Date().getMonth() + 1;
                enterDate = valDate.split('/');


            if ( parseInt(enterDate[1]) <= curYear ) {
                if ( parseInt(enterDate[0]) <= curMonth) {
                    $("#card-date").addClass('attention')
                } else {
                    $("#card-date").removeClass('attention')
                    expireValidate = true
                }
            } else {
                $("#card-date").removeClass('attention')
                expireValidate = true
            }

        }
    });
    $("#card-code").inputmask("9999");

    /*=========================*/

    /*  Promo AJAX  */
    $('#promo').click(function (e) {
        e.preventDefault();

        let promoCode = $('#promo-input').val();
        $.ajax({
            url: '',
            type: 'POST',
            data: {
                action: 'mon_approve_coupon',
                code: promoCode
            },
            success: function(data){
                console.log( 'success');
            },
            error: function(){
                console.log( 'Error');
            },
            complete: function(data) {
                console.log( 'complete');
            },
        });
        return false;
    })
});
