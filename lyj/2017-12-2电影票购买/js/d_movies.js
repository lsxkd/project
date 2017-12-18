// 蓝色星空岛

//交通    正式去掉
	
	$(function(){
		$(".d_footer_list").eq(0).on({
			"click":function(){
				window.location.href = "首页.html"
			}
		})
		$(".d_footer_list").eq(1).on({
			"click":function(){
				window.location.href = "选择影院.html"
			}
		})
		$(".d_footer_list").eq(2).on({
			"click":function(){
				window.location.href = "我的.html"
			}
		})
		$(".l_mover_buy").on({
			"click":function(){
				window.location.href = "选择影院.html"
			}
		})
		$(".c_paddTwo").on({
			"click":function(){
				window.location.href = "电影场次选择.html"
			}
		})
		$(".l_stl_btn").on({
			"click":function(){
				window.location.href = "选座.html"
			}
		})
		$(".d_seat_infos_btn_a").on({
			"click":function(){
				window.location.href = "我的订单.html"
			}
		})
		$(".l_mover_presale").on({
			"click":function(){
				window.location.href = "电影详情.html"
			}
		})
		$(".l_mover_presale").closest("li").on({
			"click":function(){
				window.location.href = "电影详情.html"
			}
		})
		$(".d_my_con_c_item_c_h2").eq(0).on({
			"click":function(){
				window.location.href = "电影票.html"
			}
		})
		$(".d_my_con_c_item_c_h2").eq(1).on({
			"click":function(){
				window.location.href = "javascript:;"
			}
		})
		$(".d_my_con_c_item_c_h2").eq(2).on({
			"click":function(){
				window.location.href = "通票.html"
			}
		})
		$(".l_mover_right").on({
			"click":function(){
				window.location.href = "电影详情.html"
			}
		})

	})

$(function(){


	$(".d_footer_ul .d_footer_list").on({//底部导航样式切换
		"click":function(){
			$(this).addClass("selected").siblings().removeClass("selected")
		}
	})
	$(".d_integral_span_btn").on({ //我的订单页面 积分奖励开关切换
		"click":function(){
			$(this).toggleClass("d_active")
		}
	})
	$(".d_phone_num_btn").on({ //我的订单页面 手机号点击进入编辑
		"click":function(){
			$(this).closest(".d_phone_num").find(".d_phone_num_span").hide();
			$(this).closest(".d_phone_num").find(".d_phone_num_input").show();
			$(this).removeClass("d_phone_num_btn");
			$(this).addClass("d_phone_num_btn_shut");
		}
	})
	$(".d_phone_num").on({//我的订单页面 点击清空手机号编辑框内容
		"click":function(){
			$(this).closest(".d_phone_num").find(".d_phone_num_input").val("");
		}
	},".d_phone_num_btn_shut")
	$(".d_order_tickets_clicks").on({  //我的订单页面  点击通票弹出选择框
		"click":function(){
			$(".d_pop_cover_bg").show();
			$(".d_order_tickets_pop").show();
		}
	})
	$(".d_pop_tickets_close_click").on({  //我的订单页面  点击通票弹出框关闭按钮 关闭弹出框
		"click":function(){
			$(".d_pop_cover_bg").hide();
			$(this).closest(".d_order_tickets_pop").hide();
		}
	})
	$(".d_order_draw_top_clicks").closest(".d_order_c_item").on({  //我的订单页面  点击价格切换按钮 关闭价格详情
		"click":function(){
			$(this).next(".d_order_c_item_price").slideToggle(0);
			$(this).find(".d_order_draw_top_clicks").toggleClass("d_actived");
			$(this).toggleClass("d_marbottom")
		}
	})
	$(".d_comment_fonts").on({  //写评论页面字数限制
	"change":function(){
		$(".d_comment_fonts_nums").html(500-$(this).val().length)
		},
	"keyup":function(){
		$(".d_comment_fonts_nums").html(500-$(this).val().length)
		}
	})
	$(".d_comment_one_con_star .d_comment_star").on({
		"click":function(){
			$(".d_comment_info_p").hide();
			$(".d_comment_info_h2").show();
			var indexs = $(this).index();
			//console.log(indexs)
			$(this).toggleClass("active");
			$(".d_comment_one_con_star .d_comment_star").each(function(){
				if($(this).index() > indexs){
					$(this).removeClass("active");
				}else{
					$(this).addClass("active")
				}
			})
			var score = (indexs +1) * 2
			if(score == 2){
				$(".d_comment_info_h2_tips").html("还我票钱");
			}else if(score == 4){
				$(".d_comment_info_h2_tips").html("宝宝心里苦");
			}else if(score == 6){
				$(".d_comment_info_h2_tips").html("爆米花电影");
			}else if(score == 8){
				$(".d_comment_info_h2_tips").html("吐血推荐");
			}else if(score == 10){
				$(".d_comment_info_h2_tips").html("堪称完美");
			}
			$(".d_comment_info_h2_nums").html(score)
		}
	})

        

	seatTicket(12,8);
})

