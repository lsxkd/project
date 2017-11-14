var d,c;
var ids = "";
var timeids = "";
var imgss = "";
var payChannelStatus = "";
var radialObj = "";
var currYear = (new Date()).getFullYear();	
var opt={};
opt.date = {preset : 'date'};
opt.datetime = {preset : 'datetime'};
opt.time = {preset : 'time'};
opt.default = {
	theme: 'android-ics light', //皮肤样式
    display: 'modal', //显示方式 
    mode: 'scroller', //日期选择模式
	lang:'zh',
    startYear:currYear, //开始年份
    endYear:currYear + 30
};



function city_vals(obj){
	var marginTop=Math.round(parseFloat($(obj).css("marginTop")));
	var n=marginTop/$("li",$(obj)).outerHeight(false);
	if(n<=0){
		n=-n+1;
	}else{
		n=0
	}
	return $("li",$(obj)).eq(n).html()
}


function city_val(obj){
	
	var marginTop=Math.round(parseFloat($(obj).css("marginTop")));
	var n=marginTop/$("li",$(obj)).outerHeight(false);
	if(n<=0){
		n=-n+1;
	}else{
		n=0
	}
	console.log($("li",$(obj)).eq(n).attr("value"));
	return $("li",$(obj)).eq(n).attr("value");
}


function chpros_add(val){
    $("#city4").empty();  //清空
    //遍历province的name为val下的city
    var htmls="";
    $(d).find("province[name='"+val+"']").find("city").each(function (i){
        htmls+="<li ids=''>"+$(this).attr("name")+"</li>";    
    });
    c = val;
    $("#city4").html(htmls).css("marginTop",$(".city_popup_main_c li").outerHeight(true));
    
    $("#city4").attr("vals",$("#city4 li").eq(0).html());
}

function chpros_adds(val){
    $("#city1").empty();  //清空
    //遍历province的name为val下的city
    var htmls="";
    $(d).find("province[name='"+val+"']").find("city").each(function (i){
        htmls+="<li ids=''>"+$(this).attr("name")+"</li>";    
    });
    c = val;
    $("#city1").html(htmls).css("marginTop",$(".city_popup_main_c li").outerHeight(true));
    
    $("#city1").attr("vals",$("#city1 li").eq(0).html());
}




$(function() {
	var xmlURL = webRoot+"/resources/dataResources/city.xml";
    $.ajax({
        url:xmlURL,
        dataType:"xml",
        success:function(data){
            d = data;
            var htmls="";
            $(data).find("province").each(function(i){
                htmls+="<li ids=''>"+$(this).attr("name")+"</li>";
            });
            $("#city3").html(htmls).css("marginTop",$(".city_popup_main_c li").outerHeight(true));
            $("#city3").attr("vals",$("#city3 li").eq(0).html())
            chpros_add($("#city3 li:first").html());  //选中的值传给chpro函数

        }
    });	
    
    
    $("#city2").prev(".city_main_n_div").on({
    	"touchend":function(){
    		$("#city1").html("");
    		setTimeout(function(){
    			switch(city_val("#city2")){
	    		case "71000":
	    			obj.append("<li value=''>台湾</li>");
	    			break;
	    		case "810000":
	    			obj.append("<li value=''>香港</li>");
	    			break;
	    		case "820000":
	    			obj.append("<li value=''>澳门</li>");
	    			break;
	    		default:
	    			for(var i=0;i<CityArray.length;i++){
	    				if(CityArray[i][0]==city_val("#city2")){
	    					$("#city1").append("<li value='"+CityArray[i][2]+"'>"+CityArray[i][1]+"</li>");
	    				}
	    			}
	    		break;
	    	}
        	$("#city1").attr("vals",city_vals("#city1"));
    		})
    		
    	}
    })
    
    
    $("#industry_sure_brank").on({
    	"click":function(){
    		$("#bank_province").val(city_vals("#city2"));
    		$("#bank_city").val(city_vals("#city1"));
    		$("#bank_provinceId").val(city_val("#city2"));
    		$("#bank_cityId").val(city_val("#city1"));
    		provinceId = $("#bank_provinceId").val();
    		cityId = $("#bank_cityId").val();
    		
    	}
    })
    
    
        
    $("#city3").prev(".city_main_n_div").on({
    	"touchend":function(){
    		setTimeout(function(){
    			chpros_add(city_vals("#city3"));
        		$("#city3").attr("vals",city_vals("#city3"));
    		},300)
    	}
    })
    
    $("#city4").prev(".city_main_n_div").on({
    	"touchend":function(){
    		setTimeout(function(){
    			
        		$("#city4").attr("vals",city_vals("#city4"));
    		},300)
    	}
    })
    
});




var provinceId ,cityId;


