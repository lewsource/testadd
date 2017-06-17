

function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(100);

  $('.content').hide();

  $('.openingbit').on('click', function() {
		$('.content').show();
	});
}

$(document).ready(main);
