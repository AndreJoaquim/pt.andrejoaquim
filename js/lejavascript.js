$(document).ready(function () {
	
	var activeLink = "home";
	
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
	
	$("#home-link").click(function() {
		
		if(activeLink == "home")
			return 0;
		else
			activeLink = "home";
        
        if( $(document).scrollLeft() != $("#home").offset().left ){
            $('html, body').animate({
                scrollLeft: $("#home").offset().left
            }, 1500);
        }
        
        $("#menu-list li").each(function (){
            $(this).removeClass("active");
        });
        
        $("#home-link").addClass("active");
        
    });
	
    $("#about-me-link").click(function() {
		
		if(activeLink == "about-me")
			return 0;
		else
			activeLink = "about-me";
        
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
		
		if(activeLink == "cv")
			return 0;
		else
			activeLink = "cv";
        
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
		
		if(activeLink == "projects")
			return 0;
		else
			activeLink = "projects";
        
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
		
		if(activeLink == "contacts")
			return 0;
		else
			activeLink = "contacts";
        
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