$(document).ready(function(){
	radialObj = $('#indicatorContainer2').radialIndicator({
        barColor: {
            0: '#FF0000',
            33: '#FFFF00',
            66: '#0066FF',
            100: '#33CC33'
        },
        barWidth: 10,
        percentage: true
    }).data('radialIndicator');
	radialObj.value(90); 
	
	$("#contactPhone").val(contactPhone);
	if(loginName==contactPhone){
		if(loginName == $("#contactPhone").val()){
			$("#contactPhone").attr("disabled",true)
			$("#modify").show();
			$("#smscode_li").hide();
		}else{
			$("#contactPhone").attr("disabled",false)
			$("#modify").hide();
			$("#smscode_li").show();
		}
	}else{
		$("#contactPhone").attr("disabled",false)
		$("#modify").hide();
		$("#smscode_li").show();
	}
	$("#modify").click(function(){
		$("#contactPhone").attr("disabled",false)
		$("#modify").hide();
		$("#smscode_li").show();
	})
	$("#idcardNum").focus();
	$("#summit").bind("click",function(){
		submitForm();
	});
	
	
	
	InitOption("#city2","#city1");

	if(cardValidtimes){
		$("#cardValidtime").val(cardValidtimes.split(" ")[0]).scroller('destroy').scroller($.extend(opt['date'], opt['default']));
	}else{
		$("#cardValidtime").val("").scroller('destroy').scroller($.extend(opt['date'], opt['default']));
	}
	//$("#cardValidtime").val("").scroller('destroy').scroller($.extend(opt['date'], opt['default']));
	
	// 弹出框显示隐藏
	// 取消关注弹出框
	var bgshadow = $(".bgshadow");
	//银行区域初始化
	BankArea("#BankArea");
	
	//判断是否新增   新增加载添加项目
	if($("#payChannelId").val()){
//		setVal()
	}else{
		getValCache();
	}

	// 关闭
	$(".close_btn").click(function(){
		$(this).closest(".popupBox").hide();
		bgshadow.hide();
	});
	
	//开户行弹出
	
	$(".choose_add_bank").click(function(e){
		bgshadow.show();
		$(".choose_bank_content").show();
		$(this).blur();
		return false;
	});
	
	$(".popupBox").on({
		"touchmove":function(e){
			e.preventDefault();
		}
	})
	//开户支行弹出
	
	$(".basis_bank_branch_choose").click(function(){
		$(this).blur();
		var branchname = $(".search_branchname").val().replace(/\s/g,'');
		var bankId = $("#bankId").val();
		if(!bankId){
//			items("请先选择开户支行！");
			return false;
		}
		if(!provinceId){
//			items("请先选择开户支行所在省市！");
			return false;
		}
		
		var url_ = basePath+"/app/payChannel/getBranchList.do";
		var data = {
				cityid:cityId,
				provinceid:provinceId,
				bankid:bankId,
				branchname:branchname
		};
		$.ajax({
			url : url_,
			type : "POST",
			data : data,
			async : false,
			dataType : "json",
			success : function(result) {
				var msgCode = result.msgCode;
	        	var data = result.data;
	        	$str = "";
	        	if (msgCode == 0) {
	        		for(var i=0; i<data.length; i++){
	        			var obj = data[i];
		        		$str += "<li branchcode='"+obj.branchcode+"'>"+obj.branchname+"</li>";
	        		}
	        	}
	        	$("#BankBranchArea").html($str)
	        	$("#BankBranchArea").css("top",$("#BankBranchArea li:first").outerHeight(false)*2);
        		bgshadow.show();
	        	$(".choose_bank_branch_content").show();
			}
		});
		
	});
	
	
	// 选择地址弹出框
	$("#bankCityProvince").click(function(){
		bgshadow.show();
		$(".inValue").removeClass("inValue");
		$(this).addClass("inValue");
		$(".choose_add_content_brank").show();
	});

	
	$("#provinceCity").click(function(){
		bgshadow.show();
		$(".inValue").removeClass("inValue");
		$(this).addClass("inValue");
		$(".choose_add_content_addr").show();
	});

	
	
	$("#goback1").click(function(){
		window.location.href = basePath+"/app/qrcodeStatistics/toPayChannel.do";
	});
	
	$("#goback2").click(function(){
		clearTimeout(timeWait);
		wait = 180;
		$("#smscode_li").html('<input type="text" id="smscode" maxlength="6" placeholder="请输入验证码" value=""><a href="javascript:void(0);"  style="position:absolute;right:1rem;top:50%;display:inline-block;border:1px solid #00aeef;border-radius:5px;padding:0 1rem;color:#00aeef;height: 2rem;line-height: 2rem;margin-top:-1.2rem;" onclick="onGetSMSCode(this)">获取验证码</a>')
		$(".perfect_data_box_01").show();
		$(".perfect_data_box_02").hide();
	});
	   
});

