//javascript 蓝色星空岛


$(function(){
	
	//选择商品弹出框列表切换 start
	$(".tab_sole:gt(0)",$(".tab_box")).hide();
	$("li:eq(0)",$(".tab_nav")).addClass("current").siblings().removeClass("current");
	$(".tab_nav li").click(function(){
		var tabsName=$(this).closest(".tab_nav").attr("tabsName"),num=$(this).index();
		$(this).addClass("current").siblings().removeClass("current");
		$(".tab_box[tabsName="+tabsName+"] .tab_sole").eq(num).show().siblings(".tab_sole").hide();
	});
	//选择商品弹出框列表切换 end

	//选择商品弹出框 移动顺序 start
	$(".table_list").on({
	"click":function(){
	  $(this).closest("tr").after($(this).closest("tr").prev());
	  return false;
	}
	},".move_up")

	$(".table_list").on({
	"click":function(){
	  $(this).closest("tr").before($(this).closest("tr").next());
	    return false;
	}
	},".move_down")
	//选择商品弹出框 移动顺序 end
	
	//店铺实景/商品  点击添加  start
	$(".copy_marks").on({
		"click":function(){
			var htmls = '<div class="goods_item"><div class="goods_item_img"><img src="images/default_bg_icon.jpg" alt="请上传图片"></div><a href="javascript:void(0);" class="goods_item_btns"><span class="goods_item_btns_font">点击上传</span><input type="file"></a><a href="javascript:void(0);" class="goods_item_del"></a></div>'
			$(this).before(htmls);
			$(".goods_item").find(".goods_item_del").css("display","block")
		}
	})
	//店铺实景/商品  点击添加  end
	//店铺实景/商品  点击删除  start
	if($(".details_item_goods .goods_item").length <= 2){
		$(".goods_item").find(".goods_item_del").css("display","none")
	}
	$(".details_item_goods").on({
		"click":function(){
			if($(".details_item_goods .goods_item").length > 2){
				$(this).closest(".goods_item").remove(false);
			}
			if($(".details_item_goods .goods_item").length <= 2){
				$(".goods_item").find(".goods_item_del").css("display","none")
			}
			
		}
	},".goods_item_del")
	//店铺实景/商品  点击删除  end



	//open_pop('goods_set')
})

//打开弹出框方法 start
function open_pop(id){
	$(".cover_layer").css("display","block")
	$("#"+id).css("display","block")

	$("#"+id).css({
		'left': ($(window).width()-($("#"+id).outerWidth(false)))/2,
		'top': $(window).height() / 2 - ($("#"+id).outerHeight(false) / 2)
	})
}
//打开弹出框方法 end
//关闭弹出框方法 start
function close_pop(id){
	$(".cover_layer").css("display","none")
	$("#"+id).css("display","none")

}
//关闭弹出框方法 start


function del_uploads(){ //删除
	$(this).closest(".goods_item").remove(false);
}






//店铺实景/商品  点击添加按钮复制  start







