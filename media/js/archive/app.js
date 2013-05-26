$(document).ready(function () {
	$(".popup-menu").popover({
		animation: true,
		html: true,
		content: getPopover(),
		title: "Lindsay.gs Posts"
	})
});

function getPopover() { 
	return (".menu-popover-content").html();
}