function getInputList(){
	var accountType = $(".account_types").find(".account_type:checked").val(); //账户类型
	var storeType = $(".store_types").find(".store_type:checked").val(); //商户类型
	var url_ = basePath+"/app/payChannel/getInputList.do";
	$.ajax({
		url : url_,
		type : "POST",
		data : {
			configId:paychannelId,
			storeType:storeType,
			accountType:accountType
		},
		async : false,
		dataType : "json",
		success : function(result) {
			var msgCode = result.msgCode;
        	var data = result.data;
        	if (msgCode == 0) {
				$str = '';
				if(data!=null && data.length >0){
					for(var i=0; i<data.length; i++){
						var obj = data[i];
						if(obj.filesName.indexOf("有效期")!=-1){
							if(obj.isCheck == 0){
								$str += '<h3 class="data_title" id="'+obj.id+'">'+obj.filesName+'类型</h3>';
							}else{
								$str += '<h3 class="" id="'+obj.id+'">'+obj.filesName+'类型</h3>';
							}
							$str += '<li class="incard_type" style="height:40px;line-height:40px;padding:0 1rem">';
							$str += '	<input type="radio" id="idcard_type_'+i+'_1" name="idcard_type_'+i+'" value="0">';
							$str += '	<label for="idcard_type_'+i+'_1">未知</label>';
							$str += '	<input type="radio" id="idcard_type_'+i+'_2" name="idcard_type_'+i+'" value="1" style="margin-left:1rem">';
							$str += '	<label for="idcard_type_'+i+'_2">永久有效</label>';
							$str += '	<input type="radio" id="idcard_type_'+i+'_3" name="idcard_type_'+i+'" value="2" checked style="margin-left:1rem">';
							$str += '	<label for="idcard_type_'+i+'_3">有效期日期</label>';
							$str += '</li>';
						}
						if(obj.isCheck == 0){
							$str += '<h3 class="data_title" id="'+obj.id+'">'+obj.filesName+'</h3>';
						}else{
							$str += '<h3 class="" id="'+obj.id+'">'+obj.filesName+'</h3>';
						}
						if(obj.filesType == 2){
							if(obj.isCheck == 0){
								$str += '<div class="perfect_data_list perfect_data_list_validate" filesName="'+obj.filesName+'" filesId="'+obj.filesId+'" filesType="'+obj.filesType+'">';
							}else{
								$str += '<div class="perfect_data_list" filesName="'+obj.filesName+'" filesId="'+obj.filesId+'" filesType="'+obj.filesType+'">';
							}
							$str += '	<div class="perfect_data_list_img">';
							$str += '  		<label for="img_'+i+'">';
							$str += '			<img id="img_'+i+'_show" style="width: auto;height: 80%;margin: 0 auto;margin-top: 10%;display: block;" src="'+basePath+'/resources/images/load.gif" alt="">';
							$str += '  		</label>';
							$str += '	</div>';
							$str += '	<input class="upload_pictures_input"  onchange="upDataImg(this)" type="file" id="img_'+i+'" name="file">';
							$str += '</div>';
							ids += i+',';
							imgss += "img_"+i+',';
						}else if(obj.filesType == 4){
							if(obj.isCheck == 0){
								$str += '<li class="perfect_data_list perfect_data_list_validate" filesName="'+obj.filesName+'" filesId="'+obj.filesId+'" filesType="'+obj.filesType+'" style="padding-left:5rem;margin:1rem auto;">';
							}else{
								$str += '<li class="perfect_data_list" filesName="'+obj.filesName+'" filesId="'+obj.filesId+'" filesType="'+obj.filesType+'" style="padding-left:5rem;margin:1rem auto;">';
							}
							if(obj.filesName.indexOf("有效期")!=-1){
								$str += '	<input type="text" id="time_'+i+'" placeholder="请输入'+obj.filesName+'" value="" class="valid_date" style="border:1px solid #ebebeb;height: 3rem;line-height: 3rem;width: 80%;">';
							}else{
								$str += '	<input type="text" id="time_'+i+'" placeholder="请输入'+obj.filesName+'" value="" style="border:1px solid #ebebeb;height: 3rem;line-height: 3rem;width: 80%;">';
							}
							$str += '</li>';
							timeids += i+',';
						}else{
							if(obj.isCheck == 0){
								$str += '<li class="perfect_data_list perfect_data_list_validate" filesName="'+obj.filesName+'" filesId="'+obj.filesId+'" filesType="'+obj.filesType+'" style="padding-left:5rem;margin:1rem auto;">';
							}else{
								$str += '<li class="perfect_data_list" filesName="'+obj.filesName+'" filesId="'+obj.filesId+'" filesType="'+obj.filesType+'" style="padding-left:5rem;margin:1rem auto;">';
							}
							$str += '	<input type="text" placeholder="请输入'+obj.filesName+'" value="" style="border:1px solid #ebebeb;height: 3rem;line-height: 3rem;width: 80%;">';								
							$str += '</li>';
						}
					}
					ids = ids.substring(0, ids.length-1);
					timeids = timeids.substring(0, timeids.length-1);
					imgss = imgss.substring(0, imgss.length-1);
					$("#perfect_data").html($str);
					$(".incard_type").next("h3").addClass("hideObj");
					$(".incard_type").next("h3").next("li").addClass("hideObj");
					//初始化
					if(ids!=''){
						var imgs = ids.split(",");
						for(var i=0; i<imgs.length; i++){
							var img = imgs[i];
							var imgshow = "imgshow_"+img;
							//初始化时加载可显示的图片框
							$("#img_"+img).uploadPreview({ Img: imgshow, Width: 120, Height: 120});
						}
					}
					//时间
					if(timeids!=''){
						var tids = timeids.split(",");
						for(var i=0; i<tids.length; i++){
							var tid = tids[i];
							
							$("#time_"+tid).val("").scroller('destroy').scroller($.extend(opt['date'], opt['default']));
						}
					}
				}
        	}
        	
        	//初始化
        	if($("#payChannelId").val()){
        		setVal()
        	}else{
        		$("#perfect_data .perfect_data_list").each(function(){
					if($(this).find("img").length>0){
						if($(this).find("img").attr("src").indexOf("load.gif")!=-1){
							$(this).find("img").attr("src",basePath+'/resources/images/img_ico_s_0.png');
						}
					}
				});
        	}
		}
	});
}

// 选择行业弹出框
function moveList(obj){
	var start_coordY=0,end_coordY=0,move_coordY=0,ulT=0;
	$(obj).each(function(){
		if($(this).find(".moveListDiv").length==0) $(obj).find("ul").before("<div class='moveListDiv'></div>");
		// 添加必须的css;
		$(obj).find("ul").css({
			"position":"absolute",
			"zIndex":1,
			"top":72
		});
	
	})
	$(obj).css("position","relative");
	var moveList=$(".moveListDiv",$(obj));
	// 添加必须的css;
	moveList.css({
		"position":"absolute",
		"left":0,
		"right":0,
		"top":0,
		"bottom":0,
		"zIndex":3
	});

	// 绑定事件
	moveList.on({
		"touchstart":function(e){
			e.preventDefault();
			coordY=e.originalEvent.changedTouches[0].pageY;
			ulT=parseFloat($(this).next("ul").css("top"));
			adjustList($(this));
		},
		"touchmove":function(e){
			e.preventDefault();
			move_coordY=e.originalEvent.changedTouches[0].pageY-coordY;
			$(this).next("ul").css({
				"top":ulT+move_coordY+"px"
			})

		},
		"touchend":function(e){
			e.preventDefault();
			adjustList($(this));
		}
	})
}

function upDataImg(o){
	var fileid = $(o).attr("id");
	$(".cover_pop").show();
    $(".pop_content").show();
	UpladFile(fileid);
	
}

