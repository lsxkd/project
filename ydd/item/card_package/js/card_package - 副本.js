


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
	$(".tab_selected_click").find("li").eq(0).on({
		"tap":function(){
			window.location.href="my_card_list.html";
			return false;
		}
	});
	$(".tab_selected_click").find("li").eq(1).on({
		"tap":function(){
			window.location.href="my_coupon_list.html";
			return false;
		}
	});
	$(".tab_selected_click").find("li").eq(2).on({
		"tap":function(){
			window.location.href="index.html";
			return false;
		}
	});
	$(".tab_selected_click").find("li").eq(3).on({
		"tap":function(){
			window.location.href="card_supermarket.html";
			return false;
		}
	});
	$(".banner_view_wrap_item").find("li").on({
		"tap":function(){
			//var url= window.location.href;
			if($(".card_package_main_cons_item").find(".main_cons_item_con_address_btn_yellow").length > 0){
				console.log(654)
				window.location.href="card_details.html";
			}else{
				window.location.href="coupon_list.html";
			}
			
			//window.location.href="coupon_list.html";
			return false;
		}
	});
	$(".package_main_top_title_r").on({
		"tap":function(){
			//window.location.href="view_all.html";
			if($(".main_cons_item_con_address").find(".main_cons_item_con_address_btn_yellow").length > 0){
				window.location.href="card_supermarket_all.html";
			}else{
				window.location.href="view_all.html";
			}
			return false;
		}
	});
	$(".card_package_main_cons_item").on({
		"tap":function(){
			if($(this).find(".main_cons_item_con_address_btn_yellow").length > 0){
				window.location.href="card_details.html";
			}else if($(this).find(".main_cons_item_con_address_btn_white").length > 0){
				window.location.href="bussiness_index.html";
			}else{
				window.location.href="coupon_list.html";
			}
			
			return false;
		}
	});
	$(".address_searchs_left").on({
		"tap":function(){
			window.location.href="search_details.html";
			return false;
		}
	});
	$(".address_searchs_right").on({
		"tap":function(){
			window.location.href="search_content_details_bussion_name.html";
			return false;
		}
	});
	$(".address_searchs_center").on({
		"tap":function(){
			window.location.href="index.html";
			return false;
		}
	});
	$(".jiaotong_cash_click").on({
		"tap":function(){
			window.location.href="coupon_details_01.html";
			return false;
		}
	});
	$(".jiaotong_cash_click_nos").on({
		"tap":function(){
			window.location.href="coupon_details_02.html";
			return false;
		}
	});
	$(".jiaotong_cash_click_na").on({
		"tap":function(){
			window.location.href="coupon_details_04.html";
			return false;
		}
	});

	$(".jiaotong_cash_click_over").on({
		"tap":function(){
			window.location.href="cut_coupon_details.html";
			return false;
		}
	});
	$(".jiaotong_cut_click").on({
		"tap":function(){
			window.location.href="cut_coupon_details.html";
			return false;
		}
	});
	$(".span_bts_wssss").on({
		"tap":function(){
			window.location.href="cut_coupon_details.html";
			return false;
		}
	});
	$(".span_bts_wss_02").on({
		"tap":function(){
			window.location.href="coupon_details_01.html";
			return false;
		}
	});
	$(".jiaotong_liji_click").on({
		"tap":function(){
			window.location.href="cut_coupon_details.html";
			return false;
		}
	});
	$(".jiaotong_cash_click_no").on({
		"tap":function(){
			window.location.href="coupon_details.html";
			return false;
		}
	});
	$(".my_coupons_list_msgs").find("a").on({
		"tap":function(){
			window.location.href="past_due_coupon_list.html";
			return false;
		}
	});

	$(".jiaotong_my_coupons_list_item_click").on({
		"tap":function(){
			window.location.href="cut_coupon_details.html";
			return false;
		}
	});
	$(".jiaotong_my_coupons_list_item_click_dai").on({
		"tap":function(){
			window.location.href="cut_coupon_details_01.html";
			return false;
		}
	});
	$(".jiaotong_liji_clicksdsd").on({
		"tap":function(){
			window.location.href="coupon_details_02.html";
			return false;
		}
	});

	$(".jiaotong_coupons_list_csd").on({
		"tap":function(){
			window.location.href="index.html";
			return false;
		}
	});

	$(".jiaotong_card_list_csd").on({
		"tap":function(){
			window.location.href="card_supermarket.html";
			return false;
		}
	});

	$(".jiaotong_lingcard_click").on({
		"tap":function(){
			window.location.href="card_details_02.html";
			return false;
		}
	});
	$(".jiaotong_queren_clicks").on({
		"tap":function(){
			window.location.href="card_details_01.html";
			return false;
		}
	});
	$(".jiaotong_my_card_clck").on({
		"tap":function(){
			window.location.href="bussiness_index.html";
			return false;
		}
	});




})























