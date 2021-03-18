$(document).ready(function() {
    var cabinetMenu = $(".cabinet-menu-wrap");
    var modalMenuWrap = $(".modal-menu-wrap");
    var searchForm = $(".search-form"),
        searchFormInput = $(".search-form input[type='text']"),
        searchFormClear = $(".search-form .remove");

    window.onresize = function() {
        if ($('.product-list').height() < 3900) {
            $('.product-list-wrap').addClass('medium-content');
        }

        if ($('.product-list').height() < 2530) {
            $('.product-list-wrap').addClass('small-content');
        }
    };

    if ($('.product-list').height() < 3900) {
        $('.product-list-wrap').addClass('medium-content');
    }

    if ($('.product-list').height() < 2530) {
        $('.product-list-wrap').addClass('small-content');
    }

    $(document).on('click', function(e) {
        if( $(e.target).closest('.cabinet-menu-btn').length ) {
            cabinetMenu.toggleClass('active');
            modalMenuWrap.removeClass('open');
            $('.menu-btn').removeClass('active');

            return;
        }

        if( $(e.target).closest('.menu-btn').length ) {
            modalMenuWrap.toggleClass('open');
            
            $('.menu-btn').toggleClass('active');

            return;
        }

        if( $(e.target).closest('.search-btn').length ) {
            searchForm.toggleClass('active');

            return;
        }

        if(!$(e.target).closest(modalMenuWrap).length || $(e.target).closest('.modal-menu-wrap .close').length) {
            modalMenuWrap.removeClass('open');

            $('.menu-btn').removeClass('active');
        }

        if(!$(e.target).closest('.cabinet-menu-btn').length ) {
            cabinetMenu.removeClass('active');
        }

        if(!$(e.target).closest('.search-form').length) {
            searchForm.removeClass('active');
        }

        if(!$(e.target).closest('.filters .wrap').length) {
            $('.filters .wrap').removeClass('open-filters');
        }
    });

    $(searchFormClear).on('click', function(e) {
        searchFormInput.val('');
    });
    
    $('.filters .mobile-btn').on('click', function(e) {
        $(this).parent().toggleClass('open-filters');
    });

    $('.eye').on('click', function(e) {
        if($(this).hasClass('active')) {
            $(this).parent().find('input').attr('type', 'password');
            $(this).removeClass('active');
        } else {
            $(this).parent().find('input').attr('type', 'text');
            $(this).addClass('active');
        }
    });
    

    /*** Tabs ***/

    $('.tabs-head--item').on("click", function() {
        var id = $(this).attr('data-tab'),
            content = $('.tabs-body--item[data-tab="'+ id +'"]');

        $('.tabs-head--item.active').removeClass('active');
        $(this).addClass('active');

        $('.tabs-body--item.active').removeClass('active');

        content.addClass('active');
    });


    /*** Spoiler ***/

    $('.spoiler-list--head').on("click", function() {
        $(this).parent().toggleClass('active');
    });


    /*** Sliders ***/

    var swiper = new Swiper('.slider-list', {
        spaceBetween: 10,
        slidesPerGroup: 1,
        simulateTouch: false,
        slidesPerView: 'auto',
        centeredSlides: true,
        pagination: {
            el: '.slider-list .pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            769: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 20,
                centeredSlides: false,
            },
            1281: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                centeredSlides: false,
            },
            1601: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              centeredSlides: false,
            }
        }
    });

    var eventsSlider = new Swiper('.events-list', {
        spaceBetween: 10,
        slidesPerGroup: 1,
        simulateTouch: false,
        slidesPerView: 1,
        centeredSlides: true,
        pagination: {
            el: '.events-list .pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            769: {
                slidesPerView: 2,
                allowTouchMove: true,
            },
            1025: {
                allowTouchMove: false
            }
        }
    });


    /*** Forms ***/

    var password = null,
        passwordConfirm = null;

    $(".password").on('input', function() {
        password = $(this).val();
    });

    $(".password-confirm").on('input', function() {
        passwordConfirm = $(this).val();
    });

    function passwordCheck() {

        if (password && passwordConfirm && password == passwordConfirm) {
            $('.password').removeClass('error');
            $('.password-confirm').removeClass('error');
            $('form').submit();

            return true;
        } else {
            $('.password').addClass('error');
            $('.password-confirm').addClass('error');

            return false;
        }
    }

    $("form .submit").on('click', function() {

        if($('.confidentiality').length > 0) {

            if(!$('.confidentiality')[0].checked) {
                alert('Подтвердите политику конфиденциальности')
            } else {
                passwordCheck();
            }
        } else {
            passwordCheck();
        }
    });
});