/*function upDataImg(o){
	sign = false;
	if($(o)[0].files[0].size>512000){
		alertErrors("照片大小不能超过500kb","1500");
		return;
	}
	var fileid = $(o).attr("id");
	var imgType=new RegExp("(.jpg$)|(.png$)|(.bmp$)|(.jpeg$)","i");
    if(imgType.test($(o).val())){
        // 判断是否支持FileReader
        var reader=new FileReader();
        reader.readAsDataURL(o.files[0]);
        reader.onload=function(evt){
            $("#" + fileid + "_show").attr("src",evt.target.result);
        }
//        alertLoading("正在上传...", "50000");
        $(".cover_pop").show();
        $(".pop_content").show();
        $.ajaxFileUpload({
	    	type:'post',
	        url:basePath+"/app/payChannel/uploadfile.do",
	        data:{
	        	fileType:'image'
	        },
	        secureuri:false,
	        fileElementId:fileid,
	        dataType:'text',
	        success: function (data,status){
	        	sign = true;
//	        	alertHide();
	        	var start = data.indexOf(">");
				if (start != -1) {
					var end = data.indexOf("<", start + 1);
					if (end != -1) {
						data = data.substring(start + 1, end);
					}
				}
	        	var arr = data.split("#");
	        	if(arr[0] == 0){
	        		$("#" + fileid + "_show").attr("src", arr[1]);
	        	} else {
	        		alertErrors(arr[1]);
	        	}
	        },  
	        error: function(data,status,e){
	        	alertErrors(e);
	        	$(".cover_pop").hide();
	            $(".pop_content").hide();
	            radialObj.value(0);
	        }  
	    }); 
        over = false;
        inter = setInterval(req,10);
    }
}*/


function adjustList(o){
	// 获取相关元素;
	var ul=o.next("ul"),
		li=o.next("ul").find("li"),
		ulT=parseFloat(o.next("ul").css("top")) || 0,
		liH=parseFloat(o.next("ul").find("li").outerHeight(false));
	// 调整位置

	var tops=Math.round(ulT/liH)*liH;
		tops=tops<liH*2?tops:liH*2;
		tops=tops>-liH*(li.length-3)?tops:-liH*(li.length-3);
	ul.css("top",tops+"px");
			
	var vals=ul.find("li").eq(-(tops/liH-2)).html();
	if(o.siblings("ul").hasClass("belongName")){
		getType(vals);
	}
}
function innerHTMLS(){
	var valHtml="";
	var liH=parseInt($(".choose_industry ul li").outerHeight(false));
	$(".choose_industry ul").each(function(){
		var ulT=parseFloat($(this).css("top")) || 0;
		var ulIndex = -parseInt((ulT-liH)/liH)+1;
		var enterpriseIndustryType = $(this).find("li").eq(ulIndex).attr("ids");
		$("#industry").val(enterpriseIndustryType);
		valHtml+=$(this).find("li").eq(ulIndex).html()+" ";
	})
	return valHtml;
}

//获取银行li的值
function innerHTMLSb(){
	var liH=parseInt($(".choose_industry-bank ul li").outerHeight(false));
	var ulT=parseFloat($(".choose_industry-bank ul").css("top")) || 0;
	var ulIndex = -parseInt((ulT-liH)/liH)+1;
	var bankId = $(".choose_industry-bank ul").find("li").eq(ulIndex).attr("values");
	$("#bankId").val(bankId);
	$(".choose_industry-bank ul").find("li").eq(ulIndex).html();
	return $(".choose_industry-bank ul").find("li").eq(ulIndex).html();
}

//获取银行li的值
function innerHTMLS1(){
	var liH=parseInt($(".choose_branch_bank ul li").outerHeight(false));
	var ulT=parseFloat($(".choose_branch_bank ul").css("top")) || 0;
	var ulIndex = -parseInt((ulT-liH)/liH)+1;
	var accountLinenum = $(".choose_branch_bank ul").find("li").eq(ulIndex).attr("branchcode");
	$("#accountLinenum").val(accountLinenum);
	$(".choose_branch_bank ul").find("li").eq(ulIndex).html();
	return $(".choose_branch_bank ul").find("li").eq(ulIndex).html();
}


$(function(){
	moveList(".list");
	address(".basis_info_add_choose",".basis_info_add_choose");
	$(".industry_sure_addr").on({
		"click":function(){
			$("#provinceCity").val($("#city3").attr("vals")+$("#city4").attr("vals"));
			$("#province").val($("#city3").attr("vals"));
			$("#city").val($("#city4").attr("vals"));
		}	
	})
	$(".industry_sure").on({
		"click":function(e){
			if($(this).hasClass("industry_sure_addr")) return false;
			$(".choose_add_bank").val(innerHTMLSb());
//			$(".basis_bank_branch_choose").val(innerHTMLS1());
			
			//$(".basis_info_industry_choose").html(innerHTMLS());
			// $(".choose_industry_content").hide();
			// bgshadow.hide();
		}
	})
	
	$(".industry_sure_m").on({
		"click":function(e){
			//$(".choose_add_bank").val(innerHTMLSb());
			$(".basis_bank_branch_choose").val(innerHTMLS1());
			
			//$(".basis_info_industry_choose").html(innerHTMLS());
			// $(".choose_industry_content").hide();
			// bgshadow.hide();
		}
	})
	
	
	
	$("body").on({
		"click":function(){
			$("#bankDetail").val("")
		}
	},".industry_popup_right");

})

