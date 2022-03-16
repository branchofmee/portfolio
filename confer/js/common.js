$(function () {
	$("#headermenu2").click(function () {
		$("#headermenu3").show();
	});
	$("#xicon").click(function () {
		$("#headermenu3").hide();
	});
});


$(function () {
	$('#headermenu3 li').mouseover(function(){$(this).children('a').css("color", "#df42b1");}
    );
});
$(function () {
	$('#headermenu3 li').mouseout(function(){$(this).children('a').css("color", "#818181");}
    );
});
$(function () {
	$('#headermenu3 li:last-of-type').mouseout(function(){$(this).children('a').css("color", "#fff");}
    );
});