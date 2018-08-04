/**
 * Created by hyj on 2017/8/18.
 */

var basic_address = getRelativeURL()+"/";
console.log(basic_address);
var wait_time_long =3000;
var wait_time_middle = 1000;
var wait_time_short= 500;
var cycle_time = 60000;
var install_path="_INSTALL_PATH_";
var request_head= install_path+"/request.php";//basic_address+"../request.php";
var admintools_head= basic_address+"/admintools.php";
var jump_url = install_path+"/jump.php";//basic_address+"../jump.php";
var upload_url=basic_address+"/upload.php";
function logout(){
    delCookie("Environmental.inspection.session");
    window.location="http://"+window.location.host+install_path+"/login.html";
}

function goback(){
    delCookie("Environmental.inspection.session");
    window.location="http://"+window.location.host+jump_url+"?session="+getQueryString("session")+"#";
}


var usr;
usr = "";


var Software_Load_table_initialized = true;
var if_Software_Load_table_initialize = false;


var CURRENT_URL = "desktop",
    $BODY = $('body'),
    $MENU_TOGGLE = $('#menu_toggle'),
    $SIDEBAR_MENU = $('#sidebar-menu'),
    $SIDEBAR_FOOTER = $('.sidebar-footer'),
    $LEFT_COL = $('.left_col'),
    $RIGHT_COL = $('.right_col'),
    $NAV_MENU = $('.nav_menu'),
    $FOOTER = $('footer');

$(document).ready(function() {
    // TODO: This is some kind of easy fix, maybe we can improve this
    var setContentHeight = function () {
        // reset height
        $RIGHT_COL.css('min-height', $(window).height());

        var bodyHeight = $BODY.outerHeight(),
            footerHeight = $FOOTER.outerHeight(),
            leftColHeight = $LEFT_COL.eq(1).height() + $SIDEBAR_FOOTER.height(),
            contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

        // normalize content
        contentHeight -= $NAV_MENU.outerHeight() + footerHeight;

        $RIGHT_COL.css('min-height', contentHeight);
    };

    $(window).smartresize(function(){
        setContentHeight();
    });
    setContentHeight();
});

function write_title(title,sub_titile){
    $("#page_title").empty();
    $("#page_title").append("<h3>"+title+" <small>"+sub_titile+"</small></h3>");
}

