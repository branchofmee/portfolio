window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

let $html = $("html");
let page = 1;
let lastPage = $("#section1").length;
$html.animate({scrollTop:0},500);

$(window).on("wheel", function(e){

	if($html.is(":animated")) return;

	if(e.originalEvent.deltaY > 0){
		if(page== lastPage) return;
		page++;
	}else if(e.originalEvent.deltaY < 0){
		if(page == 1) return;

		page--;
	}
	var posTop = (page-1) * $(window).height();

	$html.animate({scrollTop : posTop}, {duration:500, easing:"linear"});
});
//화면 한 단씩 스크롤


$(function () {
  $('#section2 .rightbox > a > img').mouseenter(function(){
    $(this).stop().animate({
			marginTop: "-1750px"
		}, 6000);
	}).mouseleave(function () {
		$(this).stop().animate({
			margin: '0'
		}, 1000);
	});
});
//밀리의 서재 fullimg

$(function () {
  $('#section3 .rightbox > a > img').mouseenter(function(){
    $(this).stop().animate({
			marginTop: "-1000px"
		}, 4000);
	}).mouseleave(function () {
		$(this).stop().animate({
			margin: '0'
		}, 1000);
	});
});
//confer fullimg

$(function () {
  $('#section4 .rightbox > a > img').mouseenter(function(){
    $(this).stop().animate({
			marginTop: "-1580px"
		}, 4000);
	}).mouseleave(function () {
		$(this).stop().animate({
			margin: '0'
		}, 1000);
	});
});
//siamo fullimg

$(function () {
  $('#section5 .rightbox > a > img').mouseenter(function(){
    $(this).stop().animate({
			marginTop: "-1500px"
		}, 4000);
	}).mouseleave(function () {
		$(this).stop().animate({
			margin: '0'
		}, 1000);
	});
});
//leweekend fullimg



$(function () {
  $('#section2 .phonbox ul').mouseenter(function(){
    $(this).stop().animate({
			marginTop: "-1470px"
		}, 6000);
	}).mouseleave(function () {
		$(this).stop().animate({
			margin: '0'
		}, 2000);
	});
});
//millie mobile img

$(function () {
  $('#section3 .phonbox ul').mouseenter(function(){
    $(this).stop().animate({
			marginTop: "-1800px"
		}, 7000);
	}).mouseleave(function () {
		$(this).stop().animate({
			margin: '0'
		}, 2000);
	});
});
//confer mobile img

$(function () {
  $('#section4 .phonbox ul').mouseenter(function(){
    $(this).stop().animate({
			marginTop: "-1520px"
		}, 6000);
	}).mouseleave(function () {
		$(this).stop().animate({
			margin: '0'
		}, 2000);
	});
});
//siamo mobile img