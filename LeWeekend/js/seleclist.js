$(function(){
	$.ajax({
		url: "./json/seleclist.json",
		dataType: "json",
		success : function(data){
			if(data.length>0){
				for(let i in data){
					let selectitle = data[i].title;
					let selecsubtitle = data[i].subtitle;
					let selecdemonstration = data[i].demonstration;
					let selecsrc = data[i].src;
					let selectag = data[i].tag;
					let selecbutton1 = data[i].button1;
					let selecbutton2 = data[i].button2;
					let selectext = data[i].text;

					$(".selecproduct").eq(i).append("<a href='#'>"+"<img src='img/"+data[i].src+"'/>"+"</a>"); 
					$(".selecproduct").eq(i).append("<div class='seleicon'><h5>"+data[i].text+"</h5></div>"); 
					$(".selecproduct").eq(i).append("<p class='sele1'>"+data[i].title+"</p>");
					$(".selecproduct").eq(i).append("<p class='sele2'>"+data[i].subtitle+"</p>");
					$(".selecproduct").eq(i).append("<p class='sele3'>"+data[i].demonstration+"</p>");
					$(".selecproduct").eq(i).append("<p class='sele4'>"+data[i].tag+"</p>");
					$(".selecproduct").eq(i).append("<input type='button' value='브랜드 더보기' class='selebutton1'>"); 
					$(".selecproduct").eq(i).append("<input type='button' value='글 자세히보기' class='selebutton2'>");
				}
			}
		}
	});
});