$(document).ready(function() {
    var cabinetMenu = $(".cabinet-menu-wrap");
    var modalMenuWrap = $(".modal-menu-wrap");
    var searchForm = $(".search-form"),
        searchFormInput = $(".search-form input[type='text']"),
        searchFormClear = $(".search-form .remove");

    $(".left-panel .wrap").mCustomScrollbar();

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
            // modalMenuWrap.toggleClass('open');            
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

    $('.statistic-table .sort').on("click", function() {
        $(this).toggleClass('active');
    });

    $('.projections-list--item .delete').on("click", function() {
        $(this).parents('.projections-list--item').remove();
    });

    
    /*** Copy link ***/

    $('.partners-link-wrap .link').on("click", function() {
        var copyText = document.getElementById("partnersLink");
        window.navigator.clipboard.writeText(copyText.value);
        alert('Ссылка скопирована в буфер!');
    });


    /***/

    // $.datepicker.regional['ru'] = {
    //     closeText: 'Закрыть',
    //     prevText: 'Предыдущий',
    //     nextText: 'Следующий',
    //     currentText: 'Сегодня',
    //     monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    //     monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
    //     dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
    //     dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
    //     dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    //     weekHeader: 'Не',
    //     dateFormat: 'YYYY-MM-DD',
    //     firstDay: 1,
    //     isRTL: false,
    //     showMonthAfterYear: false,
    //     yearSuffix: ''
    // };
    // $.datepicker.setDefaults($.datepicker.regional['ru']);

    var dateFormat = "YYYY-MM-DD",
        from = $("#from").datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1,
            closeText: 'Закрыть',
            prevText: 'Предыдущий',
            nextText: 'Следующий',
            currentText: 'Сегодня',
            monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
            monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
            dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
            dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
            dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
            weekHeader: 'Не',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        }).on( "change", function() {
            to.datepicker( "option", "minDate", getDate( this ) );
        }),
        to = $( "#to" ).datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1,
            closeText: 'Закрыть',
            prevText: 'Предыдущий',
            nextText: 'Следующий',
            currentText: 'Сегодня',
            monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
            monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
            dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
            dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
            dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
            weekHeader: 'Не',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        }).on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }

    $(".datepicker").datepicker();
    

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

    new Swiper('.slider-list', {
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
                spaceBetween: 20,
                centeredSlides: false,
            },
            1601: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 20,
              centeredSlides: false,
            }
        }
    });

    new Swiper('.events-list', {
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

    new Swiper('.top-rates', {
        spaceBetween: 10,
        slidesPerGroup: 1,
        simulateTouch: false,
        slidesPerView: 1,
        centeredSlides: true,
        allowTouchMove: true,
        pagination: {
            el: '.top-rates .pagination',
            type: 'bullets',
            clickable: true,
        }
    });

    new Swiper('.forecasters-slider', {
        spaceBetween: 10,
        slidesPerGroup: 1,
        simulateTouch: false,
        slidesPerView: 1,
        centeredSlides: true,
        allowTouchMove: true,
        pagination: {
            el: '.forecasters-slider .pagination',
            type: 'bullets',
            clickable: true,
        }
    });

    new Swiper('.statistic-table-slider', {
        spaceBetween: 10,
        slidesPerGroup: 1,
        simulateTouch: false,
        centeredSlides: true,
        pagination: {
            el: '.statistic-table-slider .pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            561: {
                slidesPerView: 2,
                centeredSlides: false,
            },
            769: {
                slidesPerView: 3,
                centeredSlides: false,
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


    /*** Modal ***/

    var idModal = null;

    $('.modal-btn').on("click", function() {
        idModal = $(this).attr('href');
        idModal = idModal.slice(1, idModal.length);

        $('.modal-wrap').each(function () {

            if(idModal === $(this).attr('id')) {
                $(this).addClass('open');

                $('body').css('padding-right', (window.innerWidth - document.documentElement.clientWidth));
                $('body').addClass('noscroll');
            }
        });
    });

    $('.modal-wrap .overflow').css('left', -(window.innerWidth - document.documentElement.clientWidth));

    $('.modal-wrap .overflow, .modal-wrap .close').on("click", function() {
        $('body').removeClass('noscroll').css('padding-right', 0);
        $('.modal-wrap').removeClass('open');
        idModal = null;
    });

    $('.menu-btn').on("click", function() {
        $('.modal-menu-wrap').toggleClass('open');
        $('.modal-menu-overflow').toggleClass('active');
    });

    $('.modal-menu-wrap .close, .modal-menu-overflow').on("click", function() {
        $('.modal-menu-wrap').removeClass('open');
        $('.modal-menu-overflow').removeClass('active');
    });


    /*** Range ***/

    $(".js-range-slider").ionRangeSlider({
        grid: true,
        values: [1 + '%', 2 + '%', 3 + '%', 4 + '%', 5 + '%', 6 + '%', 7 + '%', 8 + '%', 9 + '%', 10 + '%'],
        onStart: function(data) {
            $(".bet-amount-value").text(data.from + 1 + '%');
        },
        onChange: function(data) {
            $(".bet-amount-value").text(data.from + 1 + '%');
        }
    });


    /*** Custom select ***/

    $('.custom-select-wrap').find('select').val('');
    $('.custom-select').each(function () {
        var classes = $(this).attr('class');
        var template = '<div class="' + classes + '">';
        template += '<span class="custom-select-trigger">' + $(this).attr('placeholder') + '</span>';
        
        template += '<div class="custom-options">';
        $(this).find('option')
            .each(function () {
                template +=
                    '<span class="custom-option ' +
                    $(this).attr('class') +
                    '" data-value="' +
                    $(this).attr('value') +
                    '">' +
                    $(this).html() +
                    '</span>'
            });
        template += '</div></div>';

        if($(this).find('option').length > 18) {
            $(this).parent().addClass('multiple-columns');
        }

        $(this).wrap('<div class="custom-select-wrapper"></div>');
        $(this).hide();
        $(this).after(template)
    });
    $('.custom-option:first-of-type').hover(
        function () {
            $(this)
                .parents('.custom-options')
                .addClass('option-hover')
        },
        function () {
            $(this).parents('.custom-options').removeClass('option-hover')
        }
    );
    $('.custom-select-trigger').on('click', function () {
        $('.custom-select').removeClass('opened');

        $('html').on('click', function () {
            $('.custom-select').removeClass('opened');
        });

        $(this).parents('.custom-select').toggleClass('opened');
        event.stopPropagation();
    });

    $('.custom-option').on('click', function () {
        $(this)
            .parents('.custom-select-wrapper')
            .find('select')
            .val($(this).data('value'));
        $(this)
            .parents('.custom-options')
            .find('.custom-option')
            .removeClass('selection');
        $(this).addClass('selection');
        $(this)
            .parents('.custom-select')
            .removeClass('opened');
        $(this)
            .parents('.custom-select')
            .find('.custom-select-trigger')
            .text($(this).text())
            .addClass('added')
    });


    /*** Step form ***/

    var currentTab = 0;
    showTab(currentTab);

    function showTab(n) {
        var x = document.getElementsByClassName("event-create-tab");

        if (currentTab !== x.length) {
            x[n].classList.add('active');
        }

        if (n == 0) {
            document.getElementById("eventCreateForm").classList.add('first-tab');
        } else {
            document.getElementById("eventCreateForm").classList.remove('first-tab');
        }

        if (n == x.length - 1) {
            document.getElementById("eventCreateForm").classList.add('last-tab');
        } else {
            document.getElementById("eventCreateForm").classList.remove('last-tab');
        }

        $('.event-create .current').text(n + 1);
        $('.event-create .total').text(x.length);
    }

    function nextPrev(n) {
        var x = document.getElementsByClassName("event-create-tab");

        if (x[currentTab]) {
            x[currentTab].classList.remove('active');
        }

        if(n == 1) {
            currentTab = currentTab + Number(n);
        } else {
            currentTab = currentTab -1;
        }
        
        if (currentTab >= x.length) {
            return false;
        }

        showTab(currentTab);
    }

    $('.next-event-create-tab input').on('click', function() {
        var template,
            text = $(this).val(),
            selectedItems = document.getElementsByClassName("list-selected--item"),
            x = document.getElementsByClassName("event-create-tab");

        if(currentTab + 1 == selectedItems.length) {

            $('.event-create .list-selected--item').each(function () {
                template = '<span class="list-selected--item">' + text + '</span>';
            });
        }

        if(selectedItems[currentTab + 1]) {
            selectedItems[currentTab + 1].innerHTML = text;
        }

        $('.event-create .list-selected').append(template);

        if (currentTab !== x.length - 1) {
            nextPrev(1);
        }        
    })

    $('.prev-event-create-tab').on('click', function() {
        nextPrev(-1);
    })
});


/*** Rank ***/

var el = document.getElementById('rank');
var options = {
    percent:  el.getAttribute('data-percent') || 25,
    size: el.getAttribute('data-size') || 220,
    lineWidth: el.getAttribute('data-line') || 15,
    rotate: el.getAttribute('data-rotate') || 0
}

var canvas = document.createElement('canvas');
    
if (typeof(G_vmlCanvasManager) !== 'undefined') {
    G_vmlCanvasManager.initElement(canvas);
}

var context = canvas.getContext('2d');
canvas.width = canvas.height = options.size;

el.appendChild(canvas);

context.translate(options.size / 2, options.size / 2);
context.rotate((-1 / 2 + options.rotate / 180) * Math.PI);

var radius = (options.size - options.lineWidth) / 2;

var drawCircle = function(color, lineWidth, percent) {
    percent = Math.min(Math.max(0, percent || 1), 1);
    context.beginPath();
    context.arc(0, 0, radius, 0, Math.PI * percent, false);
    context.strokeStyle = color;
    context.lineCap = 'round';
    context.lineWidth = lineWidth;
    context.stroke();
};

drawCircle('#F3F4F7', options.lineWidth, 100 / 100);
drawCircle('#CE091D', options.lineWidth, options.percent / 100);


/*** Rank in cabinet ***/

var rank = document.querySelector('.rank-big');
var options = {
    percent:  rank.getAttribute('data-percent') || 25,
    size: rank.getAttribute('data-size') || 220,
    lineWidth: rank.getAttribute('data-line') || 15,
    rotate: rank.getAttribute('data-rotate') || 0
}

var canvas = document.createElement('canvas');
    
if (typeof(G_vmlCanvasManager) !== 'undefined') {
    G_vmlCanvasManager.initElement(canvas);
}

var context = canvas.getContext('2d');
canvas.width = canvas.height = options.size;

rank.appendChild(canvas);

context.translate(options.size / 2, options.size / 2);
context.rotate((-1 / 2 + options.rotate / 180) * Math.PI);

var radius = (options.size - options.lineWidth) / 2;

var drawCircle = function(color, lineWidth, percent) {
    percent = Math.min(Math.max(0, percent || 1), 1);
    context.beginPath();
    context.arc(0, 0, radius, 0, Math.PI * percent, false);
    context.strokeStyle = color;
    context.lineCap = 'round';
    context.lineWidth = lineWidth;
    context.stroke();
};

drawCircle('#F3F4F7', options.lineWidth, 100 / 100);
drawCircle('#CE091D', options.lineWidth, options.percent / 100);