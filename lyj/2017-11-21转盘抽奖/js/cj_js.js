
 $(function(){
    $(".cj_pop_12_close img,.pop_cover_bg,.close_click_rules").on({ //关闭未中奖弹出框
        "click":function(){
            close_Pop("pop_layer")
        }
    })
    $(".rotateArrow").on({
        "click":function(){

        }
    })
    $(".open_click_rules").on({
        "click":function(){
            showPop("rulebooks");
        }
    })
    $(".rotateArrow").on({
        "click":function(){
            var n = Math.floor(Math.random()*5+1);//0~7之间的随机整数    正式去掉
            roundDraw(n,"1")
        }
    })
})




var isNum = 0
function roundDraw(nums,data){//转盘指针转动
    var currentNum = 0;
    isNum++
    if(nums == 1){
        currentNum += nums*360*6*isNum
        setTimeout(function(){
            showPop("empty_draw");
        },4000);
    }else if(nums == 2){
        currentNum += 58+360*6*isNum
        setTimeout(function(){
            $(".cj_zjs .cj_pop_12_con_t_img").hide();
            $(".cj_zjs .cj_img_jp_00").show();
            $(".cj_zjs .cj_pop_12_con_f_h2").html("恭喜你，中了特等奖！");
            $(".cj_zjs .cj_pop_12_con_f_p").html("")
            $(".cj_zjs .cj_pop_12_con_f_p").append("抽到<span>Iphone X</span>一台");
            $(".cj_zjs .cj_pop_12_con_btn_a").html("点击领取");
            showPop("winning_draw");
        },4000);
    }else if(nums == 3){
        currentNum += 58*2+360*6*isNum
        setTimeout(function(){
            $(".cj_zjs .cj_pop_12_con_t_img").hide();
            $(".cj_zjs .cj_img_jp_01").show();
            $(".cj_zjs .cj_pop_12_con_f_h2").html("恭喜你，中了一等奖！");
            $(".cj_zjs .cj_pop_12_con_f_p").html("")
            $(".cj_zjs .cj_pop_12_con_f_p").append("抽到<span>Ipad mini4</span>一台");
            $(".cj_zjs .cj_pop_12_con_btn_a").html("点击领取");
            showPop("winning_draw");

        },4000);
    }else if(nums == 4){
        currentNum += 58*3+360*6*isNum
        setTimeout(function(){
            $(".cj_zjs .cj_pop_12_con_t_img").hide();
            $(".cj_zjs .cj_img_jp_02").show();
            $(".cj_zjs .cj_pop_12_con_f_h2").html("恭喜你，中了二等奖！");
            $(".cj_zjs .cj_pop_12_con_f_p").html("")
            $(".cj_zjs .cj_pop_12_con_f_p").append("抽到<span>小米扫地机器人</span>一台");
            $(".cj_zjs .cj_pop_12_con_btn_a").html("点击领取");
            showPop("winning_draw");

        },4000);
    }else if(nums == 5){
        currentNum += 59*4+360*6*isNum
        setTimeout(function(){
            $(".cj_zjs .cj_pop_12_con_t_img").hide();
            $(".cj_zjs .cj_img_jp_04").show();
            $(".cj_zjs .cj_pop_12_con_f_h2").html("恭喜你，中了四等奖！");
            $(".cj_zjs .cj_pop_12_con_f_p").html("")
            $(".cj_zjs .cj_pop_12_con_f_p").append("抽到<span>唐人街保温瓶</span>一个");
            $(".cj_zjs .cj_pop_12_con_btn_a").html("点击领取");
            showPop("winning_draw");

        },4000);
    }else if(nums == 6){
        currentNum += 60*5+360*6*isNum
        setTimeout(function(){
            $(".cj_zjs .cj_pop_12_con_t_img").hide();
            $(".cj_zjs .cj_img_jp_03").show();
            $(".cj_zjs .cj_pop_12_con_f_h2").html("恭喜你，中了三等奖！");
            $(".cj_zjs .cj_pop_12_con_f_p").html("")
            $(".cj_zjs .cj_pop_12_con_f_p").append("抽到<span>蓝月亮家庭套装</span>一套");
            $(".cj_zjs .cj_pop_12_con_btn_a").html("点击领取");
            showPop("winning_draw");
                           
        },4000);
    }
    $(".rotateArrow").css({
            "transform":"rotate(" + currentNum +"deg)","-webkit-transform":"rotate(" + currentNum +"deg)","-moz-transform":"rotate(" + currentNum +"deg)","-o-transform":"rotate(" + currentNum +"deg)","-ms-transform":"rotate(" + currentNum +"deg)"
    });
}



function showPop(id){ //打开弹出框方法 ，传弹出框id
    $(".pop_cover_bg").show();
    $("#"+id).show();
    $('.pop_layer').css('max-height',$(window).height() * 0.9);
    $("#"+id).css({
        'left': ($(window).width()-($("#"+id).outerWidth(false)))/2,
        'top': $(window).height() / 2 - ($("#"+id).outerHeight(false) / 2)
    })
}
function close_Pop(id){ //关闭弹出框方法 ，传弹出框id
    $(".pop_cover_bg").hide();
    $("."+id).hide();
}