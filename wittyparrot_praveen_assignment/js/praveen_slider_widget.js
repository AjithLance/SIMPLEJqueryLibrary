/* 
	A very basic carousel made my Praveen P, UI Developer for interview @ wittyparrot 
	Setup: view source of index.html for usage
	@param: imagelist: an array of imagelink URLs
	@param: speed: show/hide animation speed in milliseconds
*/
customsliderwidget = function(imageslist, speed ) {
				
	var imglen = imageslist.length;				
	var j;
	var cnt = 0;
	
	$(".customslider").html("<div class=\"imageslist\"></div><div class=\"choosers\"><div class=\"choosenlist\"></div></div>");				
	$(".customslider").find(".choosenlist").width(parseInt(30*imglen,10));
	
	for (j = 0; j < imglen ; j++) {
		$(".customslider").find(".imageslist").append("<img class=\"choosenimages\" src=\""+imageslist[j]+"\" id=\"choose"+j+"\">");
		$(".customslider").find(".choosers").find(".choosenlist").append("<div id=\"chooseptr"+j+"\" onClick=\"ptrClickHandle("+j+");\" class=\"normal\"></div>");
	}						
	
	carouselsubwidget = function(){
		$(".customslider").find(".imageslist").find(".choosenimages").hide().animate({opacity:0.5},300);
		$(".customslider").find("#choose"+cnt).show().animate({opacity:1},300);
		$(".customslider").find(".choosers").find(".normal").removeClass("highlight");
		$(".customslider").find("#chooseptr"+cnt).addClass("highlight");									
		if (cnt < parseInt(imglen-1,10)) {											
			cnt++;						
		} else {
			cnt = 0;
		}
	}				
	var runcarousel = setInterval(function(){										
		carouselsubwidget();
	}, speed);	
	
	$(".customslider").mouseover(function(){
		/* pause carousel animation on mouse hover */
		clearInterval(runcarousel);
	}).mouseout(function(){
		/* resume carousel animation on mouse out */
		runcarousel = setInterval(function(){										
			carouselsubwidget();
		}, speed);	
	});				
	
	ptrClickHandle = function(id){
		/* this function handles click on the buttons */
		cnt = id;/* set global variable cnt through which the desired image selection effect is established */
		carouselsubwidget();
		clearInterval(runcarousel);
	}
}