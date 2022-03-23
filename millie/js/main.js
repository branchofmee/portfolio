$(document).ready(function(){
    let btnCheck = $('#section6-1 span').on('click', function() {
        let sec6ClickNum = $(this).index();
        let sec6Product = $('#section6-2').children('div').index();
        let sec6 = $('#section6-1 span').length
        for(i=0; i<sec6; i++){
            if(sec6ClickNum == i){
                $('#section6-2').children().eq(i).show();
            }else{
                $('#section6-2').children().eq(i).hide();
            };
        };
    });
});     //section6

$(document).ready(function(){
    let btnCheck2 = $('#section9-1 div').on('click', function() {
        let sec9ClickNum = $(this).index();
        let sec9 = $('#section9-1 div').length
        for(i=0; i<sec9; i++){
            if(sec9ClickNum == i){
                $('#section9-0').children().eq(i+1).show();
            }else{
                $('#section9-0').children().eq(i+1).hide();
            };
        };
    });
});     //section9

$(document).ready(function(){
    let btnCheck3 = $('#sec9-1-1 div').on('click', function() {
        let sec9Index = $(this).index();
        let sec9_1 = $('#sec9-1-1 div').length
        for(i=0; i<sec9_1; i++){
            if(sec9Index == i){
                $('#sec9-1-2').children().eq(i).show();
            }else{
                $('#sec9-1-2').children().eq(i).hide();
            };
        };
    });
}); 

$(document).ready(function(){
    let btnCheck4 = $('#sec9-2-1 div').on('click', function() {
        let sec9Index = $(this).index();
        let sec9_1 = $('#sec9-2-1 div').length
        for(i=0; i<sec9_1; i++){
            if(sec9Index == i){
                $('#sec9-2-2').children().eq(i).show();
            }else{
                $('#sec9-2-2').children().eq(i).hide();
            };
        };
    });
});

$(document).ready(function(){
    let btnCheck5 = $('#sec9-3-1 div').on('click', function() {
        let sec9Index = $(this).index();
        let sec9_1 = $('#sec9-3-1 div').length
        for(i=0; i<sec9_1; i++){
            if(sec9Index == i){
                $('#sec9-3-2').children().eq(i).show();
            }else{
                $('#sec9-3-2').children().eq(i).hide();
            };
        };
    });
});
//여기까지 클릭하면 display:none을 전환


$(document).ready(function(){
    $('#section6-1 span').on('click', function() {
        let Btn = $(this);
        let BtnOther = $(this).siblings();
        Btn.css({'color':'#fff', 'background-color':'#242424'});
        BtnOther.css({'color':'#242424','background-color':'#fff'});
    });
});

$(document).ready(function(){
    $('.section9-inner3-1 div').on('click', function() {
        let Btn = $(this);
        let BtnOther = $(this).siblings();
        Btn.css({'color':'#fff', 'background-color':'#242424'});
        BtnOther.css({'color':'#242424','background-color':'#fff'});
    });
});

$(document).ready(function(){
    $('#section9-1 div').on('click', function() {
        let Btn = $(this);
        let BtnOther = $(this).siblings();
        Btn.css({'color':'#000', 'background-color':'#fff'});
        BtnOther.css({'color':'#242424','background-color':'#f7f7f7'});
    });
});
//여기까지 클릭하면 해당 버튼 css전환


$(document).ready(function(){
    $('.section11arrow').click( function() {
        $(this).parents().next('.section11-1-2').stop().slideToggle();
    });
});     

$(document).ready(function(){
    $('#footer2-0').click( function() {
        $('#footer2-1').stop().slideToggle();
    });
});
//여기까지 슬라이드 토글

$(document).ready(function(){
    $(window).scroll(function(){
        let here = $("#section1").offset().top;
        let height = $(document).scrollTop();
        if(here < height){
                $('header').css({'opacity':'0.9', 'background-color':'#fff'});
                $('#header3 button').css({'color':'#fff', 'background-color':'#000'});
                $('#header2').css({'color':'#000'});
            }else{
                $('header').css({'opacity':'1', 'background-color':'#a7a39a'});
                $('#header3 button').css({'color':'#000', 'background-color':'#ffeb60'});
                $('#header2').css({'color':'#fff'});    
            };
    });
});     //for header


