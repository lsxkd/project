/*
* User: star
* Date: 2017/11/28
* Time: 17:03
*/

$(function(){
    $('.l_tab_ul li').click(function() {
        var i = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        // console.log($(this).parents("ul").siblings(".l_tab_cont").find(".over").html());
        $(this).parents("ul").siblings(".l_tab_cont").find(".over").eq(i).show().siblings().hide();
    });

	//tab切换



})


function mySwiper()
{
    var Swiper1 = new Swiper('#l_swiper_cont1',{
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,

    })
    var Swiper2 = new Swiper('#l_swiper_cont2',{
        simulateTouch:false,
        onlyExternal:true,
        // effect : 'fade'
    })
    Swiper1.params.control = Swiper2;//需要在Swiper2初始化后，Swiper1控制Swiper2
    // Swiper2.params.control = Swiper1;//需要在Swiper1初始化后，Swiper2控制Swiper1

}

//电影场次轮播

function expanderBox() {
    $(".l_data_text_expander_button").click(function () {
        $(".l_data_text_expander").toggleClass("active");
    })
}

//点击显示隐藏


function cityBox() {
//选择城市 start
    $('body').on('click', '.city-list p', function () {
        alert($(this).html())
    });
    //点击索引查询城市
    $('body').on('click', '.letter a', function () {
        var s = $(this).html();
        $(window).scrollTop($('#' + s + '1').offset().top);
        $("#showLetter span").html(s);
        $("#showLetter").show().delay(500).hide(0);
    });
    //中间的标记显示
    $('body').on('onMouse', '.showLetter span', function () {
        $("#showLetter").show().delay(500).hide(0);
    });

}