/*
*城市选择 start
*
*注: 此函数为事件函数，非方法函数
*若改页面结构后js也需改写
*
*/
function address(showDiv,city_where){
	var moveNum=0;
	var this_margTop=0;
	var cityHtml_01="安徽";
	var cityHtml_02="合肥市";
	var cityHtml_011="340000";
	var cityHtml_022="3610";
	$(".city_popup_main_c ul").css("marginTop",$(".city_popup_main_c li").outerHeight(true));
	$(".city_popup_main_c").on({
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
			});
		},
		"touchend":function(){
				var lens=$(this).find("li").length-2,
				liH=$(this).find("li").outerHeight(true),
				maxTop=lens*liH,
				maxBottom=1*liH,
				marginTop=0;
				if(-maxTop>parseFloat($(this).find("ul").css("marginTop"))){
					marginTop=-maxTop;
				}else if(maxBottom<parseFloat($(this).find("ul").css("marginTop"))){
					marginTop=maxBottom;
				}else{
					marginTop=$(this).find("ul").css("marginTop")
				}
				$(this).find("ul").css("marginTop",marginTop);
				var _this=$(this).find("ul");
				var n=Math.round(parseFloat(_this.css("marginTop"))/liH);
				_this.css("marginTop",n*liH);
				var x=-(n-1);

			
				var inds=$(this).index();
				$(".city_main_n",$(this).closest(".city_popup_main_c")).each(function(i){
					if(i<inds) return true;
					$(this).find("ul").css("marginTop",liH+"px");
				})
				switch(_this.closest(".city_main_n").index()){
					case 1:
//						province(2,parentId,".city_two ul");
//						chpros(_this.find("li").eq(x).html(),"#city1");  //选中的值传给chpro函数
//						cityHtml_01=_this.find("li").eq(x).html();   //城市选择事件写这里
//						
//						cityHtml_011=_this.find("li").eq(x).attr("value");   //城市选择事件写这里
//						
//						$(this).closest(".city_main_n").next(".city_main_n").find("ul").css("marginTop",liH+"px");
//						ChangeProvince2(_this.find("li").eq(x).attr("value"),"#city1",function(){
//							cityHtml_02=$(".city_two ul").find("li").eq(0).html();
//							cityHtml_022=$(".city_two ul").find("li").eq(0).attr("values");
//						});
//						ChangeProvince2(_this.find("li").eq(x).attr("value"),"#city1");
					break;
					case 2:
						//province(3,parentId,".city_three ul");
//						cityHtml_02=_this.find("li").eq(x).html();   //城市选择事件写这里
//						cityHtml_022=_this.find("li").eq(x).attr("values");
					break;
				}
		}
	},".city_main_n");


	$(".city_popup_reset").on({
		"click":function(){
			$(".city_popup,.shade_div").hide();
		}
	});
	var n=0;
	$(".city_popup_right").on({
		"click":function(e){
			e.stopPropagation();
			if($(this).hasClass("industry_sure_addr")) return false;
			n++;
			//$(city_where).html(cityHtml_01+" "+cityHtml_02+" "+cityHtml_03);
			
			
			var cityHtml_01=city_vals("#city2");
			var cityHtml_02=city_vals("#city1");
			
			$(".inValue").val(cityHtml_01+" "+cityHtml_02);
//			$(".inValue").parent().find("input").eq(1).val(cityHtml_01);
//			$(".inValue").parent().find("input").eq(2).val(cityHtml_02);
//			$(".inValue").parent().find("input").eq(3).val(cityHtml_011);
//			$(".inValue").parent().find("input").eq(4).val(cityHtml_022);
			$(".inValue").removeClass(".inValue");			
			$(".city_popup,.shade_div").hide();

			$("#bankDetail").val("");


			
		}
	});
	
	$(showDiv).on({
		"click":function(){
			$("input").blur();
			$(".city_popup,.shade_div").show();
			$(".inValue").removeClass("inValue");
			$(this).addClass("inValue");
			
		}
	});
}


function chpros(val,obj){
//    $("#city4 ul").empty();  //清空
    //遍历province的name为val下的city
    var htmls="";
    $(d).find("province[name='"+val+"']").find("city").each(function (i){
        htmls+="<li ids=''>"+$(this).attr("name")+"</li>";    
    });
    c = val;
    $(obj).html(htmls).css("marginTop",$("li",$(obj)).outerHeight(true));
}

