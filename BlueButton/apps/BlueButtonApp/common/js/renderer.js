var renderer = function(){
	
	return {
		setLoginHeight: function(){
			setTimeout(function(){
				var hgt = $(".loginBox").height()>$(window).height()?$(".loginBox").height()+150:$(window).height();
				$('.loginPg').css("height", hgt);
			}, 100);
			$(window).resize(function () {	 
				setTimeout(function(){
					var hgt = $(".loginBox").height()>$(window).height()?$(".loginBox").height()+150:$(window).height();
					$('.loginPg').css("height", hgt);
				}, 100);
			});
		}
	};
}();