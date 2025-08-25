var productTranslateX = 0;
var productSwiper = new Swiper('#product-swiper', {
	direction: 'horizontal',
	loop: true,
	autoplay: {
		delay: 3000
	}
});
productSwiper.on('slideChangeTransitionEnd', function(e) {
	var index = $('#product-swiper .swiper-slide-active').attr('data-swiper-slide-index');
	$("main .banner .bar .actions .item").each(function() {
		if($(this).data("index") === Number(index)){
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
		}
	});
	if(Number(index) === 0){
		productTranslateX = 0;
	}
	if(Number(index) === 5){
		productTranslateX -= 270 * 5;
	}
	if(Number(index) === 10){
		productTranslateX -= 270 * 2;
	}
	$("#product-swiper-menu").css("transform", `translateX(${ productTranslateX }px)`);
});
$("main .banner .bar .actions .item").click(function(e) {
	e.preventDefault();
	e.stopPropagation();
	$("main .banner .bar .actions .item").each(function() {
		$(this).removeClass("active");
	});
	$(this).addClass("active");
	productSwiper.slideTo($(this).data("index"), 500, false);
});
$("#product-swiper-prev").click(function(e) {
	e.preventDefault();
	e.stopPropagation();
	if(productTranslateX !== 0){
		productTranslateX += 270;
		$("#product-swiper-menu").css("transform", `translateX(${ productTranslateX }px)`);
	}
});
$("#product-swiper-next").click(function(e) {
	e.preventDefault();
	e.stopPropagation();
	if(productTranslateX !== -1890){
		productTranslateX -= 270;
		$("#product-swiper-menu").css("transform", `translateX(${ productTranslateX }px)`);
	}
});