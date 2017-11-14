


// 为jquery添加tap事件 start
(function($, _) {
  'use strict';
  var ev = {
    start: 'touchstart mousedown',
    end: 'touchend mouseup'
  };
  $.event.special[_] = {
    setup: function() {
      $(this).off('click').on(ev.start + ' ' + ev.end, function(e) {
        ev.E = e.originalEvent.changedTouches ? e.originalEvent.changedTouches[0] : e;
      }).on(ev.start, function(e) {
        if (e.which && e.which !== 1) {
          return;
        }
        ev.target = e.target;
        ev.time = new Date().getTime();
        ev.X = ev.E.pageX;
        ev.Y = ev.E.pageY;
      }).on(ev.end, function(e) {
        if (
          ev.target === e.target &&
          ((new Date().getTime() - ev.time) < 750) &&
          (ev.X === ev.E.pageX && ev.Y === ev.E.pageY)
        ) {
          e.type = _;
          e.pageX = ev.E.pageX;
          e.pageY = ev.E.pageY;

          $.event.dispatch.call(this, e);
        }
      });
    },
    remove: function() {
      $(this).off(ev.start, false).off(ev.end, false);
    }
  };
  $.fn[_] = function(fn) {
    return this[fn ? 'on' : 'trigger'](_, fn);
  };
})(jQuery, 'tap');






//交通   正式去掉  start

$(function(){
	// $(".tab_selected_click").find("li").eq(0).on({
	// 	"tap":function(){
	// 		window.location.href="my_card_list.html";
	// 		return false;
	// 	}
	// });
	


})







//交通   正式去掉  start












$(function(){

	//框架js start
	var search_heights = $("header").outerHeight(true);
	var footer_heights = $("footer").outerHeight(true) 
	var WHS=$(window).outerHeight(true);
	$(".shop_center_main").css("height",WHS - search_heights - footer_heights)
	//框架js end

	//  邮箱 reg=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/  
	// 手机号或者邮箱  /(^1[0-9]{10}$)|(^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+

	// 回到顶部 star
	$(".scroll_top").on({"tap":function(){
		$(".shop_center_main").animate({ scrollTop: 0 }, 500);		
		}
	});
	if($(".shop_center_main").scrollTop()==0){
		$(".scroll_top").hide();
	}
	$(".shop_center_main").scroll(function(){
		if($(".shop_center_main").scrollTop()==0){
			$(".scroll_top").fadeOut(50);	
		}else{
			$(".scroll_top").fadeIn(500);		
		}	
	})
	// 回到顶部  end
	
	//底部菜单切换  start
	$(".tab_selected_click li").on({
		"tap":function(){
			$(".tab_selected_click li").removeClass("on");
			$(this).addClass("on");
			return false;
		}
	})
	 
	
	// 登录帐号验证js   start
	$(".account_verifys").on({
		"blur":function(){
			var reg = /^1[3|4|5|7|8]\d{9}$|(^\w+@\w+\.\w+$)/
			if($(this).val().replace(/\s*/g,"") == ""){
				$(this).closest(".shop_center_main_con_box").find(".verify_tipss").removeClass("hide_verify_tip");
				$(this).closest(".shop_center_main_con_box").find(".verify_tipss").find("span").html("帐号不能为空");
			}else if(!reg.test($(this).val().replace(/\s*/g,""))){
				$(this).closest(".shop_center_main_con_box").find(".verify_tipss").removeClass("hide_verify_tip");
				$(this).closest(".shop_center_main_con_box").find(".verify_tipss").find("span").html("帐号格式不正确");
			}else{
				$(this).closest(".shop_center_main_con_box").find(".verify_tipss").addClass("hide_verify_tip");
			}
		}
	})
	$(".login_btns_click").on({
		"tap":function(){
			if($(this).val().replace(/\s*/g,"")==""){
				$(this).closest(".shop_center_main_con_box").find(".verify_tipss").removeClass("hide_verify_tip");
				$(this).closest(".shop_center_main_con_box").find(".verify_tipss").find("span").html("帐号不能为空");
			}
		}
	})


	// 登录帐号验证js   end
	
	// 阻止遮罩层冒泡 start
	$(".pop_cover_bg,.area_select_pops").on({
		"touchmove":function(e){
			e.preventDefault();
		}
	})

	// 阻止遮罩层冒泡 end
	//scroll_effect(".area_show_selects",".area_show_selects_01")

	scroll_effect({
		"clickOpenNames":".area_show_selects_01",
		"clickCloseNames":".area_select_reset",
		"clickSaveNames":".area_select_right",
		"popDivAll":".main_box_all",
		"listDiv":".area_select_pops_con_uls"

	})
})	




