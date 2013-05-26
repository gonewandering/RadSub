
 $(document).ready(function() {
 	var imp = impress();
 	
 	imp.init();
    $(document).on('impress:stepenter', function(e) {
        var currentSlide = $(e.target).attr('id');

        if (currentSlide === 'home') {
            $("#home-tab").fadeOut();
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

	$(".popup-menu").popover({
		animation: true,
		html: true,
		content: getPopover(),
		title: "Lindsay.gs Posts"
	});

	function getPopover() { 
		return $(".menu-popover-content").html();
	}
});