// JavaScript Document

$(function(){
	//最新活动商品 收藏按钮js  start
	$(".collection_shop_click").click(function(){
		if($(this).find("i").hasClass("collection_shop_no")){
			$(".Cover_layer").css("display","block");
			$(".Pop_layer").css("display","block");
			$(this).addClass("collection_shop_click_select");
		}else if($(this).find("i").hasClass("collection_shop")){
			$(this).html("<i class='collection_shop_no'></i>收藏");
			$(this).removeClass("collection_shop_click_select");
		}	
	})
	$(".latest_activity_pop_btn_no,.latest_activity_pop_close_a").click(function(){
		$(".Cover_layer").css("display","none");
		$(".Pop_layer").css("display","none");	
	})
	$(".latest_activity_pop_btn_follow").click(function(){
		if($(".collection_shop_click_select").find("i").hasClass("collection_shop_no")){
			$(".collection_shop_click_select").html("<i class='collection_shop'></i>已收藏")
			$(".Cover_layer").css("display","none");
			$(".Pop_layer").css("display","none");	
		}
	})
	//最新活动商品 收藏按钮js  end

	//未关注商家 点击关注js  start
	$(".not_attention_business_click").live("click",function(){
		if(!($(this).hasClass("not_attention_business_con_item_right_btn_onea"))){
			//if($(this).attr("disabled")=="disabled") return false;
			$(this).removeClass("not_attention_business_con_item_right_btn_a");
			$(this).addClass("not_attention_business_con_item_right_btn_onea").html("取消关注");
			var asn = $(this).closest(".not_attention_business_con_item_right_btn").prev(".not_attention_business_con_item_right_follow")
			asn.find(".not_attention_business_con_item_right_follow_l_i").addClass("not_attention_business_con_item_right_follow_l_onei");
			asn.find(".not_attention_business_con_item_right_follow_r").html("已互相关注");
			if(asn.css("display") == "none"){
				asn.addClass("addFont");
				asn.css("display","block");
				asn.find(".not_attention_business_con_item_right_follow_l_i").removeClass("not_attention_business_con_item_right_follow_l_onei");
				asn.find(".not_attention_business_con_item_right_follow_r").html("已关注");
			}
			//$(this).attr("disabled","true");
		}else{
			//if($(this).attr("disabled")=="disabled") return false;
			$(this).addClass("not_attention_business_con_item_right_btn_a").html("<i class='not_attention_business_con_item_right_btn_a_i'></i>关注");
			$(this).removeClass("not_attention_business_con_item_right_btn_onea");
			var asn = $(this).closest(".not_attention_business_con_item_right_btn").prev(".not_attention_business_con_item_right_follow")
			asn.find(".not_attention_business_con_item_right_follow_l_onei").addClass("not_attention_business_con_item_right_follow_l_i");
			asn.find(".not_attention_business_con_item_right_follow_l_onei").removeClass("not_attention_business_con_item_right_follow_l_onei");
			asn.find(".not_attention_business_con_item_right_follow_r").html("已被他关注");
			if(asn.hasClass("addFont")){
				asn.css("display","none");
			}
			//$(this).attr("disabled","true");
		}
	})
	
	
	//未关注商家 点击关注js  start
})



