// JavaScript Document



//弹出层调出js  start
	$(function(){
		$(".click_open_id").click(function(){
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
		$(".click_close_id").click(function(){
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


// 拖动DIV
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



	$(function(){
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
		$(".member_list_con_td input").each(function () { 
			$(this).click(function () { 
			if ($(".member_list_con_td input:checked").length == $(".member_list_con_td input").length) { 
			$(".member_list_con_td_t  input").attr("checked", "checked"); 
			} 
			else $(".member_list_con_td_t  input").removeAttr("checked"); 
			}); 
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
		
	});
		

		