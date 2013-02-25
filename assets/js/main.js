$(document).ready(function() {
	$(window).scroll(function(){
		
		if ($(window).scrollTop() > 35) {
			 $('.bar').animate({ height: '130px', opacity:0.8 }, 100, function() {
				$('#logo a').css("display","block");
			  });
		} else  {
			$('.bar').animate({ height: '7px' }, 50, function() { 
			 	$('#logo a').css("display","none");
			});
		}

		$("#scrollUp").click(function(){
			 $('html').animate({scrollTop : 0},'slow');
		})


		if($(window).width()>=980) {
			if ($(window).scrollTop() > 35) {
					$("#scrollUp").fadeIn();
			} else  {
				 	$("#scrollUp").fadeOut();
			}
		}




	}); 	

	
});