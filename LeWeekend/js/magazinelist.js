$(function(){
	$.ajax({
		url: "./json/magazinelist.json",
		dataType: "json",
		success : function(data){
			if(data.length>0){
				for(let i in data){
					let magazinetitle = data[i].magazinetitle;
					let magazinedemonstration = data[i].magazinedemonstration;
					let magazinesrc = data[i].src;
					let magazineicon1 = data[i].magazineicon1;
					let magazineicon2 = data[i].magazineicon2;
					let magazinetext1 = data[i].magazinetext1;
					let magazinetext2 = data[i].magazinetext2;
					let magazineupdate = data[i].magazineupdate;

					$(".magaproduct").eq(i).append("<a href='#'>"+"<img src='img/"+data[i].magazinesrc+"'/>"+"</a>"); 
					$(".magaproduct").eq(i).append("<div class='magaheart'>"+"<img src='img/"+data[i].magazineicon1+"'/>"+"</div>"); 
					$(".magaproduct").eq(i).append("<span class='magabrand'>"+data[i].text1+"</span>");  
					$(".magaproduct").eq(i).append("<span>"+data[i].magazineupdate+"</span>"); 
					$(".magaproduct").eq(i).append('<p><a href="#">'+data[i].magazinetitle+"</a></p>");  
					$(".magaproduct").eq(i).append('<p><a href="#">'+data[i].magazinesubtitle+"</a></p>");  

					$(".magaproduct").eq(i).append('<span><a href="#">'+data[i].magazinedemonstration+"</a></p>");  

					$(".magaproduct").eq(i).append("<span class='magasign'>"+data[i].magazinetext2+"</span>"); 
					$(".magaproduct").eq(i).append("<div class='magalike'>"+"<img src='img/"+data[i].magazineicon2+"'/>"+"</div>"); 
				}
			}
		}
	});
});