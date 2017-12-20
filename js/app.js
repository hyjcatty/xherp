

//var request_head= ".request";
//var jump_url = ".jump";


//切换生产环境要更新以下数据，包括logout函数
var basic_address = getRelativeURL()+"/";
console.log(basic_address);
var wait_time_long =3000;
var wait_time_middle = 1000;
var wait_time_short= 500;
var cycle_time = 60000;
var request_head= basic_address+"request.php";
var jump_url = basic_address+"jump.php";
var upload_url=basic_address+"upload.php";
var admintools_url="_ADMINTOOL_PATH_"+"\/admintools.html";
var screen_saver_address=basic_address+"screensaver/screen.html";
var show_image_url=basic_address+"imageshow/ImageShow.html";
var global_key_word = "";
var default_point={
    'Flag_la':"N",
    'Latitude':"31.240246",
    'Flag_lo':"E",
    'Longitude':"121.514168"
};
var if_online=true;
var user_point=default_point;
//var countevent=0;
function logout(){
    delCookie("Environmental.inspection.session");
    window.location="http://"+window.location.host+basic_address+"login.html";

    /*
     delCookie("Environmental.inspection.session");
     var txt = window.location.href;
     var index =txt.lastIndexOf("/");
     window.location=txt.substr(0,index)+"/Login.html";
     */
}

function video_windows(videoid){
    window.open("http://"+window.location.host+basic_address+"/video/video.html?id="+videoid,'监控录像',"height=284, width=340, top=0, left=400,toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
}

function screen_windows(){
    window.open("http://"+window.location.host+screen_saver_address+"?id="+usr.id+"&StatCode="+monitor_selected.StatCode,'屏幕保护',"height=auto, width=auto");
}
//


var usr;
usr = "";
var admin="";
var keystr="";
var table_row=5;
var usr_msg = "";
var usr_ifdev = "true";
var usr_img = [];//new Array();
//var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
var current_table;
var table_head;
var map_MPMonitor;
var map_initialized = false;

// user table control
var user_initial = false;
var user_start=0;
var user_total=0;
var project_pg_list=null;
var user_table=null;
var user_selected;
var user_selected_auth;
var user_selected_key;
var NewUserAuthDual2;
var user_module_status;

// staff table control
var staff_initial = false;
var staff_start=0;
var staff_total=0;
var staff_table=null;
var staff_selected;
var staff_module_status;
// pg table control
var pg_initial = false;
var pg_start=0;
var pg_total=0;
var pg_table=null;
var pg_selected;
var pg_selected_proj;
var NewPGProjDual2;
var pg_module_status;
var project_list=null;


// project table control
var project_initial = false;
var project_start=0;
var project_total=0;
var project_table=null;
var project_selected;
var project_selected_device;
var project_module_status;

// parameter management
var parameter_initial = false;
var software_version_list = null;
var  if_update_table_initialize = false;

// monitor point table control
var point_initial = false;
var point_start=0;
var point_total=0;
var point_table=null;
var point_selected;
var project_selected_point;
var project_selected_key;
var point_module_status;

// device table control
var point_list=null;
var device_initial = false;
var device_start=0;
var device_total=0;
var device_table=null;
var device_selected;
var device_selected_sensor;
var device_module_status;



// key table control
var key_list=null;
var proj_user_list=null;
var key_initial = false;
var key_start=0;
var key_total=0;
var key_table=null;
var key_selected;
var key_selected_auth;
var key_module_status;

//warning Control
var monitor_map_list = null;
var monitor_handle;
var monitor_selected = null;
var monitor_list = null;
var monitor_string="";
var monitor_map_handle=null;
var mark_MPMonitor_List=[];
var usr_faverate_list = null;
//warning table Control
var Monitor_table_initialized = false;
var Monitor_table_start=0;
var Monitor_table_total=0;
//warning Static table Control
var Monitor_Static_table_initialized = true;
var Staff_Static_table_initialized = true;
var  if_static_table_initialize = false;

//key history table Control
var Key_History_table_initialized = false;
var  if_key_history_table_initialize = false;


//key history table Control
var Attendance_History_table_initialized = true;
var  if_attendance_history_table_initialize = false;
//Export table
var  if_Export_table_initialize = false;
//key auth Control
var Key_auth_initialized = false;
//alarm Control
var alarm_map_list = null;
var alarm_type_list = null;
var alarm_map_initialized = false;
var alarm_selected = null;
var alarm_map_handle=null;
var alarm_array = null;

//alarm handle control
var Warning_Handle_table_initialized = true;
var if_Warning_Handle_table_initialize = false;

//Export Control
var export_table_name = null;
var if_table_initialize = false;


//Sensor Control
var sensor_list=null;
var select_sensor_devcode=null;
var select_sensor = null;

//key module control
var select_key_auth = null;


//alarm handle control
var RTU_Manage_table_initialized = true;
var OTDR_Manage_table_initialized = true;
var if_RTU_Manage_table_initialize = false;
var if_OTDR_Manage_table_initialize = false;
//Camera Control
var camera_unit_h;
var camera_unit_v;

var Longitude = null;
var Latitude = null;
/*
var lineChartData = {
    labels : ["January","February","March","April","May","June","July"],
    datasets : [
        {
            label: "My First dataset",
            fillColor : "rgba(220,220,220,0.2)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            pointHighlightFill : "#fff",
            pointHighlightStroke : "rgba(220,220,220,1)",
            data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
        },
        {
            label: "My Second dataset",
            fillColor : "rgba(151,187,205,0.2)",
            strokeColor : "rgba(151,187,205,1)",
            pointColor : "rgba(151,187,205,1)",
            pointStrokeColor : "#fff",
            pointHighlightFill : "#fff",
            pointHighlightStroke : "rgba(151,187,205,1)",
            data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
        }
    ]

}
*/
/**
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//getLocation();
var CURRENT_URL = "desktop",
    $BODY = $('body'),
    $MENU_TOGGLE = $('#menu_toggle'),
    $SIDEBAR_MENU = $('#sidebar-menu'),
    $SIDEBAR_FOOTER = $('.sidebar-footer'),
    $LEFT_COL = $('.left_col'),
    $RIGHT_COL = $('.right_col'),
    $NAV_MENU = $('.nav_menu'),
    $FOOTER = $('footer');

// Sidebar
$(document).ready(function() {



//cycle button
    var items = document.querySelectorAll('.cycle-menuItem');
    console.log("items="+items.length);
    for(var i = 0, l = items.length; i < l; i++) {
        items[i].style.left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
        items[i].style.top = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4)-(i+1)*15 + "%";
    }
    document.querySelector('.cycle-circle').classList.toggle('open');

//window.onload = function(){

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

    $SIDEBAR_MENU.find('a').on('click', function(ev) {
        var $li = $(this).parent();

        if ($li.is('.active')) {
            $li.removeClass('active active-sm');
            $('ul:first', $li).slideUp(function() {
                setContentHeight();
            });
        } else {
            // prevent closing menu if we are on child menu
            if (!$li.parent().is('.child_menu')) {
                $SIDEBAR_MENU.find('li').removeClass('active active-sm');
                $SIDEBAR_MENU.find('li ul').slideUp();
            }

            $li.addClass('active');

            $('ul:first', $li).slideDown(function() {
                setContentHeight();
            });
        }
    });

    // toggle small or large menu
    $MENU_TOGGLE.on('click', function() {
        if ($BODY.hasClass('nav-md')) {
            $SIDEBAR_MENU.find('li.active ul').hide();
            $SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
        } else {
            $SIDEBAR_MENU.find('li.active-sm ul').show();
            $SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
        }

        $BODY.toggleClass('nav-md nav-sm');

        setContentHeight();
    });

    // check active menu
    /*
    $SIDEBAR_MENU.find('a[href="' + CURRENT_URL + '"]').parent('li').addClass('current-page');

    $SIDEBAR_MENU.find('a').filter(function () {
        return this.id == CURRENT_URL;
    }).parent('li').addClass('current-page').parents('ul').slideDown(function() {
        setContentHeight();
    }).parent().addClass('active');
    */
    $SIDEBAR_MENU.find('a[href="#"]').on('click',function(){
            if (!$BODY.hasClass('nav-md')){
                $(this).parent().parent().slideUp();
            }

        });
    // recompute content when resizing
    $(window).smartresize(function(){
        setContentHeight();
    });

    setContentHeight();

    // fixed sidebar
    if ($.fn.mCustomScrollbar) {
        $('.menu_fixed').mCustomScrollbar({
            autoHideScrollbar: true,
            theme: 'minimal',
            mouseWheel:{ preventDefault: true }
        });
    }
});
function write_title(title,sub_titile){
    $("#page_title").empty();
    $("#page_title").append("<h3>"+title+" <small>"+sub_titile+"</small></h3>");
}
function active_menu(id){

    $SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');

    $SIDEBAR_MENU.find('li').each(function () {
        $(this).removeClass('current-page');
    });
    $SIDEBAR_MENU.find('a[id="' + id + '"]').parent('li').addClass('current-page');
}
// /Sidebar

/**
 * Resize function without multiple trigger
 *
 * Usage:
 * $(window).smartresize(function(){
 *     // code here
 * });
 */
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

/************************************************************************************/
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


function on_collapse(data){
    //alert(data.html());
    touchcookie();
}

function PageInitialize(){
    get_user_information();

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

            if_online = usr.online;
            if(if_online){

            }else{
                user_point = usr.point;
                console.log("user_point:"+user_point);
            }

            //getfavoritelist();
            get_user_message();
            get_user_image();

            nav_check();

            get_sensor_list();
            get_camera_unit();
            get_project_list();
			get_proj_point_list();
            //hyj add in 20160926 for server very slow
            get_monitor_list();
            hide_menu();
			getfavoritelist();
            
        }
	};
	JQ_get(request_head,map,get_user_information_callback);

/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "false"){
            show_alarm_module(true,"获取用户失败，请联系管理员");
        }else{
            usr = result.ret;
            get_user_message();
            get_user_image();
            //hyj add in 20160926 for server very slow
            get_monitor_list();
            nav_check();
        }
    });*/
}


function show_expiredModule(){
    modal_middle($('#ExpiredAlarm'));
    $('#ExpiredAlarm').modal('show') ;
}
$(document).ready(function() {

    //$.ajaxSetup({
    //    async : false
    //});
    //$(".DevPreEndTime_Input").datetimepicker({format: 'yyyy-mm-dd'});
    $("[data-toggle='modal']").click(function(){
        var _target = $(this).attr('data-target');
        t=setTimeout(function () {
            var _modal = $(_target).find(".modal-dialog");
            _modal.animate({'margin-top': parseInt(($(window).height() - _modal.height())/2)}, 300 );
        },wait_time_short);
    });

    $('.form_date').datetimepicker({
        language:  'zh-CN',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
    });



    NewUserAuthDual2 = $('.NewUserAuthDual').bootstrapDualListbox(
        { nonSelectedListLabel: '全部项目（组）', selectedListLabel: '用户权限', preserveSelectionOnMove: 'moved', moveOnSelect: true, nonSelectedFilter: '',showFilterInputs: false,infoText:""});
    $("#showValue").click(function () { alert($('[name="duallistbox_demo1"]').val());});


    NewPGProjDual2 = $('.NewPGProjDual').bootstrapDualListbox(
        { nonSelectedListLabel: '全部项目', selectedListLabel: '本组包含', preserveSelectionOnMove: 'moved', moveOnSelect: true, nonSelectedFilter: '',showFilterInputs: false,infoText:""});

    DevUpdateDual2 = $('.DevUpdateAuthDual').bootstrapDualListbox(
        { nonSelectedListLabel: '当前设备', selectedListLabel: '需要升级', preserveSelectionOnMove: 'moved', moveOnSelect: true, nonSelectedFilter: '',showFilterInputs: false,infoText:""});



    // $("#showValue").click(function () { alert($('[name="duallistbox_demo1"]').val());});
    //$('.user_auth_dual').showFilterInputs=false;
    $("#Desktop").css("min-height",window.screen.availHeight-300);
    $("#Undefined").css("min-height",window.screen.availHeight-300);
    $("#CableCheckView").css("min-height",window.screen.availHeight-300);
    //var monitor_handle= setInterval("get_monitor_warning_on_map()", cycle_time);
    //var monitor_table_handle= setInterval("query_warning()", cycle_time);
    var monitor_handle= setInterval(get_monitor_warning_on_map, cycle_time);
    var monitor_table_handle= setInterval(query_warning, cycle_time);
    var monitor_alarm_handle= setInterval(alarm_cycle, cycle_time);
    PageInitialize();
    $("#menu_logout").on('click',function(){
        logout();

    });
    //LEFT menu
    $("#UserManage").on('click',function(){
        CURRENT_URL = "UserManage";
        active_menu("UserManage");
        touchcookie();
        user_manager();

    });
    $("#StaffManage").on('click',function(){
        CURRENT_URL = "StaffManage";
        active_menu("StaffManage");
        touchcookie();
        staff_manager();

    });
    $("#AttendanceManage").on('click',function(){
        CURRENT_URL = "AttendanceManage";
        active_menu("AttendanceManage");
        touchcookie();
        attendance_history();

    });
    $("#KeyManage").on('click',function(){
        CURRENT_URL = "KeyManage";
        active_menu("KeyManage");
        touchcookie();
        key_manage();
    });
    $("#PGManage").on('click',function(){
        CURRENT_URL = "PGManage";
        active_menu("PGManage");
        touchcookie();
        pg_manage();
    });
    $("#ProjManage").on('click',function(){
        CURRENT_URL = "ProjManage";
        active_menu("ProjManage");
        touchcookie();
        proj_manage();
    });
    $("#ParaManage").on('click',function(){
        CURRENT_URL = "ParaManage";
        active_menu("ParaManage");
        touchcookie();
        para_manage();
    });
    $("#MPManage").on('click',function(){
        CURRENT_URL = "MPManage";
        active_menu("MPManage");
        touchcookie();
        mp_manage();
    });
    $("#DevManage").on('click',function(){
        CURRENT_URL = "DevManage";
        active_menu("DevManage");
        touchcookie();
        dev_manage();
    });
    $("#MPMonitor").on('click',function(){
        CURRENT_URL = "MPMonitor";
        active_menu("MPMonitor");
        touchcookie();
        mp_monitor();
    });
    $("#MPMonitorTable").on('click',function(){
        CURRENT_URL = "MPMonitorTable";
        active_menu("MPMonitorTable");
        touchcookie();
        mp_monitor_table();
    });
    $("#MPMonitorCard").on('click',function(){
        CURRENT_URL = "MPMonitorCard";
        active_menu("MPMonitorCard");
        touchcookie();
        mp_monitor_card();
    });
    $("#MPStaticMonitorTable").on('click',function(){
        CURRENT_URL = "MPStaticMonitorTable";
        active_menu("MPStaticMonitorTable");
        touchcookie();
        mp_static_monitor_table();
    });

    $("#WarningCheck").on('click',function(){
        CURRENT_URL = "WarningCheck";
        active_menu("WarningCheck");
        touchcookie();
        warning_check();
    });
    $("#WarningHandle").on('click',function(){
        CURRENT_URL = "WarningHandle";
        active_menu("WarningHandle");
        touchcookie();
        warning_handle();
    });

    $("#InstConf").on('click',function(){
        CURRENT_URL = "InstConf";
        active_menu("InstConf");
        touchcookie();
        Inst_Conf();
    });
    $("#InstRead").on('click',function(){
        CURRENT_URL = "InstRead";
        active_menu("InstRead");

        touchcookie();
        Inst_Read();
    });
    $("#InstDesign").on('click',function(){
        CURRENT_URL = "InstDesign";
        active_menu("InstDesign");
        touchcookie();
        Inst_Design();
    });
    $("#InstControl").on('click',function(){
        CURRENT_URL = "InstControl";
        active_menu("InstControl");
        touchcookie();
        Inst_Control();
    });
    $("#InstSnapshot").on('click',function(){
        CURRENT_URL = "InstSnapshot";
        active_menu("InstSnapshot");
        touchcookie();
        Inst_Snapshot();
    });
    $("#InstVideo").on('click',function(){
        CURRENT_URL = "InstVideo";
        active_menu("InstVideo");
        touchcookie();
        Inst_Video();
    });
    $("#AuditTarget").on('click',function(){
        CURRENT_URL = "AuditTarget";
        active_menu("AuditTarget");
        touchcookie();
        Audit_Target();
    });
    $("#AuditStability").on('click',function(){
        CURRENT_URL = "AuditStability";
        active_menu("AuditStability");
        touchcookie();
        Audit_Stability();
    });
    $("#AuditAvailability").on('click',function(){
        CURRENT_URL = "AuditAvailability";
        active_menu("AuditAvailability");
        touchcookie();
        Audit_Availability();
    });
    $("#AuditError").on('click',function(){
        CURRENT_URL = "AuditError";
        active_menu("AuditError");
        touchcookie();
        Audit_Error();
    });
    $("#AuditQuality").on('click',function(){
        CURRENT_URL = "AuditQuality";
        active_menu("AuditQuality");
        touchcookie();
        Audit_Quality();
    });
    $("#GeoInfoQuery").on('click',function(){
        CURRENT_URL = "GeoInfoQuery";
        active_menu("GeoInfoQuery");
        touchcookie();
        Geo_InfoQuery();
    });
    $("#GeoTrendAnalysis").on('click',function(){
        CURRENT_URL = "GeoTrendAnalysis";
        active_menu("GeoTrendAnalysis");
        touchcookie();
        Geo_TrendAnalysis();
    });
    $("#GeoDisaterForecast").on('click',function(){
        CURRENT_URL = "GeoDisaterForecast";
        active_menu("GeoDisaterForecast");
        touchcookie();
        Geo_DisaterForecast();
    });
    $("#GeoEmergencyDirect").on('click',function(){
        CURRENT_URL = "GeoEmergencyDirect";
        active_menu("GeoEmergencyDirect");
        touchcookie();
        Geo_EmergencyDirect();
    });
    $("#GeoDiffusionAnalysis").on('click',function(){
        CURRENT_URL = "GeoDiffusionAnalysis";
        active_menu("GeoDiffusionAnalysis");
        touchcookie();
        Geo_DiffusionAnalysis();
    });
    $("#WorkflowDesign").on('click',function(){
        CURRENT_URL = "WorkflowDesign";
        active_menu("WorkflowDesign");
        touchcookie();
        Work_flowDesign();
    });
    $("#OrderManagement").on('click',function(){
        CURRENT_URL = "OrderManagement";
        active_menu("OrderManagement");
        touchcookie();
        Order_Management();
    });
    $("#UnloadingManagement").on('click',function(){
        CURRENT_URL = "UnloadingManagement";
        active_menu("UnloadingManagement");
        touchcookie();
        Unloading_Management();
    });
    $("#OrderAudit").on('click',function(){
        CURRENT_URL = "OrderAudit";
        active_menu("OrderAudit");
        touchcookie();
        Order_Audit();
    });
    $("#ADConf").on('click',function(){
        CURRENT_URL = "ADConf";
        active_menu("ADConf");
        touchcookie();
        AD_Conf();
    });
    $("#WEBConf").on('click',function(){
        CURRENT_URL = "WEBConf";
        active_menu("WEBConf");
        touchcookie();
        WEB_Conf();
    });
    $("#KeyManage").on('click',function(){
        CURRENT_URL = "KeyManage";
        active_menu("KeyManage");
        touchcookie();
        key_manage();
        //KEY_Manage();
    });
    $("#KeyAuth").on('click',function(){
        CURRENT_URL = "KeyAuth";
        active_menu("KeyAuth");
        touchcookie();
        key_auth();
    });
    $("#KeyHistory").on('click',function(){
        CURRENT_URL = "KeyHistory";
        active_menu("KeyHistory");
        touchcookie();
        key_history();
    });
    $("#ExportTableManage").on('click',function(){
        CURRENT_URL = "ExportTableManage";
        active_menu("ExportTableManage");
        touchcookie();
        export_table();
    });
    $("#SoftwareLoadManage").on('click',function(){
        window.location="http://"+window.location.host+admintools_url+"?session="+getQueryString("session")+"#";
    });
    $("#CableCheck").on('click',function(){
        CURRENT_URL = "CableCheck";
        active_menu("CableCheck");
        touchcookie();
        CABLE_Check();
    });
    $("#RTUManage").on('click',function(){
        CURRENT_URL = "RTUManage";
        active_menu("RTUManage");
        touchcookie();
        RTU_Manage();
    });
    $("#OTDRManage").on('click',function(){
        CURRENT_URL = "OTDRManage";
        active_menu("OTDRManage");
        touchcookie();
        OTDR_Manage();
    });


    //user view buttons
    $("#UserfreshButton").on('click',function(){
        touchcookie();
        clear_user_detail_panel();
        user_intialize(0);
    });
    $("#UserExportButton").on('click',function(){
        touchcookie();
        //alert("Not support yet");
        var condition_user = [];//new Array();
        var temp ={
            ConditonName: "UserId",
            Equal:usr.id,
            GEQ:"",
            LEQ:""
        };
        condition_user.push(temp);
        Data_export_Normal("用户表导出","usertable",condition_user,[]);
    });
    $("#UserNewButton").on('click',function(){
        touchcookie();
        show_new_user_module();
    });
    $("#UserDelButton").on('click',function(){
        touchcookie();
        if(user_selected === null){
            show_alarm_module(true,"请选择一个用户",null);
        }else{
            modal_middle($('#UserDelAlarm'));
            $('#UserDelAlarm').modal('show');
        }
    });
    $("#UserModifyButton").on('click',function(){
        touchcookie();
        if(user_selected === null){
            show_alarm_module(true,"请选择一个用户",null);
        }else{
            show_mod_user_module(user_selected,user_selected_auth);
        }
    });
    $("#delUserCommit").on('click',function(){
        //发送请求并且告知成功失败
        //刷新表格
        del_user(user_selected.id);
        touchcookie();
    });
    $("#newUserCommit").on('click',function(){
        //检查输入项目
        //发送请求
        //刷新表格
        if(user_module_status){
            submit_new_user_module();
            touchcookie();
        }else{
            submit_mod_user_module();
            touchcookie();
        }
    });
    //staff view buttons
    $("#StafffreshButton").on('click',function(){
        touchcookie();
        clear_staff_detail_panel();
        staff_intialize(0);
    });
    $("#StaffExportButton").on('click',function(){
        touchcookie();
        //alert("Not support yet");
        var condition_staff = [];//new Array();
        var temp ={
            ConditonName: "StaffId",
            Equal:usr.id,
            GEQ:"",
            LEQ:""
        };
        condition_staff.push(temp);
        Data_export_Normal("用户表导出","stafftable",condition_staff,[]);
    });
    $("#StaffNewButton").on('click',function(){
        touchcookie();
        show_new_staff_module();
    });
    $("#StaffDelButton").on('click',function(){
        touchcookie();
        if(staff_selected === null){
            show_alarm_module(true,"请选择一个用户",null);
        }else{
            modal_middle($('#StaffDelAlarm'));
            $('#StaffDelAlarm').modal('show');
        }
    });
    $("#StaffModifyButton").on('click',function(){
        touchcookie();
        if(staff_selected === null){
            show_alarm_module(true,"请选择一个用户",null);
        }else{
            show_mod_staff_module(staff_selected);
        }
    });
    $("#delStaffCommit").on('click',function(){
        //发送请求并且告知成功失败
        //刷新表格
        del_staff(staff_selected.id);
        touchcookie();
    });
    $("#newStaffCommit").on('click',function(){
        //检查输入项目
        //发送请求
        //刷新表格
        if(staff_module_status){
            submit_new_staff_module();
            touchcookie();
        }else{
            submit_mod_staff_module();
            touchcookie();
        }
    });
    //pg view buttons
    $("#PGfreshButton").on('click',function(){
        touchcookie();
        clear_pg_detail_panel();
        pg_intialize(0);
    });
    $("#PGExportButton").on('click',function(){
        touchcookie();
        var condition_user = [];//new Array();
        var temp ={
            ConditonName: "UserId",
            Equal:usr.id,
            GEQ:"",
            LEQ:""
        };
        condition_user.push(temp);
        Data_export_Normal("项目组表导出","PGtable",condition_user,[]);//new Array());
    });
    $("#PGNewButton").on('click',function(){
        touchcookie();
        show_new_pg_module();
    });
    $("#PGDelButton").on('click',function(){
        touchcookie();
        if(pg_selected === null){
            show_alarm_module(true,"请选择一个项目组",null);
        }else{
            modal_middle($('#PGDelAlarm'));
            $('#PGDelAlarm').modal('show');
        }
    });
    $("#PGModifyButton").on('click',function(){
        touchcookie();
        if(pg_selected === null){
            show_alarm_module(true,"请选择一个项目组",null);
        }else{
            show_mod_pg_module(pg_selected,pg_selected_proj);
        }
    });
    $("#delPGCommit").on('click',function(){
        //发送请求并且告知成功失败
        //刷新表格
        del_pg(pg_selected.PGCode);
        touchcookie();
    });
    $("#newPGCommit").on('click',function(){
        //检查输入项目
        //发送请求
        //刷新表格
        if(pg_module_status){
            submit_new_pg_module();
            touchcookie();
        }else{
            submit_mod_pg_module();
            touchcookie();
        }
    });
// project view buttons


    $("#ProjfreshButton").on('click',function(){
        touchcookie();
        clear_proj_detail_panel();
        proj_intialize(0);
    });
    $("#ProjExportButton").on('click',function(){
        touchcookie();
        var condition_user = [];//new Array();
        var temp ={
            ConditonName: "UserId",
            Equal:usr.id,
            GEQ:"",
            LEQ:""
        };
        condition_user.push(temp);
        Data_export_Normal("项目表导出","Projtable",condition_user,[]);//new Array());
    });
    $("#ProjNewButton").on('click',function(){
        touchcookie();
        show_new_proj_module();
    });
    $("#ProjDelButton").on('click',function(){
        touchcookie();
        if(project_selected === null){
            show_alarm_module(true,"请选择一个项目",null);
        }else{
            modal_middle($('#ProjDelAlarm'));
            $('#ProjDelAlarm').modal('show');
        }
    });
    $("#ProjModifyButton").on('click',function(){
        touchcookie();
        if(project_selected === null){
            show_alarm_module(true,"请选择一个项目",null);
        }else{
            show_mod_proj_module(project_selected);
        }
    });
    $("#delProjCommit").on('click',function(){
        //发送请求并且告知成功失败
        //刷新表格
        del_proj(project_selected.ProjCode);
        touchcookie();
    });
    $("#newProjCommit").on('click',function(){
        //检查输入项目
        //发送请求
        //刷新表格
        if(project_module_status){
            submit_new_proj_module();
            touchcookie();
        }else{
            submit_mod_proj_module();

            touchcookie();
        }
    });

    //MP view buttons
    $("#PointfreshButton").on('click',function(){
        touchcookie();
        clear_point_detail_panel();
        point_intialize(0);
    });
    $("#PointExportButton").on('click',function(){
        touchcookie();
        var condition_user = [];// new Array();
        var temp ={
            ConditonName: "UserId",
            Equal:usr.id,
            GEQ:"",
            LEQ:""
        };
        condition_user.push(temp);
        Data_export_Normal("站点导出","Pointtable",condition_user,[]);//new Array());
    });
    $("#PointNewButton").on('click',function(){
        touchcookie();
        show_new_point_module();
    });
    $("#PointDelButton").on('click',function(){
        touchcookie();
        if(point_selected === null){
            show_alarm_module(true,"请选择一个站点",null);
        }else{
            modal_middle($('#PointDelAlarm'));
            $('#PointDelAlarm').modal('show');
        }
    });
    $("#PointModifyButton").on('click',function(){
        touchcookie();
        if(point_selected === null){
            show_alarm_module(true,"请选择一个站点",null);
        }else{
            show_mod_point_module(point_selected);
        }
    });
    $("#delPointCommit").on('click',function(){
        //发送请求并且告知成功失败
        //刷新表格
        del_point(point_selected.StatCode);
        touchcookie();
    });
    $("#newPointCommit").on('click',function(){
        //检查输入项目
        //发送请求
        //刷新表格
        if(point_module_status){
            submit_new_point_module();
            touchcookie();
        }else{
            submit_mod_point_module();

            touchcookie();
        }
    });


// device view buttons
    $("#DevfreshButton").on('click',function(){
        touchcookie();
        clear_dev_detail_panel();
        dev_intialize(0);
    });
    $("#DevExportButton").on('click',function(){
        touchcookie();
        var condition_user = [];//new Array();
        var temp ={
            ConditonName: "UserId",
            Equal:usr.id,
            GEQ:"",
            LEQ:""
        };
        condition_user.push(temp);
        Data_export_Normal("设备表导出","Devtable",condition_user,[]);//new Array());
    });
    $("#DevNewButton").on('click',function(){
        touchcookie();
        show_new_dev_module();
    });
    $("#DevDelButton").on('click',function(){
        touchcookie();
        if(device_selected === null){
            show_alarm_module(true,"请选择一个设备",null);
        }else{
            modal_middle($('#DevDelAlarm'));
            $('#DevDelAlarm').modal('show');
        }
    });
    $("#DevModifyButton").on('click',function(){
        touchcookie();
        if(device_selected === null){
            show_alarm_module(true,"请选择一个设备",null);
        }else{
            show_mod_dev_module(device_selected);
        }
    });
    $("#delDevCommit").on('click',function(){
        //发送请求并且告知成功失败
        //刷新表格
        del_dev(device_selected.DevCode);
        touchcookie();
    });
    $("#newDevCommit").on('click',function(){
        //检查输入项目
        //发送请求
        //刷新表格
        if(device_module_status){
            submit_new_dev_module();
            touchcookie();
        }else{
            submit_mod_dev_module();

            touchcookie();
        }
    });

    $("#DevProjCode_choice").change(function(){
        get_proj_point_option($("#DevProjCode_choice").val(),$("#DevStatCode_choice"),"");
    });
    $("#QueryProjCode_choice").change(function(){
        get_proj_point_option($("#QueryProjCode_choice").val(),$("#QueryStatCode_choice"),"");
    });
    $("#AlarmQueryCommit").on('click',function(){

        touchcookie();
        if(alarm_selected === null){
            $("#WCStatCode_Input").attr("placeholder","请先在地图上选择一个点");
            return;
        }

        if($("#Alarm_query_Input").val()==="" || $("#Alarm_query_Input").val() === null){
            $("#Alarm_query_Input").attr("placeholder","请输入日期");
            return;
        }

        if(alarm_type_list!== null){
            unhide_all_chart();
            for(var i=0;i<alarm_type_list.length;i++){
                query_alarm($("#Alarm_query_Input").val(),alarm_type_list[i].id,alarm_type_list[i].name);
            }
        }
        //window.setTimeout(show_table_tags, wait_time_long);


    });
    $("#Video_query_Input").change(function(){
        $("#Video_query_Input").val(date_compare_today($("#Video_query_Input").val()));
        video_selection_change();
    });
    $("#VideoHour_choice").change(function(){
        video_selection_change();
    });
    $("#VideoModuleHour_choice").change(function(){
        video_Module_selection_change();
    });
    $("#VideoModule_query_Input").change(function(){
        video_Module_selection_change();
    });
    $("#Alarm_query_Input").change(function(){
        $("#Alarm_query_Input").val(date_compare_today($("#Alarm_query_Input").val()));
    });
    $("#AlarmExport").on('click',function() {
        touchcookie();
        Data_export_alarm();
    });
    $("#AlarmQuery_Commit").on('click',function() {
        touchcookie();
        submit_alarm_query();
    });
    $("#SensorUpdateCommit").on('click',function() {
        touchcookie();
        submit_sensor_module();
    });
    $("#ExpiredConfirm").on('click',function() {
        logout();
    });
    $("#QueryStartTime_Input").change(function(){
        $("#QueryStartTime_Input").val(date_compare_today($("#QueryStartTime_Input").val()));
        if( $("#QueryEndTime_Input").val()===""){
            $("#QueryEndTime_Input").val($("#QueryStartTime_Input").val());
        }else{
            $("#QueryEndTime_Input").val(date_compare($("#QueryEndTime_Input").val(),$("#QueryStartTime_Input").val()));
        }
    });
    $("#QueryEndTime_Input").change(function(){
        if( $("#QueryStartTime_Input").val()==="") {
            $("#QueryEndTime_Input").val(date_compare_today($("#QueryEndTime_Input").val()));
            $("#QueryStartTime_Input").val($("#QueryStartTime_Input").val());
        }else{
            $("#QueryEndTime_Input").val(date_compare($("#QueryEndTime_Input").val(),$("#QueryStartTime_Input").val()));
        }
    });
    $("#VCRshow").on('click',function() {
        var vcraddress = $("#VCRStatus_choice").val();
        if(vcraddress === "") return;
        video_windows(vcraddress);
        //window.open("http://"+vcraddress,'监控录像',"height=480, width=640, top=0, left=400,toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no")
    });
	$("#ModuleVCRshow").on('click',function() {
        var vcraddress = $("#ModuleVCRStatus_choice").val();
		//console.log("vcraddress="+vcraddress);
        if(vcraddress === "") return;
        video_windows(vcraddress);
        //window.open("http://"+vcraddress,'监控录像',"height=480, width=640, top=0, left=400,toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no")
    });
    $("#MonitorTableFlash").on('click',function() {
        query_static_warning();
    });
    $("#WarningHandleTableFlash").on('click',function() {
        query_warning_handle_list();
    });
    $("#RTUFlash").on('click',function() {
        query_RTU_list();
    });
    $("#OTDRFlash").on('click',function() {
        query_OTDR_list();
    });


    $("#menu_user_profile").on('click',function() {
        touchcookie();
        show_usr_msg_module();
    });
    $("#ScreenSaver").on('click',function() {
        if(monitor_selected === null) return;
        screen_windows();
        //window.open("http://"+window.location.host+"/"+screen_saver_address+"?id="+usr.id+"&StatCode="+monitor_selected.StatCode,'屏幕保护',"height=auto, width=auto");
    });
    $("#UsrMsgCommit").on('click',function() {
        touchcookie();
        user_message_update();
    });

    $("#UsrImgClean").on('click',function() {
        touchcookie();
        clear_user_image();
    });
    $("#UsrImgFlash").on('click',function() {
        touchcookie();
        get_user_image();
    });
    $("#UpdateConfirm_button").on('click',function() {
        touchcookie();
        update_version();
    });
	$("#btn_camera_up").on('click',function() {
		var camera_state_code = $('#VideoModuleStatCode_Input').val();
		if(camera_state_code!==undefined && camera_state_code!==""){
			move_camera(camera_state_code,"v","1");
		}
    });
	$("#btn_camera_down").on('click',function() {
		var camera_state_code = $('#VideoModuleStatCode_Input').val();
		if(camera_state_code!==undefined && camera_state_code!==""){
			move_camera(camera_state_code,"v","-1");
		}
    });
	$("#btn_camera_right").on('click',function() {
		var camera_state_code = $('#VideoModuleStatCode_Input').val();
		if(camera_state_code!==undefined && camera_state_code!==""){
			move_camera(camera_state_code,"v","1");
		}
    });
	$("#btn_camera_left").on('click',function() {
		var camera_state_code = $('#VideoModuleStatCode_Input').val();
		if(camera_state_code!==undefined && camera_state_code!==""){
			move_camera(camera_state_code,"v","-1");
		}
    });
    $(".lock_monitor_btn").on('click',function() {
        monitor_lock();
    });
    $('#UnlockConfirmBtn').on('click',function() {
        var statcode = $(this).attr("StateCode");
        //console.log("["+statcode+"]");
        if(statcode!==undefined&&statcode!=="" ){
            openlock(statcode);
        }
    });
    $('.keyrow').on('click',function() {
        var keyid = $(this).attr("id");
        if(keyid!==undefined&&keyid!=="" ){
            get_key_auth_list(keyid);
        }
    });


// key view buttons
    $("#KeyfreshButton").on('click',function(){
        touchcookie();
        clear_key_detail_panel();
        key_intialize(0);
    });
    $("#KeyExportButton").on('click',function(){
        touchcookie();
        var condition_user = [];//new Array();
        var temp ={
            ConditonName: "UserId",
            Equal:usr.id,
            GEQ:"",
            LEQ:""
        };
        condition_user.push(temp);
        Data_export_Normal("钥匙表导出","keytable",condition_user,[]);//new Array());
    });
    $("#KeyNewButton").on('click',function(){
        touchcookie();
        show_new_key_module();
    });
    $("#KeyDelButton").on('click',function(){
        touchcookie();
        if(key_selected === null){
            show_alarm_module(true,"请选择一把钥匙",null);
        }else{
            modal_middle($('#KeyDelAlarm'));
            $('#KeyDelAlarm').modal('show');
        }
    });
    $("#KeyModifyButton").on('click',function(){
        touchcookie();
        if(key_selected === null){
            show_alarm_module(true,"请选择一把钥匙",null);
        }else{
            show_mod_key_module(key_selected);
        }
    });
    $("#delKeyCommit").on('click',function(){
        //发送请求并且告知成功失败
        //刷新表格
        del_key(key_selected.KeyCode);
        touchcookie();
    });
    $("#newKeyCommit").on('click',function(){
        //检查输入项目
        //发送请求
        //刷新表格
        if(key_module_status){
            submit_new_key_module();
            touchcookie();
        }else{
            submit_mod_key_module();
            touchcookie();
        }
    });
    $("#AttendanceHistoryTableFlash").on('click',function(){
        query_attendance_history();

        touchcookie();
    });
    $("#KeyHistoryTableFlash").on('click',function(){
        query_open_lock_history();

        touchcookie();
    });
    $("#ExportTableFlash").on('click',function(){
        query_export_table();

        touchcookie();
    });
	$("#KeyAuthQuery").on('click',function(){
		get_domain_auth_list($("#KeyAuthPoint_choice").val());
        touchcookie();
    });
	$("#KeyAuthNew").on('click',function(){
        show_auth_new_module($("#KeyAuthProj_choice").val(),$("#KeyAuthPoint_choice").val(),$("#KeyAuthPoint_choice").find("option:selected").text());
        touchcookie();
    });
	$("#KeyUserChange").on('click',function(){
		show_key_grant_module($("#KeyUserKey_choice").val(),$("#KeyUserUser_choice").val(),$("#KeyUserKey_choice").find("option:selected").text(),$("#KeyUserUser_choice").find("option:selected").text());
        touchcookie();
    });
	$("#delKeyAuthCommit").on('click',function(){
		//console.log("click"+$(this).attr("AuthId"));
		$('#KeyAuthDelAlarm').modal('hide');
		key_auth_delete($(this).attr("AuthId"));
        touchcookie();
    });
    $("#newKeyAuthCommit").on('click',function(){
        click_new_key_auch_commit();
		touchcookie();
    });
	$("#NewKeyAuthEndTime_Input").change(function(){
        $("#NewKeyAuthEndTime_Input").val(check_key_auth_date($(this).val()));
    });
	$("#KeyGrantCommit").on('click',function(){
		$('#KeyGrantAlarm').modal('hide');
        click_key_grant_commit($(this).attr("KeyId"),$(this).attr("UserId"));
    });

	$("#AlarmHandleUpdateCommit").on('click',function(){
        AlarmHandleUpdateCommit_button_commit();
    });


    $("#newAttendanceCommit").on('click',function(){
        new_attendance_submit();
    });
    $("#delAttendanceCommit").on('click',function(){
        var attendanceid=$("#delAttendanceCommit").attr("AttendanceID");

        del_attendance(attendanceid);
        $('#AttendanceDelAlarm').modal('hide');

    });
    $("#AttendanceHistoryTableNew").on('click',function(){
        show_new_attendance_module();
    });


    $("#CommonQueryCommit").on('click',function(){
        if(global_key_word == $("#CommonQueryInput").val()) return;
        global_key_word = $("#CommonQueryInput").val();
        switch (CURRENT_URL){
            case "UserManage":
                user_intialize(0);
                break;
            case "StaffManage":
                staff_intialize(0);
                break;
            case "KeyManage":
                key_intialize(0);
                break;
            case "PGManage":
                pg_intialize(0);
                break;
            case "ProjManage":
                proj_intialize(0);
                break;
            case "MPManage":
                point_intialize(0);
                break;
            case "DevManage":
                dev_intialize(0);
                break;
            default:

                break;
        }
        return;
    });

    $("#StationActiveConfirmBtn").on('click',function(){
        selectedstationactive();
    });





    //alert($(window).height());
    //alert($(window).width());
    clear_window();
    desktop();
    calculate_row();
    clear_user_detail_panel();
    clear_staff_detail_panel();
    clear_proj_detail_panel();




    $(window).resize();

});



function show_searchbar(){
    global_key_word = "";
    $("#CommonQueryInput").val("");
    $("#QueryBar").css("display","block");
}
function hide_searchbar(){
    $("#QueryBar").css("display","none");
}
function calculate_row(){
    var screen_high = $(window).height();
    var add_row = parseInt( ($(window).height()-650)/100);
    if(add_row<=0)
        table_row=5;
    else if(add_row>=5)
        table_row=10;
    else
        table_row=table_row+add_row;

    //console.log("Now table row is:"+table_row);

}
//window.onresize=calculate_row;
function show_table_tags(){
	$('#Warning_'+alarm_type_list[0].id+'_day').css('display','block');
}
function user_manager(){
    //alert($(document).height());
    //alert($(document).width());
    clear_window();
    write_title("用户管理","根据您的权限对用户进行添加/删除/修改等操作");
    $("#UserManageView").css("display","block");
    show_searchbar();
    //if(!user_initial){ user_intialize(0);}
    user_intialize(0);
}
function staff_manager(){
    //alert($(document).height());
    //alert($(document).width());
    clear_window();
    write_title("员工管理","根据您的权限对用户进行添加/删除/修改等操作");
    $("#StaffManageView").css("display","block");
    show_searchbar();
    //if(!user_initial){ user_intialize(0);}
    staff_intialize(0);
}
function pg_manage(){
    clear_window();
    write_title("项目组管理","根据您的权限对项目组进行添加/删除/修改等操作");
    $("#PGManageView").css("display","block");
    show_searchbar();
    //if(!pg_initial){ pg_intialize(0);}
    pg_intialize(0);
}
function key_manage(){
    clear_window();
    write_title("钥匙管理","根据您的权限对项目组进行添加/删除/修改等操作");
    $("#KeyManageView").css("display","block");
    show_searchbar();
    //if(!key_initial){ key_intialize(0);}
    key_intialize(0);
}
function proj_manage(){
    clear_window();
    write_title("项目管理","根据您的权限对项目进行添加/删除/修改等操作");
    $("#ProjManageView").css("display","block");
    show_searchbar();
    proj_intialize(0);
}
function para_manage(){
    clear_window();
    write_title("参数管理","您可以在这里升级您的设备版本");
    $("#ParaManageView").css("display","block");
    hide_searchbar();
    if(!parameter_initial)parameter_initialize();
    //$("#Undefined").css("display","block");
}
function mp_manage(){
    clear_window();
    write_title("站点管理","根据您的权限对站点进行配置");
    show_searchbar();
    $("#MPManageView").css("display","block");
    //需求修改，项目变成站点，变量名字不改了
    //if(!point_initial){ point_intialize(0);}
    point_intialize(0);
}
function dev_manage(){
    clear_window();
    write_title("设备管理","根据您的权限对设备进行配置");
    show_searchbar();
    $("#DevManageView").css("display","block");
    //if(!device_initial){ dev_intialize(0);}
    dev_intialize(0);
}
function mp_monitor(){
    clear_window();
    write_title("地图监控","在地图上对站点进行监控");
    hide_searchbar();
    $("#MPMonitorView").css("display","block");
    //if(!map_initialized)initializeMap();
    initializeMap();
}
function mp_monitor_table(){
    clear_window();
    write_title("站点聚合","实时刷新");
    hide_searchbar();
    $("#MPMonitorTableView").css("display","block");
    if(!Monitor_table_initialized)initialize_warning_table();

}
function mp_monitor_card(){
    clear_window();
    write_title("站点列块","点选设备卡片以获得详细信息");
    hide_searchbar();
    $("#MPMonitorCardView").css("display","block");

    //if(!map_initialized)initializeMap();
}
function mp_static_monitor_table(){
    clear_window();
    write_title("站点聚合","请手工刷新");
    hide_searchbar();
    $("#MPMonitorStaticTableView").css("display","block");
    query_static_warning();
    //if(!Monitor_table_initialized)initialize_warning_table();

}
function warning_check(){
    clear_window();
    write_title("告警查看","可以导出报表");
    hide_searchbar();
    $("#WarningCheckView").css("display","block");
    if(!alarm_map_initialized)initializeAlarmMap();
}
function warning_handle(){
    clear_window();
    hide_searchbar();
    $("#WarningHandleView").css("display","block");
    write_title("告警处理","请查看报表");
    query_warning_handle_list();
    //$("#Undefined").css("display","block");
}
function desktop(){
    clear_window();
    hide_searchbar();
    write_title("欢迎","请选择您需要的功能");
    $("#Desktop").css("display","block");
}


function Inst_Conf(){
    clear_window();
    hide_searchbar();
    write_title("施工中","");
    $("#Undefined").css("display","block");
}
function Inst_Read(){
    clear_window();
    hide_searchbar();
    write_title("施工中","");
    $("#Undefined").css("display","block");
}
function Inst_Design(){
    clear_window();
    hide_searchbar();
    write_title("施工中","");
    $("#Undefined").css("display","block");
}
function Inst_Control(){
    clear_window();
    hide_searchbar();
    write_title("施工中","");
    $("#Undefined").css("display","block");
}
function Inst_Snapshot(){
    clear_window();
    hide_searchbar();
    write_title("施工中","");
    $("#Undefined").css("display","block");
}
function Inst_Video(){
    clear_window();
    hide_searchbar();
    write_title("施工中","");
    $("#Undefined").css("display","block");
}
function Audit_Target(){
    clear_window();
    hide_searchbar();
    write_title("施工中","");
    $("#Undefined").css("display","block");
}
function Audit_Stability(){
    clear_window();
    hide_searchbar();
    write_title("施工中","");
    $("#Undefined").css("display","block");
}
function Audit_Availability(){
    clear_window();
    hide_searchbar();
    write_title("施工中","");
    $("#Undefined").css("display","block");
}
function Audit_Error(){
    clear_window();
    hide_searchbar();
    write_title("施工中","");
    $("#Undefined").css("display","block");
}
function Audit_Quality(){
    clear_window();
    hide_searchbar();
    write_title("施工中","");
    $("#Undefined").css("display","block");
}
function Geo_InfoQuery(){
    clear_window();
    hide_searchbar();
    CURRENT_URL="Undefined";
    write_title("施工中","");
    $("#Undefined").css("display","block");
}
function Geo_TrendAnalysis(){
    clear_window();
    hide_searchbar();
    CURRENT_URL="Undefined";
    write_title("施工中","");
    $("#Undefined").css("display","block");
}
function Geo_DisaterForecast(){
    clear_window();
    hide_searchbar();
    CURRENT_URL="Undefined";
    write_title("施工中","");
    $("#Undefined").css("display","block");
}
function Geo_EmergencyDirect(){
    clear_window();
    hide_searchbar();
    CURRENT_URL="Undefined";
    write_title("施工中","");
    $("#Undefined").css("display","block");
}
function Geo_DiffusionAnalysis(){
    clear_window();
    hide_searchbar();
    CURRENT_URL="Undefined";
    write_title("施工中","");
    $("#Undefined").css("display","block");
}
function Work_flowDesign(){
    clear_window();
    hide_searchbar();
    CURRENT_URL="Undefined";
    write_title("施工中","");
    $("#Undefined").css("display","block");
}
function Order_Management(){
    clear_window();
    hide_searchbar();
    CURRENT_URL="Undefined";
    write_title("施工中","");
    $("#Undefined").css("display","block");
}
function Unloading_Management(){
    clear_window();
    hide_searchbar();
    CURRENT_URL="Undefined";
    write_title("施工中","");
    $("#Undefined").css("display","block");
}
function Order_Audit(){
    clear_window();
    hide_searchbar();
    CURRENT_URL="Undefined";
    write_title("施工中","");
    $("#Undefined").css("display","block");
}
function AD_Conf(){
    clear_window();
    hide_searchbar();
    CURRENT_URL="Undefined";
    write_title("施工中","");
    $("#Undefined").css("display","block");
}
function WEB_Conf(){
    clear_window();
    hide_searchbar();
    CURRENT_URL="Undefined";
    write_title("施工中","");
    $("#Undefined").css("display","block");
}
function CABLE_Check(){
    clear_window();
    hide_searchbar();
    write_title("纤芯管理","");
    $("#CableCheckView").css("display","block");
}
function RTU_Manage(){
    clear_window();
    hide_searchbar();
    write_title("RTU管理","");
    $("#RTUManageView").css("display","block");
    query_RTU_list();
}
function OTDR_Manage(){
    clear_window();
    hide_searchbar();
    write_title("OTDR管理","");
    $("#OTDRManageView").css("display","block");
    query_OTDR_list();
}
/*
function KEY_Manage(){
    clear_window();
    write_title("施工中","");
    $("#Undefined").css("display","block");
}*/
function key_auth(){
    clear_window();
    hide_searchbar();
    write_title("钥匙授权","");
    $("#KeyAuthView").css("display","block");
    key_auth_initialize();
}
function attendance_history(){
    clear_window();
    hide_searchbar();
    write_title("考勤历史查询","请输入查询条件");
    $("#AttendanceHistoryView").css("display","block");
    attendance_history_initialize();
    //key_history_initialize();
    //query_static_warning();
}
function key_history(){
    clear_window();
    hide_searchbar();
    write_title("开锁历史查询","请输入查询条件");
    $("#KeyHistoryView").css("display","block");
    key_history_initialize();
    //query_static_warning();
}
function export_table(){
    clear_window();
    hide_searchbar();
    write_title("报表导出","请输入查询条件");
    $("#ExportTableView").css("display","block");
    export_table_initialize();
    //query_static_warning();
}
function clear_window(){
    $("#UserManageView").css("display","none");
    $("#StaffManageView").css("display","none");
    $("#PGManageView").css("display","none");
    $("#ProjManageView").css("display","none");
    $("#ParaManageView").css("display","none");
    $("#MPManageView").css("display","none");
    $("#DevManageView").css("display","none");
    $("#MPMonitorView").css("display","none");
    $("#MPMonitorTableView").css("display","none");
    $("#MPMonitorCardView").css("display","none");
    $("#MPMonitorStaticTableView").css("display","none");
    $("#WarningCheckView").css("display","none");
    $("#WarningHandleView").css("display","none");
    $("#Desktop").css("display","none");
    $("#Undefined").css("display","none");
    $("#KeyManageView").css("display","none");
    $("#KeyHistoryView").css("display","none");
    $("#KeyAuthView").css("display","none");
    $("#CableCheckView").css("display","none");
    $("#RTUManageView").css("display","none");
    $("#OTDRManageView").css("display","none");
    $("#ExportTableView").css("display","none");
    $("#AttendanceHistoryView").css("display","none");
}


/**
 * User view function part
 */
function get_project_pg_list(){
    var map={
        action:"ProjectPGList",
        type:"query",
        user:usr.id
    };
	var get_project_pg_list_callback = function(result){
		if(result.status == "false"){
            show_expiredModule();
            return;
        }
        project_pg_list = result.ret;
	};
	JQ_get(request_head,map,get_project_pg_list_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        project_pg_list = result.ret;
    });*/
}
function get_user_table(start,length){
    var body = {
        startseq: start,
        length:length,
        keyword: global_key_word
    };
    var map={
        action:"UserTable",
        type:"query",
        body: body,
        user:usr.id
    };
	var get_user_table_callback=function(result){
		if(result.status == "false"){
            show_expiredModule();
            return;
        }
        user_table = result.ret.usertable;

        user_start = parseInt(result.ret.start);
        user_total = parseInt(result.ret.total);

        //HYj add for server slow
        draw_user_table_head();
	};
	JQ_get(request_head,map,get_user_table_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        user_table = result.ret;

        user_start = parseInt(result.start);
        user_total = parseInt(result.total);

        //HYj add for server slow
        draw_user_table_head();
    });*/
}




function del_user(id){
    var body = {
        userid: id
    };
    var map={
        action:"UserDel",
        type:"mod",
        body: body,
        user:usr.id
    };
	var del_user_callback = function(result){
		var ret = result.status;
        if(ret == "true"){
            del_user_flash = function(){
                clear_user_detail_panel();
                user_intialize(0);
            };

            setTimeout(function(){
                show_alarm_module(false,"删除成功！",del_user_flash);
            },500);
        }else{
            setTimeout(function(){
            show_alarm_module(true,"删除失败！"+result.msg,null);},500);
        }
	};
	JQ_get(request_head,map,del_user_callback);
		/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "true"){
            show_alarm_module(false,"删除成功！");
            clear_user_detail_panel();
            user_intialize(0);
        }else{
            show_alarm_module(true,"删除失败！"+result.msg);
        }
    });*/

    $("#UserDelAlarm").modal('hide');

}
function new_user(user,auth){
    var body = {
        name: user.name,
        nickname: user.nickname,
        password: user.password,
        mobile: user.mobile,
        mail: user.mail,
        type: user.type,
        memo: user.memo,
        auth: auth
    };

    var map={
        action:"UserNew",
        type:"mod",
        body: body,
        user:usr.id
    };
    //console.log(map);
    //console.log(JSON.stringify(map));
	var new_user_callback = function(result){
		var ret = result.status;
        if(ret == "true"){

            $('#newUserModal').modal('hide');
            create_user_flash = function(){
                clear_user_detail_panel();
                user_intialize(0);
            };
            setTimeout(function(){
            show_alarm_module(false,"创建成功！",create_user_flash);},500);
        }else{
            setTimeout(function(){
            show_alarm_module(true,"创建失败！"+result.msg,null);},500);
        }
	};
	JQ_get(request_head,map,new_user_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "true"){
            show_alarm_module(false,"创建成功！");
            $('#newUserModal').modal('hide');
            clear_user_detail_panel();
            user_intialize(0);
        }else{
            show_alarm_module(true,"创建失败！"+result.msg);
        }
    });*/
}
function modify_user(user,auth){
    var body={
        userid: user.id,
        name: user.name,
        nickname: user.nickname,
        password: user.password,
        mobile: user.mobile,
        mail: user.mail,
        type: user.type,
        memo: user.memo,
        auth: auth
    };
    var map={
        action:"UserMod",
        type:"mod",
        body: body,
        user:usr.id
    };
	var modify_user_callback = function(result){
		var ret = result.status;
        if(ret == "true"){

            $('#newUserModal').modal('hide');
            mod_user_flash = function(){
                clear_user_detail_panel();
                user_intialize(0);

            };

            setTimeout(function() {
                show_alarm_module(false, "修改成功！", mod_user_flash);
            },500);
        }else{

            setTimeout(function() {
                show_alarm_module(true, "修改失败！" + result.msg, null);
            },500);
        }
	};
	JQ_get(request_head,map,modify_user_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "true"){
            show_alarm_module(false,"修改成功！");
            $('#newUserModal').modal('hide');
            clear_user_detail_panel();
            user_intialize(0);
        }else{
            show_alarm_module(true,"修改失败！"+result.msg);
        }
    });*/
}



function get_user_proj(user){
    var body = {
        userid: user
    };
    var map={
        action:"UserProj",
        body:body,
        type:"query",
        user:usr.id
    };
	var get_user_proj_callback = function(result){
		if(result.status == "false"){
            show_expiredModule();
            return;
        }
        user_selected_auth = result.ret;
        //HYJ add for server slow;
        //draw_user_detail_proj_table();
	};
	JQ_get(request_head,map,get_user_proj_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        user_selected_auth = result.ret;
        //HYJ add for server slow;
        draw_user_detail_proj_table();
    });*/
}
function get_user_key(user){
    var body = {
        userid: user
    };
    var map={
        action:"UserKey",
        body:body,
        type:"query",
        user:usr.id
    };
	var get_user_key_callback = function(result){
		if(result.status == "false"){
            show_expiredModule();
            return;
        }
        user_selected_key = result.ret;
        //HYJ add for server slow;
        //draw_user_detail_key_table();
	};
	JQ_get(request_head,map,get_user_key_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        user_selected_key = result.ret;
        //HYJ add for server slow;
        draw_user_detail_key_table();
    });*/
}
function user_intialize(start) {
    user_initial = true;
    user_table = null;
    get_user_table(start, table_row * 5);
    get_project_pg_list();
    //window.setTimeout(draw_user_table_head, wait_time_middle);
}
function draw_user_table_head(){
    if(null === user_table)return;
    var page_number = Math.ceil((user_table.length)/table_row);

    $("#User_Page_control").empty();
    var txt = "<li>"+
        "<a href='#' id='user_page_prev'>Prev</a>"+
        "</li>";
    var page_start_number = Math.ceil(user_start/table_row);
	var i;
    for(i=0;i<page_number;i++){
        txt=txt+ "<li>"+
            "<a href='#' id='user_page_"+i+"'>"+(i+page_start_number+1)+"</a>"+
            "</li>";
    }
    txt=txt+"<li>"+
        "<a href='#' id='user_page_next'>Next</a>"+
        "</li>";
    $("#User_Page_control").append(txt);
    table_head="<thead>"+
        "<tr>"+"<th>序号</th>"+"<th>用户名</th>"+"<th>昵称</th>"+"<th>电话</th>"+"<th>属性</th>"+"<th>更新日期</th>";
    table_head=table_head+"</tr></thread>";
	click_draw_user_table = function(){
		draw_user_table($(this));
	};
    for(i=0;i<page_number;i++){
		/*
        $("#user_page_"+i).on('click',function(){
            draw_user_table($(this));
        });*/
		$("#user_page_"+i).on('click',click_draw_user_table);
    }
    if(user_start<=0){
        $("#user_page_prev").css("display","none");
    }else{
        $("#user_page_prev").css("display","block");
        $("#user_page_prev").on('click',function(){
            var new_start = user_start-(table_row*5);
            if(new_start<0) new_start =0;
            user_intialize(new_start);
        });
    }

    if((user_start+(table_row*5))>=user_total){
        $("#user_page_next").css("display","none");
    }else{
        $("#user_page_next").css("display","block");
        $("#user_page_next").on('click',function(){
            user_intialize(user_start+(table_row*5));
        });
    }

    draw_user_table($("#user_page_0"));
}
function get_user_level(level){
    if (level =="0") return "管理员";
    if (level =="1") return "市级网管";
    if (level =="2") return "区级网管";
    if (level =="3") return "市级代维";
    if (level =="4") return "区级代维";
    return "未知级别";
}
function draw_user_table(data){

    $("#Table_user").empty();
    if(null === user_table) return;
    var sequence = (parseInt(data.html())-1)*table_row-user_start;
    var txt = table_head;
    txt = txt +"<tbody>";
	var i;
    for(i=0;i<table_row;i++){
        if((sequence+i)<user_table.length){
            if(0!==i%2){
                txt =txt+ "<tr class='success li_menu' id='table_cell"+i+"' userid='"+user_table[sequence+i].id+"'>";
            }else{ txt =txt+ "<tr class='li_menu' id='table_cell"+i+"' userid='"+user_table[sequence+i].id+"'>";}
            txt = txt +"<td>" + user_table[sequence+i].id+"</td>" +"<td>" + user_table[sequence+i].name+"</td>" +"<td>" + user_table[sequence+i].nickname+"</td>" +"<td>" + user_table[sequence+i].mobile+"</td>";
            /*if("true" == user_table[sequence+i].type)
                txt = txt+"<td>管理员</td>";
            else txt = txt+"<td>用户</td>";*/
            txt = txt+"<td>"+get_user_level(user_table[sequence+i].type)+"</td>";
            txt = txt +"<td>" + user_table[sequence+i].date+"</td>";

            txt = txt +"</tr>";
        }else{
            if(0!==i%2){
                txt =txt+ "<tr class='success' id='table_cell"+i+"' userid='null'>";
            }else{ txt =txt+ "<tr  id='table_cell"+i+"' userid='null'>";}
            txt = txt +"<td>--</td>" +"<td>--</td>" +"<td>--</td>" +"<td>--</td>" +"<td>--</td>" +"<td>--</td>";
            txt = txt +"</tr>";
        }

    }
    txt = txt+"</tbody>";

    $("#Table_user").append(txt);
	table_cell_click = function(){
		if($(this).attr("userid") !="null"){
                for(var i=0;i<user_table.length;i++){
                    if($(this).attr("userid") == user_table[i].id){
                        user_selected =user_table[i];
                        break;
                    }
                }

                Initialize_user_detail();
                touchcookie();
            }
	};
    for(i=0;i<table_row;i++){
		/*
        $("#table_cell"+i).on('click',function(){
            if($(this).attr("userid") !="null"){
                for(var i=0;i<user_table.length;i++){
                    if($(this).attr("userid") == user_table[i].id){
                        user_selected =user_table[i];
                        break;
                    }
                }

                Initialize_user_detail();
                touchcookie();
            }

        });*/
		$("#table_cell"+i).on('click',table_cell_click);
    }

}
function Initialize_user_detail(){

    draw_user_detail_panel();
    get_user_key(user_selected.id);
    get_user_proj(user_selected.id);
    //window.setTimeout(draw_user_detail_panel, wait_time_short);
}
function clear_user_detail_panel(){
    user_selected = null;
    var txt = "<p></p><p></p>"+
        "<div class='col-md-6 col-sm-6 col-xs-12 column'>"+
        "<dl >"+
        "<dt >用户名：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "<dt >用户类型：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "<dt >联系方式：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-6 col-sm-6 col-xs-12 column'>"+
        "<dl >"+
        "<dt>用户昵称：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "<dt>修改日期：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "<dt>邮箱：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-12 col-sm-12 col-xs-12 column'>"+
        "<dl >"+
        "<dt>备注：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "</dl>"+
        "</div>";

    $("#Label_user_detail").empty();
    $("#Label_user_detail").append(txt);
    $("#Table_user_authed").empty();
    $("#Table_user_key").empty();
}
function draw_user_detail_panel(){
    $("#Label_user_detail").empty();
    if(user_selected_auth === null) return;
    var usertype=get_user_level(user_selected.type);
    //if(true===user_selected.type) usertype="管理员";
    var txt = "<p></p><p></p>"+
        "<div class='col-md-6 col-sm-6 col-xs-12 column'>"+
        "<dl >"+
        "<dt >用户名：</dt><dd>"+user_selected.name+"</dd>"+
        "<dt >用户类型：</dt><dd>"+usertype+"</dd>"+
        "<dt >联系方式：</dt><dd>"+user_selected.mobile+"</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-6 col-sm-6 col-xs-12 column'>"+
        "<dl >"+
        "<dt>用户昵称：</dt><dd>"+user_selected.nickname+"</dd>"+
        "<dt>修改日期：</dt><dd>"+user_selected.date+"</dd>"+
        "<dt>邮箱：</dt><dd>"+user_selected.mail+"</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-12 col-sm-12 col-xs-12 column'>"+
        "<dl >"+
        "<dt>备注：</dt><dd>"+user_selected.memo+"</dd>"+
        "</dl>"+
        "</div>";
    /*
    var txt = "<p></p><p></p>"+
        "<label style='min-width: 150px'>用户名："+user_selected.name+"</label><label style='min-width: 150px'>用户昵称："+user_selected.nickname+"</label>"+
        "<p></p>"+
        "<label style='min-width: 300px'>用户类型："+usertype+"</label>"+"<p></p>"+"<label style='min-width: 300px'>修改日期："+user_selected.date+"</label>"+
        "<p></p>"+
        "<label style='min-width: 300px'>联系方式："+user_selected.mobile+"</label>"+
        "<p></p>"+
        "<label style='min-width: 300px'>邮箱："+user_selected.mail+"</label>"+
        "<p></p>"+
        "<label>备注："+user_selected.memo+"</label>";*/
    $("#Label_user_detail").append(txt);


    //user_selected_auth




}
function draw_user_detail_proj_table(){
    $("#Table_user_authed").empty();
    txt ="<thead> <tr> <th>已关联项目 </th> </tr> </thead> <tbody >";
    for(var i=0;i<user_selected_auth.length;i++){
        txt = txt + "<tr> <td>"+ user_selected_auth[i].name+"</td> </tr>";
    }
    txt = txt+ "</tbody>";
    $("#Table_user_authed").append(txt);
}
function draw_user_detail_key_table(){
    $("#Table_user_key").empty();
    txt ="<thead> <tr> <th>钥匙名称 </th> <th>归属项目 </th></tr> </thead> <tbody >";
    if(user_selected_key === null) user_selected_key = [];
    for(var i=0;i<user_selected_key.length;i++){
        txt = txt + "<tr id='"+user_selected_key[i].id+"' class='keyrow'> <td>"+ user_selected_key[i].name+"</td> <td>"+ user_selected_key[i].domain+"</td></tr>";
    }
    txt = txt+ "</tbody>";
    $("#Table_user_key").append(txt);
    $('.keyrow').on('click',function() {
        var keyid = $(this).attr("id");
        if(keyid!==undefined&&keyid!=="" ){
            get_key_auth_list(keyid);
        }
    });
}
function show_new_user_module(){

    $("#newModalLabel").text("创建新用户");
    user_module_status = true;
    $("#NewUsername_Input").val("");
    $("#NewUserNick_Input").val("");
    $("#NewPassword_Input").val("");
    $("#NewRePassword_Input").val("");
    $("#NewUserMobile_Input").val("");
    $("#NewUserMail_Input").val("");
    $("#NewUserMemo_Input").val("");
    $("#NewUserType_choice").val("false");
    $("#NewUsername_Input").attr("placeholder","用户名");
    $("#NewPassword_Input").attr("placeholder","密码");
    $("#NewRePassword_Input").attr("placeholder","重复密码");
    $("#NewUserMobile_Input").attr("placeholder","电话号码");
    $("#NewUserMail_Input").attr("placeholder","邮箱");
/*
    $("#duallistboxUserAuth_new").empty();
    var txt = "";
    if(project_pg_list === null) project_pg_list = [];
    for(var i =0;i<project_pg_list.length;i++){
        txt = "<option value='"+project_pg_list[i].id+"'>"+project_pg_list[i].name+"</option>";
        $("#duallistboxUserAuth_new").append(txt);
    }
    //$("#duallistboxUserAuth_new").append(txt);
    $('.NewUserAuthDual').bootstrapDualListbox('refresh', true);
*/
    /*
     NewUserAuthDual2 = $('.NewUserAuthDual').bootstrapDualListbox(
     { nonSelectedListLabel: '全部项目', selectedListLabel: '用户权限', preserveSelectionOnMove: 'moved', moveOnSelect: true, nonSelectedFilter: '',showFilterInputs: false,infoText:""});
     $("#showValue").click(function () { alert($('[name="duallistbox_demo1"]').val());});
     */


    modal_middle($('#newUserModal'));

    $('#newUserModal').modal('show');

}
function submit_new_user_module(){
    var new_usr_name = $("#NewUsername_Input").val();
    var new_usr_nick = $("#NewUserNick_Input").val();
    var new_usr_password = $("#NewPassword_Input").val();
    var new_usr_repassword = $("#NewRePassword_Input").val();
    var new_usr_mobile = $("#NewUserMobile_Input").val();
    var new_usr_mail = $("#NewUserMail_Input").val();
    var new_usr_memo = $("#NewUserMemo_Input").val();
    //console.log("new_usr_name:"+new_usr_name);
    if(new_usr_name === null || new_usr_name === ""){
        $("#NewUsername_Input").attr("placeholder","用户名不能为空");
        $("#NewUsername_Input").focus();
        return;
    }
    if(new_usr_password === null || new_usr_password === ""){
        $("#NewPassword_Input").attr("placeholder","密码不能为空");
        $("#NewRePassword_Input").attr("placeholder","密码不能为空");
        $("#NewPassword_Input").focus();
        return;
    }
    if(new_usr_password!=new_usr_repassword){
        $("#NewPassword_Input").val("");
        $("#NewRePassword_Input").val("");
        $("#NewPassword_Input").attr("placeholder","密码不正确，请重新输入");
        $("#NewRePassword_Input").attr("placeholder","密码不正确，请重新输入");
        $("#NewPassword_Input").focus();
        return;
    }
    if(new_usr_mobile === null || new_usr_mobile === ""){
        $("#NewUserMobile_Input").attr("placeholder","电话号码不能为空");
        $("#NewUserMobile_Input").focus();
        return;
    }
    if(new_usr_mail === null || new_usr_mail === ""){
        $("#NewUserMail_Input").attr("placeholder","邮箱不能为空");
        $("#NewUserMail_Input").focus();
        return;
    }

    var user = {
        name: new_usr_name,
        nickname: new_usr_nick,
        password: b64_sha1(new_usr_repassword),
        mobile: new_usr_mobile,
        mail: new_usr_mail,
        type: $("#NewUserType_choice").val(),
        memo: new_usr_memo
    };
    var auth = [];//new Array();
    /*
    $('#duallistboxUserAuth_new :selected').each(function(i, selected) {
        var temp = {
            id:$(selected).val(),
            name:$(selected).text()
        };
        auth.push(temp);
    });
    console.log(auth);*/
    new_user(user,auth);
}
function show_mod_user_module(user,user_auth){
    $("#newModalLabel").text("用户信息修改：密码栏不输入表示不修改密码");
    user_module_status = false;
    $("#NewUsername_Input").val(user.name);
    $("#NewUserNick_Input").val(user.nickname);
    $("#NewPassword_Input").val("");
    $("#NewRePassword_Input").val("");
    $("#NewUserMobile_Input").val(user.mobile);
    $("#NewUserMail_Input").val(user.mail);
    $("#NewUserMemo_Input").val(user.memo);
    $("#NewUsername_Input").attr("placeholder","用户名");
    $("#NewPassword_Input").attr("placeholder","密码");
    $("#NewRePassword_Input").attr("placeholder","重复密码");
    $("#NewUserMobile_Input").attr("placeholder","电话号码");
    $("#NewUserMail_Input").attr("placeholder","邮箱");
    /*
    if(user.type===false) {
        $("#NewUserType_choice").val("false");
    }else{
        $("#NewUserType_choice").val("true");
    }*/
    $("#NewUserType_choice").val(user.type);
/*
    $("#duallistboxUserAuth_new").empty();
    var txt = "";
    if(project_pg_list === null) project_pg_list = [];
    for(var i =0;i<project_pg_list.length;i++){
        txt = "<option value='"+project_pg_list[i].id+"'";
        for(var j=0;j<user_auth.length;j++){
            if(user_auth[j].id == project_pg_list[i].id){
                txt = txt +"selected='selected'";
                break;
            }
        }
        txt = txt +">"+project_pg_list[i].name+"</option>";
        $("#duallistboxUserAuth_new").append(txt);
    }
    //$("#duallistboxUserAuth_new").append(txt);
    $('.NewUserAuthDual').bootstrapDualListbox('refresh', true);


*/
    modal_middle($('#newUserModal'));

    $('#newUserModal').modal('show');
}
function submit_mod_user_module(){
    var new_usr_name = $("#NewUsername_Input").val();
    var new_usr_nick = $("#NewUserNick_Input").val();
    var new_usr_password = $("#NewPassword_Input").val();
    var new_usr_repassword = $("#NewRePassword_Input").val();
    var new_usr_mobile = $("#NewUserMobile_Input").val();
    var new_usr_mail = $("#NewUserMail_Input").val();
    var new_usr_memo = $("#NewUserMemo_Input").val();

    if(new_usr_password!==""&&new_usr_repassword!==""&&new_usr_password!=new_usr_repassword){
        $("#NewPassword_Input").val("");
        $("#NewRePassword_Input").val("");
        $("#NewPassword_Input").attr("placeholder","密码不正确，请重新输入");
        $("#NewRePassword_Input").attr("placeholder","密码不正确，请重新输入");
        $("#NewPassword_Input").focus();
        return;
    }
    if(new_usr_repassword!=="")new_usr_repassword= b64_sha1(new_usr_repassword);
    var user = {
        id: user_selected.id,
        name: new_usr_name,
        nickname: new_usr_nick,
        password: new_usr_repassword,
        mobile: new_usr_mobile,
        mail: new_usr_mail,
        type: $("#NewUserType_choice").val(),
        memo: new_usr_memo
    };
    var auth = [];//new Array();
    /*
    $('#duallistboxUserAuth_new :selected').each(function(i, selected) {
        var temp = {
            id:$(selected).val(),
            name:$(selected).text()
        };
        auth.push(temp);
    });*/
    modify_user(user,auth);
}

/*STAFF add/send/del */
function get_staff_table(start,length){
    var body = {
        startseq: start,
        length:length,
        keyword: global_key_word
    };
    var map={
        action:"StaffTable",
        type:"query",
        body: body,
        user:usr.id
    };
    var get_staff_table_callback=function(result){
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        staff_table = result.ret.stafftable;

        staff_start = parseInt(result.ret.start);
        staff_total = parseInt(result.ret.total);

        //HYj add for server slow
        draw_staff_table_head();
    };
    JQ_get(request_head,map,get_staff_table_callback);
}

function del_staff(id){
    var body = {
        staffid: id
    };
    var map={
        action:"StaffDel",
        type:"mod",
        body: body,
        user:usr.id
    };
    var del_staff_callback = function(result){
        var ret = result.status;
        if(ret == "true"){
            del_staff_flash = function(){

                //console.log("test 12345");
                clear_staff_detail_panel();
                staff_intialize(0);
            };

            setTimeout(function(){
                show_alarm_module(false,"删除成功！",del_staff_flash);
            },500);
        }else{
            setTimeout(function(){
                show_alarm_module(true,"删除失败！"+result.msg,null);},500);
        }
    };
    JQ_get(request_head,map,del_staff_callback);

    $("#StaffDelAlarm").modal('hide');

}
function new_staff(staff){
    var body = {
        staffid:"",
        name: staff.name,
        position: staff.position,
        PJcode: staff.PJcode,
        mobile: staff.mobile,
        address: staff.address,
        gender: staff.gender,
        memo: staff.memo
    };

    var map={
        action:"StaffNew",
        type:"mod",
        body: body,
        user:usr.id
    };
    //console.log(map);
    //console.log(JSON.stringify(map));
    var new_staff_callback = function(result){
        var ret = result.status;
        if(ret == "true"){

            $('#newStaffModal').modal('hide');
            create_staff_flash = function(){


                clear_staff_detail_panel();
                staff_intialize(0);
            };
            setTimeout(function(){
                show_alarm_module(false,"创建成功！",create_staff_flash);},500);
        }else{
            setTimeout(function(){
                show_alarm_module(true,"创建失败！"+result.msg,null);},500);
        }
    };
    JQ_get(request_head,map,new_staff_callback);
}
function modify_staff(staff){
    var body={
        staffid:staff.staffid,
        name: staff.name,
        position: staff.position,
        PJcode: staff.PJcode,
        mobile: staff.mobile,
        address: staff.address,
        gender: staff.gender,
        memo: staff.memo
    };
    var map={
        action:"StaffMod",
        type:"mod",
        body: body,
        user:usr.id
    };
    var modify_staff_callback = function(result){
        var ret = result.status;
        if(ret == "true"){

            $('#newStaffModal').modal('hide');
            mod_staff_flash = function(){

                clear_staff_detail_panel();
                staff_intialize(0);
            };

            setTimeout(function() {
                show_alarm_module(false, "修改成功！", mod_staff_flash);
            },500);
        }else{

            setTimeout(function() {
                show_alarm_module(true, "修改失败！" + result.msg, null);
            },500);
        }
    };
    JQ_get(request_head,map,modify_staff_callback);

}


function staff_intialize(start) {
    staff_initial = true;
    staff_table = null;
    get_staff_table(start, table_row * 5);
    //window.setTimeout(draw_user_table_head, wait_time_middle);
}

//WORK TEMP STOP HERE
function draw_staff_table_head(){
    if(null === staff_table)return;
    var page_number = Math.ceil((staff_table.length)/table_row);

    $("#Staff_Page_control").empty();
    var txt = "<li>"+
        "<a href='#' id='staff_page_prev'>Prev</a>"+
        "</li>";
    var page_start_number = Math.ceil(staff_start/table_row);
    var i;
    for(i=0;i<page_number;i++){
        txt=txt+ "<li>"+
            "<a href='#' id='staff_page_"+i+"'>"+(i+page_start_number+1)+"</a>"+
            "</li>";
    }
    txt=txt+"<li>"+
        "<a href='#' id='staff_page_next'>Next</a>"+
        "</li>";
    $("#Staff_Page_control").append(txt);
    table_head="<thead>"+
        "<tr>"+"<th>序号</th>"+"<th>员工名</th>"+"<th>性别</th>"+"<th>岗位</th>"+"<th>手机号</th>"+"<th>地址</th>";
    table_head=table_head+"</tr></thread>";
    click_draw_staff_table = function(){
        draw_staff_table($(this));
    };
    for(i=0;i<page_number;i++){
        /*
         $("#user_page_"+i).on('click',function(){
         draw_user_table($(this));
         });*/
        $("#staff_page_"+i).on('click',click_draw_staff_table);
    }
    if(staff_start<=0){
        $("#staff_page_prev").css("display","none");
    }else{
        $("#staff_page_prev").css("display","block");
        $("#staff_page_prev").on('click',function(){
            var new_start = staff_start-(table_row*5);
            if(new_start<0) new_start =0;
            staff_intialize(new_start);
        });
    }

    if((staff_start+(table_row*5))>=staff_total){
        $("#staff_page_next").css("display","none");
    }else{
        $("#staff_page_next").css("display","block");
        $("#staff_page_next").on('click',function(){
            staff_intialize(staff_start+(table_row*5));
        });
    }

    draw_staff_table($("#staff_page_0"));
}
function get_staff_gender(gender){
    if (gender =="1") return "男";
    if (gender =="2") return "女";
    return "未知级别";
}
function draw_staff_table(data){

    $("#Table_staff").empty();
    if(null === staff_table) return;
    var sequence = (parseInt(data.html())-1)*table_row-staff_start;
    var txt = table_head;
    txt = txt +"<tbody>";
    var i;
    for(i=0;i<table_row;i++){
        if((sequence+i)<staff_table.length){
            if(0!==i%2){
                txt =txt+ "<tr class='success li_menu' id='table_cell"+i+"' staffid='"+staff_table[sequence+i].id+"'>";
            }else{ txt =txt+ "<tr class='li_menu' id='table_cell"+i+"' staffid='"+staff_table[sequence+i].id+"'>";}
            txt = txt +"<td>" + staff_table[sequence+i].id+"</td>" +"<td>" + staff_table[sequence+i].name+"</td>" ;
            txt = txt+"<td>"+get_staff_gender(staff_table[sequence+i].gender)+"</td>"+"<td>" + staff_table[sequence+i].position+"</td>" +"<td>" + staff_table[sequence+i].mobile+"</td>"+"<td>" + staff_table[sequence+i].address+"</td>";
            txt = txt +"</tr>";
        }else{
            if(0!==i%2){
                txt =txt+ "<tr class='success' id='table_cell"+i+"' userid='null'>";
            }else{ txt =txt+ "<tr  id='table_cell"+i+"' userid='null'>";}
            txt = txt +"<td>--</td>" +"<td>--</td>" +"<td>--</td>" +"<td>--</td>" +"<td>--</td>" +"<td>--</td>";
            txt = txt +"</tr>";
        }

    }
    txt = txt+"</tbody>";

    $("#Table_staff").append(txt);
    table_cell_click = function(){
        if($(this).attr("staffid") !="null"){
            for(var i=0;i<staff_table.length;i++){
                if($(this).attr("staffid") == staff_table[i].id){
                    staff_selected =staff_table[i];
                    break;
                }
            }

            Initialize_staff_detail();
            touchcookie();
        }
    };
    for(i=0;i<table_row;i++){
        $("#table_cell"+i).on('click',table_cell_click);
    }

}
function Initialize_staff_detail(){

    draw_staff_detail_panel();
}
function clear_staff_detail_panel(){
    staff_selected = null;
    var txt = "<p></p><p></p>"+
        "<div class='col-md-6 col-sm-6 col-xs-12 column'>"+
        "<dl >"+
        "<dt >员工名：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "<dt >员工性别：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "<dt >员工岗位：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-6 col-sm-6 col-xs-12 column'>"+
        "<dl >"+
        "<dt>工厂代码：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "<dt>联系电话：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "<dt>地址：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-12 col-sm-12 col-xs-12 column'>"+
        "<dl >"+
        "<dt>备注：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "</dl>"+
        "</div>";

    $("#Label_staff_detail").empty();
    $("#Label_staff_detail").append(txt);
}
function draw_staff_detail_panel(){
    $("#Label_staff_detail").empty();
    var staffgender=get_staff_gender(staff_selected.gender);
    var txt = "<p></p><p></p>"+
        "<div class='col-md-6 col-sm-6 col-xs-12 column'>"+
        "<dl >"+
        "<dt >员工名：</dt><dd>"+staff_selected.name+"</dd>"+
        "<dt >员工性别：</dt><dd>"+staffgender+"</dd>"+
        "<dt >员工岗位：</dt><dd>"+staff_selected.position+"</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-6 col-sm-6 col-xs-12 column'>"+
        "<dl >"+
        "<dt>工厂代码：</dt><dd>"+staff_selected.PJcode+"</dd>"+
        "<dt>联系电话：</dt><dd>"+staff_selected.mobile+"</dd>"+
        "<dt>地址：</dt><dd>"+staff_selected.address+"</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-12 col-sm-12 col-xs-12 column'>"+
        "<dl >"+
        "<dt>备注：</dt><dd>"+staff_selected.memo+"</dd>"+
        "</dl>"+
        "</div>";
    $("#Label_staff_detail").append(txt);

}
function show_new_staff_module(){

    $("#newStaffLabel").text("创建新员工");
    staff_module_status = true;
    $("#newStaffname_Input").val("");
    $("#NewStaffGender_choice").val("1");
    $("#NewStaffPJcode_Input").val("");
    $("#NewStaffMobile_Input").val("");
    $("#NewStaffPosition_Input").val("");
    $("#NewStaffAddress_Input").val("");
    $("#NewStaffMemo_Input").val("");
    $("#newStaffname_Input").attr("placeholder","员工名");
    $("#NewStaffPJcode_Input").attr("placeholder","工厂代码");
    $("#NewStaffMobile_Input").attr("placeholder","联系电话");
    $("#NewStaffPosition_Input").attr("placeholder","职位");
    $("#NewStaffAddress_Input").attr("placeholder","地址");


    modal_middle($('#newStaffModal'));

    $('#newStaffModal').modal('show');

}

function submit_new_staff_module(){
    var new_staff_name = $("#newStaffname_Input").val();
    var new_staff_gender = $("#NewStaffGender_choice").val();
    var new_staff_pjcode = $("#NewStaffPJcode_Input").val();
    var new_staff_mobile = $("#NewStaffMobile_Input").val();
    var new_staff_possion = $("#NewStaffPosition_Input").val();
    var new_staff_address = $("#NewStaffAddress_Input").val();
    var new_staff_memo = $("#NewStaffMemo_Input").val();
    //console.log("new_usr_name:"+new_usr_name);
    if(new_staff_name === null || new_staff_name === ""){
        $("#newStaffname_Input").attr("placeholder","员工名不能为空");
        $("#newStaffname_Input").focus();
        return;
    }
    if(new_staff_pjcode === null || new_staff_pjcode === "" ||new_staff_pjcode.length>5){
        $("#NewStaffPJcode_Input").attr("placeholder","工厂代码必须小于5位");
        $("#NewStaffPJcode_Input").val("");
        $("#NewStaffPJcode_Input").focus();
        return;
    }
    if(new_staff_mobile === null || new_staff_mobile === ""){
        $("#NewStaffMobile_Input").attr("placeholder","手机号不能为空");
        $("#NewStaffMobile_Input").focus();
        return;
    }
    if(new_staff_possion === null || new_staff_possion === ""){
        $("#NewStaffPosition_Input").attr("placeholder","员工岗位不能为空");
        $("#NewStaffPosition_Input").focus();
        return;
    }

    var staff = {
        staffid:"",
        name: new_staff_name,
        position: new_staff_possion,
        PJcode: new_staff_pjcode,
        mobile: new_staff_mobile,
        address: new_staff_address,
        gender: new_staff_gender,
        memo: new_staff_memo
    };
    new_staff(staff);
}
function show_mod_staff_module(staff){
    $("#newStaffLabel").text("员工信息修改");
    staff_module_status = false;
    $("#newStaffname_Input").val(staff.name);
    $("#NewStaffGender_choice").val(staff.gender);
    $("#NewStaffPJcode_Input").val(staff.PJcode);
    $("#NewStaffMobile_Input").val(staff.mobile);
    $("#NewStaffPosition_Input").val(staff.position);
    $("#NewStaffAddress_Input").val(staff.address);
    $("#NewStaffMemo_Input").val(staff.memo);
    $("#newStaffname_Input").attr("placeholder","员工名");
    $("#NewStaffPJcode_Input").attr("placeholder","工厂代码");
    $("#NewStaffMobile_Input").attr("placeholder","联系电话");
    $("#NewStaffPosition_Input").attr("placeholder","职位");
    $("#NewStaffAddress_Input").attr("placeholder","地址");

    modal_middle($('#newStaffModal'));

    $('#newStaffModal').modal('show');
}

function submit_mod_staff_module(){
    var new_staff_name = $("#newStaffname_Input").val();
    var new_staff_gender = $("#NewStaffGender_choice").val();
    var new_staff_pjcode = $("#NewStaffPJcode_Input").val();
    var new_staff_mobile = $("#NewStaffMobile_Input").val();
    var new_staff_possion = $("#NewStaffPosition_Input").val();
    var new_staff_address = $("#NewStaffAddress_Input").val();
    var new_staff_memo = $("#NewStaffMemo_Input").val();
    //console.log("new_usr_name:"+new_usr_name);
    if(new_staff_name === null || new_staff_name === ""){
        $("#newStaffname_Input").attr("placeholder","员工名不能为空");
        $("#newStaffname_Input").focus();
        return;
    }
    if(new_staff_pjcode === null || new_staff_pjcode === "" ||new_staff_pjcode.length>5){
        $("#NewStaffPJcode_Input").attr("placeholder","工厂代码小于5位");
        $("#NewStaffPJcode_Input").val();
        $("#NewStaffPJcode_Input").focus();
        return;
    }
    if(new_staff_mobile === null || new_staff_mobile === ""){
        $("#NewStaffMobile_Input").attr("placeholder","手机号不能为空");
        $("#NewStaffMobile_Input").focus();
        return;
    }
    if(new_staff_possion === null || new_staff_possion === ""){
        $("#NewStaffPosition_Input").attr("placeholder","员工岗位不能为空");
        $("#NewStaffPosition_Input").focus();
        return;
    }
    var staff = {
        id: staff_selected.id,
        name: new_staff_name,
        position: new_staff_possion,
        PJcode: new_staff_pjcode,
        mobile: new_staff_mobile,
        address: new_staff_address,
        gender: new_staff_gender,
        memo: new_staff_memo
    };
    modify_staff(staff);
}







/**
 * PG view function part
 */
function get_project_list(){
    var map={
        action:"ProjectList",
        type:"query",
        user:usr.id
    };
	var get_project_list_callback = function(result){
		if(result.status == "false"){
            show_expiredModule();
            return;
        }
        project_list = result.ret;
	};
	JQ_get(request_head,map,get_project_list_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        project_list = result.ret;
    });*/
}
function get_pg_table(start,length){
    var body={
        startseq: start,
        length:length,
        keyword: global_key_word
    };
    var map={
        action:"PGTable",
        body:body,
        type:"query",
        user:usr.id
    };
	var get_pg_table_callback = function(result){
		if(result.status == "false"){
            show_expiredModule();
            return;
        }
        pg_table = result.ret.pgtable;

        pg_start = parseInt(result.ret.start);
        pg_total = parseInt(result.ret.total);
        //HYJ add for server slow
        draw_pg_table_head();
	};
	JQ_get(request_head,map,get_pg_table_callback);
		/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        pg_table = result.ret;

        pg_start = parseInt(result.start);
        pg_total = parseInt(result.total);
        //HYJ add for server slow
        draw_pg_table_head();
    });*/
}
function del_pg(id){
    var body={
        PGCode: id
    };
    var map={
        action:"PGDel",
        type:"mod",
        body: body,
        user:usr.id
    };


	var del_pg_callback = function(result){
		var ret = result.status;
        if(ret == "true"){
            del_pg_flash = function(){
                clear_pg_detail_panel();
                pg_intialize(0);
            };

            setTimeout(function() {
                show_alarm_module(false, "删除成功！", del_pg_flash);
            },500);

        }else{

            setTimeout(function() {
                show_alarm_module(true, "删除失败！" + result.msg, null);
            },500);
        }
	};
	JQ_get(request_head,map,del_pg_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "true"){
            show_alarm_module(false,"删除成功！");
            clear_pg_detail_panel();
            pg_intialize(0);
        }else{
            show_alarm_module(true,"删除失败！"+result.msg);
        }
    });*/
    $("#PGDelAlarm").modal('hide');

}
function new_pg(pg,projlist){
    var body={
        PGCode: pg.PGCode,
        PGName:pg.PGName,
        ChargeMan:pg.ChargeMan,
        Telephone:pg.Telephone,
        Department:pg.Department,
        Address:pg.Address,
        Stage:pg.Stage,
        Projlist: projlist
    };
    var map={
        action:"PGNew",
        type:"mod",
        body: body,
        user:usr.id
    };
	var new_pg_callback = function(result){
		var ret = result.status;
        if(ret == "true"){
            $('#newPGModal').modal('hide');

            new_pg_flash = function(){
                clear_pg_detail_panel();
                pg_intialize(0);
            };

            setTimeout(function() {
                show_alarm_module(false, "创建成功！", new_pg_flash);
            },500);
        }else{

            setTimeout(function() {
                show_alarm_module(true, "创建失败！" + result.msg, null);
            },500);
        }
	};
	JQ_get(request_head,map,new_pg_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "true"){
            show_alarm_module(false,"创建成功！");
            $('#newPGModal').modal('hide');
            clear_pg_detail_panel();
            pg_intialize(0);
        }else{
            show_alarm_module(true,"创建失败！"+result.msg);
        }
    });*/
}
function modify_pg(pg,projlist){
    var body={
        PGCode: pg.PGCode,
        PGName:pg.PGName,
        ChargeMan:pg.ChargeMan,
        Telephone:pg.Telephone,
        Department:pg.Department,
        Address:pg.Address,
        Stage:pg.Stage,
        Projlist: projlist
    };
    var map={
        action:"PGMod",
        type:"mod",
        body: body,
        user:usr.id
    };
	var modify_pg_callback = function(result){
		var ret = result.status;
        if(ret == "true"){
            $('#newPGModal').modal('hide');
            mod_pg_flash = function(){
                clear_pg_detail_panel();
                pg_intialize(0);
            };

            setTimeout(function() {
                show_alarm_module(false, "修改成功！", mod_pg_flash);

            },500);
        }else{
            setTimeout(function() {
                show_alarm_module(true, "修改失败！" + result.msg, null);
            },500);
        }
	};
	JQ_get(request_head,map,modify_pg_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "true"){
            show_alarm_module(false,"修改成功！");
            $('#newPGModal').modal('hide');
            clear_pg_detail_panel();
            pg_intialize(0);
        }else{
            show_alarm_module(true,"修改失败！"+result.msg);
        }
    });*/
}



function get_pg_proj(pgid){
    var body={
        PGCode: pgid
    };
    var map={
        action:"PGProj",
        type:"query",
        body: body,
        user:usr.id
    };
	var get_pg_proj_callback = function(result){
		if(result.status == "false"){
            show_expiredModule();
            return;
        }
        pg_selected_proj = result.ret;
        // HYJ add for server slow
        draw_pg_detail_panel();
	};
	JQ_get(request_head,map,get_pg_proj_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        pg_selected_proj = result.ret;
        // HYJ add for server slow
        draw_pg_detail_panel();
    });*/
}
function pg_intialize(start) {

    if(project_list === null)get_project_list();
    pg_initial = true;
    pg_table = null;
    get_pg_table(start, table_row * 5);
    clear_pg_detail_panel();
    //window.setTimeout(draw_pg_table_head, wait_time_middle);
}
function draw_pg_table_head(){
    if(null === pg_table)return;
    var page_number = Math.ceil((pg_table.length)/table_row);

    $("#PG_Page_control").empty();
    var txt = "<li>"+
        "<a href='#' id='pg_page_prev'>Prev</a>"+
        "</li>";
    var page_start_number = Math.ceil(pg_start/table_row);
	var i;
    for(i=0;i<page_number;i++){
        txt=txt+ "<li>"+
            "<a href='#' id='pg_page_"+i+"'>"+(i+page_start_number+1)+"</a>"+
            "</li>";
    }
    txt=txt+"<li>"+
        "<a href='#' id='pg_page_next'>Next</a>"+
        "</li>";
    $("#PG_Page_control").append(txt);
    table_head="<thead>"+
        "<tr>"+"<th>编号</th> <th>名称 </th> <th>责任人 </th> <th>电话 </th> <th>单位 </th>";
    table_head=table_head+"</tr></thread>";
	pg_page_click = function(){
		draw_pg_table($(this));
	};
    for(i=0;i<page_number;i++){
        //$("#pg_page_"+i).on('click',function(){
        //    draw_pg_table($(this));
        //});
		$("#pg_page_"+i).on('click',pg_page_click);
    }
    if(pg_start<=0){
        $("#pg_page_prev").css("display","none");
    }else{
        $("#pg_page_prev").css("display","block");
        $("#pg_page_prev").on('click',function(){
            var new_start = pg_start-(table_row*5);
            if(new_start<0) new_start =0;
            pg_intialize(new_start);
        });
    }

    if((pg_start+(table_row*5))>=pg_total){
        $("#pg_page_next").css("display","none");
    }else{
        $("#pg_page_next").css("display","block");
        $("#pg_page_next").on('click',function(){
            pg_intialize(pg_start+(table_row*5));
        });
    }

    draw_pg_table($("#pg_page_0"));
}
function draw_pg_table(data){

    $("#Table_pg").empty();
    if(null === pg_table) return;
    var sequence = (parseInt(data.html())-1)*table_row-pg_start;
    var txt = table_head;
    txt = txt +"<tbody>";
	var i;
    for(i=0;i<table_row;i++){
        if((sequence+i)<pg_table.length){
            if(0!==i%2){
                txt =txt+ "<tr class='success  li_menu' id='pg_table_cell"+i+"' PGCode='"+pg_table[sequence+i].PGCode+"'>";
            }else{ txt =txt+ "<tr class=' li_menu' id='pg_table_cell"+i+"' PGCode='"+pg_table[sequence+i].PGCode+"'>";}
            txt = txt +"<td>" + pg_table[sequence+i].PGCode+"</td>"+"<td>" + pg_table[sequence+i].PGName+"</td>"+"<td>" + pg_table[sequence+i].ChargeMan+"</td>"+"<td>" + pg_table[sequence+i].Telephone+"</td>";
            txt = txt +"<td>" + pg_table[sequence+i].Department+"</td>";

            txt = txt +"</tr>";
        }else{
            if(0!==i%2){
                txt =txt+ "<tr class='success' id='pg_table_cell"+i+"' PGCode='null'>";
            }else{ txt =txt+ "<tr  id='pg_table_cell"+i+"' PGCode='null'>";}
            txt = txt +"<td>--</td>"+"<td>--</td>"+"<td>--</td>"+"<td>--</td>"+"<td>--</td>"+"<td>--</td>";
            txt = txt +"</tr>";
        }

    }
    txt = txt+"</tbody>";

    $("#Table_pg").append(txt);
	pg_table_cell_click = function(){
		if($(this).attr("PGCode") !="null"){
			for(var i=0;i<pg_table.length;i++){
				if($(this).attr("PGCode") == pg_table[i].PGCode){
					pg_selected =pg_table[i];
					break;
				}
			}

			Initialize_pg_detail();
			touchcookie();
		}
	};
    for(i=0;i<table_row;i++){
		/*
        $("#pg_table_cell"+i).on('click',function(){
            if($(this).attr("PGCode") !="null"){
                for(var i=0;i<pg_table.length;i++){
                    if($(this).attr("PGCode") == pg_table[i].PGCode){
                        pg_selected =pg_table[i];
                        break;
                    }
                }

                Initialize_pg_detail();
                touchcookie();
            }

        });*/
		$("#pg_table_cell"+i).on('click',pg_table_cell_click);
    }
    touchcookie();
}
function Initialize_pg_detail(){
    get_pg_proj(pg_selected.PGCode);
    //window.setTimeout(draw_pg_detail_panel, wait_time_short);
}
function clear_pg_detail_panel(){
    pg_selected = null;

    var txt = "<p></p><p></p>"+
    "<div class='col-md-6 col-sm-6 col-xs-12 column'>"+
    "<dl >"+
    "<dt >项目组编号：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
    "<dt >负责人：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
    "</dl>"+
    "</div>"+
    "<div class='col-md-6 col-sm-6 col-xs-12 column'>"+
    "<dl >"+
    "<dt>项目组名称：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
    "<dt>电话：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
    "</dl>"+
    "</div>"+
    "<div class='col-md-12 col-sm-12 col-xs-12 column'>"+
    "<dl >"+
    "<dt>单位：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
    "<dt>地址：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
    "<dt>备注：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
    "</dl>"+
    "</div>";

    /*
    var txt = "<p></p><p></p>"+
        "<label style='min-width: 150px'>项目组编号：</label><label style='min-width: 150px'>项目组名称：</label>"+
        "<p></p>"+
        "<label style='min-width: 150px'>负责人：</label>"+"<p></p>"+"<label style='min-width: 150px'>电话：</label>"+
        "<p></p>"+
        "<label style='min-width: 300px'>单位：</label>"+
        "<p></p>"+
        "<label style='min-width: 300px'>地址：</label>"+
        "<p></p>"+
        "<label>备注：</label>";*/

    $("#Label_pg_detail").empty();
    $("#Label_pg_detail").append(txt);
    $("#Table_pg_proj").empty();
}
function draw_pg_detail_panel(){
    $("#Label_pg_detail").empty();
    if(pg_selected_proj === null) return;
    var txt = "<p></p><p></p>"+
        "<div class='col-md-6 col-sm-6 col-xs-12 column'>"+
        "<dl >"+
        "<dt >项目组编号：</dt><dd>"+pg_selected.PGCode+"</dd>"+
        "<dt >负责人：</dt><dd>"+pg_selected.ChargeMan+"</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-6 col-sm-6 col-xs-12 column'>"+
        "<dl >"+
        "<dt>项目组名称：</dt><dd>"+pg_selected.PGName+"</dd>"+
        "<dt>电话：</dt><dd>"+pg_selected.Telephone+"</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-12 col-sm-12 col-xs-12 column'>"+
        "<dl >"+
        "<dt>单位：</dt><dd>"+pg_selected.Department+"</dd>"+
        "<dt>地址：</dt><dd>"+pg_selected.Address+"</dd>"+
        "<dt>备注：</dt><dd>"+pg_selected.Stage+"</dd>"+
        "</dl>"+
        "</div>";
    /*
    var txt = "<p></p><p></p>"+
        "<label style='min-width: 150px'>项目组编号："+pg_selected.PGCode+"</label><label style='min-width: 150px'>项目组名称："+pg_selected.PGName+"</label>"+
        "<p></p>"+
        "<label style='min-width: 150px'>负责人："+pg_selected.ChargeMan+"</label>"+"<p></p>"+"<label style='min-width: 150px'>电话："+pg_selected.Telephone+"</label>"+
        "<p></p>"+
        "<label style='min-width: 300px'>单位："+pg_selected.Department+"</label>"+
        "<p></p>"+
        "<label style='min-width: 300px'>地址："+pg_selected.Address+"</label>"+
        "<p></p>"+
        "<label>备注："+pg_selected.Stage+"</label>";*/
    $("#Label_pg_detail").append(txt);

    $("#Table_pg_proj").empty();
    txt ="<thead> <tr> <th>下辖项目清单 </th> </tr> </thead> <tbody >";
    if(pg_selected_proj === null) pg_selected_proj = [];
    for(var i=0;i<pg_selected_proj.length;i++){
        txt = txt + "<tr> <td>"+ pg_selected_proj[i].name+"</td> </tr>";
    }
    txt = txt+ "</tbody>";
    $("#Table_pg_proj").append(txt);

}
function show_new_pg_module(){

    $("#newPGModalLabel").text("创建新项目组");
    pg_module_status = true;

    $("#PGPGCode_Input").val("");
    $('#PGPGCode_Input').attr("disabled",true);
    $("#PGPGName_Input").val("");
    $("#PGChargeMan_Input").val("");
    $("#PGTelephone_Input").val("");
    $("#PGDepartment_Input").val("");
    $("#PGAddress_Input").val("");
    $("#PGStage_Input").val("");
    $("#PGPGCode_Input").attr("placeholder","项目组编号");
    $("#PGPGName_Input").attr("placeholder","项目组名称");
    $("#PGChargeMan_Input").attr("placeholder","负责人姓名");
    $("#PGTelephone_Input").attr("placeholder","联系电话");
    $("#PGDepartment_Input").attr("placeholder","单位名称");
    $("#PGAddress_Input").attr("placeholder","地址");

    $("#duallistboxPGProj_new").empty();
    var txt = "";
    if(project_list === null) project_list = [];
    for(var i =0;i<project_list.length;i++){
        txt = "<option value='"+project_list[i].id+"'>"+project_list[i].name+"</option>";
        $("#duallistboxPGProj_new").append(txt);
    }
    //$("#duallistboxPGProj_new").append(txt);
    $('.NewPGProjDual').bootstrapDualListbox('refresh', true);

    /*
     NewUserAuthDual2 = $('.NewUserAuthDual').bootstrapDualListbox(
     { nonSelectedListLabel: '全部项目', selectedListLabel: '用户权限', preserveSelectionOnMove: 'moved', moveOnSelect: true, nonSelectedFilter: '',showFilterInputs: false,infoText:""});
     $("#showValue").click(function () { alert($('[name="duallistbox_demo1"]').val());});
     */


    modal_middle($('#newPGModal'));

    $('#newPGModal').modal('show');

}
function submit_new_pg_module(){
    var new_PGPGCode = $("#PGPGCode_Input").val();
    var new_PGPGName = $("#PGPGName_Input").val();
    var new_PGChargeMan = $("#PGChargeMan_Input").val();
    var new_PGTelephone = $("#PGTelephone_Input").val();
    var new_PGDepartment = $("#PGDepartment_Input").val();
    var new_PGAddress = $("#PGAddress_Input").val();
    var new_PGStage = $("#PGStage_Input").val();
/*
    if(new_PGPGCode === null || new_PGPGCode === ""){
        $("#PGPGCode_Input").attr("placeholder","项目组号不能为空");
        $("#PGPGCode_Input").focus();
        return;
    }*/
    if(new_PGPGName === null || new_PGPGName === ""){
        $("#PGPGName_Input").attr("placeholder","项目组名称不能为空");
        $("#PGPGName_Input").focus();
        return;
    }
    if(new_PGChargeMan === null || new_PGChargeMan === ""){
        $("#PGChargeMan_Input").attr("placeholder","负责人姓名不能为空");
        $("#PGChargeMan_Input").focus();
        return;
    }
    if(new_PGTelephone === null || new_PGTelephone === ""){
        $("#PGTelephone_Input").attr("placeholder","联系电话不能为空");
        $("#PGTelephone_Input").focus();
        return;
    }
    if(new_PGDepartment === null || new_PGDepartment === ""){
        $("#PGDepartment_Input").attr("placeholder","单位名称不能为空");
        $("#PGDepartment_Input").focus();
        return;
    }
    if(new_PGAddress === null || new_PGAddress === ""){
        $("#PGAddress_Input").attr("placeholder","地址不能为空");
        $("#PGAddress_Input").focus();
        return;
    }

    var pg = {
        PGCode: new_PGPGCode,
        PGName:new_PGPGName,
        ChargeMan:new_PGChargeMan,
        Telephone:new_PGTelephone,
        Department:new_PGDepartment,
        Address:new_PGAddress,
        Stage:new_PGStage
    };

    var proj = [];//new Array();
    $('#duallistboxPGProj_new :selected').each(function(i, selected) {
        var temp = {
            id:$(selected).val(),
            name:$(selected).text()
        };
        proj.push(temp);
    });
    new_pg(pg,proj);
}
function show_mod_pg_module(pg,pg_proj){
    $("#newPGModalLabel").text("项目组修改");
    pg_module_status = false;
    $("#PGPGCode_Input").val(pg.PGCode);
    $('#PGPGCode_Input').attr("disabled",true);
    $("#PGPGName_Input").val(pg.PGName);
    $("#PGChargeMan_Input").val(pg.ChargeMan);
    $("#PGTelephone_Input").val(pg.Telephone);
    $("#PGDepartment_Input").val(pg.Department);
    $("#PGAddress_Input").val(pg.Address);
    $("#PGStage_Input").val(pg.Stage);
    $("#PGPGCode_Input").attr("placeholder","项目号");
    $("#PGPGName_Input").attr("placeholder","项目名称");
    $("#PGChargeMan_Input").attr("placeholder","负责人姓名");
    $("#PGTelephone_Input").attr("placeholder","联系电话");
    $("#PGDepartment_Input").attr("placeholder","单位名称");
    $("#PGAddress_Input").attr("placeholder","地址");

    $("#duallistboxPGProj_new").empty();
    var txt = "";
    if(project_list === null) project_list = [];
    for(var i =0;i<project_list.length;i++){
        txt = "<option value='"+project_list[i].id+"'";
        for(var j=0;j<pg_proj.length;j++){
            if(pg_proj[j].id == project_list[i].id){
                txt = txt +"selected='selected'";
                break;
            }
        }
        txt = txt +">"+project_list[i].name+"</option>";
        $("#duallistboxPGProj_new").append(txt);
    }
    //$("#duallistboxPGProj_new").append(txt);
    $('.NewPGProjDual').bootstrapDualListbox('refresh', true);



    modal_middle($('#newPGModal'));

    $('#newPGModal').modal('show');
}
function submit_mod_pg_module(){
    var new_PGPGCode = $("#PGPGCode_Input").val();
    var new_PGPGName = $("#PGPGName_Input").val();
    var new_PGChargeMan = $("#PGChargeMan_Input").val();
    var new_PGTelephone = $("#PGTelephone_Input").val();
    var new_PGDepartment = $("#PGDepartment_Input").val();
    var new_PGAddress = $("#PGAddress_Input").val();
    var new_PGStage = $("#PGStage_Input").val();

    var pg = {
        PGCode: new_PGPGCode,
        PGName:new_PGPGName,
        ChargeMan:new_PGChargeMan,
        Telephone:new_PGTelephone,
        Department:new_PGDepartment,
        Address:new_PGAddress,
        Stage:new_PGStage
    };

    var proj = [];//new Array();
    $('#duallistboxPGProj_new :selected').each(function(i, selected) {
        var temp = {
            id:$(selected).val(),
            name:$(selected).text()
        };
        proj.push(temp);
    });
    modify_pg(pg,proj);
}

/**
 * Key view function part
 */
function get_key_table(start,length){
    var body={
        startseq: start,
        length:length,
        keyword: global_key_word
    };
    var map={
        action:"KeyTable",
        type:"query",
        body: body,
        user:usr.id
    };
	var get_key_table_callback = function(result){
		if(result.status == "false"){
            show_expiredModule();
            return;
        }
        key_table = result.ret.keytable;

        key_start = parseInt(result.ret.start);
        key_total = parseInt(result.ret.total);
        //HYJ add for server slow
        draw_key_table_head();
	};
	JQ_get(request_head,map,get_key_table_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        key_table = result.ret;

        key_start = parseInt(result.start);
        key_total = parseInt(result.total);
        //HYJ add for server slow
        draw_key_table_head();
    });*/
}
function del_key(id){
    var body={
        KeyCode: id
    };
    var map={
        action:"KeyDel",
        type:"mod",
        body: body,
        user:usr.id
    };
	var del_key_callback = function(result){
		var ret = result.status;
        if(ret == "true"){
            del_key_flash= function(){
                clear_key_detail_panel();
                key_intialize(0);
            };
            setTimeout(function() {
                show_alarm_module(false, "删除成功！", del_key_flash);
            },500);

        }else{
            setTimeout(function() {
                show_alarm_module(true, "删除失败！" + result.msg, null);
            },500);
        }
	};
	JQ_get(request_head,map,del_key_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "true"){
            show_alarm_module(false,"删除成功！");
            clear_key_detail_panel();
            key_intialize(0);
        }else{
            show_alarm_module(true,"删除失败！"+result.msg);
        }
    });*/
    $("#KeyDelAlarm").modal('hide');

}
function new_key(key){
	var body={
        KeyCode: key.KeyCode,
        KeyName:key.KeyName,
        KeyProj:key.KeyProj,
        KeyType:key.KeyType,
        HardwareCode:key.HardwareCode,
        Memo:key.Memo
    };
    var map={
        action:"KeyNew",
        type:"mod",
        body: body,
        user:usr.id
    };
	var new_key_callback = function(result){
		var ret = result.status;
        if(ret == "true"){

            $('#newKeyModal').modal('hide');
            new_key_flash = function(){
                clear_key_detail_panel();
                key_intialize(0);
            };

            setTimeout(function() {
                show_alarm_module(false, "创建成功！", new_key_flash);
            },500);
        }else{
            setTimeout(function() {
                show_alarm_module(true, "创建失败！" + result.msg, null);
            },500);
        }
	};
	JQ_get(request_head,map,new_key_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "true"){
            show_alarm_module(false,"创建成功！");
            $('#newKeyModal').modal('hide');
            clear_key_detail_panel();
            key_intialize(0);
        }else{
            show_alarm_module(true,"创建失败！"+result.msg);
        }
    });*/
}
function modify_key(key){
    var body={
        KeyCode: key.KeyCode,
        KeyName:key.KeyName,
        KeyProj:key.KeyProj,
        KeyType:key.KeyType,
        HardwareCode:key.HardwareCode,
        Memo:key.Memo
    };
    var map={
        action:"KeyMod",
        type:"mod",
        body: body,
        user:usr.id
    };
	var modify_key_callback = function(result){
		var ret = result.status;
        if(ret == "true"){
            $('#newKeyModal').modal('hide');
            mod_key_flash=function(){

                clear_key_detail_panel();
                key_intialize(0);
            };
            setTimeout(function() {
                show_alarm_module(false, "修改成功！", mod_key_flash);
            },500);
        }else{
            setTimeout(function() {
                show_alarm_module(true, "修改失败！" + result.msg, null);
            },500);
        }
	};
	JQ_get(request_head,map,modify_key_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "true"){
            show_alarm_module(false,"修改成功！");
            $('#newKeyModal').modal('hide');
            clear_key_detail_panel();
            key_intialize(0);
        }else{
            show_alarm_module(true,"修改失败！"+result.msg);
        }
    });*/
}



function get_key_auth(keyid){
    var body={
        KeyCode:keyid
    };
    var map={
        action:"KeyAuthlist",
        type:"query",
        body: body,
        user:usr.id
    };
	var get_key_auth_callback = function(result){
		if(result.status == "false"){
            show_expiredModule();
            return;
        }
        key_selected_auth = result.ret;
        //hyj add for server slow.
		draw_key_detail_auth_table();
	};
	JQ_get(request_head,map,get_key_auth_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        key_selected_auth = result.ret;
        //hyj add for server slow.
		draw_key_detail_auth_table();
    });*/
}
function key_intialize(start) {

    if(project_list === null)get_project_list();
    key_initial = true;
    key_table = null;
    get_key_table(start, table_row * 5);
    clear_key_detail_panel();
}
function draw_key_table_head(){
    if(null === key_table)return;
    var page_number = Math.ceil((key_table.length)/table_row);

    $("#Key_Page_control").empty();
    var txt = "<li>"+
        "<a href='#' id='key_page_prev'>Prev</a>"+
        "</li>";
    var page_start_number = Math.ceil(key_start/table_row);
    var i;
    for(i=0;i<page_number;i++){
        txt=txt+ "<li>"+
            "<a href='#' id='key_page_"+i+"'>"+(i+page_start_number+1)+"</a>"+
            "</li>";
    }
    txt=txt+"<li>"+
        "<a href='#' id='key_page_next'>Next</a>"+
        "</li>";
    $("#Key_Page_control").append(txt);
    table_head="<thead>"+
        "<tr>"+"<th>编号</th> <th>名称 </th> <th>归口部门 </th> <th>使用人 </th> <th>种类 </th>";
    table_head=table_head+"</tr></thread>";
    key_page_click = function(){
        draw_key_table($(this));
    };
    for(i=0;i<page_number;i++){
        $("#key_page_"+i).on('click',key_page_click);
    }
    if(key_start<=0){
        $("#key_page_prev").css("display","none");
    }else{
        $("#key_page_prev").css("display","block");
        $("#key_page_prev").on('click',function(){
            var new_start = key_start-(table_row*5);
            if(new_start<0) new_start =0;
            key_intialize(new_start);
        });
    }

    if((key_start+(table_row*5))>=key_total){
        $("#key_page_next").css("display","none");
    }else{
        $("#key_page_next").css("display","block");
        $("#key_page_next").on('click',function(){
            key_intialize(key_start+(table_row*5));
        });
    }

    draw_key_table($("#key_page_0"));
}
function key_type_transfer(keyType){
    if(keyType == "R") return "射频卡";
    if(keyType == "B") return "蓝牙";
    if(keyType == "U") return "用户名";
    if(keyType == "I") return "身份证";
    if(keyType == "W") return "微信号";
    if(keyType == "P") return "电话号码";
    return "未知类型";

}
function draw_key_table(data){

    $("#Table_key").empty();
    if(null === key_table) return;
    var sequence = (parseInt(data.html())-1)*table_row-key_start;
    var txt = table_head;
    txt = txt +"<tbody>";
    var i;
    for(i=0;i<table_row;i++){
        if((sequence+i)<key_table.length){
            var keyusername = key_table[sequence+i].KeyUserName;
            if(keyusername == "none")keyusername = "部门收管";
            if(0!==i%2){
                txt =txt+ "<tr class='success  li_menu' id='key_table_cell"+i+"' KeyCode='"+key_table[sequence+i].KeyCode+"'>";
            }else{ txt =txt+ "<tr class=' li_menu' id='key_table_cell"+i+"' KeyCode='"+key_table[sequence+i].KeyCode+"'>";}
            txt = txt +"<td>" + key_table[sequence+i].KeyCode+"</td>"+"<td>" + key_table[sequence+i].KeyName+"</td>"+"<td>" + key_table[sequence+i].KeyProjName+"</td>"+"<td>" + keyusername+"</td>"+"<td>" + key_type_transfer(key_table[sequence+i].KeyType)+"</td>";
            

            txt = txt +"</tr>";
        }else{
            if(0!==i%2){
                txt =txt+ "<tr class='success' id='key_table_cell"+i+"' KeyCode='null'>";
            }else{ txt =txt+ "<tr  id='key_table_cell"+i+"' KeyCode='null'>";}
            txt = txt +"<td>--</td>"+"<td>--</td>"+"<td>--</td>"+"<td>--</td>"+"<td>--</td>";
            txt = txt +"</tr>";
        }

    }
    txt = txt+"</tbody>";

    $("#Table_key").append(txt);
    key_table_cell_click = function(){
        if($(this).attr("KeyCode") !="null"){
            for(var i=0;i<key_table.length;i++){
                if($(this).attr("KeyCode") == key_table[i].KeyCode){
                    key_selected =key_table[i];
                    break;
                }
            }

            Initialize_key_detail();
            touchcookie();
        }
    };
    for(i=0;i<table_row;i++){
        $("#key_table_cell"+i).on('click',key_table_cell_click);
    }
    touchcookie();
}
function Initialize_key_detail(){

    draw_key_detail_panel();
    get_key_auth(key_selected.KeyCode);
}
function clear_key_detail_panel(){
    key_selected = null;

    var txt = "<p></p><p></p>"+
        "<div class='col-md-6 col-sm-6 col-xs-12 column'>"+
        "<dl >"+
        "<dt >钥匙编号：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "<dt >钥匙名称：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-6 col-sm-6 col-xs-12 column'>"+
        "<dl >"+
        "<dt>归口部门：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "<dt>使用人：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-12 col-sm-12 col-xs-12 column'>"+
        "<dl >"+
        "<dt>钥匙种类：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "<dt>硬件码：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "<dt>备注：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "</dl>"+
        "</div>";


    $("#Label_key_detail").empty();
    $("#Label_key_detail").append(txt);
    $("#Table_key_auth").empty();
}
function draw_key_detail_panel(){
    $("#Label_key_detail").empty();
    var keyusername = key_selected.KeyUserName;
    if(keyusername == "none")keyusername = "部门收管";
    var txt = "<p></p><p></p>"+
        "<div class='col-md-6 col-sm-6 col-xs-12 column'>"+
        "<dl >"+
        "<dt >钥匙编号：</dt><dd>"+key_selected.KeyCode+"</dd>"+
        "<dt >钥匙名称：</dt><dd>"+key_selected.KeyName+"</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-6 col-sm-6 col-xs-12 column'>"+
        "<dl >"+
        "<dt>归口部门：</dt><dd>"+key_selected.KeyProjName+"</dd>"+
        "<dt>使用人：</dt><dd>"+keyusername+"</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-12 col-sm-12 col-xs-12 column'>"+
        "<dl >"+
        "<dt>钥匙种类：</dt><dd>"+key_type_transfer(key_selected.KeyType)+"</dd>"+
        "<dt>硬件码：</dt><dd>"+key_selected.HardwareCode+"</dd>"+
        "<dt>备注：</dt><dd>"+key_selected.Memo+"</dd>"+
        "</dl>"+
        "</div>";
    $("#Label_key_detail").append(txt);



}
function draw_key_detail_auth_table(){
	$("#Table_key_auth").empty();
	txt ="<thead> <tr> <th>授权设备 </th> <th>授权方式 </th></tr> </thead> <tbody >";
    if(key_selected_auth === null) key_selected_auth = [];
	for(var i=0;i<key_selected_auth.length;i++){
		txt = txt + "<tr> <td>"+ key_selected_auth[i].DomainName+"</td> <td>"+ key_selected_auth[i].AuthWay+"</td></tr>";
	}
	txt = txt+ "</tbody>";
    $("#Table_key_auth").append(txt);
}
function build_key_module_proj_choice(){
    if(project_list === null) return;
    var txt ="";
    for( i=0;i<project_list.length;i++){
        txt = txt +"<option value="+project_list[i].id+">"+project_list[i].name+"</option>";
    }
    $("#NewKeyProj_choice").append(txt);
}
function show_new_key_module(){

    $("#newKeyModalLabel").text("创建新钥匙");
    build_key_module_proj_choice();
    key_module_status = true;

    $("#NewKeyName_Input").val("");
    $("#NewKeyHardwareID_Input").val("");
    $("#NewKeyMemo_Input").val("");
    $("#NewKeyName_Input").attr("placeholder","钥匙名称");
    $("#NewKeyHardwareID_Input").attr("placeholder","硬件码");
    $("#NewKeyMemo_Input").attr("placeholder","备注");




    modal_middle($('#newKeyModal'));

    $('#newKeyModal').modal('show');

}
function submit_new_key_module(){
    var new_KeyCode = "";
	var new_KeyName = $("#NewKeyName_Input").val();
	var new_KeyType = $("#NewKeyType_choice").val();
	var new_KeyProj = $("#NewKeyProj_choice").val();
    var new_KeyHardwareCode = $("#NewKeyHardwareID_Input").val();
    var new_KeyMemo = $("#NewKeyMemo_Input").val();

    if(new_KeyName === null || new_KeyName === ""){
        $("#NewKeyName_Input").attr("placeholder","钥匙名称不能为空");
        $("#NewKeyName_Input").focus();
        return;
    }
    if(new_KeyHardwareCode === null || new_KeyHardwareCode === ""){
        $("#NewKeyHardwareID_Input").attr("placeholder","硬件码不能为空");
        $("#NewKeyHardwareID_Input").focus();
        return;
    }
    

    var key = {
        KeyCode:new_KeyCode,
        KeyName:new_KeyName,
        KeyType:new_KeyType,
        KeyProj:new_KeyProj,
        HardwareCode:new_KeyHardwareCode,
        Memo:new_KeyMemo
    };

    new_key(key);
}
function show_mod_key_module(key){
    $("#newKeyModalLabel").text("钥匙修改");
    build_key_module_proj_choice();
    key_module_status = false;

    $("#NewKeyName_Input").val(key.KeyName);
    $("#NewKeyHardwareID_Input").val(key.HardwareCode);
    $("#NewKeyMemo_Input").val(key.Memo);
    $("#NewKeyName_Input").attr("placeholder","钥匙名称");
    $("#NewKeyHardwareID_Input").attr("placeholder","硬件码");
    $("#NewKeyMemo_Input").attr("placeholder","备注");
    $("#NewKeyType_choice").val(key.KeyType);
    $("#NewKeyProj_choice").val(key.KeyProj);

    modal_middle($('#newKeyModal'));

    $('#newKeyModal').modal('show');
}
function submit_mod_key_module(){
    var new_KeyCode = key_selected.KeyCode;
	var new_KeyName = $("#NewKeyName_Input").val();
	var new_KeyType = $("#NewKeyType_choice").val();
	var new_KeyProj = $("#NewKeyProj_choice").val();
    var new_KeyHardwareCode = $("#NewKeyHardwareID_Input").val();
    var new_KeyMemo = $("#NewKeyMemo_Input").val();

    if(new_KeyName === null || new_KeyName === ""){
        $("#NewKeyName_Input").attr("placeholder","钥匙名称不能为空");
        $("#NewKeyName_Input").focus();
        return;
    }
    if(new_KeyHardwareCode === null || new_KeyHardwareCode === ""){
        $("#NewKeyHardwareID_Input").attr("placeholder","硬件码不能为空");
        $("#NewKeyHardwareID_Input").focus();
        return;
    }
    

    var key = {
        KeyCode:new_KeyCode,
        KeyName:new_KeyName,
        KeyType:new_KeyType,
        KeyProj:new_KeyProj,
        HardwareCode:new_KeyHardwareCode,
        Memo:new_KeyMemo
    };
    modify_key(key);
}








/*
 Project view function part
 */


function get_proj_table(start,length){
    var body={
        startseq: start,
        length:length,
        keyword: global_key_word
    };
    var map={
        action:"ProjTable",
        type:"query",
        body: body,
        user:usr.id
    };
	var get_proj_table_callback = function(result){
		if(result.status == "false"){
            show_expiredModule();
            return;
        }
        project_table = result.ret.projtable;

        project_start = parseInt(result.ret.start);
        project_total = parseInt(result.ret.total);
        //HYJ add for server slow
        draw_proj_table_head();
	};
	JQ_get(request_head,map,get_proj_table_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        project_table = result.ret;

        project_start = parseInt(result.start);
        project_total = parseInt(result.total);
        //HYJ add for server slow
        draw_proj_table_head();

    });*/
}
function del_proj(ProjCode){
	var body={
		ProjCode: ProjCode
	};
    var map={
        action:"ProjDel",
        type:"mod",
        body: body,
        user:usr.id
    };
	var del_proj_callback = function(result){
		var ret = result.status;
        if(ret == "true"){
            del_proj_flash= function(){

                clear_proj_detail_panel();
                proj_intialize(0);
            };
            setTimeout(function() {
                show_alarm_module(false, "删除成功！", del_proj_flash);
            },500);
        }else{
                setTimeout(function() {
                    show_alarm_module(true, "删除失败！" + result.msg, null);
                },500);
        }
	};
	JQ_get(request_head,map,del_proj_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "true"){
            show_alarm_module(false,"删除成功！");
            clear_proj_detail_panel();
            proj_intialize(0);
        }else{
            show_alarm_module(true,"删除失败！"+result.msg);
        }
    });*/
    $("#ProjDelAlarm").modal('hide');

}
function new_proj(project){
	var body={
		ProjCode: project.ProjCode,
        ProjName:project.ProjName,
        ChargeMan:project.ChargeMan,
        Telephone:project.Telephone,
        Department:project.Department,
        Address:project.Address,
        ProStartTime:project.ProStartTime,
        Stage:project.Stage
	};
    var map={
        action:"ProjNew",
        type:"mod",
        body: body,
        user:usr.id
    };
	var new_proj_callback = function(result){
		var ret = result.status;
        if(ret == "true"){
            $('#newProjModal').modal('hide');
            new_proj_flash= function(){
                clear_proj_detail_panel();
                proj_intialize(0);
            };
            setTimeout(function() {
                show_alarm_module(false, "创建成功！", new_proj_flash);
            },500);

        }else{
            setTimeout(function() {
                show_alarm_module(true, "创建失败！" + result.msg, null);
            },500);
        }
	};
	JQ_get(request_head,map,new_proj_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "true"){
            show_alarm_module(false,"创建成功！");
            $('#newProjModal').modal('hide');
            clear_proj_detail_panel();
            proj_intialize(0);
        }else{
            show_alarm_module(true,"创建失败！"+result.msg);
        }
    });*/
}
function modify_proj(project){
	var body={

        ProjCode: project.ProjCode,
        ProjName:project.ProjName,
        ChargeMan:project.ChargeMan,
        Telephone:project.Telephone,
        Department:project.Department,
        Address:project.Address,
        ProStartTime:project.ProStartTime,
        Stage:project.Stage
	};
    var map={
        action:"ProjMod",
        type:"mod",
        body: body,
        user:usr.id
    };
	var modify_proj_callback = function(result){
		var ret = result.status;
        if(ret == "true"){
            $('#newProjModal').modal('hide');
            mod_proj_flash = function(){
                clear_proj_detail_panel();
                proj_intialize(0);};

            setTimeout(function() {
                show_alarm_module(false, "修改成功！", mod_proj_flash);
            },500);
        }else{
            setTimeout(function() {
                show_alarm_module(true, "修改失败！" + result.msg, null);
            },500);
        }
	};
	JQ_get(request_head,map,modify_proj_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "true"){
            show_alarm_module(false,"修改成功！");
            $('#newProjModal').modal('hide');
            clear_proj_detail_panel();
            proj_intialize(0);
        }else{
            show_alarm_module(true,"修改失败！"+result.msg);
        }
    });*/
}



function get_proj_point(ProjCode){
	var body={
	ProjCode: ProjCode
	};
    var map={
        action:"PointProj",
        type:"query",
        body: body,
        user:usr.id
    };
	var get_proj_point_callback = function(result){
		if(result.status == "false"){
            show_expiredModule();
            return;
        }
        project_selected_point = result.ret;
        //HYJ add for server slow;

        draw_proj_detail_point_table();
	};
	JQ_get(request_head,map,get_proj_point_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        project_selected_point = result.ret;
        //HYJ add for server slow;

        draw_proj_detail_point_table();
    });*/
}
function get_proj_key(ProjCode){
	var body={
		ProjCode: ProjCode
	};
    var map={
        action:"ProjKey",
        type:"query",
        body: body,
        user:usr.id
    };
	var get_proj_key_callback = function(result){
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        project_selected_key = result.ret;
        //HYJ add for server slow;
        draw_proj_detail_key_table();
	};
	JQ_get(request_head,map,get_proj_key_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        project_selected_key = result.ret;
        //HYJ add for server slow;
        draw_proj_detail_key_table();
    });*/
}
function proj_intialize(start) {
    project_initial = true;
    project_table = null;
    get_proj_table(start, table_row * 5);
    //window.setTimeout(draw_proj_table_head, wait_time_middle);
}
function draw_proj_table_head(){
    if(null === project_table)return;
    var page_number = Math.ceil((project_table.length)/table_row);

    $("#Proj_Page_control").empty();
    var txt = "<li>"+
        "<a href='#' id='proj_page_prev'>Prev</a>"+
        "</li>";
    var page_start_number = Math.ceil(project_start/table_row);
	var i;
    for( i=0;i<page_number;i++){
        txt=txt+ "<li>"+
            "<a href='#' id='proj_page_"+i+"'>"+(i+page_start_number+1)+"</a>"+
            "</li>";
    }
    txt=txt+"<li>"+
        "<a href='#' id='proj_page_next'>Next</a>"+
        "</li>";
    $("#Proj_Page_control").append(txt);
    table_head="<thead>"+
        "<tr>"+"<th>编号</th> <th>名称 </th> <th>责任人 </th> <th>电话 </th> <th>单位 </th>";
    table_head=table_head+"</tr></thread>";
	proj_page_click = function(){
		draw_proj_table($(this));
	};
    for( i=0;i<page_number;i++){
		/*
        $("#proj_page_"+i).on('click',function(){
            draw_proj_table($(this));
        });*/
		$("#proj_page_"+i).on('click',proj_page_click);
    }
    if(project_start<=0){
        $("#proj_page_prev").css("display","none");
    }else{
        $("#proj_page_prev").css("display","block");
        $("#proj_page_prev").on('click',function(){
            var new_start = project_start-(table_row*5);
            if(new_start<0) new_start =0;
            proj_intialize(new_start);
        });
    }

    if((project_start+(table_row*5))>=project_total){
        $("#proj_page_next").css("display","none");
    }else{
        $("#proj_page_next").css("display","block");
        $("#proj_page_next").on('click',function(){
            proj_intialize(project_start+(table_row*5));
        });
    }

    draw_proj_table($("#proj_page_0"));
}
function draw_proj_table(data){

    $("#Table_proj").empty();
    if(null === project_table) return;
    var sequence = (parseInt(data.html())-1)*table_row-project_start;
    var txt = table_head;
    txt = txt +"<tbody>";
	var i;
    for( i=0;i<table_row;i++){
        if((sequence+i)<project_table.length){
            if(0!==i%2){
                txt =txt+ "<tr class='success li_menu' id='proj_table_cell"+i+"' ProjCode='"+project_table[sequence+i].ProjCode+"'>";
            }else{ txt =txt+ "<tr class=' li_menu' id='proj_table_cell"+i+"' ProjCode='"+project_table[sequence+i].ProjCode+"'>";}
            txt = txt +"<td>" + project_table[sequence+i].ProjCode+"</td>"+"<td>" + project_table[sequence+i].ProjName+"</td>"+"<td>" + project_table[sequence+i].ChargeMan+"</td>"+"<td>" + project_table[sequence+i].Telephone+"</td>"+"<td>" + project_table[sequence+i].Department+"</td>";
            txt = txt +"</tr>";
        }else{
            if(0!==i%2){
                txt =txt+ "<tr class='success' id='proj_table_cell"+i+"' ProjCode='null'>";
            }else{ txt =txt+ "<tr  id='proj_table_cell"+i+"' ProjCode='null'>";}
            txt = txt +"<td>--</td>"+"<td>--</td>"+"<td>--</td>"+"<td>--</td>"+"<td>--</td>";
            txt = txt +"</tr>";
        }

    }
    txt = txt+"</tbody>";

    $("#Table_proj").append(txt);
	proj_table_cell_click = function(){
		if($(this).attr("ProjCode") !="null"){
			for(var i=0;i<project_table.length;i++){
				if($(this).attr("ProjCode") == project_table[i].ProjCode){
					project_selected =project_table[i];
					break;
				}
			}

			Initialize_proj_detail();
			touchcookie();
		}
	};
	for( i=0;i<table_row;i++){
		/*
        $("#proj_table_cell"+i).on('click',function(){
            if($(this).attr("ProjCode") !="null"){
                for(var i=0;i<project_table.length;i++){
                    if($(this).attr("ProjCode") == project_table[i].ProjCode){
                        project_selected =project_table[i];
                        break;
                    }
                }

                Initialize_proj_detail();
                touchcookie();
            }

        });*/
		$("#proj_table_cell"+i).on('click',proj_table_cell_click);
    }
    touchcookie();
}

function Initialize_proj_detail(){
    draw_proj_detail_panel();
    get_proj_point(project_selected.ProjCode);
    get_proj_key(project_selected.ProjCode);
    //window.setTimeout(draw_proj_detail_panel, wait_time_short);
}
function clear_proj_detail_panel(){
    project_selected = null;

    var txt = "<p></p><p></p>"+
        "<div class='col-md-6 col-sm-6 col-xs-12 column'>"+
        "<dl >"+
        "<dt >项目编号：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "<dt >负责人：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-6 col-sm-6 col-xs-12 column'>"+
        "<dl >"+
        "<dt>项目名称：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "<dt>电话：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-12 col-sm-12 col-xs-12 column'>"+
        "<dl >"+
        "<dt>单位：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "<dt>地址：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "<dt>创建日期：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "<dt>备注：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "</dl>"+
        "</div>";

    /*
    var txt = "<p></p><p></p>"+
        "<label style='min-width: 150px'>项目编号：</label><label style='min-width: 150px'>项目名称：</label>"+
        "<p></p>"+
        "<label style='min-width: 150px'>负责人：</label>"+"<p></p>"+"<label style='min-width: 150px'>电话：</label>"+
        "<p></p>"+
        "<label style='min-width: 300px'>单位：</label>"+
        "<p></p>"+
        "<label style='min-width: 300px'>地址：</label>"+
        "<p></p>"+
        "<label style='min-width: 150px'>开工日期：</label>"+
        "<p></p>"+
        "<label>备注：</label>";*/

    $("#Label_proj_detail").empty();
    $("#Label_proj_detail").append(txt);
    $("#Table_proj_point").empty();
    $("#Table_proj_key").empty();
}
function draw_proj_detail_panel(){
    $("#Label_proj_detail").empty();
    if(project_selected_point === null) return;

    var txt = "<p></p><p></p>"+
        "<div class='col-md-6 col-sm-6 col-xs-12 column'>"+
        "<dl >"+
        "<dt >项目编号：</dt><dd>"+project_selected.ProjCode+"</dd>"+
        "<dt >负责人：</dt><dd>"+project_selected.ChargeMan+"</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-6 col-sm-6 col-xs-12 column'>"+
        "<dl >"+
        "<dt>项目名称：</dt><dd>"+project_selected.ProjName+"</dd>"+
        "<dt>电话：</dt><dd>"+project_selected.Telephone+"</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-12 col-sm-12 col-xs-12 column'>"+
        "<dl >"+
        "<dt>单位：</dt><dd>"+project_selected.Department+"</dd>"+
        "<dt>地址：</dt><dd>"+project_selected.Address+"</dd>"+
        "<dt>创建日期：</dt><dd>"+project_selected.ProStartTime+"</dd>"+
        "<dt>备注：</dt><dd>"+project_selected.Stage+"</dd>"+
        "</dl>"+
        "</div>";
    /*
    var txt = "<p></p><p></p>"+
        "<label style='min-width: 150px'>项目编号："+project_selected.ProjCode+"</label><label style='min-width: 150px'>项目名称："+project_selected.ProjName+"</label>"+
        "<p></p>"+
        "<label style='min-width: 150px'>负责人："+project_selected.ChargeMan+"</label>"+"<p></p>"+"<label style='min-width: 150px'>电话："+project_selected.Telephone+"</label>"+
        "<p></p>"+
        "<label style='min-width: 300px'>单位："+project_selected.Department+"</label>"+
        "<p></p>"+
        "<label style='min-width: 300px'>地址："+project_selected.Address+"</label>"+
        "<p></p>"+
        "<label style='min-width: 150px'>开工日期："+project_selected.ProStartTime+"</label>"+
        "<p></p>"+
        "<label>备注："+project_selected.Stage+"</label>";*/
    $("#Label_proj_detail").append(txt);
}
function draw_proj_detail_point_table(){
    $("#Table_proj_point").empty();
    txt ="<thead> <tr> <th>站点清单 </th> </tr> </thead> <tbody >";
    if(project_selected_point === null) project_selected_point = [];
    for(var i=0;i<project_selected_point.length;i++){
        txt = txt + "<tr> <td>"+ project_selected_point[i].name+"</td> </tr>";
    }
    txt = txt+ "</tbody>";
    $("#Table_proj_point").append(txt);
}
function draw_proj_detail_key_table(){
    $("#Table_proj_key").empty();
    txt ="<thead> <tr> <th>钥匙名称 </th> <th>所有人 </th></tr> </thead> <tbody >";
    if(project_selected_key === null) project_selected_key = [];
    for(var i=0;i<project_selected_key.length;i++){
        var keyusername = project_selected_key[i].username;
        if(keyusername == "none")keyusername = "部门收管";
        txt = txt + "<tr id='"+project_selected_key[i].id+"' class='keyrow'> <td>"+ project_selected_key[i].name+"</td> <td>"+ keyusername+"</td></tr>";
    }
    txt = txt+ "</tbody>";
    $("#Table_proj_key").append(txt);
    $('.keyrow').on('click',function() {
        var keyid = $(this).attr("id");
        if(keyid!==undefined&&keyid!=="" ){
            get_key_auth_list(keyid);
        }
    });
}
function show_new_proj_module(){

    $("#newProjModalLabel").text("创建新项目");
    project_module_status = true;

    $("#ProjProjCode_Input").val("");
    $('#ProjProjCode_Input').attr("disabled",true);
    $("#ProjProjName_Input").val("");
    $("#ProjChargeMan_Input").val("");
    $("#ProjTelephone_Input").val("");
    $("#ProjDepartment_Input").val("");
    $("#ProjAddress_Input").val("");
    $("#ProjProStartTime_Input").val("");
    $("#ProjStage_Input").val("");
    $("#ProjProjCode_Input").attr("placeholder","项目号");
    $("#ProjProjName_Input").attr("placeholder","项目名称");
    $("#ProjChargeMan_Input").attr("placeholder","负责人姓名");
    $("#ProjTelephone_Input").attr("placeholder","联系电话");
    $("#ProjDepartment_Input").attr("placeholder","单位名称");
    $("#ProjAddress_Input").attr("placeholder","地址");
    $("#ProjProStartTime_Input").attr("placeholder","创建时间");


    modal_middle($('#newProjModal'));

    $('#newProjModal').modal('show');

}
function submit_new_proj_module(){
    var new_ProjProjCode = $("#ProjProjCode_Input").val();
    var new_ProjProjName = $("#ProjProjName_Input").val();
    var new_ProjChargeMan = $("#ProjChargeMan_Input").val();
    var new_ProjTelephone = $("#ProjTelephone_Input").val();
    var new_ProjDepartment = $("#ProjDepartment_Input").val();
    var new_ProjAddress = $("#ProjAddress_Input").val();
    var new_ProjProStartTime = $("#ProjProStartTime_Input").val();
    var new_ProjStage = $("#ProjStage_Input").val();
/*
    if(new_ProjProjCode === null || new_ProjProjCode === ""){
        $("#ProjProjCode_Input").attr("placeholder","项目号不能为空");
        $("#ProjProjCode_Input").focus();
        return;
    }*/
    if(new_ProjProjName === null || new_ProjProjName === ""){
        $("#ProjProjName_Input").attr("placeholder","项目名称不能为空");
        $("#ProjProjName_Input").focus();
        return;
    }
    if(new_ProjChargeMan === null || new_ProjChargeMan === ""){
        $("#ProjChargeMan_Input").attr("placeholder","负责人姓名不能为空");
        $("#ProjChargeMan_Input").focus();
        return;
    }
    if(new_ProjTelephone === null || new_ProjTelephone === ""){
        $("#ProjTelephone_Input").attr("placeholder","联系电话不能为空");
        $("#ProjTelephone_Input").focus();
        return;
    }
    if(new_ProjDepartment === null || new_ProjDepartment === ""){
        $("#ProjDepartment_Input").attr("placeholder","单位名称不能为空");
        $("#ProjDepartment_Input").focus();
        return;
    }
    if(new_ProjAddress === null || new_ProjAddress === ""){
        $("#ProjAddress_Input").attr("placeholder","地址不能为空");
        $("#ProjAddress_Input").focus();
        return;
    }
    if(new_ProjProStartTime === null || new_ProjProStartTime === ""){
        $("#ProjProStartTime_Input").attr("placeholder","创建时间不能为空");
        $("#ProjProStartTime_Input").focus();
        return;
    }

    var project = {
        ProjCode: new_ProjProjCode,
        ProjName:new_ProjProjName,
        ChargeMan:new_ProjChargeMan,
        Telephone:new_ProjTelephone,
        Department:new_ProjDepartment,
        Address:new_ProjAddress,
        ProStartTime:new_ProjProStartTime,
        Stage:new_ProjStage
    };
    new_proj(project);
}
function show_mod_proj_module(project){
    $("#newProjModalLabel").text("项目修改");
    project_module_status = false;
    //StatCode: (start+(i+1)),
    //StatName:"项目名"+(start+i),
    //ChargeMan:"用户"+(start+i),
    //Telephone:"139139"+(start+i),
    //Longitude:"121.0000",
    //Latitude:"31.0000",
    //Department:"单位"+(start+i),
    //Address:"地址"+(start+i),
    //Country:"区县"+(start+i),
    //Street:"街镇"+(start+i),
    //Square:"10000",
    //ProStartTime:"2016-01-01",
    //Stage:"备注"+(start+i)
    $("#ProjProjCode_Input").val(project.ProjCode);
    $('#ProjProjCode_Input').attr("disabled",true);
    $("#ProjProjName_Input").val(project.ProjName);
    $("#ProjChargeMan_Input").val(project.ChargeMan);
    $("#ProjTelephone_Input").val(project.Telephone);
    $("#ProjDepartment_Input").val(project.Department);
    $("#ProjAddress_Input").val(project.Address);
    $("#ProjProStartTime_Input").val(project.ProStartTime);
    $("#ProjStage_Input").val(project.Stage);
    $("#ProjProjCode_Input").attr("placeholder","项目号");
    $("#ProjProjName_Input").attr("placeholder","项目名称");
    $("#ProjChargeMan_Input").attr("placeholder","负责人姓名");
    $("#ProjTelephone_Input").attr("placeholder","联系电话");
    $("#ProjDepartment_Input").attr("placeholder","单位名称");
    $("#ProjAddress_Input").attr("placeholder","地址");
    $("#ProjProStartTime_Input").attr("placeholder","创建时间");

    modal_middle($('#newProjModal'));

    $('#newProjModal').modal('show');
}
function submit_mod_proj_module(){
    var new_ProjProjCode = $("#ProjProjCode_Input").val();
    var new_ProjProjName = $("#ProjProjName_Input").val();
    var new_ProjChargeMan = $("#ProjChargeMan_Input").val();
    var new_ProjTelephone = $("#ProjTelephone_Input").val();
    var new_ProjDepartment = $("#ProjDepartment_Input").val();
    var new_ProjAddress = $("#ProjAddress_Input").val();
    var new_ProjProStartTime = $("#ProjProStartTime_Input").val();
    var new_ProjStage = $("#ProjStage_Input").val();


    var project = {
        ProjCode: new_ProjProjCode,
        ProjName:new_ProjProjName,
        ChargeMan:new_ProjChargeMan,
        Telephone:new_ProjTelephone,
        Department:new_ProjDepartment,
        Address:new_ProjAddress,
        ProStartTime:new_ProjProStartTime,
        Stage:new_ProjStage
    };
    modify_proj(project);
}

/*
Parameter management view
 */
/*
function get_version_list(){
    var map={
        action:"GetVersionList",
		type:"query",
        user:usr.id
    };
    get_version_list_callback = function(result){
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        software_version_list = result.ret;
        //HYJ add for server slow, because this should waiting for 2 request, and It is ugly to add a 2 flag thread, so I add a timeout after 1 message is returned.
        window.setTimeout(draw_parameter_page, wait_time_middle);
    };
    JQ_get(request_head,map,get_version_list_callback);
}

function get_projdev_version(ProjCode){
	var body={
		ProjCode: ProjCode
	};
    var map={
        action:"GetProjDevVersion",
        type:"query",
        body: body,
        user:usr.id
    };
    var get_projdev_version_callback = function(result){
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        var projdev = result.ret;
        $("#duallistboxDevUpdate").empty();
        var txt = "";
        if(projdev === null) projdev = [];
        for(var i =0;i<projdev.length;i++){
            txt = "<option value='"+projdev[i].DevCode+"'";
            txt = txt +">"+projdev[i].DevCode+projdev[i].ProjName+projdev[i].version+"</option>";
            $("#duallistboxDevUpdate").append(txt);
        }
        $("#duallistboxDevUpdate").bootstrapDualListbox('refresh', true);
    };
    JQ_get(request_head,map,get_projdev_version_callback);

}
function update_version(){
    var update_list = get_update_dev_list();
    var update_version = $("#UpdateVersion_choice").val();
    if(update_list.length === 0){
        show_alarm_module(true,"没有选中的设备",null);
        return;
    }
	var body={
		list: update_list,
        version: update_version
	};
    var map={
        action:"UpdateDevVersion",
        type:"mod",
        body: body,
        user:usr.id   
    };
    var update_version_callback = function (result){
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        show_alarm_module(false,"设置成功，设备会在下个更新点更新",null);
    };
    JQ_get(request_head,map,update_version_callback);

}
function parameter_initialize(){
    parameter_initial = true;
    if(project_list === null)get_project_list();
    //get_version_list();
    //window.setTimeout(draw_parameter_page, wait_time_middle);

}
function draw_parameter_page(){
    $("#UpdateProj_choice").empty();
    $("#UpdateVersion_choice").empty();
    var txt = "";
	var i;
    if(project_list === null) project_list = [];
    for( i=0;i<project_list.length;i++){
        txt = txt +"<option value="+project_list[i].id+">"+project_list[i].name+"</option>";
    }
    $("#UpdateProj_choice").append(txt);
    txt = "";
    if(software_version_list === null) software_version_list = [];
    for( i=0;i<software_version_list.length;i++){
        txt = txt +"<option value="+software_version_list[i]+">"+software_version_list[i]+"</option>";
    }
    $("#UpdateVersion_choice").append(txt);
    $("#UpdateProj_choice").change(function (){
        get_projdev_version($("#UpdateProj_choice").val());
    });
    get_projdev_version($("#UpdateProj_choice").val());
}
function get_update_dev_list(){
    var update = [];//new Array();
    $('#duallistboxDevUpdate :selected').each(function(i, selected) {
        update.push($(selected).val());
    });
    return update;
}
*/
/*
 Monitor point view function part
 */


function get_point_table(start,length){
	var body={
        startseq: start,
        length:length,
        keyword: global_key_word
	};
    var map={
        action:"PointTable",
        type:"query",
        body: body,
        user:usr.id
    };
    var get_point_table_callback= function(result){
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        point_table = result.ret.pointtable;

        point_start = parseInt(result.ret.start);
        point_total = parseInt(result.ret.total);
        //HYJ add for server slow
        draw_point_table_head();
    };
    JQ_get(request_head,map,get_point_table_callback);
    /*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        point_table = result.ret;

        point_start = parseInt(result.start);
        point_total = parseInt(result.total);
        //HYJ add for server slow
        draw_point_table_head();
    });*/
}
function del_point(StatCode){
	var body={StatCode: StatCode};
    var map={
        action:"PointDel",
        type:"mod",
        body: body,
        user:usr.id
    };

    var del_point_callback=function(result){
        var ret = result.status;
        if(ret == "true"){
            del_point_flash = function(){
                clear_point_detail_panel();
                point_intialize(0);};

            setTimeout(function() {
                show_alarm_module(false, "删除成功！", del_point_flash);
            },500);
        }else{
            setTimeout(function() {
                show_alarm_module(true, "删除失败！" + result.msg, null);
            },500);
        }
    };
    JQ_get(request_head,map,del_point_callback);
    /*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "true"){
            show_alarm_module(false,"删除成功！");
            clear_point_detail_panel();
            point_intialize(0);
        }else{
            show_alarm_module(true,"删除失败！"+result.msg);
        }
    });*/
    $("#PointDelAlarm").modal('hide');

}
function new_point(point){
	var body={
		StatCode: point.StatCode,
        StatName:point.StatName,
        ProjCode: point.ProjCode,
        ChargeMan:point.ChargeMan,
        Telephone:point.Telephone,
        Longitude:point.Longitude,
        Latitude:point.Latitude,
        Department:point.Department,
        Address:point.Address,
        Country:point.Country,
        Street:point.Street,
        Square:point.Square,
        ProStartTime:point.ProStartTime,
        Stage:point.Stage
	};
    var map={
        action:"PointNew",
        type:"mod",
        body: body,
        user:usr.id
    };
    var new_point_callback=function(result){
        var ret = result.status;
        if(ret == "true"){
            $('#newPointModal').modal('hide');
            new_point_flash= function(){
                clear_point_detail_panel();
                point_intialize(0);};

            setTimeout(function() {
                show_alarm_module(false, "创建成功！", new_point_flash);
            },500);
        }else{
            setTimeout(function() {
                show_alarm_module(true, "创建失败！" + result.msg, null);
            },500);
        }
    };
    JQ_get(request_head,map,new_point_callback);
    /*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "true"){
            show_alarm_module(false,"创建成功！");
            $('#newPointModal').modal('hide');
            clear_point_detail_panel();
            point_intialize(0);
        }else{
            show_alarm_module(true,"创建失败！"+result.msg);
        }
    });*/
}
function modify_point(point){
	var body={
		StatCode: point.StatCode,
        StatName:point.StatName,
        ProjCode: point.ProjCode,
        ChargeMan:point.ChargeMan,
        Telephone:point.Telephone,
        Longitude:point.Longitude,
        Latitude:point.Latitude,
        Department:point.Department,
        Address:point.Address,
        Country:point.Country,
        Street:point.Street,
        Square:point.Square,
        ProStartTime:point.ProStartTime,
        Stage:point.Stage
	};
    var map={
        action:"PointMod",
        type:"mod",
        body: body,
        user:usr.id
    };
    var modify_point_callback = function(result){
        var ret = result.status;
        if(ret == "true"){
            $('#newPointModal').modal('hide');
            mod_point_flash = function(){
                clear_point_detail_panel();
                point_intialize(0);};

            setTimeout(function() {
                show_alarm_module(false, "修改成功！", mod_point_flash);
            },500);
        }else{
            setTimeout(function() {
                show_alarm_module(true, "修改失败！" + result.msg, null);
            },500);
        }
    };
    JQ_get(request_head,map,modify_point_callback);
    /*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "true"){
            show_alarm_module(false,"修改成功！");
            $('#newPointModal').modal('hide');
            clear_point_detail_panel();
            point_intialize(0);
        }else{
            show_alarm_module(true,"修改失败！"+result.msg);
        }
    });*/
}



function get_point_device(StatCode){
	var body={
		StatCode: StatCode
	};
    var map={
        action:"PointDev",
        type:"query",
        body: body,
        user:usr.id
    };
    var get_point_device_callback = function(result){
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        point_selected_device = result.ret;
        //HYJ add for server slow;
        draw_point_detail_panel();
    };
    JQ_get(request_head,map,get_point_device_callback);
    /*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        point_selected_device = result.ret;
        //HYJ add for server slow;
        draw_point_detail_panel();
    });*/
}
function get_point_picture(StatCode){
    var body={
        StatCode: StatCode
    };
    var map={
        action:"PointPicture",
        type:"query",
        body: body,
        user:usr.id
    };
    var get_point_device_callback = function(result){
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        point_selected_picture = result.ret;
        //HYJ add for server slow;
        draw_point_picture_panel();
    };
    JQ_get(request_head,map,get_point_device_callback);
    /*
     jQuery.get(request_head, map, function (data) {
     log(data);
     var result=JSON.parse(data);
     if(result.status == "false"){
     show_expiredModule();
     return;
     }
     point_selected_device = result.ret;
     //HYJ add for server slow;
     draw_point_detail_panel();
     });*/
}
function point_intialize(start) {
    point_initial = true;
    point_table = null;
    get_project_list();
    get_point_table(start, table_row * 5);
    //window.setTimeout(draw_point_table_head, wait_time_middle);
    clear_point_detail_panel();
}
function draw_point_table_head(){
    if(null === point_table)return;
    var page_number = Math.ceil((point_table.length)/table_row);

    $("#Point_Page_control").empty();
    var txt = "<li>"+
        "<a href='#' id='point_page_prev'>Prev</a>"+
        "</li>";
    var page_start_number = Math.ceil(point_start/table_row);
	var i;
    for( i=0;i<page_number;i++){
        txt=txt+ "<li>"+
            "<a href='#' id='point_page_"+i+"'>"+(i+page_start_number+1)+"</a>"+
            "</li>";
    }
    txt=txt+"<li>"+
        "<a href='#' id='point_page_next'>Next</a>"+
        "</li>";
    $("#Point_Page_control").append(txt);
    table_head="<thead>"+
        "<tr>"+"<th>编号</th> <th>名称 </th> <th>项目</th> <th>责任人 </th> <th>电话 </th> ";
    table_head=table_head+"</tr></thread>";


	point_page_click = function(){
		draw_point_table($(this));
	};
    for( i=0;i<page_number;i++){
		/*
        $("#point_page_"+i).on('click',function(){
            draw_point_table($(this));
        });*/
		$("#point_page_"+i).on('click',point_page_click);
    }
    if(point_start<=0){
        $("#point_page_prev").css("display","none");
    }else{
        $("#point_page_prev").css("display","block");
        $("#point_page_prev").on('click',function(){
            var new_start = point_start-(table_row*5);
            if(new_start<0) new_start =0;
            point_intialize(new_start);
        });
    }

    if((point_start+(table_row*5))>=point_total){
        $("#point_page_next").css("display","none");
    }else{
        $("#point_page_next").css("display","block");
        $("#point_page_next").on('click',function(){
            point_intialize(point_start+(table_row*5));
        });
    }

    draw_point_table($("#point_page_0"));
}
function draw_point_table(data){

    $("#Table_point").empty();
    if(null === point_table) return;
    var sequence = (parseInt(data.html())-1)*table_row-point_start;
    var txt = table_head;
    txt = txt +"<tbody>";
	var i;
    for( i=0;i<table_row;i++){
        if((sequence+i)<point_table.length){
            var projname ="";
            for(var j=0;j<project_list.length;j++){
                if(point_table[sequence+i].ProjCode == project_list[j].id){
                    projname = project_list[j].name;break;
                }
            }
            if(0!==i%2){
                txt =txt+ "<tr class='success li_menu' id='point_table_cell"+i+"' StatCode='"+point_table[sequence+i].StatCode+"'>";
            }else{ txt =txt+ "<tr class=' li_menu' id='point_table_cell"+i+"' StatCode='"+point_table[sequence+i].StatCode+"'>";}
            txt = txt +"<td>" + point_table[sequence+i].StatCode+"</td>"+
				"<td>" + point_table[sequence+i].StatName+"</td>"+
				"<td>" + projname+"</td>"+
				"<td>" + point_table[sequence+i].ChargeMan+"</td>"+
				"<td>" + point_table[sequence+i].Telephone+"</td>";

            txt = txt +"</tr>";
        }else{
            if(0!==i%2){
                txt =txt+ "<tr class='success' id='point_table_cell"+i+"' StatCode='null'>";
            }else{ txt =txt+ "<tr  id='point_table_cell"+i+"' StatCode='null'>";}
            txt = txt +"<td>--</td>"+
				"<td>--</td>"+
				"<td>--</td>"+
				"<td>--</td>"+
				"<td>--</td>"+"<td>--</td>";
            txt = txt +"</tr>";
        }

    }
    txt = txt+"</tbody>";

    $("#Table_point").append(txt);

	point_table_cell_click = function(){
		if($(this).attr("StatCode") !="null"){
			for(var i=0;i<point_table.length;i++){
				if($(this).attr("StatCode") == point_table[i].StatCode){
					point_selected =point_table[i];
					break;
				}
			}
			Initialize_point_detail();
			touchcookie();
		}
	};
    for( i=0;i<table_row;i++){
		/*
        $("#point_table_cell"+i).on('click',function(){
            if($(this).attr("StatCode") !="null"){
                for(var i=0;i<point_table.length;i++){
                    if($(this).attr("StatCode") == point_table[i].StatCode){
                        point_selected =point_table[i];
                        break;
                    }
                }
                Initialize_point_detail();
                touchcookie();
            }
        });*/
		$("#point_table_cell"+i).on('click',point_table_cell_click);
    }
    touchcookie();
}

function Initialize_point_detail(){
    get_point_device(point_selected.StatCode);
    get_point_picture(point_selected.StatCode);
    //window.setTimeout(draw_point_detail_panel, wait_time_short);
}
function clear_point_detail_panel(){
    point_selected = null;
    var txt = "<button class='btn btn-default' type='button' disabled = 'true'>已激活</button>"+"<p></p><p></p>"+
        "<div class='col-md-6 col-sm-6 col-xs-12 column'>"+
        "<dl >"+
        "<dt >站点编号：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "<dt >负责人：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        //"<dt >开工日期：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-6 col-sm-6 col-xs-12 column'>"+
        "<dl >"+
        "<dt>站点名称：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "<dt>电话：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        //"<dt >面积：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-12 col-sm-12 col-xs-12 column'>"+
        "<dl >"+
        "<dt>关联项目：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "<dt>单位：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-6 col-sm-6 col-xs-12 column'>"+
        "<dl >"+
        "<dt >经度：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "<dt >区县：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-6 col-sm-6 col-xs-12 column'>"+
        "<dl >"+
        "<dt>纬度：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "<dt>街镇：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-12 col-sm-12 col-xs-12 column'>"+
        "<dl >"+
        "<dt>地址：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "<dt>备注：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "</dl>"+
        "</div>";
    /*
    var txt = "<p></p><p></p>"+
        "<label style='min-width: 150px'>监测点编号：</label><label style='min-width: 150px'>监测点名称：</label>"+
        "<p></p>"+
        "<label style='min-width: 150px'>负责人：</label>"+"<label style='min-width: 150px'>电话：</label>"+
        "<p></p>"+
        "<label style='min-width: 300px'>关联项目：</label>"+
        "<p></p>"+
        "<label style='min-width: 150px'>经度：</label>"+"<p></p>"+"<label style='min-width: 150px'>纬度：</label>"+
        "<p></p>"+
        "<label style='min-width: 300px'>单位：</label>"+
        "<p></p>"+
        "<label style='min-width: 150px'>区县：</label>"+"<p></p>"+"<label style='min-width: 150px'>街镇：</label>"+
        "<p></p>"+
        "<label style='min-width: 300px'>地址：</label>"+
        "<p></p>"+
        "<label style='min-width: 150px'>面积：</label>"+"<p></p>"+"<label style='min-width: 150px'>开工日期：</label>"+
        "<p></p>"+
        "<label>备注：</label>";*/

    $("#Label_point_detail").empty();
    $("#Label_point_detail").append(txt);
    $("#Table_point_device").empty();
    $("#Table_point_picture").empty();
}
function draw_point_detail_panel(){
    $("#Label_point_detail").empty();
    if(point_selected_device === null) return;

    var projname ="";
    if(project_list === null) project_list = [];
    for(var j=0;j<project_list.length;j++){
        if(point_selected.ProjCode == project_list[j].id){
            projname = project_list[j].name;break;
        }
    }
    var txt = "<button class='btn btn-default' type='button' id='selectpointactivebutton' disabled = 'true'>查询中</button>"+"<p></p><p></p>"+
        "<div class='col-md-6 col-sm-6 col-xs-12 column'>"+
        "<dl >"+
        "<dt >站点编号：</dt><dd>"+point_selected.StatCode+"</dd>"+
        "<dt >负责人：</dt><dd>"+point_selected.ChargeMan+"</dd>"+
        //"<dt >开工日期：</dt><dd>"+point_selected.ProStartTime+"</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-6 col-sm-6 col-xs-12 column'>"+
        "<dl >"+
        "<dt>站点名称：</dt><dd>"+point_selected.StatName+"</dd>"+
        "<dt>电话：</dt><dd>"+point_selected.Telephone+"</dd>"+
        //"<dt >面积：</dt><dd>"+point_selected.Square+"</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-12 col-sm-12 col-xs-12 column'>"+
        "<dl >"+
        "<dt>关联项目：</dt><dd>"+projname+"</dd>"+
        "<dt>单位：</dt><dd>"+point_selected.Department+"</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-6 col-sm-6 col-xs-12 column'>"+
        "<dl >"+
        "<dt >经度：</dt><dd>"+point_selected.Longitude+"</dd>"+
        "<dt >区县：</dt><dd>"+point_selected.Country+"</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-6 col-sm-6 col-xs-12 column'>"+
        "<dl >"+
        "<dt>纬度：</dt><dd>"+point_selected.Latitude+"</dd>"+
        "<dt>街镇：</dt><dd>"+point_selected.Street+"</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-12 col-sm-12 col-xs-12 column'>"+
        "<dl >"+
        "<dt>地址：</dt><dd>"+point_selected.Address+"</dd>"+
        "<dt>备注：</dt><dd>"+point_selected.Stage+"</dd>"+
        "</dl>"+
        "</div>";
    /*
    var txt = "<p></p><p></p>"+
        "<label style='min-width: 150px'>监测点编号："+point_selected.StatCode+"</label><label style='min-width: 150px'>监测点名称："+point_selected.StatName+"</label>"+
        "<p></p>"+
        "<label style='min-width: 150px'>负责人："+point_selected.ChargeMan+"</label>"+"<p></p>"+"<label style='min-width: 150px'>电话："+point_selected.Telephone+"</label>"+
        "<p></p>"+
        "<label style='min-width: 300px'>关联项目："+projname+"</label>"+
        "<p></p>"+
        "<label style='min-width: 150px'>经度："+point_selected.Longitude+"</label>"+"<p></p>"+"<label style='min-width: 150px'>纬度："+point_selected.Latitude+"</label>"+
        "<p></p>"+
        "<label style='min-width: 300px'>单位："+point_selected.Department+"</label>"+
        "<p></p>"+
        "<label style='min-width: 150px'>区县："+point_selected.Country+"</label>"+"<p></p>"+"<label style='min-width: 150px'>街镇："+point_selected.Street+"</label>"+
        "<p></p>"+
        "<label style='min-width: 300px'>地址："+point_selected.Address+"</label>"+
        "<p></p>"+
        "<label style='min-width: 150px'>面积："+point_selected.Square+"</label>"+"<p></p>"+"<label style='min-width: 150px'>开工日期："+point_selected.ProStartTime+"</label>"+
        "<p></p>"+
        "<label>备注："+point_selected.Stage+"</label>";*/
    $("#Label_point_detail").append(txt);

    $("#Table_point_device").empty();
    txt ="<thead> <tr> <th>监控设备清单 </th> </tr> </thead> <tbody >";
    if(point_selected_device === null) point_selected_device = [];
    for(var i=0;i<point_selected_device.length;i++){
        txt = txt + "<tr> <td>"+ point_selected_device[i].name+"</td> </tr>";
    }
    txt = txt+ "</tbody>";
    $("#Table_point_device").append(txt);
    getselectedstationactived();
    $("#selectpointactivebutton").on('click',function(){
        $("#StationActiveConfirmModalContent").text("确定要激活站点："+point_selected.StatName+"?");
        modal_middle($('#StationActiveConfirm'));

        $('#StationActiveConfirm').modal('show');
    });

}

function draw_point_picture_panel(){

    $("#Table_point_picture").empty();
    txt ="<thead> <tr> <th>站点照片 </th> </tr> </thead> <tbody >";
    if(point_selected_picture === null) point_selected_picture = [];
    for(var i=0;i<point_selected_picture.length;i++){
        txt = txt + "<tr> <td class='pictd' picurl='"+point_selected_picture[i].url+"' >"+ point_selected_picture[i].name+"</td> </tr>";
    }
    txt = txt+ "</tbody>";
    $("#Table_point_picture").append(txt);
    $(".pictd").on('click',function(){
        console.log("http://"+window.location.host+"/"+$(this).attr("picurl"));
        //window.open("http://"+window.location.host+"/"+$(this).attr("picurl"),'监控照片',"height=240, width=320, top=0, left=400,toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
        window.open("http://"+window.location.host+"/"+show_image_url+"?image="+$(this).attr("picurl")+"#",'监控照片',"height=620, width=640, top=0, left=400,toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");

        //console.log("http://"+window.location.host+basic_address+$(this).attr("picurl"));
        //window.open("http://"+window.location.host+basic_address+$(this).attr("picurl"),'监控照片',"height=480, width=640, top=0, left=400,toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
    });

}
function show_new_point_module(){

    $("#newPointModalLabel").text("创建新站点");
    point_module_status = true;
    $("#PointLatitude_Input").attr("disabled",true);
    $("#PointLongitude_Input").attr("disabled",true);
    $("#PointStatCode_Input").val("");
    $('#PointStatCode_Input').attr("disabled",true);
    $("#PointStatName_Input").val("");
    $("#PointChargeMan_Input").val("");
    $("#PointTelephone_Input").val("");
    $("#PointLongitude_Input").val("");
    $("#PointLatitude_Input").val("");
    $("#PointDepartment_Input").val("");
    $("#PointAddress_Input").val("");
    $("#PointCountry_Input").val("");
    $("#PointStreet_Input").val("");
    //$("#PointSquare_Input").val("");
    //$("#PointProStartTime_Input").val("");
    $("#PointStage_Input").val("");
    $("#PointProjCode_choice").empty();
    $("#PointProjCode_choice").append(get_proj_option());

    $("#PointStatCode_Input").attr("placeholder","站点号");
    $("#PointStatName_Input").attr("placeholder","站点名称");
    $("#PointChargeMan_Input").attr("placeholder","负责人姓名");
    $("#PointTelephone_Input").attr("placeholder","联系电话");
    $("#PointLongitude_Input").attr("placeholder","经度");
    $("#PointLatitude_Input").attr("placeholder","纬度");
    $("#PointDepartment_Input").attr("placeholder","单位名称");
    $("#PointAddress_Input").attr("placeholder","地址");
    $("#PointCountry_Input").attr("placeholder","区县");
    $("#PointStreet_Input").attr("placeholder","街镇");
    //$("#PointSquare_Input").attr("placeholder","施工面积(平方米)");
    //$("#PointProStartTime_Input").attr("placeholder","开工时间");


    modal_middle($('#newPointModal'));

    $('#newPointModal').modal('show');

}
function submit_new_point_module(){
    var new_PointStatCode = $("#PointStatCode_Input").val();
    var new_PointStatName = $("#PointStatName_Input").val();
    var new_PointProjCode = $("#PointProjCode_choice").val();
    var new_PointChargeMan = $("#PointChargeMan_Input").val();
    var new_PointTelephone = $("#PointTelephone_Input").val();
    var new_PointLongitude = $("#PointLongitude_Input").val();
    var new_PointLatitude = $("#PointLatitude_Input").val();
    var new_PointDepartment = $("#PointDepartment_Input").val();
    var new_PointAddress = $("#PointAddress_Input").val();
    var new_PointCountry = $("#PointCountry_Input").val();
    var new_PointStreet = $("#PointStreet_Input").val();
    var new_PointSquare = "0";//$("#PointSquare_Input").val();
    var new_PointProStartTime = "1999-01-01";//$("#PointProStartTime_Input").val();
    var new_PointStage = $("#PointStage_Input").val();
/*
    if(new_PointStatCode === null || new_PointStatCode === ""){
        $("#PointStatCode_Input").attr("placeholder","站点号不能为空");
        $("#PointStatCode_Input").focus();
        return;
    }*/
    if(new_PointStatName === null || new_PointStatName === ""){
        $("#PointStatName_Input").attr("placeholder","站点名称不能为空");
        $("#PointStatName_Input").focus();
        return;
    }
    if(new_PointChargeMan === null || new_PointChargeMan === ""){
        $("#PointChargeMan_Input").attr("placeholder","负责人姓名不能为空");
        $("#PointChargeMan_Input").focus();
        return;
    }
    if(new_PointProjCode === null || new_PointProjCode === ""){
        $("#PointProjCode_choice").attr("placeholder","项目不能为空");
        $("#PointProjCode_choice").focus();
        return;
    }
    if(new_PointTelephone === null || new_PointTelephone === ""){
        $("#PointTelephone_Input").attr("placeholder","联系电话不能为空");
        $("#PointTelephone_Input").focus();
        return;
    }/*
    if(new_PointLongitude === null || new_PointLongitude === ""){
        $("#PointLongitude_Input").attr("placeholder","经度不能为空");
        $("#PointLongitude_Input").focus();
        return;
    }
    if(new_PointLatitude === null || new_PointLatitude === ""){
        $("#PointLatitude_Input").attr("placeholder","纬度不能为空");
        $("#PointLatitude_Input").focus();
        return;
    }*/
    if(new_PointDepartment === null || new_PointDepartment === ""){
        $("#PointDepartment_Input").attr("placeholder","单位名称不能为空");
        $("#PointDepartment_Input").focus();
        return;
    }
    if(new_PointAddress === null || new_PointAddress === ""){
        $("#PointAddress_Input").attr("placeholder","地址不能为空");
        $("#PointAddress_Input").focus();
        return;
    }
    if(new_PointCountry === null || new_PointCountry === ""){
        $("#PointCountry_Input").attr("placeholder","区县不能为空");
        $("#PointCountry_Input").focus();
        return;
    }
    if(new_PointStreet === null || new_PointStreet === ""){
        $("#PointStreet_Input").attr("placeholder","街镇不能为空");
        $("#PointStreet_Input").focus();
        return;
    }
    /*
    if(new_PointSquare === null || new_PointSquare === ""){
        $("#PointSquare_Input").attr("placeholder","施工面积不能为空");
        $("#PointSquare_Input").focus();
        return;
    }
    if(new_PointProStartTime === null || new_PointProStartTime === ""){
        $("#PointProStartTime_Input").attr("placeholder","开工时间不能为空");
        $("#PointProStartTime_Input").focus();
        return;
    }*/

    var point = {
        StatCode: new_PointStatCode,
        StatName:new_PointStatName,
        ProjCode:new_PointProjCode,
        ChargeMan:new_PointChargeMan,
        Telephone:new_PointTelephone,
        Longitude:new_PointLongitude,
        Latitude:new_PointLatitude,
        Department:new_PointDepartment,
        Address:new_PointAddress,
        Country:new_PointCountry,
        Street:new_PointStreet,
        Square:new_PointSquare,
        ProStartTime:new_PointProStartTime,
        Stage:new_PointStage
    };
    new_point(point);
}
function show_mod_point_module(point){
    $("#newPointModalLabel").text("站点修改");
    point_module_status = false;
    //StatCode: (start+(i+1)),
    //StatName:"项目名"+(start+i),
    //ChargeMan:"用户"+(start+i),
    //Telephone:"139139"+(start+i),
    //Longitude:"121.0000",
    //Latitude:"31.0000",
    //Department:"单位"+(start+i),
    //Address:"地址"+(start+i),
    //Country:"区县"+(start+i),
    //Street:"街镇"+(start+i),
    //Square:"10000",
    //ProStartTime:"2016-01-01",
    //Stage:"备注"+(start+i)

    $("#PointLatitude_Input").attr("disabled",false);
    $("#PointLongitude_Input").attr("disabled",false);
    $("#PointStatCode_Input").val(point.StatCode);
    $('#PointStatCode_Input').attr("disabled",true);
    $("#PointStatName_Input").val(point.StatName);
    $("#PointChargeMan_Input").val(point.ChargeMan);
    $("#PointTelephone_Input").val(point.Telephone);
    $("#PointLongitude_Input").val(point.Longitude);
    $("#PointLatitude_Input").val(point.Latitude);
    $("#PointDepartment_Input").val(point.Department);
    $("#PointAddress_Input").val(point.Address);
    $("#PointCountry_Input").val(point.Country);
    $("#PointStreet_Input").val(point.Street);
    $("#PointSquare_Input").val(point.Square);
    //$("#PointProStartTime_Input").val(point.ProStartTime);
    //$("#PointStage_Input").val(point.Stage);
    $("#PointProjCode_choice").empty();
    $("#PointProjCode_choice").append(get_proj_option());
    $("#PointProjCode_choice").val(point.ProjCode);
    $("#PointStatCode_Input").attr("placeholder","站点号");
    $("#PointStatName_Input").attr("placeholder","站点名称");
    $("#PointChargeMan_Input").attr("placeholder","负责人姓名");
    $("#PointTelephone_Input").attr("placeholder","联系电话");
    $("#PointLongitude_Input").attr("placeholder","经度");
    $("#PointLatitude_Input").attr("placeholder","纬度");
    $("#PointDepartment_Input").attr("placeholder","单位名称");
    $("#PointAddress_Input").attr("placeholder","地址");
    $("#PointCountry_Input").attr("placeholder","区县");
    $("#PointStreet_Input").attr("placeholder","街镇");
    //$("#PointSquare_Input").attr("placeholder","施工面积(平方米)");
    //$("#PointProStartTime_Input").attr("placeholder","开工时间");

    modal_middle($('#newPointModal'));

    $('#newPointModal').modal('show');
}
function submit_mod_point_module(){
    var new_PointStatCode = $("#PointStatCode_Input").val();
    var new_PointStatName = $("#PointStatName_Input").val();
    var new_PointProjCode = $("#PointProjCode_choice").val();
    var new_PointChargeMan = $("#PointChargeMan_Input").val();
    var new_PointTelephone = $("#PointTelephone_Input").val();
    var new_PointLongitude = $("#PointLongitude_Input").val();
    var new_PointLatitude = $("#PointLatitude_Input").val();
    var new_PointDepartment = $("#PointDepartment_Input").val();
    var new_PointAddress = $("#PointAddress_Input").val();
    var new_PointCountry = $("#PointCountry_Input").val();
    var new_PointStreet = $("#PointStreet_Input").val();
    var new_PointSquare ="0";//$("#PointSquare_Input").val();
    var new_PointProStartTime = "1999-01-01";//$("#PointProStartTime_Input").val();
    var new_PointStage = $("#PointStage_Input").val();


    var point = {
        StatCode: new_PointStatCode,
        StatName:new_PointStatName,
        ProjCode:new_PointProjCode,
        ChargeMan:new_PointChargeMan,
        Telephone:new_PointTelephone,
        Longitude:new_PointLongitude,
        Latitude:new_PointLatitude,
        Department:new_PointDepartment,
        Address:new_PointAddress,
        Country:new_PointCountry,
        Street:new_PointStreet,
        Square:new_PointSquare,
        ProStartTime:new_PointProStartTime,
        Stage:new_PointStage
    };
    modify_point(point);
}

//设备编号 DevCode
//监测点编号 StatCode
//安装时间 StartTime
//预计结束时间 PreEndTime
//实际结束时间 EndTime
//设备是否启动 DevStatus
//视频地址 VideoURL


/*
 Device view function part
 */

function get_proj_point_list(){
    var map={
        action:"ProjPoint",
		type:"query",
        user:usr.id
    };
	var get_proj_point_list_callback = function(result){
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        point_list = result.ret;
	};
	JQ_get(request_head,map,get_proj_point_list_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        point_list = result.ret;

    });*/
}
function get_dev_table(start,length){
	var body={
        startseq: start,
        length:length,
        keyword: global_key_word
	};
    var map={
        action:"DevTable",
		body:body,
        type:"query",
        user:usr.id
    };
	var get_dev_table_callback = function(result){
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        device_table = result.ret.devtable;

        device_start = parseInt(result.ret.start);
        device_total = parseInt(result.ret.total);

        //HYJ add for server slow, this will wait 3 message return.
        window.setTimeout(draw_dev_table_head, wait_time_middle);
	};
	JQ_get(request_head,map,get_dev_table_callback);
/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        device_table = result.ret;

        device_start = parseInt(result.start);
        device_total = parseInt(result.total);

        //HYJ add for server slow, this will wait 3 message return.
        window.setTimeout(draw_dev_table_head, wait_time_middle);
    });*/
}
function del_dev(DevCode){
	var body={
		DevCode: DevCode
	};
    var map={
        action:"DevDel",
        type:"mod",
        body: body,
        user:usr.id
    };
	var del_dev_callback = function(result){
        var ret = result.status;
        if(ret == "true"){
            del_dev_flash = function(){
                clear_dev_detail_panel();
                dev_intialize(0);};

            setTimeout(function() {
                show_alarm_module(false, "删除成功！", del_dev_flash);
            },500);
        }else{

            setTimeout(function() {
                show_alarm_module(true, "删除失败！" + result.msg, null);
            },500);
        }
	};
	JQ_get(request_head,map,del_dev_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "true"){
            show_alarm_module(false,"删除成功！");
            clear_dev_detail_panel();
            dev_intialize(0);
        }else{
            show_alarm_module(true,"删除失败！"+result.msg);
        }
    });*/
    $("#DevDelAlarm").modal('hide');

}
function new_dev(device){
	var body={
		DevCode: device.DevCode,
        StatCode:device.StatCode,
        StartTime:device.StartTime,
        PreEndTime:device.PreEndTime,
        EndTime:device.EndTime,
        DevStatus:device.DevStatus,
        VideoURL:device.VideoURL
	};
    var map={
        action:"DevNew",
        type:"mod",
        body: body,
        user:usr.id
    };
	var new_dev_callback = function(result){
        var ret = result.status;
        if(ret == "true"){
            $('#newDevModal').modal('hide');
            new_dev_flash = function(){
                clear_dev_detail_panel();
                dev_intialize(0);};

            setTimeout(function() {
                show_alarm_module(false, "创建成功！", new_dev_flash);
            },500);
        }else{
            setTimeout(function() {
                show_alarm_module(true, "创建失败！" + result.msg, null);
            },500);
        }
	};
	JQ_get(request_head,map,new_dev_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "true"){
            show_alarm_module(false,"创建成功！");
            $('#newDevModal').modal('hide');
            clear_dev_detail_panel();
            dev_intialize(0);
        }else{
            show_alarm_module(true,"创建失败！"+result.msg);
        }
    });*/
}
function modify_dev(device){
	var body={
		DevCode: device.DevCode,
        StatCode:device.StatCode,
        StartTime:device.StartTime,
        PreEndTime:device.PreEndTime,
        EndTime:device.EndTime,
        DevStatus:device.DevStatus,
        VideoURL:device.VideoURL
	};
    var map={
        action:"DevMod",
        type:"mod",
        body: body,
        user:usr.id
    };
	var modify_dev_callback = function(result){
        var ret = result.status;
        if(ret == "true"){
            $('#newDevModal').modal('hide');
            mod_dev_flash = function(){
                clear_dev_detail_panel();
                dev_intialize(0);};

            setTimeout(function() {
                show_alarm_module(false, "修改成功！", mod_dev_flash);
            },500);
        }else{

            setTimeout(function() {
                show_alarm_module(true, "修改失败！" + result.msg, null);
            },500);
        }
	};
	JQ_get(request_head,map,modify_dev_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "true"){
            show_alarm_module(false,"修改成功！");
            $('#newDevModal').modal('hide');
            clear_dev_detail_panel();
            dev_intialize(0);
        }else{
            show_alarm_module(true,"修改失败！"+result.msg);
        }
    });*/
}



function dev_intialize(start) {
    device_initial = true;
    device_table = null;
    get_dev_table(start, table_row * 5);
    get_project_list();
    get_proj_point_list();
    //window.setTimeout(draw_dev_table_head, wait_time_middle);
    clear_dev_detail_panel();
}
function draw_dev_table_head(){
    if(null === device_table)return;
    var page_number = Math.ceil((device_table.length)/table_row);

    $("#Dev_Page_control").empty();
    var txt = "<li>"+
        "<a href='#' id='dev_page_prev'>Prev</a>"+
        "</li>";
    var page_start_number = Math.ceil(device_start/table_row);
	var i;
    for( i=0;i<page_number;i++){
        txt=txt+ "<li>"+
            "<a href='#' id='dev_page_"+i+"'>"+(i+page_start_number+1)+"</a>"+
            "</li>";
    }
    txt=txt+"<li>"+
        "<a href='#' id='dev_page_next'>Next</a>"+
        "</li>";
    $("#Dev_Page_control").append(txt);
    table_head="<thead>"+
        "<tr>"+"<th>编号 </th> <th>项目名称 </th> <th>站点名称 </th><th>安装时间 </th> <th>是否启动 </th>";
    table_head=table_head+"</tr></thread>";
	dev_page_click = function(){
		draw_dev_table($(this));
	};
    for( i=0;i<page_number;i++){
		/*
        $("#dev_page_"+i).on('click',function(){
            draw_dev_table($(this));
        });*/
		$("#dev_page_"+i).on('click',dev_page_click);
    }
    if(device_start<=0){
        $("#dev_page_prev").css("display","none");
    }else{
        $("#dev_page_prev").css("display","block");
        $("#dev_page_prev").on('click',function(){
            var new_start = device_start-(table_row*5);
            if(new_start<0) new_start =0;
            dev_intialize(new_start);
        });
    }

    if((device_start+(table_row*5))>=device_total){
        $("#dev_page_next").css("display","none");
    }else{
        $("#dev_page_next").css("display","block");
        $("#dev_page_next").on('click',function(){
            dev_intialize(device_start+(table_row*5));
        });
    }

    draw_dev_table($("#dev_page_0"));
}
function draw_dev_table(data){

    $("#Table_dev").empty();
    if(null === device_table) return;
    var sequence = (parseInt(data.html())-1)*table_row-device_start;
    var txt = table_head;
    txt = txt +"<tbody>";
	var i;
    for( i=0;i<table_row;i++){
        if((sequence+i)<device_table.length){
            //console.log(sequence+i);
            if(0!==i%2){
                txt =txt+ "<tr class='success li_menu' id='dev_table_cell"+i+"' DevCode='"+device_table[sequence+i].DevCode+"'>";
            }else{ txt =txt+ "<tr class=' li_menu' id='dev_table_cell"+i+"' DevCode='"+device_table[sequence+i].DevCode+"'>";}

            var type = "开启";
            if(device_table[sequence+i].DevStatus === "false") type = "关闭";
            txt = txt +"<td>" + device_table[sequence+i].DevCode+"</td>"+"<td>" + get_proj_name(device_table[sequence+i].ProjCode)+"</td>"+"<td>" + get_point_name(device_table[sequence+i].StatCode)+"</td>"+"<td>" + device_table[sequence+i].StartTime+"</td>"+"<td>" + type+"</td>";
            txt = txt +"</tr>";
        }else{
            if(0!==i%2){
                txt =txt+ "<tr class='success' id='dev_table_cell"+i+"' DevCode='null'>";
            }else{ txt =txt+ "<tr  id='dev_table_cell"+i+"' DevCode='null'>";}
            txt = txt +"<td>--</td>"+"<td>--</td>"+"<td>--</td>"+"<td>--</td>"+"<td>--</td>";
            txt = txt +"</tr>";
        }

    }
    txt = txt+"</tbody>";

    $("#Table_dev").append(txt);

	dev_table_cell_click = function(){
		if($(this).attr("DevCode") !="null"){
			for(var i=0;i<device_table.length;i++){
				if($(this).attr("DevCode") == device_table[i].DevCode){
					device_selected =device_table[i];
					break;
				}
			}

			Initialize_dev_detail();
			touchcookie();
		}
	};
    for( i=0;i<table_row;i++){
		/*
        $("#dev_table_cell"+i).on('click',function(){
            if($(this).attr("DevCode") !="null"){
                for(var i=0;i<device_table.length;i++){
                    if($(this).attr("DevCode") == device_table[i].DevCode){
                        device_selected =device_table[i];
                        break;
                    }
                }

                Initialize_dev_detail();
                touchcookie();
            }

        });*/
		$("#dev_table_cell"+i).on('click',dev_table_cell_click);
    }
    touchcookie();
}

function Initialize_dev_detail(){
    //get_dev_device(device_selected.StatCode);
    get_device_sensor(device_selected.DevCode);
    //window.setTimeout(draw_dev_detail_panel, wait_time_short);
}
function clear_dev_detail_panel(){
    project_selected = null;
    var txt = "<p></p><p></p>"+
        "<div class='col-md-12 col-sm-12 col-xs-12 column'>"+
        "<dl >"+
        "<dt>设备编号：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-6 col-sm-6 col-xs-12 column'>"+
        "<dl >"+
        "<dt >项目：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "<dt >安装时间：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "<dt >MAC地址：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        //"<dt >实际结束时间：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-6 col-sm-6 col-xs-12 column'>"+
        "<dl >"+
        "<dt>站点：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        //"<dt>预计结束时间：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "<dt >IP地址：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "<dt >设备是否启动：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-12 col-sm-12 col-xs-12 column'>"+
        "<dl >"+
        "<dt>视频地址：</dt><dd>&nbsp&nbsp&nbsp&nbsp</dd>"+
        "</dl>"+
        "</div>";
    /*
    var txt = "<p></p><p></p>"+
        "<label style='min-width: 150px'>设备编号：</label>"+
        "<p></p>"+
        "<label style='min-width: 150px'>项目：</label>"+
        "<label style='min-width: 150px'>监测点：</label>"+
        "<p></p>"+
        "<label style='min-width: 150px'>安装时间：</label>"+"<p></p>"+"<label style='min-width: 150px'>预计结束时间：</label>"+
        "<p></p>"+
        "<label style='min-width: 150px'>MAC地址：</label>"+"<p></p>"+"<label style='min-width: 150px'>IP地址：</label>"+
        "<p></p>"+
        "<label style='min-width: 150px'>实际结束时间：</label>"+"<p></p>"+"<label style='min-width: 150px'>设备是否启动：</label>"+
        "<p></p>"+
        "<label style='min-width: 300px'>视频地址：</label>";*/

    $("#Label_dev_detail").empty();
    $("#Label_dev_detail").append(txt);
    $("#Table_device_sensor").empty();
}
function draw_dev_detail_panel(){
    $("#Label_dev_detail").empty();
    if(device_selected_sensor === null) return;
    var type = "开启";
    if(device_selected.DevStatus === "false") type = "关闭";
    var txt = "<p></p><p></p>"+
        "<div class='col-md-12 col-sm-12 col-xs-12 column'>"+
        "<dl >"+
        "<dt>设备编号：</dt><dd>"+device_selected.DevCode+"</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-6 col-sm-6 col-xs-12 column'>"+
        "<dl >"+
        "<dt >项目：</dt><dd>"+get_proj_name(device_selected.ProjCode)+"</dd>"+
        "<dt >安装时间：</dt><dd>"+device_selected.StartTime+"</dd>"+
        "<dt >MAC地址：</dt><dd>"+device_selected.MAC+"</dd>"+
        //"<dt >实际结束时间：</dt><dd>"+device_selected.EndTime+"</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-6 col-sm-6 col-xs-12 column'>"+
        "<dl >"+
        "<dt>站点：</dt><dd>"+get_point_name(device_selected.StatCode)+"</dd>"+
        //"<dt>预计结束时间：</dt><dd>"+device_selected.PreEndTime+"</dd>"+
        "<dt >IP地址：</dt><dd>"+device_selected.IP+"</dd>"+
        "<dt >设备是否启动：</dt><dd>"+type+"</dd>"+
        "</dl>"+
        "</div>"+
        "<div class='col-md-12 col-sm-12 col-xs-12 column'>"+
        "<dl >"+
        "<dt>视频地址：</dt><dd>"+device_selected.VideoURL+"</dd>"+
        "</dl>"+
        "</div>";
    /*
    var txt = "<p></p><p></p>"+
        "<label style='min-width: 150px'>设备编号："+device_selected.DevCode+"</label>"+
        "<p></p>"+
        "<label style='min-width: 150px'>项目："+get_proj_name(device_selected.ProjCode)+"</label>"+"<label style='min-width: 150px'>监测点："+get_point_name(device_selected.StatCode)+"</label>"+
        "<p></p>"+
        "<label style='min-width: 150px'>安装时间："+device_selected.StartTime+"</label>"+"<p></p>"+"<label style='min-width: 150px'>预计结束时间："+device_selected.PreEndTime+"</label>"+
        "<p></p>"+
        "<label style='min-width: 150px'>MAC地址："+device_selected.MAC+"</label>"+"<p></p>"+"<label style='min-width: 150px'>IP地址："+device_selected.IP+"</label>"+
        "<p></p>"+
        "<label style='min-width: 150px'>实际结束时间："+device_selected.EndTime+"</label>"+"<p></p>"+"<label style='min-width: 150px'>设备是否启动："+type+"</label>"+
        "<p></p>"+
        "<label style='min-width: 300px'>视频地址："+device_selected.VideoURL+"</label>";*/
    $("#Label_dev_detail").append(txt);
    $("#Table_device_sensor").empty();
    txt ="<thead> <tr> <th>传感器 </th><th>状态 </th> </tr> </thead> <tbody >";
    var i;
    if(device_selected_sensor === null) device_selected_sensor = [];
	for( i=0;i<device_selected_sensor.length;i++){
        var temp = "开启";
        if(device_selected_sensor[i].status == "false") temp = "关闭";
        txt = txt + "<tr class=' li_menu' id='sensor_table_cell"+i+"' sequence='"+i+"'> <td>"+ get_sensor_name(device_selected_sensor[i].id)+"</td><td>"+temp+"</td> </tr>";
    }
    $("#Table_device_sensor").append(txt);
	sensor_table_cell_click= function(){
		if($(this).attr("sequence") !="null"){
			select_sensor = device_selected_sensor[parseInt($(this).attr("sequence") )];
			show_sensor_module();
		}
	};
    for( i=0;i<device_selected_sensor.length;i++){
		/*
        $("#sensor_table_cell"+i).on('click',function(){
            if($(this).attr("sequence") !="null"){
                select_sensor = device_selected_sensor[parseInt($(this).attr("sequence") )];
                show_sensor_module();
            }

        });*/
		$("#sensor_table_cell"+i).on('click',sensor_table_cell_click);
    }
}
function show_new_dev_module(){

    $("#newDevModalLabel").text("创建新设备");
    device_module_status = true;
    $('#DevDevCode_Input').attr("disabled",false);
    $("#DevDevCode_Input").val("");
    $("#DevStatCode_choice").empty();
    $("#DevProjCode_choice").empty();
    $("#DevProjCode_choice").append(get_proj_option());
    //console.log($("#DevProjCode_choice").val());
    get_proj_point_option($("#DevProjCode_choice").val(),$("#DevStatCode_choice"),"");
    $("#DevStartTime_Input").val("");
    //$("#DevPreEndTime_Input").val("");
    //$("#DevEndTime_Input").val("");
    $("#DevDevStatus_choice").val("true");
    $("#DevVideoURL_Input").val("");

    $("#DevDevCode_Input").attr("placeholder","设备编号");
    $("#DevStartTime_Input").attr("placeholder","安装时间");
   //$("#DevPreEndTime_Input").attr("placeholder","预计结束时间");
    //$("#DevEndTime_Input").attr("placeholder","实际结束时间");


    modal_middle($('#newDevModal'));

    $('#newDevModal').modal('show');

}
function submit_new_dev_module(){
    var new_DevDevCode = $("#DevDevCode_Input").val();
    var new_DevStatCode =$("#DevStatCode_choice").val();
    var new_DevStartTime =$("#DevStartTime_Input").val();
    var new_DevPreEndTime ="1999-01-01";//$("#DevPreEndTime_Input").val();
    var new_DevEndTime ="1999-01-01";//$("#DevEndTime_Input").val();
    var new_DevDevStatus =$("#DevDevStatus_choice").val();
    var new_DevVideoURL =$("#DevVideoURL_Input").val();

    if(new_DevDevCode === null || new_DevDevCode === ""){
        $("#DevDevCode_Input").attr("placeholder","设备号不能为空");
        $("#DevDevCode_Input").focus();
        return;
    }
    if(new_DevStatCode === null || new_DevStatCode === ""){
        $("#DevStatCode_choice").attr("placeholder","项目不能为空");
        $("#DevStatCode_choice").focus();
        return;
    }
    if(new_DevStartTime === null || new_DevStartTime === ""){
        $("#DevStartTime_Input").attr("placeholder","负责人姓名不能为空");
        $("#DevStartTime_Input").focus();
        return;
    }

    var device = {
        DevCode: new_DevDevCode,
        StatCode:new_DevStatCode,
        StartTime:new_DevStartTime,
        PreEndTime:new_DevPreEndTime,
        EndTime:new_DevEndTime,
        DevStatus:new_DevDevStatus,
        VideoURL:new_DevVideoURL
    };
    new_dev(device);
}
function show_mod_dev_module(device){
    $("#newDevModalLabel").text("设备修改");
    device_module_status = false;
    //设备编号 DevCode
    //监测点编号 StatCode
    //安装时间 StartTime
    //预计结束时间 PreEndTime
    //实际结束时间 EndTime
    //设备是否启动 DevStatus
    //视频地址 VideoURL
    $('#DevDevCode_Input').attr("disabled",true);
    $("#DevDevCode_Input").val(device.DevCode);
    $("#DevStatCode_choice").empty();
    $("#DevProjCode_choice").empty();

    $("#DevProjCode_choice").append(get_proj_option(device.ProjCode));
    //console.log($("#DevProjCode_choice").val());
    get_proj_point_option($("#DevProjCode_choice").val(),$("#DevStatCode_choice"),device.StatCode);

    $("#DevStatCode_choice").val(device.StatCode);
    $("#DevStartTime_Input").val(device.StartTime);
    //$("#DevPreEndTime_Input").val(device.PreEndTime);
    //$("#DevEndTime_Input").val(device.EndTime);
    if(device.DevStatus) $("#DevDevStatus_choice").val("true");
    else $("#DevDevStatus_choice").val("false");
    $("#DevVideoURL_Input").val(device.VideoURL);

    $("#DevDevCode_Input").attr("placeholder","设备编号");
    $("#DevStartTime_Input").attr("placeholder","安装时间");
    //$("#DevPreEndTime_Input").attr("placeholder","预计结束时间");
    //$("#DevEndTime_Input").attr("placeholder","实际结束时间");

    modal_middle($('#newDevModal'));

    $('#newDevModal').modal('show');
}
function submit_mod_dev_module(){
    var new_DevDevCode = $("#DevDevCode_Input").val();
    var new_DevStatCode =$("#DevStatCode_choice").val();
    var new_DevStartTime =$("#DevStartTime_Input").val();
    var new_DevPreEndTime ="1999-01-01";//$("#DevPreEndTime_Input").val();
    var new_DevEndTime ="1999-01-01";//$("#DevEndTime_Input").val();
    var new_DevDevStatus =$("#DevDevStatus_choice").val();
    var new_DevVideoURL =$("#DevVideoURL_Input").val();


    var device = {
        DevCode: new_DevDevCode,
        StatCode:new_DevStatCode,
        StartTime:new_DevStartTime,
        PreEndTime:new_DevPreEndTime,
        EndTime:new_DevEndTime,
        DevStatus:new_DevDevStatus,
        VideoURL:new_DevVideoURL
    };
    modify_dev(device);
}



function get_proj_name(id){
    var proj_name= null;
    if(project_list === null) project_list = [];
    for(var i=0;i<project_list.length;i++){
        if(project_list[i].id == id){
            proj_name = project_list[i].name;
            break;
        }
    }
    return proj_name;
}
function get_point_name(id){
    var point_name= null;
    if(point_list === null) point_list = [];
    for(var i=0;i<point_list.length;i++){
        if(point_list[i].id == id){
            point_name = point_list[i].name;
            break;
        }
    }
    return point_name;
}
function get_proj_option(id){
    txt = "";
    if(project_list === null) project_list = [];
    for( var i=0; i<project_list.length;i++){
        if(project_list[i].id == id){
            txt = txt +"<option value="+project_list[i].id+" selected='selected'>"+project_list[i].name+"</option>";
        }else{
            txt = txt +"<option value="+project_list[i].id+">"+project_list[i].name+"</option>";
        }
    }
    return txt;
}
function get_proj_point_option(ProjCode,select,select_value){
    select.empty();

    if(ProjCode ==="" || ProjCode === null){

        return;
    }
    var txt ="";
    if(point_list === null) point_list = [];
    for( var i=0; i<point_list.length;i++){
        if(point_list[i].ProjCode == ProjCode){

            if(point_list[i].id == select_value){
                txt = txt +"<option value="+point_list[i].id+" selected='selected' >"+point_list[i].name+"</option>";
            }else{

                txt = txt +"<option value="+point_list[i].id+">"+point_list[i].name+"</option>";
            }
        }
    }
    select.empty();
    select.append(txt);

}



//warning
function get_monitor_list(){
    var map={
        action:"MonitorList",
        type:"query",
        user:usr.id
    };
    //console.log(map);
	var get_monitor_list_callback = function(result){
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        monitor_map_list = result.ret;
	};
	JQ_get(request_head,map,get_monitor_list_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        monitor_map_list = result.ret;

        //console.log(monitor_map_list);
    });*/
}
function get_monitor_alarm_list(){
    var map={
        action:"MonitorAlarmList",
        type:"query",
        user:usr.id
    };
    //console.log(map);
    var get_monitor_list_callback = function(result){
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        alarm_map_list = result.ret;
    };
    JQ_get(request_head,map,get_monitor_list_callback);
    /*
     jQuery.get(request_head, map, function (data) {
     log(data);
     var result=JSON.parse(data);
     if(result.status == "false"){
     show_expiredModule();
     return;
     }
     monitor_map_list = result.ret;

     //console.log(monitor_map_list);
     });*/
}
function get_monitor_warning_on_map(){
    if(monitor_selected === null||monitor_map_handle===null){
        return;
    }else{
		var body={StatCode: monitor_selected.StatCode};
        var map={
            action:"DevAlarm",
            body:body,
            type:"query",
            user:usr.id
        };/*
		var get_monitor_warning_on_map_callback = function(result){
			if(result.status == "false"){
                show_expiredModule();
                return;
            }
            var ret = result.ret.alarmlist;
            var txt = "";
            if(ret == "false"){
                txt= "<Strong>获取告警失败</Strong>";
            }else{
                txt = "<div id ='Element_card_floating' align='center' ><p style='font-size:14px;font-weight: bold' >"+"站点名称："+monitor_selected.StatName+"</p>"+
                    "<HR style='FILTER: alpha(opacity=100,finishopacity=0,style=3)' width='80%' color=#987cb9 SIZE=3/>" +
                    "<div style='font-size:10px; min-height: 500px; min-width:420px' >" ;
                txt = txt + " <div class='col-md-6 column'>";
                for(var i=0;i<ret.length;i++){
                    var nickname = ret[i].AlarmEName;
                    txt = txt + "<img src='./svg/icon/"+ret[i].AlarmEName+".svg' style='width:36px;hight:36px'></img><label style='max-width: 150px;min-width: 150px'>&nbsp&nbsp&nbsp&nbsp"+ret[i].AlarmName+":";
                    var value = ret[i].AlarmValue;//parseInt(ret[i].AlarmValue);
                    var warning = ret[i].WarningTarget;

                    if(warning == "true"){
                        txt = txt +"<Strong style='color:red'>"+value+"</Strong>"+ret[i].AlarmUnit+"</label>";
                    }else{
                        txt = txt +"<Strong>"+value+"</Strong>"+ret[i].AlarmUnit+"</label>";
                    }
                    //txt = txt +"<p></p>";
                    txt = txt +"<HR style='FILTER: alpha(opacity=100,finishopacity=0,style=3)' width='80%' color=#987cb9 SIZE=3/>" ;
                    if(i==ret.length/2-1){
                        txt = txt +"</div><div class='col-md-6 column'>";
                    }
                }
                txt = txt+"</div></div>";
            }
            if(monitor_map_handle!==null){
                monitor_map_handle.setContent(txt);

            }
            $("#VideoStatCode_Input").val(monitor_selected.StatName);
            video_selection_change();
		};*/
        var get_monitor_warning_on_map_callback = function(result){
            if(result.status == "false"){
                show_expiredModule();
                return;
            }
            var ret = result.ret.alarmlist;
            var txt = "";
            if(ret == "false"){
                txt= "<Strong>获取告警失败</Strong>";
            }else{
                txt = "<div id ='Element_card_floating' align='center' ><p style='font-size:16px;font-weight: 800' >"+"站点名称："+monitor_selected.StatName+"</p>"+
                    "<HR style='FILTER: alpha(opacity=100,finishopacity=0,style=3)' width='80%' color=#987cb9 SIZE=3/>" +
                    "<div style='font-size:10px; min-height: 500px; min-width:480px' >" ;
                txt = txt + " <div class='col-md-6 column'>";
                for(var i=0;i<ret.length;i++){
                    var nickname = ret[i].AlarmEName;
                    txt = txt + "<img src='./svg/icon/"+ret[i].AlarmEName+".svg' style='width:36px;hight:36px'></img><label style='max-width: 150px;min-width: 150px;font-size: 14px'>&nbsp&nbsp&nbsp&nbsp"+ret[i].AlarmName+":";
                    var value = ret[i].AlarmValue;//parseInt(ret[i].AlarmValue);
                    var warning = ret[i].WarningTarget;

                    if(warning == "true"){
                        txt = txt +"<Strong style='color:red'>"+value+"</Strong>"+ret[i].AlarmUnit+"</label>";
                    }else{
                        txt = txt +"<Strong>"+value+"</Strong>"+ret[i].AlarmUnit+"</label>";
                    }
                    //txt = txt +"<p></p>";
                    txt = txt +"<HR style='FILTER: alpha(opacity=100,finishopacity=0,style=3)' width='80%' color=#987cb9 SIZE=3/>" ;
                    if(i==ret.length/2-1){
                        txt = txt +"</div><div class='col-md-6 column'>";
                    }
                }
                txt = txt+"</div></div>";
            }
            if(monitor_map_handle!==null){
                $("#infowindow").empty();
                $("#infowindow").append(txt);

            }
            $("#VideoStatCode_Input").val(monitor_selected.StatName);
            video_selection_change();
        };
		JQ_get(request_head,map,get_monitor_warning_on_map_callback);

    }

}
function monitor_lock(){
    var statcode = monitor_selected.StatCode;
    //console.log("StateCode_click="+statcode);
    if(statcode!==undefined ){

        show_openlockmodule(statcode);
    }
}
function initializeMap(){
    get_monitor_list();
    var basic_min_height = parseInt(($("#MPMonitorViewMap").css("min-height")).replace(/[^0-9]/ig,""));
    //console.log(window.screen.availHeight-275);
    if((window.screen.availHeight-275)>basic_min_height)basic_min_height =window.screen.availHeight-275;
    //console.log(basic_min_height);
    $("#MPMonitorViewMap").css("min-height",basic_min_height+"px");
    map_MPMonitor = new BMap.Map("MPMonitorViewMap");  // 创建点坐标
    map_MPMonitor.addControl(new BMap.NavigationControl());
    //map_MPMonitor.addControl(new BMap.ScaleControl());
    map_MPMonitor.enableScrollWheelZoom();


    /* I don't know why but if we do not put a mark here, other mark will not be displayed*/
    var markertest = new BMap.Marker(new BMap.Point(111.404, 40.915));
    map_MPMonitor.addOverlay(markertest);


    var main_lable = new BMap.Label("1234",{offset:new BMap.Size(-50,-50),                  //label的偏移量，为了让label的中心显示在点上
        position:new BMap.Point(111.404, 40.915)});                                //label的位置
    main_lable.setStyle({                                   //给label设置样式，任意的CSS都是可以的
        fontSize:"14px",               //字号
        border:"0",                    //边
        height:"100px",                //高度
        width:"100px",                 //宽
        textAlign:"center",            //文字水平居中显示
        lineHeight:"12px",            //行高，文字垂直居中显示
        background: "#000000",
        opacity: 0.75
    });
    markertest.addEventListener("click", function(){

        map_MPMonitor.addOverlay(main_lable);
    });
    map_MPMonitor.removeOverlay(markertest);
    /*End of I do not know why*/

    //map_MPMonitor.centerAndZoom(new BMap.Point(Longitude,Latitude),15);
    /*
    if(usr.city === "GPS"){
        if(Longitude === null){
            map_MPMonitor.centerAndZoom("beijing",15);
        }else{
            map_MPMonitor.centerAndZoom(new BMap.Point(Longitude,Latitude),15);
        }
    }else{
        map_MPMonitor.centerAndZoom(usr.city,15);
    }*/

    if(usr_faverate_list === null || usr_faverate_list.length===0){
        console.log("usr_faverate_list:"+usr_faverate_list);
        map_MPMonitor.centerAndZoom(new BMap.Point(parseFloat(user_point.Longitude),parseFloat(user_point.Latitude)),15);
    }else{
        map_MPMonitor.centerAndZoom(new BMap.Point(parseFloat(usr_faverate_list[0].Longitude),parseFloat(usr_faverate_list[0].Latitude)),15);
    }
    // hyj this will not be a problem because the bmap initialization will cost several seconds.
    window.setTimeout(addMarker, wait_time_long);
    
    //build_fast_guild();
    //addMarker();
    map_initialized=true;
    //$(window).resize();



}
function get_select_monitor(title){
    var temp = title.split(":");
    if(monitor_map_list === null) monitor_map_list = [];
    for(var i=0;i<monitor_map_list.length;i++){
        if(monitor_map_list[i].StatCode == temp[0]){
            monitor_selected = monitor_map_list[i];
            favorateCount(monitor_selected.StatCode);
            return;
        }
    }
    monitor_selected = null;
    return;
}

function addMarker(point){
    //test code for label





    // 创建图标对象
    if(monitor_map_list === null) return;
    var myIcon = new BMap.Icon("./image/map-marker-ball-azure-small.png", new BMap.Size(32, 32),{
        anchor: new BMap.Size(16, 30)
    });
    /*
	monitor_mark_click = function(){
		get_select_monitor(this.getTitle());
		//console.log("Selected:"+monitor_selected.StatName);
		var sContent = this.getTitle();
		var infoWindow = new BMap.InfoWindow(sContent,{offset:new BMap.Size(0,-23)});
		infoWindow.setWidth(600);
		monitor_map_handle = infoWindow;
		get_monitor_warning_on_map();
		this.openInfoWindow(infoWindow);
		infoWindow.addEventListener("close",function(){
			if(monitor_map_handle == this) monitor_map_handle = null;
		});
	};*/
    monitor_mark_click = function(){
        get_select_monitor(this.getTitle());
        //console.log("Selected:"+monitor_selected.StatName);
        var sContent = this.getTitle();
        if(monitor_map_handle !== null){
            map_MPMonitor.removeOverlay(monitor_map_handle);
            monitor_map_handle = null;
        }
        temp = "<div style='padding: 10px;min-width:150px'><div class='pull-left' style='margin-top:5px'><a class='maintext' style='font-size: 18px;font-weight:900'>状态监控</a></div><div class='pull-right' style='margin-top: -5px;margin-right: -7px'><a class='label_close_button' >[x]</a></div><div id='infowindow' style='margin-top: 40px;'>";
        //temp = "<div style='padding: 10px;min-width:150px'><div class='pull-right' style='margin-top: -5px;margin-right: -7px'><a class='label_close_button' >[x]</a></div><li id='infowindow' style='margin-top: 40px;'>";

        temp=temp+"</div></div>";
        var detail_label = new BMap.Label(temp,{offset:new BMap.Size(24,-32),                //label的偏移量，为了让label的中心显示在点上
            position:new BMap.Point(parseFloat(monitor_selected.Longitude),parseFloat(monitor_selected.Latitude))});                                //label的位置
        detail_label.setStyle({                                   //给label设置样式，任意的CSS都是可以的
            fontSize:"24px",               //字号
            border:"0",                 //宽
            textAlign:"left",            //文字水平居中显示
            lineHeight:"10px",            //行高，文字垂直居中显示
            background: "#ffffff",
            opacity: 0.9
        });


        monitor_map_handle = detail_label;
        get_monitor_warning_on_map();
        map_MPMonitor.addOverlay(detail_label);

        $(".label_close_button").on('click',function(){
            console.log("close button click");
            if(monitor_map_handle !== null){
                map_MPMonitor.removeOverlay(monitor_map_handle);
                monitor_map_handle = null;
            }
        });
    };
    if(monitor_map_list === null) monitor_map_list = [];
    console.log(monitor_map_list);
    for(var i=0;i<monitor_map_list.length;i++){
        //console.log(monitor_map_list[i].Longitude+";"+monitor_map_list[i].Latitude);
        //console.log(parseFloat(monitor_map_list[i].Longitude)+";"+parseFloat(monitor_map_list[i].Latitude));
        var t_point = new BMap.Point(parseFloat(monitor_map_list[i].Longitude),parseFloat(monitor_map_list[i].Latitude));
        var marker = new BMap.Marker(t_point, {icon: myIcon});
        //var marker = new BMap.Marker(t_point);//, {icon: myIcon});
        marker.setTitle(monitor_map_list[i].StatCode+":"+monitor_map_list[i].StatName);
        map_MPMonitor.addOverlay(marker);

		marker.addEventListener("click", monitor_mark_click);
        mark_MPMonitor_List.push(marker);

    }

}
function video_selection_change(){
    //console.log($("#Video_query_Input").val());
    if(monitor_selected!==null && $("#Video_query_Input").val()!==""){
        get_video(monitor_selected.StatCode,$("#Video_query_Input").val(),$("#VideoHour_choice").val());
    }
}
function get_video(StatCode,date,hour){
	var body={
		StatCode:StatCode,
        date:date,
        hour:hour
	};
    var map={
        action:"GetVideoList",
		body:body,
		type:"query",
		user:usr.id
    };
    //console.log(map);
	var get_video_callback = function(result){
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        var VideoList = result.ret;
        $("#VCRStatus_choice").empty();
        var txt="";
        for( var i=0;i<VideoList.length;i++){
            txt = txt +"<option value='"+VideoList[i].id+"'>"+VideoList[i].attr+"</option>";
        }
        $("#VCRStatus_choice").append(txt);
	};
	JQ_get(request_head,map,get_video_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        var VideoList = result.ret;
        $("#VCRStatus_choice").empty();
        var txt="";
        for( var i=0;i<VideoList.length;i++){
            txt = txt +"<option value='"+VideoList[i].id+"'>"+VideoList[i].attr+"</option>";
        }
        $("#VCRStatus_choice").append(txt);
        //console.log(monitor_map_list);
    });*/
}
function video_Module_selection_change(){
    //console.log($("#Video_query_Input").val());

    if($("#VideoModuleStatCode_Input").val()!=="" && $("#VideoModule_query_Input").val()!==""){
        get_Module_video($("#VideoModuleStatCode_Input").val(),$("#VideoModule_query_Input").val(),$("#VideoModuleHour_choice").val());
    }
}
function get_Module_video(StatCode,date,hour){
	var body={
		StatCode:StatCode,
        date:date,
        hour:hour
	};
    var map={
        action:"GetVideoList",
		body:body,
		type:"query",
		user:usr.id
    };
    //console.log(map);
	var get_Module_video_callback = function(result){
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        var VideoList = result.ret;
        $("#ModuleVCRStatus_choice").empty();
        var txt="";
        for( var i=0;i<VideoList.length;i++){
            txt = txt +"<option value='"+VideoList[i].id+"'>"+VideoList[i].attr+"</option>";
        }
        $("#ModuleVCRStatus_choice").append(txt);
	};
	JQ_get(request_head,map,get_Module_video_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        var VideoList = result.ret;
        $("#ModuleVCRStatus_choice").empty();
        var txt="";
        for( var i=0;i<VideoList.length;i++){
            txt = txt +"<option value='"+VideoList[i].id+"'>"+VideoList[i].attr+"</option>";
        }
        $("#ModuleVCRStatus_choice").append(txt);
        //console.log(monitor_map_list);
    });*/
}
//warning_table
function initialize_warning_table(){
    $("#Monitor_Page_control").empty();
    $("#Table_Monitor").empty();
    var txt = "<li>"+
        "<a href='#' id='monitor_page_prev'>Prev</a>"+
        "</li>";
    var page_number  = Math.ceil(monitor_map_list.length/(table_row*2));
    var i;
	for( i=0;i<page_number;i++){
        txt=txt+ "<li>"+
            "<a href='#' id='monitor_page_"+i+"' number='"+i+"'>"+(i+1)+"</a>"+
            "</li>";
    }
    txt=txt+"<li>"+
        "<a href='#' id='monitor_page_next'>Next</a>"+
        "</li>";
    $("#Monitor_Page_control").append(txt);
	Monitor_table_start=0;
	Monitor_table_total=page_number;
    //console.log(Monitor_table_start+"  "+Monitor_table_total);
	if(Monitor_table_start === 0){ $("#monitor_page_prev").css("display","none");}
	else {$("#monitor_page_prev").css("display","block");}
	if((Monitor_table_start+5 )>=Monitor_table_total) {$("#monitor_page_next").css("display","none");}
	else{$("#monitor_page_next").css("display","block");}
	for( i=0;i<page_number;i++){
		if(i<5) $("#monitor_page_"+i).css("display","block");
		else $("#monitor_page_"+i).css("display","none");
	}

	$("#monitor_page_next").on('click',function(){
		if((Monitor_table_start+5 )>=Monitor_table_total)  return;

		Monitor_table_start = Monitor_table_start+5;
		for(var i=0;i<Monitor_table_total;i++){
			$("#monitor_page_"+i).css("display","none");
			if(i>=Monitor_table_start && i<(Monitor_table_start+5)) $("#monitor_page_"+i).css("display","block");
		}
		if(Monitor_table_start === 0){ $("#monitor_page_prev").css("display","none");}
		else {$("#monitor_page_prev").css("display","block");}
		if((Monitor_table_start+5 )>=Monitor_table_total) {$("#monitor_page_next").css("display","none");}
		else{$("#monitor_page_next").css("display","block");}
		show_monitor_page(Monitor_table_start);
	});
	$("#monitor_page_prev").on('click',function(){
		if((Monitor_table_start )===0)  return;

		Monitor_table_start = Monitor_table_start-5;
		if(Monitor_table_start<0) Monitor_table_start =0;
		for(var i=0;i<Monitor_table_total;i++){
			$("#monitor_page_"+i).css("display","none");
			if(i>=Monitor_table_start && i<(Monitor_table_start+5)) $("#monitor_page_"+i).css("display","block");
		}
		if(Monitor_table_start === 0){ $("#monitor_page_prev").css("display","none");}
		else {$("#monitor_page_prev").css("display","block");}
		if((Monitor_table_start+5 )>=Monitor_table_total) {$("#monitor_page_next").css("display","none");}
		else{$("#monitor_page_next").css("display","block");}
		show_monitor_page(Monitor_table_start);
	});
	monitor_page_click = function(){
		show_monitor_page(parseInt($(this).attr("number")));
	};
	for( i=0;i<page_number;i++){
		/*
		$("#monitor_page_"+i).on('click',function(){
			show_monitor_page(parseInt($(this).attr("number")));
		});*/
		$("#monitor_page_"+i).on('click',monitor_page_click);

    }
    Monitor_table_initialized = true;
	show_monitor_page(0);

}
function show_monitor_page(page_number){
	$("#Table_Monitor").empty();
    table_head="<thead>"+
        "<tr>"+"<th>站点名称 </th> <th>监控信息 </th></tr></thread>";
	var txt = table_head;
    txt = txt +"<tbody>";

    sequence = (page_number*table_row*2);
    if(monitor_map_list === null) monitor_map_list = [];
    for(var i=0;i<(table_row*2);i++){
        if((sequence+i)<monitor_map_list.length){
            //console.log(sequence+i);
            if(0!==i%2){
                txt =txt+ "<tr class='success' >";
            }else{ txt =txt+ "<tr >";}

            txt = txt +"<td>" + monitor_map_list[sequence+i].StatName+"</td>"+"<td id='Monitor_table_cell"+i+"' StatCode='"+monitor_map_list[sequence+i].StatCode+"'></td>";
            txt = txt +"</tr>";
        }else{
            if(0!==i%2){
                txt =txt+ "<tr class='success'>";
            }else{ txt =txt+ "<tr  >";}
            txt = txt +"<td>--</td>"+"<td id='Monitor_table_cell"+i+"' DevCode='null'>--</td>";
            txt = txt +"</tr>";
        }

    }
    txt = txt+"</tbody>";
	$("#Table_Monitor").append(txt);
    query_warning();
}
function build_monitor_message(alarmlist){
	var txt = "";
	
	if(alarmlist === null || alarmlist ===undefined) return txt;
	for(var i=0;i<alarmlist.length;i++){
		txt = txt + alarmlist[i].AlarmName+":";
		if(alarmlist[i].WarningTarget == "true") {txt = txt + "<Strong style='color:red'>";}
		txt = txt + alarmlist[i].AlarmValue+" ";
		if(alarmlist[i].WarningTarget == "true") {txt = txt + "</Strong>";}
		txt = txt + alarmlist[i].AlarmUnit+";";
	}
	return txt;
}
function query_warning(){
    if(Monitor_table_initialized !== true) return;
	ajax_process = function(i){
		var body={StatCode: $("#Monitor_table_cell"+i).attr('StatCode')};
		var map={
            action:"DevAlarm",
            body:body,
			type:"query",
			user:usr.id
        };
		var query_warning_callback = function(result){
			var txt = "";
			var StatCode = result.ret.StatCode;
            if(result.status == "false"){
                txt = "<Strong style='color:red'>未找到对应监控信息</Strong>";
            }else{
				txt = build_monitor_message(result.ret.alarmlist);
			}
			for(var i=0;i<(table_row*2);i++){
				if($("#Monitor_table_cell"+i).attr('StatCode') == StatCode){
                    $("#Monitor_table_cell"+i).empty();
					$("#Monitor_table_cell"+i).append(txt);
					break;
				}
			}
		};
		JQ_get(request_head,map,query_warning_callback);
		/*
        jQuery.get(request_head, map, function (data) {
            log(data);
            var result=JSON.parse(data);
			var txt = "";
			var StatCode = result.StatCode;
            if(result.status == "false"){
                txt = "<Strong style='color:red'>未找到对应监控信息</Strong>";
            }else{
				txt = build_monitor_message(result.ret);
			}
			for(var i=0;i<(table_row*2);i++){
				if($("#Monitor_table_cell"+i).attr('StatCode') == StatCode){
                    $("#Monitor_table_cell"+i).empty();
					$("#Monitor_table_cell"+i).append(txt);
					break;
				}
			}
            
        });*/
	};
	for(var i=0;i<(table_row*2);i++){
		if($("#Monitor_table_cell"+i).attr('StatCode') === null) break;
		ajax_process(i);
		/*
		var map={
            action:"DevAlarm",
            StatCode: $("#Monitor_table_cell"+i).attr('StatCode')
        };
		
        jQuery.get(request_head, map, function (data) {
            log(data);
            var result=JSON.parse(data);
			var txt = "";
			var StatCode = result.StatCode;
            if(result.status == "false"){
                txt = "<Strong style='color:red'>未找到对应监控信息</Strong>";
            }else{
				txt = build_monitor_message(result.ret);
			}
			for(var i=0;i<(table_row*2);i++){
				if($("#Monitor_table_cell"+i).attr('StatCode') == StatCode){
                    $("#Monitor_table_cell"+i).empty();
					$("#Monitor_table_cell"+i).append(txt);
					break;
				}
			}
            
        });*/
		
	}
}

function query_static_warning(){
    if(Monitor_Static_table_initialized !== true) return;
    var map={
        action:"GetStaticMonitorTable",
		type:"query",
		user:usr.id
    };
    var GetStaticMonitorTable_callback= function(result){
        //log(data);
        //var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        var Last_update_date=(new Date()).Format("yyyy-MM-dd_hhmmss");
        $("#MonitorFlashTime").empty();
        $("#MonitorFlashTime").append("最后刷新时间："+Last_update_date);
        var ColumnName = result.ret.ColumnName;
        var TableData = result.ret.TableData;
        var txt = "<thead> <tr><th></th><th></th>";
        var i;
        for( i=0;i<ColumnName.length;i++){
            txt = txt +"<th>"+ColumnName[i]+"</th>";
        }
        //txt = txt +"<th></th></tr></thead>";
        txt = txt +"</tr></thead>";
        txt = txt +"<tbody>";
        for( i=0;i<TableData.length;i++){
            txt = txt +"<tr>";
            //txt = txt +"<td><ul class='pagination'> <li><a href='#' class = 'video_btn' StateCode='"+TableData[i][0]+"' ><em class='glyphicon glyphicon-play ' aria-hidden='true' ></em></a> </li></ul></td>";
            txt = txt +"<td><button type='button' class='btn btn-default lock_btn' StateCode='"+TableData[i][0]+"' ><em class='glyphicon glyphicon-lock ' aria-hidden='true' ></em></button></td>" +
                //"<td><button type='button' class='btn btn-default video_btn' StateCode='"+TableData[i][0]+"' ><em class='glyphicon glyphicon-play ' aria-hidden='true' ></em></button>" +
                "</td><td><button type='button' class='btn btn-default map_btn' StateCode='"+TableData[i][0]+"' StateName='"+TableData[i][1]+"' ><em class='glyphicon glyphicon-globe ' aria-hidden='true' ></em></button>" +

                "</td>";
            //console.log("StateCode="+TableData[i][0]);
            for(var j=0;j<TableData[i].length;j++){
                txt = txt +"<td>"+TableData[i][j]+"</td>";
            }
            //txt = txt + "<td><button type='button' class='btn btn-default video_btn' StateCode='"+TableData[i][0]+"' >视频</button></td>";
            txt = txt +"</tr>";
        }
        txt = txt+"</tbody>";
        $("#MonitorQueryTable").empty();
        $("#MonitorQueryTable").append(txt);
        if(if_static_table_initialize) $("#MonitorQueryTable").DataTable().destroy();

        //console.log(monitor_map_list);

        var show_table  = $("#MonitorQueryTable").DataTable( {
            //dom: 'T<"clear">lfrtip',
            "scrollY": false,
            "scrollCollapse": true,

            "scrollX": true,
            "searching": false,
            "autoWidth": true,
            "lengthChange":false,
            //bSort: false,
            //aoColumns: [ { sWidth: "45%" }, { sWidth: "45%" }, { sWidth: "10%", bSearchable: false, bSortable: false } ],
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'excel',
                    text: '导出到excel',
                    filename: "MonitorData"+Last_update_date
                }
            ]

        } );
        if_static_table_initialize = true;
        video_btn_click = function(){
            var statcode = $(this).attr('StateCode');
            //console.log("StateCode_click="+statcode);
            if(statcode!==undefined ){
                show_cameraModule(statcode);
            }
        };
        lock_btn_click = function(){
            var statcode = $(this).attr('StateCode');
            //console.log("StateCode_click="+statcode);
            if(statcode!==undefined ){
                show_openlockmodule(statcode);
            }
        };
        //$(".video_btn").on('click',video_btn_click);
        map_btn_click = function(){
            mp_monitor();
            var statcode = $(this).attr('StateCode');
            var statname = $(this).attr('StateName');

            var delayfunction = function(statcode,statname){
                if(statcode!==undefined && statname!==undefined ){

                    //console.log("Longitude_click="+fLongitude+"Latitude_click="+fLatitude);
                    //map_MPMonitor.centerAndZoom(new BMap.Point(fLongitude,fLatitude),15);
                    var title = statcode+":"+statname;
                    var marker = find_marker(title);
                    if(marker !== null) {
                        get_select_monitor(title);
                        //get_select_alarm2(title);
                        console.log("Selected:"+monitor_selected.StatName);
                        console.log("Selected:"+monitor_selected.Longitude);
                        console.log("Selected:"+monitor_selected.Latitude);
                        var fLongitude = monitor_selected.Longitude;
                        var fLatitude = monitor_selected.Latitude;
                        map_MPMonitor.centerAndZoom(new BMap.Point(fLongitude,fLatitude),15);
                        var sContent = statcode + ":" + statname;

                        var infoWindow = new BMap.InfoWindow(sContent, {offset: new BMap.Size(0, -23),width:600,height:300});
                        //infoWindow.setWidth(600);
                        monitor_map_handle = infoWindow;
                        get_monitor_warning_on_map();
                        //get_monitorpointinfo_on_map();
                        marker.openInfoWindow(infoWindow);
                        infoWindow.addEventListener("close", function () {
                            if (monitor_map_handle == this) monitor_map_handle = null;
                        });
                    }
                }
            };
            setTimeout(function(){delayfunction(statcode,statname);},500);


        };
        $(".lock_btn").on('click',lock_btn_click);
        $(".map_btn").on('click',map_btn_click);/*
        $("#MonitorQueryTable_paginate").on('click',function(){
            //$(".video_btn").on('click',video_btn_click);
            $(".lock_btn").on('click',lock_btn_click);
            $(".map_btn").on('click',map_btn_click);
        });*/

        $("#MonitorQueryTable").on('draw.dt',function(){
            //$(".video_btn").on('click',video_btn_click);
            $(".lock_btn").unbind();
            $(".map_btn").unbind();
            $(".lock_btn").on('click',lock_btn_click);
            $(".map_btn").on('click',map_btn_click);
        });
    };
    JQ_get(request_head,map,GetStaticMonitorTable_callback);
    /*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        var Last_update_date=(new Date()).Format("yyyy-MM-dd_hhmmss");
        $("#MonitorFlashTime").empty();
        $("#MonitorFlashTime").append("最后刷新时间："+Last_update_date);
        var ColumnName = result.ret.ColumnName;
        var TableData = result.ret.TableData;
        var txt = "<thead> <tr><th></th><th></th>";
		var i;
        for( i=0;i<ColumnName.length;i++){
            txt = txt +"<th>"+ColumnName[i]+"</th>";
        }
        //txt = txt +"<th></th></tr></thead>";
        txt = txt +"</tr></thead>";
        txt = txt +"<tbody>";
        for( i=0;i<TableData.length;i++){
            txt = txt +"<tr>";
            //txt = txt +"<td><ul class='pagination'> <li><a href='#' class = 'video_btn' StateCode='"+TableData[i][0]+"' ><em class='glyphicon glyphicon-play ' aria-hidden='true' ></em></a> </li></ul></td>";
            txt = txt +"<td><button type='button' class='btn btn-default lock_btn' StateCode='"+TableData[i][0]+"' ><em class='glyphicon glyphicon-lock ' aria-hidden='true' ></em></button></td><td><button type='button' class='btn btn-default video_btn' StateCode='"+TableData[i][0]+"' ><em class='glyphicon glyphicon-play ' aria-hidden='true' ></em></button></td>";
            //console.log("StateCode="+TableData[i][0]);
			for(var j=0;j<TableData[i].length;j++){
                txt = txt +"<td>"+TableData[i][j]+"</td>";
            }
            //txt = txt + "<td><button type='button' class='btn btn-default video_btn' StateCode='"+TableData[i][0]+"' >视频</button></td>";
            txt = txt +"</tr>";
        }
        txt = txt+"</tbody>";
        $("#MonitorQueryTable").empty();
        $("#MonitorQueryTable").append(txt);
        if(if_static_table_initialize) $("#MonitorQueryTable").DataTable().destroy();

        //console.log(monitor_map_list);

        var show_table  = $("#MonitorQueryTable").DataTable( {
            //dom: 'T<"clear">lfrtip',
            "scrollY": false,
            "scrollCollapse": true,

            "scrollX": true,
            "searching": false,
            "autoWidth": true,
            "lengthChange":false,
            //bSort: false,
            //aoColumns: [ { sWidth: "45%" }, { sWidth: "45%" }, { sWidth: "10%", bSearchable: false, bSortable: false } ],
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'excel',
                    text: '导出到excel',
                    filename: "MonitorData"+Last_update_date
                }
            ]

        } );
        if_static_table_initialize = true;
        video_btn_click = function(){
            var statcode = $(this).attr('StateCode');
            //console.log("StateCode_click="+statcode);
            if(statcode!==undefined ){
                show_cameraModule(statcode);
            }
        };
        lock_btn_click = function(){
            var statcode = $(this).attr('StateCode');
            //console.log("StateCode_click="+statcode);
            if(statcode!==undefined ){
                show_openlockmodule(statcode);
            }
        };
        $(".video_btn").on('click',video_btn_click);
        $(".lock_btn").on('click',lock_btn_click);

    });*/
}

function staff_query_static_warning(){
    if(Staff_Static_table_initialized !== true) return;
    var map={
        action:"GetStaticStaffTable",
        type:"query",
        user:usr.id
    };
    var GetStaticStaffTable_callback= function(result){
        //log(data);
        //var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        var Last_update_date=(new Date()).Format("yyyy-MM-dd_hhmmss");
        $("#StaffFlashTime").empty();
        $("#StaffFlashTime").append("最后刷新时间："+Last_update_date);
        var ColumnName = result.ret.ColumnName;
        var TableData = result.ret.TableData;
        var txt = "<thead> <tr><th></th><th></th>";
        var i;
        for( i=0;i<ColumnName.length;i++){
            txt = txt +"<th>"+ColumnName[i]+"</th>";
        }
        //txt = txt +"<th></th></tr></thead>";
        txt = txt +"</tr></thead>";
        txt = txt +"<tbody>";
        for( i=0;i<TableData.length;i++){
            txt = txt +"<tr>";
            //txt = txt +"<td><ul class='pagination'> <li><a href='#' class = 'video_btn' StateCode='"+TableData[i][0]+"' ><em class='glyphicon glyphicon-play ' aria-hidden='true' ></em></a> </li></ul></td>";
            txt = txt +"<td><button type='button' class='btn btn-default lock_btn' StateCode='"+TableData[i][0]+"' ><em class='glyphicon glyphicon-lock ' aria-hidden='true' ></em></button></td>" +
                    //"<td><button type='button' class='btn btn-default video_btn' StateCode='"+TableData[i][0]+"' ><em class='glyphicon glyphicon-play ' aria-hidden='true' ></em></button>" +
                "</td><td><button type='button' class='btn btn-default map_btn' StateCode='"+TableData[i][0]+"' StateName='"+TableData[i][1]+"' ><em class='glyphicon glyphicon-globe ' aria-hidden='true' ></em></button>" +

                "</td>";
            //console.log("StateCode="+TableData[i][0]);
            for(var j=0;j<TableData[i].length;j++){
                txt = txt +"<td>"+TableData[i][j]+"</td>";
            }
            //txt = txt + "<td><button type='button' class='btn btn-default video_btn' StateCode='"+TableData[i][0]+"' >视频</button></td>";
            txt = txt +"</tr>";
        }
        txt = txt+"</tbody>";
        $("#StaffQueryTable").empty();
        $("#StaffQueryTable").append(txt);
        if(if_static_table_initialize) $("#StaffQueryTable").DataTable().destroy();

        //console.log(monitor_map_list);

        var show_table  = $("#StaffQueryTable").DataTable( {
            //dom: 'T<"clear">lfrtip',
            "scrollY": false,
            "scrollCollapse": true,

            "scrollX": true,
            "searching": false,
            "autoWidth": true,
            "lengthChange":false,
            //bSort: false,
            //aoColumns: [ { sWidth: "45%" }, { sWidth: "45%" }, { sWidth: "10%", bSearchable: false, bSortable: false } ],
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'excel',
                    text: '导出到excel',
                    filename: "MonitorData"+Last_update_date
                }
            ]

        } );
        if_static_table_initialize = true;
        video_btn_click = function(){
        };
        lock_btn_click = function(){
        };
        //$(".video_btn").on('click',video_btn_click);
        map_btn_click = function(){


        };
        $(".lock_btn").on('click',lock_btn_click);
        $(".map_btn").on('click',map_btn_click);/*
         $("#MonitorQueryTable_paginate").on('click',function(){
         //$(".video_btn").on('click',video_btn_click);
         $(".lock_btn").on('click',lock_btn_click);
         $(".map_btn").on('click',map_btn_click);
         });*/

        $("#StaffQueryTable").on('draw.dt',function(){
            //$(".video_btn").on('click',video_btn_click);
            $(".lock_btn").unbind();
            $(".map_btn").unbind();
            $(".lock_btn").on('click',lock_btn_click);
            $(".map_btn").on('click',map_btn_click);
        });
    };
    JQ_get(request_head,map,GetStaticStaffTable_callback);

}



function export_table_initialize(){


}
function query_export_table(){
    var Query_table_name = $("#ExportTableSelect_choice").val();
    var Query_table_time = $("#ExportTableTime_choice").val();
    var Query_table_word = $("#ExportTableWord_Input").val();
    var condition = {
        TableName:Query_table_name,
        Time:Query_table_time,
        KeyWord:Query_table_word
    };
    var map={
        action:"ExportTable",
        body:condition,
        user:usr.id
    };
    var query_export_callback = function(result){
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        var Last_update_date=(new Date()).Format("yyyy-MM-dd_hhmmss");
        $("#ExportTableLastFlash").empty();
        $("#ExportTableLastFlash").append("最后刷新时间："+Last_update_date);
        var ColumnName = result.ret.ColumnName;
        var TableData = result.ret.TableData;
        //var txt = "<thead> <tr><th></th>";
        var txt = "<thead> <tr>";
        var i;
        for( i=0;i<ColumnName.length;i++){
            txt = txt +"<th>"+ColumnName[i]+"</th>";
        }
        //txt = txt +"<th></th></tr></thead>";
        txt = txt +"</tr></thead>";
        txt = txt +"<tbody>";
        for( i=0;i<TableData.length;i++){
            txt = txt +"<tr>";
            //txt = txt +"<td><button type='button' class='btn btn-default open_btn' OpenCode='"+TableData[i][0]+"' ><em class='glyphicon glyphicon-picture ' aria-hidden='true' ></em></button></td>";
            //txt = txt +"<td><ul class='pagination'> <li><a href='#' class = 'video_btn' StateCode='"+TableData[i][0]+"' ><em class='glyphicon glyphicon-play ' aria-hidden='true' ></em></a> </li></ul></td>";
            //txt = txt +"<td><button type='button' class='btn btn-default lock_btn' StateCode='"+TableData[i][0]+"' ><em class='glyphicon glyphicon-lock ' aria-hidden='true' ></em></button></td><td><button type='button' class='btn btn-default video_btn' StateCode='"+TableData[i][0]+"' ><em class='glyphicon glyphicon-play ' aria-hidden='true' ></em></button></td>";
            //console.log("StateCode="+TableData[i][0]);
            for(var j=0;j<TableData[i].length;j++){
                txt = txt +"<td>"+TableData[i][j]+"</td>";
            }
            //txt = txt + "<td><button type='button' class='btn btn-default video_btn' StateCode='"+TableData[i][0]+"' >视频</button></td>";
            txt = txt +"</tr>";
        }
        txt = txt+"</tbody>";
        $("#ExportTableQueryTable").empty();
        $("#ExportTableQueryTable").append(txt);
        if(if_Export_table_initialize) $("#ExportTableQueryTable").DataTable().destroy();

        //console.log(monitor_map_list);

        var show_table  = $("#ExportTableQueryTable").DataTable( {
            //dom: 'T<"clear">lfrtip',
            "scrollY": false,
            "scrollCollapse": true,

            "scrollX": true,
            "searching": false,
            "autoWidth": true,
            "lengthChange":false,
            //bSort: false,
            //aoColumns: [ { sWidth: "45%" }, { sWidth: "45%" }, { sWidth: "10%", bSearchable: false, bSortable: false } ],
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'excel',
                    text: '导出到excel',
                    filename: "HistoryData"+Last_update_date
                }
            ]

        } );
        /*
        Openpicture_btn_click = function(){
            var opencode = $(this).attr('OpenCode');
            //console.log("StateCode_click="+statcode);
            getopenpicture(opencode);

        };
        $(".open_btn").on('click',Openpicture_btn_click);*/
        /*
         $("#KeyHistoryQueryTable_paginate").on('click',function(){
         $(".open_btn").on('click',Openpicture_btn_click);
         });*/
        /*
        $("#ExportTableQueryTable").on('draw.dt',function(){
            $(".open_btn").unbind();
            $(".open_btn").on('click',Openpicture_btn_click);
        });*/
        if_Export_table_initialize = true;
    };
    JQ_get(request_head,map,query_export_callback);

}

//Open Lock History query
function build_key_history_proj_choice(){
    if(project_list === null) return;
    var txt ="";
    if(project_list === null) project_list = [];
    for( i=0;i<project_list.length;i++){
        txt = txt +"<option value="+project_list[i].id+">"+project_list[i].name+"</option>";
    }
    $("#KeyHistoryProj_choice").append(txt);
}
function key_history_initialize(){
    if(Key_History_table_initialized === false){
        if(project_list === null) {
            get_project_list();
            window.setTimeout(build_key_history_proj_choice, wait_time_long);
        }else{
            build_key_history_proj_choice();
        }
        Key_History_table_initialized = true;
    }


}
function attendance_history_initialize(){
        Attendance_History_table_initialized = true;



}
function query_open_lock_history(){
    if(Key_History_table_initialized !== true) return;
    var Query_project = $("#KeyHistoryProj_choice").val();
    var Query_time = $("#KeyHistoryTime_choice").val();
    var Query_word = $("#KeyHistoryWord_Input").val();
    var condition = {
        ProjCode:Query_project,
        Time:Query_time,
        KeyWord:Query_word
    };
    var map={
        action:"KeyHistory",
        body:condition,
        user:usr.id
    };
	var query_open_lock_history_callback = function(result){
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        var Last_update_date=(new Date()).Format("yyyy-MM-dd_hhmmss");
        $("#KeyHistoryLastFlash").empty();
        $("#KeyHistoryLastFlash").append("最后刷新时间："+Last_update_date);
        var ColumnName = result.ret.ColumnName;
        var TableData = result.ret.TableData;
        var txt = "<thead> <tr><th></th>";
        var i;
        for( i=0;i<ColumnName.length;i++){
            txt = txt +"<th>"+ColumnName[i]+"</th>";
        }
        //txt = txt +"<th></th></tr></thead>";
        txt = txt +"</tr></thead>";
        txt = txt +"<tbody>";
        for( i=0;i<TableData.length;i++){
            txt = txt +"<tr>";
            txt = txt +"<td><button type='button' class='btn btn-default open_btn' OpenCode='"+TableData[i][0]+"' ><em class='glyphicon glyphicon-picture ' aria-hidden='true' ></em></button></td>";
            //txt = txt +"<td><ul class='pagination'> <li><a href='#' class = 'video_btn' StateCode='"+TableData[i][0]+"' ><em class='glyphicon glyphicon-play ' aria-hidden='true' ></em></a> </li></ul></td>";
            //txt = txt +"<td><button type='button' class='btn btn-default lock_btn' StateCode='"+TableData[i][0]+"' ><em class='glyphicon glyphicon-lock ' aria-hidden='true' ></em></button></td><td><button type='button' class='btn btn-default video_btn' StateCode='"+TableData[i][0]+"' ><em class='glyphicon glyphicon-play ' aria-hidden='true' ></em></button></td>";
            //console.log("StateCode="+TableData[i][0]);
            for(var j=0;j<TableData[i].length;j++){
                txt = txt +"<td>"+TableData[i][j]+"</td>";
            }
            //txt = txt + "<td><button type='button' class='btn btn-default video_btn' StateCode='"+TableData[i][0]+"' >视频</button></td>";
            txt = txt +"</tr>";
        }
        txt = txt+"</tbody>";
        $("#KeyHistoryQueryTable").empty();
        $("#KeyHistoryQueryTable").append(txt);
        if(if_key_history_table_initialize) $("#KeyHistoryQueryTable").DataTable().destroy();

        //console.log(monitor_map_list);

        var show_table  = $("#KeyHistoryQueryTable").DataTable( {
            //dom: 'T<"clear">lfrtip',
            "scrollY": false,
            "scrollCollapse": true,

            "scrollX": true,
            "searching": false,
            "autoWidth": true,
            "lengthChange":false,
            //bSort: false,
            //aoColumns: [ { sWidth: "45%" }, { sWidth: "45%" }, { sWidth: "10%", bSearchable: false, bSortable: false } ],
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'excel',
                    text: '导出到excel',
                    filename: "HistoryData"+Last_update_date
                }
            ]

        } );
        Openpicture_btn_click = function(){
            var opencode = $(this).attr('OpenCode');
            //console.log("StateCode_click="+statcode);
            getopenpicture(opencode);

        };
        $(".open_btn").on('click',Openpicture_btn_click);
        /*
        $("#KeyHistoryQueryTable_paginate").on('click',function(){
            $(".open_btn").on('click',Openpicture_btn_click);
        });*/
        $("#KeyHistoryQueryTable").on('draw.dt',function(){
            $(".open_btn").unbind();
            $(".open_btn").on('click',Openpicture_btn_click);
        });
        if_key_history_table_initialize = true;
	};
	JQ_get(request_head,map,query_open_lock_history_callback);

}


function query_attendance_history(){
    if(Attendance_History_table_initialized !== true) return;
    var Query_time = $("#AttendanceHistoryTime_choice").val();
    var Query_word = $("#AttendanceHistoryWord_Input").val();
    var condition = {
        Time:Query_time,
        KeyWord:Query_word
    };
    var map={
        action:"AttendanceHistory",
        body:condition,
        user:usr.id
    };
    var query_attendance_history_callback = function(result){
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        var Last_update_date=(new Date()).Format("yyyy-MM-dd_hhmmss");
        $("#AttendanceHistoryLastFlash").empty();
        $("#AttendanceHistoryLastFlash").append("最后刷新时间："+Last_update_date);
        var ColumnName = result.ret.ColumnName;
        var TableData = result.ret.TableData;
        var txt = "<thead> <tr><th></th>";
        var i;
        for( i=0;i<ColumnName.length;i++){
            txt = txt +"<th>"+ColumnName[i]+"</th>";
        }
        //txt = txt +"<th></th></tr></thead>";
        txt = txt +"</tr></thead>";
        txt = txt +"<tbody>";
        for( i=0;i<TableData.length;i++){
            txt = txt +"<tr>";
            txt = txt +"<td><button type='button' class='btn btn-default open_btn' AttendanceCode='"+TableData[i][0]+"' ><em class='glyphicon glyphicon-trash ' aria-hidden='true' ></em></button></td>";
            //txt = txt +"<td><ul class='pagination'> <li><a href='#' class = 'video_btn' StateCode='"+TableData[i][0]+"' ><em class='glyphicon glyphicon-play ' aria-hidden='true' ></em></a> </li></ul></td>";
            //txt = txt +"<td><button type='button' class='btn btn-default lock_btn' StateCode='"+TableData[i][0]+"' ><em class='glyphicon glyphicon-lock ' aria-hidden='true' ></em></button></td><td><button type='button' class='btn btn-default video_btn' StateCode='"+TableData[i][0]+"' ><em class='glyphicon glyphicon-play ' aria-hidden='true' ></em></button></td>";
            //console.log("StateCode="+TableData[i][0]);
            for(var j=0;j<TableData[i].length;j++){
                txt = txt +"<td>"+TableData[i][j]+"</td>";
            }
            //txt = txt + "<td><button type='button' class='btn btn-default video_btn' StateCode='"+TableData[i][0]+"' >视频</button></td>";
            txt = txt +"</tr>";
        }
        txt = txt+"</tbody>";
        $("#AttendanceHistoryQueryTable").empty();
        $("#AttendanceHistoryQueryTable").append(txt);
        if(if_attendance_history_table_initialize) $("#AttendanceHistoryQueryTable").DataTable().destroy();

        //console.log(monitor_map_list);

        var show_table  = $("#AttendanceHistoryQueryTable").DataTable( {
            //dom: 'T<"clear">lfrtip',
            "scrollY": false,
            "scrollCollapse": true,

            "scrollX": true,
            "searching": false,
            "autoWidth": true,
            "lengthChange":false,
            //bSort: false,
            //aoColumns: [ { sWidth: "45%" }, { sWidth: "45%" }, { sWidth: "10%", bSearchable: false, bSortable: false } ],
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'excel',
                    text: '导出到excel',
                    filename: "HistoryData"+Last_update_date
                }
            ]

        } );
        Openpicture_btn_click = function(){
            $("#delAttendanceCommit").attr("AttendanceID",$(this).attr("AttendanceCode"));
            modal_middle($('#AttendanceDelAlarm'));

            $('#AttendanceDelAlarm').modal('show');

        };
        $(".open_btn").on('click',Openpicture_btn_click);
        /*
         $("#KeyHistoryQueryTable_paginate").on('click',function(){
         $(".open_btn").on('click',Openpicture_btn_click);
         });*/
        $("#AttendanceHistoryQueryTable").on('draw.dt',function(){
            $(".open_btn").unbind();
            $(".open_btn").on('click',Openpicture_btn_click);
        });
        if_attendance_history_table_initialize = true;
    };
    JQ_get(request_head,map,query_attendance_history_callback);

}
function show_new_attendance_module(){
    $("#NewAttendancePJcode_Input").val("");
    $("#NewAttendanceName_Input").val("");
    $("#NewAttendanceStartTime_Input").val("");
    $("#NewAttendanceEndTime_Input").val("");
    $("#AttendanceDate_Input").val("");
    modal_middle($('#newAttendanceModal'));
    $('#newAttendanceModal').modal('show');
}
function new_attendance_submit(){
    var PJcode = $("#NewAttendancePJcode_Input").val();
    var name = $("#NewAttendanceName_Input").val();
    var starttime = $("#NewAttendanceStartTime_Input").val();
    var leavetime = $("#NewAttendanceEndTime_Input").val();
    var date = $("#AttendanceDate_Input").val();
    if(PJcode===""||PJcode.length>5){
        $("#NewAttendancePJcode_Input").val("");
        return;
    }
    if(name===""){
        $("#NewAttendanceName_Input").val("");
        return;
    }
    if(!isDatetime(starttime)){
        $("#NewAttendanceStartTime_Input").val("");
        return;
    }
    if(!isDatetime(leavetime)){
        $("#NewAttendanceEndTime_Input").val("");
        return;
    }
    if(date === ""){
        $("#AttendanceDate_Input").val("");
        return;
    }
    var attendance = {
        PJcode: PJcode,
        name: name,
        arrivetime: starttime,
        leavetime: leavetime,
        date: date
    };
    new_attendance(attendance);
}

function new_attendance(attendance){
    var body = {
        PJcode: attendance.PJcode,
        name: attendance.name,
        arrivetime: attendance.arrivetime,
        leavetime: attendance.leavetime,
        date: attendance.date
    };

    var map={
        action:"AttendanceNew",
        type:"mod",
        body: body,
        user:usr.id
    };
    var new_attendance_callback = function(result){
        var ret = result.status;
        if(ret == "true"){
            $('#newAttendanceModal').modal('hide');
            create_user_flash = function(){
                query_attendance_history();
            };
            setTimeout(function(){
                show_alarm_module(false,"创建成功！",create_user_flash);},500);
        }else{
            setTimeout(function(){
                show_alarm_module(true,"创建失败！"+result.msg,null);},500);
        }
    };
    JQ_get(request_head,map,new_attendance_callback);
}
function del_attendance(attendanceid){
    var body = {
        attendanceid: attendanceid
    };
    var map={
        action:"AttendanceDel",
        type:"mod",
        body: body,
        user:usr.id
    };
    var del_attendance_callback = function(result){
        var ret = result.status;
        if(ret == "true"){
            del_attendance_flash = function(){
                query_attendance_history();
            };

            setTimeout(function(){
                show_alarm_module(false,"删除成功！",del_attendance_flash);
            },500);
        }else{
            setTimeout(function(){
                show_alarm_module(true,"删除失败！"+result.msg,null);},500);
        }
    };
    JQ_get(request_head,map,del_attendance_callback);

    $("#UserDelAlarm").modal('hide');
}
function isDatetime(date){
    var regex=/^(?:(?:[0-2][0-3])|(?:[0-1][0-9])):[0-5][0-9]:[0-5][0-9]$/;
    if(!regex.test(date)){
        return false;
    }
    return true;
}
//Alarm
function get_alarm_type_list(){
    var map={
        action:"AlarmType",
		type:"query",
		user:usr.id
    };
	var get_alarm_type_list_callback = function(result){
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        alarm_type_list= result.ret;
	};
	JQ_get(request_head,map,get_alarm_type_list_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        alarm_type_list= result.typelist;
    });*/
}
function query_alarm(date,type,name){
	var body={
		StatCode: alarm_selected.StatCode,
        date: date,
        type:type
	};
    var map={
        action:"AlarmQuery",
		body:body,
		type:"query",
		user:usr.id
    };
	var query_alarm_callback = function(result){
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        var StatCode = result.ret.StatCode;
        var date = result.ret.date;
        var AlarmName = result.ret.AlarmName;
        var AlarmUnit = result.ret.AlarmUnit;
        var WarningTarget = result.ret.WarningTarget;
        var minute_alarm = result.ret.minute_alarm;
        var hour_alarm = result.ret.hour_alarm;
        var day_alarm = result.ret.day_alarm;
        var minute_head = result.ret.minute_head;
        var hour_head = result.ret.hour_head;
        var day_head = result.ret.day_head;


        //console.log(("#"+type+"_canvas_day"));
        //console.log(("#"+type+"_canvas_week"));
        //console.log(("#"+type+"_canvas_month"));
        $("#Warning_"+type+"_day").css("display","block");
        var max = minute_head.length-1;
        if(max > 120) max = 120;

        $("#"+type+"_canvas_day").highcharts({

            chart: {
                type: 'areaspline',
                zoomType: 'x'
            },
            title: {
                text: name+' 分钟值日志，日期：'+date
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 150,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            xAxis: {
                categories:minute_head ,
                max: max
            },

            scrollbar: {

                enabled: true

            },
            yAxis: {
                title: {
                    text: name
                }
            },
            tooltip: {
                shared: true,
                valueSuffix: AlarmUnit
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 0.5
                }
            },
            series: [{
                name: alarm_selected.StatName,
                data: minute_alarm,
                turboThreshold: 1500       //设置最大数据量1500个
            }]
        });
        $("#Warning_"+type+"_day").css("display","none");
        $("#Warning_"+type+"_week").css("display","block");
        max = hour_head.length-1;
        if(max > 120) max = 120;
        $("#"+type+"_canvas_week").highcharts({

            chart: {
                type: 'areaspline',
                zoomType: 'x'
            },
            title: {
                text: name+' 小时平均值日志，周期： '+date+' 为截至的7天 '
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 150,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            xAxis: {
                categories: hour_head,
                max: max
            },

            scrollbar: {

                enabled: true

            },
            yAxis: {
                title: {
                    text: name
                }
            },
            tooltip: {
                shared: true,
                valueSuffix: AlarmUnit
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 0.5
                }
            },
            series: [{
                name: alarm_selected.StatName,
                data: hour_alarm,
                turboThreshold: 1500       //设置最大数据量1500个
            }]
        });
        $("#Warning_"+type+"_week").css("display","none");
        $("#Warning_"+type+"_month").css("display","block");
        max = day_head.length-1;
        if(max > 30) max = 30;
        $("#"+type+"_canvas_month").highcharts({

            chart: {
                type: 'areaspline',
                zoomType: 'x'
            },
            title: {
                text: name+' 日平均值日志，周期： '+date+' 为截至的30天 '
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 150,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            xAxis: {
                categories: day_head,
                max: max
            },

            scrollbar: {

                enabled: true

            },
            yAxis: {
                title: {
                    text: name
                }
            },
            tooltip: {
                shared: true,
                valueSuffix: AlarmUnit
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 0.5
                }
            },
            series: [{
                name: alarm_selected.StatName,
                data: day_alarm,
                turboThreshold: 1500       //设置最大数据量1500个

            }]
        });
        $("#Warning_"+type+"_month").css("display","none");

        //HYJ add for server slow
        show_table_tags();
	};
	JQ_get(request_head,map,query_alarm_callback);
/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        //var ret = result.status;
        //if(ret == "false"){
        //    show_alarm_module(true,"获取详细日志信息失败！");
        //    return;
        //}
        var StatCode = result.StatCode;
        var date = result.date;
        var AlarmName = result.AlarmName;
        var AlarmUnit = result.AlarmUnit;
        var WarningTarget = result.WarningTarget;
        var minute_alarm = result.minute_alarm;
        var hour_alarm = result.hour_alarm;
        var day_alarm = result.day_alarm;
        var minute_head = result.minute_head;
        var hour_head = result.hour_head;
        var day_head = result.day_head;


        //console.log(("#"+type+"_canvas_day"));
        //console.log(("#"+type+"_canvas_week"));
        //console.log(("#"+type+"_canvas_month"));
        $("#Warning_"+type+"_day").css("display","block");
        var max = minute_head.length-1;
        if(max > 120) max = 120;

        $("#"+type+"_canvas_day").highcharts({

            chart: {
                type: 'areaspline',
                zoomType: 'x'
            },
            title: {
                text: name+' 分钟值日志，日期：'+date
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 150,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            xAxis: {
                categories:minute_head ,
                max: max
            },

            scrollbar: {

                enabled: true

            },
            yAxis: {
                title: {
                    text: name
                }
            },
            tooltip: {
                shared: true,
                valueSuffix: AlarmUnit
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 0.5
                }
            },
            series: [{
                name: alarm_selected.StatName,
                data: minute_alarm,
                turboThreshold: 1500       //设置最大数据量1500个
            }]
        });
        $("#Warning_"+type+"_day").css("display","none");
        $("#Warning_"+type+"_week").css("display","block");
        max = hour_head.length-1;
        if(max > 120) max = 120;
        $("#"+type+"_canvas_week").highcharts({

            chart: {
                type: 'areaspline',
                zoomType: 'x'
            },
            title: {
                text: name+' 小时平均值日志，周期： '+date+' 为截至的7天 '
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 150,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            xAxis: {
                categories: hour_head,
                max: max
            },

            scrollbar: {

                enabled: true

            },
            yAxis: {
                title: {
                    text: name
                }
            },
            tooltip: {
                shared: true,
                valueSuffix: AlarmUnit
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 0.5
                }
            },
            series: [{
                name: alarm_selected.StatName,
                data: hour_alarm,
                turboThreshold: 1500       //设置最大数据量1500个
            }]
        });
        $("#Warning_"+type+"_week").css("display","none");
        $("#Warning_"+type+"_month").css("display","block");
        max = day_head.length-1;
        if(max > 30) max = 30;
        $("#"+type+"_canvas_month").highcharts({

            chart: {
                type: 'areaspline',
                zoomType: 'x'
            },
            title: {
                text: name+' 日平均值日志，周期： '+date+' 为截至的30天 '
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 150,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            xAxis: {
                categories: day_head,
                max: max
            },

            scrollbar: {

                enabled: true

            },
            yAxis: {
                title: {
                    text: name
                }
            },
            tooltip: {
                shared: true,
                valueSuffix: AlarmUnit
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 0.5
                }
            },
            series: [{
                name: alarm_selected.StatName,
                data: day_alarm,
                turboThreshold: 1500       //设置最大数据量1500个

            }]
        });
        $("#Warning_"+type+"_month").css("display","none");

        //HYJ add for server slow
        show_table_tags();
    });*/
}
function initializeAlarmMap(){
    get_project_list();
    get_proj_point_list();
    get_monitor_alarm_list();
    get_alarm_type_list();
    var basic_min_height = parseInt(($("#WCMonitorViewMap").css("min-height")).replace(/[^0-9]/ig,""));
    if(window.screen.availHeight/2 > basic_min_height) basic_min_height=window.screen.availHeight/2;
    $("#WCMonitorViewMap").css("min-height",basic_min_height+"px");
    map_MPMonitor = new BMap.Map("WCMonitorViewMap");  // 创建点坐标
    map_MPMonitor.addControl(new BMap.NavigationControl());
    //map_MPMonitor.addControl(new BMap.ScaleControl());
    map_MPMonitor.enableScrollWheelZoom();
    //map_MPMonitor.centerAndZoom(usr.city,15);
    /*
    if(usr.city === "GPS"){
        if(Longitude === null){
            map_MPMonitor.centerAndZoom("beijing",15);
        }else{
            map_MPMonitor.centerAndZoom(new BMap.Point(Longitude,Latitude),15);
        }
    }else{
        map_MPMonitor.centerAndZoom(usr.city,15);
    }*/
    if(usr_faverate_list === null ||usr_faverate_list.length===0){
        map_MPMonitor.centerAndZoom(new BMap.Point(user_point.Longitude,user_point.Latitude),15);
        //map_MPMonitor.centerAndZoom("beijing",17);
    }else{
        map_MPMonitor.centerAndZoom(new BMap.Point(usr_faverate_list[0].Longitude,usr_faverate_list[0].Latitude),17);
    }
    //HYJ this will not be a problem because bmap will cost
    window.setTimeout(alarm_addMarker, wait_time_long);
    window.setTimeout(build_alarm_tabs, wait_time_long);
    //alarm_addMarker();
    alarm_map_initialized=true;
}
function alarm_cycle(){
    if(CURRENT_URL != "WarningCheck") return;
    if(alarm_map_initialized === false) return;
    get_monitor_alarm_list();
    window.setTimeout(alarm_addMarker, wait_time_long);
}
function build_alarm_tabs(){
    if(alarm_type_list === null) return;
    $("#Alarm_chart_view_nav").empty();
    $("#Alarm_Chart_content").empty();
    var txt1 = "";
    var txt2 = "";
	var i;
    for( i=0;i<alarm_type_list.length;i++){
        var temp = "";
        var temp2 = "";
        if(i ===0) {temp = "class='active'"; temp2 = " in active";}
        txt1=txt1+"<li class='dropdown'>"+
            "<a href='#' id='Warning_"+alarm_type_list[i].id+"_tab' class='dropdown-toggle' data-toggle='dropdown'>"+alarm_type_list[i].name+" <b class='caret'></b>"+
            "</a>"+
            "<ul class='dropdown-menu' role='menu' aria-labelledby='Warning_"+alarm_type_list[i].id+"_tab''>"+
            "<li><a href='#Warning_"+alarm_type_list[i].id+"_day' "+temp+" tabindex='-1' data-toggle='tab' id='Warning_"+alarm_type_list[i].id+"_tab_day' alarmid='"+alarm_type_list[i].id+"'>分钟报表（日）</a> </li>"+
            "<li><a href='#Warning_"+alarm_type_list[i].id+"_week' tabindex='-1' data-toggle='tab'  id='Warning_"+alarm_type_list[i].id+"_tab_week' alarmid='"+ alarm_type_list[i].id+"'>小时报表（周）</a> </li>"+
            "<li><a href='#Warning_"+alarm_type_list[i].id+"_month' tabindex='-1' data-toggle='tab'  id='Warning_"+alarm_type_list[i].id+"_tab_month' alarmid='"+alarm_type_list[i].id+"'> 日报表（30天）</a> </li> </ul> </li>";
        /*
         txt2 = txt2+
         "<div class='tab-pane fade"+temp2+" Alarm_Canvas' id='Warning_"+i+"_tab_day' >"+
         //"<div class='tab-pane fade ' id='Warning_"+i+"_tab_day' >"+
         "<div id='"+i+"_canvas_day' class='Alarm_Canvas'></div></div>"+
         "<div class='tab-pane fade Alarm_Canvas' id='Warning_"+i+"_tab_week' >"+
         "<div id='"+i+"_canvas_week' class='Alarm_Canvas' ></div></div>"+
         "<div class='tab-pane fade Alarm_Canvas' id='Warning_"+i+"_tab_month' >"+
         "<div id='"+i+"_canvas_month' class='Alarm_Canvas' ></div></div>";
         */
        txt2 = txt2+
            "<div class='Alarm_Canvas' id='Warning_"+alarm_type_list[i].id+"_day' >"+
                //"<div class='tab-pane fade ' id='Warning_"+i+"_tab_day' >"+
            "<div id='"+alarm_type_list[i].id+"_canvas_day' class='Alarm_Canvas'></div></div>"+
            "<div class='Alarm_Canvas' id='Warning_"+alarm_type_list[i].id+"_week' >"+
            "<div id='"+alarm_type_list[i].id+"_canvas_week' class='Alarm_Canvas' ></div></div>"+
            "<div class='Alarm_Canvas' id='Warning_"+alarm_type_list[i].id+"_month' >"+
            "<div id='"+alarm_type_list[i].id+"_canvas_month' class='Alarm_Canvas' ></div></div>";

    }
    //console.log(txt1+txt2);
    $("#Alarm_chart_view_nav").append(txt1);
    $("#Alarm_Chart_content").append(txt2);
	Warning_tab_day_click = function(){
		hide_all_chart();
        //console.log("click"+"#Warning_"+$(this).attr('alarmid')+"_day");
        $("#Warning_"+$(this).attr('alarmid')+"_day").css("display","block");
	};
	Warning_tab_week_click = function(){
		hide_all_chart();
        //console.log("click"+"#Warning_"+$(this).attr('alarmid')+"_week");
        $("#Warning_"+$(this).attr('alarmid')+"_week").css("display","block");
	};
	Warning_tab_month_click = function(){
		hide_all_chart();
        //console.log("click"+"#Warning_"+$(this).attr('alarmid')+"_month");
        $("#Warning_"+$(this).attr('alarmid')+"_month").css("display","block");
	};


    for( i=0;i<alarm_type_list.length;i++){
		/*
        $("#Warning_"+alarm_type_list[i].id+"_tab_day").on('click',function(){
            hide_all_chart();
            //console.log("click"+"#Warning_"+$(this).attr('alarmid')+"_day");
            $("#Warning_"+$(this).attr('alarmid')+"_day").css("display","block");
        });
        $("#Warning_"+alarm_type_list[i].id+"_tab_week").on('click',function(){
            hide_all_chart();
            //console.log("click"+"#Warning_"+$(this).attr('alarmid')+"_week");
            $("#Warning_"+$(this).attr('alarmid')+"_week").css("display","block");
        });
        $("#Warning_"+alarm_type_list[i].id+"_tab_month").on('click',function(){
            hide_all_chart();
            //console.log("click"+"#Warning_"+$(this).attr('alarmid')+"_month");
            $("#Warning_"+$(this).attr('alarmid')+"_month").css("display","block");
        });*/
		$("#Warning_"+alarm_type_list[i].id+"_tab_day").on('click',Warning_tab_day_click);
		$("#Warning_"+alarm_type_list[i].id+"_tab_week").on('click',Warning_tab_week_click);
		$("#Warning_"+alarm_type_list[i].id+"_tab_month").on('click',Warning_tab_month_click);
    }
    hide_all_chart();
    $(window).resize();
}
function hide_all_chart(){
    for(var i=0;i<alarm_type_list.length;i++){
        $("#Warning_"+alarm_type_list[i].id+"_day").css("display","none");
        $("#Warning_"+alarm_type_list[i].id+"_week").css("display","none");
        $("#Warning_"+alarm_type_list[i].id+"_month").css("display","none");
    }
}
function unhide_all_chart(){
    for(var i=0;i<alarm_type_list.length;i++){
        $("#Warning_"+alarm_type_list[i].id+"_day").css("display","block");
        $("#Warning_"+alarm_type_list[i].id+"_week").css("display","block");
        $("#Warning_"+alarm_type_list[i].id+"_month").css("display","block");
    }
}
function get_select_alarm(title){
    var temp = title.split(":");
    if(monitor_map_list === null) monitor_map_list = [];
    for(var i=0;i<monitor_map_list.length;i++){
        if(monitor_map_list[i].StatCode == temp[0]){
            alarm_selected = monitor_map_list[i];
            return;
        }
    }
    alarm_selected = null;
    return;
}
function get_alarmpointinfo_on_map(){
    if(alarm_selected === null||alarm_map_handle===null){
        return;
    }else{
        txt = "<div id ='Element_card_floating'><p style='font-size:14px;' >"+"站点名称："+alarm_selected.StatName+"</p>"+
            "<HR style='FILTER: alpha(opacity=100,finishopacity=0,style=3)' width='80%' color=#987cb9 SIZE=3/>" +
            "<div style='font-size:10px;' >" +
            "站点地址："+alarm_selected.Address+"</div></div>";

    }
    if(alarm_map_handle!==null){
        alarm_map_handle.setContent(txt);
    }
    $("#WCStatCode_Input").val(alarm_selected.StatName);


}
function alarm_addMarker(point){

    if(CURRENT_URL != "WarningCheck") return;
    if(alarm_map_list === null)return;
    // 创建图标对象
    var myIcon = new BMap.Icon("./image/map-marker-ball-pink-small.png", new BMap.Size(32, 32),{
        anchor: new BMap.Size(16, 30)
    });
    map_MPMonitor.clearOverlays();
	alarm_mark_click = function(){
		get_select_alarm(this.getTitle());
		//console.log("Selected:"+alarm_selected.StatName);

		var sContent = this.getTitle();
		var infoWindow = new BMap.InfoWindow(sContent,{offset:new BMap.Size(0,-23)});
		infoWindow.setWidth(400);
		alarm_map_handle = infoWindow;
		get_alarmpointinfo_on_map();
		this.openInfoWindow(infoWindow);
		infoWindow.addEventListener("close",function(){
			if(alarm_map_handle == this) alarm_map_handle = null;
		});
	};
    if(alarm_map_list === null) alarm_map_list = [];
    for(var i=0;i<alarm_map_list.length;i++){
        var t_point = new BMap.Point(parseFloat(alarm_map_list[i].Longitude),parseFloat(alarm_map_list[i].Latitude));
        var marker = new BMap.Marker(t_point, {icon: myIcon});
        marker.setTitle(alarm_map_list[i].StatCode+":"+alarm_map_list[i].StatName);
        map_MPMonitor.addOverlay(marker);
		marker.addEventListener("click",alarm_mark_click);
    }

}




//Data Export

function Data_export_Normal(title,tablename,condition,filter){
    $("#TableQueryCondition").css("display","none");
    $("#ExportTable").empty();
    $("#TableExportTitle").text(title);
	var body = {
		TableName : tablename,
        Condition: condition,
        Filter: filter
	};
    var map={
        action:"TableQuery",
        body:body,
		type:"query",
		user:usr.id
    };
	var Data_export_Normal_callback = function(result){
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        ColumnName = result.ret.ColumnName;
        TableData = result.ret.TableData;
        var txt = "<thead> <tr>";
		var i;
        for( i=0;i<ColumnName.length;i++){
            txt = txt +"<th>"+ColumnName[i]+"</th>";
        }
        txt = txt +"</tr></thead>";
        
        //txt = txt +"<tfoot><tr>";
        //for(var i=0;i<ColumnName.length;i++){
        //    txt = txt +"<th>"+ColumnName[i]+"</th>";
        //}
        //txt = txt +"</tr></tfoot>";
        txt = txt +"<tbody>";
        for( i=0;i<TableData.length;i++){
            txt = txt +"<tr>";
            for(var j=0;j<TableData[i].length;j++){
                txt = txt +"<td>"+TableData[i][j]+"</td>";
            }
            txt = txt +"</tr>";
        }
        txt = txt+"</tbody>";
        //$("#ExportTable").append(txt);
        if(if_table_initialize) $("#ExportTable").DataTable().destroy();
        $("#ExportTable").empty();
        $("#ExportTable").append(txt);

        //console.log($("#ExportTable").html());

        var show_table  = $("#ExportTable").DataTable( {
            //dom: 'T<"clear">lfrtip',
            "scrollY": 200,
            "scrollCollapse": true,

            "scrollX": true,
            "searching": false,
            "autoWidth": true,
            "lengthChange":false,
            //bSort: false,
            //aoColumns: [ { sWidth: "45%" }, { sWidth: "45%" }, { sWidth: "10%", bSearchable: false, bSortable: false } ],
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'excel',
                    text: '导出到excel',
                    filename: title+(new Date()).Format("yyyy-MM-dd_hhmmss")
                }
            ]

        } );
        if_table_initialize = true;
        modal_middle($('#TableExportModule'));
        $('#TableExportModule').modal('show');
	};
	JQ_get(request_head,map,Data_export_Normal_callback);




}
function Data_export_alarm() {
	
    
	
    if (if_table_initialize){
        $("#ExportTable").DataTable().destroy();
        if_table_initialize = false;
    }
	$("#ExportTable").empty();
    $("#TableQueryCondition").css("display", "block");
    $("#TableExportTitle").text("告警日志导出");
    $("#QueryProjCode_choice").empty();
    $("#QueryStatCode_choice").empty();
    if(alarm_selected!==null){
        $("#QueryProjCode_choice").append(get_proj_option(alarm_selected.ProjCode));
        //console.log($("#DevProjCode_choice").val());
        get_proj_point_option($("#QueryProjCode_choice").val(), $("#QueryStatCode_choice"), alarm_selected.StatCode);

        $("#QueryStatCode_choice").val(alarm_selected.StatCode);
    }
    else{
        $("#QueryProjCode_choice").append(get_proj_option());
        //console.log($("#DevProjCode_choice").val());
        get_proj_point_option($("#QueryProjCode_choice").val(),$("#QueryStatCode_choice"),"");
    }
    $("#QueryStartTime_Input").val(get_yesterday());
    $("#QueryEndTime_Input").val(get_yesterday());
    modal_middle($('#TableExportModule'));
    $('#TableExportModule').modal('show');
}
function submit_alarm_query(){
    var statcode = $("#QueryStatCode_choice").val();
    var alarm_type = $("#QueryAlarm_choice").val();
    var start_date = $("#QueryStartTime_Input").val();
    var end_date = $("#QueryEndTime_Input").val();
    if(statcode === ""){
        $("#QueryStatCode_choice").focus();
        return;
    }
    var condition = [];//new Array();
    var temp ={
        ConditonName: "UserId",
        Equal:usr.id,
        GEQ:"",
        LEQ:""
    };
    condition.push(temp);
    temp ={
        ConditonName: "StatCode",
        Equal:statcode,
        GEQ:"",
        LEQ:""
    };
    condition.push(temp);
	temp ={
        ConditonName: "AlarmType",
        Equal:alarm_type,
        GEQ:"",
        LEQ:""
    };
    condition.push(temp);
		temp ={
        ConditonName: "AlarmDate",
        Equal:"",
        GEQ:end_date,
        LEQ:start_date
    };
    condition.push(temp);
	var body = {
		TableName : "Alarmtable",
        Condition: condition,
        Filter: []//new Array()
	};
    var map={
        action:"TableQuery",
        body:body,
		type:"query",
		user:usr.id
    };
	var submit_alarm_query_callback = function(result){
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        ColumnName = result.ret.ColumnName;
        TableData = result.ret.TableData;
		$("#ExportTable").empty();
        var txt = "<thead> <tr>";
		var i;
        for( i=0;i<ColumnName.length;i++){
            txt = txt +"<th>"+ColumnName[i]+"</th>";
        }
        txt = txt +"</tr></thead>";
        txt = txt +"<tbody>";
        for( i=0;i<TableData.length;i++){
            txt = txt +"<tr>";
            for(var j=0;j<TableData[i].length;j++){
                txt = txt +"<td>"+TableData[i][j]+"</td>";
            }
            txt = txt +"</tr>";
        }
        txt = txt+"</tbody>";
        $("#ExportTable").append(txt);
        if(if_table_initialize) $("#ExportTable").DataTable().destroy();

        //console.log(monitor_map_list);

        var show_table  = $("#ExportTable").DataTable( {
            //dom: 'T<"clear">lfrtip',
            "scrollY": 200,
            "scrollCollapse": true,

            "scrollX": true,
            "searching": false,
            "autoWidth": true,
            "lengthChange":false,
            //bSort: false,
            //aoColumns: [ { sWidth: "45%" }, { sWidth: "45%" }, { sWidth: "10%", bSearchable: false, bSortable: false } ],
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'excel',
                    text: '导出到excel',
                    filename: "日志数据导出"+$("#QueryStatCode_choice").text()+(new Date()).Format("yyyy-MM-dd_hhmmss")
                }
            ]

        } );
        if_table_initialize = true;
        modal_middle($('#TableExportModule'));
        $('#TableExportModule').modal('show');
	};
	JQ_get(request_head,map,submit_alarm_query_callback);

}

//Sensor Manager
function get_sensor_list(){
    var map={
        action:"SensorList",
		type:"query",
		user:usr.id
    };
	var get_sensor_list_callback = function(result){
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        sensor_list= result.ret;
	};
	JQ_get(request_head,map,get_sensor_list_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        sensor_list= result.SensorList;
    });*/
}

function get_device_sensor(DevCode){
	var body={
        DevCode: DevCode
	};
    var map={
        action:"DevSensor",
        body:body,
		type:"query",
		user:usr.id
    };
	var get_device_sensor_callback = function(result){
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        device_selected_sensor = result.ret;
        //hyj add for server slow.
        draw_dev_detail_panel();
	};
	JQ_get(request_head,map,get_device_sensor_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        device_selected_sensor = result.ret;
        //hyj add for server slow.
        draw_dev_detail_panel();
    });*/
}
function get_sensor_name(sensorid){
    var ret = "未知传感器";
    if(sensor_list === null) sensor_list = [];
    for(var i=0;i<sensor_list.length;i++){
        if(sensorid == sensor_list[i].id){
            ret = sensor_list[i].nickname;
        }
    }
    return ret;
}

function show_sensor_module(){
    if(null === select_sensor) {
        return;
    }
    $("#SensorExtraInfo").empty();
    $("#SensorDevCode_Input").val(device_selected.DevCode);
    $("#SensorName_Input").val(get_sensor_name(select_sensor.id));
    $("#SensorStatus_choice").val(select_sensor.status);
    if(select_sensor.para === null) select_sensor.para = [];
    if(select_sensor.para.length!==0){
        var txt = "";
		var i;
        for( i=0;i<select_sensor.para.length;i++){
            txt = txt +"<div class='input-group '>"+
            "<span class='input-group-addon' style='min-width: 100px'>"+select_sensor.para[i].name+"</span>"+
                "<input type='text' class='form-control' placeholder='"+select_sensor.para[i].memo+"' aria-describedby='basic-addon1' id='SensorPara_"+select_sensor.para[i].name+"'/>"+
                "</div><p></p>";
        }
        $("#SensorExtraInfo").append(txt);
        for( i=0;i<select_sensor.para.length;i++){
            $("#SensorPara_"+select_sensor.para[i].name).val(select_sensor.para[i].value);
        }
    }
    modal_middle($('#SensorModal'));

    $('#SensorModal').modal('show');
}




function submit_sensor_module(){
    if(null === select_sensor) {
        return;
    }
    var paramlist = [];//new Array();
    if(select_sensor.para === null) select_sensor.para = [];
    for(var i=0;i<select_sensor.para.length;i++){
        var temp = {
            name : select_sensor.para[i].name,
            value : $("#SensorPara_"+select_sensor.para[i].name).val()

        };
    paramlist.push(temp);
    }
	var body={
		DevCode: device_selected.DevCode,
        SensorCode: select_sensor.id,
        status:$("#SensorStatus_choice").val(),
        ParaList :paramlist
	};
    var map = {
        action: "SensorUpdate",
        body:body,
		type:"mod",
		user:usr.id
    };
	var submit_sensor_module_callback = function(result){
        var ret = result.status;
        if(ret == "true"){
            $('#SensorModal').modal('hide');
            Initialize_dev_detail();

            setTimeout(function() {
                show_alarm_module(false, "传感器修改成功！", null);
            },500);
        }else{
            setTimeout(function() {
                show_alarm_module(true, "传感器修改失败！" + result.msg, null);
            },500);
        }
	};
	JQ_get(request_head,map,submit_sensor_module_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "true"){
            show_alarm_module(false,"传感器修改成功！");
            $('#SensorModal').modal('hide');
            Initialize_dev_detail();
        }else{
            show_alarm_module(true,"传感器修改失败！"+result.msg);
        }
    });*/
}
function get_key_auth_list(KeyId){
	var body={KeyCode: KeyId};
    var map={
        action:"KeyAuthlist",
        body:body,
		type:"query",
		user:usr.id
    };
	var get_key_auth_list_callback = function(result){
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        select_key_auth = result.ret;
        //hyj add for server slow.
        show_key_auth_module();
	};
	JQ_get(request_head,map,get_key_auth_list_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        select_key_auth = result.ret;
        //hyj add for server slow.
        show_key_auth_module();
    });*/
}
function show_key_auth_module(){
    if(null === select_key_auth) {
        return;
    }
    $("#KeyAuthList").empty();
    $("#KeyAuthNumber_Input").val(""+select_key_auth.length);
    if(select_key_auth.length!==0){
        var txt = "";
        var i;
        txt ="<table data-toggle='table' class='table table-hover table-bordered' ' data-click-to-select='false' ><thead> <tr> <th>授权设备 </th> <th>授权方式 </th></tr> </thead> <tbody >";
        for(i=0;i<select_key_auth.length;i++){
            txt = txt + "<tr> <td>"+ select_key_auth[i].DomainName+"</td> <td>"+ select_key_auth[i].AuthWay+"</td></tr>";
        }
        txt = txt+ "</tbody></table>";
        $("#KeyAuthList").append(txt);
    }
    modal_middle($('#KeyModal'));

    $('#KeyModal').modal('show');
}
function get_user_message(){
	var body = {
        id: usr.id
	};
    var map = {
        action: "GetUserMsg",
        body:body,
		type:"query",
		user:usr.id
    };
	var get_user_message_callback = function(result){
        var ret = result.status;
        if(ret == "true"){
            usr_msg = result.ret.msg;
            usr_ifdev = result.ret.ifdev;
        }else{
            show_alarm_module(true,"获取用户信息失败，请重新登录！"+result.msg,null);
        }
	};
	JQ_get(request_head,map,get_user_message_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "true"){
            usr_msg = result.msg;
            usr_ifdev = result.ifdev;
        }else{
            show_alarm_module(true,"获取用户信息失败，请重新登录！"+result.msg);
        }
    });*/
}
function get_user_image(){
    var body = {
        id: usr.id
	};
    var map = {
        action: "GetUserImg",
        body:body,
		type:"query",
		user:usr.id
    };
	var get_user_image_callback = function(result){
        var ret = result.status;
        if(ret == "true"){
            usr_img = result.ret;
            reflash_usr_img_table();
        }else{
            show_alarm_module(true,"获取用户信息失败，请重新登录！"+result.msg,null);
        }
	};
	JQ_get(request_head,map,get_user_image_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "true"){
            usr_img = result.img;
            reflash_usr_img_table();
        }else{
            show_alarm_module(true,"获取用户信息失败，请重新登录！"+result.msg);
        }
    });*/
}
function clear_user_image(){
	var body = {
        id: usr.id
	};
    var map = {
        action: "ClearUserImg",
        body:body,
		type:"query",
		user:usr.id
    };
	var clear_user_image_callback = function(result){
        var ret = result.status;
        if(ret == "true"){
            usr_img = [];//new Array();
            reflash_usr_img_table();
        }else{
            show_alarm_module(true,"获取用户信息失败，请重新登录！"+result.msg,null);
        }
	};
	JQ_get(request_head,map,clear_user_image_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "true"){
            usr_img = [];//new Array();
            reflash_usr_img_table();
        }else{
            show_alarm_module(true,"获取用户信息失败，请重新登录！"+result.msg);
        }
    });*/
}
function set_user_message(msg,ifdev){
	var body={
		id: usr.id,
        msg: msg,
        ifdev: ifdev
	};

    var map = {
        action: "SetUserMsg",
        body:body,
		type:"query",
		user:usr.id
    };
	var set_user_message_callback = function(result){
        var ret = result.status;
        if(ret == "true"){
            show_alarm_module(true,"屏保欢迎语设置成功！"+result.msg,null);
        }else{
            show_alarm_module(true,"获取用户信息失败，请重新登录！"+result.msg,null);
        }
	};
	JQ_get(request_head,map,set_user_message_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "true"){
            show_alarm_module(true,"屏保欢迎语设置成功！"+result.msg);
        }else{
            show_alarm_module(true,"获取用户信息失败，请重新登录！"+result.msg);
        }
    });*/
}
function show_usr_msg_module(){
    $("#UsrMsg_Input").val(usr_msg);
    $("#UsrDev_choice").val(usr_ifdev);
    reflash_usr_img_table();
    $('#file-zh').fileinput({
        language: 'zh',
        uploadUrl: upload_url+"?id="+usr.id,
        allowedFileExtensions : ['jpg', 'png','gif'],
        'showPreview' : true,
    });
    modal_middle($('#UsrMsgModal'));
    $('#UsrMsgModal').modal('show');
}

function reflash_usr_img_table(){
    $("#UsrImgTable").empty();
    var txt = "<thead> <tr> <th> 已上传文件</th> </tr> </thead> <tbody >";
    if(usr_img === null) usr_img = [];
    for(var i =0;i<usr_img.length;i++){
        txt = txt + "<tr> <td>"+ usr_img[i].name+"</td></tr>";
    }
    $("#UsrImgTable").append(txt);
}
function user_message_update(){
	var body = {
		id: usr.id,
        msg: $("#UsrMsg_Input").val(),
        ifdev: $("#UsrDev_choice").val()
	};
    var map = {
        action: "SetUserMsg",
        body:body,
		type:"query",
		user:usr.id
    };
	var user_message_update_callback = function(result){
        var ret = result.status;
        if(ret == "true"){
            $('#UsrMsgModal').modal('hide');
            show_alarm_module(true,"屏保欢迎语设置成功！"+result.msg,null);
        }else{
            show_alarm_module(true,"获取用户信息失败，请重新登录！"+result.msg,null);
        }
	};
	JQ_get(request_head,map,user_message_update_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "true"){
            $('#UsrMsgModal').modal('hide');
            show_alarm_module(true,"屏保欢迎语设置成功！"+result.msg);
        }else{
            show_alarm_module(true,"获取用户信息失败，请重新登录！"+result.msg);
        }
    });*/
}

function change_camera_status(hvalue,vvalue,url){
	var txt = "当前：水平="+hvalue+"/垂直="+vvalue+"；调节单位：水平="+camera_unit_h+"/垂直="+camera_unit_v;

	$('#VideoModuleCameraState_Input').val(txt);
	$('#video_img').attr("src",url);

}
function get_camera_unit(){
    var map = {
        action: "GetCameraUnit",
		type:"query",
		user:usr.id
    };
	var get_camera_unit_callback = function(result){
        var ret = result.status;
        if(ret == "true"){
            camera_unit_h = result.ret.h;
            camera_unit_v = result.ret.v;
        }else{
            show_alarm_module(true,"获取摄像头基本单位失败，请重新登录！"+result.msg,null);
        }
	};
	JQ_get(request_head,map,get_camera_unit_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "true"){
            camera_unit_h = result.ret.h;
            camera_unit_v = result.ret.v;
        }else{
            show_alarm_module(true,"获取摄像头基本单位，请重新登录！"+result.msg);
        }
    });*/
}

function get_camera_status(statcode){
	var body = {
		StatCode:statcode
	};
    var map = {
        action: "GetCameraStatus",
        body:body,
		type:"query",
		user:usr.id
    };
	var get_camera_status_callback = function(result){
        var ret = result.status;
        if(ret == "true"){
            change_camera_status(result.ret.h,result.ret.v,result.ret.url);
        }else{
            show_alarm_module(true,"获取摄像头基本单位失败，请重新登录！"+result.msg,null);
        }
	};
	JQ_get(request_head,map,get_camera_status_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "true"){
            change_camera_status(result.ret.h,result.ret.v,result.ret.url);
        }else{
            show_alarm_module(true,"获取摄像头基本单位，请重新登录！"+result.msg);
        }
    });*/
}

function move_camera(statcode,vorh,value){
	
	var body = {
		StatCode:statcode,
		adj: value
	};
    var map;
    if(vorh == "v"){
        map = {
            action: "CameraVAdj",
            body:body,
			type:"mod",
			user:usr.id
            
        };
    }else{
        map = {
            action: "CameraHAdj",
            body:body,
			type:"mod",
			user:usr.id
        };
    }
	var move_camera_callback = function(result){
        var ret = result.status;
        if(ret == "true"){
            change_camera_status(result.ret.h,result.ret.v,result.ret.url);
        }else{
            show_alarm_module(true,"改变摄像头参数失败，请重新登录！"+result.msg,null);
        }
	};
	JQ_get(request_head,map,move_camera_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "true"){
            change_camera_status(result.ret.h,result.ret.v,result.ret.url);
        }else{
            show_alarm_module(true,"获取摄像头基本单位，请重新登录！"+result.msg);
        }
    });*/
}
function show_cameraModule(Statcode){
    modal_middle($('#VideoSelectionModule'));
    $('#VideoModuleStatCode_Input').val(Statcode);
    $('#VideoModule_query_Input').val("");
    //$('#VideoModuleStatCode_Input').val("0");
	$('#ModuleVCRStatus_choice').empty();
	
	get_camera_status(Statcode);


    $('#VideoSelectionModule').modal('show') ;
    //document.querySelector('.cycle-circle').classList.toggle('open');
}
function show_openlockmodule(statcode){
    $("#UnlockConfirmBtn").attr("StateCode",statcode);
    $("#UnlockConfirmModalContent").empty();
    $("#UnlockConfirmModalContent").append("<strong>请确认：</strong>是否要打开站点["+statcode+"]的智能锁！按确认继续。");

    modal_middle($('#UnlockConfirm'));
    $('#UnlockConfirm').modal('show') ;
}

function openlock(statcode){
	var body={StatCode:statcode};
    var map = {
        action: "OpenLock",
        body:body,
	    type:"mod",
	    user:usr.id
    };
	var openlock_callback = function(result){
        var ret = result.status;
        if(ret == "true"){
            var auth = result.auth;
            if(auth == "true"){
                show_alarm_module(false,"已向下位机发送开锁请求，请稍后刷新！",null);
            }else{
                show_alarm_module(true,"无效授权！"+result.msg,null);
            }

        }else{
            show_alarm_module(true,"开锁请求失败，请重新登录！"+result.msg,null);
        }
	};
	JQ_get(request_head,map,openlock_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "true"){
            var auth = result.auth;
            if(auth == "true"){
                show_alarm_module(false,"已向下位机发送开锁请求，请稍后刷新！");
            }else{
                show_alarm_module(true,"无效授权！"+result.msg);
            }

        }else{
            show_alarm_module(true,"开锁请求失败，请重新登录！"+result.msg);
        }
    });*/
}
//Key auth view
function get_proj_key_list(){
    var map={
        action:"ProjKeyList",
		type:"query",
		user:usr.id
    };
	var get_proj_key_list_callback = function(result){
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        key_list = result.ret;
	};
	JQ_get(request_head,map,get_proj_key_list_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        key_list = result.ret;

    });*/
}
function get_proj_user_list(){
    var map={
        action:"ProjUserList",
		type:"query",
	    user:usr.id
    };
	var get_proj_user_list_callback = function(result){
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        proj_user_list = result.ret;
	};
	JQ_get(request_head,map,get_proj_user_list_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        proj_user_list = result.ret;

    });*/
}
function build_key_auth_proj_choice(){
    if(project_list === null) return;
    var txt ="";
    $("#KeyAuthProj_choice").empty();
    $("#KeyUserProj_choice").empty();
    if(project_list === null) project_list = [];
    for( i=0;i<project_list.length;i++){
        txt = txt +"<option value="+project_list[i].id+">"+project_list[i].name+"</option>";
    }
    $("#KeyAuthProj_choice").append(txt);
    $("#KeyUserProj_choice").append(txt);
	update_key_auth_proj_stat_choice($("#KeyAuthProj_choice").val(),$("#KeyAuthProj_choice").find("option:selected").text());
	update_key_auth_proj_key_choice($("#KeyUserProj_choice").val());
	update_key_auth_proj_user_choice($("#KeyUserProj_choice").val());
    $("#KeyAuthProj_choice").change(function(){
        update_key_auth_proj_stat_choice($(this).val(),$(this).find("option:selected").text());
    });
    $("#KeyUserProj_choice").change(function(){
        update_key_auth_proj_key_choice($(this).val());
        update_key_auth_proj_user_choice($("#KeyUserProj_choice").val());
    });
}
function update_key_auth_proj_stat_choice(projcode,projname){
	$("#KeyAuthPoint_choice").empty();
    var txt = "";
    if(point_list === null) point_list = [];
    for( i=0;i<point_list.length;i++){
		if(point_list[i].ProjCode == projcode){
        txt = txt +"<option value="+point_list[i].id+">"+point_list[i].name+"</option>";}
    }
	txt = "<option value="+projcode+">"+projname+":全项目</option>"+txt;

	$("#KeyAuthPoint_choice").append(txt);
}
function update_key_auth_proj_key_choice(projcode){
	$("#KeyUserKey_choice").empty();
    var txt = "";
    if(key_list === null) key_list = [];
    for( i=0;i<key_list.length;i++){
		if(key_list[i].ProjCode == projcode){
            var keyusername = key_list[i].username;
            if(keyusername == "none")keyusername = "部门收管";
        txt = txt +"<option value="+key_list[i].id+">"+key_list[i].name+":"+keyusername+"</option>";}
    }
	$("#KeyUserKey_choice").append(txt);
}
function update_new_key_auth_key_choice(projcode){
	$("#NewKeyAuthKey_choice").empty();
    var txt = "";
    if(key_list === null) key_list = [];
    for( i=0;i<key_list.length;i++){
		if(key_list[i].ProjCode == projcode){
            var keyusername = key_list[i].username;
            if(keyusername == "none")keyusername = "部门收管";
        txt = txt +"<option value="+key_list[i].id+">"+key_list[i].name+":"+keyusername+"</option>";}
    }
	$("#NewKeyAuthKey_choice").append(txt);
}
function update_key_auth_proj_user_choice(projcode){
	$("#KeyUserUser_choice").empty();
    var txt = "";
    if(proj_user_list === null) proj_user_list = [];
    for( i=0;i<proj_user_list.length;i++){
		if(proj_user_list[i].ProjCode == projcode){
        txt = txt +"<option value="+proj_user_list[i].id+">"+proj_user_list[i].name+"</option>";}
    }
	txt = "<option value='none'>部门收管</option>"+txt;

	$("#KeyUserUser_choice").append(txt);
}

function key_auth_initialize(){
    //if(Key_auth_initialized === false){
        //if(project_list === null||point_list === null||key_list === null||proj_user_list === null) {
            get_project_list();
            get_proj_point_list();

            get_proj_key_list();
			get_proj_user_list();
            window.setTimeout(build_key_auth_proj_choice, wait_time_middle);
        //}else{
            //build_key_auth_proj_choice();
       // }
       // Key_auth_initialized = true;

   // }
}

function get_domain_auth_list(DomainCode){
	if(DomainCode === "") return;
	var body={
		DomainCode:DomainCode
	};
    var map={
        action:"DomainAuthlist",
        body:body,
		type:"query",
		user:usr.id
    };
	var get_domain_auth_list_callback = function(result){
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        var domain_auth_list = result.ret;
        if(domain_auth_list === null) domain_auth_list = [];
        var txt = "<thead><tr><th></th><th>编号</th><th>钥匙编号</th><th>钥匙</th><th>用户</th><th>授权条件</th></tr></thead><tbody>";
        $("#Table_point_key_auth").empty();
        for(var i=0;i<domain_auth_list.length;i++){
            var keyusername = domain_auth_list[i].UserName;
            if(keyusername == "none")keyusername = "部门收管";
            txt= txt+"<tr> <td><button type='button' class='btn btn-default Auth_del_btn' AuthId='"+domain_auth_list[i].AuthId+"' ><em class='glyphicon glyphicon-trash ' aria-hidden='true' ></em></button></td>";
            txt = txt +"<td>"+domain_auth_list[i].AuthId+"</td><td>"+domain_auth_list[i].KeyId+"</td><td>"+domain_auth_list[i].KeyName+"</td><td>"+keyusername+"</td><td>"+domain_auth_list[i].AuthWay+"</td></tr>";
        }
        txt = txt+"</tbody>";
        $("#Table_point_key_auth").append(txt);

		$(".Auth_del_btn").on('click',function(){
			touchcookie();
			show_auth_delete_module($(this).attr("AuthId"));
		});
	};
	JQ_get(request_head,map,get_domain_auth_list_callback);

}

function show_auth_delete_module(authid){
	$("#delKeyAuthCommit").attr("AuthId",authid);
	$("#KeyAuthDelAlertModalLabel").text("确认删除 授权"+authid);
    modal_middle($('#KeyAuthDelAlarm'));

    $('#KeyAuthDelAlarm').modal('show');
}

function key_auth_delete(authid){
	if(authid==="")return;
	var body={AuthId:authid};
	var map={
        action:"KeyAuthDel",
        body:body,
        type:"mod",
        user:usr.id
    };
	var key_auth_delete_callback = function(result){
        		var ret = result.status;
        if(ret == "true"){

            setTimeout(function() {
                show_alarm_module(false, "删除成功！", null);
            },500);
			get_domain_auth_list($("#KeyAuthPoint_choice").val());
        }else{

            setTimeout(function() {
                show_alarm_module(true, "修改失败！" + result.msg, null);
            },500);
        }
	};
	JQ_get(request_head,map,key_auth_delete_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
		var ret = result.status;
        if(ret == "true"){
            show_alarm_module(false,"删除成功！");
			get_domain_auth_list($("#KeyAuthPoint_choice").val());
        }else{
            show_alarm_module(true,"修改失败！"+result.msg);
        }
        

    });*/
}
function show_auth_new_module(projcode,domainid,domainname){
	$("#newKeyAuthCommit").attr("DomainId",domainid);
	$("#NewKeyAuthDomain_Input").val(domainname);
	update_new_key_auth_key_choice(projcode);
	$("NewKeyAuthEndTime_Input").val("");

    modal_middle($('#newKeyAuthModal'));

    $('#newKeyAuthModal').modal('show');
}
function new_key_auth(auth){
    var map={
        action:"KeyAuthNew",
        body:auth,
        type:"mod",
        user:usr.id
    };
	var new_key_auth_callback = function(result){
        var ret = result.status;
        if(ret == "true"){
            setTimeout(function() {
                show_alarm_module(false,"新建成功！",null);
                get_domain_auth_list($("#KeyAuthPoint_choice").val());

            },500);
        }else{
            setTimeout(function() {
                show_alarm_module(true, "新建失败！" + result.msg, null);
            },500);
        }
	};
	JQ_get(request_head,map,new_key_auth_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "true"){
            show_alarm_module(false,"新建成功！");
            get_domain_auth_list($("#KeyAuthPoint_choice").val());
        }else{
            show_alarm_module(true,"新建失败！"+result.msg);
        }

    });*/
}
function click_new_key_auch_commit(){
    var DomainId= $("#newKeyAuthCommit").attr("DomainId");
    var KeyId=$("#NewKeyAuthKey_choice").val();
    var authway = $("#NewKeyAuthEndTime_Input").val();
    if(authway === "") authway = "always";
    var map = {
        DomainId: DomainId,
        KeyId:KeyId,
        Authway:authway
    };
    $('#newKeyAuthModal').modal('hide');
    new_key_auth(map);
}
function check_key_auth_date(date){
    if(date ==="" )return date;
    else{
        var d = new Date(date.replace(/-/g,"/"));
		if(d.getdate == "Invalid Date"){
			return "";
		}
		var today = new Date();
		if(d.getTime()<today.getTime()){
			return "";
		}
		return d.Format("yyyy-MM-dd");
    }
}
function show_key_grant_module(keyid,userid,oldname,newname){
	$("#KeyGrantCommit").attr("KeyId",keyid);
	$("#KeyGrantCommit").attr("UserId",userid);
	$("#KeyGrantAlertModalLabel").empty();
    $("#KeyGrantAlertModalLabel").append("确定转移 "+oldname+"->"+newname);

    modal_middle($('#KeyGrantAlarm'));

    $('#KeyGrantAlarm').modal('show');
}
function click_key_grant_commit(keyid,userid){
	var body={
		KeyCode:keyid,
		UserId:userid
	};

	var map={
        action:"KeyGrant",
        body:body,
        type:"mod",
        user:usr.id
    };
	var click_key_grant_commit_callback = function(result){
        var ret = result.status;
        if(ret == "true"){

            setTimeout(function() {
                show_alarm_module(false, "变更成功！", null);
                get_domain_auth_list($("#KeyAuthPoint_choice").val());
                get_proj_key_list();
                window.setTimeout(build_key_auth_proj_choice, wait_time_middle);
            },500);
        }else{
            setTimeout(function() {
                show_alarm_module(true, "变更失败！" + result.msg, null);
            },500);
        }
	};
	JQ_get(request_head,map,click_key_grant_commit_callback);
	/*
    jQuery.get(request_head, map, function (data) {
        log(data);
        var result=JSON.parse(data);
        var ret = result.status;
        if(ret == "true"){
            show_alarm_module(false,"变更成功！");
            get_domain_auth_list($("#KeyAuthPoint_choice").val());
			get_proj_key_list();
            window.setTimeout(build_key_auth_proj_choice, wait_time_middle);
        }else{
            show_alarm_module(true,"变更失败！"+result.msg);
        }

    });*/
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
function thread_sync(sync_key,thread_number,callback){
    var Intervalhandle = 0;
    var pending = function(Intervalhandle,callback){
        if(sync_key!=threadnumber){
            return;
        }else{
            sync_key=0;
            clearInterval(Intervalhandle);
            callback();
        }
    };
    Intervalhandle= setInterval(function() {
        pending(Intervalhandle, callback);
    }, 500);
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
        //console.log("hide.bs.modal");
        var countevent = 0 ;
        $('#UserAlarm').on('hide.bs.modal',function(){ if(++countevent==1){setTimeout(callback, 500);}});
    }
}

function getLocation()
{
    console.log("正在获取位置！");
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("无法获得当前位置！");
    }
}
function showPosition(position)
{
    console.log("Latitude: " + position.coords.latitude +
        "Longitude: " + position.coords.longitude);
    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;
}

function parameter_initialize(){
    parameter_initial = true;
    if(project_list === null)get_project_list();
    get_VersionInformation();
    draw_parameter_page();
    //get_version_list();
    //window.setTimeout(draw_parameter_page, wait_time_middle);

}
function draw_parameter_page(){
    $("#UpdateProj_choice").empty();
    //$("#UpdateVersion_choice").empty();
    var txt = "";
    var i;
    if(project_list === null) project_list = [];
    for( i=0;i<project_list.length;i++){
        txt = txt +"<option value="+project_list[i].id+">"+project_list[i].name+"</option>";
    }
    $("#UpdateProj_choice").append(txt);
    get_ProjUpdateStrategy($("#UpdateProj_choice").val());
    $("#UpdateProj_choice").change(function(){
        get_ProjUpdateStrategy($(this).val());
    });
    $("#UpdateLineChange_button").on('click',function(){
        click_ProjVersionStrategyChange_commit($("#UpdateProj_choice").val(),$("#UpdateLine_choice").val());
    });
    $("#FlashProjUpdatedetail_button").on('click',function(){
        query_ProjUpdateStrategyList($("#UpdateProj_choice").val());
    });
    $("#ProjAutoUpdate_button").on('click',function(){
        click_ProjUpdateStrategyChange_commit($("#UpdateProj_choice").val(),"true");
    });
    $("#ProjNotUpdate_button").on('click',function(){
        click_ProjUpdateStrategyChange_commit($("#UpdateProj_choice").val(),"false");
    });
    $("#UpdateProj_choice").change(function(){
        query_ProjUpdateStrategyList($("#UpdateProj_choice").val());
    });
    query_ProjUpdateStrategyList($("#UpdateProj_choice").val());
}
function get_VersionInformation(){
    var map={
        action:"VersionInformation",
        type:"query",
        user:usr.id
    };
    var get_VersionInformation_callback = function(result){
        var ret = result.status;
        if(ret == "true"){
            var info = result.ret;
            var text = "<dl ><dt>版本升级详细信息：</dt><p></p>";
            for(var i=0;i<info.length;i++){
                text = text+"<dd>"+info[i]+"</dd><p></p>";
            }
            text = text+"</dl>";
            $("#Version_detail").empty();
            $("#Version_detail").append(text);
        }else{
            setTimeout(function() {
                show_alarm_module(true, "无法获取版本详细说明！" + result.msg, null);
            },500);
        }
    };
    JQ_get(request_head,map,get_VersionInformation_callback);
}
function get_ProjUpdateStrategy(ProjCode){
    var body={
        ProjCode:ProjCode
    };
    var map={
        action:"GetProjUpdateStrategy",
        body:body,
        type:"query",
        user:usr.id
    };
    var get_ProjUpdateStrategy_callback = function(result){
        var ret = result.status;
        if(ret == "true"){
            var versionline = result.ret.VersionLine;
            $("#UpdateLine_choice").val(versionline);
        }else{
            setTimeout(function() {
                show_alarm_module(true, "无法获取项目处于版本线" + result.msg, null);
            },500);
        }
    };
    JQ_get(request_head,map,get_ProjUpdateStrategy_callback);
}
function click_ProjVersionStrategyChange_commit(ProjCode,VersionLine){
    var body={
        ProjCode:ProjCode,
        UpdateLine:VersionLine
    };
    var map={
        action:"ProjVersionStrategyChange",
        body:body,
        type:"query",
        user:usr.id
    };
    var ProjVersionStrategyChange_callback = function(result){
        var ret = result.status;
        if(ret == "true"){
            setTimeout(function() {
                show_alarm_module(false, "版本线更新成功！" , null);
            },500);
        }else{
            setTimeout(function() {
                show_alarm_module(true, "版本线更新失败" + result.msg, null);
            },500);
        }
    };
    JQ_get(request_head,map,ProjVersionStrategyChange_callback);
}
function click_PointUpdateStrategyChange_commit(StatCode,ifupdate,button){
    var body={
        StatCode:StatCode,
        AutoUpdate:ifupdate
    };
    var map={
        action:"PointUpdateStrategyChange",
        body:body,
        type:"query",
        user:usr.id
    };
    var PointUpdateStrategyChange_callback = function(result,button){
        var ret = result.status;
        if(ret == "true"){
            //console.log("click");

            button.empty();
            if(ifupdate === "true"){
                button.append("<em class='glyphicon glyphicon-ok' aria-hidden='true' ></em>");
                button.attr("AutoUpdate","Y");
            }else{
                button.append("<em class='glyphicon glyphicon-remove' aria-hidden='true' ></em>");
                button.attr("AutoUpdate","N");
            }
            /*setTimeout(function() {
                show_alarm_module(false, "监测点自动更新设置成功！请手动刷新" , null);
            },500);*/
        }else{
            setTimeout(function() {
                show_alarm_module(true, "监测点自动更新设置失败" + result.msg, null);
            },500);
        }
    };
    JQ_get_with_para(request_head,map,PointUpdateStrategyChange_callback,button);
}
function click_ProjUpdateStrategyChange_commit(ProjCode,ifupdate){
    var body={
        ProjCode:ProjCode,
        AutoUpdate:ifupdate
    };
    var map={
        action:"ProjUpdateStrategyChange",
        body:body,
        type:"query",
        user:usr.id
    };
    var ProjUpdateStrategyChange_callback = function(result){
        var ret = result.status;
        if(ret == "true"){
            setTimeout(function() {
                show_alarm_module(false, "批量自动更新设置成功！请手动刷新" , null);
            },500);
        }else{
            setTimeout(function() {
                show_alarm_module(true, "批量自动更新设置失败" + result.msg, null);
            },500);
        }
    };
    JQ_get(request_head,map,ProjUpdateStrategyChange_callback);
}
function query_ProjUpdateStrategyList(ProjCode){
    var body={
        ProjCode:ProjCode
    };
    var map={
        action:"ProjUpdateStrategyList",
        body:body,
        type:"query",
        user:usr.id
    };
    var ProjUpdateStrategyList_callback= function(result){
        //log(data);
        //var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        var Last_update_date=(new Date()).Format("yyyy-MM-dd_hhmmss");
        $("#UpdateFlashTime").empty();
        $("#UpdateFlashTime").append("最后刷新时间："+Last_update_date);
        var ColumnName = result.ret.ColumnName;
        var TableData = result.ret.TableData;
        var txt = "<thead> <tr>";
        var i;
        for( i=0;i<ColumnName.length;i++){
            txt = txt +"<th>"+ColumnName[i]+"</th>";
        }
        //txt = txt +"<th></th></tr></thead>";
        txt = txt +"</tr></thead>";
        txt = txt +"<tbody>";
        for( i=0;i<TableData.length;i++){
            txt = txt +"<tr>";
            //txt = txt +"<td><ul class='pagination'> <li><a href='#' class = 'video_btn' StateCode='"+TableData[i][0]+"' ><em class='glyphicon glyphicon-play ' aria-hidden='true' ></em></a> </li></ul></td>";
            //console.log("StateCode="+TableData[i][0]);
            for(var j=0;j<TableData[i].length;j++){
                if(j!=1){txt = txt +"<td>"+TableData[i][j]+"</td>";}
                else{
                    var icontag = "glyphicon glyphicon-remove";
                    if(TableData[i][1] ==="Y"){
                        icontag = "glyphicon glyphicon-ok";
                    }
                    txt = txt +"<td><button type='button' class='btn btn-default update_change_btn' StateCode='"+TableData[i][0]+"' AutoUpdate= '"+TableData[i][1]+"'><em class='"+icontag+"' aria-hidden='true' ></em></button></td>";

                }

            }
            txt = txt +"</tr>";
        }
        txt = txt+"</tbody>";
        $("#ProjUpdateDetailTable").empty();
        $("#ProjUpdateDetailTable").append(txt);
        if(if_update_table_initialize) $("#ProjUpdateDetailTable").DataTable().destroy();

        //console.log(monitor_map_list);

        var show_table  = $("#ProjUpdateDetailTable").DataTable( {
            //dom: 'T<"clear">lfrtip',
            "scrollY": false,
            "scrollCollapse": true,

            "scrollX": true,
            "searching": false,
            "autoWidth": true,
            "lengthChange":false,
            //bSort: false,
            //aoColumns: [ { sWidth: "45%" }, { sWidth: "45%" }, { sWidth: "10%", bSearchable: false, bSortable: false } ],
            dom: 'Bfrtip',
            buttons: [
                {
                    text: '自动升级',
                    action:function (e,dt,node,config){
                        click_ProjUpdateStrategyChange_commit($("#UpdateProj_choice").val(),"true");
                    }
                },
                {
                    text: '手动升级',
                    action:function (e,dt,node,config){
                        click_ProjUpdateStrategyChange_commit($("#UpdateProj_choice").val(),"false");
                    }
                },
                {
                    extend: 'excel',
                    text: '导出到excel',
                    filename: "MonitorData"+Last_update_date
                }
            ]

        } );
        if_update_table_initialize = true;
        update_change_btn_click = function(){
            var statcode = $(this).attr('StateCode');
            if(statcode === undefined ||statcode === null) return;
            var ifup = $(this).attr('AutoUpdate');
            var ifupdate = "true";
            if(ifup ==="Y"){
                ifupdate = "false";
            }
            click_PointUpdateStrategyChange_commit(statcode,ifupdate,$(this));
        };
        $(".update_change_btn").on('click',update_change_btn_click);
        /*
        $("#ProjUpdateDetailTable_paginate").on('click',function(){
            $(".update_change_btn").on('click',update_change_btn_click);
        });*/

        $("#ProjUpdateDetailTable").on('draw.dt',function(){
            $(".update_change_btn").unbind();
            $(".update_change_btn").on('click',update_change_btn_click);
        });
    };
    JQ_get(request_head,map,ProjUpdateStrategyList_callback);
}


function query_warning_handle_list(){
    if(Warning_Handle_table_initialized !== true) return;
    var map={
        action:"GetWarningHandleListTable",
        type:"query",
        user:usr.id
    };
    var GetWarningHandleListTable_callback= function(result){
        //log(data);
        //var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        var Last_update_date=(new Date()).Format("yyyy-MM-dd_hhmmss");
        $("#WarningHandleFlashTime").empty();
        $("#WarningHandleFlashTime").append("最后刷新时间："+Last_update_date);
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
            txt = txt +"<tr>";
			if(TableData[i][1] == "N"){
				txt = txt +"<td><ul class='pagination'> <li><a href='#' class = 'alarm_action_btn' StatCode='"+TableData[i][0]+"'>处理</a> </li></ul></td>";
			}else{
				txt = txt +"<td><ul class='pagination'> <li><a href='#' class = 'alarm_close_btn' StatCode='"+TableData[i][0]+"'>关闭</a> </li></ul></td>";
            
			}
            //txt = txt +"<td><button type='button' class='btn btn-default lock_btn' StateCode='"+TableData[i][0]+"' ><em class='glyphicon glyphicon-lock ' aria-hidden='true' ></em></button></td><td><button type='button' class='btn btn-default video_btn' StateCode='"+TableData[i][0]+"' ><em class='glyphicon glyphicon-play ' aria-hidden='true' ></em></button></td>";
            //console.log("StateCode="+TableData[i][0]);
            for(var j=0;j<TableData[i].length;j++){
                txt = txt +"<td>"+TableData[i][j]+"</td>";
            }
            //txt = txt + "<td><button type='button' class='btn btn-default video_btn' StateCode='"+TableData[i][0]+"' >视频</button></td>";
            txt = txt +"</tr>";
        }
        txt = txt+"</tbody>";
        $("#WarningHandleQueryTable").empty();
        $("#WarningHandleQueryTable").append(txt);
        if(if_Warning_Handle_table_initialize) $("#WarningHandleQueryTable").DataTable().destroy();

        //console.log(monitor_map_list);

        var show_table  = $("#WarningHandleQueryTable").DataTable( {
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
            }/*,
            buttons: [
                {
                    text: 'testbutton',
                    action:function (e,dt,node,config){
                        console.log("test button click");
                    }
                },
                {
                    extend: 'excel',
                    text: '导出到excel',
                    filename: "AlarmData"+Last_update_date
                }
            ]*/

        } );
        if_Warning_Handle_table_initialize = true;
		alarm_action_btn_click = function(){
            var statcode = $(this).attr('StatCode');
            $("#AlarmHandleUpdateCommit").attr("StatCode",statcode);
			var alarm_statname = get_point_name(statcode);
			$("#AlarmStatName_Input").val(alarm_statname);
            modal_middle($('#AlarmHandleProcess'));
			$('#AlarmHandleProcess').modal('show');
        };
        $(".alarm_action_btn").on('click',alarm_action_btn_click);
		alarm_close_btn_click = function(){
            var statcode = $(this).attr('StatCode');
			handle_Alarm_close(statcode);
        };
        $(".alarm_close_btn").on('click',alarm_close_btn_click);
        /*
        $("#WarningHandleQueryTable_paginate").on('click',function(){
            $(".alarm_action_btn").on('click',alarm_action_btn_click);
            $(".alarm_close_btn").on('click',alarm_close_btn_click);
        });*/

        $("#WarningHandleQueryTable").on('draw.dt',function(){
            $(".alarm_action_btn").unbind();
            $(".alarm_close_btn").unbind();
            $(".alarm_action_btn").on('click',alarm_action_btn_click);
            $(".alarm_close_btn").on('click',alarm_close_btn_click);
        });
    };
    JQ_get(request_head,map,GetWarningHandleListTable_callback);

}
function handle_Alarm_process(StatCode,Mobile,Action){
    var body={
        StatCode:StatCode,
        Mobile:Mobile,
        Action:Action
    };
    var map={
        action:"AlarmHandle",
        body:body,
        type:"mod",
        user:usr.id
    };
    var HandleAlarmProcess_callback = function(result){
        var ret = result.status;
        if(ret == "true"){
            setTimeout(function() {
                show_alarm_module(false, "工单下发成功" , null);
                query_warning_handle_list();
            },500);
        }else{
            setTimeout(function() {
                show_alarm_module(true, "工单下发失败" + result.msg, null);
            },500);
        }
    };
    JQ_get(request_head,map,HandleAlarmProcess_callback);
}
function handle_Alarm_close(StatCode){
    var body={
        StatCode:StatCode
    };
    var map={
        action:"AlarmClose",
        body:body,
        type:"mod",
        user:usr.id
    };
    var HandleAlarmClose_callback = function(result){
        var ret = result.status;
        if(ret == "true"){
            setTimeout(function() {
                show_alarm_module(false, "告警关闭成功" , null);
                query_warning_handle_list();
            },500);
        }else{
            setTimeout(function() {
                show_alarm_module(true, "告警关闭失败" + result.msg, null);
            },500);
        }
    };
    JQ_get(request_head,map,HandleAlarmClose_callback);
}
function AlarmHandleUpdateCommit_button_commit(){
	var statcode = $("#AlarmHandleUpdateCommit").attr("StatCode");
	var mobile = $("#AlarmHandleMobile_Input").val();
	var action = $("#AlarmHandleAction_Input").val();
	if(mobile===""||action ==="") return;
	handle_Alarm_process(statcode,mobile,action);
	$('#AlarmHandleProcess').modal('hide');
}

function query_RTU_list(){
    if(RTU_Manage_table_initialized !== true) return;
    var map={
        action:"GetRTUTable",
        type:"query",
        user:usr.id
    };
    var GetRTUTable_callback= function(result){
        //log(data);
        //var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        var Last_update_date=(new Date()).Format("yyyy-MM-dd_hhmmss");
        $("#RTUFlashTime").empty();
        $("#RTUFlashTime").append("最后刷新时间："+Last_update_date);
        var ColumnName = result.ret.ColumnName;
        var TableData = result.ret.TableData;
        //var txt = "<thead> <tr><th></th><th></th>";
        var txt = "<thead> <tr>";
        var i;
        for( i=0;i<ColumnName.length;i++){
            txt = txt +"<th>"+ColumnName[i]+"</th>";
        }
        //txt = txt +"<th></th></tr></thead>";
        txt = txt +"</tr></thead>";
        txt = txt +"<tbody>";
        for( i=0;i<TableData.length;i++){
            txt = txt +"<tr>";
            //txt = txt +"<td><button type='button' class='btn btn-default lock_btn' StateCode='"+TableData[i][0]+"' ><em class='glyphicon glyphicon-lock ' aria-hidden='true' ></em></button></td><td><button type='button' class='btn btn-default video_btn' StateCode='"+TableData[i][0]+"' ><em class='glyphicon glyphicon-play ' aria-hidden='true' ></em></button></td>";
            //console.log("StateCode="+TableData[i][0]);
            for(var j=0;j<TableData[i].length;j++){
                txt = txt +"<td>"+TableData[i][j]+"</td>";
            }
            //txt = txt + "<td><button type='button' class='btn btn-default video_btn' StateCode='"+TableData[i][0]+"' >视频</button></td>";
            txt = txt +"</tr>";
        }
        txt = txt+"</tbody>";
        $("#RTUQueryTable").empty();
        $("#RTUQueryTable").append(txt);
        if(if_RTU_Manage_table_initialize) $("#RTUQueryTable").DataTable().destroy();

        //console.log(monitor_map_list);

        var show_table  = $("#RTUQueryTable").DataTable( {
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
        if_RTU_Manage_table_initialize = true;
    };
    JQ_get(request_head,map,GetRTUTable_callback);

}
function query_OTDR_list(){
    if(OTDR_Manage_table_initialized !== true) return;
    var map={
        action:"GetOTDRTable",
        type:"query",
        user:usr.id
    };
    var GetOTDRTable_callback= function(result){
        //log(data);
        //var result=JSON.parse(data);
        if(result.status == "false"){
            show_expiredModule();
            return;
        }
        var Last_update_date=(new Date()).Format("yyyy-MM-dd_hhmmss");
        $("#OTDRFlashTime").empty();
        $("#OTDRFlashTime").append("最后刷新时间："+Last_update_date);
        var ColumnName = result.ret.ColumnName;
        var TableData = result.ret.TableData;
        //var txt = "<thead> <tr><th></th><th></th>";
        var txt = "<thead> <tr>";
        var i;
        for( i=0;i<ColumnName.length;i++){
            txt = txt +"<th>"+ColumnName[i]+"</th>";
        }
        //txt = txt +"<th></th></tr></thead>";
        txt = txt +"</tr></thead>";
        txt = txt +"<tbody>";
        for( i=0;i<TableData.length;i++){
            txt = txt +"<tr>";
            //txt = txt +"<td><button type='button' class='btn btn-default lock_btn' StateCode='"+TableData[i][0]+"' ><em class='glyphicon glyphicon-lock ' aria-hidden='true' ></em></button></td><td><button type='button' class='btn btn-default video_btn' StateCode='"+TableData[i][0]+"' ><em class='glyphicon glyphicon-play ' aria-hidden='true' ></em></button></td>";
            //console.log("StateCode="+TableData[i][0]);
            for(var j=0;j<TableData[i].length;j++){
                txt = txt +"<td>"+TableData[i][j]+"</td>";
            }
            //txt = txt + "<td><button type='button' class='btn btn-default video_btn' StateCode='"+TableData[i][0]+"' >视频</button></td>";
            txt = txt +"</tr>";
        }
        txt = txt+"</tbody>";
        $("#OTDRQueryTable").empty();
        $("#OTDRQueryTable").append(txt);
        if(OTDR_Manage_table_initialized) $("#OTDRQueryTable").DataTable().destroy();

        //console.log(monitor_map_list);

        var show_table  = $("#OTDRQueryTable").DataTable( {
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
        OTDR_Manage_table_initialized = true;
    };
    JQ_get(request_head,map,GetOTDRTable_callback);

}
function get_pm(city_name){
    var cityname = city_name;
    var url = "http://api.map.baidu.com/telematics/v3/weather?location="+cityname+"&output=json&ak=2Pcn24FAWGTcyW4jsC8O38IyPd0pDZYX";
    $.ajax({
        url: url,
        //dataType: "script",
        scriptCharset: "gbk",
        dataType: 'jsonp',
        crossDomain: true,
        success: function (data) {
            weather_info = cityname+"今日天气："+data.results[0].weather_data[0].weather+" 气温："+data.results[0].weather_data[0].temperature+" 颗粒物："+data.results[0].pm25;
            $("#weather_label").text(weather_info+"    ");
        }
    });
}
function getfavoritelist(){
    var map={
        action:"Favourite_list",
        type:"query",
        user:usr.id
    };
    var get_favorite_list_callback = function(result){
        var ret = result.status;
        if(ret == "true"){
            usr_faverate_list = result.ret;
            //console.log("usr_faverate_list:"+usr_faverate_list);
            if(usr_faverate_list.length>0){
                if(if_online){
                    get_city(usr_faverate_list[0].Latitude,usr_faverate_list[0].Longitude);

                }
            }
            build_fast_guild();
        }else {
            show_alarm_module(true, "请重新登录！" + result.msg, null);
        }
    };
    JQ_get(request_head,map,get_favorite_list_callback);
}

function favorateCount(StatCode){
    var body={
        StatCode:StatCode
    };
    var map={
        action:"Favourite_count",
        body:body,
        type:"query",
        user:usr.id
    };
    var favorite_count_callback = function(result){
        var ret = result.status;
        if(ret == "true"){

        }else {
            show_alarm_module(true, "请重新登录！" + result.msg, null);
        }
    };
    JQ_get(request_head,map,favorite_count_callback);
}
function build_fast_guild(){
    $("#fast_guild").empty();
	console.log("usr_faverate_list:"+usr_faverate_list);
	//setTimeout(mp_monitor,wait_time_middle);
    txt ="<thead> <tr> <th>常用站点 </th> </tr> </thead> <tbody >";
    for(var i=0;i<usr_faverate_list.length;i++){
        txt = txt + "<tr> <td class='favouratelist' Latitude="+usr_faverate_list[i].Latitude+" Longitude="+usr_faverate_list[i].Longitude+" StatCode="+usr_faverate_list[i].StatCode+" StatName="+usr_faverate_list[i].StatName+">"+ usr_faverate_list[i].StatName+"</td> </tr>";
    }
    txt = txt+ "</tbody>";
    $("#fast_guild").append(txt);
    //map_MPMonitor.centerAndZoom(new BMap.Point(usr_faverate_list[0].Longitude,usr_faverate_list[0].Latitude),15);
    $(".favouratelist").on("click",function(){
        var fLongitude = $(this).attr("Longitude");
        var fLatitude = $(this).attr("Latitude");
        map_MPMonitor.centerAndZoom(new BMap.Point(fLongitude,fLatitude),15);
        var title = $(this).attr("StatCode")+":"+$(this).attr("StatName");
        var marker = find_marker(title);
        if(marker !== null) {
            get_select_monitor(title);
            //console.log("Selected:"+monitor_selected.StatName);
            var sContent = $(this).attr("StatCode") + ":" + $(this).attr("StatName");
            var infoWindow = new BMap.InfoWindow(sContent, {offset: new BMap.Size(0, -23)});
            infoWindow.setWidth(600);
            monitor_map_handle = infoWindow;
            get_monitor_warning_on_map();
            marker.openInfoWindow(infoWindow);
            infoWindow.addEventListener("close", function () {
                if (monitor_map_handle == this) monitor_map_handle = null;
            });
        }
    });
}
function find_marker(title){
    for(var i=0;i<mark_MPMonitor_List.length;i++){
        if(mark_MPMonitor_List[i].getTitle() === title){
            return mark_MPMonitor_List[i];
        }
    }
    return null;
}
function get_city(Latitude,Longitude){
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(Longitude, Latitude);
    var gc = new BMap.Geocoder();
    gc.getLocation(point, function(rs) {
        var addComp = rs.addressComponents;
        usr_favorate_city = addComp.city;
        //console.log("favorate city is "+usr_favorate_city);
        get_pm(usr_favorate_city);
    });
}

function getopenpicture(openid){
    var body={
        openid:openid
    };
    var map={
        action:"GetOpenImg",
        body:body,
        type:"query",
        user:usr.id
    };
    var get_open_picture_callback = function(result){
        var ret = result.status;
        if(ret == "true"){
            if(result.ret.ifpicture == "true"){
                var picture = result.ret.picture;
                //console.log("picture="+picture);
                //window.open("http://"+window.location.host+"/"+picture,'监控照片',"height=240, width=320, top=0, left=400,toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
                window.open("http://"+window.location.host+"/"+show_image_url+"?image="+picture+"#",'监控照片',"height=620, width=640, top=0, left=400,toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");

            }else{
                show_alarm_module(false, "本次开锁未能捕捉到照片", null);
            }
        }else {
            show_alarm_module(true, "请重新登录！" + result.msg, null);
        }
    };
    JQ_get(request_head,map,get_open_picture_callback);
}

function getselectedstationactived(){

    var map={
        action:"GetStationActiveInfo",
        body:{
            StatCode:point_selected.StatCode
        },
        type:"query",
        user:usr.id
    };
    var getselectedstationactived_callback = function(result){
        var ret = result.status;
        if(ret == "true"){
            if(result.ret.actived == "true"){

                $("#selectpointactivebutton").attr("disabled",true);
                $("#selectpointactivebutton").text("已激活");
            }else{
                $("#selectpointactivebutton").attr("disabled",false);
                $("#selectpointactivebutton").text("激活");
            }

        }else {
            show_alarm_module(true, "请重新登录！" + result.msg, null);
        }
    };
    JQ_get(request_head,map,getselectedstationactived_callback);
}

function selectedstationactive(){

    var map={
        action:"StationActive",
        body:{
            StatCode:point_selected.StatCode
        },
        type:"mod",
        user:usr.id
    };
    var selectedstationactive_callback = function(result){
        var ret = result.status;
        if(ret == "true"){
            setTimeout(function() {
                show_alarm_module(false, "激活成功" , null);
                point_intialize(0);
            },500);
        }else{
            setTimeout(function() {
                show_alarm_module(true, "激活失败" + result.msg, null);
            },500);
        }
    };
    JQ_get(request_head,map,selectedstationactive_callback);
}