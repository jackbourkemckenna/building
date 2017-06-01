/*global $, document, alert, console*/
$(function () {
	"use strict";
    $('div').slice(0, 0).show();
    $('#loadmore').on('click', function (e) {
        e.preventDefault();
        $('div:hidden').slice(0,30).slideDown();
        if ($('div:hidden').length === 0) {
            $('#loadmore').replaceWith("<p class='p'></p>");
        }
    });
    $('#top').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#top a').fadeIn();
        } else {
            $('#top a').fadeOut();
        }
    });
		
});