function submitForm(){
	if(!paychannelId){
		window.location.href = basePath+"/app/payChannel/toQrcodePayProgress.do";
	}
	if(validateForm() && validateFormTwo()){
		var businessName = $("#businessName").val();	//商户名称
		var businessNickname = $("#businessNickname").val();	//商户昵称
		//var operNo = $("#operNo").val();	//推荐人编号
		var legalPerson = $("#legalPerson").val(); //法定代表人
		var idcardNum = $("#idcardNum").val();   //身份证号
		var cardValidtime = $("#cardValidtime").val();   //身份证截止日期
		var contactName = $("#contactName").val();   		//联系人姓名
		var contactPhone = $("#contactPhone").val();
		var province = $("#province").val();				//省
		var city = $("#city").val();
		var addrDetail = $("#addrDetail").val();	//详细地址
		var accountLinenum = $("#accountLinenum").val();
		var accountName = $("#accountName").val();   //账户名称
		var accountBank = $("#accountBank").val();   //开户银行
		var accountBrance = $("#bankDetail").val();   //支行名称
		var accountNum = $("#bankCardNo").val();   //银行账号
		var bankProvince = $("#bank_province").val();
		var bankCity = $("#bank_city").val();
		var storeType = $(".store_types").find(".store_type:checked").val(); //商户类型
		var accountType = $(".account_types").find(".account_type:checked").val(); //账户类型
		
		var applyPaychannelChild = '[';
		$strs = '';
		$(".perfect_data_list").each(function(){
			var filesName = $(this).attr("filesName");
			var filesId = $(this).attr("filesId");
			var filesType = $(this).attr("filesType");
			//	var file = $(this).find(".upload_pictures_input").val();
			// var filesValue = file.substr(file.lastIndexOf('\\')+1,file.length);
			if(filesType == 2){
				var filesValue = $(this).find("img:eq(0)").attr("src");
			}else{
				var filesValue = $(this).find("input").val();
			}
			$strs +='{\"filesName\":\"'+filesName+'\",\"filesType\":\"'+filesType+'\",\"filesValue\":\"'+filesValue+'\",\"filesId\":\"'+filesId+'\"},';
			
		});
		applyPaychannelChild += $strs.substring(0,$strs.length-1);
		applyPaychannelChild += ']';
		applyPaychannelChild = encode64(applyPaychannelChild);
		var data = {
				id:$("#payChannelId").val(),
				businessName: businessName,
				businessNickname: businessNickname,
				//operNo:operNo,
				legalPerson:legalPerson,
				idcardNum:idcardNum,
				cardValidtime:cardValidtime,
				accountBank:accountBank,
				accountBrance:accountBrance,
				accountName:accountName,
				accountLinenum:accountLinenum,
				storeType:storeType,
				accountType:accountType,
				accountNum:accountNum,
				contactPerson:contactName,
				contactPhone:contactPhone,
				provinceAddress:province,
				cityAddress:city,
				cityBank:bankCity,
				provinceBank:bankProvince,
				addressInfo:addrDetail,
				paychannelId:paychannelId,
				paychannelName:paychannelName, 
				channelPaytypeId:channelPaytypeId,
				_json:applyPaychannelChild
				
			};
		
		alertLoading("正在提交...", "50000");
		var url = basePath+"/app/payChannel/addApplyPayChannel.do?d=" + new Date().getTime();
		$("#summit").unbind();
		$.post(url, data, function(data) {
			alertHide();
			if(data.msg=="success"){
				alertSuccess("申请成功", "1500");
				window.location.href=basePath+"/app/qrcodeStatistics/toPayChannel.do";
			}else if(data.msgCode==10006){
				alertSuccess("申请成功", "1500");
				window.location.href=basePath+"/app/qrcodeStatistics/toPayChannel.do";
			}else{
				alertErrors(data.msg,"1500");
			} 
			$("#summit").bind("click",function(){
				submitForm();
			});
		}, "json");
	}
}

function stringToBin(str) {
	var result = ""; 
	for (var i = 0; i < str.length; i++) {
		var charCode = str.charCodeAt(i).toString(2);
		result += (new Array(9 - charCode.length).join("0") + charCode);
	}
	return result;
}

function validateFormTwo(){
	var bn = true;
	$(".perfect_data_list_validate").each(function(){
		if($(this).attr("filesType")=="2"){
			if($(this).find("img").attr("src") == basePath+"/resources/images/img_ico_s_0.png"){
				alertErrors("请上传图片！","1500");
				bn = false;
				return;
			}
		}else{
			if($(this).find("input").val() == ""){
				alertErrors("信息不全！","1500");
				bn = false;
				return;
			}
			
		}
	});
	if(bn){
		return true;
	}else{
		return false;
	}
}

function validateForm(){
	var contactPhone = $("#contactPhone").val(); //手机号
	var businessName = $("#businessName").val();	//企业名称
	var businessNickname = $("#businessNickname").val(); //商户昵称
	var legalPerson = $("#legalPerson").val(); //法定代表人
	var idcardNum = $("#idcardNum").val();   //身份证号
	var cardValidtime = $("#cardValidtime").val();   //联系人姓名
	var contactName = $("#contactName").val();   //联系人姓名
	var province = $("#province").val();   //店铺省市
	var enterpriseAddressDetail = $("#addrDetail").val();	//详细地址
	var bankProvince = $("#bank_province").val();
	var accountName = $("#accountName").val();   //账户名称
	var accountBank = $("#accountBank").val();   //开户银行
	var bankDetail = $("#bankDetail").val();   //支行
	var bankCardNo = $("#bankCardNo").val();   //联系人姓名
	var storeType = $(".store_types").find(".store_type:checked").val(); //商户类型
	var accountType = $(".account_types").find(".account_type:checked").val(); //账户类型
	var regs = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1|2]\d)|(3[0-1]))\d{3}([0-9]|X)$/;
//	var rega =  /^(\d{16}|\d{19})$/;

	if(!storeType){
		alertErrors("商户类型不能为空！","1500");
		return false;
	}
	if(storeType==1){	//持证商家需认证
		if(!accountType){
			alertErrors("账户类型不能为空！","1500");
			return false;
		}
	}
	//对私账号或者非持证商家
	if(accountType == 3 || storeType == 2){
		if(!/^62\d*$/.test(bankCardNo)){
			alertErrors("对私账号银行卡号必须以62开头！","1500");
			$("#bankCardNo").focus();
			return false;
		}
	}
	if(null == contactPhone || "" == contactPhone){
		alertErrors("联系电话不能为空！","1500");
		$("#contactPhone").focus();
		return false;
	}else if(null == businessName || "" == businessName){
		alertErrors("企业名称不能为空！","1500");
		$("#businessName").focus();
		return false;
	}else if(null == businessNickname || "" == businessNickname){
		alertErrors("商户昵称不能为空！","1500");
		$("#businessNickname").focus();
		return false;
	}else if(null == legalPerson || "" == legalPerson){
		alertErrors("请正确填写法定代表人！","1500");
		$("#legalPerson").focus();
		return false;
	}else if(null == idcardNum || "" == idcardNum || !regs.test(idcardNum)){
		alertErrors("请正确填写身份证号码！","1500");
		$("#idcardNum").focus();
		return false;
	}else if(null == cardValidtime || "" == cardValidtime){
		alertErrors("身份证截止日期不能为空！","1500");
		$("#cardValidtime").focus();
		return false;
	}else if(null == contactName || "" == contactName){
		alertErrors("联系人姓名不能为空！","1500");
		$("#province").focus();
		return false;
	}else if(null == province || "" == province){
		alertErrors("店铺所在省市不能为空！","1500");
		$("#provinceCity").focus();
		return false;
	}else if(null == enterpriseAddressDetail || "" == enterpriseAddressDetail){
		alertErrors("店铺详细地址不能为空！","1500");
		$("#addrDetail").focus();
		return false;
	}else if(null == accountName || "" == accountName){
		alertErrors("账户名称不能为空！","1500");
		$("#accountName").focus();
		return false;
	}else if(null == accountBank || "" == accountBank){
		alertErrors("开户银行不能为空！","1500");
		$("#accountBank").focus();
		return false;
	}else if(null == bankProvince || "" == bankProvince){
		alertErrors("支行省市不能为空！","1500");
		$("#bankCityProvince").focus();
		return false;
	}else if(null == bankDetail || "" == bankDetail){
		alertErrors("所属支行不能为空！","1500");
		$("#bankDetail").focus();
		return false;
	}else if(null == bankCardNo || "" == bankCardNo || !/^\d*$/.test(bankCardNo)){
		alertErrors("请正确输入结算银行卡号！","1500");
		$("#bankCardNo").focus();
		return false;
	}
	
	return true;
}

