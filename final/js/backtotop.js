$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() >= 1){
			$('.backToTop').fadeIn(500); 
		}else { 
			$('.backToTop').fadeOut(500); 
		}
	});

	//scroll the page to the top if user clicks on the back to top button
	$('.backToTop').click(function(){
		$('html,body').animate({ scrollTop: 0 }, 'slow');
	});

	//checks if page was already scrolled down before load
	if($(window).scrollTop() >= 1){
		$('.backToTop').show(); // show the back to top button
	}
});