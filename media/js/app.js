$(document).ready(function() {
 	var imp = impress();
 	
 	imp.init();
    $(document).on('impress:stepenter', function(e) {
        var currentSlide = $(e.target).attr('id');
        $("*").removeClass("active-slide");
        
        $("."+currentSlide).addClass("active-slide");
        
        if (currentSlide === 'home') {
            $("#home-tab").fadeOut();
            $(".popup-content").fadeOut();
        } else {
            $("#home-tab").fadeIn();
        }
    });
    
    $(".next-slide").on("click", function () { 
	    imp.next();
    });
    
    $(".prev-slide").on("click", function () { 
	   imp.prev(); 
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
		item.css({"top": pos.top - item.height(), "left": pos.left});
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