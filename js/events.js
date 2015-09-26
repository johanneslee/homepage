$(document).ready(function() {
	$('#menu').click(function() {
		if($('#list').is(':visible')) {
			$('#list').slideUp();
		}
		else {
			$('#list').slideDown();
		}
	});
	
	$('#project1').click(function() {
		if($('#website').is(':visible')) {
			$('#website').hide();
		}
		else {
			$('#homepage').hide();
			$('#enneagram').hide();
			$('#website').show();
		}
	});
	
	$('#project2').click(function() {
		if($('#homepage').is(':visible')) {
			$('#homepage').hide();
		}
		else {
			$('#website').hide();
			$('#enneagram').hide();
			$('#homepage').show();
		}
	});
	
	$('#project3').click(function() {
		if($('#enneagram').is(':visible')) {
			$('#enneagram').hide();
		}
		else {
			$('#website').hide();
			$('#homepage').hide();
			$('#enneagram').show();
		}
	});
});