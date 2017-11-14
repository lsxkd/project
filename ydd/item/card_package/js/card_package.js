


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
	// $(".banner_view_wrap_item").find("li").on({
	// 	"tap":function(){
	// 		//var url= window.location.href;
	// 		if($(".card_package_main_cons_item").find(".main_cons_item_con_address_btn_yellow").length > 0){
	// 			console.log(654)
	// 			window.location.href="card_details.html";
	// 		}else{
	// 			window.location.href="coupon_list.html";
	// 		}
			
	// 		//window.location.href="coupon_list.html";
	// 		return false;
	// 	}
	// });
	$(".package_main_top_title").on({
		"tap":function(){
			window.location.href="view_all.html";
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
	// $(".address_searchs_right").on({
	// 	"tap":function(){
	// 		window.location.href="search_content_details_bussion_name.html";
	// 		return false;
	// 	}
	// });
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
	$(".search_details_item li").on({
		"tap":function(){
			window.location.href="index.html";
			return false;
		}
	});




})























//交通   正式去掉  start















// 搜索条件恢复默认 start
function searchDefault(){
	$(".condition_clicks li").removeClass("on");
	if($(this).find("span").eq(1).find("i").length == 3){
		$(this).find("span").eq(0).html($(this).find("span").eq(0).attr("data-name"))
		$(this).find("span").eq(1).find(".arrow_bottom_gray").css("display","block").siblings().hide()
	}else{
		$(this).find("span").eq(1).find(".arrow_top_gray,.arrow_bottom_gray").css("display","block").siblings().hide()
	}
}


// 搜索条件恢复默认 end


function touchClass(){
	 $(".card_package_main").addClass("card_package_main_touch");
	 $(".condition_clicks_list_divs").removeClass("card_package_main_touch");
	 $(".card_package_main_cons_title").removeClass("pop_list_block pop_list_block_02")
}

function hidePop(){
	touchClass();
	 $(".condition_clicks li").each(function(){
	      if($("span",$(this)).text().replace(/\s/g,"")==$("span",$(this)).attr("data-name")){
	        $(this).removeClass("on on_three")
	        $(".arrow_bottom_gray",$(this)).css("display","block").siblings().hide();
	        $(".lis_names",$(this)).html($(".lis_names:first",$(this)).attr("data-name"));
	      }
	    })
	    $(".card_package_main_cons_title").removeClass("pop_list_block")
	    $(".condition_clicks_list_divs ul ,.popup_bg").hide();

	
}
// 搜索框的宽度 start
	function address_searchss(){
		$("#address_searchs").each(function(){
			var font_sums = $(this).find(".address_searchs_left").find("span").text().length;
			if(font_sums <= 4){
				$(this).find(".address_searchs_left").css("width",font_sums + 1.2 +"em")
				$(this).find(".address_searchs_left").find("span").css("width",font_sums + 0.2 +"em")
				$(this).find(".address_searchs_right").css("width","calc(100% - 1.5rem - "+ font_sums +"em)")
			}else{
				$(this).find(".address_searchs_left").css("width","5.2em")
				$(this).find(".address_searchs_left").find("span").css("width","4.2em")
				$(this).find(".address_searchs_right").css("width","calc(100% - 1.5rem - 5em)" )
			}
		})
	}
	
	
	// 搜索框的宽度 start

$(function(){
	address_searchss()
	
	
	
	
	 
	var search_height = $("header").outerHeight(true);
	var footer_height = $(".footers_list").outerHeight(true) 
	var WH=$(window).outerHeight(true);
	$(".card_package_main").css("height",WH - search_height - footer_height)


	// 按钮触摸效果  start


	$(".my_coupons_list_btns a, .coupon_details_bottom a").on({
		"touchstart":function(e){
			$(this).css("background-color","#e5bc04")
		},

		"touchend":function(e){
			$(this).css("background","")
		}
	})

	// 按钮触摸效果 end
	//查看全部触摸效果 start
	$(".package_main_top_title, .coupon_details_top_detail li, .search_details_citys_item .search_details_citys_item_div").on({
		"touchstart":function(e){
			$(this).css("background","#d9d9d9")
		},

		"touchend":function(e){
			$(this).css("background","")
		}
	})
	//查看全部触摸效果 start


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
	 
	 //搜索框清空按钮  start
	 
	 $(".address_searchs_right input").on({
			"input":function(){
				if($(this).val() == ""){
					$(".abolish_btns").hide()
				}else{
					$(".abolish_btns").css("display","inline-block")
				}
			}
		})
		$(".abolish_btns").on({
			"tap":function(){
				console.log(1111)
				$(".address_searchs_right input").val("");
				return false;
			}
			
		})
		//搜索框清空按钮  end


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


$(".condition_clicks li").on({
  "tap":function(){
    // 排序操作
    var that=$(this).index();
    if($('.lis_arrows i',$(this)).length==4){
    	hidePop();
      // $('.lis_arrows i',$(".on_four")).show();
      $(".condition_clicks li").each(function(){
        // console.log($(this).index());
        if($(this).index()==that || $('.lis_arrows i',$(this)).length==3) return true;
        $('.lis_arrows i',$(this)).show();
        $('.arrow_top_yellow,.arrow_bottom_yellow',$(this)).hide();
       
      })
      $(".on_four").removeClass("on on_four");
      $(this).addClass("on on_four");
      if($('.lis_arrows i.arrow_top_yellow',$(this)).is(":hidden")){
        $('.lis_arrows i',$(this)).hide();
        // console.log(1);
        $(".arrow_bottom_gray,.arrow_top_yellow",$(this)).css("display",'block');
      }else{
          $('.lis_arrows i',$(this)).hide();
          $(".arrow_top_gray,.arrow_bottom_yellow",$(this)).css("display",'block');
      }
    }else if($('.lis_arrows i',$(this)).length==3){
    $(".condition_clicks li").each(function(){
        // console.log($(this).index());
        if($(this).index()==that || $("span:first",$(this)).html().replace(/\s/g,"")!=$("span:first",$(this)).attr("data-name") ) return true;
        	
	        $(this).removeClass("on on_three")
	        $(".arrow_bottom_gray",$(this)).css("display","block").siblings().hide();
	       
      })
      $(".card_package_main").removeClass("card_package_main_touch");
      $(".on_three").removeClass("on_three");
      $(this).addClass("on on_three");
      $(".lis_arrows i",$(this)).hide();
      $(this).find(".arrow_bottom_yellow").css("display","block");
      $(this).closest("ul").nextAll(".condition_clicks_list_divs").find("ul").hide();
        var str=$(this).hasClass("class_name_one")?"":"_02"
      $(this).closest(".card_package_main_cons_title").addClass("pop_list_block"+str);
      $(".popup_bg").show();
      $(this).closest("ul").nextAll(".condition_clicks_list_divs").find(".condition_clicks_list"+str).show().addClass("card_package_main_touch");
      $(".condition_clicks_list_divs").addClass("card_package_main_touch");


    }
    searchDefault()
    return false;
  }

})


// 选择选项弹出层事件
$(".condition_clicks_list_divs ul li").on({
  "tap":function(){
    if($(this).text().replace(/\s/g,"")=="全部"){
        $(".lis_arrows",$(".on_three")).find("i").eq(1).css("display","block").siblings().hide();
        $(".on_three span:first").html($(".on_three span:first").attr("data-name"));
        $(".on_three").removeClass("on on_three")
    }else{
      $("span:first",$(".on_three")).html($(this).text());
      $(".lis_arrows",$(".on_three")).find("i:last").css("display","block").siblings().hide();
    }


    $(this).addClass("on").siblings().removeClass("on");
    $(".card_package_main_cons_title").removeClass("pop_list_block")
    $(".condition_clicks_list_divs ul,.popup_bg").hide();
    touchClass();
    return false;
  }
})
// 点击遮罩隐藏选项弹出层
$(".popup_bg").on({
  "tap":function(){
  	touchClass();
    $(".condition_clicks li").each(function(){
      if($("span",$(this)).text().replace(/\s/g,"")==$("span",$(this)).attr("data-name")){
        $(this).removeClass("on on_three")
        $(".arrow_bottom_gray",$(this)).css("display","block").siblings().hide();
        $(".lis_names",$(this)).html($(".lis_names:first",$(this)).attr("data-name"));
      }
    })
    $(".card_package_main_cons_title").removeClass("pop_list_block")
    $(".condition_clicks_list_divs ul").hide();
    return false;
  }
})

	//区域，人气，距离条件切换  end
	


	
	// 使用说明按钮控制   start
	$(".switchover_clicks").on({
		"tap":function(){
			that = $(this)
			$(".switchover_cons").slideToggle("300",function(){
				location.href = location.href.split("#")[0] + "#" + that.attr("id")
			});
			$(this).find(".top_detail_r").toggleClass("top_detail_r_top");

			return false;
		}

	})

	// 使用说明按钮控制   end
		
	
	//搜索点击效果  start
	$(".search_details_item li").on({
		"tap":function(){
			$(".search_details_item li").removeClass("onAction")
			$(this).addClass("onAction");

			return false;
		},"touchstart":function(e){
			e.preventDefault();
		}
	})

	$(".div_click_cityss").on({
		"tap":function(){
			$(this).closest("li").siblings().find(".city_close_open").slideUp();
			$(this).closest("li").siblings().find(".search_details_citys_item_span_r_bottom").addClass("citys_item_span_r_top");
			$(".city_close_open" ,$(this).closest("li")).slideToggle();
			$(this).find(".search_details_citys_item_span_r_bottom").toggleClass("citys_item_span_r_top");

			return false;
		}
	})

	//搜索点击效果  end
	//打电话点击 start
	$(".telephone_call").on({
		"tap":function(){
			var telePhoness = $(this).find("span").eq(1).html();
			window.location.href="tel:"+telePhoness;
			return false;
		}
	})

	
	//打电话点击 end
	
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
				"marginTop":-($(this).outerHeight(true)/2),
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
















