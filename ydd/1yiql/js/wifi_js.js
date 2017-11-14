//author  蓝色星空岛

$(function(){

    //第一步验证 start
    
    $(".wifi_font_limit_click").click(function(){
        //店铺名称验证  start
        var reg = /^[\u4e00-\u9fffa-zA-Z]{1,30}$/;
        $(".wifi_font_limit").val($(".wifi_font_limit").val().replace(/\s*/g,""));//去掉空格
        var len = $(".wifi_font_limit").val().replace(/\s*/g,"").toString();
        var n=0;
        for(var i=0 ; i<len.length;i++){
            if(/[\u4e00-\u9fff]/.test(len[i])){
                n+=2;
            }else if(/[a-zA-Z]/.test(len[i])){
                n++;
            }else{
               $('.wifi_font_limit_tips').addClass("wifi_font_limit_show");
                $('.wifi_font_limit_tips').html("店铺名称不能包含数字和特殊字符");  
            }
        }
        if($(".wifi_font_limit").val().replace(/\s*/g,"")==""){
            $('.wifi_font_limit_tips').addClass("wifi_font_limit_show");
            $('.wifi_font_limit_tips').html("请输入店铺名称");
        }else if(n>30){
            $('.wifi_font_limit_tips').addClass("wifi_font_limit_show");
            $('.wifi_font_limit_tips').html("请输入正确的格式"); 
        }
        //店铺名称验证  end
        //经营类目 start
        if($(".business_category_select_one").val() == -1 || $(".business_category_select_two").val() == -1){
            console.log($(".business_category_select_one").val())
            $(".business_category_tips").addClass("wifi_font_limit_show");
            $(".business_category_tips").html("请选择经营类目");
            return false;
        }
        
        //经营类目 start
    })
    $(".wifi_font_limit").focus(function(){
        $('.wifi_font_limit_tips').removeClass("wifi_font_limit_show");
    })
    $(".business_category_select_one,.business_category_select_two").live("change",function(){
        $(".business_category_tips").removeClass("wifi_font_limit_show"); 
    })
    //第一步验证 end
    
    //第二步验证 start
    $(".wifi_font_limit_two_click").click(function(){
        $(".wifi_font_two_limit").val($(".wifi_font_two_limit").val().replace(/\s*/g,""));//去掉空格
        $(".wifi_password_limit").val($(".wifi_password_limit").val().replace(/\s*/g,""));//去掉空格
        var lens = $(".wifi_font_two_limit").val().replace(/\s*/g,"").toString();
        var passWords = $(".wifi_password_limit").val().replace(/\s*/g,"").toString();
        var m=0;
        for(var i=0 ; i<lens.length;i++){
            if(/[\u4e00-\u9fff]/.test(lens[i])){
                $('.wifi_font_limit_two_tips').addClass("wifi_font_limit_show");
                $('.wifi_font_limit_two_tips').html("请输入正确的格式"); 
            }else{
                m++;
            }
        }
        if(passWords.length<8){
            $('.wifi_password_limit_tips').addClass("wifi_font_limit_show");
            $('.wifi_password_limit_tips').html("密码长度必须大于8位"); 
        }
        if($(".wifi_font_two_limit").val().replace(/\s*/g,"")==""){
            $('.wifi_font_limit_two_tips').addClass("wifi_font_limit_show");
            $('.wifi_font_limit_two_tips').html("请输入网络名称");
        }else if(m>32){
            $('.wifi_font_limit_two_tips').addClass("wifi_font_limit_show");
            $('.wifi_font_limit_two_tips').html("请输入正确的格式"); 
        }else if(!(/^WX/.test(lens)||/^WX/.test(passWords))){
            $('.wifi_font_limit_two_tips').addClass("wifi_font_limit_show");
            $('.wifi_font_limit_two_tips').html("必须有一个以‘WX’开头");
            $('.wifi_password_limit_tips').addClass("wifi_font_limit_show");
            $('.wifi_password_limit_tips').html("必须有一个以‘WX’开头");  
        }
    })
    $(".wifi_font_two_limit,.wifi_password_limit").focus(function(){
        $('.wifi_font_limit_two_tips').removeClass("wifi_font_limit_show");
        $('.wifi_password_limit_tips').removeClass("wifi_font_limit_show");
    })

    //第二步验证 end

})