function seatTicket(m,n){ // m:列 n:排 
	var oneWhidth = 9.5/m;
	var oneHeight = 7/n;
	var oneVals = 7/n;
	if(oneWhidth >= oneHeight){
		oneVals = oneHeight
	}else{
		oneVals = oneWhidth
	}
	var htmlP = "",
		htmlA = "",
		htmlSide = "";
	for(var j=1;j<=m;j++){
		htmlA += '<a href="javascript:;" data-column='+ j +' data-row="" class="d_seats d_seats_a"></a>'; //遍历列
	}
	for(var i=1;i<=n;i++){
		htmlP += '<p class="d_ps" data-row="'+ i +'">'+ htmlA +'</p>'; //遍历排
		htmlSide +='<li class="">'+ i +'</li>'; //遍历左侧楼层指示
	}
	$(".d_seat_side_ul").append(htmlSide);
	$(".d_seat_area_item_c").append(htmlP);
	$("p.d_ps .d_seats").css({
		"width":oneVals + "rem",
		"height":oneVals + "rem",
	})
	$(".d_seat_area_item_c p.d_ps").css("height",oneVals + "rem");
	$(".d_seat_side_ul li").css({
		"height":oneVals + "rem",
		"line-height":oneVals + "rem",
	})
	$(".d_seat_middleLine").css("height",$(".d_seat_area_item_c").height())
	$(".d_seat_area_item_c").on({  //点击选择座位
		"click":function(){
			if($(this).hasClass("disabled") || $(this).hasClass("active")){

			}else{
				console.log(11)
				if($(".d_seat_area_item_c .d_seats_a.active").length >= 4){
					alert("一次最多选4个座位!");
					return false;
				}else{
					var htmlTickets = ""
					$(this).addClass("active");
					var activeRow = $(this).closest("p.d_ps").attr("data-row");
					var activeColumn = $(this).attr("data-column");
					$(this).attr("data-bid",activeRow+'-'+activeColumn)
					//console.log(activeRow + ',' + activeColumn);
					htmlTickets += '<div  class="d_seat_k_item d_fl" data-bid='+ activeRow + '-' + activeColumn +' data-row='+ activeRow +' data-column='+ activeColumn +'><h3 class="d_seat_k_item_h3 d_ov_hi"><span class="">'+ activeRow +'排'+ activeColumn +'座</span></h3><p class="d_seat_k_item_p d_ov_hi">￥29.5</p><span class="d_seat_k_item_close"></span></div>'
				$(".d_seat_infos_con_k_box").append(htmlTickets)
				}
			}
		}
	},".d_seats_a")

	$(".d_seat_area_item_c").on({ //点击取消选择座位
		"click":function(){
			//console.log(12)
			$(this).removeClass("active");
			var activeRow = $(this).closest("p.d_ps").attr("data-row");
			var activeColumn = $(this).attr("data-column");
			//console.log(activeRow + ',' + activeColumn);
			//$(this).closest(".d_seat_k_item").remove();
			$('.d_seat_k_item[data-bid='+ activeRow + '-' + activeColumn +']').remove();
		}
	},".active")

	$(".d_seat_infos_con_k_box").on({ //点击取消选择座位
		"click":function(){
			var tickesaRow = $(this).closest(".d_seat_k_item").attr("data-row");
			var tickesaColumn = $(this).closest(".d_seat_k_item").attr("data-column");
			//console.log(tickesaRow + ',' + tickesaColumn);
			$(this).closest(".d_seat_k_item").remove();
			$('*[data-bid='+ tickesaRow + '-' + tickesaColumn +']').removeClass("active");
		}
	},".d_seat_k_item_close")
	
}
function seatActive(){

}












