$(function () {
	//动画滚动
	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
		new WOW().init();
	}
	var wow = new WOW({
		live: true,
		mobile: false
	});
	//导航
	var windoww;
	$(window).resize(function () {
		windoww=$(window).width()
	}).resize();
	$(".menu-activator").click(function () {
		console.log(1)
		if($(this).hasClass("cliactnav")){
			$(this).removeClass("cliactnav");
			$(this).parents(".header").find(".nav").stop().slideUp();
		}else {
			$(this).addClass("cliactnav");
			$(this).parents(".header").find(".nav").stop().slideDown();
		}
	});
	// 首页-banner
	var owl = $('.focus_slide');
	owl.owlCarousel({
		items:1,
		loop: true,
		nav:true,
		navText:['<',">"],
		// autoplay:true,
		// autoplayTimeout:4000
	});
	$(".cpline li").click(function () {
		$(this).addClass("clicpline").siblings("li").removeClass("clicpline");
		$(".cplbdiv").eq($(this).index()).show().siblings(".cplbdiv").hide()
	});
	$(".fytionbot li:nth-child(3n)").css("margin-right","0");
	$(".fyxqline:last-child").css("border-bottom","0");
	// 判断是否为手机
	function isPC() {
		var userAgentInfo = navigator.userAgent;
		var Agents = ["Android", "iPhone",
			"SymbianOS", "Windows Phone",
			"iPad", "iPod"];
		var flag = true;
		for (var v = 0; v < Agents.length; v++) {
			if (userAgentInfo.indexOf(Agents[v]) > 0) {
				flag = false;
				break;
			}
		}
		return flag;
	}
	if(isPC()){
// // // // PC 公共部分
		function Textscoll(col){
			this.col=$(col);
		}
		Textscoll.prototype={
			mousehover:function(){
				var _this=this;
				this.col.hover(function(){
					$(this).addClass("hoverli")
				},function(){
					$(this).removeClass("hoverli")
				})
			}
		};
		//首页-导航
		var navli=new Textscoll(".nav li");
		navli.mousehover();
		var navshowa=new Textscoll(".navshow a");
		navshowa.mousehover();
		var canpinbotli=new Textscoll(".canpinbot li");
		canpinbotli.mousehover();
		var cplineli=new Textscoll(".cpline li");
		cplineli.mousehover();
		var cplbdivli=new Textscoll(".cplbdiv li");
		cplbdivli.mousehover();
		var fybanner3a=new Textscoll(".fybanner h3 a");
		fybanner3a.mousehover();
		var fylbotli=new Textscoll(".fylbot li");
		fylbotli.mousehover();
		var fytionbotli=new Textscoll(".fytionbot li");
		fytionbotli.mousehover();
		var fynewbotli=new Textscoll(".fynewbot li");
		fynewbotli.mousehover();
		var fypronrli=new Textscoll(".fypronr li");
		fypronrli.mousehover();



		$(".nav li").hover(function () {
			$(this).find(".navshow").show()
		},function () {
			$(this).find(".navshow").hide()
		});
		// banner
		owl.on('changed.owl.carousel', function(event) {
			var page = event.page.index;     // 索引
			$(".banrline li").stop().animate({
				"left":page*$(".banrline li").width()
			},800)
		});
		// 产品
		$(".cpmore a").hover(function () {
			$(this).find("img").stop().animate({
				"right":"-36px"
			},500)
		},function () {
			$(this).find("img").stop().animate({
				"right":"-20px"
			},500)
		});
		$(".cplbdiv li").hover(function () {
			$(this).find(".cplbimgine").stop().fadeIn()
		},function () {
			$(this).find(".cplbimgine").hide()
		});
	}else {
// // // // 手机 公共部分
		$(".nav li").click(function () {
			$(this).find(".navshow").show()
		})
	}
});







