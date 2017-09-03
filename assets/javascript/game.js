alert("Collect the Crystals before Jesse Pinkman smokes them all!");


var random_result;
var lost = 0;
var win = 0;
var previous = 0;



var resetAndStart = function () {

	$(".crystals").empty();

	var images = [
			'https://68.media.tumblr.com/44cb3e3115039f4167440687f92aca45/tumblr_ofgsdj5fvk1vsjcxvo2_r1_500.gif', 
			'http://cdn2.bigcommerce.com/n-biq04i/oxip7ywp/product_images/uploaded_images/crystal-ball-spin.gif?t=1404829917', 
			'https://media.giphy.com/media/twfl6QdDg2ZA4/giphy.gif', 
			'https://68.media.tumblr.com/c24d7faf8611f86b38c2fe35e5ef5c7d/tumblr_oktm832xWw1vsjcxvo1_500.gif'];
		
	random_result = Math.floor(Math.random() * 102 ) + 19; 


	$("#result").html('Random Result: ' + random_result);

	for(var i = 0; i < 4; i++){

		var random = Math.floor(Math.random() * 11) + 1;

		var crystal = $("<div>");
			crystal.attr({
				"class": 'crystal',
				"data-random": random
			});
			crystal.css({
				"background-image":"url('" + images[i] + "')",
				"background-size":"cover"

			});


		$(".crystals").append(crystal);

	}

	$("#previous").html("Total Score: " + previous);

}


resetAndStart();



$(document).on('click', ".crystal", function () {

	var num = parseInt($(this).attr('data-random'));

	previous += num;


	$("#previous").html("Total score: " + previous);

	console.log(previous);

	if(previous > random_result){

		lost++;

		$("#lost").html("You lost: " + lost);

		previous = 0;

		resetAndStart();

	} 
	else if(previous === random_result){

		win++;

		$("#win").html("You win: " + win);

		previous = 0;

		resetAndStart();

	}

});