function validateImg(){
	var flag = true;
	$(".perfect_data_list").each(function(){
		var filesValue = $(this).find("img").attr("src");
		if(basePath+"/resources/images/img_ico_s_0.png"==filesValue){
			flag = false;
			return false;
		}
			
	});
	
	if(!flag){
		alertErrors("请上传全部所需照片！","1500");
		return false;
	}
	
	return true;
}
function onBindCellphones(){
	if(loginName==$("#contactPhone").val()){
		if($("#contactPhone").attr("disabled")=="disabled"){
			return true;
		}else{
			return false;
		}
	}else{
		return false;
	}
	
}

function validate_go_next(){
	//验证输入框
	if(validateForm()){
		//是否需要手机验证
		if(onBindCellphones()){
			go_next();
		}else{
			onBindCellphone();
		}
	}
}

function go_next(){
	setValCache();
	$(".perfect_data_box_01").hide();
	$(".perfect_data_box_02").show();
	$(document).scrollTop(0);
	getInputList();
}

function checkPayChannelStatue(){
	var url_ = basePath+"/app/payChannel/checkPayChannelStatus.do";
	$.ajax({
		url : url_,
		type : "POST",
		data : {
			channelPaytypeId:channelPaytypeId ,
			paychannelId:paychannelId},
		success : function(result) {
			var jsonObj = eval("("+result+")");		
			var msgCode = jsonObj.msgCode;
    		payChannelStatus = msgCode;
		}
	});		
}


function setValCache(){
	localStorage.setItem("userId", userId);
	localStorage.setItem("businessName", $("#businessName").val());
	localStorage.setItem("businessNickname", $("#businessNickname").val());
	localStorage.setItem("legalPerson", $("#legalPerson").val());
	localStorage.setItem("idcardNum", $("#idcardNum").val());
	localStorage.setItem("contactName", $("#contactName").val());
	localStorage.setItem("cardValidtime", $("#cardValidtime").val());
	localStorage.setItem("provinceCity", $("#provinceCity").val());
	localStorage.setItem("province", $("#province").val());
	localStorage.setItem("city", $("#city").val());
	localStorage.setItem("addrDetail", $("#addrDetail").val());
	localStorage.setItem("accountName", $("#accountName").val());
	localStorage.setItem("accountBank", $("#accountBank").val());
	localStorage.setItem("bankCityProvince", $("#bankCityProvince").val());
	localStorage.setItem("bank_province", $("#bank_province").val());
	localStorage.setItem("bank_city", $("#bank_city").val());
	localStorage.setItem("bankDetail", $("#bankDetail").val());
	localStorage.setItem("accountLinenum", $("#accountLinenum").val());
	localStorage.setItem("bankCardNo", $("#bankCardNo").val());
	localStorage.setItem("accountType", $(".account_type:checked").val()); 
	localStorage.setItem("storeType", $(".store_type:checked").val()); 
}

function getValCache(){
	var userIds = localStorage.getItem("userId");
	if(userIds == userId){
		$("#businessName").val(localStorage.getItem("businessName"));
		$("#businessNickname").val(localStorage.getItem("businessNickname"));
		$("#legalPerson").val(localStorage.getItem("legalPerson"));
		$("#idcardNum").val(localStorage.getItem("idcardNum"));
		$("#contactName").val(localStorage.getItem("contactName"));
		$("#cardValidtime").val(localStorage.getItem("cardValidtime"));
		$("#provinceCity").val(localStorage.getItem("provinceCity"));
		$("#province").val(localStorage.getItem("province"));
		$("#city").val(localStorage.getItem("city"));
		$("#addrDetail").val(localStorage.getItem("addrDetail"));
		$("#accountName").val(localStorage.getItem("accountName"));
		$("#accountBank").val(localStorage.getItem("accountBank"));
		$("#bankCityProvince").val(localStorage.getItem("bankCityProvince"));
		$("#bank_province").val(localStorage.getItem("bank_province"));
		$("#bank_city").val(localStorage.getItem("bank_city"));
		$("#bankDetail").val(localStorage.getItem("bankDetail"));
		$("#accountLinenum").val(localStorage.getItem("accountLinenum"));
		$("#bankCardNo").val(localStorage.getItem("bankCardNo"));
		var storeType = localStorage.getItem("storeType");
		$(".store_type[value='"+storeType+"']").prop("checked",true);
		if(storeType == 1){
			$(".account_types").show();
		}else if(storeType == 2){
			$(".account_types").hide();
			$("#accountNameTitle").attr("data-name","开户名称")
		}
		var accountType = localStorage.getItem("accountType");
		$(".account_type[value='"+accountType+"']").prop("checked",true);
		if(accountType == 2){
			$("#accountNameTitle").attr("data-name","公司名称")
		}else if(accountType == 3 || storeType == 2){
			$("#accountNameTitle").attr("data-name","开户名称")
		}
	}
}