//区域弹出框滚动方法 start
function scroll_effect(choiceClick,choiceWhere){
	var moveNum=0;
	var this_margTop=0;
	var cityHtml_01=$(".area_select_pops_con_one li:first").html();
	var cityHtml_02=$(".area_select_pops_con_two li:first").html();
	var cityHtml_03=$(".area_select_pops_con_three li:first").html();
	$(".main_box_all ul").css("marginTop",$(".main_box_all li").outerHeight(true)*2);
	$(".main_box_all").on({
		"touchstart":function(e){
			this_margTop=parseInt($(this).find("ul").css("marginTop"));
			moveNum=e.originalEvent.changedTouches[0].clientY;
		},
		"touchmove":function(e){
			e.preventDefault();
			e.stopPropagation();
			var _moveNum=e.originalEvent.changedTouches[0].clientY-moveNum;
			$(this).find("ul").css({
				"marginTop":this_margTop+_moveNum
			})
		},
		"touchend":function(){
				var lens=$(this).find("li").length-2,
				liH=$(this).find("li").outerHeight(true),
				maxTop=(lens-5)*liH,
				maxBottom=2*liH,
				marginTop=0;
				if(-maxTop>parseFloat($(this).find("ul").css("marginTop"))){
					marginTop=-maxTop;
				}else if(maxBottom<parseFloat($(this).find("ul").css("marginTop"))){
					marginTop=maxBottom;
				}else{
					marginTop=$(this).find("ul").css("marginTop")
				}
				$(this).find("ul").css("marginTop",marginTop);
				var _this=$(this).find("ul");
				var n=Math.round(parseFloat(_this.css("marginTop"))/liH);
				_this.css("marginTop",n*liH);
				var x=-(n-1);
				var parentId=_this.find("li").eq(x).attr("ids");
				switch(_this.closest(".area_select_pops_con_uls").index()){
					case 1:
						cityHtml_01=_this.find("li").eq(x).html();   //城市选择事件写这里
					break;
					case 2:
						cityHtml_02=_this.find("li").eq(x).html();   //城市选择事件写这里
					break;
					case 3:
						cityHtml_03=_this.find("li").eq(x).html();   //区域选择事件写这里。（区域选择貌似没有事件？ - -!~）
					break;
				}
		}
	},".area_select_pops_con_uls");
	$(".area_select_reset").on({
		"click":function(){
			$(".pop_cover_bg,.area_select_pops").hide();
		}
	})
	$(".area_select_right").on({
		"click":function(e){
			e.stopPropagation();
			$(city_where).html(cityHtml_01+" "+cityHtml_02+" "+cityHtml_03);
			$(".pop_cover_bg,.area_select_pops").hide();
		}
	})
	$(choiceClick).on({
		"click":function(){
			$(".pop_cover_bg,.area_select_pops").show();
		}

	})


	// 初始第一列选择
	$.ajax({
		url:"http://192.168.1.89:8080/business_union/app/areas/queryAreaList.do",
		type:"GET",
		dataType:"json",
		data: {
			'level':1
		},
	 	// jsonp: "areas",//服务端用于接收callback调用的function名的参数
		// jsonpCallback:"areas",//callback的function名称
		success:function(data){
			var htmls="";
			 $.each(data,function(i,v){
			 	htmls+="<li ids='"+v.id+"'>"+v.name+"</li>";
			 })
			$(".area_select_pops_con_one ul").html(htmls);
		},
		error:function(){

		}
	})
	// 初始第二列选择
	$.ajax({
		url:"http://192.168.1.89:8080/business_union/app/areas/queryAreaList.do",
		type:"GET",
		dataType:"json",
		data: {
			'level':2,
			 "parentId":$(".area_select_pops_con_two ul li:first").attr("ids")
		},
	 	// jsonp: "areas",//服务端用于接收callback调用的function名的参数
		// jsonpCallback:"areas",//callback的function名称
		success:function(data){
			var htmls="";
			 $.each(data,function(i,v){
			 	htmls+="<li ids='"+v.id+"'>"+v.name+"</li>"
			 })
			$(".city_two ul").html(htmls).css("marginTop",$(".area_select_pops_con_uls li").outerHeight(true))
		},
		error:function(){

		}
	})
	// 初始第三列选择
	$.ajax({
		url:"http://192.168.1.89:8080/business_union/app/areas/queryAreaList.do",
		type:"GET",
		dataType:"json",
		data: {
			'level':3,
			"parentId":$(".area_select_pops_con_three ul li:first").attr("ids")
		},
	 	// jsonp: "areas",//服务端用于接收callback调用的function名的参数
		// jsonpCallback:"areas",//callback的function名称
		success:function(data){
			var htmls="";
			 $.each(data,function(i,v){
			 	htmls+="<li ids='"+v.id+"'>"+v.name+"</li>"
			 })
			$(".city_three ul").html(htmls).css("marginTop",$(".area_select_pops_con_uls li").outerHeight(true))
		},
		error:function(){

		}
	})


}


//区域弹出框滚动方法 end




