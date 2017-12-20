
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
    $("#Login_Comfirm").on('click',function(){
        if($("#Username_Input").val() === ""){
            $("#Username_Input").focus();
            return;
        }
        if($("#Password_Input").val() === ""){
            $("#Password_Input").focus();
            return;
        }
        setCookie("Environmental.inspection.usrname",$("#Username_Input").val(),"d30");
        var map={
            action:"login",
            name:$("#Username_Input").val(),
            password:b64_sha1($("#Password_Input").val())
        };
        var callback=function(result){
            if(result.status!="true"){
                $("#UserAlertModalLabel").text = "警告";
                $("#UserAlertModalContent").empty();
                $("#UserAlertModalContent").append("<strong>警告！</strong>"+result.msg);
                modal_middle($('#UserAlarm'));
                $('#UserAlarm').modal('show') ;
            }else{
                setCookie("Environmental.inspection.session",result.ret.key,"m10");
                jump(result.ret.key);
            }
        };
        JQ_get(request_head,map,callback);



        /*
        jQuery.get(request_head, map, function (data) {
            var result=JSON.parse(data);
            if(result.status!="true"){
                $("#UserAlertModalLabel").text = "警告";
                $("#UserAlertModalContent").empty();
                $("#UserAlertModalContent").append("<strong>警告！</strong>"+result.text);
                modal_middle($('#UserAlarm'));
                $('#UserAlarm').modal('show') ;
            }else{
                setCookie("Environmental.inspection.session",result.key,"m10");
                jump(result.key);
            }

        });*/

    });
    $("#Forget_Password").on('click',function(){
        jump_to_password_change();
    });
    $("#back_to_Login").on('click',function(){
        jump_to_login();
    });
    $("#Send_SMS").on('click',function(){
        var username = $("#Username_Input").val();
        if(username === ""){
            $("#Username_Input").focus();
            return;
        }else{
            send_authcode(username);
        }
    });
    /*
    $("#Send_SMS").attr("disabled","disabled");
    $("#Username_Input").change(function(){
        if($("#Username_Input").val()!==""){
            console.log("cancel disable");
            $("#Send_SMS").attr("disabled","");
        }else{
            $("#Send_SMS").attr("disabled","disabled");
        }
    });*/
    $("#NewPassword_Comfirm").on('click',function(){
       passwordchange();
    });
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

    var session = getCookie("Environmental.inspection.session");
    log("check cookie: username["+usrname+"]session["+session+"]");
    if(null!==session&&session.length>0){
        jump(session);

    }
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
function jump_to_password_change(){
    window.location="http://"+window.location.host+lost_url;
}
function jump_to_login(){
    window.location="http://"+window.location.host+login_url;
}
function send_authcode(username){
    var body={
        name:username
    };
    var map={
        action:"Get_user_auth_code",
        body:body,
        type:"query",
        user:null
    };
    var callback=function(result){
        if(result.status!="true"){
            $("#UserAlertModalLabel").text = "警告";
            $("#UserAlertModalContent").empty();
            $("#UserAlertModalContent").append("<strong>警告！</strong>"+result.msg);
            modal_middle($('#UserAlarm'));
            $('#UserAlarm').modal('show') ;
        }else{
            sms_buffer();
        }
    };
    JQ_get(request_head,map,callback);
}
function sms_buffer(){
    $("#Send_SMS").attr("disabled","disabled");
    $("#Send_SMS").attr("data-cycle","0");
    cycle_action = function(){
        cyclenumber = parseInt( $("#Send_SMS").attr("data-cycle"));
        console.log(cyclenumber);
        if(cyclenumber+1 == 60){
            $("#Send_SMS").attr("disabled",false);
            $("#Send_SMS").attr("data-cycle","0");
            $("#Send_SMS").text("发送验证码");
            window.clearInterval(tempInterval);
        }else{
            $("#Send_SMS").attr("data-cycle",(cyclenumber+1));
            $("#Send_SMS").text("请等待"+(60-cyclenumber)+"秒");
        }
    };
    tempInterval = setInterval(cycle_action, 1000);
}
function passwordchange(){
    var username = $("#Username_Input").val();
    var authcode = $("#Authcode_Input").val();
    var password = $("#NewPassword_Input").val();
    var repassword = $("#reNewPassword_Input").val();
    if(username === ""){
        $("#Username_Input").focus();
        return;
    }
    if(authcode === ""){
        $("#Authcode_Input").focus();
        return;
    }
    if(password === ""){
        $("#NewPassword_Input").focus();
        return;
    }
    if(repassword === ""){
        $("#reNewPassword_Input").focus();
        return;
    }
    if(password != repassword ){
        $("#NewPassword_Input").val("");
        $("#reNewPassword_Input").val("");
        $("#NewPassword_Input").attr("placeholder","两个密码不相同");
        $("#reNewPassword_Input").attr("placeholder","两个密码不相同");
        $("#NewPassword_Input").focus();
        return;
    }
    var body={
        name:username,
        code:authcode,
        password:b64_sha1(password)
    };
    var map={
        action:"Reset_password",
        body:body,
        type:"query",
        user:null
    };
    var passwordresetcallback=function(result){
        if(result.status!="true"){
            $("#UserAlertModalLabel").text = "警告";
            $("#UserAlertModalContent").empty();
            $("#UserAlertModalContent").append("<strong>警告！</strong>"+result.msg);
            modal_middle($('#UserAlarm'));
            $('#UserAlarm').modal('show') ;
        }else{
            setCookie("Environmental.inspection.session",result.ret.key,"m10");
            jump(result.ret.key);
        }
    };
    JQ_get(request_head,map,passwordresetcallback);
}