//交通   正式去掉  start



























$(function(){
	var search_height = $("header").outerHeight(true);
	var footer_height = $(".footers_list").outerHeight(true) 
	var WH=$(window).outerHeight(true);
	$(".card_package_main").css("height",WH - search_height - footer_height)



	// 搜索框  star
	// $(".address_searchs_clicks").on({
	// 	"tap":function(){
	// 		$(this).find("input").addClass("input_width_a")
	// 		$(this).find("input").focus()
	// 	}
	// })
	// $(".address_searchs_clicks").find("input").blur(function(){
	// 	if($(this).val() == ""){
	// 		$(this).removeClass("input_width_a");
	// 	}
	// })
	// 搜索框  end
	
	// 设为常用  start
	var tt;
	$(".herat_show_click").on({
		"tap":function(){
			clearTimeout(tt)
			if($(this).find("span").hasClass("heart_spans_grays")){
				$(this).find("span").removeClass("heart_spans_grays").addClass("heart_spans_reds");
				$(".pop_collect").show();
				$(".pop_collect").find(".pop_collect_bg").removeClass("show_grayd");
				$(".pop_collect").find("p").html("已设为常用")
				
			}else{
				$(this).find("span").removeClass("heart_spans_reds").addClass("heart_spans_grays");
				$(".pop_collect").show();
				$(".pop_collect").find(".pop_collect_bg").addClass("show_grayd");
				$(".pop_collect").find("p").html("已取消常用")

			}
			tt = setTimeout(function(){$(".pop_collect").hide()},2000);
			return false;
		}
	})

	// 设为常用  end
	 
	 
	// 回到顶部 star
	$(".scroll_top").on({"tap":function(){
		$(".card_package_main").animate({ scrollTop: 0 }, 500);		
		}
	});
	if($(".card_package_main").scrollTop()==0){
		$(".scroll_top").hide();
	}
	$(".card_package_main").scroll(function(){
		if($(".card_package_main").scrollTop()==0){
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


	//底部菜单切换  end
	//区域，人气，距离条件切换  star
	$(".condition_clicks li").on({
		"tap":function(){
			$(this).addClass("on").siblings().removeClass("on yellows_top yellows_bottom yellows_show");

			var htmss = $(".area_identifying").find("span").eq(1).html();
			if(htmss){htmss = htmss.replace(/\s/g,"")}
			if(htmss == "区域"){
				$(".area_identifying").removeClass("on");
			}else{
				$(".area_identifying").addClass("on");
			}
			
			
			if($(this).find(".lis_arrows").find("i").length == 3){
				if($(this).hasClass("class_name_one")){
					if($(this).hasClass("yellows_show")){
						$(".popup_bg").hide()
						$(".card_package_main_cons_title").removeClass("pop_list_block");
						$(".card_package_main_cons_title").removeClass("pop_list_block_02");
						$(".card_package_main").addClass("card_package_main_touch");
						$(".condition_clicks_list_divs").removeClass("card_package_main_touch")
						$(this).removeClass("on yellows_show");
					}else{
						$(this).addClass("yellows_show")
						$(".popup_bg").show();
						$(".card_package_main").removeClass("card_package_main_touch");
						$(".condition_clicks_list_divs").addClass("card_package_main_touch")
						$(".card_package_main_cons_title").removeClass("pop_list_block");
						$(".card_package_main_cons_title").removeClass("pop_list_block_02");
						$(".card_package_main_cons_title").addClass("pop_list_block");
					}
				}else{
					if($(this).hasClass("yellows_show")){
						$(".popup_bg").hide()
						$(".card_package_main_cons_title").removeClass("pop_list_block");
						$(".card_package_main_cons_title").removeClass("pop_list_block_02");
						$(".card_package_main").addClass("card_package_main_touch");
						$(".condition_clicks_list_divs").removeClass("card_package_main_touch")
						$(this).removeClass("on yellows_show");
					}else{
						$(this).addClass("yellows_show")
						$(".popup_bg").show();
						$(".card_package_main").removeClass("card_package_main_touch");
						$(".condition_clicks_list_divs").addClass("card_package_main_touch")
						$(".card_package_main_cons_title").removeClass("pop_list_block");
						$(".card_package_main_cons_title").removeClass("pop_list_block_02");
						$(".card_package_main_cons_title").addClass("pop_list_block_02");
					}
				}
				
			}else{
				$(".popup_bg").hide()
				$(".card_package_main_cons_title").removeClass("pop_list_block");
				$(".card_package_main_cons_title").removeClass("pop_list_block_02");
				$(".card_package_main").addClass("card_package_main_touch");
				$(".condition_clicks_list_divs").removeClass("card_package_main_touch")
				if($(this).hasClass("yellows_top")){
					$(this).removeClass("yellows_top")
					$(this).addClass("yellows_bottom")
				}else{
					$(this).removeClass("yellows_bottom")
					$(this).addClass("yellows_top")
				}
				var htmss = $(".area_identifying").find("span").eq(0).html();
				if(htmss){htmss = htmss.replace(/\s/g,"")}
				if(htmss == "区域"){
					$(".area_identifying").removeClass("on");
					$(".area_identifying").find(".arrow_top_yellow").hide();
					$(".area_identifying").find(".arrow_bottom_gray").css("display","block");
					$(".area_identifying").find(".arrow_bottom_yellow").hide();
				}else{
					$(".area_identifying").addClass("on");
				}
			}

			return false;

		}
	})

	//区域，人气，距离条件切换  end
	

	//关闭弹出框 start
	$(".wrap_box_pop").on({
		"tap":function(e){
			e.preventDefault();
			e.stopPropagation();
			$(".popup_bg").hide()
			$(".card_package_main_cons_title").removeClass("pop_list_block");
			$(".card_package_main_cons_title").removeClass("pop_list_block_02");
			$(".card_package_main").addClass("card_package_main_touch");
			$(".condition_clicks_list_divs").removeClass("card_package_main_touch")
			$(".condition_clicks li").removeClass("on yellows_show");

			var htmss = $(".area_identifying").find("span").eq(1).html();
			if(htmss) {htmss = htmss.replace(/\s/g,"")}
			if(htmss == "区域"){
				$(".area_identifying").removeClass("on");
				$(".area_identifying").find(".arrow_top_yellow").hide();
				$(".area_identifying").find(".arrow_bottom_gray").css("display","block");
				$(".area_identifying").find(".arrow_bottom_yellow").hide();
			}else{
				$(".area_identifying").addClass("on");
			}
			if($(".area_identifying").hasClass("on")){
				$(".area_identifying").find(".arrow_top_yellow").hide();
				$(".area_identifying").find(".arrow_bottom_gray").hide();
				$(".area_identifying").find(".arrow_bottom_yellow").css("display","block");
			}
			return false;
		}
	})
	//关闭弹出框 end
	//下拉框  start
	$(".list_dropdown_click li").on({
		"tap":function(e){
			e.preventDefault();
			e.stopPropagation();
			$(this).addClass("on").siblings().removeClass("on");
			var htmls = $(this).find("span").eq(0).html();
			if(htmls.replace(/\s/g,"") == "全部"){
				var obj = $(".condition_clicks").find(".on").find("span").eq(0)
				obj.html(obj.attr("data-name"));
			}else{
				
				$(".condition_clicks").find(".on").find("span").eq(0).html(htmls)
			}
			$(".card_package_main").addClass("card_package_main_touch");
			$(".condition_clicks_list_divs").removeClass("card_package_main_touch")
			$(".card_package_main_cons_title").removeClass("pop_list_block");
			$(".card_package_main_cons_title").removeClass("pop_list_block_02");
			$(".popup_bg").hide();
			$(".condition_clicks li.on").removeClass("yellows_show");

			var htmss = $(".area_identifying").find("span").eq(0).html();
			if(htmss){htmss = htmss.replace(/\s/g,"")}
			if(htmss == "区域"){
				$(".area_identifying").removeClass("on");
				$(".area_identifying").find(".arrow_top_yellow").hide();
				$(".area_identifying").find(".arrow_bottom_gray").css("display","block");
				$(".area_identifying").find(".arrow_bottom_yellow").hide();
			}else{
				$(".area_identifying").addClass("on");
			}

			if($(".area_identifying").hasClass("on")){
				$(".area_identifying").find(".arrow_top_yellow").hide();
				$(".area_identifying").find(".arrow_bottom_gray").hide();
				$(".area_identifying").find(".arrow_bottom_yellow").css("display","block");
			}
			return false;
		}
	})
	//下拉框  end
	// 使用说明按钮控制   start
	$(".switchover_clicks").on({
		"tap":function(){
			$(".switchover_cons").slideToggle();
			$(this).find(".top_detail_r").toggleClass("top_detail_r_top");

			return false;
		}

	})

	// 使用说明按钮控制   end
		
	


	
	
	Banner($(".package_main_top_con"))
})



//我的卡页面banner拖动js  start
function Banner(control){
	// 定义必要的参数;
	var n,nav_html="",begin_x,box_left,li_h,times;
	var box=$(".banner_view",control),
		box_li=$(".banner_view .banner_view_wrap_item",control),
		len=$(".banner_view .banner_view_wrap_item",control).length;
    var liw=$(".banner_view .banner_view_wrap_item",control).outerWidth(true);
    var left=parseInt($(".banner_view",control).css("left"));
    n=-parseInt(left)/liw;
	// 根据内容添加导航的个数,并固定显示内容区的大小;
	box_li.each(function(i){
		nav_html+="<span class='banner_nav_gray'></span>";
		li_h=$(this).outerHeight();
		$(this).css({
			"width":box.outerWidth(false)
		})
	})

	// 根据内容固定显示区主内容的宽度;

	box.css("width",liw*len+"px");
	$(".banner_view",control).css({
		// "width":control.outerWidth(false),
		"height":li_h+"px",
		"overflow":"hidden"
	})

	// 若已有导航区,改变导航区的内容; 否则添加导航区;
	if($(".banner_nav",control).length>0){
		$(".banner_nav",control).html(nav_html);
	}else{
		$(".banner_view",control).after("<div class='banner_nav'>"+nav_html+"</div>");
	}
	$(".banner_nav span:first",control).addClass("on");


	// 滑动时执行的函数;
	$(".banner_view",control).on({
		"touchstart":function(e){
			e.preventDefault();
			begin_x=pages(e).pageX;
			box_left=parseInt($(".banner_view",control).css("left"));
      clearInterval(times);
		},
		"touchmove":function(e){
			e.preventDefault();
			moves=pages(e).pageX-begin_x;
			// 实时改变显示区的位置;
			$(this).css("left",box_left+moves);
		},
		"touchend":function(){
			var c=liw/2;
			// 获取显示区的位置;
			var left=parseInt($(".banner_view",control).css("left"));
      if(moves > 100){
        scroll_ban(--n)
      }else if(moves<-100){
        scroll_ban(++n);
      }else{
        $(".banner_view",control).animate({
  				"left":posit(Math.round(left/liw)*liw)
  			},function(){
  				// 重新获取显示区的位置;
  				var left=parseInt($(".banner_view",control).css("left"));
  				$(".banner_nav span",control).eq(-Math.round(left/liw)).addClass("on").siblings().removeClass("on");
  			})
      }

      times=setInterval(function(){
        var lis=$(".banner_nav span").length-1;
        n=n<lis?++n:0;
        scroll_ban(n);
      },3000)

		}
	})


	// 规定不同情况的运行方向;
	function scroll_ban(lefts){
		$(".banner_view",control).stop(false,true).animate({
			"left":posit(-liw*lefts)
		},function(){
      var left=parseInt($(".banner_view",control).css("left"));
      n=-parseInt(left/liw);
      $(".banner_nav span",control).eq(-Math.round(left/liw)).addClass("on").siblings().removeClass("on");
    })
	}

	// 限制移动区间;
	function posit(num){
		var n=num<=-(len-1)*liw?-(len-1)*liw:num>=0?0:num;
		return n;
	}

	// 获取当前的触摸点;
	function pages(evt){
		return evt.originalEvent["touches"][0];
	}
  times=setInterval(function(){
    var lis=$(".banner_nav span").length-1;
    n=n<lis?++n:0;
    scroll_ban(n);
  },3000)
}
//我的卡页面banner拖动js  start


$(function(){
	// 关闭弹出层
	$(".close_popup").on({
		"touchend":function(){
			$(this).closest(".popup").hide();
			$(".popup_bg").hide();
			return false;
		}
	})
	// 点击遮罩层关闭弹出层
	$(".popup_bg").on({
		"tap":function(){
			$(".popup_bg,.bottom_pay_style,.popup").hide();
			return false;
		},
		"touchstart":function(e){
      e.stopPropagation();
			e.preventDefault();
		},
		"touchmove":function(e){
			e.stopPropagation();
			e.preventDefault();
		},
		"touchend":function(e){
			e.stopPropagation();
			e.preventDefault();
		}
	})
})

// 显示弹出层
function show_popup(id,opacity){
	$(id).show();
	$(".popup_bg").show();
	if(opacity){
		$(".popup_bg").css("opacity",opacity);
	}
	if($(".redPage_popup_box",id).length>0){
		$(".redPage_popup_box",id).each(function(){
			$(this).css({
				"marginTop":-($(this).outerHeight(true)/2+10),
				"marginLeft":-$(this).outerWidth(true)/2
			})
		})
	}
}

// 数字滚动
function rotateNum(num,obj){
	var obj=obj||document;
	var str=""+num;
	var myArr=str.split("");
	var html="";
	for(var i=0;i<myArr.length;i++){
		if(myArr[i]=="."){
			html+="<div class='red_money_mun_n decimal'>.</div>"
		}else{
			html+="<div class='red_money_mun_n' place='"+parseInt(i+1)+"' num='"+myArr[i]+"'><ul>";
			for(var j=0;j<10;j++){
				html+="<li>"+j+"</li>";
			}
			html+="</ul></div>";
		}
	}
	$(".red_money_mun",$(obj)).html(html);
	var liH=$(".red_money_mun_n li",$(obj)).outerHeight(true);
	$(".red_money_mun_n",$(obj)).each(function(){
		if($(this).hasClass("decimal")) return true;
		var n=parseInt($(this).attr("num"));
		$(this).find("ul").animate({
			"font-size":liH*n+liH*parseInt($(this).attr("place"))*10+"px"
		},{
			duration:parseInt($(this).attr("place"))*0.1*3000,
			step:function(v,n){
				$(this).css("marginTop",-v%(parseInt(liH)*10)+"px");
			}
		})
	})
}
















