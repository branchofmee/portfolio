$(function(){
	$.ajax({
		url: "./json/productlist.json",
		dataType: "json",
		success : function(data){
			if(data.length>0){
				for(let i in data){
					let title = data[i].title;
					let price = data[i].price;
					let priced = data[i].priced;
					let src = data[i].src;
					let icon = data[i].icon;

					$(".product").eq(i).append("<a href='#'>"+"<img src='img/"+data[i].src+"'/>"+"</a>"); 
					$(".product").eq(i).append("<div class='saleicon'>"+"<img src='img/"+data[i].icon+"'/>"+"</div>"); 
					$(".product").eq(i).append('<p><a href="#">'+data[i].title+"</a></p>");      
					$(".product").eq(i).append("<span class='price'>"+data[i].price+"</span>");                             
					$(".product").eq(i).append("<span class='priced'>"+data[i].priced+"</span>");
				}
			}
		}
	});
});