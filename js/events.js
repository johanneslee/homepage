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
		$('#homepage').slideUp();
		$('#enneagram').slideUp();
		$('#website').slideDown();
	});
	
	$('#project2').click(function() {
		$('#website').slideUp();
		$('#enneagram').slideUp();
		$('#homepage').slideDown();
	});
	
	$('#project3').click(function() {
		$('#website').slideUp();
		$('#homepage').slideUp();
		$('#enneagram').slideDown();
	});
});