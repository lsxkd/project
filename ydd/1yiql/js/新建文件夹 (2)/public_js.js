// JavaScript Document



//弹出层调出js  start
	$(function(){
	

		$(".click_open_id").live("click",function(){
			$(".Pop_layer").css("display","none");
			var popName=$(this).attr("popName");
			$(".Cover_layer").css("display","block");
			
			$(".Pop_layer[popName="+popName+"]").css("display","block");
			
			
			$('.pop_layer_title').next().css('max-height',$(window).height() * 0.8 - 117)
			$('.pop_layer_title').next().css({'min-height':"180" , 'overflow-y':'auto' , 'overflow-x':'hidden'})
			$('.pop_layer_title').css('cursor','move')
			$(".Pop_layer[popName="+popName+"]").css({
				'left': ($(window).width()-($(".Pop_layer[popName="+popName+"]").outerWidth(false)))/2,
				'top': $(window).height() / 2 - ($(".Pop_layer[popName="+popName+"]").outerHeight(false) / 2)
			})
		
		isMove($(".pop_layer_title"),$(".Pop_layer[popName="+popName+"]"));	
		});
		$(".click_close_id").live("click",function(){
			$(".Cover_layer").css("display","none");
			$(".Pop_layer").css("display","none");
		
		});
		
	});

	$(window).resize(function(){
		var popName;
		$(".Pop_layer").each(function(){
			if($(this).css("display")=="block"){
				popName=$(this).attr("popName");
			}
		})
		$('.pop_layer_title').next().css('max-height',$(window).height() * 0.8 - 117)
				$('.pop_layer_title').next().css({'min-height':"180" , 'overflow-y':'auto' , 'overflow-x':'hidden'})
				$('.pop_layer_title').css('cursor','move')
				$(".Pop_layer[popName="+popName+"]").css({
					'left': ($(window).width()-($(".Pop_layer[popName="+popName+"]").outerWidth(false)))/2,
					'top': $(window).height() / 2 - ($(".Pop_layer[popName="+popName+"]").outerHeight(false) / 2)
				})
			
	});
//弹出层调出js  end


// 拖动DIV end
	function isMove(obj,object){
		obj.mousedown(function (event) { 
			var lefts=object.offset().left;     //获取元素距离文档左边边位置
			var tops=object.offset().top;		//获取元素距离文档顶部的位置
			var isMove = true; 					//设置一个布尔值参考值
			var abs_x = event.pageX;			//获取鼠标离文档左边的位置
			var abs_y =event.pageY;				//获取鼠标离文档顶部的位置	
			$(document).mousemove(function (e) {  //鼠标移动事件
				if (isMove) {					// 若布尔值为真
					abs_X=abs_x-e.pageX;		//计算鼠标X坐标移动距离
					abs_Y=abs_y-e.pageY;		//计算鼠标Y坐标移动距离
					object.css({'left':lefts-abs_X-$(document).scrollLeft() +"px", 'top':tops-abs_Y-$(document).scrollTop()+"px"});   //元素本身位置加上鼠标移动距离
				} 
			}).mouseup(function () {     //鼠标松开时
				isMove = false; 		//布尔值为假；不可拖动；
			}); 
		}); 
	};

