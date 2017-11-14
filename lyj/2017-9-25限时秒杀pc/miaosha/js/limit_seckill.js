
/**
*蓝色星空岛 js   2017-8-23
*/

$(function(){

	$(".width_sell").each(function(){ //限时秒杀中 已售百分比展示
		var wdh = Number($(this).parents(".limit_info").find(".sell_percent").html());
		if(wdh > 100){
			wdh =100;
		}
		if(wdh < 0){
			wdh =0;
		}
		$(this).css("width",wdh + "%")
	})

	$(".width_sell2").each(function(){ //限时秒杀中 已售百分比展示
		var wdh = Number($(this).parents(".seckill-cont").find(".sell_percent2").html());
		if(wdh > 100){
			wdh =100;
		}
		if(wdh < 0){
			wdh =0;
		}
		$(this).css("width",wdh + "%")
	})



	//限时秒杀点击滚动
	var aUl = $(".sechill_ul");  
	var aLi = $(".sechill_ul li");
	var liLength = aLi.length;  //li的个数
	var liWidth = aLi.outerWidth(true); //li的宽度
	var aUlMl = 0;
	$(".sechill_ul").css("width",liWidth * liLength); //设置ul的宽度
	var values_z =  liWidth * liLength - $(".sechill_goods_box").outerWidth(true); //ul 的宽度与滚动距离的差值
	if(liLength > 4 ){
		$(".left_drops").hide();
		$(".right_drops").show();
		$(".right_drops").on({ //点击右边按钮向左滚动
			"click":function(){
				if(aUl.is(":animated")){ //判断是否在滚动中 ，如果是再次点击无效
					return false;
				}else{
					$(".left_drops").show();
					aUlMl = parseInt(aUl.css('marginLeft'));
					if(values_z < (-aUlMl)){
						$(".right_drops").hide();
						return false;
					}else{
						aUl.animate({marginLeft:(aUlMl + (-liWidth*2))},function(){
							aUlMl = parseInt(aUl.css('marginLeft'));
							if(values_z < (-aUlMl)){
								$(".right_drops").hide();
								return false;
							}
						});
					}
				}
								
			}
		})
		$(".left_drops").on({//点击左边按钮向右滚动
			"click":function(){
				if(aUl.is(":animated")){//判断是否在滚动中 ，如果是再次点击无效
					return false;
				}else{
					$(".right_drops").show();
					aUlMl = parseInt(aUl.css('marginLeft'));
					if(aUlMl >= -10){
						$(".left_drops").hide();
						return false;
					}else{
						aUl.animate({marginLeft:(aUlMl + liWidth*2)},function(){
							aUlMl = parseInt(aUl.css('marginLeft'));
							if(aUlMl >= -10){
								$(".left_drops").hide();
								return false;
							}
						});
					}
				}
			}
		})
	}else{
		$(".left_drops").hide();
		$(".right_drops").hide();
	}
	

})



