


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
	 $(".shop_center_main_top_notice").on({
		"tap":function(){
			window.location.href="upgrade_announcement_details.html";
			return false;
		}
	});
	 $(".upgrade_announcements_list").find("li").on({
		"tap":function(){
			window.location.href="upgrade_announcement_details.html";
			return false;
		}
	});
	$(".notice_tab_selected_click").find("li").eq(3).on({
		"tap":function(){
			window.location.href="upgrade_announcement.html";
			return false;
		}
	});
	$(".notice_tab_selected_click").find("li").eq(0).on({
		"tap":function(){
			window.location.href="my_shop.html";
			return false;
		}
	});
	 $(".login_btns_click").on({
		"tap":function(){
			window.location.href="my_shop.html";
			return false;
		}
	});
	 $(".register_new_account").on({
		"tap":function(){
			window.location.href="register.html";
			return false;
		}
	});
	 $(".forget_password").on({
		"tap":function(){
			window.location.href="forget_password.html";
			return false;
		}
	});
	 $(".have_count").on({
		"tap":function(){
			window.location.href="login.html";
			return false;
		}
	});
	 $(".my_shop_con_lists_box").find("li").eq(2).on({
		"tap":function(){
			window.location.href="my_coupons.html";
			return false;
		}
	});
	 
	$(".shop_infoss_click").on({
		"tap":function(){
			window.location.href="businessmen_information.html";
			return false;
		}
	});
	$(".shop_center_coupons_list_box").find(".shop_center_coupons_list_item").eq(0).find(".shop_center_coupons_list_item_left").on({
		"tap":function(){
			window.location.href="my_coupons_detail.html";
			return false;
		}
	});
	$(".shop_center_coupons_list_box").find(".shop_center_coupons_list_item").eq(0).find(".shop_center_coupons_list_item_right_top").on({
		"tap":function(){
			window.location.href="my_coupons_detail.html";
			return false;
		}
	});
	$(".shop_center_coupons_list_box").find(".shop_center_coupons_list_item").eq(0).find(".shop_center_coupons_list_item_right_time span").on({
		"tap":function(){
			window.location.href="my_coupons_detail.html";
			return false;
		}
	});
	$(".shop_center_coupons_list_box").find(".shop_center_coupons_list_item").eq(1).find(".shop_center_coupons_list_item_left").on({
		"tap":function(){
			window.location.href="my_coupons_detail_02.html";
			return false;
		}
	});
	$(".shop_center_coupons_list_box").find(".shop_center_coupons_list_item").eq(1).find(".shop_center_coupons_list_item_right_top").on({
		"tap":function(){
			window.location.href="my_coupons_detail.html";
			return false;
		}
	});
	$(".shop_center_coupons_list_box").find(".shop_center_coupons_list_item").eq(1).find(".shop_center_coupons_list_item_right_time span").on({
		"tap":function(){
			window.location.href="my_coupons_detail.html";
			return false;
		}
	});
	$(".business_certification_click").on({
		"tap":function(){
			window.location.href="businessmen_certification.html";
			return false;
		}
	});
	$(".business_certification_click_01").on({
		"tap":function(){
			window.location.href="businessmen_certification_02.html";
			return false;
		}
	});
	$(".qr_code_payment_application_click_02").on({
		"tap":function(){
			window.location.href="qr_code_payment_application_02.html";
			return false;
		}
	});
	$(".qr_code_payment_application_click_03").on({
		"tap":function(){
			window.location.href="qr_code_payment_application_03.html";
			return false;
		}
	});
	$(".qr_code_payment_application_click_04").on({
		"tap":function(){
			window.location.href="qr_code_payment_application_04.html";
			return false;
		}
	});
	$(".qr_code_payment_application_click_05").on({
		"tap":function(){
			window.location.href="my_shop.html";
			return false;
		}
	});
	$(".log_out_click").on({
		"tap":function(){
			window.location.href="login.html";
			return false;
		}
	});
	$(".business_detail_click").on({
		"tap":function(){
			window.location.href="business_details.html";
			return false;
		}
	});
	$(".shop_center_coupons_list_item_right_top").find("a").on({
		"tap":function(){
			window.location.href="my_coupons_voucher_record.html";
			return false;
		}
	});
	$(".footers_list_four").find("li").eq(0).on({
		"tap":function(){
			window.location.href="my_shop.html";
			return false;
		}
	});
	$(".footers_list_four").find("li").eq(1).on({
		"tap":function(){
			window.location.href="my_coupons.html";
			return false;
		}
	});
	$(".footers_list_four").find("li").eq(2).on({
		"tap":function(){
			window.location.href="send_coupon.html";
			return false;
		}
	});
	$(".footers_list_four").find("li").eq(3).on({
		"tap":function(){
			window.location.href="my_activities.html";
			return false;
		}
	});
	$(".send_coupon_cons").find(".send_coupon_cons_left").eq(0).on({
		"tap":function(){
			window.location.href="send_coupon_info_d.html";
			return false;
		}
	});
	$(".send_coupon_cons").find(".send_coupon_cons_left").eq(1).on({
		"tap":function(){
			window.location.href="send_coupon_info_z.html";
			return false;
		}
	});
	$(".my_shop_con_lists_box").find("li").eq(0).on({
		"tap":function(){
			$(".pop_cover_bg").show();
			$(".pay_apply_pop").show();

			return false;
		}
	});
	$(".pay_apply_cancel").on({
		"tap":function(){
			$(".pop_cover_bg").hide();
			$(".pay_apply_pop").hide();

			return false;
		}
	});
	$(".pay_apply_save").on({
		"tap":function(){
			$(".pop_cover_bg").hide();
			$(".pay_apply_pop").hide();
			window.location.href="zfqd_index.html";
			return false;
		}
	});
	$(".my_shop_con_lists_box").find("li").eq(1).on({
		"tap":function(){
			window.location.href="cwdz_index.html";
			return false;
		}
	});
	$(".my_shop_con_lists_box").find("li").eq(3).on({
		"tap":function(){
			window.location.href="zfqd_index.html";
			return false;
		}
	});
	$(".zfqd_click").on({
		"tap":function(){
			window.location.href="qr_code_payment_application.html";
			return false;
		}
	});
	$(".sucessed_clickan").on({
		"tap":function(){
			window.location.href="in_review.html";
			return false;
		}
	});
	$(".go_to_back_click").on({
		"tap":function(){
			window.location.href="my_shop.html";
			return false;
		}
	});
	$(".detailed_address_clicks").on({
		"tap":function(){
			window.location.href="detailed_address.html";
			return false;
		}
	});
	$(".data_more_click").on({
		"tap":function(){
			window.location.href="ewmsk_index.html";
			return false;
		}
	});
	$(".tab_select_clicks").find("li").eq(2).on({
		"tap":function(){
			window.location.href="bussiness_index.html";
			return false;
		}
	});
	$(".tab_select_clicks").find("li").eq(1).on({
		"tap":function(){
			window.location.href="bussiness_index_01.html";
			return false;
		}
	});
	$(".my_publish_click").on({
		"tap":function(){
			window.location.href="my_coupons.html";
			return false;
		}
	});

	


})







