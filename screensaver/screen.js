/**
 * Created by hyj on 2016/5/30.
 */
var wait_time_long =1500;
var wait_time_middle = 10000;
var wait_time_short= 500;
var cycle_time = 60000*5;
var subtitle_speed = 20;
var picture_speed = 1000;
var picture_duration = 5000;
var request_head= "../request.php";



var usr = "";
var StatCode = "";
var usr_img;
var usr_msg
function scroll(obj) {
    var tmp = (obj.scrollLeft)++;
//当滚动条到达右边顶端时
    if (obj.scrollLeft==tmp) obj.innerHTML += obj.innerHTML;
//当滚动条滚动了初始内容的宽度时滚动条回到最左端
    if (obj.scrollLeft>=obj.firstChild.offsetWidth) obj.scrollLeft=0;
}
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
window.onload = function(){



}

$(document).ready(function() {

    usr = getQueryString("id");
    StatCode= getQueryString("StatCode");
    console.log(usr+" "+StatCode);
    if(usr!=null&&StatCode!=null){
        get_user_image();
        show_user_message();
    }

    window.setTimeout("initialize()", wait_time_middle);

});
function initialize(){

    if(usr!=null&&StatCode!=null){
        var txt ="";
        for(var i=0;i<usr_img.length;i++){
            txt = txt +"<div style='background-image: url("+usr_img[i].url+")'></div>";
        }
        console.log(txt);
        $("#random").empty();
        $("#random").append(txt);
    }
    $("#random").skippr({
        transition:'fade', //slade or fade
        speed: picture_speed,
        //easing:'easeOutQuart',
        navTape:'block',//block or bubble
        childrenElementType: 'div', //div or img
        arraws: false,
        autoPlay : true,
        autoPlayDuration : picture_duration,
        logs : false,
        keyboardOnAlways: false,
        //hidePrevious:true
    });

    var basic_min_height = parseInt(($("#scrollobj").css("height")).replace(/[^0-9]/ig,""));
    var font_size = basic_min_height*0.65;
    var margin_top = basic_min_height*0.3;
    $("#scrollobj").css("padding-top",margin_top+"px");
    $(".float_subtitle").css("font-size",font_size+"px");
    setInterval("scroll(document.getElementById('scrollobj'))",subtitle_speed);
    setInterval("show_user_message()",cycle_time);
}

function get_user_image(){
	var body={id: usr};
    var map = {
        action: "GetUserImg",
        body:body,
		type:"query",
		user:usr
    };
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "true"){
            usr_img = result.ret;
        }
    });
}

function show_user_message(){
	var body={
		id: usr,
        StatCode: StatCode
	};
    var map = {
        action: "ShowUserMsg",
        body:body,
		type:"query",
		user:usr
    };
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "true"){
            usr_msg = result.msg;

            $("#subtxt").empty();
            $("#subtxt").append(usr_msg);
        }
    });
}


