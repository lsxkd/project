


$(function(){
	// 模拟输入框选中事件
	$(".obj_txt").on({
		"tap":function(){
			$(".focus").removeClass("focus");
			$(this).addClass("focus");
			$(".keyboard",$(this).closest(".wrap_box")).show();
			if($(this).find(".obj_txt_input").html()!=""){
				$(this).find(".reset_num").css("display","inline-block")
			}else{
				$(this).find(".reset_num").css("display","")
			}
			return false;
		}
	})
})

	// 模拟输入框失去焦点事件
	$(document).on({
		"tap":function(e){
			var obj=e.target;
			if(!$(obj).is(".obj_txt") && !$(obj).is(".obj_show_keyword") && $(obj).closest(".obj_txt").length==0 && !$(obj).is(".keyboard_box") && $(obj).closest(".keyboard_box").length==0){
				$(".obj_txt").removeClass("focus");
				$(".keyboard,.reset_num,.keyboard_num").hide();
			}
			return false;
		}
	})

	// 输入框清空
	$(".reset_num").on({
		"tap":function(){
			$(this).closest(".focus").find(".obj_txt_input").html("");
			$(this).hide();
			$(".pay_affirm").addClass("disabled");
			return false;
		}
	})


	// 按钮触摸效果
	$(".span_bts_w,.git_code").on({
		"touchstart":function(e){
			if($(this).hasClass("disabled")) return false;
			$(this).css("background","#e5bc04")
		},

		"touchend":function(e){
			$(this).css("background","")
		}
	})

////////////
// 弹出提示通用
// text: 提示文字
// boole: 是否添加正在加载效果
////////////
function items(text,boole){
	if($(".pup_items")[0]) return false;
	var bgs="";
	if(boole){
		bgs="<em class='pup_items_bg'></em>";
	}
	var obj=$("body").append("<div class='pup_items' style='display:none'>"+bgs+" <span>"+text+"</span></div>");
	var left=$(".pup_items").outerWidth(false)/2;
	$(".pup_items").css("margin-left","-"+left+"px").show();
	setTimeout(function(){
		$(".pup_items").remove();
	},1000)
}
