/**
 * Created by Huang Yuanjie on 2017/12/25.
 */
//var request_head= ".request";
//var jump_url = ".jump";
var basic_address = getRelativeURL()+"/";
var request_head= basic_address+"request.php";
var jump_url = basic_address+"jump.php";
var login_url = basic_address+"Login.html";
var lost_url = basic_address+"LostPassword.html";
var winHeight=800;
var winWidth=800;
var logoHeight=100;
var headHeight=100;
var tempInterval=0;




//var request_head= ".request";
//var jump_url = ".jump";
var basic_address = getRelativeURL()+"/";
var request_head= basic_address+"request.php";
var jump_url = basic_address+"jump.php";
var login_url = basic_address+"Login.html";
var lost_url = basic_address+"LostPassword.html";
var winHeight=800;
var winWidth=800;
var logoHeight=100;
var headHeight=100;
var tempInterval=0;
function getsec(str)
{
    var str1=Number(str.substring(1,str.length));
    var str2=str.substring(0,1);
    if (str2=="s")
    {
        return str1*1000;
    }
    else if (str2=="m")
    {
        return str1*60*1000;
    }
    else if (str2=="h")
    {
        return str1*60*60*1000;
    }
    else if (str2=="d")
    {
        return str1*24*60*60*1000;
    }
}
function setCookie(name,value,time)
{
    var strsec = getsec(time);
    var exp = new Date();
    var expires = exp.getTime() + Number(strsec);
    exp.setTime(exp.getTime() + Number(strsec));
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    arr=document.cookie.match(reg);
    if(arr=== true)
        return unescape(arr[2]);
    else
        return null;
}
function jump(str){
    log("try to dump to session "+window.location.host+jump_url+"?session"+str);
    window.location="http://"+window.location.host+jump_url+"?session="+str;
}
$(document).ready(function() {
    get_size();

    var basic_min_height = parseInt(($(".leaderboard").css("padding-top")).replace(/[^0-9]/ig,""));
    if((window.screen.availHeight -600)/2>basic_min_height) basic_min_height = (window.screen.availHeight -600)/2;
    $(".leaderboard").css("padding-top",basic_min_height+"px");
    console.log( $(".leaderboard").css("padding-top"));
    $("#TimeoutFlash").on('click',function(){
        window.location.reload(true);
    });
    var session_id = $("#QRbody").attr("session");
    console.log("session ="+session_id);
    tempInterval = setInterval(function() {
        check_session_active(session_id);
    }, 2000);
});

window.onload = function(){
    $("[data-toggle='modal']").click(function(){
        var _target = $(this).attr('data-target');
        t=setTimeout(function () {
            var _modal = $(_target).find(".modal-dialog");
            _modal.animate({'margin-top': parseInt(($(window).height() - _modal.height())/2)}, 300 );
        },200);
    });
    var usrname = getCookie("Environmental.inspection.usrname");
    if(null!==usrname) $("#Username_Input").val(usrname);
    /*
    var session = getCookie("Environmental.inspection.session");
    log("check cookie: username["+usrname+"]session["+session+"]");
    if(null!==session&&session.length>0){
        jump(session);

    }*/
};

function modal_middle(modal){
    setTimeout(function () {
        var _modal = $(modal).find(".modal-dialog");
        _modal.animate({'margin-top': parseInt(($(window).height() - _modal.height())/2)}, 300 );
    },200);
}

function get_size(){
    if (window.innerWidth)
        winWidth = window.innerWidth;
    else if ((document.body) && (document.body.clientWidth))
        winWidth = document.body.clientWidth;
    if (window.innerHeight)
        winHeight = window.innerHeight;
    else if ((document.body) && (document.body.clientHeight))
        winHeight = document.body.clientHeight;
    if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth)
    {
        winHeight = document.documentElement.clientHeight;
        winWidth = document.documentElement.clientWidth;
    }
    console.log("winWidth = "+winWidth);
    console.log("winHeight= "+winHeight);
    var tempheight = winHeight;
    if(winHeight>winWidth) tempheight = winWidth;
    logoHeight=parseInt(tempheight/5);
    headHeight=parseInt(tempheight/5);
    $("#logo").css("height",logoHeight);
    $("#webhead").css("height",logoHeight);
    $("body").css("height",winHeight);
    var module_height = (parseInt((winHeight-180)/2)-64)/2;
    $("#kuang").css("margin-top",module_height);
    if(winHeight>winWidth){
        $("#webhead").css("margin-top",logoHeight);
    }

}
function JQ_get(url,request,callback){
    jQuery.get(url, request, function (data) {
        log(data);
        var result=JSON.parse(data);
        callback(result);
    });
}
function check_session_active(session){
    var body={
        session:session
    };
    var map={
        action:"check_session_active",
        body:body,
        type:"query",
        user:null
    };
    var callback=function(result){
        //console.log("check session back:");
        //console.log(result);
        if(result.status!="true"){
            clearInterval(tempInterval);
            $("#UserAlertModalLabel").text = "警告";
            $("#UserAlertModalContent").empty();
            $("#UserAlertModalContent").append("<strong>警告！</strong>"+result.msg);
            modal_middle($('#UserAlarm'));
            $('#UserAlarm').modal('show') ;

        }else{
            var content = result.ret;
            if(content.active === "timeout"){
                clearInterval(tempInterval);
                $("#UserAlertModalLabel").text = "警告";
                $("#UserAlertModalContent").empty();
                $("#UserAlertModalContent").append("<strong>警告！</strong>二维码有效期超时，点击确认或刷新页面重新获得二维码！");
                modal_middle($('#UserAlarm'));
                $('#UserAlarm').modal('show') ;
            }else if(content.active === "true"){
                clearInterval(tempInterval);
                //console.log("prepare jump");
                jump(result.ret.key);
            }else{
                return;
            }

        }
    };
    JQ_get(request_head,map,callback);
}