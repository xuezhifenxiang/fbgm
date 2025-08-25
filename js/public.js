$(".logo").click(function(e) {
	e.preventDefault();
	e.stopPropagation();
	window.open("index.html");
});

$("nav .item").click(function(e) {
	e.preventDefault();
	e.stopPropagation();
	if (window.location.href.indexOf("index.html") !== -1) {
		if ($(this).text() === "ABOUT US") {
			$('html, body').animate({
				scrollTop: $('main .floor2').offset().top
			}, 200);
		}
		if ($(this).text() === "PRODUCTORS") {
			window.open($(this).data("page"));
		}
		if ($(this).text() === "CONTACTO") {
			$('html, body').animate({
				scrollTop: $('main .floor6').offset().top
			}, 200);
		}
	} else {
		if ($(this).data("page")) {
			window.open($(this).data("page"));
		}
	}
});

$(".look-more").click(function(e) {
	e.preventDefault();
	e.stopPropagation();
	window.open("product.html");
});