$(function() {

	new WOW().init();

	$(document).scroll(function() {
    let $nav = $(".header");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height())
	})
	
	$('.menu__link').on('click', function() {
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top + 'px'
		}, {
			duration: 1000,
			easing: 'swing'
		})
		return false
	})
	
	$('.burger').on('click', function() {
		$('.burger').toggleClass('active');
		$('.menu').toggleClass('active')
		$('body').toggleClass('lock');
	})

	$('.menu__link').on('click', function(e) {
		e.preventDefault();
		$('.menu').removeClass('active');
		$('.burger').removeClass('active');
	})


})