// 拖动DIV  end


	$(function(){
		//tab切换样式变换
		$(".member_create_coad_item").click(function() {
				$(this).addClass("member_create_coad_item_select").siblings().removeClass("member_create_coad_item_select");
		});

		// tab标签切换
		// 触发对象与操作对象添加相同的tabsName；
		$(".tab_sole:gt(0)",$(".tab_box")).hide();
		$("li:eq(0)",$(".tab_nav")).addClass("on").siblings().removeClass("on");
		$(".tab_nav li").click(function(){
			var tabsName=$(this).closest(".tab_nav").attr("tabsName"),num=$(this).index();
			$(this).addClass("on").siblings().removeClass("on");
			$(".tab_box[tabsName="+tabsName+"] .tab_sole").eq(num).show().siblings(".tab_sole").hide();
		});


		//表格全选  start
		$(".member_list_con_td_t  input").click(function(){
			if($(this).attr("checked") == "checked"){    //读取所有name为'chk_list'对象的状态（是否选中）
				$(".member_list_con_td input").attr("checked",true);      //设置所有name为'chk_list'对象的checked为true
			}else{
				$(".member_list_con_td input").attr("checked",false);      //设置所有name为'chk_list'对象的checked为false
				}
		});
		
		//如果全部选中勾上全选框，全部选中状态时取消了其中一个则取消全选框的选中状态 
		$(".member_list_con_td input").click(function () { 
			if ($(".member_list_con_td input:checked",$(this).closest(".member_list_con_table")).length == $(".member_list_con_td input",$(this).closest(".member_list_con_table")).length) { 
				$(".member_list_con_td_t  input",$(this).closest(".member_list_con_table")).attr("checked", "checked"); 
			}else {$(".member_list_con_td_t  input",$(this).closest(".member_list_con_table")).removeAttr("checked")}; 
		}); 

		//表格全选  end

	
		//创建活动  增加类型js start
		$(".add_id").click(function(){
			$(this).closest(".item_id").before($(this).closest(".item_id").clone(false));
			$(this).closest(".item_id").children(".item_title_id").html("类型&nbsp;"+parseInt($(this).closest(".item_id").index()+1)+"：");
			$(this).closest(".item_id").find("input").val("");
		});

		$(".del_id",$(".body_id")).live("click",function(){
			var obj=$(this).closest(".body_id");
			if($(this).closest(".body_id").children(".item_id").length > 1){
				$(this).closest(".item_id").remove(false);
				
				
				obj.find(".item_id").each(function(i){
						$(this).find(".item_title_id").html("类型&nbsp;"+parseInt(i+1)+"：");
					})
			}
			
		});
		//创建活动  增加类型js end
		
			
		//创建会员  start		
		//信息验证  创建会员  会员名称  start
			$(".info_verificatio_click").click(function(){
					$(this).closest(".Pop_layer_box").find(".info_verificatio_vip_name").val($(".info_verificatio_vip_name").val().replace(/\s*/g,""));
					if($(this).closest(".Pop_layer_box").find(".info_verificatio_vip_name").val().replace(/\s*/g,"")==""){
						$(this).closest(".Pop_layer_box").find(".info_verificatio_vip_name").addClass("info_border_red").val("请输入会员名");
					}else if($(this).closest(".Pop_layer_box").find(".info_verificatio_vip_name").val().length>10 || $(this).closest(".Pop_layer_box").find(".info_verificatio_vip_name").val().length<2){
							$(this).closest(".Pop_layer_box").find(".info_verificatio_vip_name").addClass("info_border_red")
							}

			});
			$('.info_verificatio_vip_name').focus(function(){
					if($(this).hasClass("info_border_red")){
						$(this).removeClass("info_border_red");
					}
						
					if($(this).val()== "请输入会员名"){
						$(this).val("");
					}
			});
		//信息验证  创建会员  会员名称  end
		
		//信息验证  手机号  start
			$(".info_verificatio_cellphone").keyup(function(e){
				if(e.keyCode==38||e.keyCode==39||e.keyCode==40||e.keyCode==37){}else{
				this.value = this.value.replace(/[^\d]/g, '')};
				});
			
			$(".info_verificatio_click").click(function(){
					$(this).closest(".Pop_layer_box").find(".info_verificatio_cellphone").val($(this).closest(".Pop_layer_box").find(".info_verificatio_cellphone").val().replace(/\s*/g,""));
					var reg = /^1[3|4|5|7|8]\d{9}$/;
					if($(this).closest(".Pop_layer_box").find(".info_verificatio_cellphone").val().replace(/\s*/g,"")==""){
						$('.info_verificatio_cellphone').addClass("info_border_red").val("请输入手机号");
					}else if(!reg.test($(this).closest(".Pop_layer_box").find(".info_verificatio_cellphone").val())){
						$(this).closest(".Pop_layer_box").find(".info_verificatio_cellphone").addClass("info_border_red")
					}
			});
			$('.info_verificatio_cellphone').focus(function(){
					if($(this).hasClass("info_border_red")){
						$(this).removeClass("info_border_red");
					}
						
					if($(this).val()== "请输入手机号"){
						$(this).val("");
					}
				});
		//信息验证   手机号  end
		
		//信息验证  手机验证码  start
			$(".info_verificatio_code").keyup(function(e){
				if(e.keyCode==38||e.keyCode==39||e.keyCode==40||e.keyCode==37){}else{
				this.value = this.value.replace(/[^\d]/g, '')};
				});
			$(".info_verificatio_click").click(function(){
				var popName=$(this).attr("popName")
				if($(this).closest(".Pop_layer_box").find(".info_verificatio_code[popName='"+popName+"']").val().length<6){
				$(this).closest(".Pop_layer_box").find(".info_verificatio_code[popName='"+popName+"']").addClass("info_border_red")
				};
				if($(this).closest(".Pop_layer_box").find(".info_verificatio_code[popName='"+popName+"']").val()==""){
					$(this).closest(".Pop_layer_box").find(".info_verificatio_code[popName='"+popName+"']").addClass("info_border_red").val("请输入验证码");		
				}
			});
			
			$(".info_verificatio_code").focus(function(){
					if($(this).hasClass("info_border_red")){
						$(this).removeClass("info_border_red");
					};
						
					if($(this).val()== "请输入验证码"){
						$(this).val("");
					};
				});
		//信息验证   手机验证码  end
		
		//手机验证码倒计时  start
		$(".phone_code_click").live("click",function(){
			var _this=$(this);
			if($(this).attr("clicknum")==1) return false;
			var numbers=60;		
			$(this).attr("clicknum",1);
				//var popName=$(this).attr("popName")
				if(numbers>0&&numbers!=60){
					
				}else{
				(function djs(_this){
					if(numbers==1){
						 clearTimeout(t); numbers=60
						 $(".phone_code_click").html("发送验证码");
						 _this.attr("clicknum",0)
					}
					else{			
					numbers--;
					$(".phone_code_click").html(numbers+"s后重新获取");
					$(".phone_code_click").css("font-size","12px")
						t=setTimeout(djs,1000)	
					}
				})(_this)
				}
		});
		//手机验证码倒计时  end
		//创建会员  end
		
		
		//充值  start
		//信息验证  充值金额验证  start
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
			//充值金额只能输入数字和小数点，小数点只能输入一个，小数点后只能输入两位 end				 
			
			$(".info_verificatio_recharge_click").click(function(){
				if($(this).closest(".Pop_layer_box").find(".amount_of_charge").val()==""){
					$(this).closest(".Pop_layer_box").find(".amount_of_charge").addClass("info_border_red").val("请输入金额");		
				}
			});
			
			$(".amount_of_charge").focus(function(){
					if($(this).hasClass("info_border_red")){
						$(this).removeClass("info_border_red");
					};
					if($(this).val()== "请输入金额"){
						$(this).val("");
					};
				});
		//信息验证  充值金额验证  end
		
		//信息验证  密码验证  start
			$(".info_verificatio_recharge_click").click(function(){
				var popName=$(this).attr("popName")
				if($(this).closest(".Pop_layer_box").find(".password_input").val()==""){
					$(this).closest(".Pop_layer_box").find(".password_input").addClass("info_border_red").val("");		
				}
			});
			
			$(".password_input").focus(function(){
					if($(this).hasClass("info_border_red")){
						$(this).removeClass("info_border_red");
					};
					
						$(this).val("");
				
				});
		//信息验证  密码验证  end
		//充值  end

	
		//密码重置  start
		//信息验证  密码验证  start
			$(".verificatio_password_reset_click").click(function(){
				var popName=$(this).attr("popName")
				if($(this).closest(".Pop_layer_box").find(".password_input").val()==""){
					$(this).closest(".Pop_layer_box").find(".password_input").addClass("info_border_red").val("");		
				}
			});
			
			$(".password_input").focus(function(){
					if($(this).hasClass("info_border_red")){
						$(this).removeClass("info_border_red");
					};
					
						$(this).val("");
				
				});
		//信息验证  密码验证  end
		
		//信息验证  手机验证码  start
			$(".info_verificatio_code").keyup(function(e){
				if(e.keyCode==38||e.keyCode==39||e.keyCode==40||e.keyCode==37){}else{
				this.value = this.value.replace(/[^\d]/g, '')};
				});
			$(".verificatio_password_reset_click").click(function(){
				var popName=$(this).attr("popName")
				if($(this).closest(".Pop_layer_box").find(".info_verificatio_code[popName='"+popName+"']").val().length<6){
				$(this).closest(".Pop_layer_box").find(".info_verificatio_code[popName='"+popName+"']").addClass("info_border_red")
				};
				if($(this).closest(".Pop_layer_box").find(".info_verificatio_code[popName='"+popName+"']").val()==""){
					$(this).closest(".Pop_layer_box").find(".info_verificatio_code[popName='"+popName+"']").addClass("info_border_red").val("请输入验证码");		
				}
			});
			
			$(".info_verificatio_code").focus(function(){
					if($(this).hasClass("info_border_red")){
						$(this).removeClass("info_border_red");
					};
						
					if($(this).val()== "请输入验证码"){
						$(this).val("");
					};
				});
		//信息验证   手机验证码  end
		
		//手机验证码倒计时  start
		$(".phone_code_password_reset_click").live("click",function(){
			var _this=$(this);
			if($(this).attr("clicknum")==1) return false;
			var numbers=60;		
			$(this).attr("clicknum",1);
				//var popName=$(this).attr("popName")
				if(numbers>0&&numbers!=60){
					
				}else{
				(function djs(_this){
					if(numbers==1){
						 clearTimeout(t); numbers=60
						 $(".phone_code_password_reset_click").html("发送验证码");
						 _this.attr("clicknum",0)
					}
					else{			
					numbers--;
					$(".phone_code_password_reset_click").html(numbers+"s后重新获取");
					$(".phone_code_password_reset_click").css("font-size","12px")
						t=setTimeout(djs,1000)	
					}
				})(_this)
				}
		});
		//手机验证码倒计时  end
		//密码重置  end
		
		
		//充值撤销  start
		//信息验证 管理员账户  start
			$(".administrator_account_click").click(function(){
					$(this).closest(".Pop_layer_box").find(".administrator_account_name").val($(".administrator_account_name").val().replace(/\s*/g,""));
					if($(this).closest(".Pop_layer_box").find(".administrator_account_name").val().replace(/\s*/g,"")==""){
						$(this).closest(".Pop_layer_box").find(".administrator_account_name").addClass("info_border_red").val("请输入管理员账户");
					}else if($(this).closest(".Pop_layer_box").find(".administrator_account_name").val().length>10 || $(this).closest(".Pop_layer_box").find(".administrator_account_name").val().length<2){
							$(this).closest(".Pop_layer_box").find(".administrator_account_name").addClass("info_border_red")
							}

			});
			$('.administrator_account_name').focus(function(){
					if($(this).hasClass("info_border_red")){
						$(this).removeClass("info_border_red");
					}
						
					if($(this).val()== "请输入管理员账户"){
						$(this).val("");
					}
			});
		//信息验 证管理员账户  end
		
		//信息验证  密码验证  start
			$(".administrator_account_click").click(function(){
				var popName=$(this).attr("popName")
				if($(this).closest(".Pop_layer_box").find(".password_input").val()==""){
					$(this).closest(".Pop_layer_box").find(".password_input").addClass("info_border_red").val("");		
				}
			});
			
			$(".password_input").focus(function(){
					if($(this).hasClass("info_border_red")){
						$(this).removeClass("info_border_red");
					};
					
						$(this).val("");
				
				});
		//信息验证  密码验证  end
		//充值撤销  end
		
		
		//销户  start
		//信息验证  密码验证  start
			$(".verificatio_account_click").click(function(){
				
				if($(this).closest(".Pop_layer_box").find(".password_input").val()==""){
					$(this).closest(".Pop_layer_box").find(".password_input").addClass("info_border_red").val("");		
				}
			});
			
			$(".password_input").focus(function(){
					if($(this).hasClass("info_border_red")){
						$(this).removeClass("info_border_red");
					};
					
						$(this).val("");
				
				});
		//信息验证  密码验证  end
		
		//信息验证  手机验证码  start
			$(".info_verificatio_code").keyup(function(e){
				if(e.keyCode==38||e.keyCode==39||e.keyCode==40||e.keyCode==37){}else{
				this.value = this.value.replace(/[^\d]/g, '')};
				});
			$(".verificatio_account_click").click(function(){
				var popName=$(this).attr("popName")
				if($(this).closest(".Pop_layer_box").find(".info_verificatio_code[popName='"+popName+"']").val().length<6){
				$(this).closest(".Pop_layer_box").find(".info_verificatio_code[popName='"+popName+"']").addClass("info_border_red")
				};
				if($(this).closest(".Pop_layer_box").find(".info_verificatio_code[popName='"+popName+"']").val()==""){
					$(this).closest(".Pop_layer_box").find(".info_verificatio_code[popName='"+popName+"']").addClass("info_border_red").val("请输入验证码");		
				}
			});
			
			$(".info_verificatio_code").focus(function(){
					if($(this).hasClass("info_border_red")){
						$(this).removeClass("info_border_red");
					};
						
					if($(this).val()== "请输入验证码"){
						$(this).val("");
					};
				});
		//信息验证   手机验证码  end
		
		//手机验证码倒计时  start
		$(".phone_code_account_click").live("click",function(){
			var _this=$(this);
			if($(this).attr("clicknum")==1) return false;
			var numbers=60;		
			$(this).attr("clicknum",1);
				//var popName=$(this).attr("popName")
				if(numbers>0&&numbers!=60){
					
				}else{
				(function djs(_this){
					if(numbers==1){
						 clearTimeout(t); numbers=60
						 $(".phone_code_account_click").html("发送验证码");
						 _this.attr("clicknum",0)
					}
					else{			
					numbers--;
					$(".phone_code_account_click").html(numbers+"s后重新获取");
					$(".phone_code_account_click").css("font-size","12px")
						t=setTimeout(djs,1000)	
					}
				})(_this)
				}
		});
		//手机验证码倒计时  end
		//销户  end
		
		
		//创建会员卡 start
		//信息验证  创建会员卡  会员卡名称  start
			$(".create_vip_code_click").click(function(){
					$(this).closest(".Pop_layer_box").find(".create_vip_code_name").val($(".create_vip_code_name").val().replace(/\s*/g,""));
					if($(this).closest(".Pop_layer_box").find(".create_vip_code_name").val().replace(/\s*/g,"")==""){
						$(this).closest(".Pop_layer_box").find(".create_vip_code_name").addClass("info_border_red").val("请输入会员卡名称");
					}else if($(this).closest(".Pop_layer_box").find(".create_vip_code_name").val().length>10 || $(this).closest(".Pop_layer_box").find(".create_vip_code_name").val().length<2){
							$(this).closest(".Pop_layer_box").find(".create_vip_code_name").addClass("info_border_red")
							}

			});
			$('.create_vip_code_name').focus(function(){
					if($(this).hasClass("info_border_red")){
						$(this).removeClass("info_border_red");
					}
						
					if($(this).val()== "请输入会员卡名称"){
						$(this).val("");
					}
			});
		//信息验证  创建会员卡  会员卡名称  end
		
		//折扣输入框验证  start
			//充值金额只能输入数字和小数点，小数点只能输入一个，小数点后只能输入两位 start
			 var keyCodes,   // 声明一个变量待用;
					  reg=/^0(\.\d{0,2})?$/,   //声明小于一的正则;
					  regx=/^[1-9]+\d*(\.\d{0,2})?$/,  //声明大于等于一的正则;
					  regz=/^0+\d+/,  //声明一个零开头接数字的正则;
					  keydown=true;  //声明一个布尔值;
				  $(".create_code_cut_price").keydown(function(){
					 if(keydown==false) return false;   //阻止长按多次输入;
					 keydown=false;
					 keyCodes=$(this).val();   //提取当前值;
				  });
				  $(".create_code_cut_price").keyup(function(e){
					keydown=true;
					if(regz.test($(this).val())) {   //若是零开头接数字的值;
					  $(this).val($(this).val().replace(/0/,""))  //清除零;
					};
					if(!(reg.test($(this).val())||regx.test($(this).val()))&&$(this).val()!=""){ //若输入不是正确格式,本次输入无效
					  $(this).val(keyCodes);
					}
				  });
			//充值金额只能输入数字和小数点，小数点只能输入一个，小数点后只能输入两位 end				 
			$(".create_vip_code_click").click(function(){
				if($(this).closest(".Pop_layer_box").find(".create_code_cut_price").closest(".create_coad_pop_item").prev(".create_coad_pop_item").find(".create_coad_pop_item_c_a").hasClass("create_coad_pop_item_c_a_s")){
					
					if($(this).closest(".Pop_layer_box").find(".create_code_cut_price").val()>=10 || $(this).closest(".Pop_layer_box").find(".create_code_cut_price").val()=="" || $(this).closest(".Pop_layer_box").find(".create_code_cut_price").val()==0){
						$(this).closest(".Pop_layer_box").find(".create_code_cut_price").addClass("info_border_red").val("折扣应大于0小于10且不能为空");
					}
					//if($(this).closest(".Pop_layer_box").find(".create_code_cut_price").val()==""){
					//	$(this).closest(".Pop_layer_box").find(".create_code_cut_price").addClass("info_border_red").val("请输入折扣");		
					//};
				};
			});
				
			$(".create_code_cut_price").focus(function(){
					if($(this).hasClass("info_border_red")){
						$(this).removeClass("info_border_red");
					};
					if($(this).val()== "折扣应大于0小于10且不能为空"){
						$(this).val("");
					};
			});	
			
		
		
		//折扣输入框验证  start
		
		//积分输入框验证  start
			//充值金额只能输入数字和小数点，小数点只能输入一个，小数点后只能输入两位 start
			 var keyCodes,   // 声明一个变量待用;
					  reg=/^0(\.\d{0,2})?$/,   //声明小于一的正则;
					  regx=/^[1-9]+\d*(\.\d{0,2})?$/,  //声明大于等于一的正则;
					  regz=/^0+\d+/,  //声明一个零开头接数字的正则;
					  keydown=true;  //声明一个布尔值;
				  $(".create_code_integration").keydown(function(){
					 if(keydown==false) return false;   //阻止长按多次输入;
					 keydown=false;
					 keyCodes=$(this).val();   //提取当前值;
				  });
				  $(".create_code_integration").keyup(function(e){
					keydown=true;
					if(regz.test($(this).val())) {   //若是零开头接数字的值;
					  $(this).val($(this).val().replace(/0/,""))  //清除零;
					};
					if(!(reg.test($(this).val())||regx.test($(this).val()))&&$(this).val()!=""){ //若输入不是正确格式,本次输入无效
					  $(this).val(keyCodes);
					}
				  });
			//充值金额只能输入数字和小数点，小数点只能输入一个，小数点后只能输入两位 end				 
			$(".create_vip_code_click").click(function(){
				if($(this).closest(".Pop_layer_box").find(".create_code_integration").closest(".create_coad_pop_item").prev(".create_coad_pop_item").find(".create_coad_pop_item_c_a").hasClass("create_coad_pop_item_c_a_s")){
					
					if($(this).closest(".Pop_layer_box").find(".create_code_integration").val()=="" || $(this).closest(".Pop_layer_box").find(".create_code_integration").val()==0){
						$(this).closest(".Pop_layer_box").find(".create_code_integration").addClass("info_border_red").val("积分应大于0且不能为空");
					}
					//if($(this).closest(".Pop_layer_box").find(".create_code_integration").val()==""){
					//	$(this).closest(".Pop_layer_box").find(".create_code_integration").addClass("info_border_red").val("请输入折扣");		
					//};
				};
			});
				
			$(".create_code_integration").focus(function(){
					if($(this).hasClass("info_border_red")){
						$(this).removeClass("info_border_red");
					};
					if($(this).val()== "积分应大于0且不能为空"){
						$(this).val("");
					};
			});	
			
		
		
		//积分输入框验证  start
		//创建会员卡 end
		
		
		//编辑会员卡 start
		//信息验证  编辑会员卡  会员卡名称  start
			$(".edit_vip_code_click").click(function(){
					$(this).closest(".Pop_layer_box").find(".edit_vip_code_name").val($(".edit_vip_code_name").val().replace(/\s*/g,""));
					if($(this).closest(".Pop_layer_box").find(".edit_vip_code_name").val().replace(/\s*/g,"")==""){
						$(this).closest(".Pop_layer_box").find(".edit_vip_code_name").addClass("info_border_red").val("请输入会员卡名称");
					}else if($(this).closest(".Pop_layer_box").find(".edit_vip_code_name").val().length>10 || $(this).closest(".Pop_layer_box").find(".edit_vip_code_name").val().length<2){
							$(this).closest(".Pop_layer_box").find(".edit_vip_code_name").addClass("info_border_red")
							}

			});
			$('.edit_vip_code_name').focus(function(){
					if($(this).hasClass("info_border_red")){
						$(this).removeClass("info_border_red");
					}
						
					if($(this).val()== "请输入会员卡名称"){
						$(this).val("");
					}
			});
		//信息验证  编辑会员卡  会员卡名称  end
		
		//折扣输入框验证  start
			//充值金额只能输入数字和小数点，小数点只能输入一个，小数点后只能输入两位 start
			 var keyCodes,   // 声明一个变量待用;
					  reg=/^0(\.\d{0,2})?$/,   //声明小于一的正则;
					  regx=/^[1-9]+\d*(\.\d{0,2})?$/,  //声明大于等于一的正则;
					  regz=/^0+\d+/,  //声明一个零开头接数字的正则;
					  keydown=true;  //声明一个布尔值;
				  $(".edit_code_cut_price").keydown(function(){
					 if(keydown==false) return false;   //阻止长按多次输入;
					 keydown=false;
					 keyCodes=$(this).val();   //提取当前值;
				  });
				  $(".edit_code_cut_price").keyup(function(e){
					keydown=true;
					if(regz.test($(this).val())) {   //若是零开头接数字的值;
					  $(this).val($(this).val().replace(/0/,""))  //清除零;
					};
					if(!(reg.test($(this).val())||regx.test($(this).val()))&&$(this).val()!=""){ //若输入不是正确格式,本次输入无效
					  $(this).val(keyCodes);
					}
				  });
			//充值金额只能输入数字和小数点，小数点只能输入一个，小数点后只能输入两位 end				 
			$(".edit_vip_code_click").click(function(){
				if($(this).closest(".Pop_layer_box").find(".edit_code_cut_price").closest(".create_coad_pop_item").prev(".create_coad_pop_item").find(".create_coad_pop_item_c_a").hasClass("create_coad_pop_item_c_a_s")){
					
					if($(this).closest(".Pop_layer_box").find(".edit_code_cut_price").val()>=10 || $(this).closest(".Pop_layer_box").find(".edit_code_cut_price").val()=="" || $(this).closest(".Pop_layer_box").find(".edit_code_cut_price").val()==0){
						$(this).closest(".Pop_layer_box").find(".edit_code_cut_price").addClass("info_border_red").val("折扣应大于0小于10且不能为空");
					}
					//if($(this).closest(".Pop_layer_box").find(".edit_code_cut_price").val()==""){
					//	$(this).closest(".Pop_layer_box").find(".edit_code_cut_price").addClass("info_border_red").val("请输入折扣");		
					//};
				};
			});
				
			$(".edit_code_cut_price").focus(function(){
					if($(this).hasClass("info_border_red")){
						$(this).removeClass("info_border_red");
					};
					if($(this).val()== "折扣应大于0小于10且不能为空"){
						$(this).val("");
					};
			});	
			
		
		
		//折扣输入框验证  start
		
		//积分输入框验证  start
			//充值金额只能输入数字和小数点，小数点只能输入一个，小数点后只能输入两位 start
			 var keyCodes,   // 声明一个变量待用;
					  reg=/^0(\.\d{0,2})?$/,   //声明小于一的正则;
					  regx=/^[1-9]+\d*(\.\d{0,2})?$/,  //声明大于等于一的正则;
					  regz=/^0+\d+/,  //声明一个零开头接数字的正则;
					  keydown=true;  //声明一个布尔值;
				  $(".edit_code_integration").keydown(function(){
					 if(keydown==false) return false;   //阻止长按多次输入;
					 keydown=false;
					 keyCodes=$(this).val();   //提取当前值;
				  });
				  $(".edit_code_integration").keyup(function(e){
					keydown=true;
					if(regz.test($(this).val())) {   //若是零开头接数字的值;
					  $(this).val($(this).val().replace(/0/,""))  //清除零;
					};
					if(!(reg.test($(this).val())||regx.test($(this).val()))&&$(this).val()!=""){ //若输入不是正确格式,本次输入无效
					  $(this).val(keyCodes);
					}
				  });
			//充值金额只能输入数字和小数点，小数点只能输入一个，小数点后只能输入两位 end				 
			$(".edit_vip_code_click").click(function(){
				if($(this).closest(".Pop_layer_box").find(".edit_code_integration").closest(".create_coad_pop_item").prev(".create_coad_pop_item").find(".create_coad_pop_item_c_a").hasClass("create_coad_pop_item_c_a_s")){
					
					if($(this).closest(".Pop_layer_box").find(".edit_code_integration").val()=="" || $(this).closest(".Pop_layer_box").find(".edit_code_integration").val()==0){
						$(this).closest(".Pop_layer_box").find(".edit_code_integration").addClass("info_border_red").val("积分应大于0且不能为空");
					}
				};
			});
				
			$(".edit_code_integration").focus(function(){
					if($(this).hasClass("info_border_red")){
						$(this).removeClass("info_border_red");
					};
					if($(this).val()== "积分应大于0且不能为空"){
						$(this).val("");
					};
			});	
			
		
		
		//积分输入框验证  start
		//编辑会员卡 end
		
		
		//创建活动  start
		//信息验证  创建活动  活动名称  start
			$(".verificatio_create_activity_click").click(function(){
					$(this).closest(".Pop_layer_box").find(".verificatio_create_activity_name").val($(".verificatio_create_activity_name").val().replace(/\s*/g,""));
					if($(this).closest(".Pop_layer_box").find(".verificatio_create_activity_name").val().replace(/\s*/g,"")==""){
						$(this).closest(".Pop_layer_box").find(".verificatio_create_activity_name").addClass("info_border_red").val("请输入活动名称");
					}else if($(this).closest(".Pop_layer_box").find(".verificatio_create_activity_name").val().length>10 || $(this).closest(".Pop_layer_box").find(".verificatio_create_activity_name").val().length<2){
							$(this).closest(".Pop_layer_box").find(".verificatio_create_activity_name").addClass("info_border_red")
							}

			});
			$('.verificatio_create_activity_name').focus(function(){
					if($(this).hasClass("info_border_red")){
						$(this).removeClass("info_border_red");
					}
						
					if($(this).val()== "请输入活动名称"){
						$(this).val("");
					}
			});
		//信息验证  创建活动  活动名称  end
		
		//金额只能输入数字和小数点，小数点只能输入一个，小数点后只能输入两位 start
			 var keyCodes,   // 声明一个变量待用;
					  reg=/^0(\.\d{0,2})?$/,   //声明小于一的正则;
					  regx=/^[1-9]+\d*(\.\d{0,2})?$/,  //声明大于等于一的正则;
					  regz=/^0+\d+/,  //声明一个零开头接数字的正则;
					  keydown=true;  //声明一个布尔值;
				  $(".money_name").live("keydown",function(){
					 if(keydown==false) return false;   //阻止长按多次输入;
					 keydown=false;
					 keyCodes=$(this).val();   //提取当前值;
				  });
				  $(".money_name").live("keyup",function(e){
					keydown=true;
					if(regz.test($(this).val())) {   //若是零开头接数字的值;
					  $(this).val($(this).val().replace(/0/,""))  //清除零;
					};
					if(!(reg.test($(this).val())||regx.test($(this).val()))&&$(this).val()!=""){ //若输入不是正确格式,本次输入无效
					  $(this).val(keyCodes);
					}
				  });
			//金额只能输入数字和小数点，小数点只能输入一个，小数点后只能输入两位 end				 
		
		//信息验证  创建活动  充值金额  start
		$(".verificatio_create_activity_click").live("click",function(){
			var n=$(".item_con_title_li.on").index();
			$(".create_activity_pop_item_con_body").eq(n).find(".money_name").each(function(){
				if($(this).val().replace(/\s*/g,"")==""){
					$(this).addClass("info_border_red");	
				}
			});
		});
		$(".tab_nav li").live("click",function(){
			$(".create_activity_pop_item_con_body").find("input").removeClass("info_border_red");
			$(".verificatio_create_activity_click").removeClass("click_open_id")
		});
		$('.money_name').live("focus",function(){
			if($(this).hasClass("info_border_red")){
				$(this).removeClass("info_border_red");
			}	
			
		});
		  
		
		
		//信息验证  创建活动  充值金额  end
		
		//创建活动  end
		
				

		//验证弹出框是否可以下一步  start
		
		
		$(".administrator_account_click,.verificatio_create_activity_click").live("click",function(){
				if($(this).closest(".Pop_layer_box").find("input").hasClass("info_border_red")){
					$(this).removeClass("click_open_id");
				}else{
					$(this).addClass("click_open_id");
					}
			});

		//验证弹出框是否可以下一步  end		
		//验证弹出框是否可以关闭  start
			$(".info_verificatio_click,.info_verificatio_recharge_click,.verificatio_password_reset_click,.verificatio_account_click,.create_vip_code_click,.edit_vip_code_click").click(function(){
				if($(this).closest(".Pop_layer_box").find("input").hasClass("info_border_red")){
					$(this).removeClass("click_close_id");
				}else{
					$(this).addClass("click_close_id");
					}
			});

		//验证弹出框是否可以关闭  end	
		
	});
		

		