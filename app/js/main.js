$(document).ready(function() {
    var cabinetMenu = $(".cabinet-menu-wrap");
    var modalMenuWrap = $(".modal-menu-wrap");
    var searchForm = $(".search-form"),
        searchFormInput = $(".search-form input[type='text']"),
        searchFormClear = $(".search-form .remove");

    $(document).on('click', function(e) {
        if( $(e.target).closest('.cabinet-menu-btn').length ) {
            cabinetMenu.toggleClass('active');
            modalMenuWrap.removeClass('open');

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
    });

    $(searchFormClear).on('click', function(e) {
        searchFormInput.val('');
    });
    

    /*** Tabs ***/

    $('.tabs-head--item').on("click", function() {
        var id = $(this).attr('data-tab'),
            content = $('.tabs-body--item[data-tab="'+ id +'"]');

        $('.tabs-head--item.active').removeClass('active');
        $(this).addClass('active');

        $('.tabs-body--item.active').removeClass('active');
        content.addClass('active');

        setTimeout(function () {

        }, 1000);

        $('.product-slider').slick('unslick').slick(productSliderOption);
    });


    /*** Sliders ***/

    const swiper = new Swiper('.slider-list', {
        slidesPerView: 4,
    });
});
