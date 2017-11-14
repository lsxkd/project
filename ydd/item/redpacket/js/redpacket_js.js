// JavaScript Document
//蓝色星空岛  author


//交通     正式要去掉

$(".send_redpacket_click").live("click",function(){
	window.location.href="luck_put_redpacket.html";
})
$(".tiaozhuan_click").live("click",function(){
	window.location.href="open_redpacket.html";
})
$(".open_red_packet_click").live("click",function(){
	window.location.href="get_redpacket_details.html";
})
$(".receive_details_click").live("click",function(){
	window.location.href="receive_details.html";
})
$(".send_details_not_finish_click").live("click",function(){
	window.location.href="send_details_not_finish.html";
})


//交通     正式要去掉


//弹出框
function popShow(id){
	$(".redpacket_pop_layer").css("display","block")
	$("#"+id).css("display","block")
	$(".put_money_click").removeClass("allow_click");
}
function popHide(id){
	$(".redpacket_pop_layer").css("display","none")
	$("#"+id).css("display","none");
	$(".put_money_click").addClass("allow_click");
}



$(function(){
	// tab标签切换
		// 触发对象与操作对象添加相同的tabsName；
		$(".tab_sole:gt(0)",$(".tab_box")).hide();
		$("li:eq(0)",$(".tab_nav")).addClass("on").siblings().removeClass("on");
		$(".tab_nav li").live("touchend",function(){
			var tabsName=$(this).closest(".tab_nav").attr("tabsName"),num=$(this).index();
			$(this).addClass("on").siblings().removeClass("on");
			putMoneys();
			$(".tab_box[tabsName="+tabsName+"] .tab_sole").eq(num).show().siblings(".tab_sole").hide();
		});

	//密码键盘输入
	$(".password_keyboard_click li").live("touchend",function(){
		if($(this).hasClass("password_keyboard_click_empty")){
			$(".hidden_password_val").val("");
			$(".password_point li span").html("");
		}else if($(this).hasClass("password_keyboard_click_del")){
			$(".hidden_password_val").val($(".hidden_password_val").val().substring(0,$(".hidden_password_val").val().length-1));
			$(".password_point li").eq($(".hidden_password_val").val().length).find("span").html("")
		}else if($(".hidden_password_val").val().length>=6){
			return false;
		}else{
			$(".hidden_password_val").val($(".hidden_password_val").val()+$(this).html());			
		}
		//console.log($(".hidden_password_val").val())
		// 将存放密码的隐藏文本框的值依次添加到“密码输入框”
		var myArray=$(".hidden_password_val").val().split("");
		for(var i in myArray){
			$(".password_point li span").eq(i).html("●");
		}
		//此处做伪“回调”
		if($(".hidden_password_val").val().length==6){
			// 初始默认密码为123465
			if($(".hidden_password_val").val()==123456){
				window.location.href="put_redpacket_over.html"
			}else{
				popHide('password');
				popHide('keyboard');
				popShow('wrong_password_tips');
				$(".hidden_password_val").val("");
				$(".password_point li span").html("");
			}
		}
	})
	$(".close_click_a").live("touchend",function(){
		$(".hidden_password_val").val("");
		$(".password_point li span").html("");
	})
	
	$(".put_money_click").live("touchend",function(){
		$(".hidden_password_val").val("");
		$(".password_point li span").html("");
	})
	

	//标题长度限制
	$(".title_h2_span_em").each(function(){
		if($(this).html().length>6){
			//console.log($(".title_h2_span_em").html().length);
			$(this).addClass("length_limit")
	}
	})

	//红包金额只能输入数字和小数点，小数点只能输入一个，小数点后只能输入两位 start
	var keyCodes,   // 声明一个变量待用;
			  reg=/^0(\.\d{0,2})?$/,   //声明小于一的正则;
			  regx=/^[1-9]+\d*(\.\d{0,2})?$/,  //声明大于等于一的正则;
			  regz=/^0+\d+/,  //声明一个零开头接数字的正则;
			  keydown=true;  //声明一个布尔值;
		  $(".amount_of_validations").keydown(function(){
			 if(keydown==false) return false;   //阻止长按多次输入;
			 keydown=false;
			 keyCodes=$(this).val();   //提取当前值;
		  });
		  $(".amount_of_validations").keyup(function(e){
			keydown=true;
			if(regz.test($(this).val())) {   //若是零开头接数字的值;
			  $(this).val($(this).val().replace(/0/,""))  //清除零;
			};
			if(!(reg.test($(this).val())||regx.test($(this).val()))&&$(this).val()!=""){ //若输入不是正确格式,本次输入无效
			  $(this).val(keyCodes);
			}
		});
	//红包金额只能输入数字和小数点，小数点只能输入一个，小数点后只能输入两位 end		

	//红包个数只能输入正整数，并且大于零 start
	$(".redpacket_number_validations").keyup(function(e){
		if(e.keyCode==38||e.keyCode==39||e.keyCode==40||e.keyCode==37){}else{
			$(this).val($(this).val().replace(/[^\d]/g, ''))
			$(this).val($(this).val().replace(/^0*/, ''))
		};
	});
	//红包个数只能输入正整数，并且大于零 end
	//塞红包界面输入框改变来判断塞钱按钮能不能点击 start
	$(".nav_main_box_tab_item_c input").keyup(function(){
		putMoneys();
	})
	//塞红包界面输入框改变来判断塞钱按钮能不能点击 end
	
	$(".nav_main_box_tab_item_c input").keyup(function(){
		$(".nav_main_box_tab_item_c input",$(".nav_main_box_tab").eq($(".luck_put_redpacket_nav_ul .on").index())).each(function(){
			if($(this).val().replace(/\s*/g,"") == ""){
				
				$(".put_money_click").removeClass("allow_click")
				return false;
			}else{
				$(".put_money_click").addClass("allow_click")
			}			
		})
	})
	$(".allow_click").live("touchend",function(){
		t=setTimeout(function(){
			paymentShow('payments');
			inputMoney();
		},300)
		
	})
	
	$(".focus_clicks").live("focus",function(){
		_this = $(this)
		ts = setTimeout(function(){
			var thisVal = _this.val()
			_this.val("");
			_this.val(thisVal);
		},1)
	})
})
function inputMoney(){
	//密码输入界面的金额来自输入金额 start
	if($(".luck_put_redpacket_nav_ul .on").index()==0){
		$(".redpacket_input_money").html($(".amount_of_validations").eq($(".luck_put_redpacket_nav_ul .on").index()).val())
	}
	if($(".luck_put_redpacket_nav_ul .on").index()==1){
		$(".redpacket_input_money").html($(".common_redpackets_money").val()*$(".common_redpackets_sum").val())
	}

	

	//密码输入界面的金额来自输入金额 end
}
//塞红包界面输入框改变来判断塞钱按钮能不能点击 start
function putMoneys(){
	$(".nav_main_box_tab_item_c input",$(".nav_main_box_tab").eq($(".luck_put_redpacket_nav_ul .on").index())).each(function(){
			if($(this).val().replace(/\s*/g,"") == ""){
				
				$(".put_money_click").removeClass("allow_click")
				return false;
			}else{
				$(".put_money_click").addClass("allow_click")
			}			
		})
}
//塞红包界面输入框改变来判断塞钱按钮能不能点击 end

