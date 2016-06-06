$(document).ready(function () {
	
	function on_mouseover(social_media){
		$("#" + social_media +"-icon").on('mouseover', function() {
			$(this).attr('src', 'images/'+ social_media + '_hover.png');
	    });
	}
	
	function on_mouseout(social_media){
		$("#" + social_media +"-icon").on('mouseout', function() {
			$(this).attr('src', 'images/'+ social_media + '_normal.png');
	    });
	}
	
    on_mouseover("fb");
    on_mouseout ("fb");
	
	on_mouseover("gh");
    on_mouseout ("gh");
	
	on_mouseover("li");
    on_mouseout ("li");
	
    $("#about-me-link").click(function() {
        
        if( $(document).scrollLeft() != $("#about-me").offset().left ){
            $('html, body').animate({
                scrollLeft: $("#about-me").offset().left
            }, 1500);
        }
        
        $("#menu-list li").each(function (){
            $(this).removeClass("active");
        });
        
        $("#about-me-link").addClass("active");
        
    });
    
    $("#curriculum-link").click(function() {
        
        if( $(document).scrollLeft() != $("#curriculum").offset().left ){
            $('html, body').animate({
                scrollLeft: $("#curriculum").offset().left
            }, 1500);
        }
        
        $("#menu-list li").each(function (){
            $(this).removeClass("active");
        });
        
        $("#curriculum-link").addClass("active");
        
    });
    
    $("#projects-link").click(function() {
        
        if( $(document).scrollLeft() != $("#projects").offset().left ){
            $('html, body').animate({
                scrollLeft: $("#projects").offset().left
            }, 1500);
        }
        
        $("#menu-list li").each(function (){
            $(this).removeClass("active");
        });
        
        $("#projects-link").addClass("active");
        
    });
    
    $("#contacts-link").click(function() {
        
        if( $(document).scrollLeft() != $("#contacts").offset().left ){
            $('html, body').animate({
                scrollLeft: $("#contacts").offset().left
            }, 1500);
        }
        
        $("#menu-list li").each(function (){
            $(this).removeClass("active");
        });
        
        $("#contacts-link").addClass("active");
        
    });
    
});