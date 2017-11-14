$(function(){


// 商家详情  start
  // 内容编辑/保存
  $(".business_detailss_main_title_r").on({
    "tap":function(){
      if($(this).hasClass("edit")){
        $(this).html("编辑");
        $(".items_edits_pop").hide();
        $(this).removeClass("edit");
      }else{
        $(this).html("保存");
        $(".items_edits_pop").show();
        $(this).addClass("edit");
      }
      return false;
    }
  })
　// 添加文字
  $(".add_fontss").on({
    "tap":function(){
      $(".business_height_detail,.pop_cover_bg").show();
      $(".business_height_detail .business_names_pop_deail_con textarea").val("")
      return false;
    }
  })

  // 修改文字
  $(".shop_center_main").on({
    "tap":function(){
      if($(this).closest(".business_detailss_main_con_item ").find("img").length>0){


      }else{
        $(this).closest(".business_detailss_main_con_item").addClass("edit_this");
        $(".business_height_detail,.pop_cover_bg").show();
        $(".business_names_pop_deail_con textarea").val($(this).closest(".items_edits_pop").next("p").html());
        return false;
      }
      
    }
  },".items_edits_pop_r_edit")


  // 修改确认/、添加文字
  $(".business_names_pop_btns_save").on({
    "tap":function(){
      if($(".edit_this").length>0){
        $(".edit_this").find("p").html($(".business_names_pop_deail_con").html());
        $(".business_height_detail").hide();
        $("edit_this").removeClass(".edit_this");
      }else{
        $(".business_detailss_main_con").append(`<div class="business_detailss_main_con_item">
					<div class="items_edits_pop">
						<div class="items_edits_pop_l">
							<span class="items_edits_pop_l_top"></span>
							<span class="items_edits_pop_l_bottom"></span>
						</div>
						<div class="items_edits_pop_r">
							<span class="items_edits_pop_r_edit"></span>
							<span class="items_edits_pop_r_del"></span>
						</div>
					</div>
					<p>${$(".business_names_pop_deail_con textarea").val()}</p>
				</div>`);
        $(".business_height_detail").hide();
      }

      $(".change_this").removeClass(".change_this")
      return false;
    }
  })
  // 取消修改
  $(".business_names_pop_btns_cancel").on({
    "tap":function(){
      $(".business_height_detail").hide();
      $(".edit_this").removeClass(".edit_this");
      return false;
    }
  })
  // 添加/修改文字弹出层阻击冒泡
  $(".business_height_detail").on({
    "touchmove":function(e){
      e.stopPropagation();
    }　
  })
  // 交换位置
  // 下移
  $(".shop_center_main").on({
    "tap":function(){
      $(this).closest(".business_detailss_main_con_item").after($(this).closest(".business_detailss_main_con_item").prev());
      return false;
    }
  },".items_edits_pop_l_top")
  // 上移
  $(".shop_center_main").on({
    "tap":function(){
      $(this).closest(".business_detailss_main_con_item").before($(this).closest(".business_detailss_main_con_item").next());
        return false;
    }
  },".items_edits_pop_l_bottom")
// 商家详情  end



// 商家认证  start
  // 有效期类型
  $(".times_period,.time_type_period").on({
    "tap":function(){
      $(".change_this").removeClass("change_this");
      $(".change_this").removeClass("change_this");$(this).addClass("change_this");
      $(".period_selects_pop,.pop_cover_bg").show();
    }
  })


  $

  // 企业类型
  $(".type_merchant").on({
    "tap":function(){
      $(".type_selects_pop,.pop_cover_bg").show();
    }
  })
  $(".type_selects_pop .times_selects_pop_item").on({
    "tap":function(){
      $(".type_merchant input").val($(this).find(".times_selects_pop_item_font").html())
    }
  })

  // 有效期
  $(".time_period").on({
    "tap":function(){
      $(".change_this").removeClass("change_this");
      $(".change_this").removeClass("change_this");$(this).addClass("change_this");
      $(".period_time_pop,.pop_cover_bg").show();
    }
  })
  $(".period_selects_pop .times_selects_pop_item").on({
    "tap":function(){
      $(".change_this input").val($(this).find(".times_selects_pop_item_font").html());
      if($(this).find(".times_selects_pop_item_font").html().replace(/\s/g,"") == "永久有效"){
        $(".change_this").closest(".business_certification_item").next(".business_certification_item").hide()
      }else{
        $(".change_this").closest(".business_certification_item").next(".business_certification_item").show()
      }
    }
  })



  // 企业类型切换
  $(".times_selects_pop_item").on({
    "tap":function(){
      $(this).addClass("on").siblings().removeClass("on");
      $(".times_selects_pop,.pop_cover_bg").hide();
      return false;
    }
  })

  // 关闭日期选择
  $(".times_selects_pop_closes").on({
    "tap":function(){
      $(".times_selects_pop,.pop_cover_bg").hide();
      return false;
    }
  })

  // 取消时间选择
  $(".area_select_reset").on({
    "tap":function(e){
      e.stopPropagation();
      $(this).closest(".area_select_pops").hide();
      return false;
    }
  })

  // 确认时间选择
  $(".times_selects_pop .area_select_pops_title_save").on({
    "tap":function(){
      if(!$(this).hasClass("edit_times")) return;
      var this_day="";
      $(".area_select_pops_con_uls").each(function(){
        var ul=$(this).find("ul");
        this_day+=$("li",ul).eq(parseInt(ul.css("marginTop"))/$("li",ul).outerHeight(false)).html();
      })
      $(".change_this input").val(this_day);
      $(".period_time_pop,.pop_cover_bg").hide();
      return false;
    }
  })

  // 年
  $(".times_selects_pop .area_select_pops_con_one").on({
    "touchend":function(){
      var ul=$(this).find("ul");
      $(this).closest(".main_box_all").find(".ul_two").css("marginTop",0);
      setTimeout(function(){

      },100)
    }
  })
  // 月
  $(".times_selects_pop .area_select_pops_con_two").on({
    "touchend":function(){
      $(this).closest(".main_box_all").find(".ul_threes").css("marginTop",0);
      var ul=$(this).find("ul");
      setTimeout(function(){
        var num=parseInt($("li",ul).eq(-parseInt(ul.css("marginTop"))/$("li",ul).outerHeight(false)).html().replace(/\D/g,""));
        var day_num;
        // 判断当月天数;
        switch(num){
          case 1:
          case 3:
          case 5:
          case 7:
          case 8:
          case 10:
          case 12:
            day_num=31;
            break;
          case 4:
          case 6:
          case 9:
          case 11:
            day_num=30;
            break;
          case 2:
            var that=$(".times_selects_pop .ul_one");
            var years=$("li",that).eq(that.css("marginTop")/$("li",that).outerHeight(false)).html();
            if(years%4==0 && years%100!=0){
              day_num = 29;
            }else{
              day_num = 28
            }
            break;
          default:
            break;
        }

        // 循环输出当前天数到指定区域;
        var three_html="";
        for(var i=1;i<=day_num;i++){
          var days=i<10?"0"+i:i;
          three_html+="<li>"+days+"日</li>";
        }

        $(".times_selects_pop .ul_threes").html(three_html);
      },100)

      // 清空日
      $(".times_selects_pop .ul_three").html("");

    }

  })


// 商家认证 end


// 商家认证二 start
  $(".info_item_edit").on({
    "tap":function(){
      $(".change_this").removeClass("change_this");
      $(".change_this").removeClass("change_this");$(this).addClass("change_this");
      $(".business_names_pop,.pop_cover_bg").show();

      $(".business_names_pop .business_names_pop_con input").val($(this).find("h3").find("span").html())
      $(".business_names_pop .business_names_pop_title span").html($(this).siblings(".business_info_item_box_title").find("span").html())
       $(".business_names_pop .business_names_pop_con input").focus();
    }
  })

  // 取消修改
  $(".business_names_pop_btns_cancel").on({
    "tap":function(){
      $(".business_names_pop,.pop_cover_bg").hide()
    }
  })

  // 确认修改
  $(".business_names_pop_btns_save").on({
    "tap":function(){
      $(".change_this span").html($(this).closest(".business_names_pop_box").find("input").val());
      $(".business_names_pop,.pop_cover_bg").hide();
      return false;
    }
  })


  // 行业选择弹窗
  $(".trade_pop,.area_show_selects").on({
    "tap":function(){
      $(".area_time_select_pops,.pop_cover_bg").show();
      $(".change_this").removeClass("change_this");
      $(".change_this").removeClass("change_this");$(this).addClass("change_this");
    }
  })



  // 行业选择确认
  $(".area_select_pops_title_save,.area_select_pops_title_save").on({
    "tap":function(){
      if($(this).hasClass("edit_times")) return;
      var htmls="";
      $(this).closest(".area_select_pops").find(".area_select_pops_con_uls").each(function(){
        var ul=$(this).find("ul");
        htmls+=$("li",ul).eq(-parseInt(ul.css("marginTop"))/ul.find("li").outerHeight(false)).html() + " ";
      })
      $(this).prev(".area_select_pops_title_con").find("input").blur();
      $(".change_this h3 span").html(htmls);
      $(".change_this h3 input").val(htmls);
      $(".change_this").removeClass("change_this");
      $(".area_time_select_pops,.area_select_pops,.pop_cover_bg").hide();
      return false;
    }
  })
// 商家认证二 end



// 发券 start
  $(".button_switch_y,.button_switch_g").on({
    "tap":function(){
      $(this).toggleClass("button_switch_y button_switch_g");
      if($(this).hasClass("button_switch_y")){
        $(this).closest(".send_coupon_info_item").next().show()
        $(this).closest(".send_coupon_info_item_box").addClass("info_item_box_dashed")
      }else{
        $(this).closest(".send_coupon_info_item").next().hide()
         $(this).closest(".send_coupon_info_item_box").removeClass("info_item_box_dashed")
      }
      return false;
    }
  })


  // 设置券有效期
  $(".coupon_time,.time_other_bts").on({
    "tap":function(){
     $(".change_this").removeClass("change_this");
     $(this).addClass("change_this");
      var vals=$(".change_this span").html().replace(/\s/g,"").split("至")[0].split(/\D/);
      if(vals[0] == ""){
        
      }else{
        var sss = $(".ul_ones li:contains("+vals[0]+)")".index()
         console.log(vals[0])
      }
       
     
      if($(this).hasClass("coupon_time")){
        $(".coupon_time_pops .main_box_all .area_select_pops_con_uls:last").show();
        $(".coupon_time_pops .main_box_all .area_select_pops_con_uls").removeAttr("style");

        var htmls="";
        for(var i=0,n=1990;i<50;i++){
          htmls+="<li>"+parseInt(i+n)+"年</li>"
        }
        $(".ul_ones").html(htmls);
        var htmls="";
        for(var i=1;i<13;i++){
          var n=i<10?"0"+i:i;
          htmls+="<li>"+n+"月</li>"
        }
        $(".ul_twos").html(htmls);
        var htmls="";
        for(var i=1;i<31;i++){
          var n=i<10?"0"+i:i;
          htmls+="<li>"+n+"日</li>"
        }
        $(".ul_threes").html(htmls);

      }else{
        $(".coupon_time_pops .main_box_all .area_select_pops_con_uls:last").hide();
        $(".coupon_time_pops .main_box_all .area_select_pops_con_uls").css("width","50%");
        var htmls="";
        for(var i=0;i<24;i++){
          var n=i<10?"0"+i:i;
          htmls+="<li>"+n+"</li>"
        }
        $(".ul_ones").html(htmls);
        var htmls="";
        for(var i=0;i<60;i++){
          var n=i<10?"0"+i:i;
          htmls+="<li>"+n+"</li>"
        }
        $(".ul_twos").html(htmls);
      }
      $(".coupon_time_pops,.pop_cover_bg").show();
      $(".area_select_pops_title_save").removeClass("edit_times_over edit_times")
     
      
      $(".area_select_pops_title_save").addClass("edit_times");
      $(".coupon_time_pops .next_steps").html("开始时间")
      $(".coupon_time_pops .area_select_pops_title_save span").html("下一步");
      return false;
    }
  })


  // 下一步
  $(".area_select_pops").on({
    "tap":function(){
      if($(this).hasClass("edit_times_over")) return;
      all_html($(this).closest(".coupon_time_pops"));
      $(this).addClass("edit_times_over");
      $(".coupon_time_pops .next_steps").html("结束时间")
      $(".coupon_time_pops .area_select_pops_title_save span").html("保存");
      return false;
    }
  },".edit_times")


  // 保存时间段
  $(".area_select_pops").on({
    "tap":function(){
      if(!all_html($(this).closest(".coupon_time_pops"),true)){
        alert("结束时间不能早于开始时间");
      }else{
        var obj=$(this).closest(".coupon_time_pops");
        var start=obj.attr("startTime");
        var end=all_html($(this).closest(".coupon_time_pops"),true);

        if($(".ul_threes").is(":hidden")){
          $(".change_this span").html(start.substring(0,start.length-1)+"至"+end.substring(0,start.length-1));
          $(".change_this span").css("color","#666666")
        }else{
          $(".change_this span").html(start.substring(0,start.length-1)+"至"+end.substring(0,end.length-1).replace(/\D/g,"-"));
          $(".change_this span").css("color","#666666")
        }

        $(".area_select_pops,.pop_cover_bg").hide();
        $(".area_select_pops_title_save").removeClass("edit_times_over edit_times")
      }
      return false;
    }
  },".edit_times_over")


  // 取消设置
  $(".area_select_pops_title_cancle").on({
    "tap":function(){
      $(this).closest(".area_select_pops").find(".area_select_pops_title_save").removeClass("edit_times_over edit_times")
    }
  })

// 发券 end


// 二维码收款申请 start
  $(".con_item_add_boxs_fonts").on({
    "tap":function(){
      if($(this).hasClass("view_bank")){
        if(!$(".deal_download_succeed_pop").is(":hidden")) return false;
        $(".deals_pops,.pop_cover_bg").show();
      }else{
        $(".preview_pops,.pop_cover_bg").show();
        var src=$("h2 img",$(this).closest(".certification_next_con_item_box")).attr("src");
        $(".preview_pops .preview_pops_cons img").attr("src",src)
      }
      return false;
    }
  })


  $(".preview_pops_close,.deals_pops_close").on({
      "tap":function(){
        $(".preview_pops,.deals_pops,.pop_cover_bg").hide();
        return false;
      }
  })


  $(".deals_pops_cons_btns_box").on({
    "tap":function(){
      var that=$(this).find("a");
      that.html("正在下载...")
      setTimeout(function(){
        $(".deals_pops,.deal_download_succeed_pop,.pop_cover_bg").hide();
        that.html("下载最后一页")
        $(".deal_download_succeed_pop").show()
        setTimeout(function(){
          $(".deal_download_succeed_pop,.pop_cover_bg").hide()
        },3000)
      },1000)


      return false;
    }
  })


// 二维码收款申请 end












  $(".switchover_clicks").on({
    "tap":function(){
      $(".switchover_cons").stop(false,false).slideToggle();
      return false
    }
  })

})



// 取值
function all_html(obj,clac){
  var htmls="";
  obj.find(".area_select_pops_con_uls").each(function(){
    if($(this).is(":hidden")) return true;
    var ul=$(this).find("ul");

    if($(".ul_threes").is(":hidden")){
      htmls+=$("li",ul).eq(-parseInt(ul.css("marginTop"))/$("li",ul).outerHeight(false)).html()+":";
    }else{
      htmls+=$("li",ul).eq(-parseInt(ul.css("marginTop"))/$("li",ul).outerHeight(false)).html();
    }


  })
  if(clac) {
    if(obj.attr("startTime").replace(/\D/g,"")>htmls.replace(/\D/g,""))  return false;
    return htmls;
  }else{
    if($(".ul_threes").is(":hidden")){
      obj.attr("startTime",htmls.replace(/\D/g,":"));
    }else{
      obj.attr("startTime",htmls.replace(/\D/g,"-"));
    }

  }
}
