// // Import vendor jQuery plugin example
 //import '~/app/libs/bootstrap/bootstrap.min.js'
 import '~/app/libs/slick/slick.min.js'
 import '~/app/libs/bootstrap/bootstrap.bundle.min.js'
 import '~/app/libs/ui/jquery-ui.min.js'
 //import '~/app/libs/bootstrap/bootstrap.min.js'

document.addEventListener('DOMContentLoaded', () => {

	$('.sidebar .filter__item-title').click(function(e) {
		$(this).toggleClass('active');
		$(this).siblings('.filter__item-content').slideToggle();
	});	

	//-----JS for Price Range slider-----
	$('#price-range-submit').hide();
	$("#min_price,#max_price").on('change', function () {
		$('#price-range-submit').show();
		var min_price_range = parseInt($("#min_price").val());
		var max_price_range = parseInt($("#max_price").val());
		if (min_price_range > max_price_range) {
			$('#max_price').val(min_price_range);
		}
		$("#slider-range").slider({
			values: [min_price_range, max_price_range]
		});
	  
	});


	$("#min_price,#max_price").on("paste keyup", function () {                                        
		$('#price-range-submit').show();
		var min_price_range = parseInt($("#min_price").val());
		var max_price_range = parseInt($("#max_price").val());
		
		if(min_price_range == max_price_range){
				max_price_range = min_price_range + 1;
				$("#min_price").val(min_price_range);	
				$("#max_price").val(max_price_range);
		}

		$("#slider-range").slider({
			values: [min_price_range, max_price_range]
		});

	});


	$(function () {
		$("#slider-range").slider({
			range: true,
			orientation: "horizontal",
			min: 0,
			max: 50000,
			values: [0, 20465],
			step: 1,

			slide: function (event, ui) {
				if (ui.values[0] == ui.values[1]) {
					return false;
				}
				
				$("#min_price").val(ui.values[0]);
				$("#max_price").val(ui.values[1]);
			}
		});

		$("#min_price").val($("#slider-range").slider("values", 0));
		$("#max_price").val($("#slider-range").slider("values", 1));

	});

})
