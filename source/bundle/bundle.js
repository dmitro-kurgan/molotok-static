import '../components/scss/style.scss';

import '../components/js/bootstrap.min.js';

import '../components/js/bootstrap-select.js';

import '../components/js/map.js';

import '../components/js/jquery.truncate.js';

$(document).ready(function() {
	$('.tip').truncate({
	})
});


import 'slick-carousel';

var SlickBanner = $(".slider-banner"),
SlickBannerTop = $(".slider-top"),
SlickVertical = $('.slider-vertical'),
SlickSale = $(".slider-sale"),
SlickRecomended = $(".slick-recomended"),
SlickViewed = $(".slick-viewed"),
SlickBannerFor = $(".slick-for"),
SlickBannerNav = $(".slick-nav"),
SlickBuyIt = $(".slick-buy-it");

SlickBannerTop.slick({
});

SlickBanner.slick({
	infinite: true,
	autoplay: true,
	autoplaySpeed: 2000,
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	dots: true
});

SlickVertical.slick({
	infinite: true,
	autoplay: true,
	autoplaySpeed: 2000,
	slidesToShow: 1,
	slidesToScroll: 1,
	vertical: true,
	verticalSwiping: true,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});

SlickSale.slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	dots: true
});

SlickRecomended.slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});

SlickViewed.slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});

SlickBannerFor.slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	swipe: false,
	asNavFor: '.slick-nav',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: true
			}
		}
	]
});

SlickBannerNav.slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.slick-for',
	dots: false,
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

function changeMobile() {
	if(matchMedia) {
		var screen = window.matchMedia('(max-width: 768px)');
		screen.addListener(changes);
		changes(screen);
	}
	function changes(screen) {
		if(screen.matches) {
			$('#productSliderNav').appendTo('#sliderForBlock');
			
			$('#productSliderFor').hide();

			// $('.wrapper--index .buy-it_box_text').appendTo('.buy-it_box');

			SlickBuyIt.slick();
			$('#all, #latest, #bestsellers, #stocks').removeClass('tab-pane');
			$('#all, #latest, #bestsellers, #stocks').removeClass('fade');
		}
		else {
			$('#productSliderNav').appendTo('#sliderNavBlock');
			
			$('#productSliderFor').show();
			$('.slick-buy-it').attr('class', '')
			// SlickBuyIt.slick('unslick');
			$('#all, #latest, #bestsellers, #stocks').addClass('tab-pane');
			$('#all, #latest, #bestsellers, #stocks').addClass('fade');
		}
	};
};
changeMobile();

function changeTablet() {
	if(matchMedia) {
		var screen = window.matchMedia('(max-width: 992px)');
		screen.addListener(changes);
		changes(screen);
	}
	function changes(screen) {
		if(screen.matches) {

		}	
	};
};
changeTablet();

function changeDesctop() {
	if(matchMedia) {
		var screen = window.matchMedia('(max-width: 1200px)');
		screen.addListener(changes);
		changes(screen);
	}
	function changes(screen) {
		var langUkr = document.getElementById('langUkr');
		var langEng = document.getElementById('langEng');
		var langRus = document.getElementById('langRus');
		if (screen.matches) {
			langUkr.innerHTML = 'UKR';
			// langEng.innerHTML = 'ENG';
			langRus.innerHTML = 'RUS';
			$('.header_top_menu').appendTo('#headerMobTop');		
			$('.header_logo').appendTo('#headerMobLogo');
			$('#headerSearch').appendTo('#headerMobSearch');
			$('#headerCart, #headerCartInner').appendTo('#headerMobCart');
			$('.header_tel').appendTo('#headerMobTel');
			$('.header_main_menu--left, .header_main_menu--right ').appendTo('#headerMobMenu');
			$('.header_main_socials').appendTo('#headerMobSocials');
			$('#headerDropdown').appendTo('#headerMobDropdown');
			$('.header_dropdown').addClass('container');

			$('#dropdown').attr('id', '');
			$('.menu-catalog').hide();
			function MobDropdown () {
				var dropdown = $('#mobDropdown');
				var headerDropdown = $('#headerDropdown');
				dropdown.click(function() {
					headerDropdown.toggleClass('opened');
					if(headerDropdown.hasClass('opened')) {
						// $(document).mouseup(function (e) {
						//     if(headerDropdown.has(e.target).length === 0){
						//         headerDropdown.removeClass('opened')
						//     }
						// });
					}
				});
			}
			MobDropdown();

			function ShowTel() {
				$('#headerPhone').click(function() {
					$('.header_tel > ul').toggleClass('opened');
				});
			}
			ShowTel();
		}
		else {
			$('.header_top_menu').appendTo('#headerTopMenu');
			$('.header_logo').appendTo('#headerLogo');
			$('#headerSearch').appendTo('.header_main_right');
			$('#headerCart, #headerCartInner').appendTo('.header_main_right');
			$('.header_tel').appendTo('#headerTel');
			$('.header_main_menu--left').appendTo('#headerMainMenuLeft');
			$('.header_main_menu--right').appendTo('#headerMainMenuRight');
			$('.header_main_socials').appendTo('#headerSocials');
			$('#headerDropdown').appendTo('#headerDropdownWrapper');
			$('.header_dropdown').removeClass('container');
			$('.menu-catalog').show();
			$('#dropdown').attr('id', 'dropdown');
			langUkr.innerHTML = 'Українська';
			// langEng.innerHTML = 'English';
			langRus.innerHTML = 'Русский';
		}
	};
};
changeDesctop();

