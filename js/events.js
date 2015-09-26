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
			$('#website').slideUp();
		}
		else {
			$('#homepage').slideUp();
			$('#enneagram').slideUp();
			$('#website').slideDown();
		}
	});
	
	$('#project2').click(function() {
		if($('#homepage').is(':visible')) {
			$('#homepage').slideUp();
		}
		else {
			$('#website').slideUp();
			$('#enneagram').slideUp();
			$('#homepage').slideDown();
		}
	});
	
	$('#project3').click(function() {
		if($('#enneagram').is(':visible')) {
			$('#enneagram').slideUp();
		}
		else {
			$('#website').slideUp();
			$('#homepage').slideUp();
			$('#enneagram').slideDown();
		}
	});
});