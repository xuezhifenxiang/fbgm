var tipDom = null;
var tipDomTimer = null;

$(".logo").click(function(e) {
	e.preventDefault();
	e.stopPropagation();
	window.open("index.html");
});

$("nav .item").click(function(e) {
	e.preventDefault();
	e.stopPropagation();
	if (window.location.href.indexOf("index.html") !== -1) {
		if ($(this).text() === "SOBRE NOSOTROS") {
			$('html, body').animate({
				scrollTop: $('main .floor2').offset().top
			}, 200);
		}
		if ($(this).text() === "PRODUCTOS") {
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

$(".customer-service").click(function(e) {
	e.preventDefault();
	e.stopPropagation();
	checkApp(
		`whatsapp://send?phone=56975153746&text=${encodeURIComponent("Gracias por comunicarte con *FBG Decomaterial*. ¿De dónde te comunicas, para darte una mejor asesoría")}`,
		`https://web.whatsapp.com/send?phone=56975153746&text=${encodeURIComponent("Gracias por comunicarte con *FBG Decomaterial*. ¿De dónde te comunicas, para darte una mejor asesoría")}`,
		isAndroid() ? 'https://play.google.com/store/apps/details?id=com.whatsapp' :
		'https://apps.apple.com/us/app/whatsapp-messenger/id310633997'
	);
});

$("#footer-app img").click(function(e) {
	e.preventDefault();
	e.stopPropagation();
	if($(this).data("name") === "facebook"){
		checkApp(
		    `fb://profile/@fbg.decomaterial`, 
		    `https://www.facebook.com/@fbg.decomaterial`,
		    isAndroid() ? 'https://play.google.com/store/apps/details?id=com.facebook.katana' : 
		                 'https://apps.apple.com/us/app/facebook/id284882215'
		);
	}
	if($(this).data("name") === "ins"){
		checkApp(
		    `instagram://user?username=fbg_decomaterial`,
		    `https://www.instagram.com/fbg_decomaterial`,
		    isAndroid() ? 'https://play.google.com/store/apps/details?id=com.instagram.android' : 
		                 'https://apps.apple.com/us/app/instagram/id389801252'
		);
	}
	if($(this).data("name") === "tiktok"){
		checkApp(
		    `tiktok://@fbgdecomaterial`,
		    `https://www.tiktok.com/@fbgdecomaterial`,
		    isAndroid() ? 'https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically' : 
		                 'https://apps.apple.com/us/app/tiktok/id835599320'
		);
	}
});

function checkApp(appScheme, webUrl, storeUrl) {
	showTip("正在跳转应用...");
	const iframe = $('<iframe>', {
		src: appScheme,
		css: {
			display: 'none'
		}
	}).appendTo('body');
	setTimeout(function() {
		iframe.remove();
		const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
		if (isMobile) {
			showTip("未检测到应用，正在跳转下载...");
			setTimeout(function() {
				window.location.href = storeUrl;
			}, 1500);
		} else {
			window.location.href = webUrl;
		}
	}, 500);
}

function isAndroid() {
	return /Android/i.test(navigator.userAgent);
}

function showTip(msg) {
	if (tipDom && tipDomTimer) {
		clearTimeout(tipDomTimer);
		tipDomTimer = null;
		$('#page-tip').text(msg);
	} else {
		tipDom = $('<div>', {
			id: 'page-tip',
			text: msg
		}).appendTo('body');
	}
	tipDomTimer = setTimeout(() => {
		tipDom.remove();
		clearTimeout(tipDomTimer);
		tipDom = null;
		tipDomTimer = null;
	}, 1500);
}