function ShowMenu() {
	$('.header_hamburger, .close').click(function() {
		$('.header_hamburger, .close').toggleClass('opened');
		$('#headerMobMenuHid').toggleClass('opened');
		
	});
}
ShowMenu();

$(document).ready(function(){
	$('.dropdown-submenu a.test').on("click", function(e){
		$(this).next('ul').toggle();
		e.stopPropagation();
		e.preventDefault();
	});
});

function yearToday() {
	var dt = new Date;
	var yearToday = dt.getFullYear();
	var yearShow = document.getElementById('year');
	yearShow.innerHTML = (' ' + yearToday + ' ');
}
yearToday();

$(function(){
	$('.input').mousedown(function(event){
	    event.stopPropagation();
	    // event.preventDefault();
	    // return false;
	});

	$('.minus').mousedown(function(event){
	    event.stopPropagation();
	    event.preventDefault(); 
	    return false;
	});

	$('.plus').mousedown(function(event){
	    event.stopPropagation();
	    event.preventDefault(); 
	    return false;
	});
	
	$('.plus').on('click', function(){
		
		var _this = $(this);
		var input = _this.next();
		var value = input.val();
		input.val(+value+1);

	});
	$('.minus').on('click', function(){
		var _this = $(this);
		var input = _this.prev();
		var value = input.val()
		if(value>1) {
			input.val(+value-1);
		}
	});
});

jQuery(document).ready(function(){
	var dropdown = $('#dropdown');
	var headerDropdown = $('#headerDropdown');
	function ShowDropdown() {
		dropdown.click(function() {
			headerDropdown.toggleClass('opened');
			if(headerDropdown.hasClass('opened')) {
				$('.header_main_menu--left > ul > li:eq(1)').addClass('current-menu-item');				
				$(document).mouseup(function (e) {
				    if(headerDropdown.has(e.target).length === 0){
				        headerDropdown.removeClass('opened')
				        $('.header_main_menu--left > ul > li:eq(1)').removeClass('current-menu-item');
				        // $('.header_main_menu--left > ul > li:eq(1)').attr('aria-expanded', 'false');
				    }
				});
			}
		});
	}
	ShowDropdown();
	// $('.header_main_menu--left > ul > li:eq(1)').click(function() {
	// 	var $list = $(this);
	// 	if($list.attr('aria-expanded')) {
	// 		$list.removeAttr('aria-expanded');
	// 		headerDropdown.removeClass('opened');
	// 		$(document).mouseup(function (e) {
	// 			if(headerDropdown.has(e.target).length === 0){
	// 	    		headerDropdown.removeClass('opened');
	// 	    		$list.removeAttr('aria-expanded');
	// 	    		$list.removeClass('current-menu-item');
	// 	    	}
	// 		});
	// 	}
	// 	else {
	// 		$list.attr('aria-expanded', 'true');
	// 		headerDropdown.addClass('opened');
	// 	}
	// })

	// $('.header_main_menu--left > ul > li:eq(1)').click(function() {
	// 	var $list1 = $(this);
	// 	if($list1.hasClass('current-menu-item')) {
	// 		$list1.removeClass('current-menu-item');
	// 	}
	// 	else {
	// 		$list1.addClass('current-menu-item')
	// 	}
	// })
});

jQuery(document).ready(function(){
	var searchIcon = $('#searchIcon');
	var searchInput = $('#searchInput');
	function ShowSearchField() {
		searchIcon.click(function() {
			$(this).toggleClass('opened');
			searchInput.toggleClass('opened');
			$('.header_main_center').toggleClass('hide');
			$('#headerMobLogo').toggleClass('hide');
		});
	}
	ShowSearchField();
});


jQuery(document).ready(function(){
	var headerCart = $('#headerCart');
	var headerCartInner = $('#headerCartInner');
	function ShowMenu() {
		headerCart.click(function() {
			headerCartInner.toggleClass('opened');
			if(headerCartInner.hasClass('opened')) {
				$(document).mouseup(function (e) {
				    if(headerCartInner.has(e.target).length === 0){
				        headerCartInner.removeClass('opened')
				    }
				});
			}
		});
	}
	ShowMenu();
});

// $(function() {
//   $(".header_main_menu > ul > li").click(function(e) {
//     $(".header_main_menu ul li").removeClass('current-menu-item');
//     $(this).addClass('current-menu-item');
//   })
// });


import '../components/js/jquery.scrollbar.min';

jQuery(document).ready(function(){
    jQuery('.scrollbar-inner').scrollbar();
});

require('webpack-jquery-ui');

$(function(){
	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 1000,
		values: [ 0, 185 ],
		slide: function( event, ui ) {
			$( "#price" ).val(ui.values[ 0 ] + " - " + ui.values[ 1 ] );
		}
	});
	$( "#price" ).val($( "#slider-range" ).slider( "values", 0 ) + " - " + $( "#slider-range" ).slider( "values", 1 ) );
});