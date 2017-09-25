$(document).ready(function(){
  	$('.navbar-brand').fadeOut("slow");
 $('.navbar-brand').fadeIn("slow");
 var link =$('.nav a');
  link.click(function(e){
   e.preventDefault();
    $('body,html').animate({
     scrollTop: $(this.hash).offset().top-30
    },1200)
  });
  $(window).scroll(function(){
    var location =$(this).scrollTop();
    link.each(function(){
      var sectionpose=$(this.hash).offset().top-100;
      if (sectionpose<= location)
        {
          $(this).parent().addClass('active');
 $(this).parent().siblings().removeClass('active');
 $(this).parent().fadeIn("slow");
  
        }
      })
    
    
  })
$(window).scroll(function(){
  p=$('#C').offset().top-100;
		if ($(this).scrollTop() >= p) {
      
			$('.fa-facebook').fadeIn(2000);
      $('.fa-twitter').fadeIn(2500);
      $('.fa-google').fadeIn(3000);
      $('.fa-linkedin').fadeIn(3500);
		} else {
			$('.fa-facebook').fadeOut(2000);
      $('.fa-twitter').fadeOut(2500);
      $('.fa-google').fadeOut(3000);
      $('.fa-linkedin').fadeOut(3500);
		}
  
	});
	
	

});
