// 蓝色星空岛
 
$(function(){
	$(".c_modalbg").on({
		"click":function(){
			$(this).hide();
			$(".c_tabBox").hide()
		}
	})
	
	$(".c_tab li").on({
		"click":function(){
			$(this).find("a").addClass("c_active").find("i").removeClass("icon-f11").addClass("icon-f11-copy").parents("li").siblings().find("a").removeClass("c_active").find("i").removeClass("icon-f11-copy").addClass("icon-f11");
			var index = $(this).index();
			$(".c_modalbg").show();
			$(".c_tabBox").show().find(".c_boxx").eq(index).slideDown().siblings().hide();
			
		}
	})
})














