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