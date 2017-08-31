$(document).ready(function(){

	var window_height = $('body').height();
	var top_line_height = 29;
	var right_top_line = 33;
	var right_middle_height = $('.right_middle').height();
	var bottom_fixed_height = $('.left_fixed').innerHeight();
	var new_height = window_height - top_line_height;
	var new_right_bottom = new_height - right_middle_height - 33 ;
	var new_left_height = (window_height - top_line_height - 130)*100/window_height;
	

	$('.left_wrapper').css({'height':new_left_height + 'vh'});
	$('.right_wrapper').css({'height':new_height});

	var left_wrapper_width = $('.left_wrapper_main').width();
	$('.left_fixed').width(left_wrapper_width-1);
  	$('.right_bottom').css({'height':new_right_bottom});

	$('.show_table').on('click', function(){
		var window_height = $('body').height();
		var top_line_height = $('.top_line').height();
		var right_top_line = $('.right__top_line').height();
		var right_middle_height = $('.right_middle').height();
		var new_height = (window_height - top_line_height - right_top_line)*100/window_height;
		var new_right_bottom = (window_height - top_line_height - right_top_line - 50 )*100/window_height;
		if ($('.right_bottom').hasClass('show')) {
			$('.right_bottom').removeClass('show');
			$('.right_bottom').addClass('hide');
			$('.right_middle').css({'height':new_height + 'vh'});
		}
		else{
			$('.right_bottom').removeClass('hide');
			$('.right_bottom').addClass('show');
			$('.right_middle').css({'height':'50vh'});
		}
		
	});

	$('.btn_exchange').on('click', function(){
		if ($('.left_wrapper_main').hasClass('show')) {
			$('.left_wrapper_main').removeClass('show');
			$('.left_wrapper_main').addClass('hide');
			$('.right_wrapper').removeClass('col-xs-9');
			$('.right_wrapper').addClass('col-xs-12');
		} else{
			$('.left_wrapper_main').removeClass('hide');
			$('.left_wrapper_main').addClass('show');
			$('.right_wrapper').removeClass('col-xs-12');
			$('.right_wrapper').addClass('col-xs-9');
		}
		
	});
	$('.top_line_link').on('click', function(){
		$('.top_line_link').removeClass('active');
		$(this).addClass('active');
	});


});
$( window ).resize(function() {
	$('.show_table').on('click', function(){
		var window_height = $('body').height();
		var top_line_height = $('.top_line').height();
		var right_top_line = $('.right__top_line').height();
		var right_middle_height = $('.right_middle').height();
		var new_height = (window_height - top_line_height - right_top_line)*100/window_height;
		var new_right_bottom = (window_height - top_line_height - right_top_line - 50 )*100/window_height;
		if ($('.right_bottom').hasClass('show')) {
			$('.right_bottom').removeClass('show');
			$('.right_bottom').addClass('hide');
		}
		else{
			$('.right_bottom').removeClass('hide');
			$('.right_bottom').addClass('show');
			$('.right_middle').css({'height':'50vh'});
		}
		
	});	

	$('.left_wrapper').css({'height':new_left_height + 'vh'});
	$('.right_wrapper').css({'height':new_height});

	var window_height = $('body').height();
	var top_line_height = 29;
	var right_top_line = 33;
	var right_middle_height = $('.right_middle').height();
	var bottom_fixed_height = $('.left_fixed').innerHeight();
	var new_height = window_height - top_line_height;
	var new_right_bottom = new_height - right_middle_height - 33;
	var new_left_height = (window_height - top_line_height - 130)*100/window_height;
	

	$('.left_wrapper').css({'height':new_left_height + 'vh'});
	$('.right_wrapper').css({'height':new_height});

	var left_wrapper_width = $('.left_wrapper_main').width();
	$('.left_fixed').width(left_wrapper_width-1);
  	$('.right_bottom').css({'height':new_right_bottom});
});

