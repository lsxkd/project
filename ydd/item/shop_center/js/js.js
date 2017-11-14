
$(function(){
	var search_height = $("header").outerHeight(true);
	var footer_height = $(".footers_list").outerHeight(true) 
	var WH=$(window).outerHeight(true);
	$(".wrapMain").css("height",WH - search_height - footer_height);

// 二维码收款头部tab
	$(".data_tab a").on("click",function(txt){
		$(this).addClass("on");
		$(".data_screen_right").removeClass("active");
		$(this).closest("li").siblings().find("a").removeClass("on");
		var num = $(this).closest("li").index();
		var x;
		switch(num){
			case 0:
					x="今日领券量(张)";
					break;
			case 1:
			        x="04.10-04.11(张)";
					break;
			case 2:
					x="4月领券量(张)";
					break;
            case 3:
            		x="总领券量(张)";
					break;
		}
		$(".data_screen_container>.Profit").html(x);
	});

	// 当日收益详情
	// $(".everyday_idit").toggle(function() {
	// 	$(this).toggleClass("fa-chevron-down");

	// 	$(this).next(".submenu").show();
	// 	}, function() {
	// 	$(this).toggleClass("fa-chevron-down");
	// 	$(this).next(".submenu").hide();
	// });

	



	// 点击筛选
	$(".data_screen_right").on("click",function(){
		$(".mask").show();
		$(".dataAlert").show();
	});

	// 关闭按钮
	$(".closeBtn").on("click",function(){
		$(".mask").hide();
		$(".dataAlert").hide();
	});

	// 筛选弹出框内的选项按钮
	$(".meney_mode_ul li").on("click",function(){
		$(this).addClass("on");
		$(this).siblings("li").removeClass("on");
	});

	// 点击重设
	$(".Frebuild").on("click",function(){
		$(this).closest(".dataAlert").find("li").removeClass("on");
	});

	//底部菜单切换  start
	$(".tab_selected_click li").on({
		"click":function(){
			console.log(233)
			$(this).siblings("li").removeClass("on");
			$(this).addClass("on");
			return false;
		}
	})

})



 // 数字滚动
function rotateNum(num,obj){
	var obj=obj||document;
	var str=""+num;
	var myArr=str.split("");
	var html="";
	for(var i=0;i<myArr.length;i++){
		if(myArr[i]=="."){
			html+="<div class='red_money_mun_n decimal'>.</div>";
		}else{
			html+="<div class='red_money_mun_n' place='"+parseInt(i+1)+"' num='"+myArr[i]+"'><ul>";
			for(var j=0;j<10;j++){
				html+="<li>"+j+"</li>";
			}
			html+="</ul></div>";
		}
	}
	$(".red_money_mun",$(obj)).html("<span class='addMoney'>+</span>"+html);
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


	$(function(){
		if(!sessionStorage.firstLoad==true){
			sessionStorage.firstLoad=true;
			$(".red_money_mun").show();
			$(".Meney").hide();
			console.log($(".Meney").text())
			rotateNum($(".Meney").text().replace(/[^\d\.]/g,""),$("#redPage_popup"));
		}else{
			$(".red_money_mun").hide();
			$(".Meney").show()
				
		}


	// 头部位置轮换置顶
	$(".wrapMain").scroll(function(){
		var myArr =[];
		var same_m = $(".same_month");
		$(".same_month").each(function(){
			myArr.push($(this).offset().top)
		})
		if($(".same_month").eq(0).offset().top>0){
			$(".posH").html("");
			return false;
		}
	
		for(var i=0;i<myArr.length;i++){
			if(i==myArr.length-1){
				if(myArr[i]<0){
					$(".posH").addClass("same_month").html($(".same_month").eq(i).find(".same_month_all").clone(true));
					return false;
				}
			}else{
				if(myArr[i]<0 && myArr[i+1]>$(".same_month_all").outerHeight(true)){
					$(".posH").addClass("same_month").html($(".same_month").eq(i).find(".same_month_all").clone(true));
					return false;
				}
			}
			
		}

	})
		

    // 当日收益详情手风琴效果
		var Accordion = function(el, multiple) {
			this.el = el || {};
			this.multiple = multiple || false;
			var links = this.el.find('.everyday_idit');
			links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
		}

		Accordion.prototype.dropdown = function(e) {
			var $el = e.data.el;
				$this = $(this),
				$next = $this.next();

			$next.slideToggle();
			$this.parent().toggleClass('fa-chevron-down');

			if (!e.data.multiple) {
				$el.find('.submenu').not($next).slideUp().parent().removeClass('fa-chevron-down');
			};
		}	
		var accordion = new Accordion($('.everyday_money'), false);


		// 判断筛选input框是否为空
		$(".Fsure").on("click",function(){
			var myArr =[];
			var inputBox1 = $(".mode_time").eq(0).val();
			var inputBox2 = $(".mode_time").eq(1).val();
			if(inputBox1 != "" && inputBox2  != "" ){
				$(".data_screen_right").addClass("active");
				$(".data_tab a").removeClass("on");
			}else{
				$(".data_screen_right").removeClass("active");
			}
		})


		// 回到顶部 star
		$(".scroll_top").on({"tap":function(){
			$(".wrapMain").animate({ scrollTop: 0 }, 500);		
			}
		});
		if($(".wrapMain").scrollTop()==0){
			$(".scroll_top").hide();
		}
		$(".wrapMain").scroll(function(){
			if($(".wrapMain").scrollTop()==0){
				$(".scroll_top").fadeOut(50);	
			}else{
				$(".scroll_top").fadeIn(500);		
			}	
		})
		// 回到顶部  end
	})