//交通   正式去掉  start












$(function(){

	//框架js start
	var search_heights = $("header").outerHeight(true);
	var footer_heights = $(".footers_list").outerHeight(true) 
	var WHS=$(window).outerHeight(true);
	$(".shop_center_main").css("height",WHS - search_heights - footer_heights)
	var heightsa = $(".footers_list").outerHeight(true) 
	console.log(heightsa)
	if(heightsa == 0 || heightsa == null || heightsa == undefined){
		$(".scroll_top").css("bottom","2rem")
	}else{
		$(".scroll_top").css("bottom",heightsa*1.4)
	}
	
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
	//登录密码验证
	$(".account_verifys_password").on({
		"blur":function(){
			if($(this).val().replace(/\s*/g,"") == ""){
				$(this).closest(".shop_center_main_con_box").find(".verify_tipss").removeClass("hide_verify_tip");
				$(this).closest(".shop_center_main_con_box").find(".verify_tipss").find("span").html("密码不能为空");
			}else if($(this).val().length<=6){
				$(this).closest(".shop_center_main_con_box").find(".verify_tipss").removeClass("hide_verify_tip");
				$(this).closest(".shop_center_main_con_box").find(".verify_tipss").find("span").html("密码格式不正确");
			}else{
				$(this).closest(".shop_center_main_con_box").find(".verify_tipss").addClass("hide_verify_tip");
			}
		}
	})

	$(".account_verifys , .account_verifys_password").on({
		"focus":function(){
			$(this).closest(".shop_center_main_con_box").find(".verify_tipss").addClass("hide_verify_tip");
		}
	})


	// 登录帐号验证js   end
	// 登录按钮
	$(".shop_center_main_con_item_r_input").on({
		"input":function(){
			var reg = true;
			$(".shop_center_main_con_item_r_input").each(function(){
				if($(this).val().replace(/\s*/g,"") == ""){
					reg = false;
					return false;
				}
			})
			if(reg){
				$(".no_selecteds").removeClass("no_selecteds")	
			}
			
		}
	})
	
	//查看密码 start
	$(".view_password_click").on({
		"tap":function(){
			if($(this).hasClass("passwords_yellow")){
				$(this).removeClass("passwords_yellow");
				$(this).closest(".shop_center_main_con_item_box").find(".shop_center_main_con_item_r").find("input").attr("type","password")
			}else{
				$(this).addClass("passwords_yellow");
				$(this).closest(".shop_center_main_con_item_box").find(".shop_center_main_con_item_r").find("input").attr("type","text")
			}
			return false;
		}
	})
	//查看密码 end
	
	//点击删除内容
	$(".del_con_click").on({
		"tap":function(){
			$(this).prev("input").val("");
			return false;
		}
	})

	// 使用时间段弹出框
  $(".time_quantum_click").on({
    "tap":function(){
      $(".time_quantum_pop,.pop_cover_bg").show();
      return false;
    }
  })
  $(".time_quantum_pop .times_selects_pop_item").on({
    "tap":function(){
      $(".time_quantum_click span").html($(this).find(".times_selects_pop_item_font").html());
      if($(this).find(".times_selects_pop_item_font").html()=="每天"){
      	$(".week_select_click").hide();
      	$(".day_select_click").show();
      	$(".dashed_class").addClass("info_item_box_dashed")
      	$(".dashed_class").closest(".send_coupon_info_item").removeClass("info_item_lefts")
      	$(".time_quantums_font_click").html("每天")
      }else if($(this).find(".times_selects_pop_item_font").html()=="每周"){
      	$(".week_select_click").show();
      	$(".day_select_click").show();
      	$(".dashed_class").addClass("info_item_box_dashed")
      	$(".dashed_class").closest(".send_coupon_info_item").removeClass("info_item_lefts")
      	$(".time_quantums_font_click").html("周一、二、三、四、五")
      }else{
      	$(".week_select_click").hide();
      	$(".day_select_click").hide();
      	$(".dashed_class").removeClass("info_item_box_dashed")
      	$(".dashed_class").closest(".send_coupon_info_item").addClass("info_item_lefts")
      }
      return false;
    }
  })
  $(".info_weeks_click li").on({
  	"tap":function(){
  		if($(".info_weeks_click li.on").length<=1 && $(this).hasClass("on")){
			
  		}else{
  			if($(this).hasClass("on")){
	  			$(this).removeClass("on")
	  		}else{
	  			$(this).addClass("on")
	  		}

	  		var weeks="周";
	  		
	  		$(".info_weeks_click li.on").each(function(){
	  			$(".time_quantums_font_click").html("")
	  			weeks+=$(this).html()+"、"
	  		})
	  		$(".time_quantums_font_click").html(weeks.substring(0,weeks.length-1))
  		}
  		
  		return false;
  	}
  })

  // 领取限制
  $(".get_limit_click").on({
    "tap":function(){
      $(".get_limit_pop,.pop_cover_bg").show();
      return false;
    }
  })
  $(".get_limit_pop .times_selects_pop_item").on({
    "tap":function(){
      $(".get_limit_click .send_coupon_info_item_cona_amount span").html($(this).find(".times_selects_pop_item_font").html())
      return false;
    }
  })

   // 商家类型
  $(".buss_limit_click").on({
    "tap":function(){
      $(".limits_quantum_pop,.pop_cover_bg").show();
      return false;
    }
  })
  $(".limits_quantum_pop .times_selects_pop_item").on({
    "tap":function(){
    	$(this).addClass("on").siblings().removeClass("on");
    	$(".limits_quantum_pop,.pop_cover_bg").hide();
        $(".buss_limit_click .business_certification_item_box_con input").val($(this).find(".times_selects_pop_item_font").html())
	    if($(this).find(".times_selects_pop_item_font").html() == "持证商家"){
	    	$(".account_limit_click").show();
	    	$(".buss_limit_click").closest(".business_certification_item").removeClass("certification_item_lefts")
	    }else{
	      	$(".account_limit_click").hide();
	      	$(".buss_limit_click").closest(".business_certification_item").addClass("certification_item_lefts")
	    }
        return false;
    }
  })
  // 账户类型
  $(".account_limit_click").on({
    "tap":function(){
      $(".accounts_quantum_pop,.pop_cover_bg").show();
      return false;
    }
  })
  $(".accounts_quantum_pop .times_selects_pop_item").on({
    "tap":function(){
    	$(this).addClass("on").siblings().removeClass("on");
    	$(".accounts_quantum_pop,.pop_cover_bg").hide();
        $(".account_limit_click .business_certification_item_box_con input").val($(this).find(".times_selects_pop_item_font").html())
	    
        return false;
    }
  })


  // 活动二维码
  $(".activity_qrcode_pop_click").on({
  	"tap":function(){
  		$(".activity_qrcode_pop,.pop_cover_bg").show();
  		return false;
  	}
  })
  $(".activity_qrcode_pop_close").on({
  	"tap":function(){
  		$(".activity_qrcode_pop,.pop_cover_bg").hide();
  		return false;
  	}
  })
  //面额输入框获取焦点去掉placeholder
  $(".input_placeholders").on({
  	"focus":function(){
  		$(this).removeAttr("placeholder")
  	}
  })
	$(".input_placeholders").on({
  	"blur":function(){
  		$(this).attr("placeholder","0")
  	}
  })

  

	  // 行业选择弹窗
	  $(".bank_nameas_click").on({
	    "tap":function(){
	      $(".bank_namess_pops,.pop_cover_bg").show();
	      $(".change_this").removeClass("change_this");
	      $(".change_this").removeClass("change_this");
	      $(this).addClass("change_this");
	      if($(this).hasClass("bank_nameas_click_02")){
	      	  $(".bank_namess_pops .area_select_pops_con_uls").show();
	          $(".bank_namess_pops .area_select_pops_con_uls").css("width","50%");
	      }else{
	      	  $(".bank_namess_pops .area_select_pops_con_uls:last").hide();
	          $(".bank_namess_pops .area_select_pops_con_uls").css("width","100%");
	      }
	     return false;
	    }
	  })



	  // 行业选择确认
	  $(".bank_saves_click,.bank_saves_click").on({
	    "tap":function(){

	      
	      if($(this).hasClass("edit_times")) return;
	      var htmls="";

	      if($(".biaoshi_click").is(":hidden")){
	          $(this).closest(".area_select_pops").find(".area_select_pops_con_uls:first").each(function(){
		        var ul=$(this).find("ul");
		        htmls+=$("li",ul).eq(-parseInt(ul.css("marginTop"))/ul.find("li").outerHeight(false)).html() + " ";
		      })
	        }else{
	        	$(this).closest(".area_select_pops").find(".area_select_pops_con_uls").each(function(){
			       var ul=$(this).find("ul");
			       htmls+=$("li",ul).eq(-parseInt(ul.css("marginTop"))/ul.find("li").outerHeight(false)).html() + " ";
			       console.log(htmls)
			    })
	        }

	      // $(this).closest(".area_select_pops").find(".area_select_pops_con_uls").each(function(){
	      //   var ul=$(this).find("ul");
	      //   htmls+=$("li",ul).eq(-parseInt(ul.css("marginTop"))/ul.find("li").outerHeight(false)).html() + " ";
	      // })
	      $(this).prev(".area_select_pops_title_con").find("input").blur();
	      $(".change_this h3 span").html(htmls);
	      $(".change_this h3 input").val(htmls);
	      $(".change_this").removeClass("change_this");
	      $(".area_time_select_pops,.area_select_pops,.pop_cover_bg").hide();
	      return false;
	    }
	  })
	   





  

//状态栏

$(".condition_clicks").on({
  "touchend":function(){
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
    	if($("#city").html()=="全国" && $(this).find("span:first").attr("data-name")=="区域"){
    		return false;
    	}
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
	      var str
	      if($(this).hasClass("class_name_two")){
	      	str = "_02"
	      }else if($(this).hasClass("class_name_three")){
	      	str = "_03"
	      }else if($(this).hasClass("class_name_one")){
	      	str = ""
	      }
	        //var str=$(this).hasClass("class_name_one")?"":"_02"
	      $(this).closest(".card_package_main_cons_title").addClass("pop_list_block"+str);
	      $(".popup_bg").show();
	      $(this).closest("ul").nextAll(".condition_clicks_list_divs").find(".condition_clicks_list"+str).show().addClass("card_package_main_touch");
	      $(".condition_clicks_list_divs").addClass("card_package_main_touch");
	      

    }
    
    $(".card_package_main_cons_title").removeAttr("style");
    relsize_condition();
    return false;
  }

},"li")


// 选择选项弹出层事件
 
$(".condition_clicks_list_divs ul").on({
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
    $(".card_package_main_cons_title").removeAttr("style");
    return false;
  }
},"li")

	//区域，人气，距离条件切换  end
	






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

