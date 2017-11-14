
// tab选项卡
$(document).ready(function(){
	$(".tab_top>li").click(function(){
		$(this).addClass("body_top_tab");
		$(this).siblings("li").removeClass("body_top_tab");
		$(".tab_content").hide();
		$(".tab_content").eq($(this).index()).show();
	})
})




// 设备列表
$(document).ready(function(){
	// 修改设备名称
	$(".list_gbbj").click(function(){
		var input_ss = $(".application_box").val();
		$(this).siblings("input").css("border","1px solid #333").removeAttr("disabled").focus().val(input_ss);
		$(this).hide();
		$("input[type='text']").blur( function() {
			$(this).css("border","0").attr("disabled","disabled");
			$(this).siblings("img").show();
		})
	})

	// 刷新点击状态发生变化
	$(".shuaxinred").hover(
	 	function(){
 			$(this).attr("src","../resources/images/shuaxinhong.png")
 		},
 		function(){
 			$(this).attr("src","../resources/images/shuaxin.png")
 		}
	)


	// 查看详情
	$(".comnou>div").bind({
  		mouseover:function(){$(this).children("span").show().children("img").hide();},  
  		mouseout:function(){$(this).children("span").hide().children("img").show();}  
	})

    // 查看详情选项卡tabs
    $(".case-ul>li").click(function(){
    	$(this).addClass("on");
    	$(this).siblings("li").removeClass("on");
    	$(".case-tabs").hide();
    	$(".case-tabs").eq($(this).index()).show();
    })


    // 提交信息判断
    $(".perfect_information_pop_button_sure").click(function(){
		var $select = $(".lskqww select",$(this).closest(".Pop_layer"));
		$select.each(function(){
			if ($(this).val()==""||$(this).val()=="0") {
				$(this).next("span").show();
				$(this).css("border","1px solid red");
			}else{
				$(this).next("span").hide();}
		})
		
		var $values = $(".lskqww input",$(this).closest(".Pop_layer"));
		$values.each(function(){
			if($(this).val().replace(/\s*/g,"")==""){
				$(this).next("span").show();
				$(this).css("border","1px solid red");
			}else{
			$(this).next("span").hide();}
			

		})	
	
	})

	$(".lskqww select").bind({
		focus:function(){$(this).css("border","1px solid red");	},
		blur:function(){$(this).css("border","1px solid #dcdcdd");
			if($(this).val().replace(/\s*/g,"")==""){
				$(this).next("span").show();
			}else{
			$(this).next("span").hide();}
		}
	});
	$(".lskqww input").bind({
		focus:function(){$(this).css("border","1px solid red");},
		blur:function(){$(this).css("border","1px solid #dcdcdd");
			if($(this).val().replace(/\s*/g,"")==""){
				$(this).next("span").show();
			}else{
			$(this).next("span").hide();}
		}
	});

})



function mySwitch(styleId){ 
			$('#DIV1').css('display','block')//显示
			$(".sade_div").removeClass("sade_div");
			$("#"+styleId).css('display','block').addClass("sade_div");//显示
						console.log(2);

		}
			// console.log(2);

		function myHide(styleId){
			$('#DIV1').css('display','none')//显示
			$("#"+styleId).css('display','none')//显示
			}
		function myHeight(styleId){
			$('.pop_layer_title').next().css('max-height',$(window).height() * 0.8 - 117)
			$('.pop_layer_title').next().css('min-height',180)
			$('.pop_layer_title').next().css('overflow-y','auto')
			$('.pop_layer_title').next().css('overflow-x','hidden')
			// $('.pop_layer_title').next().css('overflow-x','hidden')
			$('.pop_layer_title').css('cursor','move')
			$('.sade_div').css('left', ($(window).width()-($('.sade_div').width()))/2)
			$('.sade_div').css('top', $(window).height() / 2 - ($('.sade_div').height() / 2));
			
			isMove($(".pop_layer_title"),$(".sade_div"));	

			}
				console.log(3);

		$(window).resize(function(){myHeight()})
