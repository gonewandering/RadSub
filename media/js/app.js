$(document).ready(function () {
	var win = $(document).height()+1;
	$(window).scroll(function () { 
		var wid = ($(this).scrollTop()/win);
		console.log(col*wid);
		// $(".column").width(wid);
	});
});