function touchClass(){
	 $(".card_package_main").addClass("card_package_main_touch");
	 $(".condition_clicks_list_divs").removeClass("card_package_main_touch");
	 $(".card_package_main_cons_title").removeClass("pop_list_block pop_list_block_02 pop_list_block_03")
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
	    $(".card_package_main_cons_title").removeAttr("style");
	    $(".card_package_main_cons_title").removeClass("pop_list_block")
	    $(".condition_clicks_list_divs ul ,.popup_bg").hide();

	
}

function relsize_condition(){
	$(".card_package_main_cons_title").removeAttr("style");
	$(".card_package_main_cons_title").css({"max-height":"100%","height":"100%"});
	$(".condition_clicks_list_divs").each(function(){
		if(!$(this).find("ul").is(":hidden")){
			var h=$(this).find("ul").outerHeight(false)+$(".condition_clicks").outerHeight(false);
			var wh=$(".card_package_main_cons_title").outerHeight(false);
			h=h>wh*0.7?wh*0.7:h;
			$(".card_package_main_cons_title").css({
				"max-height":"auto",
				"height":h+"px"
			})
			return false;
		}
		
	})
}


//公共提示弹出框
function publicTip(context){
	$(".public_tip_popa,.pop_cover_bg").show();
	$(".public_tip_popa").find(".public_tips_pops_con span").html(context)
}
function publicTipClose(){
	$(".public_tip_popa,.pop_cover_bg").hide();
}



