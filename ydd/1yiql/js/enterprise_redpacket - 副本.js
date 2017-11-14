var showId;
//弹出框显示方法 start
function mySwitch(id){
    $("#"+id).show();
    $('.Cover_layer').show();
    $("#"+id).find('.pop_layer_title').next().css('max-height',$(window).height() * 0.8 - 117)
	$("#"+id).find('.pop_layer_title').next().css({'min-height':"180" , 'overflow-y':'auto' , 'overflow-x':'hidden'})
	$("#"+id).find('.pop_layer_title').css('cursor','move')
    $("#"+id).css('left', ($(window).width()-($("#"+id).width()))/2)
    $("#"+id).css('top', $(window).height() / 2 - ($("#"+id).height() / 2));
    $("#"+id).css({
		'left': ($(window).width()-($("#"+id).outerWidth(false)))/2,
		'top': $(window).height() / 2 - ($("#"+id).outerHeight(false) / 2)
	})
     showId = id;
}
//弹出框显示方法 end
//弹出框隐藏方法 start
function myHide(id){
    $("#"+id).hide();
    $('.Cover_layer').hide();
}
$(window).resize(function(){
	$("#"+showId).find('.pop_layer_title').next().css('max-height',$(window).height() * 0.8 - 117);
	$("#"+showId).find('.pop_layer_title').next().css({'min-height':"180" , 'overflow-y':'auto' , 'overflow-x':'hidden'})
	$("#"+showId).find('.pop_layer_title').css('cursor','move')
	$("#"+showId).css({
		'left': ($(window).width()-($("#"+showId).outerWidth(false)))/2,
		'top': $(window).height() / 2 - ($("#"+showId).outerHeight(false) / 2)
	})
})
//弹出框隐藏方法 end

// 拖动DIV end
	function isMove(obj,object){
		$(obj).mousedown(function (event) { 
			var objects=$(this).closest(object);
			var lefts=objects.offset().left;     //获取元素距离文档左边边位置
			var tops=objects.offset().top;		//获取元素距离文档顶部的位置
			var isMove = true; 					//设置一个布尔值参考值
			var abs_x = event.pageX;			//获取鼠标离文档左边的位置
			var abs_y =event.pageY;				//获取鼠标离文档顶部的位置	
			$(document).mousemove(function (e) {  //鼠标移动事件
				if (isMove) {					// 若布尔值为真
					abs_X=abs_x-e.pageX;		//计算鼠标X坐标移动距离
					abs_Y=abs_y-e.pageY;		//计算鼠标Y坐标移动距离
					objects.css({'left':lefts-abs_X-$(document).scrollLeft() +"px", 'top':tops-abs_Y-$(document).scrollTop()+"px","margin":0});   //元素本身位置加上鼠标移动距离
				} 
			}).mouseup(function () {     //鼠标松开时
				isMove = false; 		//布尔值为假；不可拖动；
			}); 
		}); 
	};
// 拖动DIV  end


