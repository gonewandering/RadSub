$(document).ready(function() {
 	var imp = impress();
 	
 	imp.init();
    $(document).on('impress:stepenter', function(e) {
        var currentSlide = $(e.target).attr('id');
        
        $(".twitter-button").attr("href", "http://twitter.com/share?text="+$("#"+currentSlide).find("h1").text()+"&url="+window.location);
        $(".like-button").attr("href", "http://www.facebook.com/sharer.php?u="+window.location);
        $("*").removeClass("active-slide");
        
        $("."+currentSlide).addClass("active-slide");
        
        if (currentSlide === 'home') {
            $("#home-tab").fadeOut();
        } else {
            $("#home-tab").fadeIn();
        }
    });
    
    $(document).on('impress:stepleave', function(e) {
        $(".popup-content").fadeOut();
        $(".popup-content").addClass("hider");    
    });    
    
    $(".next-slide").on("click", function () { 
	    imp.next();
    });
    
    $(".prev-slide").on("click", function () { 
	   imp.prev(); 
    });
    
    $(".like-button").on("click", function () { 
	   	window.location = "http://twitter.com/share?text=An%20Awesome%20Link&url=" 
    });
	
	$(".popup-menu").on("click", function () {
		pop = $(".popup-content");
		if (pop.hasClass("hider")) { 
			pop.removeClass("hider");
			popupSet(pop);
			pop.fadeIn();
		} else { 
			pop.addClass("hider");
			pop.fadeOut();
		}
		return false;
	});

	function popupSet(item) { 
		var pos = $("#home-tab").position();
		item.css({"top": pos.top - item.height()-30, "left": pos.left});
		return true;
	}
	
	function getPopover(currentSlide) { 
		var body = $("*");
		body.find("*").removeClass("active-slide");
		body.find("."+currentSlide).addClass("active-slide");
		var content = $(".menu-popover-content");
		console.log(content.html());
		return content.html();
	}
});