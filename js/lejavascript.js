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
	
    on_mouseover("fb");		on_mouseout ("fb");
	on_mouseover("gh");		on_mouseout ("gh");
	on_mouseover("li");		on_mouseout ("li");
	
	$("#home-link, #about-me-link, #curriculum-link, #projects-link, #contacts-link")
	.click(function() {

		var name = $(this).attr("name");
		var page = name.split("-");
		
		if(activeLink == name)
			return 0;
		else
			activeLink = name;
        
        if( $(document).scrollLeft() != $("#" + page[0]).offset().left ){
            $('html, body').animate({
                scrollLeft: $("#" + page[0]).offset().left
            }, 1500);
        }
        
        $("#menu-list li").each(function (){
            $(this).removeClass("active");
        });
        
        $("#" + name).addClass("active");
        
    });
    
});