$(function(){
	//弹出框位置 start
	$(".Pop_layer").css('left', ($(window).width()-($(".Pop_layer").width()))/2);
    $(".Pop_layer").css('top', $(window).height() / 2 - ($(".Pop_layer").height() / 2));
    isMove(".pop_layer_title",".Pop_layer");	
    //弹出框位置 start
    
    //包红包js start
    
    $(".type_radios_click input").live("change",function(){
    	var redpacket_types=$("input:radio[name='redpacket_type']:checked").val();
    	var money_types=$("input:radio[name='money_type']:checked").val();
    	if(redpacket_types == 1 && money_types == 1){
    		$(".pop_item_box .pop_item_class").removeClass("classs_show");
    		$(".pop_item_box .pop_item_class").eq(0).addClass("classs_show");
    	}else if(redpacket_types == 1 && money_types == 2){
    		$(".pop_item_box .pop_item_class").removeClass("classs_show");
    		$(".pop_item_box .pop_item_class").eq(1).addClass("classs_show");
    	}else if(redpacket_types == 2 && money_types == 1){
    		$(".pop_item_box .pop_item_class").removeClass("classs_show");
    		$(".pop_item_box .pop_item_class").eq(2).addClass("classs_show");
    	}else if(redpacket_types == 2 && money_types == 2){
    		$(".pop_item_box .pop_item_class").removeClass("classs_show");
    		$(".pop_item_box .pop_item_class").eq(3).addClass("classs_show");
    	}
    })
    
    //创建活动  增加类型js start
	$(".bodys_id").on("click",".type_add_id",function(){
		$(this).closest(".items_id").before($(this).closest(".items_id").clone(false));
		$(this).closest(".items_id").find("input").val("");
		$(this).closest(".items_id").find("input").removeClass("info_borders_red")
	});

	$(".type_del_id",$(".bodys_id")).live("click",function(){
		var obj=$(this).closest(".bodys_id");
		if($(this).closest(".bodys_id").children(".items_id").length > 1){
			$(this).closest(".items_id").remove(false);	
		}
		
	});
	//创建活动  增加类型js end
    
	//验证 start
	//红包名称验证

	$('.redpacket_name_verify').focus(function(){
		if($(this).closest("span").next("span").hasClass("item_tips_reds")){
			$(this).closest("span").next("span").removeClass("item_tips_reds");
		}
			
		if($(this).closest("span").next("span").val()== "请输入会员名"){
			$(this).closest("span").next("span").val("");
		}
	});
	$(".amount_of_charge").live("focus",function(){
		if($(this).hasClass("info_borders_red")){
			$(this).removeClass("info_borders_red");
		}	
		if($(this).val()== "输入框不能为空"){
			$(this).val("");
		}
	});
	
	

	//充值金额只能输入数字和小数点，小数点只能输入一个，小数点后只能输入两位 start
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
	  $(".amount_of_charge").live("blur",function(){
	  	if($(this).val() == ""){
	  		$(this).val(0);
	  	}
	  	$(this).val(parseFloat($(this).val()).toFixed(2))
	  })
	//充值金额只能输入数字和小数点，小数点只能输入一个，小数点后只能输入两位 end

	//对金额区间按照第一个数值从小到大进行排列  start
       $(".bodys_id").on({
        "blur":function(){
          var inputList=$(this).closest(".items_id").siblings(".items_id");
          var inputs=$(this).closest(".items_id");
          var ergodic=true;
          inputList.each(function(){
            if(ergodic==false) return;
            if(parseInt($(this).find("input:first").val())==parseInt(inputs.find("input:first").val())){
              inputs.find("input:first").val("");
              alert("重复");
              return;
            }
			if($(this).find("input:first").val()==""){
              $(this).remove();

            }
            if(parseInt($(this).find("input:first").val())>parseInt(inputs.find("input:first").val())){
              $(this).before(inputs);
              ergodic=false;
            }
			
          })

        }
		
      },".redpacketInput,.next_input,.give_money") 
	//对金额区间按照第一个数值从小到大进行排列  end
	//判断第一个值小于第二个值
	
	



	$(".save_verify_click").live("click",function(){
		var re = /^[\u4e00-\u9fa5a-z\d]*$/gi;//只能输入汉字和英文字母
		$(this).closest(".Pop_layer_box").find(".redpacket_name_verify").val($(".redpacket_name_verify").val().replace(/\s*/g,""));
		if($(this).closest(".Pop_layer_box").find(".redpacket_name_verify").val().replace(/\s*/g,"")==""){
			$(this).closest(".Pop_layer_box").find(".redpacket_name_verify").closest("span").next("span").addClass("item_tips_reds");
		}else{
			if(re.test($(this).closest(".Pop_layer_box").find(".redpacket_name_verify").val())){
			}else{
				$(this).closest(".Pop_layer_box").find(".redpacket_name_verify").closest("span").next("span").addClass("item_tips_reds").html("请输入正确的格式");
			}
		};
		$(this).closest(".Pop_layer_box").find(".classs_show").find("input").each(function(){
			if($(this).val()==""){
				$(this).addClass("info_borders_red")
				$(this).val("输入框不能为空");
			}	
		})
		if($(".numberOnes",$(".classs_show")).val() >= $(".numberTwos",$(".classs_show")).val()){
			$(".numberOnes",$(".classs_show")).addClass("info_borders_red");
			$(".numberTwos",$(".classs_show")).addClass("info_borders_red");
		}
	})
	//验证 end


//红包统计界面js
$(".open_details_click").live("click",function(e){
	if($(this).closest("tr").next("tr").find(".tables_show").length==1&&$(".tables_show").length==1){
		$(".tables_show").fadeToggle(0);
	}else{
		$(".tables_show").hide();
		$(".redpacket_stats_list_con_tabletwo").removeClass("tables_show");
		$(this).closest("tr").next("tr").find(".redpacket_stats_list_con_tabletwo").addClass("tables_show");
		$(this).closest("tr").next("tr").find(".tables_show").fadeToggle(0);
	}
	if($(this).html()=="查看更多明细"){
		$(".open_details_click").html("查看更多明细");
		$(this).html("收起记录");
	}else{
		$(this).html("查看更多明细");
	}
})

//创建活动验证js

$(".activity_title_inputs_verify").live("focus",function(){
	if($(this).closest("span").next("span").hasClass("item_tips_reds")){
		$(this).closest("span").next("span").removeClass("item_tips_reds");
	}	
})

//时间段选择js
$(".time_quantum_click input").live("change",function(){
	var time_quantum_types=$("input:radio[name='timeLimit']:checked").val();
	if(time_quantum_types==1){
		$(this).closest(".create_activity_redpacket_con_item").next(".create_activity_redpacket_con_item").hide();
	}else if(time_quantum_types==2){
		$(this).closest(".create_activity_redpacket_con_item").next(".create_activity_redpacket_con_item").show();
	}
})
//个数  js

$(".number_limit_checkbox").live("change",function(){
	if($(this).attr("checked") == "checked"){
		$(".number_limit_input").val(0)
		console.log($(".number_limit_input").val())
		$(".number_limit_input").closest("span").hide();
		$(".number_limit_input").closest("span").next("span").hide();
		$(".number_limit_input").closest(".create_activity_redpacket_con_item_c").next("span").removeClass("item_tips_reds")
	}else{
		$(".number_limit_input").val("")
		$(".number_limit_input").closest("span").show();
		$(".number_limit_input").closest("span").next("span").show();
	}
})
$(".number_limit_input").live("focus",function(){
	if($(this).closest(".create_activity_redpacket_con_item_c").next("span").hasClass("item_tips_reds")){
		$(this).closest(".create_activity_redpacket_con_item_c").next("span").removeClass("item_tips_reds");
	}	
})




})
function saveRedpacketBtn(obj){
	var re = /^[\u4e00-\u9fa5a-z\d]*$/gi;//只能输入汉字和英文字母
	$(obj).closest(".Pop_layer_box").find(".redpacket_name_verify").val($(".redpacket_name_verify").val().replace(/\s*/g,""));
	if($(obj).closest(".Pop_layer_box").find(".redpacket_name_verify").val().replace(/\s*/g,"")==""){
		$(obj).closest(".Pop_layer_box").find(".redpacket_name_verify").closest("span").next("span").addClass("item_tips_reds");
	}else{
		if(re.test($(obj).closest(".Pop_layer_box").find(".redpacket_name_verify").val())){
		}else{
			$(obj).closest(".Pop_layer_box").find(".redpacket_name_verify").closest("span").next("span").addClass("item_tips_reds").html("请输入正确的格式");
		}
	};
	$(obj).closest(".Pop_layer_box").find(".classs_show").find("input").each(function(){
		if($(obj).val()==""){
			$(obj).addClass("info_borders_red")
			$(obj).val("输入框不能为空");
		}	
	})
	if($(".numberOnes",$(".classs_show")).val() >= $(".numberTwos",$(".classs_show")).val()){
		$(".numberOnes",$(".classs_show")).addClass("info_borders_red");
		$(".numberTwos",$(".classs_show")).addClass("info_borders_red");
	}
}