function setVal(){
	var url_ = basePath + "/app/payChannel/payChannelDetail.do";
	$.ajax({
		url : url_,
		type : "POST",
		data : {
			payChannelId:$("#payChannelId").val()
		},
		async : false,
		dataType : "json",
		success : function(result) {
			var msgCode = result.msgCode;
        	var obj = result.object;
        	var applyPaychannels = obj.applyPaychannelChild;
			if (msgCode == 0) {
//				$("#businessName").val(obj.businessName);
				if(applyPaychannels!=null && applyPaychannels.length >0){
					$str = '';
					setTimeout(function(){
						for(var i=0; i<applyPaychannels.length; i++){
							var obj = applyPaychannels[i];
							$("#perfect_data .perfect_data_list").each(function(){
								var filesNames = $(this).attr("filesName");
								if(filesNames == obj.filesName){
									if($(this).find("img").length>0){
										$(this).find("img").attr("src",obj.filesValue);
										$(this).find("img").removeAttr("style");
									}
									if($(this).find("input").length>0){
										var ids = $(this).find("input").attr("id");
										if(ids){
											if(ids && ids.indexOf("time")!=-1){
												$("#"+ids).val(obj.filesValue.split(" ")[0]).scroller('destroy').scroller($.extend(opt['date'], opt['default']));
											}
										}else{
											$(this).find("input").val(obj.filesValue.split(" ")[0]);
										}
									}
								}
							})
						}
						
						$("#perfect_data .perfect_data_list").each(function(){
							if($(this).find("img").length>0){
								if($(this).find("img").attr("src").indexOf("load.gif")!=-1){
									$(this).find("img").attr("src",basePath+'/resources/images/img_ico_s_0.png');
								}
							}
						});
						
						$(".valid_date").each(function(i,v){
							var h3=$(this).closest("li").prev("h3");
							var control=h3.prev(".incard_type");
							switch ($(this).val()){
								case "0":
									control.find("input[value='0']").prop("checked",true);
									$(this).closest("li").hide();
									h3.hide();
								break;
								case "1":
									control.find("input[value='1']").prop("checked",true);
									$(this).closest("li").hide();
									h3.hide();
								break;
								default:
									control.find("input[value='2']").prop("checked",true);
									$(this).closest("li").show();
									h3.show();
								break;
							}
						})

        			}, 800)
				}
			}
		}
	})
}





var xhr;
var ot;//
var oloaded;
//上传文件方法
function UpladFile(fileid) {
    var fileObj = document.getElementById(fileid).files[0]; // js 获取文件对象
    var url = basePath+"/app/payChannel/uploadfile.do";
    var form = new FormData(); // FormData 对象
    form.append("file", fileObj); // 文件对象

    xhr = new XMLHttpRequest();  // XMLHttpRequest 对象
    xhr.open("post", url, true); //post方式，url为服务器请求地址，true 该参数规定请求是否异步处理。
    xhr.onload = uploadComplete(fileid); //请求完成
    xhr.onerror =  uploadFailed; //请求失败
    xhr.upload.onprogress = progressFunction;//【上传进度调用方法实现】
    xhr.upload.onloadstart = function(){//上传开始执行方法
        ot = new Date().getTime();   //设置上传开始时间
        oloaded = 0;//设置上传开始时，以上传的文件大小为0
    };
    xhr.send(form); //开始上传，发送form数据
}
//上传进度实现方法，上传过程中会频繁调用该方法
function progressFunction(evt) {
     // event.total是需要传输的总字节，event.loaded是已经传输的字节。如果event.lengthComputable不为真，则event.total等于0
	var loading  = Math.round(evt.loaded / evt.total * 100);
	radialObj.animate(loading);
	/*if(loading == 100){
		setTimeout(function(){
			$(".cover_pop").hide();
			$(".pop_content").hide();
			radialObj.value(0); 
		},6000);
	}*/
}

var inters;
//上传成功响应
function uploadComplete(fileid) {
	inters = setInterval(function(){req(xhr,fileid)},200);
}

function req(xhr,fileid){
	if(xhr.readyState == 4){
		
		$(".cover_pop").hide();
		$(".pop_content").hide();
		radialObj.value(0); 
		clearInterval(inters);
		var data = xhr.responseText;
		var arr = data.split("#");
		if(arr[0] == 0){
			/*var len = arr[1].lastIndexOf(".");
			var picOne = arr[1].substring(0,len);
			var picTwo = arr[1].substring(len,arr[1].length);
			$("#" + fileid + "_show").attr("src", picOne+"_1000x1000"+picTwo);*/
			$("#" + fileid + "_show").attr("src", basePath+'/resources/images/load.gif');
			$("#" + fileid + "_show").attr("style", "width: auto;height: 80%;margin: 0 auto;margin-top: 10%;display: block;");
			setTimeout(function(){
				$("#" + fileid + "_show").attr("src", arr[1]);
				$("#" + fileid + "_show").removeAttr("style");
			},100)
		} else {
			alertErrors(arr[1]);
		}
	}
}
//上传失败
function uploadFailed(evt) {
	var data = xhr.responseText;
	var arr = data.split("#");
	alertErrors(arr[1]);
	$(".cover_pop").hide();
    $(".pop_content").hide();
    radialObj.value(0);
}
  //取消上传
function cancleUploadFile(){
    xhr.abort();
}