$(function () {

	'use strict';

	function changeTabs() 
	{
	    $('.main-nav li').removeClass('active-tab');
	    $('section').children().addClass('hide');
	    $('.section-' + $(this).attr('id')).removeClass('hide');
	    $(this).addClass('active-tab');
	}

	$('.main-nav li').on('click', changeTabs);

});