//选择支付方式弹出 start
function paymentShow(id){
	var paymentHight = $("#"+id).attr("heights")||$("#"+id).height();	
	//$(".redpacket_pop_layer").css("display","block")
	$("#"+id).css("display","block");
	$("#"+id).css("height","0px");
	$(".redpacket_pop_layer").fadeIn(500);
	$("#"+id).animate({"height":paymentHight},500,function(){
		$("#"+id).attr("heights",$("#"+id).outerHeight(false))
	})
}
function paymentHide(id){
	$(".redpacket_pop_layer").css("display","none")
	//$("#"+id).css("display","none")
	//$(".redpacket_pop_layer").fadeOut(100);
	$("#"+id).animate({"height":"0px"},100);

	//$(".select_checks_click").find(".pattern_of_payment_con_item_r").removeClass("checks");
}
//选择支付方式弹出 end
//选中支付方式加对号 start

$(function(){
	$(".select_checks_click").live("touchend",function(){
		if($(this).hasClass("gray_level")){
			return;
		}else{
			$(this).find(".pattern_of_payment_con_item_r").addClass("checks");
			$(this).siblings().find(".pattern_of_payment_con_item_r").removeClass("checks");
		}		
	});
	$(".members_select_click").live("touchend",function(){
		if($(this).hasClass("gray_level")){
			return;
		}else{
			tss=setTimeout(function(){
				paymentHide('payments');
				popShow('password');
				popShow('keyboard');
				inputMoney();
			},300)
		}	
	})
	$(".payments_selects_clicks").live("touchend",function(){
		tss=setTimeout(function(){
			popHide('password');
			popHide('keyboard');
			paymentShow('payments');
		},300)
	})
})
//选中支付方式加对号 end


















		

		