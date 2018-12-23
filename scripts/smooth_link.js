$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});
});

$(document).ready(function(){
	$("#menu_mobile").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});
});

// $(document).ready(function(){
// 	$("#goup").on("click","a", function (event) {
// 		event.preventDefault();
// 		var id  = $(this).attr('href'),
// 			top = $(id).offset().top;
// 		$('body,html').animate({scrollTop: top}, 1000);
// 	});
// });
// // скрипт скрытия кнопки вверх

// window.onload = function() {
// 	var scrollUp = document.getElementById('goup'); // найти элемент
// 	window.onscroll = function () {
// 		if ( window.pageYOffset > 0 ) {
// 			goup.style.display = 'block';
// 		} else {
// 			goup.style.display = 'none';
// 		}
// 	};
// };
