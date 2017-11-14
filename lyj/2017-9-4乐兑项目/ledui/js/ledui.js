/**
 * 2017-9-4  蓝色星空岛
 * 乐兑 个人中心
 */

//taba切换

$(function(){
	// tab标签切换
	// 触发对象与操作对象添加相同的tabsName；
	$(".tab_sole:gt(0)",$(".tab_box")).hide();
	$("li:eq(0)",$(".tab_nav")).addClass("on").siblings().removeClass("on");
	$(".tab_nav li").click(function(){
		var tabsName=$(this).closest(".tab_nav").attr("tabsName"),num=$(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		$(".tab_box[tabsName="+tabsName+"] .tab_sole").eq(num).show().siblings(".tab_sole").hide();
	});
})
