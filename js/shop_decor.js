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
	
	//人均消费只能输入数字和小数点，小数点只能输入一个，小数点后只能输入两位 start
	 var keyCodes,   // 声明一个变量待用;
			  reg=/^0(\.\d{0,2})?$/,   //声明小于一的正则;
			  regx=/^[1-9]+\d*(\.\d{0,2})?$/,  //声明大于等于一的正则;
			  regz=/^0+\d+/,  //声明一个零开头接数字的正则;
			  keydown=true;  //声明一个布尔值;
		  $(".amount_of_charge").keydown(function(){
			 if(keydown==false) return false;   //阻止长按多次输入;
			 keydown=false;
			 keyCodes=$(this).val();   //提取当前值;
		  });
		  $(".amount_of_charge").keyup(function(e){
			keydown=true;
			if(regz.test($(this).val())) {   //若是零开头接数字的值;
			  $(this).val($(this).val().replace(/0/,""))  //清除零;
			};
			if(!(reg.test($(this).val())||regx.test($(this).val()))&&$(this).val()!=""){ //若输入不是正确格式,本次输入无效
			  $(this).val(keyCodes);
			}
		  });
	//人均消费只能输入数字和小数点，小数点只能输入一个，小数点后只能输入两位 end
	
	

	//时间选择
	$(".cancel_btns").on({
		"click":function(){
			$(".pop_times").css("display","none")
		}
	})
	$(".date_weeks_t span").on({
		"click":function(){
			$(".pop_times").css("display","none")
			var defaultHr = $(this).html().substr(0,2);
			var defaultMn = $(this).html().substr(3,2);
			timeSelects();

			$(".pop_times_h li").each(function(){
				if($(this).html()==defaultHr){
					$(this).addClass("on");
					return false;
				}
			})	
			$(".pop_times_m li").each(function(){
				if($(this).html()==defaultMn){
					$(this).addClass("on");
					return false;
				}
			})

			$(".pop_times").css("display","block")
			$(this).addClass("mark_s_t");
			if($(this).attr("name") == "starts"){
				$(".pop_times").css("right","-91px")
			}else if($(this).attr("name") == "ends"){
				$(".pop_times").css("right","-194px")
			}
		}
	})


	$(".confirm_btns").on({
		"click":function(){
			var hrs = $(".pop_times_h li.on").html()
			var mns = $(".pop_times_m li.on").html()
			if(hrs == null){
				hrs = "00"
			}
			if(mns == null){
				mns = "00"
			}
			$(".mark_s_t").html(hrs + ":" + mns)
			$(".pop_times").css("display","none")
			$(".mark_s_t").removeClass("mark_s_t")
		}
	})
	


	//open_pop('goods_set')
})

//时间选择
function timeSelects(){
	var hours = "",
	minutess = ""
	$(".pop_times_h").html("")
	$(".pop_times_m").html("")
	for(var i=0;i<=23;i++){
		var houras=i<10?"0"+i:i;
		hours+="<li>"+houras+"</li>"
	}
	$(".pop_times_h").html(hours)
	for(var i=0;i<=59;i++){
		var minuteas=i<10?"0"+i:i;
		minutess+="<li>"+minuteas+"</li>"
	}
	$(".pop_times_m").html(minutess)

	$(".pop_times_h li").on({
		"click":function(){
			$(this).addClass("on").siblings().removeClass("on");
		}
	})
	$(".pop_times_m li").on({
		"click":function(){
			$(this).addClass("on").siblings().removeClass("on");
		}
	})
	
}




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







