if ($('div').is('.right_bottom')) {
	$('.right_middle').css({'height':'50vh'});
} else{
	$('.right_middle').css({'height':'80vh'});
}

$(document).ready(function(){
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

			var window_height = $('body').height();
		var top_line_height = $('.top_line').height();
		var right_top_line = $('.right__top_line').height();
		var right_middle_height = $('.right_middle').height();
		var bottom_fixed_height = $('.left_fixed').innerHeight();
		var new_height = (window_height - top_line_height)*100/window_height;
		var new_left_height = (window_height - top_line_height - bottom_fixed_height)*100/window_height;
		var new_right_bottom = (window_height - top_line_height - right_top_line - right_middle_height )*100/window_height;

		console.log(bottom_fixed_height);

		$('.left_wrapper').css({'height':new_left_height + 'vh'});
		$('.right_wrapper').css({'height':new_height + 'vh'});
		$('.right_bottom').css({'height':new_right_bottom + 'vh'});


		var left_wrapper_width = $('.left_wrapper').innerWidth();
		$('.left_fixed').innerWidth(left_wrapper_width-20);
	  	var left_wrapper_width = $('.left_wrapper').innerWidth();
	  	var new_right_bottom = (window_height - top_line_height - right_top_line - right_middle_height )*100/window_height;
		$('.left_fixed').innerWidth(left_wrapper_width);
		$('.right_bottom').css({'height':new_right_bottom + 'vh'});
});
	$( window ).resize(function() {
		$('.show_table').on('click', function(){
			var window_height = $('body').height();
			var top_line_height = $('.top_line').height();
			var right_top_line = $('.right__top_line').height();
			var new_height = (window_height - top_line_height - right_top_line -20)*100/window_height;
			if ($('.right_bottom').hasClass('show')) {
				$('.right_bottom').removeClass('show');
				$('.right_bottom').addClass('hide');
				$('.right_middle').css({'height':new_height + 'vh'});
			} else{
				$('.right_bottom').removeClass('hide');
				$('.right_bottom').addClass('show');
				$('.right_middle').css({'height':'50vh'});
			}
			
		});

		$('.show_table').on('click', function(){
			var window_height = $('body').height();
			var top_line_height = $('.top_line').height();
			var right_top_line = $('.right__top_line').height();
			var right_top_line = $('.right__top_line').height();
			var right_middle_height = $('.right_middle').height();
			var new_height = (window_height - top_line_height - right_top_line)*100/window_height;
			var new_right_bottom = (window_height - top_line_height - right_top_line)*100/window_height;
			if ($('.right_bottom').hasClass('show')) {
				$('.right_bottom').removeClass('show');
				$('.right_bottom').addClass('hide');
				$('.right_middle').css({'height':new_height + 'vh'});
			}
			else{
				$('.right_bottom').removeClass('hide');
				$('.right_bottom').addClass('show');
				$('.right_bottom').css({'height':new_right_bottom-50 + 'vh'});
				$('.right_middle').css({'height':'50vh'});
			}
			
		});
		var window_height = $('body').height();
		var top_line_height = $('.top_line').height();
		var right_top_line = $('.right__top_line').height();
		var right_middle_height = $('.right_middle').height();
		var bottom_fixed_height = $('.left_fixed').innerHeight();
		var new_height = (window_height - top_line_height)*100/window_height;
		var new_left_height = (window_height - top_line_height - bottom_fixed_height)*100/window_height;
		var new_right_bottom = (window_height - top_line_height - right_top_line - right_middle_height )*100/window_height;

		console.log(bottom_fixed_height);

		$('.left_wrapper').css({'height':new_left_height + 'vh'});
		$('.right_wrapper').css({'height':new_height + 'vh'});
		$('.right_bottom').css({'height':new_right_bottom + 'vh'});


		var left_wrapper_width = $('.left_wrapper').innerWidth();
		$('.left_fixed').innerWidth(left_wrapper_width-20);
	  	var left_wrapper_width = $('.left_wrapper').innerWidth();
	  	var new_right_bottom = (window_height - top_line_height - right_top_line - right_middle_height )*100/window_height;
		$('.left_fixed').innerWidth(left_wrapper_width);
		$('.right_bottom').css({'height':new_right_bottom + 'vh'});
	});
	
