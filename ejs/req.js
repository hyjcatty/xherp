
    function database(data){
    var key = data.action;
    switch(key){
        case "login":
            var usr = data.name;
            var usrinfo;
            if(usr == "admin"){
                usrinfo={
                    status:"true",
                    text:"login successfully",
                    key: "1234567",
                    admin: "true"
                };
            }else if(usr=="user"){
                usrinfo={
                    status:"true",
                    text:"login successfully",
                    key: "7654321",
                    admin: "false"
                };
            }else if(usr=="黄"){
            usrinfo={
                status:"true",
                text:"login successfully",
                key: "1111111",
                admin: "false"
            };
            }else{
                usrinfo={
                    status:"false",
                    text:"No this user or password error",
                    key: "",
                    admin: ""
                };
            }
            return JSON.stringify(usrinfo);
        case "UserInfo":
            var session = data.session;
            var user=null;
            if(session == "1234567"){
                 user = {
                    id:1234567,
                    name:"admin",
                    admin:"true",
                    city: "上海"
                }
            }
            if(session == "7654321"){
                 user = {
                    id:7654321,
                    name:"user",
                    admin:"false",
                    city: "上海"
                }
            }
            if(session == "1111111"){
                 user = {
                    id:1111111,
                    name:"黄",
                    admin:"false",
                    city: "上海"
                }
            }
            var retstatus = true;
            if(null == user) retstatus = false;
            var retval={
                status:retstatus,
                ret: user
            };
            return JSON.stringify(retval);
        case "ProjectPGList":
            var proj_pg_list = new Array();
            for(var i=0;i<14;i++){
                var temp = {
                    id: (i),
                    name: "项目名"+i
                }
                proj_pg_list.push(temp);
            }
            for(var i=0;i<4;i++){
                var temp = {
                    id: "x"+(i),
                    name: "项目组名"+i
                }
                proj_pg_list.push(temp);
            }
            var retval={
                status:"true",
                ret: proj_pg_list
            };
            return JSON.stringify(retval);
        case "ProjectList":
            var projlist = new Array();
            for(var i=0;i<14;i++){
                var temp = {
                    id: (i),
                    name: "项目名"+i
                }
                projlist.push(temp);
            }
            var retval={
                status:"true",
                ret: projlist
            };
            return JSON.stringify(retval);
        case "UserNew":
            var retval={
                status:"true",
                msg:""
            };
            return JSON.stringify(retval);
        case "UserMod":
            var retval={
                status:"true",
                msg:""
            };
            return JSON.stringify(retval);
        case "UserDel":
            var retval={
                status:"true",
                msg:""
            };
            return JSON.stringify(retval);
        case "UserTable":
            var total = 94;
            var query_length = parseInt(data.length);
            var start = parseInt(data.startseq);
            if(query_length> total-start)
            {query_length = total-start;}
            var usertable = new Array();
            console.log("query start:"+start +"query length:"+query_length);
            for(var i=0;i<query_length;i++){
                var type="false";
                if(0==i%7) type= "true";
                var temp = {
                    id: (start+(i+1)),
                    name: "username"+(start+i),
                    nickname: "用户"+(start+i),
                    mobile: "139139"+(start+i),
                    mail: "139139"+(start+i)+"@cmcc.com",
                    type: type,
                    date: "2016-01-01 12:12:12",
                    memo: "备注数据"+(start+i)
                }
                usertable.push(temp);
            }
            var retval={
                status:"true",
                start: start,
                total: total,
                length:query_length,
                ret: usertable
            };
            return JSON.stringify(retval);
        case "UserProj":
            var userproj = new Array();
            for(var i=0;i<3;i++){
                var temp = {
                    id: (i+1),
                    name: "项目名"+i
                }
                userproj.push(temp);
            }
            var retval={
                status:"true",
                ret: userproj
            };
            return JSON.stringify(retval);
        case "PGTable":
            var total = 14;
            var query_length = parseInt(data.length);
            var start = parseInt(data.startseq);
            if(query_length> total-start) {query_length = total-start;}
            var pgtable = new Array();
            console.log("query start:"+start +"query length:"+query_length);
            for(var i=0;i<query_length;i++){
                var temp = {
                    PGCode: (start+(i+1)),
                    PGName:"项目组"+(start+i),
                    ChargeMan:"用户"+(start+i),
                    Telephone:"139139"+(start+i),
                    Department:"单位"+(start+i),
                    Address:"地址"+(start+i),
                    Stage:"备注"+(start+i)
                };
                pgtable.push(temp);
            }
            var retval={
                status:"true",
                start: start,
                total: total,
                length:query_length,
                ret: pgtable
            };
            return JSON.stringify(retval);
        case "PGNew":
            var retval={
                status:"true",
                msg:""
            };
            return JSON.stringify(retval);
        case "PGMod":
            var retval={
                status:"true",
                msg:""
            };
            return JSON.stringify(retval);
        case "PGDel":
            var retval={
                status:"true",
                msg:""
            };
            return JSON.stringify(retval);
        case "PGProj":
            var PGProj = new Array();
            for(var i=0;i<4;i++){
                var temp = {
                    id: (i+1),
                    name: "项目"+i
                }
                PGProj.push(temp);
            }
            var retval={
                status:"true",
                ret: PGProj
            };
            return JSON.stringify(retval);
        case "ProjTable":
            var total = 15;
            var query_length = parseInt(data.length);
            var start = parseInt(data.startseq);
            if(query_length> total-start) {query_length = total-start;}
            var projtable = new Array();
            console.log("query start:"+start +"query length:"+query_length);
            for(var i=0;i<query_length;i++){
                var temp = {
                    ProjCode: (start+(i+1)),
                    ProjName:"项目"+(start+i),
                    ChargeMan:"用户"+(start+i),
                    Telephone:"139139"+(start+i),
                    Department:"单位"+(start+i),
                    Address:"地址"+(start+i),
                    ProStartTime:"2016-01-01",
                    Stage:"备注"+(start+i)
                };
                projtable.push(temp);
            }
            var retval={
                status:"true",
                start: start,
                total: total,
                length:query_length,
                ret: projtable
            };
            return JSON.stringify(retval);
        case "ProjNew":
            var retval={
                status:"true",
                msg:""
            };
            return JSON.stringify(retval);
        case "ProjMod":
            var retval={
                status:"true",
                msg:""
            };
            return JSON.stringify(retval);
        case "ProjDel":
            var retval={
                status:"true",
                msg:""
            };
            return JSON.stringify(retval);
        case "ProjPoint":

            var ProjPoint = new Array();
            for(var i=0;i<40;i++){
                var projcode = (i)%14;
                var temp = {
                    id: i+1,
                    name: "观测点"+(i+1),
                    ProjCode: projcode
                }
                ProjPoint.push(temp);
            }
            var retval={
                status:"true",
                ret: ProjPoint
            };
            return JSON.stringify(retval);
        case "PointProj":
            var ProjPoint = new Array();
            for(var i=0;i<4;i++){
                var projcode = (i)%14;
                var temp = {
                    id: i+1,
                    name: "观测点"+(i+1),
                    ProjCode: projcode
                }
                ProjPoint.push(temp);
            }
            var retval={
                status:"true",
                ret: ProjPoint
            };
            return JSON.stringify(retval);
        case "PointTable":
            var total = 40;
            var query_length = parseInt(data.length);
            var start = parseInt(data.startseq);
            if(query_length> total-start) {query_length = total-start;}
            var projtable = new Array();
            console.log("query start:"+start +"query length:"+query_length);

            for(var i=0;i<query_length;i++){
                var projcode = (start+i)%14;
                var temp = {
                    StatCode: (start+(i+1)),
                    StatName:"测量点"+(start+i),
                    ProjCode: projcode,
                    ChargeMan:"用户"+(start+i),
                    Telephone:"139139"+(start+i),
                    Longitude:"121.0000",
                    Latitude:"31.0000",
                    Department:"单位"+(start+i),
                    Address:"地址"+(start+i),
                    Country:"区县"+(start+i),
                    Street:"街镇"+(start+i),
                    Square:"10000",
                    ProStartTime:"2016-01-01",
                    Stage:"备注"+(start+i)
                };
                projtable.push(temp);
            }
            var retval={
                status:"true",
                start: start,
                total: total,
                length:query_length,
                ret: projtable
            };
            return JSON.stringify(retval);
        case "PointDetail":
            var StatCode = data.StatCode;
            var projcode = (parseInt(StatCode)-1)%14;
                var temp = {
                    StatCode: StatCode,
                    StatName:"测量点"+(StatCode),
                    ProjCode: projcode,
                    ChargeMan:"用户"+(StatCode),
                    Telephone:"139139"+(StatCode),
                    Longitude:"121.0000",
                    Latitude:"31.0000",
                    Department:"单位"+(StatCode),
                    Address:"地址"+(StatCode),
                    Country:"区县"+(StatCode),
                    Street:"街镇"+(StatCode),
                    Square:"10000",
                    ProStartTime:"2016-01-01",
                    Stage:"备注"+(StatCode)
                };
            var retval={
                status:"true",
                point: temp
            };
            return JSON.stringify(retval);
        case "PointNew":
            var retval={
                status:"true",
                msg:""
            };
            return JSON.stringify(retval);
        case "PointMod":
            var retval={
                status:"true",
                msg:""
            };
            return JSON.stringify(retval);
        case "PointDel":
            var retval={
                status:"true",
                msg:""
            };
            return JSON.stringify(retval);
        case "PointDev":
            var projdev = new Array();
            for(var i=0;i<4;i++){
                var temp = {
                    id: (i+1),
                    name: "设备"+i
                }
                projdev.push(temp);
            }
            var retval={
                status:"true",
                ret: projdev
            };
            return JSON.stringify(retval);
        case "DevTable":
            var total = 204;
            var query_length = parseInt(data.length);
            var start = parseInt(data.startseq);
            if(query_length> total-start) {query_length = total-start;}
            var projtable = new Array();
            console.log("query start:"+start +"query length:"+query_length);
            for(var i=0;i<query_length;i++){
                var statcode = (start+i+1)%40;
                var projcode = (statcode-1)%14;
                var temp = {
                    //设备编号 DevCode
                    //监测点编号 StatCode
                    //安装时间 StartTime
                    //预计结束时间 PreEndTime
                    //实际结束时间 EndTime
                    //设备是否启动 DevStatus
                    //视频地址 VideoURL
                    DevCode: (start+(i+1)),
                    StatCode:statcode,
                    ProjCode: projcode,
                    StartTime:"2016-01-01",
                    PreEndTime:"2017-01-01",
                    EndTime:"2099-12-31",
                    DevStatus:true,
                    VideoURL:"www.tokoyhot.com",
                    MAC:"mac",
                    IP:"127.0.0.1"
                };
                projtable.push(temp);
            }
            var retval={
                status:"true",
                start: start,
                total: total,
                length:query_length,
                ret: projtable
            };
            return JSON.stringify(retval);
        case "DevNew":
            var retval={
                status:"true",
                msg:""
            };
            return JSON.stringify(retval);
        case "DevMod":
            var retval={
                status:"true",
                msg:""
            };
            return JSON.stringify(retval);
        case "DevDel":
            var retval={
                status:"true",
                msg:""
            };
            return JSON.stringify(retval);
        case "DevAlarm":
            var StatCode = parseInt(data.StatCode);
            var alarmlist= new Array();
            var map1 = {
                AlarmName: "噪声",
                AlarmEName: "Noise",
                AlarmValue:GetRandomNum(10,110),
                AlarmUnit:"DB",
                WarningTarget:"false"
            };
            alarmlist.push(map1);
            var map2 = {
                AlarmName: "风向",
                AlarmEName: "WD",
                AlarmValue:GetRandomNum(1,100),
                AlarmUnit:"mg/m3",
                WarningTarget:"false"
            };
            alarmlist.push(map2);
            var map3 = {
            AlarmName: "湿度",
                AlarmEName: "Wet",
                AlarmValue:GetRandomNum(0,100),
            AlarmUnit:"%",
            WarningTarget:"false"
            };
            alarmlist.push(map3);
            var map4 = {
            AlarmName: "温度",
                AlarmEName: "Temperature",
                AlarmValue:GetRandomNum(10,50),
            AlarmUnit:"C",
            WarningTarget:"false"
            };
            alarmlist.push(map4);
           var map5 = {
                AlarmName: "细颗粒物",
               AlarmEName: "PM",
               AlarmValue:GetRandomNum(10,400),
                AlarmUnit:"ug/m3",
                WarningTarget:"false"
            };
            alarmlist.push(map5);
            var map6 = {
                AlarmName: "录像",
                AlarmEName: "VCR",
                AlarmValue:GetRandomNum(10,150),
                AlarmUnit:"菌群",
                WarningTarget:"false"
            };
            alarmlist.push(map6);
            var map7 = {
                AlarmName: "GPS",
                AlarmEName: "GPS",
                AlarmValue:GetRandomNum(10,30),
                AlarmUnit:"ug/L",
                WarningTarget:"false"
            };
            alarmlist.push(map7);
            var map8 = {
                AlarmName: "风速",
                AlarmEName: "WS",
                AlarmValue:GetRandomNum(10,150),
                AlarmUnit:"km/h",
                WarningTarget:"true"
            };
            alarmlist.push(map8);

            var vcr_list= new Array();
            for(var i=0;i<10;i++){
                var map={
                    vcrname: "录像"+i,
                    vcraddress: "127.0.0.1:8888/"
                };
                vcr_list.push(map);
            }

            var retval={
                status:"true",
				StatCode:StatCode,
                ret:alarmlist,
                vcr:vcr_list
            };

            return JSON.stringify(retval);
        case "MonitorList":
            var userid = data.id;
            var stat_list = new Array();
            var map1={
                StatCode:"120101001",
                StatName:"浦东环球金融中心工程",
                ChargeMan:"张三",
                Telephone:"13912345678",
                Department:"",
                Address:"世纪大道100号",
                Country:"浦东新区",
                Street:"",
                Square:"40000",
                Flag_la:"N",
                Latitude:"31.240246",
                Flag_lo:"E",
                Longitude:"121.514168",
                ProStartTime:"2015-01-01",
                Stage:""
            };
            stat_list.push(map1);
            var map2={

                StatCode:"120101002",
                StatName:"港运大厦",
                ChargeMan:"张三",
                Telephone:"13912345678",
                Department:"",
                Address:"杨树浦路1963弄24号",
                Country:"虹口区",
                Street:"",
                Square:"0",
                Flag_la:"N",
                Latitude:"31.255719",
                Flag_lo:"E",
                Longitude:"121.517700",
                ProStartTime:"2016-04-01",
                Stage:""
            };
            stat_list.push(map2);
            var map3={

                StatCode:"120101003",
                StatName:"万宝国际广场",
                ChargeMan:"张三",
                Telephone:"13912345678",
                Department:"",
                Address:"延安西路500号",
                Country:"长宁区",
                Street:"",
                Square:"0",
                Flag_la:"N",
                Latitude:"31.223441",
                Flag_lo:"E",
                Longitude:"121.442703",
                ProStartTime:"2016-04-01",
                Stage:""
            };
            stat_list.push(map3);
            var map4={

                StatCode:"120101004",
                StatName:"金桥创科园",
                ChargeMan:"李四",
                Telephone:"13912345678",
                Department:"",
                Address:"桂桥路255号",
                Country:"浦东新区",
                Street:"",
                Square:"0",
                Flag_la:"N",
                Latitude:"31.248271",
                Flag_lo:"E",
                Longitude:"121.615476",
                ProStartTime:"2016-04-01",
                Stage:""
            };
            stat_list.push(map4);
            var map5={

                StatCode:"120101006",
                StatName:"江湾体育场",
                ChargeMan:"李四",
                Telephone:"13912345678",
                Department:"",
                Address:"国和路346号",
                Country:"杨浦区",
                Street:"",
                Square:"0",
                Flag_la:"N",
                Latitude:"31.313004",
                Flag_lo:"E",
                Longitude:"121.525701",
                ProStartTime:"2016-04-13",
                Stage:""
            };
            stat_list.push(map5);
            var map6={

                StatCode:"120101007",
                StatName:"滨海新村",
                ChargeMan:"李四",
                Telephone:"13912345678",
                Department:"",
                Address:"同泰北路100号",
                Country:"宝山区",
                Street:"",
                Square:"0",
                Flag_la:"N",
                Latitude:"31.382624",
                Flag_lo:"E",
                Longitude:"121.501387",
                ProStartTime:"2016-02-01",
                Stage:""

            };
            stat_list.push(map6);
            var map7={
                StatCode:"120101008",
                StatName:"银都苑",
                ChargeMan:"李四",
                Telephone:"13912345678",
                Department:"",
                Address:"银都路3118弄",
                Country:"闵行区",
                Street:"",
                Square:"0",
                Flag_la:"N",
                Latitude:"31.101605",
                Flag_lo:"E",
                Longitude:"121.404873",
                ProStartTime:"2016-02-01",
                Stage:""

            };
            stat_list.push(map7);
            var map8={
                StatCode:"120101009",
                StatName:"万科花园小城",
                ChargeMan:"王五",
                Telephone:"13912345678",
                Department:"",
                Address:"龙吴路5710号",
                Country:"闵行区",
                Street:"",
                Square:"0",
                Flag_la:"N",
                Latitude:"31.043827",
                Flag_lo:"E",
                Longitude:"121.476450",
                ProStartTime:"2016-02-18",
                Stage:""

            };
            stat_list.push(map8);
            var map9={
                StatCode:"120101010",
                StatName:"合生国际花园",
                ChargeMan:"王五",
                Telephone:"13912345678",
                Department:"",
                Address:"长兴东路1290",
                Country:"松江区",
                Street:"",
                Square:"0",
                Flag_la:"N",
                Latitude:"31.088973",
                Flag_lo:"E",
                Longitude:"121.295459",
                ProStartTime:"2016-02-18",
                Stage:""

            };
            stat_list.push(map9);
            var map10={
                StatCode:"120101011",
                StatName:"江南国际会议中心",
                ChargeMan:"王五",
                Telephone:"13912345678",
                Department:"",
                Address:"青浦区Y095(阁游路)",
                Country:"青浦区",
                Street:"",
                Square:"0",
                Flag_la:"N",
                Latitude:"31.127234",
                Flag_lo:"E",
                Longitude:"121.062241",
                ProStartTime:"2016-02-18",
                Stage:""
            };
            stat_list.push(map10);
            var map11={

                StatCode:"120101012",
                StatName:"佳邸别墅",
                ChargeMan:"王五",
                Telephone:"13912345678",
                Department:"",
                Address:"盈港路1555弄",
                Country:"青浦区",
                Street:"",
                Square:"0",
                Flag_la:"N",
                Latitude:"31.164430",
                Flag_lo:"E",
                Longitude:"121.102934",
                ProStartTime:"2016-02-18",
                Stage:""
            };
            stat_list.push(map11);
            var map12={

                StatCode:"120101013",
                StatName:"西郊河畔家园",
                ChargeMan:"王五",
                Telephone:"13912345678",
                Department:"",
                Address:"繁兴路469弄",
                Country:"闵行区",
                Street:"华漕镇",
                Square:"0",
                Flag_la:"N",
                Latitude:"31.218057",
                Flag_lo:"E",
                Longitude:"121.297076",
                ProStartTime:"2016-02-18",
                Stage:""
            };
            stat_list.push(map12);
            var map13={

                StatCode:"120101014",
                StatName:"东视大厦",
                ChargeMan:"赵六",
                Telephone:"13912345678",
                Department:"",
                Address:"东方路2000号",
                Country:"浦东新区",
                Street:"南码头",
                Square:"0",
                Flag_la:"N",
                Latitude:"31.203650",
                Flag_lo:"E",
                Longitude:"121.526288",
                ProStartTime:"2016-02-18",
                Stage:""

            };
            stat_list.push(map13);
            var map14={
                StatCode:"120101015",
                StatName:"曙光大厦",
                ChargeMan:"赵六",
                Telephone:"13912345678",
                Department:"",
                Address:"普安路189号",
                Country:"黄埔区",
                Street:"淮海中路街道",
                Square:"0",
                Flag_la:"N",
                Latitude:"31.228283",
                Flag_lo:"E",
                Longitude:"121.485388",
                ProStartTime:"2016-02-29",
                Stage:""

            };
            stat_list.push(map14);
            var map15={
                StatCode:"120101017",
                StatName:"上海贝尔",
                ChargeMan:"赵六",
                Telephone:"13912345678",
                Department:"",
                Address:"西藏北路525号",
                Country:"闸北区",
                Street:"芷江西路街道",
                Square:"0",
                Flag_la:"N",
                Latitude:"31.256691",
                Flag_lo:"E",
                Longitude:"121.475583",
                ProStartTime:"2016-03-15",
                Stage:""

            };
            stat_list.push(map15);
            var map16={
                StatCode:"120101018",
                StatName:"嘉宝大厦",
                ChargeMan:"赵六",
                Telephone:"13912345678",
                Department:"",
                Address:"洪德路1009号",
                Country:"嘉定区",
                Street:"马陆镇",
                Square:"0",
                Flag_la:"N",
                Latitude:"31.357885",
                Flag_lo:"E",
                Longitude:"121.256060",
                ProStartTime:"2015-03-19",
                Stage:""

            };
            stat_list.push(map16);
            var map17={
                StatCode:"120101019",
                StatName:"金山豪庭",
                ChargeMan:"赵六",
                Telephone:"13912345678",
                Department:"",
                Address:"卫清东路2988",
                Country:"金山区",
                Street:"",
                Square:"0",
                Flag_la:"N",
                Latitude:"30.739094",
                Flag_lo:"E",
                Longitude:"121.360693",
                ProStartTime:"2015-08-25",
                Stage:""

            };
            stat_list.push(map17);
            var map18={
                StatCode:"120101020",
                StatName:"临港城投大厦",
                ChargeMan:"赵六",
                Telephone:"13912345678",
                Department:"",
                Address:"环湖西一路333号",
                Country:"浦东新区",
                Street:"",
                Square:"0",
                Flag_la:"N",
                Latitude:"30.900796",
                Flag_lo:"E",
                Longitude:"121.933166",
                ProStartTime:"2015-11-30",
                Stage:""
            };
            stat_list.push(map18);
            var retval={
                status:"true",
                id: userid,
                ret: stat_list
            };
            return JSON.stringify(retval);
        case "AlarmQuery":
            var user = data.id;
            var StatCode = data.StatCode;
            var date = data.date;
            var type = data.type;
            var AlarmName= "噪声";
            var AlarmUnit="DB";
            var WarningTarget=65;
            var minute_alarm = new Array();
            var minute_head = new Array();
            for(var i=0;i<(60*24);i++){
                minute_head.push(i.toString());
                minute_alarm.push(GetRandomNum(10,110));
            }
            var hour_alarm = new Array();
            var hour_head = new Array();
            for(var i=0;i<(7*24);i++){
                hour_head.push(i.toString());
                hour_alarm.push(GetRandomNum(10,110));
            }
            var day_alarm = new Array();
            var day_head = new Array();
            for(var i=0;i<30;i++){
                day_head.push(i.toString());
                day_alarm.push(GetRandomNum(10,110));
            }

            var retval={
                status:"true",
                StatCode: StatCode,
                date: date,
                AlarmName: AlarmName,
                AlarmUnit: AlarmUnit,
                WarningTarget:WarningTarget,
                minute_head:minute_head,
                minute_alarm: minute_alarm,
                hour_head:hour_head,
                hour_alarm: hour_alarm,
                day_head:day_head,
                day_alarm: day_alarm
            };
            return JSON.stringify(retval);
        case "AlarmType":
            var ret = new Array();
            var map = {
                id:"0001",
                name:"噪音"
            }
            ret.push(map);
            map = {
                id:"0002",
                name:"扬尘"
            }
            ret.push(map);
            map = {
                id:"0003",
                name:"湿度"
            }
            ret.push(map);
            map = {
                id:"0004",
                name:"温度"
            }
            ret.push(map);
            map = {
                id:"000z",
                name:"细颗粒物"
            }
            ret.push(map);
            map = {
                id:"000t",
                name:"水质"
            }
            ret.push(map);
            map = {
                id:"000b",
                name:"SO2"
            }
            ret.push(map);
            map = {
                id:"000v",
                name:"风速"
            }
            ret.push(map);
            var retval={
                status:"true",
                typelist: ret
            };
            return JSON.stringify(retval);
        case "TableQuery":
            var TableName = data.TableName;
            var Condition = data.Condition;
            var Filter = data.Filter;
            var column = 16;
            var row = 400;
            var column_name = new Array();
            var row_content = new Array();
            for( var i=0;i<column;i++){
                column_name.push("第"+(i+1)+"列");
                //column_name.push(""+(i+1)+"");
            }
            for(var i=0;i<row;i++){
                var one_row = new Array();
                one_row.push((i+1));

                one_row.push("备注"+(i+1));
                for(var j=0;j<(column-6);j++) one_row.push(GetRandomNum(10,110));
                one_row.push("地址"+(i+1)+"xxxxx路"+(i+1)+"xxxxx号");
                one_row.push("测试");
                one_row.push("名称");
                one_row.push("长数据长数据长数据"+(i+1)+"xxxxx路"+(i+1)+"xxxxx号");
/*
                 one_row.push(""+(i+1));
                 for(var j=0;j<(column-6);j++) one_row.push(GetRandomNum(10,110));
                 one_row.push(""+(i+1)+"xxxxx"+(i+1)+"xxxxx");
                 one_row.push("");
                 one_row.push("");
                 one_row.push(""+(i+1)+"xxxxx"+(i+1)+"xxxxx");*/
                row_content.push(one_row);
            }
            var retval={
                status:"true",
                ColumnName: column_name,
                TableData:row_content
            };
            return JSON.stringify(retval);
        case "SensorList":
            //var DevCode = data.DevCode;
            var ret = new Array();
            /* sensor name
            is_pm25
            is_temperature
            is_humidity
            is_windspeed
            is_winddir
            is_noise
            is_emc
            is_airpressure
            is_rain
            */
            var map = {
                id:"101",
                name:"PM2.5",
                nickname:"PM2.5",
                memo:"PM2.5传感器",
                code:""
            };
            ret.push(map);
            map = {
                id:"201",
                name:"temperature",
                nickname:"温度",
                memo:"温度传感器",
                code:""
            };
            ret.push(map);
            map = {
                id:"301",
                name:"humidity",
                nickname:"湿度",
                memo:"湿度传感器",
                code:""
            };
            ret.push(map);
            map = {
                id:"401",
                name:"windspeed",
                nickname:"风速",
                memo:"风速传感器",
                code:""
            };
            ret.push(map);
            map = {
                id:"501",
                name:"winddir",
                nickname:"风向",
                memo:"风向传感器",
                code:""
            };
            ret.push(map);
            map = {
                id:"601",
                name:"PM2.5",
                nickname:"PM2.5",
                memo:"PM2.5传感器",
                code:""
            };
            ret.push(map);
            map = {
                id:"701",
                name:"noise",
                nickname:"噪声",
                memo:"噪声传感器",
                code:""
            };
            ret.push(map);
            map = {
                id:"901",
                name:"emc",
                nickname:"emc",
                memo:"EMC传感器"
            };
            ret.push(map);
            map = {
                id:"901",
                name:"emc",
                nickname:"emc",
                memo:"EMC传感器",
                code:""
            };
            ret.push(map);
            map = {
                id:"a01",
                name:"airpressure",
                nickname:"气压",
                memo:"气压传感器",
                code:""
            };
            ret.push(map);
            map = {
                id:"b01",
                name:"rain",
                nickname:"降雨",
                memo:"降雨传感器",
                code:""
            };
            ret.push(map);

            var retval={
                status:"true",
                SensorList:ret
            };
            return JSON.stringify(retval);
        case "DevSensor":
            var DevCode = data.DevCode;
            var paralist = new Array();
            for (var i=0;i<10;i++){
                var temp = {
                    name: "Parameter_"+i,
                    memo: "Parameter"+i,
                    value: "10"
                }
                paralist.push(temp)
            }
            var ret= new Array();
            var map = {
                id:"101",
                status:"true",
                para:paralist
            }
            ret.push(map);
            map = {
                id:"201",
                status:"true",
                para:new Array()
            }
            ret.push(map);
            map = {
                id:"a01",
                status:"false",
                para:new Array()
            }
            ret.push(map);
            var retval={
                status:"true",
                ret:ret
            };
            return JSON.stringify(retval);
        case "SensorUpdate":
            var DevCode = data.DevCode;
            var SensorCode = data.SensorCode;
            var status = data.status;
            var ParaList  = data.ParaList;
            var retval={
                status:"true",
                msg:""
            };
            return JSON.stringify(retval);
        case "SetUserMsg":
            var usr = data.id;
            var Msg = data.msg;
            var ifdev = data.ifdev;
            var retval={
                status:"true",
                msg:""
            };
            return JSON.stringify(retval);
        case "GetUserMsg":
            var usr = data.id;
            var retval={
                status:"true",
                msg:"您好，今天是xxxx号，欢迎领导前来视察，今天的气温是 今天的PM2.5是....",
                ifdev:"true"
            };
            return JSON.stringify(retval);
        case "ShowUserMsg":
            var usr = data.id;
            var temp = GetRandomNum(1000,9999);
            var retval={
                status:"true",
                msg:temp+"您好，今天是"+temp+"号，欢迎领导前来视察，今天的气温是 今天的PM2.5是.xxx.yyy.zzz."
            };
            return JSON.stringify(retval);
        case "GetUserImg":
            var usr = data.id;
            var ImgList= new Array();
            for(var i=1;i<6;i++){
                var map={
                    name :"test"+i+".jpg",
                    url:"assets/img/test"+i+".jpg"
                };
                ImgList.push(map);
            }
            var retval={
                status:"true",
                img: ImgList
            };
            return JSON.stringify(retval);
        case "ClearUserImg":
            var usr = data.id;
            var StatCode = data.StatCode;
            var retval={
                status:"true"
            };
            return JSON.stringify(retval);
        case "GetStaticMonitorTable":
            var usr = data.id;
            var column = 16;
            var row = 400;
            var column_name = new Array();
            var row_content = new Array();
            for( var i=0;i<column;i++){
                column_name.push("第"+(i+1)+"列");
                //column_name.push(""+(i+1)+"");
            }
            for(var i=0;i<row;i++){
                var one_row = new Array();
                one_row.push((i+1));

                one_row.push("备注"+(i+1));
                for(var j=0;j<(column-6);j++) one_row.push(GetRandomNum(10,110));
                one_row.push("地址"+(i+1)+"xxxxx路"+(i+1)+"xxxxx号");
                one_row.push("测试");
                one_row.push("名称");
                one_row.push("长数据长数据长数据"+(i+1)+"xxxxx路"+(i+1)+"xxxxx号");
                /*
                 one_row.push(""+(i+1));
                 for(var j=0;j<(column-6);j++) one_row.push(GetRandomNum(10,110));
                 one_row.push(""+(i+1)+"xxxxx"+(i+1)+"xxxxx");
                 one_row.push("");
                 one_row.push("");
                 one_row.push(""+(i+1)+"xxxxx"+(i+1)+"xxxxx");*/
                row_content.push(one_row);
            }
            var retval={
                status:"true",
                ColumnName: column_name,
                TableData:row_content
            };
            return JSON.stringify(retval);
        case "GetVideoList":
            var usr = data.id;
            var StatCode = data.StatCode;
            var date = data.date;
            var hour = data.hour;
            var VideoList = new Array();
            for(var j=0;j<5;j++) {
                var map = {
                    id: "Video_" + StatCode + "_" + date + "_" + hour + "_" + j,
                    attr: "Video_" + StatCode + "_" + date + "_" + hour + "_" + j+"视频属性10m"
                }
                VideoList.push(map);
            }
            var retval={
                status:"true",
                ret: VideoList
            };
            return JSON.stringify(retval);
        case "GetVideo":
            var videoid = data.id;
            var number = GetRandomNum(8,10);
            if(number ==10){
                var retval={
                    status:"true",
                    url:"/video/avorion.mp4"
                }
                return JSON.stringify(retval);
            }else{
                var retval={
                    status:"true",
                    url:"downloading"
                }
                return JSON.stringify(retval);
            }

        case "GetVersionList":
            var verlist = new Array();
            for (var i=0;i<10;i++){
                verlist.push("Ver_"+(i+1)+".00");
            }
            var retval={
                status:"true",
                ret: verlist
            }
            return JSON.stringify(retval);
        case "GetProjDevVersion":
            var ProjCode = data.ProjCode;
            var projdev = new Array();
            for(var i=0;i<5;i++){
                for(var j=0;j<4;j++){
                    var temp = {
                        DevCode: ProjCode+"_"+i+"_"+j,
                        ProjName: "测量点"+i,
                        version: "Ver 1.00"
                    }
                    projdev.push(temp);
                }
            }
            var retval={
                status:"true",
                ret: projdev
            };
            return JSON.stringify(retval);
        case "UpdateDevVersion":
            var usr = data.id;
            var list = data.list;
            var version = data.version;
            var retval={
                status:"true"
            }
            return JSON.stringify(retval);
        case "GetCameraStatus":
            var usr = data.id;
            var StatCode = data.StatCode;
            var videocode = GetRandomNum(1,5);
            var camerastatus={
                h:"120~",
                v:"120~",
                url:"./video/screenshot/"+videocode+".png"
            }
            var retval={
                status:"true",
                ret:camerastatus
            }
            return JSON.stringify(retval);
        case "GetCameraUnit":
            var camera={
                v:"3~",
                h:"3~"
            }
            var retval={
                status:"true",
                ret: camera
            }
            return JSON.stringify(retval);
        case "CameraVAdj":
            var usr = data.id;
            var StatCode = data.StatCode;
            var adj = data.adj;
            var videocode = GetRandomNum(1,5);
            var camerastatus={
                h:"120~",
                v:"120~",
                url:"./video/screenshot/"+videocode+".png"
            }
            var retval={
                status:"true",
                ret:camerastatus
            }
            return JSON.stringify(retval);
        case "CameraHAdj":
            var usr = data.id;
            var StatCode = data.StatCode;
            var adj = data.adj;
            var videocode = GetRandomNum(1,5);
            var camerastatus={
                h:"120~",
                v:"120~",
                url:"./video/screenshot/"+videocode+".png"
            }
            var retval={
                status:"true",
                ret:camerastatus
            }
            return JSON.stringify(retval);
        case "list":
            var query_key = data.key;
            var ret_number = GetRandomNum(10,50);
            var ret_table = new Array();
            var table_title = new Array();
            table_title.push(("序号"));
            table_title.push(("串号"));
            table_title.push(("错误"));
            table_title.push(("时间"));
            table_title.push("ref1");
            table_title.push("ref2");
            table_title.push("ref3");
            ret_table.push(table_title);
            for(var i=0;i<ret_number;i++){
                var table_row = new Array();
                table_row.push(i+1);
                table_row.push(GetRandomNum(1000,9999));
                table_row.push(query_key);
                table_row.push("---");
                table_row.push(GetRandomNum(1,20));
                table_row.push(GetRandomNum(1,20));
                table_row.push(GetRandomNum(1,20));
                ret_table.push(table_row);
            }
            retval={
                status:"true",
                table: ret_table
            };
            return JSON.stringify(retval);
        case "element":
            var query_id = data.id;
            param_list= new Array();
            for(var i=0;i<10;i++){
                param_list.push(GetRandomNum(1,20));
            }
            retval={
                status:"true",
                id:query_id,
                param: param_list
            };
            return JSON.stringify(retval);
        default:
            console.log("Don't understand query key:"+key);
    }
}

function check_usr(data){
    if(data.session == "1234567"){
        return "admin"
    }
    if(data.session == "7654321"){
        return "user"
    }
    if(data.session == "1111111"){
        return "user"
    }
    return ""
}
function req_test(){
    var data={
        action:"login",
        username:"admin",
        password:"sdfasdfa"
    }
    var output = database(data);
    console.log(output);
}
function GetRandomNum(Min,Max)
{
    var Range = Max - Min;
    var Rand = Math.random();
    return(Min + Math.round(Rand * Range));
}
exports.req_test=req_test;
exports.database=database;
exports.check_usr=check_usr;