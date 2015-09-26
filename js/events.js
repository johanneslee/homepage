$(document).ready(function() {
	$('#menu').click(function() {
		if($('#list').is(':visible')) {
			$('#list').slideUp();
		}
		else {
			$('#list').slideDown();
		}
	});
});