$(document).ready(function(){
    $(window).scroll(function(i){
        $('.showthis').each( function(i){
        let bottom_of_element = $(this).offset().top + $(this).outerHeight();   
        let bottom_of_window = $(window).scrollTop() + $(window).height();
        if(bottom_of_window > bottom_of_element ){
            $(this).animate({'opacity':'1'}, 2);
            $(this).css({'transform':'translate(0px, 0px)'}, 5);
        }
    });     
    });
});     //특정위치 스크롤 이동시 보이게 하기







$(function () {
    function prev() {
        $('#li1 li:last').prependTo('#li1');    //$(A).prependTo(B) : A 가 B 사이의 처음에 추가 된다.
        $('#li1').css('margin-left', -145);    //$('.slide').css({marginLeft:-1000}); 
        $('#li1').stop().animate({ marginLeft: 0 }, 1000);
    }

    function next() {
        $('#li1').stop().animate({ marginLeft: -145 }, function () {
            $('#li1 li:first').appendTo('#li1');    //$(A).appendTo(B) : A 가 B 사이의 마지막에 추가 된다.
            $('#li1').css({ marginLeft: 0 });
        });
    }

    $('#btnleft1').click(function () {
        prev();
    });
    $('#btnright1').click(function () {
        next();
    });
});


$(function () {
    function prev() {
        $('#li2 li:last').prependTo('#li2');    //$(A).prependTo(B) : A 가 B 사이의 처음에 추가 된다.
        $('#li2').css('margin-left', -145);    //$('.slide').css({marginLeft:-1000}); 
        $('#li2').stop().animate({ marginLeft: 0 }, 1000);
    }

    function next() {
        $('#li2').stop().animate({ marginLeft: -145 }, function () {
            $('#li2 li:first').appendTo('#li2');    //$(A).appendTo(B) : A 가 B 사이의 마지막에 추가 된다.
            $('#li2').css({ marginLeft: 0 });
        });
    }

    $('#btnleft2').click(function () {
        prev();
    });
    $('#btnright2').click(function () {
        next();
    });
});


$(function () {
    function prev() {
        $('#li3 li:last').prependTo('#li3');    //$(A).prependTo(B) : A 가 B 사이의 처음에 추가 된다.
        $('#li3').css('margin-left', -145);    //$('.slide').css({marginLeft:-1000}); 
        $('#li3').stop().animate({ marginLeft: 0 }, 1000);
    }

    function next() {
        $('#li3').stop().animate({ marginLeft: -145 }, function () {
            $('#li3 li:first').appendTo('#li3');    //$(A).appendTo(B) : A 가 B 사이의 마지막에 추가 된다.
            $('#li3').css({ marginLeft: 0 });
        });
    }

    $('#btnleft3').click(function () {
        prev();
    });
    $('#btnright3').click(function () {
        next();
    });
});


$(function () {
    function prev() {
        $('#li4 li:last').prependTo('#li4');    //$(A).prependTo(B) : A 가 B 사이의 처음에 추가 된다.
        $('#li4').css('margin-left', -145);    //$('.slide').css({marginLeft:-1000}); 
        $('#li4').stop().animate({ marginLeft: 0 }, 1000);
    }

    function next() {
        $('#li4').stop().animate({ marginLeft: -145 }, function () {
            $('#li4 li:first').appendTo('#li4');    //$(A).appendTo(B) : A 가 B 사이의 마지막에 추가 된다.
            $('#li4').css({ marginLeft: 0 });
        });
    }

    $('#btnleft4').click(function () {
        prev();
    });
    $('#btnright4').click(function () {
        next();
    });
});
//section4 도서 썸네일 모바일 사이즈일 때 클릭해서 슬라이드하기