function saveActivitysBtn(obj){

	var re = /^[\u4e00-\u9fa5a-z\d]*$/gi;//只能输入汉字和英文字母
	var names=$(obj).closest(".create_activity_redpacket_btn").prev(".create_activity_redpacket_con").find(".activity_title_inputs_verify");
	names.val(names.val().replace(/\s*/g,""));
	if(names.val().replace(/\s*/g,"")==""){
		names.closest("span").next("span").addClass("item_tips_reds").html("请输入活动名称");
	}else{
		if(re.test(names.val())){
		}else{
			names.closest("span").next("span").addClass("item_tips_reds").html("请输入正确的格式");
		}
	};
	//个数验证  js
	if($(".number_limit_checkbox").attr("checked") == "checked"){

	}else{
		var res = /^\+?[1-9][0-9]*$/ //只能输入大于0 的正整数；
		var numbersNname=$(obj).closest(".create_activity_redpacket_btn").prev(".create_activity_redpacket_con").find(".number_limit_input_verify");
		if(numbersNname.val().replace(/\s*/g,"")==""){
			numbersNname.closest(".create_activity_redpacket_con_item_c").next("span").addClass("item_tips_reds").html("请输入个数");
		}else{
			if(res.test(numbersNname.val())){
				numbersNname.closest(".create_activity_redpacket_con_item_c").next("span").removeClass("item_tips_reds")
			}else{
				numbersNname.closest(".create_activity_redpacket_con_item_c").next("span").addClass("item_tips_reds").html("请输入大于0的正整数");
			}
		}
	}	

}


