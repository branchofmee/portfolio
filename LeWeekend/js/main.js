$(function () {
    function prev() {
        $('.slider li:last').prependTo('.slider');    //$(A).prependTo(B) : A 가 B 사이의 처음에 추가 된다.
        $('.slide').css('margin-left', -1200);    //$('.slide').css({marginLeft:-1000}); 
        $('.slide').stop().animate({ marginLeft: 0 }, 1000);
    }

    function next() {
        $('.slider').stop().animate({ marginLeft: -1200 }, function () {
            $('.slider li:first').appendTo('.slider');    //$(A).appendTo(B) : A 가 B 사이의 마지막에 추가 된다.
            $('.slider').css({ marginLeft: 0 });
        });
    }

    function slide() {
        $('.slider').stop().animate({ marginLeft: -1200 }, function () {
            $('.slider li:first').appendTo('.slider');
            $('.slider').css({ marginLeft: 0 });
        });
    }


    setInterval(slide, 3000);
    $('.prev').click(function () {
        prev();
    });
    $('.next').click(function () {
        next();
    });
});



$(document).ready(function () {
    $(window).scroll(function () {
        let here = $("#sliderwrap").offset().top;
        let height = $(document).scrollTop();
        if (here < height) {
            $('#headertop').css({ 'display': 'block', 'position': 'sticky', 'top': '0', 'left': '0', 'transition': 'top 0.2s ease-in-out', 'z-index': '999' })
        } else {
            $('#headertop').css({ 'display': 'none' })
        }
    });
});


$(function () {
    $('#menutoggle').hide();    //문서가 불러와졌을때 일단 hide상태

    $('#nav000, #menu101, #menulight101').mouseover(function () { $('#menutoggle').show(); }).mouseleave(function () {
        $('#menutoggle').hide();
    });
});

$(function () {
    $('#menutoggle').mouseover(function () { $(this).show(); }).mouseleave(function () {
        $(this).hide();
    });
});
