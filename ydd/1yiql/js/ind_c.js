$(function(){
	$(".telephone_bottom_third_last").click(function(){
		if($(".telephone_bottom_n").length<3){
			$(".telephone_bottom_third_main .telephone_bottom_n:last").after('<div class="telephone_bottom_n"><img src="../resources/images/custom_menu/point.png"> <span class="menu_text">菜单名称</span><div class="telephone_bottom_n_menu"><div class="menu_one"><img src="../resources/images/custom_menu/add_small.png" /></div><i class="i_out"></i><i class="i_in"></i></div></div>');
		}
		if($(".telephone_bottom_n").length>=3){
			$(".telephone_bottom_third_last").hide();
		}else{
			$(".telephone_bottom_third_last").show();
		};

		last_n=$(".telephone_bottom_third_last").css("display")=="block" ? 1 : 0;

		$(".telephone_bottom_n,.telephone_bottom_third_last").css({
			"width":"calc("+(100/($(".telephone_bottom_n").length+last_n))+"% - 1px)"
		})
	})

	//修改名称
	$(".telephone_bottom_n:gt(0),.menu_n").live("click",function(e){
		e.stopPropagation(); 
		$(".removeThis").removeClass("removeThis");
		$(this).addClass("removeThis");
		$(".frm_input_box input").val($(this).find(".menu_text").html());
	});

	$(".frm_input_box input").keyup(function(){
		$(".removeThis .menu_text:first").html($(this).val());
	})



	//点击菜单显示对应子菜单
	$(".telephone_bottom_n:gt(0)").live("click",function(){
		$(".telephone_bottom_n_menu").hide();
		$(this).find(".telephone_bottom_n_menu").show();
	});


	//删除事件
	$(".deleteThisMenu").click(function(){
		$(".removeThis").remove();
		//一级菜单调整大小
		
		if($(".telephone_bottom_n").length<3){
			$(".telephone_bottom_third_last").show();
		}else{
			$(".telephone_bottom_third_last").hide();
		}

		var last_n=$(".telephone_bottom_third_last").css("display")=="block" ? 1 : 0;
		$(".telephone_bottom_n,.telephone_bottom_third_last").css({
			"width":"calc("+(100/($(".telephone_bottom_n").length+last_n))+"% - 1px)"
		})


		//子菜单调整；
		$(".telephone_bottom_n_menu").each(function(){
			if($(this).find(".menu_n").length<5){
				$(this).find(".menu_one").show();
			}else{
				$(this).find(".menu_one").hide();
			}
		})
	})


	//子菜单添加
	$(".menu_one").live("click",function(e){
		e.stopPropagation(); 
		$(this).before("<div class='menu_n'><span class='menu_text'>3123123</span></div>");
		if($(this).siblings(".menu_n").length>=5){
			$(this).hide();
		}

	})

	
	$(".frm_radio_box input[type='radio']").click(function(){
		if($(this).index()==0){
			$(".send_messange").show();
			$(".jump_page").hide()
		}else{
			$(".send_messange").hide();
			$(".jump_page").show()
		}

	})

})