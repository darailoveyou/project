$( document ).ready(function() {
	$('.menu-burger').click(function() {
		$(this).toggleClass('active');
		$('.sidebar__wrap').toggleClass('active');
	});

	$('#icon').click(function(event) {
		let h = $('.section-2').offset().top;
		let v = h - 80 +'px';
		$('html,body').animate( {scrollTop: v}, 1500);
	});

});