(function($,sr){
    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function (func, threshold, execAsap) {
        var timeout;

        return function debounced () {
            var obj = this, args = arguments;
            function delayed () {
                if (!execAsap)
                    func.apply(obj, args);
                timeout = null;
            }

            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);

            timeout = setTimeout(delayed, threshold || 100);
        };
    };

    // smartresize
    jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

window.onload = function(){
};
function nav_check(){
    if(usr.admin == "true"){
        $("#Admin_menu").css("display","block");
    }else{
        $("#Admin_menu").css("display","none");
    }
    //console.log(usr);
    $("#Hello_label").text("您好："+usr.name);
    var $b_label = $(+" <b class='caret'></b>");
    $("#Hello_label").append("<span class=' fa fa-angle-down'></span>");
}

function modal_middle(modal){
    if(!$BODY.hasClass('nav-md')){
        $MENU_TOGGLE.click();}

    setTimeout(function () {
        var _modal = $(modal).find(".modal-dialog");
        if(parseInt(($(window).height() - _modal.height())/2)>0){

            _modal.animate({'margin-top': parseInt(($(window).height() - _modal.height())/2)}, 300 );
        }
    },wait_time_short);
}


function PageInitialize(){
    get_user_information();// TODO: open this function while everything is OK.
    Software_Load_Management();
    //hyj add in 20160926 for server very slow
    //window.setTimeout(get_monitor_list, wait_time_middle);
    //window.setTimeout(nav_check, wait_time_short);
    //window.setTimeout("get_monitor_list()", wait_time_middle);
    //window.setTimeout("nav_check()", wait_time_short);
}
function hide_menu(){
    for (var key in usr.userauth.webauth) {
        if(usr.userauth.webauth[key] == "false") $("#"+key).css('display','none');
    }
}
function clear_window(){
    $("#SoftwareLoadview").css("display","none");
}
function get_user_information(){
    var session = getQueryString("session");
    var body = {
        session: session
    };
    var map={
        action:"UserInfo",
        type:"query",
        body: body,
        user:"null"
    };
    var get_user_information_callback = function(result){
        var ret = result.status;
        if(ret == "false"){
            show_alarm_module(true,"获取用户失败，请联系管理员",null);
        }else{
            usr = result.ret;
            nav_check();
            query_Software_Load_list();
        }
    };
    JQ_get(request_head,map,get_user_information_callback);

}


function show_expiredModule(){
    modal_middle($('#ExpiredAlarm'));
    $('#ExpiredAlarm').modal('show') ;
}

$(document).ready(function() {
    $("[data-toggle='modal']").click(function(){
        var _target = $(this).attr('data-target');
        t=setTimeout(function () {
            var _modal = $(_target).find(".modal-dialog");
            _modal.animate({'margin-top': parseInt(($(window).height() - _modal.height())/2)}, 300 );
        },wait_time_short);
    });

    PageInitialize();
    $("#menu_logout").on('click',function(){
        goback();
    });
    $("#ExpiredConfirm").on('click',function() {
        logout();
    });
    $("#NewSoftwareLoadModalShow").on('click',function(){


        $('#file-zh').fileinput({
            language: 'zh',
            uploadUrl: upload_url+"?id="+usr.id,
            allowedFileExtensions : ['swl'],
            'showPreview' : false,
        });
        modal_middle($('#newSoftwareLoadModal'));
        $('#newSoftwareLoadModal').modal('show') ;
    });
    $("#newSoftwareLoadCommit").on('click',function(){
        console.log("commit");
        submit_new_software_load_module();
    });
    $("#delSoftwareLoadCommit").on('click',function(){

        del_software_load($("#delSoftwareLoadCommit").attr("SoftID"));
    });

    $(window).resize();

});

function Software_Load_Management(){
    clear_window();
    write_title("软件包管理与下发","");
    $("#SoftwareLoadview").css("display","block");

}
function query_Software_Load_list(){
    if(Software_Load_table_initialized !== true) return;
    var map={
        action:"GetSoftwareLoadTable",
        type:"query",
        user:usr.id
    };
    var GetSoftwareLoadTable_callback= function(result){
        //log(data);
        //var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        var Last_update_date=(new Date()).Format("yyyy-MM-dd_hhmmss");
        $("#SoftwareLoadFlashTime").empty();
        $("#SoftwareLoadFlashTime").append("最后刷新时间："+Last_update_date);
        var ColumnName = result.ret.ColumnName;
        var TableData = result.ret.TableData;
        //var txt = "<thead> <tr><th></th><th></th>";
        var txt = "<thead> <tr><th></th>";
        var i;
        for( i=0;i<ColumnName.length;i++){
            txt = txt +"<th>"+ColumnName[i]+"</th>";
        }
        //txt = txt +"<th></th></tr></thead>";
        txt = txt +"</tr></thead>";
        txt = txt +"<tbody>";
        for( i=0;i<TableData.length;i++){
            txt = txt +"<tr>"+
            "<td><button type='button' class='btn btn-default Soft_del_btn' SoftID='"+TableData[i][0]+"' ><em class='glyphicon glyphicon-trash ' aria-hidden='true' ></em></button></td>" ;
            //txt = txt +"<td><button type='button' class='btn btn-default lock_btn' StateCode='"+TableData[i][0]+"' ><em class='glyphicon glyphicon-lock ' aria-hidden='true' ></em></button></td><td><button type='button' class='btn btn-default video_btn' StateCode='"+TableData[i][0]+"' ><em class='glyphicon glyphicon-play ' aria-hidden='true' ></em></button></td>";
            //console.log("StateCode="+TableData[i][0]);
            for(var j=0;j<TableData[i].length;j++){
                txt = txt +"<td>"+TableData[i][j]+"</td>";
            }
            //txt = txt + "<td><button type='button' class='btn btn-default video_btn' StateCode='"+TableData[i][0]+"' >视频</button></td>";
            txt = txt +"</tr>";
        }
        txt = txt+"</tbody>";
        $("#SoftwareLoadQueryTable").empty();
        $("#SoftwareLoadQueryTable").append(txt);

        $(".Soft_del_btn").on('click',function(){
            show_software_load_delete_module($(this).attr("SoftID"));
        });

        if(Software_Load_table_initialized) $("#SoftwareLoadQueryTable").DataTable().destroy();

        //console.log(monitor_map_list);

        var show_table  = $("#SoftwareLoadQueryTable").DataTable( {
            //dom: 'T<"clear">lfrtip',
            "scrollY": true,
            "scrollCollapse": true,

            "scrollX": true,
            "searching": false,
            "autoWidth": true,
            "lengthChange":false,
            //"paging":false,
            //bSort: false,
            //aoColumns: [ { sWidth: "45%" }, { sWidth: "45%" }, { sWidth: "10%", bSearchable: false, bSortable: false } ],
            dom: 'Bfrtip',
            select:true,
            buttons:{
                buttons:[

                    {
                        extend: 'excel',
                        text: '导出到excel',
                        filename: "AlarmData"+Last_update_date
                    }
                ]
            }

        } );
        Software_Load_table_initialized = true;
    };
    JQ_get(admintools_head,map,GetSoftwareLoadTable_callback);

}

function show_software_load_delete_module(softid){
    $("#delSoftwareLoadCommit").attr("SoftID",softid);
    $("#SoftwareLoadDelAlertModalLabel").text("确认删除 软件版本:["+softid+"]");
    modal_middle($('#SoftwareLoadDelAlarm'));

    $('#SoftwareLoadDelAlarm').modal('show');
}


function JQ_get(url,request,callback){
    if(request.user!="null"){
        if(usr.userauth[request.type] == "false"){
            show_alarm_module(true,"您没有进行此操作的权限",null);
            return;
        }
    }
    jQuery.get(url, request, function (data) {
        log(data);
        var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        if(result.auth == "false"){
            show_alarm_module(true,"您没有进行此操作的权限："+result.msg,null);
            return;
        }
        callback(result);
    });
}
function JQ_get_with_para(url,request,callback,para){
    if(request.user!="null"){
        if(usr.userauth[request.type] == "false"){
            show_alarm_module(true,"您没有进行此操作的权限",null);
            return;
        }
    }
    jQuery.get(url, request, function (data) {
        log(data);
        var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        if(result.auth == "false"){
            show_alarm_module(true,"您没有进行此操作的权限："+result.msg,null);
            return;
        }
        callback(result,para);
    });
}

function submit_new_software_load_module(){
    var new_software_load_equentry = $("#NewSoftwareLoadEquentry_Input").val();
    var new_software_load_validflag = $("#NewSoftwareValidFlag_Input").val();
    var new_software_load_upgradeflag = $("#NewSoftwareUpgradeFlage_Input").val();
    var new_software_load_hwtype = $("#NewSoftwareHWType_Input").val();
    var new_software_load_hwid = $("#NewSoftwareLoadHWID_Input").val();
    var new_software_load_swrel = $("#NewSoftwareSWRel_Input").val();
    var new_software_load_swver = $("#NewSoftwareLoadSWVer_Input").val();
    var new_software_load_dbver = $("#NewSoftwareDBVer_Input").val();
    var new_software_file_name = $(".file-caption-name").attr("title");
    //console.log("new_usr_name:"+new_usr_name);
    if(new_software_load_equentry === null || new_software_load_equentry === ""){
        $("#NewSoftwareLoadEquentry_Input").attr("placeholder","Equentry不能为空");
        $("#NewSoftwareLoadEquentry_Input").focus();
        return;
    }
    if(new_software_load_validflag === null || new_software_load_validflag === ""){
        $("#NewSoftwareValidFlag_Input").attr("placeholder","validflag不能为空");
        $("#NewSoftwareValidFlag_Input").focus();
        return;
    }
    if(new_software_load_upgradeflag === null || new_software_load_upgradeflag === ""){
        $("#NewSoftwareUpgradeFlage_Input").attr("placeholder","UpgradeFlage不能为空");
        $("#NewSoftwareUpgradeFlage_Input").focus();
        return;
    }
    if(new_software_load_hwtype === null || new_software_load_hwtype === ""){
        $("#NewSoftwareLoadHWType_Input").attr("placeholder","HWType不能为空");
        $("#NewSoftwareLoadHWType_Input").focus();
        return;
    }
    if(new_software_load_hwid === null || new_software_load_hwid === ""){
        $("#NewSoftwareLoadHWID_Input").attr("placeholder","HWID不能为空");
        $("#NewSoftwareLoadHWID_Input").focus();
        return;
    }
    if(new_software_load_swrel === null || new_software_load_swrel === ""){
        $("#NewSoftwareSWRel_Input").attr("placeholder","SWRel不能为空");
        $("#NewSoftwareSWRel_Input").focus();
        return;
    }
    if(new_software_load_swver === null || new_software_load_swver === ""){
        $("#NewSoftwareLoadSWVer_Input").attr("placeholder","SWVer不能为空");
        $("#NewSoftwareLoadSWVer_Input").focus();
        return;
    }
    if(new_software_load_dbver === null || new_software_load_dbver === ""){
        $("#NewSoftwareDBVer_Input").attr("placeholder","DBVer不能为空");
        $("#NewSoftwareDBVer_Input").focus();
        return;
    }
    if(new_software_file_name === null || new_software_file_name === ""){
        $(".file-caption-name").focus();
        return;
    }
    var softwareload = {
        equentry:new_software_load_equentry,
        validflag:new_software_load_validflag,
        upgradeflag:new_software_load_upgradeflag,
        hwtype:new_software_load_hwtype,
        hwid:new_software_load_hwid,
        swrel:new_software_load_swrel,
        swver:new_software_load_swver,
        dbver:new_software_load_dbver,
        filename:new_software_file_name
    };
    new_software_load(softwareload);
}
function new_software_load(softwareload){

    var map={
        action:"SoftwareLoadNew",
        type:"mod",
        body: softwareload,
        user:usr.id
    };
    //console.log(map);
    //console.log(JSON.stringify(map));
    var new_software_load_callback = function(result){
        var ret = result.status;
        if(ret == "true"){

            $('#newSoftwareLoadModal').modal('hide');
            setTimeout(function(){
                show_alarm_module(false,"创建成功！",query_Software_Load_list);},500);
        }else{
            setTimeout(function(){
                show_alarm_module(true,"创建失败！"+result.msg,null);},500);
        }
    };
    JQ_get(admintools_head,map,new_software_load_callback);

}

function del_software_load(id){
    var body={
        softwareloadid:id
    }
    var map={
        action:"SoftwareLoadDel",
        type:"mod",
        body: body,
        user:usr.id
    };
    //console.log(map);
    //console.log(JSON.stringify(map));
    var del_software_load_callback = function(result){
        var ret = result.status;
        if(ret == "true"){

            $('#SoftwareLoadDelAlarm').modal('hide');
            setTimeout(function(){
                show_alarm_module(false,"删除成功！",query_Software_Load_list);},500);
        }else{
            setTimeout(function(){
                show_alarm_module(true,"删除失败！"+result.msg,null);},500);
        }
    };
    JQ_get(admintools_head,map,del_software_load_callback);

}

function show_alarm_module(ifalarm,text,callback){
    if(ifalarm){
        $("#UserAlertModalLabel").text("警告");
        $("#UserAlertModalContent").empty();
        $("#UserAlertModalContent").append("<strong>警告！</strong>"+text);
    }else{
        $("#UserAlertModalLabel").text ("通知");
        $("#UserAlertModalContent").empty();
        $("#UserAlertModalContent").append("<strong>通知：</strong>"+text);
    }
    modal_middle($('#UserAlarm'));
    $('#UserAlarm').modal('show');
    if(callback===null){
        emptyfunction = function(){};
        $('#UserAlarm').on('hide.bs.modal',emptyfunction);
    }else{
        $('#UserAlarm').on('hide.bs.modal',function(){ setTimeout(callback, 500);});
    }
}