//区域弹出框滚动方法 start
function scroll_effect(obj){
	/*
	clickOpenNames   点击打开按钮
	clickCloseNames  点击关闭按钮
	clickSaveNames   点击保存按钮
	popDivAll		 包括整个div
	listDiv          每一列包含div


	 */

	$(obj.clickOpenNames).on({
		"tap":function(){
			$(".pop_cover_bg,.area_select_pops").show();
		}
	})
	$(obj.clickCloseNames).on({
		"tap":function(){
			$(".pop_cover_bg,.area_select_pops").hide();
		}
	})
	$(obj.clickSaveNames).on({
		"click":function(e){
			e.stopPropagation();
			//$(obj.clickOpenNames).html(cityHtml_01+" "+cityHtml_02+" "+cityHtml_03);
			//console.log(cityHtml_01 +" "+ cityHtml_02 +" "+ cityHtml_03)
			$(".pop_cover_bg,.area_select_pops").hide();
		}
	})

	var moveNum=0;
	var this_margTop=0;
	// var cityHtml_01=$(".area_select_pops_con_one li:first").html();
	// var cityHtml_02=$(".area_select_pops_con_two li:first").html();
	// var cityHtml_03=$(".area_select_pops_con_three li:first").html();
	$(obj.popDivAll).find("ul").css("marginTop",0);
	$(obj.popDivAll).on({
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
				var lens=$(this).find("li").length-1,
				liH=$(this).find("li").outerHeight(true),
				maxTop = parseInt($(this).find("ul").css("marginTop"));
				if(maxTop > 0){
					maxTop = 0;
				}else if(maxTop < -lens*liH){
					maxTop = -lens*liH
				}

				$(this).find("ul").css("marginTop",maxTop+"px");
				var _this=$(this).find("ul");
				var n=Math.round(parseFloat(_this.css("marginTop"))/liH);
				_this.css("marginTop",n*liH);

				var htmls="";
				$(".area_select_pops_con_uls ").each(function(){
					var _this=$(this).find("ul");
					var n=Math.round(parseFloat(_this.css("marginTop"))/liH);
					htmls+=$(this).find("li").eq(-n).html()
				})
				// var x=-n;

				// switch(_this.closest(obj.listDiv).index()){
				// 	case 0:
				// 		cityHtml_01=_this.find("li").eq(x).html();   //城市选择事件写这里
				// 	break;
				// 	case 1:
				// 		cityHtml_02=_this.find("li").eq(x).html();   //城市选择事件写这里
				// 	break;
				// 	case 2:
				// 		cityHtml_03=_this.find("li").eq(x).html();   //区域选择事件写这里。（区域选择貌似没有事件？
				// 	break;
				// }
		}
	},obj.listDiv);


}


////区域弹出框滚动方法 end




