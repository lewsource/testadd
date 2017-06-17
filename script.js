

function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(10000);

  $('.content').hide();

  $('.openingbit').on('click', function() {
		$('.content').show();
	});
}

$(document).ready(main);
