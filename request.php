<?php
header("Content-type:text/html;charset=utf-8");
#require '/php/req.php';
$install_path="_INSTALL_PATH_";
function _encode($arr)
{
  $na = array();
  foreach ( $arr as $k => $value ) {   
    $na[_urlencode($k)] = _urlencode ($value);   
  }
  return addcslashes(urldecode(json_encode($na)),"\r\n");
}
 
function _urlencode($elem)
{
  if(is_array($elem)&&(!(empty($elem)))){
    foreach($elem as $k=>$v){
      $na[_urlencode($k)] = _urlencode($v);
    }
    return $na;
  }
  if(is_array($elem)&&empty($elem)){
	  return $elem;
  }
  return urlencode($elem);
}
#$basedir="/dist";
$key=$_GET["action"];
//echo $key;
switch ($key){
case "login":
/*
REQUEST:
var map={
    action:"login",
    name:$("#Username_Input").val(),
    password:$("#Password_Input").val()
};
RESPONSE:
    $body = array(
	'key'=> '1234567',
	'admin'=> 'true'
    );
    $usrinfo=array(
	'status'=>'true',
	'auth'=>'true',
	'ret'=>$body,
	'msg'=>'login successfully'
    );
*/
	$usr = $_GET["name"];
	$usrinfo;
	$body;
	if($usr == "admin"){
		$body = array(
			'key'=> '1234567',
			'admin'=> 'true'
		);
		$usrinfo=array(
        'status'=>'true',
		'auth'=>'true',
        'ret'=>$body,
        'msg'=>'login successfully'
		);
    }else if($usr=="user"){
		$body = array(
			'key'=> '7654321',
			'admin'=> 'false'
		);
        $usrinfo=array(
        'status'=>'true',
		'auth'=>'true',
        'ret'=>$body,
        'msg'=>'login successfully'
        
		);
    }else if($usr=="黄"){
		$body = array(
			'key'=> '1111111',
            'admin'=> 'false'
		);
             $usrinfo=array(
             'status'=>'true',
			 'auth'=>'true',
			 'ret'=>$body,
             'msg'=>'login successfully',
             
     		);
    }
    else{
		$body = array(
			'key'=> '',
			'admin'=> ''
		);
        $usrinfo=array(
        'status'=>'false',
		'auth'=>'true',
	    'ret'=>$body,
        'msg'=>'no this user or password faile',
        
		);
    }
    $jsonencode = json_encode($usrinfo);
	echo $jsonencode; break;

		
case "UserInfo":
/*
REQUEST:
var body = {
	session: session
};
var map={
	action:"UserInfo",
	type:"query",
	body: body
	user:"null"
};

RESPONSE:
$user = array(
	'id'=>'7654321',
	'name'=>'黄',
	'admin'=>'false',
	'city'=>("上海")
);
$retval=array(
	'status'=>$retstatus,
	'auth'=>'true',
	'msg'=>'',
	'ret'=>($user)
);
*/
	$body= $_GET['body'];
	$session = $body['session'];
    $user=null;
	$userauth=null;
	$webauth=null;
    $if_offline=_OFFLINE_FLAG_;
    $userpoint=array(
        'Latitude'=>'31.240246','Longitude'=>'121.514168'
    );
    if($session == "1234567"){
		$webauth=array(
			'UserManage' => 'true',
			'ParaManage' => 'true',
			'InstControl' => 'true',
			'PGManage' => 'true',
			'ProjManage' => 'true',
			'MPManage' => 'true',
			'DevManage' => 'true',
			'KeyManage' => 'true',
			'KeyAuth' => 'true',
			'KeyHistory' => 'true',
			'MPMonitor' => 'true',
			'MPStaticMonitorTable' => 'true',
			'WarningCheck' => 'true',
			'WarningHandle' => 'true',
			'InstConf' => 'true',
			'InstRead' => 'true'
		);
		$userauth=array(
			'query' => 'true',
			'mod' => 'true',
			'webauth' => $webauth

		);
        $user = array(
			'id'=> '1234567',
			'name'=> 'admin',
            'level'=> '0',
            'city'=> ("上海"),
			'online'=>$if_offline,
			'point'=>$userpoint,

			'userauth'=>$userauth
		);
    }
    if($session == "7654321"){
		$webauth=array(
			'UserManage' => 'true',
			'ParaManage' => 'true',
			'InstControl' => 'false',
			'PGManage' => 'true',
			'ProjManage' => 'true',
			'MPManage' => 'true',
			'DevManage' => 'true',
			'KeyManage' => 'true',
			'KeyAuth' => 'true',
			'KeyHistory' => 'true',
			'MPMonitor' => 'true',
			'MPStaticMonitorTable' => 'true',
			'WarningCheck' => 'true',
			'WarningHandle' => 'true',
			'InstConf' => 'false',
			'InstRead' => 'false'
		);
		$userauth=array(
			'query' => 'true',
			'mod' => 'false',
			'webauth' => $webauth
		);
        $user = array(
            'id'=>'7654321',
            'name'=>'user',
            'level'=>'3',
            'city'=>("上海"),
			'online'=>$if_offline,
			'point'=>$userpoint,

			'userauth'=>$userauth
        );
    }
    if($session == "1111111"){
		$webauth=array(
			'UserManage' => 'true',
			'ParaManage' => 'true',
			'InstControl' => 'true',
			'PGManage' => 'true',
			'ProjManage' => 'true',
			'MPManage' => 'true',
			'DevManage' => 'true',
			'KeyManage' => 'true',
			'KeyAuth' => 'true',
			'KeyHistory' => 'true',
			'MPMonitor' => 'true',
			'MPStaticMonitorTable' => 'true',
			'WarningCheck' => 'true',
			'WarningHandle' => 'true',
			'InstConf' => 'true',
			'InstRead' => 'true'
		);
		$userauth=array(
			'query' => 'true',
			'mod' => 'true',
			'webauth' => $webauth

		);
		$user = array(
			'id'=>'7654321',
			'name'=>'黄',
			'level'=>'0',
			'city'=>("上海"),
			'online'=>$if_offline,
			'point'=>$userpoint,
			'userauth'=>$userauth
		);
	}
    $retstatus = 'true';
    if($user==null) $retstatus = 'false';
    $retval=array(
		'status'=>$retstatus,
		'auth'=>'true',
		'msg'=>'',
		'ret'=>($user)
	);
    $jsonencode = (_encode($retval));
	echo $jsonencode; 
	break;
case "ProjectPGList":
/*
REQUEST:
var map={
	action:"ProjectPGList",
	type:"query",
	user:usr.id
};
RESPONSE:
$temp = array(
	'id'=>(string)$i,
	'name'=>'项目'.(string)$i
);
array_push($proj_pg_list,$temp);
$retval=array(
	'status'=>'true',
	'ret'=>$proj_pg_list,
	'auth'=>'true',
	'msg'=>''
);
*/
    $proj_pg_list=array();
	for($i=0;$i<14;$i++){
		$temp = array(
			'id'=>(string)$i,
			'name'=>'项目'.(string)$i
		);
		array_push($proj_pg_list,$temp);
	}
	for($i=0;$i<4;$i++){
		$temp = array(
			'id'=>"x".(string)($i),
			'name'=>"项目组".(string)($i)
		);
		array_push($proj_pg_list,$temp);
	}
	$retval=array(
		'status'=>'true',
		'ret'=>$proj_pg_list,
		'auth'=>'true',
		'msg'=>''
	);
	$jsonencode = _encode($retval);
	echo $jsonencode; break;

case "ProjectList":
/*
REQUEST:
    var map={
        action:"ProjectList",
        type:"query",
        user:usr.id
    };
RESPONSE:
$temp = array(
	'id'=> (string)($i),
	'name'=> "项目".(string)$i
);
$retval=array(
	'status'=>'true',
	'ret'=> $projlist,
	'auth'=>'true',
	'msg'=>''
);
*/
	$projlist = array();
	for($i=0;$i<14;$i++){
		$temp = array(
			'id'=> (string)($i),
			'name'=> "项目".(string)$i
		);
		array_push($projlist,$temp);
	}
	$retval=array(
		'status'=>'true',
		'ret'=> $projlist,
		'auth'=>'true',
		'msg'=>''
	);
	$jsonencode = _encode($retval);
	echo $jsonencode; break;

case "UserNew":
/*
REQUEST:
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
RESPONSE:
$retval=array(
	'status'=>'true',
	'msg'=>'success',
	'auth'=>'true'
);
*/
	$body= $_GET['body'];
	$auth = array() ;
    if(isset($_GET['auth'])) $auth= $body['auth'];
	$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);
    $jsonencode = _encode($retval);
	echo $jsonencode; break;

case "UserMod":
/*
REQUEST:
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
RESPONSE:
$retval=array(
	'status'=>'true',
	'msg'=>'success',
	'auth'=>'true'
);
*/
	$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);
    $jsonencode = _encode($retval);
	echo $jsonencode; break;
case "UserDel":
/*
REQUEST:
var body = {
	userid: id
};
var map={
	action:"UserDel",
	type:"mod",
	body: body,
	user:usr.id
};
RESPONSE:
$retval=array(
	'status'=>'true',
	'msg'=>'success',
	'auth'=>'true'
);
*/
	$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);
    $jsonencode = _encode($retval);
	echo $jsonencode; break;
case "UserTable":
/*
REQUEST:
var body = {
	startseq: start,
	length:length
};
var map={
	action:"UserTable",
	type:"query",
	body: body,
	user:usr.id
};
RESPONSE:
$temp = array(
	'id'=>(string)($start+($i+1)),
	'name'=>"username".(string)($start+$i),
	'nickname'=>"用户".(string)($start+$i),
	'mobile'=>"139139".(string)($start+$i),
	'mail'=>"139139".(string)($start+$i)."@cmcc.com",
	'type'=>(string)$type,
	'date'=>"2016-01-01 12:12:12",
	'memo'=>"备注".(string)($start+$i)
);
array_push($usertable,$temp);
$body=array{
	'start'=> (string)$start,
	'total'=> (string)$total,
	'length'=>(string)$query_length,
	'usertable'=> $usertable
};
$retval=array(
	'status'=>'true',
	'ret'=> $body,
	'msg'=>'success',
	'auth'=>'true'
);
*/
	$total = 94;
	$body_in =$_GET['body'];
    $query_length = (int)($body_in['length']);
    $start = (int)($body_in['startseq']);
    if($query_length> $total-$start){$query_length = $total-$start;}
    $usertable = array();
    for($i=0;$i<$query_length;$i++){
        //$type="false";
        //if(($i%7)==0) $type= "true";
		$type = $i%5;
		$temp = array(
			'id'=>(string)($start+($i+1)),
			'name'=>"username".(string)($start+$i),
			'nickname'=>"用户".(string)($start+$i),
			'mobile'=>"139139".(string)($start+$i),
			'mail'=>"139139".(string)($start+$i)."@cmcc.com",
			'type'=>(string)$type,
			'date'=>"2016-01-01 12:12:12",
			'memo'=>"备注".(string)($start+$i)
		);
		array_push($usertable,$temp);
    }
	$body=array(
		'start'=> (string)$start,
		'total'=> (string)$total,
		'length'=>(string)$query_length,
		'usertable'=> $usertable
	);
	$retval=array(
		'status'=>'true',
		'ret'=> $body,
		'msg'=>'success',
		'auth'=>'true'
	);
	$jsonencode = _encode($retval);
	echo $jsonencode; break;

	case "StaffNew":
    /*
    REQUEST:
    var body = {
        staffid:"",
        name: user.name,
        position: user.position,
        PJcode: user.PJcode,
        mobile: user.mobile,
        address: user.address,
        gender: user.gender,
        memo: user.memo
    };

    var map={
        action:"StaffNew",
        type:"mod",
        body: body,
        user:usr.id
    };
    RESPONSE:
    $retval=array(
    	'status'=>'true',
    	'msg'=>'success',
    	'auth'=>'true'
    );
    */
    	$body= $_GET['body'];
    	$auth = array() ;
        if(isset($_GET['auth'])) $auth= $body['auth'];
    	$retval=array(
    		'status'=>'true',
    		'msg'=>'success',
    		'auth'=>'true'
    	);
        $jsonencode = _encode($retval);
    	echo $jsonencode; break;

    case "StaffMod":
    /*
    REQUEST:
    var body={
        staffid:user.staffid,
        name: user.name,
        position: user.position,
        PJcode: user.PJcode,
        mobile: user.mobile,
        address: user.address,
        gender: user.gender,
        memo: user.memo
    };
    var map={
        action:"StaffMod",
        type:"mod",
        body: body,
        user:usr.id
    };
    RESPONSE:
    $retval=array(
    	'status'=>'true',
    	'msg'=>'success',
    	'auth'=>'true'
    );
    */
    	$retval=array(
    		'status'=>'true',
    		'msg'=>'success',
    		'auth'=>'true'
    	);
        $jsonencode = _encode($retval);
    	echo $jsonencode; break;
    case "StaffDel":
    /*
    var body = {
            staffid: id
        };
        var map={
            action:"StaffDel",
            type:"mod",
            body: body,
            user:usr.id
        };
    RESPONSE:
    $retval=array(
    	'status'=>'true',
    	'msg'=>'success',
    	'auth'=>'true'
    );
    */
    	$retval=array(
    		'status'=>'true',
    		'msg'=>'success',
    		'auth'=>'true'
    	);
        $jsonencode = _encode($retval);
    	echo $jsonencode; break;
    case "StaffTable":
    /*
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
    RESPONSE:
    $temp = array(
    	id:user.staffid,
        name: user.name,
        position: user.position,
        PJcode: user.PJcode,
        mobile: user.mobile,
        address: user.address,
        gender: user.gender,
        memo: user.memo
    );
    array_push($stafftable,$temp);
    $body=array{
    	'start'=> (string)$start,
    	'total'=> (string)$total,
    	'length'=>(string)$query_length,
    	'stafftable'=> $stafftable
    };
    $retval=array(
    	'status'=>'true',
    	'ret'=> $body,
    	'msg'=>'success',
    	'auth'=>'true'
    );
    */
    	$total = 94;
    	$body_in =$_GET['body'];
        $query_length = (int)($body_in['length']);
        $start = (int)($body_in['startseq']);
        if($query_length> $total-$start){$query_length = $total-$start;}
        $stafftable = array();
        for($i=0;$i<$query_length;$i++){
            //$type="false";
            //if(($i%7)==0) $type= "true";
    		$type = $i%2+1;
    		$temp = array(
    			'id'=>(string)($start+($i+1)),
    			'name'=>"staffname".(string)($start+$i),
    			'PJcode'=>'12345',
    			'mobile'=>"139139".(string)($start+$i),
    			'gender'=>(string)$type,
    			'address'=>"address".(string)($start+$i),
    			'position'=>"DDDDDDD",
    			'memo'=>"备注".(string)($start+$i)
    		);
    		array_push($stafftable,$temp);
        }
    	$body=array(
    		'start'=> (string)$start,
    		'total'=> (string)$total,
    		'length'=>(string)$query_length,
    		'stafftable'=> $stafftable
    	);
    	$retval=array(
    		'status'=>'true',
    		'ret'=> $body,
    		'msg'=>'success',
    		'auth'=>'true'
    	);
    	$jsonencode = _encode($retval);
    	echo $jsonencode; break;






case "UserProj":
/*
REQUEST:
    var body = {
        userid: user
    }
    var map={
        action:"UserProj",
        body:body,
        type:"query",
        user:usr.id
    };
RESPONSE:
	$retval= array(
		'status'=>"true",
		'ret'=>$userproj,
		'msg'=>'success',
		'auth'=>'true'
	);
*/							 
	$userproj = array();
	for($i=0;$i<4;$i++){
		$temp = array(
			'id'=>(string)($i+1),
			'name'=>"项目".(string)$i
		);
		array_push($userproj,$temp);
	}
	$retval= array(
		'status'=>"true",
		'ret'=>$userproj,
		'msg'=>'success',
		'auth'=>'true'
	);
	$jsonencode = _encode($retval);
	echo $jsonencode; break;

case "PGTable":
/*
REQUEST:
    var body={
        startseq: start,
        length:length
    }
    var map={
        action:"PGTable",
        body:body,
        type:"query",
        user:usr.id
    };
RESPONSE:
	$temp = array(
		'PGCode'=>(string)($start+($i+1)),
		'PGName'=>"项目组".(string)($start+$i),
		'ChargeMan'=>"用户".(string)($start+$i),
		'Telephone'=>"139139".(string)($start+$i),
		'Department'=>"单位".(string)($start+$i),
		'Address'=>"地址".(string)($start+$i),
		'Stage'=>"备注".(string)($start+$i)
	);
	array_push($pgtable,$temp);
	
	$body=array(
		'start'=> (string)$start,
		'total'=> (string)$total,
		'length'=>(string)$query_length,
		'pgtable'=> $pgtable
	);
	$retval=array(
		'status'=>'true',
		'ret'=> $body,
		'msg'=>'success',
		'auth'=>'true'
	);
*/
	$total = 14;
	$body_in = $_GET['body'];
    $query_length = (int)($body_in['length']);
    $start = (int)($body_in['startseq']);
    if($query_length> $total-$start){$query_length = $total-$start;}
	$pgtable = array();
	for($i=0;$i<$query_length;$i++){
		$temp = array(
			'PGCode'=>(string)($start+($i+1)),
			'PGName'=>"项目组".(string)($start+$i),
			'ChargeMan'=>"用户".(string)($start+$i),
			'Telephone'=>"139139".(string)($start+$i),
			'Department'=>"单位".(string)($start+$i),
			'Address'=>"地址".(string)($start+$i),
			'Stage'=>"备注".(string)($start+$i)
		);
		array_push($pgtable,$temp);
	}
	$body=array(
		'start'=> (string)$start,
		'total'=> (string)$total,
		'length'=>(string)$query_length,
		'pgtable'=> $pgtable
	);
	$retval=array(
		'status'=>'true',
		'ret'=> $body,
		'msg'=>'success',
		'auth'=>'true'
	);
	$jsonencode = _encode($retval);
	echo $jsonencode; break;
case "PGNew":
/*
REQUEST:
    var body={
        PGCode: pg.PGCode,
        PGName:pg.PGName,
        ChargeMan:pg.ChargeMan,
        Telephone:pg.Telephone,
        Department:pg.Department,
        Address:pg.Address,
        Stage:pg.Stage,
        Projlist: projlist
    }
    var map={
        action:"PGNew",
        type:"mod",
        body: body,
        user:usr.id
    };
RESPONSE:
	$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);
*/
	$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);
    $jsonencode = _encode($retval);
	echo $jsonencode; break;

case "PGMod":
/*
REQUEST:
    var body={
        PGCode: pg.PGCode,
        PGName:pg.PGName,
        ChargeMan:pg.ChargeMan,
        Telephone:pg.Telephone,
        Department:pg.Department,
        Address:pg.Address,
        Stage:pg.Stage,
        Projlist: projlist
    }
    var map={
        action:"PGMod",
        type:"mod",
        body: body,
        user:usr.id
    };
RESPONSE:
	$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);
*/
		$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);
    $jsonencode = _encode($retval);
	echo $jsonencode; break;
case "PGDel":
/*
REQUEST:
    var body={
        PGCode: id
    }
    var map={
        action:"PGDel",
        type:"mod",
        body: body,
        user:usr.id
    };
RESPONSE:
	$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);
*/
	$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);
    $jsonencode = _encode($retval);
	echo $jsonencode; break;
case "PGProj":
/*
REQUEST:
    var body={
        PGCode: pgid
    };
    var map={
        action:"PGProj",
        type:"query",
        body: body,
        user:usr.id
    };
RESPONSE:
	$temp = array(
		'id'=> (string)($i+1),
		'name'=> "项目".(string)$i
	);
	array_push($PGProj,$temp);
	
	$retval=array(
		'status'=>'true',
		'ret'=> $PGProj,
		'msg'=>'success',
		'auth'=>'true'
	);
*/
	$PGProj = array();
	for($i=0;$i<4;$i++){
		$temp = array(
			'id'=> (string)($i+1),
			'name'=> "项目".(string)$i
		);
		array_push($PGProj,$temp);
	}
	$retval=array(
		'status'=>'true',
		'ret'=> $PGProj,
		'msg'=>'success',
		'auth'=>'true'
	);
    $jsonencode = _encode($retval);
	echo $jsonencode; break;
case "ProjTable":
/*
REQUEST:
    var body={
        startseq: start,
        length:length
    }
    var map={
        action:"ProjTable",
        type:"query",
        body: body,
        user:usr.id
    };
RESPONSE:
	$temp = array(
		'ProjCode'=> (string)($start+($i+1)),
		'ProjName'=>"项目".(string)($start+$i),
		'ChargeMan'=>"用户".(string)($start+$i),
		'Telephone'=>"139139".(string)($start+$i),
		'Department'=>"单位".(string)($start+$i),
		'Address'=>"地址".(string)($start+$i),
		'ProStartTime'=>"2016-01-01",
		'Stage'=>"备注".(string)($start+$i)
	);
	array_push($projtable,$temp);
	
	$body=array(
		'start'=> (string)$start,
		'total'=> (string)$total,
		'length'=>(string)$query_length,
		'projtable'=> $projtable
		);
	$retval=array(
		'status'=>'true',
		'ret'=> $body,
		'msg'=>'success',
		'auth'=>'true'
	);
*/
	$total = 14;
	$body_in = $_GET['body'];
    $query_length = (int)($body_in['length']);
    $start = (int)($body_in['startseq']);
    if($query_length> $total-$start){$query_length = $total-$start;}
    $projtable = array();
    for($i=0;$i<$query_length;$i++){
		$temp = array(
			'ProjCode'=> (string)($start+($i+1)),
			'ProjName'=>"项目".(string)($start+$i),
			'ChargeMan'=>"用户".(string)($start+$i),
			'Telephone'=>"139139".(string)($start+$i),
			'Department'=>"单位".(string)($start+$i),
			'Address'=>"地址".(string)($start+$i),
			'ProStartTime'=>"2016-01-01",
			'Stage'=>"备注".(string)($start+$i)
		);
		array_push($projtable,$temp);
	}
	$body=array(
		'start'=> (string)$start,
		'total'=> (string)$total,
		'length'=>(string)$query_length,
		'projtable'=> $projtable
		);
	$retval=array(
		'status'=>'true',
		'ret'=> $body,
		'msg'=>'success',
		'auth'=>'true'
	);
	$jsonencode = _encode($retval);
	echo $jsonencode; break;
case "ProjNew":
/*
REQUEST:
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
RESPONSE:
	$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);
*/
	$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);
    $jsonencode = _encode($retval);
	echo $jsonencode; break;
case "ProjMod":
/*
REQUEST:
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
RESPONSE:
	$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);
*/
	$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);
    $jsonencode = _encode($retval);
	echo $jsonencode; break;
case "ProjDel":
/*
REQUEST:
    var body={
	ProjCode: ProjCode
	};
    var map={
        action:"ProjDel",
        type:"mod",
        body: body,
        user:usr.id
    };
RESPONSE:
	$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);
*/
	$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);
    $jsonencode = _encode($retval);
	echo $jsonencode; break;
case "ProjPoint":
/*
REQUEST:
    var map={
        action:"ProjPoint",
	type:"query",
        user:usr.id
    };
RESPONSE:
	$temp = array(
		'id'=> (string)($i+1),
		'name'=> "测量点".(string)($i+1),
		'ProjCode'=> $projcode
	);
	array_push($ProjPoint,$temp);
	
	$retval=array(
		'status'=>'true',
		'ret'=> $ProjPoint,
		'msg'=>'success',
		'auth'=>'true'
	);
*/
	$ProjPoint = array();
	for($i=0;$i<40;$i++){
		$projcode = ($i)%14;
		$temp = array(
			'id'=> (string)($i+1),
			'name'=> "测量点".(string)($i+1),
			'ProjCode'=> $projcode
		);
		array_push($ProjPoint,$temp);
	}
	$retval=array(
		'status'=>'true',
		'ret'=> $ProjPoint,
		'msg'=>'success',
		'auth'=>'true'
	);
    $jsonencode = _encode($retval);
	echo $jsonencode; break;

case "PointProj":
/*
REQUEST:
    var body={
	ProjCode: ProjCode
	};
    var map={
        action:"PointProj",
        type:"query",
        body: body,
        user:usr.id
    };
RESPONSE:
	$temp = array(
		'id'=> (string)($i+1),
		'name'=> "测量点".(string)($i+1),
		'ProjCode'=> $projcode
	);
	array_push($ProjPoint,$temp);
	
	$retval=array(
		'status'=>'true',
		'ret'=> $ProjPoint,
		'msg'=>'success',
		'auth'=>'true'
	);
*/
	$body_in = $_GET['body'];
    $projcode = $body_in ['ProjCode'];
    $ProjPoint = array();
	for($i=0;$i<4;$i++){
		$temp = array(
			'id'=> (string)($i+1),
			'name'=> "测量点".(string)($i+1),
			'ProjCode'=> $projcode
		);
		array_push($ProjPoint,$temp);
	}
	$retval=array(
		'status'=>'true',
		'ret'=> $ProjPoint,
		'msg'=>'success',
		'auth'=>'true'
	);
    $jsonencode = _encode($retval);
	echo $jsonencode; break;
break;
case "PointTable":
/*
REQUEST:
    var body={
        startseq: start,
        length:length
	};
    var map={
        action:"PointTable",
        type:"query",
        body: body,
        user:usr.id
    };
RESPONSE:
	$temp = array(
		'StatCode'=> (string)($start+($i+1)),
		'StatName'=>"测量点".(string)($start+$i),
		'ProjCode'=> $projcode,
		'ChargeMan'=>"用户".(string)($start+$i),
		'Telephone'=>"139139".(string)($start+$i),
		'Longitude'=>"121.0000",
		'Latitude'=>"31.0000",
		'Department'=>"单位".(string)($start+$i),
		'Address'=>"地址".(string)($start+$i),
		'Country'=>"区县".(string)($start+$i),
		'Street'=>"街镇".(string)($start+$i),
		'Square'=>"10000",
		'ProStartTime'=>"2016-01-01",
		'Stage'=>"备注".(string)($start+$i)
	);
	array_push($pointtable,$temp);
	
	$body = array(
		'start'=> (string)$start,
		'total'=> (string)$total,
		'length'=>(string)$query_length,
		'pointtable'=> $pointtable
		);
	$retval=array(
		'status'=>'true',
		'ret'=> $body,
		'msg'=>'success',
		'auth'=>'true'
	);
*/
	$total = 40;
	$body_in = $_GET['body'];
    $query_length = (int)($body_in['length']);
    $start = (int)($body_in['startseq']);
    if($query_length> $total-$start){$query_length = $total-$start;}
    $pointtable = array();
	for($i=0;$i<$query_length;$i++){
		
	$projcode = ($start+$i)%14;
		$temp = array(
			'StatCode'=> (string)($start+($i+1)),
			'StatName'=>"测量点".(string)($start+$i),
			'ProjCode'=> $projcode,
			'ChargeMan'=>"用户".(string)($start+$i),
			'Telephone'=>"139139".(string)($start+$i),
			'Longitude'=>"121.0000",
			'Latitude'=>"31.0000",
			'Department'=>"单位".(string)($start+$i),
			'Address'=>"地址".(string)($start+$i),
			'Country'=>"区县".(string)($start+$i),
			'Street'=>"街镇".(string)($start+$i),
			'Square'=>"10000",
			'ProStartTime'=>"2016-01-01",
			'Stage'=>"备注".(string)($start+$i)
		);
		array_push($pointtable,$temp);
	}
	$body = array(
		'start'=> (string)$start,
		'total'=> (string)$total,
		'length'=>(string)$query_length,
		'pointtable'=> $pointtable
		);
	$retval=array(
		'status'=>'true',
		'ret'=> $body,
		'msg'=>'success',
		'auth'=>'true'
	);
	$jsonencode = _encode($retval);
	echo $jsonencode; break;
case "PointDetail":
//abandon
break;
case "PointNew":
/*
REQUEST:
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
RESPONSE:
	$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);
*/
	$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);
    $jsonencode = _encode($retval);
	echo $jsonencode; break;
case "PointMod":
/*
REQUEST:
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
RESPONSE:
	$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);
*/
	$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);
    $jsonencode = _encode($retval);
	echo $jsonencode; break;
case "PointDel":
/*
REQUEST:
    var body={StatCode: StatCode};
    var map={
        action:"PointDel",
        type:"mod",
        body: body,
        user:usr.id
    };
RESPONSE:
	$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);
*/
	$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);
    $jsonencode = _encode($retval);
	echo $jsonencode; break;
case "PointDev":
/*
REQUEST:
    var body={
	StatCode: StatCode
	};
    var map={
        action:"PointDev",
        type:"query",
        body: body,
        user:usr.id
    };
RESPONSE:
	$temp = array(
			'id'=> (string)($i+1),
			'name'=> "设备".(string)$i
		);
		array_push($projdev,$temp);
	}
	$retval=array(
		'status'=>"true",
		'ret'=> $projdev,
		'msg'=>'success',
		'auth'=>'true'
	);
*/
	$projdev = array();
	for($i=0;$i<4;$i++){
		$temp = array(
			'id'=> (string)($i+1),
			'name'=> "设备".(string)$i
		);
		array_push($projdev,$temp);
	}
	$retval=array(
		'status'=>"true",
		'ret'=> $projdev,
		'msg'=>'success',
		'auth'=>'true'
	);
	$jsonencode = _encode($retval);
	echo $jsonencode; break;
case "PointPicture":
/*
REQUEST:
    var body={
	StatCode: StatCode
	};
    var map={
        action:"PointPicture",
        type:"query",
        body: body,
        user:usr.id
    };
RESPONSE:
	$projpic = array();
	for($i=1;$i<4;$i++){
		$temp = array(
			'name'=> (string)($i+1),
			'url'=> $basedir."/video/screenshot/".(string)$i.".png"
		);
		array_push($projpic,$temp);
	}
	$retval=array(
		'status'=>"true",
		'ret'=> $projpic,
		'msg'=>'success',
		'auth'=>'true'
	);
*/
	$projdev = array();
	for($i=0;$i<4;$i++){
		$temp = array(
			'name'=> (string)($i+1),
            'url'=> $install_path."/video/screenshot/".(string)($i+1).".png"
		);
		array_push($projdev,$temp);
	}
	$retval=array(
		'status'=>"true",
		'ret'=> $projdev,
		'msg'=>'success',
		'auth'=>'true'
	);
	$jsonencode = _encode($retval);
	echo $jsonencode; break;
case "DevTable":
/*
REQUEST:
    var body={
        startseq: start,
        length:length
	};
    var map={
        action:"DevTable",
		body:body,
        type:"query",
        user:usr.id
    };
RESPONSE:
	$temp = array(
		'DevCode'=> (string)($start+($i+1)),
		'StatCode'=> $statcode,
		'ProjCode'=> $projcode,
		'StartTime'=>"2016-01-01",
		'PreEndTime'=>"2017-01-01",
		'EndTime'=>"2099-12-31",
		'DevStatus'=>'true',
		'VideoURL'=>"www.tokoyhot.com",
		'MAC'=>'mac',
		'IP'=>"127.0.0.1"
	);
	array_push($devtable,$temp);
	
	$body=array(
		'start'=> (string)$start,
		'total'=> (string)$total,
		'length'=>(string)$query_length,
		'devtable'=> $devtable
	);
	$retval=array(
		'status'=>'true',
		'ret'=> $body,
		'msg'=>'success',
		'auth'=>'true'
	);
*/
	$total = 204;
	$body_in = $_GET['body'];
    $query_length = (int)($body_in["length"]);
    $start = (int)($body_in["startseq"]);
    if($query_length> $total-$start){$query_length = $total-$start;}
    $devtable = array();
	for($i=0;$i<$query_length;$i++){
		$statcode = ($start+$i+1)%40;
		$projcode = ($statcode-1)%14;
		$temp = array(
			'DevCode'=> (string)($start+($i+1)),
			'StatCode'=> $statcode,
			'ProjCode'=> $projcode,
			'StartTime'=>"2016-01-01",
			'PreEndTime'=>"2017-01-01",
			'EndTime'=>"2099-12-31",
			'DevStatus'=>'true',
			'VideoURL'=>"www.tokoyhot.com",
			'MAC'=>'mac',
            'IP'=>"127.0.0.1"
		);
		array_push($devtable,$temp);
	}
	$body=array(
		'start'=> (string)$start,
		'total'=> (string)$total,
		'length'=>(string)$query_length,
		'devtable'=> $devtable
		);
	$retval=array(
		'status'=>'true',
		'ret'=> $body,
		'msg'=>'success',
		'auth'=>'true'
		
	);
	$jsonencode = _encode($retval);
	echo $jsonencode; break;
case "DevNew":
/*
REQUEST:
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
RESPONSE:
	$retval=array(
		'status'=>"true",
		'msg'=>'success',
		'auth'=>'true'
	);
*/
	$retval=array(
		'status'=>"true",
		'msg'=>'success',
		'auth'=>'true'
	);
    $jsonencode = _encode($retval);
	echo $jsonencode; break;
case "DevMod":
/*
REQUEST:
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
RESPONSE:
	$retval=array(
		'status'=>"true",
		'msg'=>'success',
		'auth'=>'true'
	);
*/
	$retval=array(
		'status'=>"true",
		'msg'=>'success',
		'auth'=>'true'
	);
    $jsonencode = _encode($retval);
	echo $jsonencode; break;
case "DevDel":
/*
REQUEST:
    var body={
	DevCode: DevCode
    };
    var map={
        action:"DevDel",
        type:"mod",
        body: body,
        user:usr.id
    };
RESPONSE:
	$retval=array(
		'status'=>"true",
		'msg'=>'success',
		'auth'=>'true'
	);
*/
	$retval=array(
		'status'=>"true",
		'msg'=>'success',
		'auth'=>'true'
	);
    $jsonencode = _encode($retval);
	echo $jsonencode; break;
case "DevAlarm":
/*
REQUEST:
    var body={StatCode: monitor_selected.StatCode};
    var map={
	action:"DevAlarm",
	body:body,
	type:"query",
	user:usr.id
    };
RESPONSE:
	$map8 = array(
		'AlarmName'=>"风速",
		'AlarmEName'=> "WS",
		'AlarmValue'=>(string)rand(10,150),
		'AlarmUnit'=>"km/h",
		'WarningTarget'=>"false"
	);
	array_push($alarmlist,$map8);
    $vcr_list= array();
	$map=array(
	   'vcrname'=> "录像".(string)$i,
	   'vcraddress'=> "127.0.0.1/"
	);
	array_push($vcr_list,$map);
    
	$body=array(
		'StatCode'=>$StatCode,
		'alarmlist'=> $alarmlist,
		'vcr'=>$vcr_list
	);
	$retval=array(
		'status'=>'true',
		'ret'=> $body,
		'msg'=>'success',
		'auth'=>'true'
	);
*/
	$body_in = $_GET['body'];
	$StatCode =$body_in["StatCode"];
	$alarmlist= array();
	$map1 = array(
		'AlarmName'=>"噪声",
		'AlarmEName'=> "Noise",
		'AlarmValue'=>(string)rand(10,110),
		'AlarmUnit'=>"DB",
		'WarningTarget'=>"false"
	);
	array_push($alarmlist,$map1);
	$map2 = array(
		'AlarmName'=>"风向",
		'AlarmEName'=> "WD",
		'AlarmValue'=>(string)rand(1,100),
		'AlarmUnit'=>"mg/m3",
		'WarningTarget'=>"false"
	);
	array_push($alarmlist,$map2);
	$map3 = array(
		'AlarmName'=>"湿度",
		'AlarmEName'=> "Wet",
		'AlarmValue'=>(string)rand(1,100),
		'AlarmUnit'=>"%",
		'WarningTarget'=>"false"
	);
	array_push($alarmlist,$map3);
	$map4 = array(
		'AlarmName'=>"温度",
		'AlarmEName'=> "Temperature",
		'AlarmValue'=>(string)rand(10,50),
		'AlarmUnit'=>"C",
		'WarningTarget'=>"false"
	);
	array_push($alarmlist,$map4);
	$map5 = array(
		'AlarmName'=>"细颗粒物",
		'AlarmEName'=> "PM",
		'AlarmValue'=>(string)rand(10,400),
		'AlarmUnit'=>"ug/m3",
		'WarningTarget'=>"false"
	);
	array_push($alarmlist,$map5);
	$map6 = array(
		'AlarmName'=>"录像",
		'AlarmEName'=> "VCR",
		'AlarmValue'=>(string)rand(10,150),
		'AlarmUnit'=>"菌群",
		'WarningTarget'=>"false"
	);
	array_push($alarmlist,$map6);
	$map7 = array(
		'AlarmName'=>"GPS",
		'AlarmEName'=> "GPS",
		'AlarmValue'=>(string)rand(10,30),
		'AlarmUnit'=>"ug/L",
		'WarningTarget'=>"true"
	);
	array_push($alarmlist,$map7);
	$map8 = array(
		'AlarmName'=>"风速",
		'AlarmEName'=> "WS",
		'AlarmValue'=>(string)rand(10,150),
		'AlarmUnit'=>"km/h",
		'WarningTarget'=>"false"
	);
	array_push($alarmlist,$map8);
    $vcr_list= array();
    for($i=0;$i<10;$i++){
        $map=array(
           'vcrname'=> "录像".(string)$i,
           'vcraddress'=> "127.0.0.1/"
        );
        array_push($vcr_list,$map);
    }
	$body=array(
		'StatCode'=>$StatCode,
		'alarmlist'=> $alarmlist,
		'vcr'=>$vcr_list
	);
	$retval=array(
		'status'=>'true',
		'ret'=> $body,
		'msg'=>'success',
		'auth'=>'true'
	);
    $jsonencode = _encode($retval);
	echo $jsonencode; break;
case "MonitorList":
/*
REQUEST:
    var map={
        action:"MonitorList",
        type:"query",
        user:usr.id
    };
RESPONSE:
	$map18= array(
		'StatCode'=>"120101020",
		'StatName'=>"临港城投大厦",
		'ChargeMan'=>"赵六",
		'Telephone'=>"13912345678",
		'Department'=>"",
		'Address'=>"环湖西一路333号",
		'Country'=>"浦东新区",
		'Street'=>"",
		'Square'=>"0",
		'Flag_la'=>"N",
		'Latitude'=>"30.900796",
		'Flag_lo'=>"E",
		'Longitude'=>"121.933166",
		'ProStartTime'=>"2015-11-30",
		'Stage'=>""
	);
	array_push($stat_list,$map18);
	$retval=array(
		'status'=>'true',
		'ret'=> $stat_list,
		'msg'=>'success',
		'auth'=>'true'
	);
*/
	$userid = $_GET["user"];
	$stat_list = array();
	$map1=array(
		'StatCode'=>"120101001",
		'StatName'=>"浦东环球金融中心工程",
		'ChargeMan'=>"张三",
		'Telephone'=>"13912345678",
		'Department'=>"",
		'Address'=>"世纪大道100号",
		'Country'=>"浦东新区",
		'Street'=>"",
		'Square'=>"40000",
		'Flag_la'=>"N",
		'Latitude'=>"31.240246",
		'Flag_lo'=>"E",
		'Longitude'=>"121.514168",
		'ProStartTime'=>"2015-01-01",
		'Stage'=>""
	);
	array_push($stat_list,$map1);
	$map2=array(

		'StatCode'=>"120101002",
		'StatName'=>"港运大厦",
		'ChargeMan'=>"张三",
		'Telephone'=>"13912345678",
		'Department'=>"",
		'Address'=>"杨树浦路1963弄24号",
		'Country'=>"虹口区",
		'Street'=>"",
		'Square'=>"0",
		'Flag_la'=>"N",
		'Latitude'=>"31.255719",
		'Flag_lo'=>"E",
		'Longitude'=>"121.517700",
		'ProStartTime'=>"2016-04-01",
		'Stage'=>""
	);
	array_push($stat_list,$map2);
	$map3= array(

		'StatCode'=>"120101003",
		'StatName'=>"万宝国际广场",
		'ChargeMan'=>"张三",
		'Telephone'=>"13912345678",
		'Department'=>"",
		'Address'=>"延安西路500号",
		'Country'=>"长宁区",
		'Street'=>"",
		'Square'=>"0",
		'Flag_la'=>"N",
		'Latitude'=>"31.223441",
		'Flag_lo'=>"E",
		'Longitude'=>"121.442703",
		'ProStartTime'=>"2016-04-01",
		'Stage'=>""
	);
	array_push($stat_list,$map3);
	$map4= array(

		'StatCode'=>"120101004",
		'StatName'=>"金桥创科园",
		'ChargeMan'=>"李四",
		'Telephone'=>"13912345678",
		'Department'=>"",
		'Address'=>"桂桥路255号",
		'Country'=>"浦东新区",
		'Street'=>"",
		'Square'=>"0",
		'Flag_la'=>"N",
		'Latitude'=>"31.248271",
		'Flag_lo'=>"E",
		'Longitude'=>"121.615476",
		'ProStartTime'=>"2016-04-01",
		'Stage'=>""
	);
	array_push($stat_list,$map4);
	$map5= array(

		'StatCode'=>"120101006",
		'StatName'=>"江湾体育场",
		'ChargeMan'=>"李四",
		'Telephone'=>"13912345678",
		'Department'=>"",
		'Address'=>"国和路346号",
		'Country'=>"杨浦区",
		'Street'=>"",
		'Square'=>"0",
		'Flag_la'=>"N",
		'Latitude'=>"31.313004",
		'Flag_lo'=>"E",
		'Longitude'=>"121.525701",
		'ProStartTime'=>"2016-04-13",
		'Stage'=>""
	);
	array_push($stat_list,$map5);
	$map6= array(

		'StatCode'=>"120101007",
		'StatName'=>"滨海新村",
		'ChargeMan'=>"李四",
		'Telephone'=>"13912345678",
		'Department'=>"",
		'Address'=>"同泰北路100号",
		'Country'=>"宝山区",
		'Street'=>"",
		'Square'=>"0",
		'Flag_la'=>"N",
		'Latitude'=>"31.382624",
		'Flag_lo'=>"E",
		'Longitude'=>"121.501387",
		'ProStartTime'=>"2016-02-01",
		'Stage'=>""

	);
	array_push($stat_list,$map6);
	$map7= array(
		'StatCode'=>"120101008",
		'StatName'=>"银都苑",
		'ChargeMan'=>"李四",
		'Telephone'=>"13912345678",
		'Department'=>"",
		'Address'=>"银都路3118弄",
		'Country'=>"闵行区",
		'Street'=>"",
		'Square'=>"0",
		'Flag_la'=>"N",
		'Latitude'=>"31.101605",
		'Flag_lo'=>"E",
		'Longitude'=>"121.404873",
		'ProStartTime'=>"2016-02-01",
		'Stage'=>""

	);
	array_push($stat_list,$map7);
	$map8= array(
		'StatCode'=>"120101009",
		'StatName'=>"万科花园小城",
		'ChargeMan'=>"王五",
		'Telephone'=>"13912345678",
		'Department'=>"",
		'Address'=>"龙吴路5710号",
		'Country'=>"闵行区",
		'Street'=>"",
		'Square'=>"0",
		'Flag_la'=>"N",
		'Latitude'=>"31.043827",
		'Flag_lo'=>"E",
		'Longitude'=>"121.476450",
		'ProStartTime'=>"2016-02-18",
		'Stage'=>""

	);
	array_push($stat_list,$map8);
	$map9= array(
		'StatCode'=>"120101010",
		'StatName'=>"合生国际花园",
		'ChargeMan'=>"王五",
		'Telephone'=>"13912345678",
		'Department'=>"",
		'Address'=>"长兴东路1290",
		'Country'=>"松江区",
		'Street'=>"",
		'Square'=>"0",
		'Flag_la'=>"N",
		'Latitude'=>"31.088973",
		'Flag_lo'=>"E",
		'Longitude'=>"121.295459",
		'ProStartTime'=>"2016-02-18",
		'Stage'=>""

	);
	array_push($stat_list,$map9);
	$map10= array(
		'StatCode'=>"120101011",
		'StatName'=>"江南国际会议中心",
		'ChargeMan'=>"王五",
		'Telephone'=>"13912345678",
		'Department'=>"",
		'Address'=>"青浦区Y095(阁游路)",
		'Country'=>"青浦区",
		'Street'=>"",
		'Square'=>"0",
		'Flag_la'=>"N",
		'Latitude'=>"31.127234",
		'Flag_lo'=>"E",
		'Longitude'=>"121.062241",
		'ProStartTime'=>"2016-02-18",
		'Stage'=>""
	);
	array_push($stat_list,$map10);
	$map11= array(

		'StatCode'=>"120101012",
		'StatName'=>"佳邸别墅",
		'ChargeMan'=>"王五",
		'Telephone'=>"13912345678",
		'Department'=>"",
		'Address'=>"盈港路1555弄",
		'Country'=>"青浦区",
		'Street'=>"",
		'Square'=>"0",
		'Flag_la'=>"N",
		'Latitude'=>"31.164430",
		'Flag_lo'=>"E",
		'Longitude'=>"121.102934",
		'ProStartTime'=>"2016-02-18",
		'Stage'=>""
	);
	array_push($stat_list,$map11);
	$map12= array(

		'StatCode'=>"120101013",
		'StatName'=>"西郊河畔家园",
		'ChargeMan'=>"王五",
		'Telephone'=>"13912345678",
		'Department'=>"",
		'Address'=>"繁兴路469弄",
		'Country'=>"闵行区",
		'Street'=>"华漕镇",
		'Square'=>"0",
		'Flag_la'=>"N",
		'Latitude'=>"31.218057",
		'Flag_lo'=>"E",
		'Longitude'=>"121.297076",
		'ProStartTime'=>"2016-02-18",
		'Stage'=>""
	);
	array_push($stat_list,$map12);
	$map13= array(

		'StatCode'=>"120101014",
		'StatName'=>"东视大厦",
		'ChargeMan'=>"赵六",
		'Telephone'=>"13912345678",
		'Department'=>"",
		'Address'=>"东方路2000号",
		'Country'=>"浦东新区",
		'Street'=>"南码头",
		'Square'=>"0",
		'Flag_la'=>"N",
		'Latitude'=>"31.203650",
		'Flag_lo'=>"E",
		'Longitude'=>"121.526288",
		'ProStartTime'=>"2016-02-18",
		'Stage'=>""

	);
	array_push($stat_list,$map13);
	$map14= array(
		'StatCode'=>"120101015",
		'StatName'=>"曙光大厦",
		'ChargeMan'=>"赵六",
		'Telephone'=>"13912345678",
		'Department'=>"",
		'Address'=>"普安路189号",
		'Country'=>"黄埔区",
		'Street'=>"淮海中路街道",
		'Square'=>"0",
		'Flag_la'=>"N",
		'Latitude'=>"31.228283",
		'Flag_lo'=>"E",
		'Longitude'=>"121.485388",
		'ProStartTime'=>"2016-02-29",
		'Stage'=>""

	);
	array_push($stat_list,$map14);
	$map15= array(
		'StatCode'=>"120101017",
		'StatName'=>"上海贝尔",
		'ChargeMan'=>"赵六",
		'Telephone'=>"13912345678",
		'Department'=>"",
		'Address'=>"西藏北路525号",
		'Country'=>"闸北区",
		'Street'=>"芷江西路街道",
		'Square'=>"0",
		'Flag_la'=>"N",
		'Latitude'=>"31.256691",
		'Flag_lo'=>"E",
		'Longitude'=>"121.475583",
		'ProStartTime'=>"2016-03-15",
		'Stage'=>""

	);
	array_push($stat_list,$map15);
	$map16= array(
		'StatCode'=>"120101018",
		'StatName'=>"嘉宝大厦",
		'ChargeMan'=>"赵六",
		'Telephone'=>"13912345678",
		'Department'=>"",
		'Address'=>"洪德路1009号",
		'Country'=>"嘉定区",
		'Street'=>"马陆镇",
		'Square'=>"0",
		'Flag_la'=>"N",
		'Latitude'=>"31.357885",
		'Flag_lo'=>"E",
		'Longitude'=>"121.256060",
		'ProStartTime'=>"2015-03-19",
		'Stage'=>""

	);
	array_push($stat_list,$map16);
	$map17= array(
		'StatCode'=>"120101019",
		'StatName'=>"金山豪庭",
		'ChargeMan'=>"赵六",
		'Telephone'=>"13912345678",
		'Department'=>"",
		'Address'=>"卫清东路2988",
		'Country'=>"金山区",
		'Street'=>"",
		'Square'=>"0",
		'Flag_la'=>"N",
		'Latitude'=>"30.739094",
		'Flag_lo'=>"E",
		'Longitude'=>"121.360693",
		'ProStartTime'=>"2015-08-25",
		'Stage'=>""

	);
	array_push($stat_list,$map17);
	$map18= array(
		'StatCode'=>"120101020",
		'StatName'=>"临港城投大厦",
		'ChargeMan'=>"赵六",
		'Telephone'=>"13912345678",
		'Department'=>"",
		'Address'=>"环湖西一路333号",
		'Country'=>"浦东新区",
		'Street'=>"",
		'Square'=>"0",
		'Flag_la'=>"N",
		'Latitude'=>"30.900796",
		'Flag_lo'=>"E",
		'Longitude'=>"121.933166",
		'ProStartTime'=>"2015-11-30",
		'Stage'=>""
	);
	array_push($stat_list,$map18);
	$retval=array(
		'status'=>'true',
		'ret'=> $stat_list,
		'msg'=>'success',
		'auth'=>'true'
	);
    $jsonencode = _encode($retval);
	echo $jsonencode; break;
case "AlarmQuery":
/*
REQUEST:
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
RESPONSE:
	$body=array(
		'StatCode'=> $StatCode,
		'date'=> $query_date,
		'AlarmName'=> $AlarmName,
		'AlarmUnit'=> $AlarmUnit,
		'WarningTarget'=>$WarningTarget,
		'minute_head'=>$minute_head,
		'day_head'=>$day_head,
		'hour_head'=>$hour_head,
		'minute_alarm'=> $minute_alarm,
		'hour_alarm'=> $hour_alarm,
		'day_alarm'=> $day_alarm
		);
	$retval= array(
		'status'=>"true",
		'ret'=> $body,
		'msg'=>'success',
		'auth'=>'true'
	);
*/
	$user = $_GET["user"];
	$body_in = $_GET['body'];
	$StatCode = $body_in["StatCode"];
	$query_date = $body_in["date"];
	$query_type = $body_in["type"];
	$AlarmName= "噪声";
	$AlarmUnit="DB";
	$WarningTarget='65';
	$minute_alarm = array();
	$minute_head = array();
	for($i=0;$i<(60*24);$i++){
		array_push($minute_alarm,rand(10,110));
		array_push($minute_head,(string)$i);
	}
	$hour_alarm = array();
	$hour_head = array();
	for($i=0;$i<(7*24);$i++){
		array_push($hour_alarm,rand(10,110));
		array_push($hour_head,(string)$i);
	}
	$day_alarm = array();
	$day_head = array();
	for($i=0;$i<30;$i++){
		array_push($day_alarm,rand(10,110));
		array_push($day_head,(string)$i);
	}
	$body=array(
		'StatCode'=> $StatCode,
		'date'=> $query_date,
		'AlarmName'=> $AlarmName,
		'AlarmUnit'=> $AlarmUnit,
		'WarningTarget'=>$WarningTarget,
		'minute_head'=>$minute_head,
		'day_head'=>$day_head,
		'hour_head'=>$hour_head,
		'minute_alarm'=> $minute_alarm,
		'hour_alarm'=> $hour_alarm,
		'day_alarm'=> $day_alarm
		);
	$retval= array(
		'status'=>"true",
		'ret'=> $body,
		'msg'=>'success',
		'auth'=>'true'
	);
	$jsonencode = json_encode($retval,JSON_UNESCAPED_UNICODE);
	echo $jsonencode; break;
case "AlarmType":
/*
REQUEST:
    var map={
        action:"AlarmType",
		type:"query",
		user:usr.id
    };
RESPONSE:
	$retval=array(
		'status'=>'true',
		'ret'=> $ret,
		'msg'=>'success',
		'auth'=>'true'
	);
*/
	$ret = array();
	$map = array(
		'id'=>(string)0,
		'name'=>"噪音"
	);
	array_push($ret,$map);
	$map = array(
		'id'=>(string)1,
		'name'=>"扬尘"
	);
	array_push($ret,$map);
	$map = array(
		'id'=>(string)2,
		'name'=>"湿度"
	);
	array_push($ret,$map);
	$map = array(
		'id'=>(string)3,
		'name'=>"温度"
	);
	array_push($ret,$map);
	$map = array(
		'id'=>(string)4,
		'name'=>"细颗粒物"
	);
	array_push($ret,$map);
	$map = array(
		'id'=>(string)5,
		'name'=>"水质"
	);
	array_push($ret,$map);
	$map = array(
		'id'=>(string)6,
		'name'=>"SO2"
	);
	array_push($ret,$map);
	$map = array(
		'id'=>(string)7,
		'name'=>"风速"
	);
	array_push($ret,$map);
	$retval=array(
		'status'=>'true',
		'ret'=> $ret,
		'msg'=>'success',
		'auth'=>'true'
	);
    $jsonencode = _encode($retval);
	echo $jsonencode; break;
case "TableQuery":
/*
REQUEST:
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
RESPONSE:
	$body=array(
		'ColumnName'=> $column_name,
		'TableData'=>$row_content
		);
	$retval=array(
		'status'=>'true',
		'ret'=>$body,
		'msg'=>'success',
		'auth'=>'true'
		
	);
*/
	$body_in = $_GET['body'];
	$TableName = $body_in["TableName"];
	$Condition = $body_in["Condition"];
	//$Filter = $_GET["Filter"];

	$column = rand(10,20);
	$row = rand(40,100);
	$column_name = array();
	$row_content = array();
	for( $i=0;$i<$column;$i++){
		array_push($column_name,"第".(string)($i+1)."列");
	}
	for($i=0;$i<$row;$i++){
		$one_row = array();
		array_push($one_row,(string)($i+1));
		array_push($one_row,"备注".(string)($i+1));
		for($j=0;$j<($column-6);$j++) array_push($one_row,rand(10,110));
		
		//one_row.push("地址"+(i+1)+"xxxxx路"+(i+1)+"xxxxx号");
		array_push($one_row,"地址".((string)($i+1))."xxxxx路".((string)($i+1))."xxxxx号");
		//one_row.push("测试");
		array_push($one_row,"测试");
		//one_row.push("名称");
		array_push($one_row,"名称");
		//one_row.push("长数据长数据长数据"+(i+1)+"xxxxx路"+(i+1)+"xxxxx号");
		array_push($one_row,"长数据长数据长数据".((string)($i+1))."xxxxx路".((string)($i+1))."xxxxx号");
		array_push($row_content,$one_row);
		//row_content.push(one_row);
	}
	$body=array(
		'ColumnName'=> $column_name,
		'TableData'=>$row_content
		);
	$retval=array(
		'status'=>'true',
		'ret'=>$body,
		'msg'=>'success',
		'auth'=>'true'
		
	);
    $jsonencode = _encode($retval);
	echo $jsonencode; break;
case "SensorList":
/*
REQUEST:
    var map={
	action:"SensorList",
	type:"query",
	user:usr.id
    };
RESPONSE:
	$map = array(
		'id'=>"b01",
		'name'=>"rain",
		'nickname'=>"降雨",
		'memo'=>"降雨传感器",
		'code'=>""
	);
	array_push($ret,$map);
	$retval=array(
		'status'=>'true',
		'ret'=>$ret,
		'msg'=>'success',
		'auth'=>'true'
	);
*/
	$ret = array();
	$map = array(
			'id'=>"101",
			'name'=>"PM2.5",
			'nickname'=>"PM2.5",
			'memo'=>"PM2.5传感器",
			'code'=>""
		);
		array_push($ret,$map);
		$map = array(
			'id'=>"201",
			'name'=>"temperature",
			'nickname'=>"温度",
			'memo'=>"温度传感器",
			'code'=>""
		);
		array_push($ret,$map);
		$map = array(
			'id'=>"301",
			'name'=>"hum'id'ity",
			'nickname'=>"湿度",
			'memo'=>"湿度传感器",
			'code'=>""
		);
		array_push($ret,$map);
		$map = array(
			'id'=>"401",
			'name'=>"windspeed",
			'nickname'=>"风速",
			'memo'=>"风速传感器",
			'code'=>""
		);
		array_push($ret,$map);
		$map = array(
			'id'=>"501",
			'name'=>"winddir",
			'nickname'=>"风向",
			'memo'=>"风向传感器",
			'code'=>""
		);
		array_push($ret,$map);
		$map = array(
			'id'=>"601",
			'name'=>"PM2.5",
			'nickname'=>"PM2.5",
			'memo'=>"PM2.5传感器",
			'code'=>""
		);
		array_push($ret,$map);
		$map = array(
			'id'=>"701",
			'name'=>"noise",
			'nickname'=>"噪声",
			'memo'=>"噪声传感器",
			'code'=>""
		);
		array_push($ret,$map);
		$map = array(
			'id'=>"901",
			'name'=>"emc",
			'nickname'=>"emc",
			'memo'=>"EMC传感器"
		);
		array_push($ret,$map);
		$map = array(
			'id'=>"901",
			'name'=>"emc",
			'nickname'=>"emc",
			'memo'=>"EMC传感器",
			'code'=>""
		);
		array_push($ret,$map);
		$map = array(
			'id'=>"a01",
			'name'=>"airpressure",
			'nickname'=>"气压",
			'memo'=>"气压传感器",
			'code'=>""
		);
		array_push($ret,$map);
		$map = array(
			'id'=>"b01",
			'name'=>"rain",
			'nickname'=>"降雨",
			'memo'=>"降雨传感器",
			'code'=>""
		);
		array_push($ret,$map);
		$retval=array(
			'status'=>'true',
			'ret'=>$ret,
			'msg'=>'success',
			'auth'=>'true'
		);
		$jsonencode = _encode($retval);
		echo $jsonencode; break;
	case "DevSensor":
/*
REQUEST:
    var body={
        DevCode: DevCode
	};
    var map={
        action:"DevSensor",
        body:body,
	type:"query",
	user:usr.id
    };
RESPONSE:
	$map = array(
		'id'=>"a01",
		'status'=>"false",
		'para'=>$temp
	);
	array_push($ret,$map);
	$retval=array(
		'status'=>'true',
		'ret'=>$ret,
		'msg'=>'success',
		'auth'=>'true'
	);	
*/
		$body_in = $_GET['body'];
		$DevCode = $body_in["DevCode"];
		$paralist = array();
		for ($i=0;$i<10;$i++){
                $temp = array(
                    'name'=>"Parameter_".(string)$i,
                    'memo'=>"Parameter".(string)$i,
                    'value'=>"10"
                );
                array_push($paralist,$temp);
            }
		$ret = array();
		$map = array(
                'id'=>"101",
                'status'=>"true",
                'para'=>$paralist
            );
            array_push($ret,$map);
		$temp = array();
        $map = array(
                'id'=>"201",
                'status'=>"true",
                'para'=>$temp
            );
            array_push($ret,$map);
         $map = array(
                'id'=>"a01",
                'status'=>"false",
                'para'=>$temp
            );
            array_push($ret,$map);
		$retval=array(
				'status'=>'true',
                'ret'=>$ret,
				'msg'=>'success',
				'auth'=>'true'
		);
		$jsonencode = json_encode($retval,JSON_UNESCAPED_UNICODE);
		echo $jsonencode; break;
	case "SensorUpdate":
/*
REQUEST:
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
RESPONSE:
	$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);	
*/
		$body_in = $_GET['body'];
        $DevCode = $body_in["DevCode"];
        $SensorCode = $body_in["SensorCode"];
        $status = $body_in["status"];
        $ParaList = $body_in["ParaList"];
        $retval=array(
            'status'=>'true',
            'msg'=>'success',
			'auth'=>'true'
        );
        $jsonencode = _encode($retval);
        echo $jsonencode; break;
    case "SetUserMsg":
/*
REQUEST:
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
RESPONSE:
	$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);
*/
		$body_in = $_GET['body'];
        $usr = $body_in["id"];
        $msg = $body_in["msg"];
        $ifdev = $body_in["ifdev"];
        $retval=array(
            'status'=>'true',
            'msg'=>'success',
			'auth'=>'true'
        );
        $jsonencode = _encode($retval);
        echo $jsonencode; break;
    case "GetUserMsg":
/*
REQUEST:
    var body = {
        id: usr.id
	}
    var map = {
        action: "GetUserMsg",
        body:body,
	type:"query",
	user:usr.id
    };
RESPONSE:
	$body=array(
		'msg'=>'您好，今天是xxxx号，欢迎领导前来视察，今天的气温是 今天的PM2.5是....',
		'ifdev'=>"true"
	);
	$retval=array(
		'status'=>'true',
		'ret'=>$body,
		'msg'=>'success',
		'auth'=>'true'
	);	
*/
		$body_in = $_GET['body'];
        $usr = $body_in["id"];
		$body=array(
			'msg'=>'您好，今天是xxxx号，欢迎领导前来视察，今天的气温是 今天的PM2.5是....',
            'ifdev'=>"true"
		);
        $retval=array(
            'status'=>'true',
			'ret'=>$body,
            'msg'=>'success',
			'auth'=>'true'
        );
        $jsonencode = _encode($retval);
        echo $jsonencode; break;
    case "ShowUserMsg":
/*
REQUEST:
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
RESPONSE:
	$retval=array(
		'status'=>'true',
		'msg'=>$temp.'您好，今天是'.$temp.'号，欢迎领导前来视察，今天的气温是 今天的PM2.5是....',
		'auth'=>'true'
	);
*/
	$body_in = $_GET['body'];
	$usr = $body_in["id"];
	$StatCode = $body_in["StatCode"];
	$temp =(string)rand(1000,9999);
	$retval=array(
		 'status'=>'true',
		 'msg'=>$temp.'您好，今天是'.$temp.'号，欢迎领导前来视察，今天的气温是 今天的PM2.5是....',
		'auth'=>'true'
	);

	$jsonencode = _encode($retval);
	echo $jsonencode; break;
    case "GetUserImg":
/*
REQUEST:
    var body = {
        id: usr.id
	}
    var map = {
        action: "GetUserImg",
        body:body,
		type:"query",
		user:usr.id
    };
RESPONSE:
	$map = array(
		'name'=>"test".(string)$i.".jpg",
		'url'=>"assets/img/test".(string)$i.".jpg"
	);
	array_push($ImgList,$map);

	$retval=array(
		'status'=>'true',
		'ret'=>$ImgList,
		'msg'=>'success',
		'auth'=>'true'
	);	
*/
	$body_in = $_GET['body'];
        $usr = $body_in["id"];
        $ImgList = array();
        for ($i=1;$i<6;$i++){
            $map = array(
                'name'=>"test".(string)$i.".jpg",
                'url'=>$install_path."/screensaver/assets/img/test".(string)$i.".jpg"
            );
            array_push($ImgList,$map);
        }
        $retval=array(
			'status'=>'true',
			'ret'=>$ImgList,
			'msg'=>'success',
			'auth'=>'true'
        );
        $jsonencode = _encode($retval);
        echo $jsonencode; break;
    case "ClearUserImg":
/*
REQUEST:
    var body = {
        id: usr.id
    }
    var map = {
        action: "ClearUserImg",
        body:body,
		type:"query",
		user:usr.id
    };
RESPONSE:
	$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);
*/
	$body_in = $_GET['body'];
        $usr = $body_in["id"];
        $retval=array(
            'status'=>'true',
			'msg'=>'success',
			'auth'=>'true'
        );
        $jsonencode = _encode($retval);
        echo $jsonencode; break;
case "GetStaticMonitorTable":
/*
REQUEST:
    var map={
        action:"GetStaticMonitorTable",
		type:"query",
		user:usr.id
    };
RESPONSE:
	$body=array(
        'ColumnName'=> $column_name,
        'TableData'=>$row_content
	);
    $retval=array(
        'status'=>'true',
        'ret'=> $body,
		'msg'=>'success',
		'auth'=>'true'
    );
*/	
    $usr = $_GET["user"];
        $column = 16;
        $row = 40;
        $column_name = array();
        $row_content = array();
        //$geo_content = array();
        for( $i=0;$i<$column;$i++){
            array_push($column_name,"第".(string)($i+1)."列");
        }
        for($i=0;$i<$row;$i++){
            $one_row = array();
            //$geo = array();
    		//if($i%2==0){

    		//	array_push($geo,"31.223441");
    		//	array_push($geo,"121.442703");
    		//}else{

    		//	array_push($geo,"31.313004");
    		//	array_push($geo,"121.525701");
    		//}
            if($i%2==0){

    			array_push($one_row,"120101003");
    			array_push($one_row,"万宝国际广场");
            }else{

    			array_push($one_row,"120101006");
    			array_push($one_row,"江湾体育场");
            }
            for($j=0;$j<($column-6);$j++) array_push($one_row,rand(10,110));

            //one_row.push("地址"+(i+1)+"xxxxx路"+(i+1)+"xxxxx号");
            array_push($one_row,"地址".((string)($i+1))."xxxxx路".((string)($i+1))."xxxxx号");
            //one_row.push("测试");
            array_push($one_row,"测试");
            //one_row.push("名称");
            array_push($one_row,"名称");
            //one_row.push("长数据长数据长数据"+(i+1)+"xxxxx路"+(i+1)+"xxxxx号");
            array_push($one_row,"长数据长数据长数据".((string)($i+1))."xxxxx路".((string)($i+1))."xxxxx号");
            array_push($row_content,$one_row);
            //array_push($geo_content,$geo);
            //row_content.push(one_row);
        }
    	$body=array(
            'ColumnName'=> $column_name,
            'TableData'=>$row_content//,
            //'GeoData'=>$geo_content
    		);
        $retval=array(
            'status'=>'true',
            'ret'=> $body,
    		'msg'=>'success',
    		'auth'=>'true'
        );
        $jsonencode = _encode($retval);
    	echo $jsonencode; break;

    case "GetVideoList":
/*
REQUEST:
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
RESPONSE:
	$map = array(
		'id'=>"Video_" .$StatCode . "_"  .$date ."_" .$hour ."_" .(string)$j,
		'attr'=>"Video_" .$StatCode . "_"  .$date ."_" .$hour ."_" .(string)$j."视频属性"
	);
	array_push($VideoList,$map);
    
    $retval=array(
        'status'=>'true',
        'ret'=> $VideoList,
		'msg'=>'success',
		'auth'=>'true'
    );
*/
    $body_in = $_GET['body'];
    $usr = $_GET["user"];
    $StatCode = $body_in["StatCode"];
    $date = $body_in["date"];
    $hour = $body_in["hour"];
    $VideoList = array();
    for($j=0;$j<5;$j++) {

        $map = array(
            'id'=>"Video_" .$StatCode . "_"  .$date ."_" .$hour ."_" .(string)$j,
            'attr'=>"Video_" .$StatCode . "_"  .$date ."_" .$hour ."_" .(string)$j."视频属性"
        );
        array_push($VideoList,$map);
    }
    $retval=array(
        'status'=>'true',
        'ret'=> $VideoList,
		'msg'=>'success',
		'auth'=>'true'
    );
    $jsonencode = _encode($retval);
	echo $jsonencode; break;

    case "GetVideo":
/*
REQUEST:
var body = {
	videoid: videoid
};
var map = {
	action: "GetVideo",
	body: body;
	type:"query",
	user:"null"
};
RESPONSE:
$retval=array(
	'status'=>'true',
	'ret'=> "avorion.mp4",
	'msg'=>'success',
	'auth'=>'true'
);
*/
	$body_in = $_GET['body'];
    $videoid = $body_in["videoid"];
    $number = rand(1,11);
    if($number == 10){
        $retval=array(
            'status'=>'true',
            'ret'=> $install_path."/video/avorion.mp4",
			'msg'=>'success',
			'auth'=>'true'
        );
        $jsonencode = _encode($retval);
    	echo $jsonencode; break;
    }else{
        $retval=array(
            'status'=>'true',
            'ret'=> "downloading",
			'msg'=>'success',
			'auth'=>'true'
        );
        $jsonencode = _encode($retval);
        echo $jsonencode; break;
    }

    case "GetVersionList":
/*
REQUEST:
    var map={
        action:"GetVersionList",
		type:"query",
        user:usr.id
    };
RESPONSE:
	$retval=array(
        'status'=>'true',
        'ret'=> $verlist,
		'msg'=>'success',
		'auth'=>'true'
    );	
*/
    $verlist = array();
    for ($i=0;$i<10;$i++){
        array_push($verlist,"Ver ".(string)($i+1).".00");
    }
    $retval=array(
        'status'=>'true',
        'ret'=> $verlist,
		'msg'=>'success',
		'auth'=>'true'
    );
    $jsonencode = _encode($retval);
    echo $jsonencode; break;

    case "GetProjDevVersion":
/*
REQUEST:
    var body={
	ProjCode: ProjCode
	};
    var map={
        action:"GetProjDevVersion",
        type:"query",
        body: body,
        user:usr.id
    };
RESPONSE:
	$retval=array(
		'status'=>'true',
		'ret'=> $projdev,
		'msg'=>'success',
		'auth'=>'true'
	);	
*/
	$body_in = $_GET['body'];
        $ProjCode = $body_in["ProjCode"];
        $projdev = array();
        for($i=0;$i<5;$i++){
            for($j=0;$j<4;$j++){
                $temp = array(
                    'DevCode'=> $ProjCode."_".(string)$i."_".(string)$j,
                    'ProjName'=> "测量点".(string)$i,
                    'version'=> "Ver 1.00"
                );
                array_push($projdev,$temp);
            }
        }
        $retval=array(
            'status'=>'true',
            'ret'=> $projdev,
			'msg'=>'success',
			'auth'=>'true'
        );
        $jsonencode = _encode($retval);
        echo $jsonencode; break;

    case "UpdateDevVersion":
/*
REQUEST:
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
RESPONSE:
	$retval=array(
        'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
    );	
*/
    $usr = $_GET["user"];
		$body_in = $_GET['body'];
    $list = $body_in["list"];
    $version = $body_in["version"];
    $retval=array(
        'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
    );
    $jsonencode = _encode($retval);
    echo $jsonencode; break;
case "GetCameraStatus":
/*
REQUEST:
    var body = {
	StatCode:statcode
    };
    var map = {
        action: "GetCameraStatus",
        body:body,
		type:"query",
		user:usr.id
    };
RESPONSE:
	$camerastatus=array(
		'v'=>"120~",
		'h'=>"120~",
		'url'=>"./video/screenshot/".(string)$videocode.".png"
	);
	$retval=array(
		'status'=>'true',
		'ret'=>$camerastatus,
		'msg'=>'success',
		'auth'=>'true'
	);
*/
	$usr = $_GET["user"];
	
		$body_in = $_GET['body'];
	$StatCode = $body_in["StatCode"];
	$videocode = rand(1,5);
	$camerastatus=array(
	   'v'=>"120~",
	   'h'=>"120~",
	   'url'=>$install_path."/video/screenshot/".(string)$videocode.".png"
	);
	$retval=array(
		'status'=>'true',
		'ret'=>$camerastatus,
		'msg'=>'success',
		'auth'=>'true'
	);
	$jsonencode = _encode($retval);
	echo $jsonencode; break;

case "GetCameraUnit":
/*
REQUEST:
    var map = {
        action: "GetCameraUnit",
		type:"query",
		user:usr.id
    };
RESPONSE:
	$camera=array(
		'v'=>"3~",
		'h'=>"3~"
	);
	$retval=array(
		'status'=>'true',
		'ret'=>$camera,
		'msg'=>'success',
		'auth'=>'true'
	);
*/
	$camera=array(
		'v'=>"3~",
		'h'=>"3~"
	);
	$retval=array(
		'status'=>'true',
		'ret'=>$camera,
		'msg'=>'success',
		'auth'=>'true'
	);
	$jsonencode = _encode($retval);
	echo $jsonencode; break;




case "CameraVAdj":
/*
REQUEST:
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

RESPONSE:
	$camerastatus=array(
		'v'=>"120~",
		'h'=>"120~",
		'url'=>"./video/screenshot/".(string)$videocode.".png"
	);
	$retval=array(
		'status'=>'true',
		'ret'=>$camerastatus,
		'msg'=>'success',
		'auth'=>'true'
	);
*/

		$body_in = $_GET['body'];
	$usr = $_GET["user"];
	$StatCode = $body_in["StatCode"];
	$adj = $body_in["adj"];
	$videocode = rand(1,5);
	$camerastatus=array(
	   'v'=>"120~",
	   'h'=>"120~",
	   'url'=>$install_path."/video/screenshot/".(string)$videocode.".png"
	);
	$retval=array(
		'status'=>'true',
		'ret'=>$camerastatus,
		'msg'=>'success',
		'auth'=>'true'
	);
	$jsonencode = _encode($retval);
	echo $jsonencode; break;
case "CameraHAdj":
    /*
            var usr = data.id;
            var StatCode = data.StatCode;
            var adj = data.adj;
            var videocode = GetRandomNum(1,5);
            var camerastatus={
                h:"120~",
                v:"120~",
                url:"/video/screenshot/"+videocode+".png"
            }
            var retval={
                status:"true",
                ret:camerastatus
            }
            return JSON.stringify(retval);
    */
	$usr = $_GET["user"];
	$body_in = $_GET['body'];
	$StatCode = $body_in["StatCode"];
	$adj = $body_in["adj"];
	$videocode = rand(1,5);
	$camerastatus=array(
		'v'=>"120~",
		'h'=>"120~",
		'url'=>$install_path."/video/screenshot/".(string)$videocode.".png"
	);
	$retval=array(
		'status'=>'true',
		'ret'=>$camerastatus,
		'msg'=>'success',
		'auth'=>'true'
	);
	$jsonencode = _encode($retval);
	echo $jsonencode; break;
    case "OpenLock":
/*
REQUEST:
    var body={StatCode:statcode};
    var map = {
        action: "OpenLock",
        body:body,
        type:"mod",
        user:usr.id
    };
RESPONSE:
	$retval=array(
		'status'=>'true',
		'auth'=>$auth,
		'msg'=>"1231231"
	);	
*/
	$body_in = $_GET['body'];
        $usr = $_GET["user"];
        $StatCode = $body_in["StatCode"];
        $auth = rand(1,4);
        if($auth == 3) $auth = "false";
        else $auth="true";
        $retval=array(
			'status'=>'true',
			'auth'=>$auth,
			'msg'=>"1231231"
		);
        $jsonencode = _encode($retval);
        echo $jsonencode; break;
    case "UserKey":
/*
REQUEST:
    var body = {
        userid: user
    }
    var map={
        action:"UserKey",
        body:body,
        type:"query",
        user:usr.id
    };
RESPONSE:
	$retval=array(
		'status'=>'true',
		'ret'=> $proj_keylist,
		'auth'=>'true',
		'msg'=>''
	);	
*/
$body_in = $_GET['body'];
        $usr = $body_in ["userid"];
        $usr_keylist = array();
        $temp = array(
            'id'=>"xxx1",
        	'name'=>"0440",
        	'domain'=>"区域2"
        );
        array_push($usr_keylist,$temp);
        $temp = array(
            'id'=>"xxx2",
            'name'=>"0440",
            'domain'=>"区域2"
        );
        array_push($usr_keylist,$temp);
        $temp = array(
            'id'=>"xxx1",
            'name'=>"0440",
            'domain'=>"区域3"
        );
        array_push($usr_keylist,$temp);
        $retval=array(
            'status'=>'true',
            'ret'=>$usr_keylist
        );
        $jsonencode = _encode($retval);
        echo $jsonencode; break;
    case "ProjKeyList":
/*
REQUEST:
    var map={
        action:"ProjKeyList",
		type:"query",
		user:usr.id
    };
RESPONSE:
	$temp = array(
		'id'=> (string)($i+1),
		'name'=> "钥匙".(string)($i+1),
		'ProjCode'=> $projcode,
		'username'=>"巡检员".(string)($i+1)
	);
	array_push($proj_keylist,$temp);
	$retval=array(
		'status'=>'true',
		'ret'=> $proj_keylist,
		'auth'=>'true',
		'msg'=>''
	);
*/
        $proj_keylist = array();
        for($i=0;$i<40;$i++){
            $projcode = ($i)%14;
            $temp = array(
                'id'=> (string)($i+1),
                'name'=> "钥匙".(string)($i+1),
                'ProjCode'=> $projcode,
                'username'=>"巡检员".(string)($i+1)
            );
            array_push($proj_keylist,$temp);
        }
        $retval=array(
            'status'=>'true',
            'ret'=> $proj_keylist,
			'auth'=>'true',
			'msg'=>''
        );


        $jsonencode = _encode($retval);
        echo $jsonencode; break;
    case "ProjKey":
/*
REQUEST:
    var body={
	ProjCode: ProjCode
    };
    var map={
        action:"ProjKey",
        type:"query",
        body: body,
        user:usr.id
    };
RESPONSE:
	$temp = array(
		'id'=>"0xh0",
		'name'=>"0xh0",
		'username'=>"未授予"
	);
	array_push($proj_keylist,$temp);
	$retval=array(
		'status'=>'true',
		'ret'=>$proj_keylist,
		'msg'=>'success',
		'auth'=>'true'
	);
*/
$body_in = $_GET['body'];
        $projcode = $body_in["ProjCode"];
        $proj_keylist = array();


        $proj_keylist = array();
        $temp = array(
            'id'=>"0440",
            'name'=>"0440",
            'username'=>"巡检员1"
        );
        array_push($proj_keylist,$temp);
        $temp = array(
            'id'=>"04433",
            'name'=>"04433",
            'username'=>"巡检员2"
        );
        array_push($proj_keylist,$temp);
        $temp = array(
            'id'=>"0xh0",
            'name'=>"0xh0",
            'username'=>"未授予"
        );
        array_push($proj_keylist,$temp);
        $retval=array(
            'status'=>'true',
            'ret'=>$proj_keylist,
			'msg'=>'success',
			'auth'=>'true'
        );
        $jsonencode = _encode($retval);
        echo $jsonencode; break;
	case "ProjUserList":
/*
REQUEST:
	var map={
        action:"ProjUserList",
		type:"query",
	    user:usr.id
    };
RESPONSE:
	$temp = array(
		'id'=> (string)($i+1),
		'name'=> "巡检员".(string)($i+1),
		'ProjCode'=> $projcode
	);
	array_push($proj_userlist,$temp);
	
	$retval=array(
		'status'=>'true',
		'ret'=> $proj_userlist,
		'msg'=>'success',
		'auth'=>'true'
	);
*/
        $proj_userlist = array();
        for($i=0;$i<40;$i++){
            $projcode = ($i)%14;
            $temp = array(
                'id'=> (string)($i+1),
                'name'=> "巡检员".(string)($i+1),
                'ProjCode'=> $projcode
            );
            array_push($proj_userlist,$temp);
        }
        $retval=array(
            'status'=>'true',
            'ret'=> $proj_userlist,
			'msg'=>'success',
			'auth'=>'true'
        );


        $jsonencode = _encode($retval);
        echo $jsonencode; break;
    case "KeyTable":
/*
REQUEST:
    var body={
        startseq: start,
        length:length
    };
    var map={
        action:"KeyTable",
        type:"query",
        body: body,
        user:usr.id
    };
RESPONSE:
	$body=array(
		'start'=> (string)$start,
		'total'=> (string)$total,
		'length'=>(string)$query_length,
		'keytable'=> $keytable	
	);
	$retval=array(
		'status'=>'true',
		'ret'=> $body,
		'msg'=>'success',
		'auth'=>'true'
	);
*/
        $total = 94;
		
		$body_in = $_GET['body'];
        $query_length = (int)($body_in['length']);
        $start = (int)($body_in['startseq']);
        if($query_length> $total-$start){$query_length = $total-$start;}
        $keytable = array();
        for($i=0;$i<$query_length;$i++){
            $type="R";
            if(($i%7)==0) $type= "B";
            if(($i%5)==0) $type= "P";
            if(($i%11)==0) $type= "I";
    		$temp = array(
    			'KeyCode'=>(string)($start+($i+1)),
    			'KeyName'=>"key".(string)($start+($i+1)),
    			'KeyType'=>$type,
    			'HardwareCode'=>"xdsdsd",
    			'KeyProj'=>(string)($start%5),
    			'KeyProjName'=>"区域".(string)($start+$i),
				'KeyUser'=>"user",
    			'KeyUserName'=>"user",
    			'Memo'=>"备注".(string)($start+$i)
    		);
    		array_push($keytable,$temp);
        }
		$body=array(
			'start'=> (string)$start,
    		'total'=> (string)$total,
    		'length'=>(string)$query_length,
    		'keytable'=> $keytable	
		);
    	$retval=array(
    		'status'=>'true',
    		'ret'=> $body,
			'msg'=>'success',
			'auth'=>'true'
    	);
    	$jsonencode = _encode($retval);
    	echo $jsonencode; break;
    case "KeyNew":
/*
REQUEST:
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
RESPONSE:
	$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);	
*/
    	$retval=array(
    		'status'=>'true',
			'msg'=>'success',
			'auth'=>'true'
    	);
        $jsonencode = _encode($retval);
    	echo $jsonencode; break;
	case "KeyMod":
/*
REQUEST:
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
RESPONSE:
	$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);
*/
    	$retval=array(
    		'status'=>'true',
			'msg'=>'success',
			'auth'=>'true'
    	);
        $jsonencode = _encode($retval);
    	echo $jsonencode; break;
    case "KeyDel":
/*
REQUEST:
    var body={
        KeyCode: id
    };
    var map={
        action:"KeyDel",
        type:"mod",
        body: body,
        user:usr.id
    };
RESPONSE:
	$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);
*/
    	$retval=array(
    		'status'=>'true',
			'msg'=>'success',
			'auth'=>'true'
    	);
        $jsonencode = _encode($retval);
    	echo $jsonencode; break;
    case "DomainAuthlist":
/*
REQUEST:
    var body={
		DomainCode:DomainCode
    };
    var map={
        action:"DomainAuthlist",
        body:body,
		type:"query",
		user:usr.id
    };
RESPONSE:
	$temp = array(
		'AuthId'=>(string)($i),
		'DomainId'=>"区域".(string)($i),
		'DomainName'=>"区域".(string)($i),
		'KeyId'=>"钥匙".(string)($i),
		'KeyName'=>"钥匙".(string)($i),
		'UserId'=>"用户".(string)($i),
		'UserName'=>"用户".(string)($i),
		'AuthWay'=>"sssssss"
	);
	array_push($authlist,$temp);
	
	$retval=array(
		'status'=>'true',
		'ret'=>$authlist,
		'msg'=>'success',
		'auth'=>'true'
	);
*/
		$body_in = $_GET['body'];
        $DomainCode=$body_in['DomainCode'];
        $authlist = array();
        for($i=0;$i<5;$i++){
			$temp = array(
				'AuthId'=>(string)($i),
				'DomainId'=>"区域".(string)($i),
				'DomainName'=>"区域".(string)($i),
				'KeyId'=>"钥匙".(string)($i),
				'KeyName'=>"钥匙".(string)($i),
				'UserId'=>"用户".(string)($i),
				'UserName'=>"用户".(string)($i),
				'AuthWay'=>"sssssss"
			);
			array_push($authlist,$temp);
		}
		$retval=array(
			'status'=>'true',
			'ret'=>$authlist,
			'msg'=>'success',
			'auth'=>'true'
		);
		$jsonencode = _encode($retval);
		echo $jsonencode; break;
    case "KeyAuthlist":
/*
REQUEST:
    var body={KeyCode: KeyId};
    var map={
        action:"KeyAuthlist",
        body:body,
		type:"query",
		user:usr.id
    };
RESPONSE:
	$temp = array(
		'AuthId'=>(string)($i),
		'DomainId'=>"区域".(string)($i),
		'DomainName'=>"区域".(string)($i),
		'KeyId'=>"钥匙".(string)($i),
		'KeyName'=>"钥匙".(string)($i),
		'UserId'=>"用户".(string)($i),
		'UserName'=>"用户".(string)($i),
		'AuthWay'=>"sssssss"
	);
	array_push($authlist,$temp);
	
	$retval=array(
		'status'=>'true',
		'ret'=>$authlist,
		'msg'=>'success',
		'auth'=>'true'
	);
*/
		$body_in = $_GET['body'];
        $keyid=$body_in ['KeyCode'];
        $authlist = array();
        for($i=0;$i<5;$i++){
			$temp = array(
				'AuthId'=>(string)($i),
				'DomainId'=>"区域".(string)($i),
				'DomainName'=>"区域".(string)($i),
				'KeyId'=>"钥匙".(string)($i),
				'KeyName'=>"钥匙".(string)($i),
				'UserId'=>"用户".(string)($i),
				'UserName'=>"用户".(string)($i),
				'AuthWay'=>"sssssss"
			);
			array_push($authlist,$temp);
        }
        $retval=array(
			'status'=>'true',
			'ret'=>$authlist,
			'msg'=>'success',
			'auth'=>'true'
		);
		$jsonencode = _encode($retval);
		echo $jsonencode; break;
    case "KeyGrant":
/*
REQUEST:
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
RESPONSE:
	$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);
*/
        	$retval=array(
        		'status'=>'true',
				'msg'=>'success',
				'auth'=>'true'
        	);
            $jsonencode = _encode($retval);
        	echo $jsonencode; break;
    case "KeyAuthNew":
/*
REQUEST:
    var body={
        DomainId: DomainId,
        KeyId:KeyId,
        Authway:authway
    };
    var map={
        action:"KeyAuthNew",
        body:auth,
        type:"mod",
        user:usr.id
    };
RESPONSE:
	$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);	
*/
        $retval=array(
            'status'=>'true',
            'msg'=>'success',
			'auth'=>'true'
        );
        $jsonencode = _encode($retval);
        echo $jsonencode; break;
	case "KeyAuthDel":
/*
REQUEST:
    var body={AuthId:authid};
    var map={
        action:"KeyAuthDel",
        body:body,
        type:"mod",
        user:usr.id
    };
RESPONSE;
	$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);	
*/
        $retval=array(
            'status'=>'true',
            'msg'=>'success',
			'auth'=>'true'
        );
        $jsonencode = _encode($retval);
        echo $jsonencode; break;
    case "KeyHistory":
        /*
        REQUEST:
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
        RESPONSE:
            $body=array(
                'ColumnName'=> $column_name,
                'TableData'=>$row_content
            );
            $retval=array(
                'status'=>'true',
                'ret'=>$body,
                'msg'=>'success',
                'auth'=>'true'
            );
        */
                $usr = $_GET["user"];
                $condition = $_GET["body"];
            $column = 16;
            $row = 40;
            $column_name = array();
            $row_content = array();
            for( $i=0;$i<$column;$i++){
                array_push($column_name,"第".(string)($i+1)."列");
            }
            for($i=0;$i<$row;$i++){
                $one_row = array();
                array_push($one_row,(string)($i+1));
                array_push($one_row,"备注".(string)($i+1));
                for($j=0;$j<($column-6);$j++) array_push($one_row,rand(10,110));

                //one_row.push("地址"+(i+1)+"xxxxx路"+(i+1)+"xxxxx号");
                array_push($one_row,"地址".((string)($i+1))."xxxxx路".((string)($i+1))."xxxxx号");
                //one_row.push("测试");
                array_push($one_row,"测试");
                //one_row.push("名称");
                array_push($one_row,"名称");
                //one_row.push("长数据长数据长数据"+(i+1)+"xxxxx路"+(i+1)+"xxxxx号");
                array_push($one_row,"长数据长数据长数据".((string)($i+1))."xxxxx路".((string)($i+1))."xxxxx号");
                array_push($row_content,$one_row);
                //row_content.push(one_row);
            }
            $body=array(
                'ColumnName'=> $column_name,
                'TableData'=>$row_content
            );
            $retval=array(
                'status'=>'true',
                'ret'=>$body,
                'msg'=>'success',
                'auth'=>'true'
            );
            $jsonencode = _encode($retval);
            echo $jsonencode; break;
case "AttendanceHistory":
    /*
    REQUEST:
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
    RESPONSE:
        $body=array(
            'ColumnName'=> $column_name,
            'TableData'=>$row_content
        );
        $retval=array(
            'status'=>'true',
            'ret'=>$body,
            'msg'=>'success',
            'auth'=>'true'
        );
    */
            $usr = $_GET["user"];
            $condition = $_GET["body"];
        $column = 16;
        $row = 40;
        $column_name = array();
        $row_content = array();
        for( $i=0;$i<$column;$i++){
            array_push($column_name,"第".(string)($i+1)."列");
        }
        for($i=0;$i<$row;$i++){
            $one_row = array();
            array_push($one_row,(string)($i+1));
            array_push($one_row,"备注".(string)($i+1));
            for($j=0;$j<($column-6);$j++) array_push($one_row,rand(10,110));

            //one_row.push("地址"+(i+1)+"xxxxx路"+(i+1)+"xxxxx号");
            array_push($one_row,"地址".((string)($i+1))."xxxxx路".((string)($i+1))."xxxxx号");
            //one_row.push("测试");
            array_push($one_row,"测试");
            //one_row.push("名称");
            array_push($one_row,"名称");
            //one_row.push("长数据长数据长数据"+(i+1)+"xxxxx路"+(i+1)+"xxxxx号");
            array_push($one_row,"长数据长数据长数据".((string)($i+1))."xxxxx路".((string)($i+1))."xxxxx号");
            array_push($row_content,$one_row);
            //row_content.push(one_row);
        }
        $body=array(
            'ColumnName'=> $column_name,
            'TableData'=>$row_content
        );
        $retval=array(
            'status'=>'true',
            'ret'=>$body,
            'msg'=>'success',
            'auth'=>'true'
        );
        $jsonencode = _encode($retval);
        echo $jsonencode; break;
case "AttendanceNew":
/*
REQUEST:
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
RESPONSE:
$retval=array(
	'status'=>'true',
	'msg'=>'success',
	'auth'=>'true'
);
*/
	$body= $_GET['body'];
	$auth = array() ;
    if(isset($_GET['auth'])) $auth= $body['auth'];
	$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);
    $jsonencode = _encode($retval);
	echo $jsonencode; break;

case "AttendanceDel":
/*
REQUEST:
var body = {
        attendanceid: id
    };
    var map={
        action:"AttendanceDel",
        type:"mod",
        body: body,
        user:usr.id
    };
RESPONSE:
$retval=array(
	'status'=>'true',
	'msg'=>'success',
	'auth'=>'true'
);
*/
	$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);
    $jsonencode = _encode($retval);
	echo $jsonencode; break;
case "ExportTable":
/*
REQUEST:
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
RESPONSE:
	$body=array(
        'ColumnName'=> $column_name,
        'TableData'=>$row_content
	);
    $retval=array(
        'status'=>'true',
		'ret'=>$body,
		'msg'=>'success',
		'auth'=>'true'
    );
*/
        $usr = $_GET["user"];
        $condition = $_GET["body"];
    $column = 16;
    $row = 40;
    $column_name = array();
    $row_content = array();
    for( $i=0;$i<$column;$i++){
        array_push($column_name,"第".(string)($i+1)."列");
    }
    for($i=0;$i<$row;$i++){
        $one_row = array();
        array_push($one_row,(string)($i+1));
        array_push($one_row,"备注".(string)($i+1));
        for($j=0;$j<($column-6);$j++) array_push($one_row,rand(10,110));

        //one_row.push("地址"+(i+1)+"xxxxx路"+(i+1)+"xxxxx号");
        array_push($one_row,"地址".((string)($i+1))."xxxxx路".((string)($i+1))."xxxxx号");
        //one_row.push("测试");
        array_push($one_row,"测试");
        //one_row.push("名称");
        array_push($one_row,"名称");
        //one_row.push("长数据长数据长数据"+(i+1)+"xxxxx路"+(i+1)+"xxxxx号");
        array_push($one_row,"长数据长数据长数据".((string)($i+1))."xxxxx路".((string)($i+1))."xxxxx号");
        array_push($row_content,$one_row);
        //row_content.push(one_row);
    }
	$body=array(
        'ColumnName'=> $column_name,
        'TableData'=>$row_content
	);
    $retval=array(
        'status'=>'true',
		'ret'=>$body,
		'msg'=>'success',
		'auth'=>'true'
    );
    $jsonencode = _encode($retval);
	echo $jsonencode; break;
	case "VersionInformation":
/*
REQUEST:
    var map={
        action:"VersionInformation",
        type:"query",
        user:usr.id
    };
RESPONSE:
		$body = array();
		for($i=0;$i<4;$i++){
			$text = "number ".((string)($i+1))." line.";
			array_push($body,$text);
		}
		$retval=array(
			'status'=>'true',
			'ret'=>$body,
			'msg'=>'success',
			'auth'=>'true'
		);
*/
		$body = array();
		for($i=0;$i<4;$i++){
			$text = "number ".((string)($i+1))." line.";
			array_push($body,$text);
		}
		$retval=array(
			'status'=>'true',
			'ret'=>$body,
			'msg'=>'success',
			'auth'=>'true'
		);
		$jsonencode = _encode($retval);
		echo $jsonencode; break;
	case "ProjUpdateStrategyList":
		/*
        REQUEST:
            var body = {
        		ProjCode : ProjCode
        	};
            var map={
                action:"ProjUpdateStrategyList",
                body:body,
        		type:"query",
        		user:usr.id
            };
        RESPONSE:
        	$body=array(
        		'ColumnName'=> $column_name,
        		'TableData'=>$row_content
        		);
        	$retval=array(
        		'status'=>'true',
        		'ret'=>$body,
        		'msg'=>'success',
        		'auth'=>'true'
        	);
        */
		$body_in = $_GET['body'];
		$ProjCode = $body_in["ProjCode"];
		$column = 16;
		$row = 40;
		$column_name = array();
		$row_content = array();
		for( $i=0;$i<$column;$i++){
			array_push($column_name,"第".(string)($i+1)."列");
		}
		for($i=0;$i<$row;$i++){
			$one_row = array();
			array_push($one_row,(string)($i+1));
			$flag = rand(0,1);
			if($flag == 0){
				array_push($one_row,"Y");
			}else{
				array_push($one_row,"N");
			}
			for($j=0;$j<($column-6);$j++) array_push($one_row,rand(10,110));

			//one_row.push("地址"+(i+1)+"xxxxx路"+(i+1)+"xxxxx号");
			array_push($one_row,"地址".((string)($i+1))."xxxxx路".((string)($i+1))."xxxxx号");
			//one_row.push("测试");
			array_push($one_row,"测试");
			//one_row.push("名称");
			array_push($one_row,"名称");
			//one_row.push("长数据长数据长数据"+(i+1)+"xxxxx路"+(i+1)+"xxxxx号");
			array_push($one_row,"长数据长数据长数据".((string)($i+1))."xxxxx路".((string)($i+1))."xxxxx号");
			array_push($row_content,$one_row);
			//row_content.push(one_row);
		}
		$body=array(
			'ColumnName'=> $column_name,
			'TableData'=>$row_content
			);
		$retval=array(
			'status'=>'true',
			'ret'=>$body,
			'msg'=>'success',
			'auth'=>'true'

		);
		$jsonencode = _encode($retval);
		echo $jsonencode; break;
	case "ProjVersionStrategyChange":
/*
REQUEST:
	var body={
		ProjCode:ProjCode,
		UpdateLine:Line
	}
    var map={
        action:"ProjVersionStrategyChange",
        body:body,
        type:"mod",
        user:usr.id
    };
RESPONSE:
	$retval=array(
		'status'=>'true',
		'msg'=>'success',
		'auth'=>'true'
	);
*/
		$retval=array(
			'status'=>'true',
			'msg'=>'success',
			'auth'=>'true'
		);
		$jsonencode = _encode($retval);
		echo $jsonencode; break;

	case "PointUpdateStrategyChange":
	/*
    REQUEST:
    	var body={
    		StatCode:StatCode,
    		AutoUpdate:AutoUpdate
    	}
        var map={
            action:"PointUpdateStrategyChange",
            body:body,
            type:"mod",
            user:usr.id
        };
    RESPONSE:
    	$retval=array(
    		'status'=>'true',
    		'msg'=>'success',
    		'auth'=>'true'
    	);
    */
		$retval=array(
			'status'=>'true',
			'msg'=>'success',
			'auth'=>'true'
		);
		$jsonencode = _encode($retval);
		echo $jsonencode; break;
	case "ProjUpdateStrategyChange":
	/*
    REQUEST:
    	var body={
    		ProjCode:ProjCode,
    		AutoUpdate:AutoUpdate
    	}
        var map={
            action:"ProjVersionStrategyChange",
            body:body,
            type:"mod",
            user:usr.id
        };
    RESPONSE:
    	$retval=array(
    		'status'=>'true',
    		'msg'=>'success',
    		'auth'=>'true'
    	);
    */
		$retval=array(
			'status'=>'true',
			'msg'=>'success',
			'auth'=>'true'
		);
		$jsonencode = _encode($retval);
		echo $jsonencode; break;
	case "GetProjUpdateStrategy":
	/*
	REQUEST:
		var body={
			ProjCode:ProjCode
		}
		var map={
			action:"GetProjUpdateStrategy",
			body:body,
			type:"query",
			user:usr.id
		};
	RESPONSE:
		$body=array(
			'VersionLine'=>1
		);
		$retval=array(
			'status'=>'true',
			'body'=>$body,
			'msg'=>'success',
			'auth'=>'true'
		);
	*/
		$body=array(
			'VersionLine'=>"1"
		);
		$retval=array(
			'status'=>'true',
			'ret'=>$body,
			'msg'=>'success',
			'auth'=>'true'
		);
		$jsonencode = _encode($retval);
		echo $jsonencode; break;
	case "MonitorAlarmList":
    /*
    REQUEST:
        var map={
            action:"MonitorAlarmList",
            type:"query",
            user:usr.id
        };
    RESPONSE:
    	$map18= array(
    		'StatCode'=>"120101020",
    		'StatName'=>"临港城投大厦",
    		'ChargeMan'=>"赵六",
    		'Telephone'=>"13912345678",
    		'Department'=>"",
    		'Address'=>"环湖西一路333号",
    		'Country'=>"浦东新区",
    		'Street'=>"",
    		'Square'=>"0",
    		'Flag_la'=>"N",
    		'Latitude'=>"30.900796",
    		'Flag_lo'=>"E",
    		'Longitude'=>"121.933166",
    		'ProStartTime'=>"2015-11-30",
    		'Stage'=>""
    	);
    	array_push($stat_list,$map18);
    	$retval=array(
    		'status'=>'true',
    		'ret'=> $stat_list,
    		'msg'=>'success',
    		'auth'=>'true'
    	);
    */
    	$userid = $_GET["user"];
    	$stat_list = array();
    	$map1=array(
    		'StatCode'=>"120101001",
    		'StatName'=>"浦东环球金融中心工程",
    		'ChargeMan'=>"张三",
    		'Telephone'=>"13912345678",
    		'Department'=>"",
    		'Address'=>"世纪大道100号",
    		'Country'=>"浦东新区",
    		'Street'=>"",
    		'Square'=>"40000",
    		'Flag_la'=>"N",
    		'Latitude'=>"31.240246",
    		'Flag_lo'=>"E",
    		'Longitude'=>"121.514168",
    		'ProStartTime'=>"2015-01-01",
    		'Stage'=>""
    	);
    	array_push($stat_list,$map1);
    	$map2=array(

    		'StatCode'=>"120101002",
    		'StatName'=>"港运大厦",
    		'ChargeMan'=>"张三",
    		'Telephone'=>"13912345678",
    		'Department'=>"",
    		'Address'=>"杨树浦路1963弄24号",
    		'Country'=>"虹口区",
    		'Street'=>"",
    		'Square'=>"0",
    		'Flag_la'=>"N",
    		'Latitude'=>"31.255719",
    		'Flag_lo'=>"E",
    		'Longitude'=>"121.517700",
    		'ProStartTime'=>"2016-04-01",
    		'Stage'=>""
    	);
    	array_push($stat_list,$map1);
    	$map3= array(

    		'StatCode'=>"120101003",
    		'StatName'=>"万宝国际广场",
    		'ChargeMan'=>"张三",
    		'Telephone'=>"13912345678",
    		'Department'=>"",
    		'Address'=>"延安西路500号",
    		'Country'=>"长宁区",
    		'Street'=>"",
    		'Square'=>"0",
    		'Flag_la'=>"N",
    		'Latitude'=>"31.223441",
    		'Flag_lo'=>"E",
    		'Longitude'=>"121.442703",
    		'ProStartTime'=>"2016-04-01",
    		'Stage'=>""
    	);
    	array_push($stat_list,$map3);
    	$map4= array(

    		'StatCode'=>"120101004",
    		'StatName'=>"金桥创科园",
    		'ChargeMan'=>"李四",
    		'Telephone'=>"13912345678",
    		'Department'=>"",
    		'Address'=>"桂桥路255号",
    		'Country'=>"浦东新区",
    		'Street'=>"",
    		'Square'=>"0",
    		'Flag_la'=>"N",
    		'Latitude'=>"31.248271",
    		'Flag_lo'=>"E",
    		'Longitude'=>"121.615476",
    		'ProStartTime'=>"2016-04-01",
    		'Stage'=>""
    	);
    	array_push($stat_list,$map4);
    	$map5= array(

    		'StatCode'=>"120101006",
    		'StatName'=>"江湾体育场",
    		'ChargeMan'=>"李四",
    		'Telephone'=>"13912345678",
    		'Department'=>"",
    		'Address'=>"国和路346号",
    		'Country'=>"杨浦区",
    		'Street'=>"",
    		'Square'=>"0",
    		'Flag_la'=>"N",
    		'Latitude'=>"31.313004",
    		'Flag_lo'=>"E",
    		'Longitude'=>"121.525701",
    		'ProStartTime'=>"2016-04-13",
    		'Stage'=>""
    	);
    	array_push($stat_list,$map5);
    	$map6= array(

    		'StatCode'=>"120101007",
    		'StatName'=>"滨海新村",
    		'ChargeMan'=>"李四",
    		'Telephone'=>"13912345678",
    		'Department'=>"",
    		'Address'=>"同泰北路100号",
    		'Country'=>"宝山区",
    		'Street'=>"",
    		'Square'=>"0",
    		'Flag_la'=>"N",
    		'Latitude'=>"31.382624",
    		'Flag_lo'=>"E",
    		'Longitude'=>"121.501387",
    		'ProStartTime'=>"2016-02-01",
    		'Stage'=>""

    	);
    	array_push($stat_list,$map6);
    	$map7= array(
    		'StatCode'=>"120101008",
    		'StatName'=>"银都苑",
    		'ChargeMan'=>"李四",
    		'Telephone'=>"13912345678",
    		'Department'=>"",
    		'Address'=>"银都路3118弄",
    		'Country'=>"闵行区",
    		'Street'=>"",
    		'Square'=>"0",
    		'Flag_la'=>"N",
    		'Latitude'=>"31.101605",
    		'Flag_lo'=>"E",
    		'Longitude'=>"121.404873",
    		'ProStartTime'=>"2016-02-01",
    		'Stage'=>""

    	);
    	array_push($stat_list,$map7);
    	$map8= array(
    		'StatCode'=>"120101009",
    		'StatName'=>"万科花园小城",
    		'ChargeMan'=>"王五",
    		'Telephone'=>"13912345678",
    		'Department'=>"",
    		'Address'=>"龙吴路5710号",
    		'Country'=>"闵行区",
    		'Street'=>"",
    		'Square'=>"0",
    		'Flag_la'=>"N",
    		'Latitude'=>"31.043827",
    		'Flag_lo'=>"E",
    		'Longitude'=>"121.476450",
    		'ProStartTime'=>"2016-02-18",
    		'Stage'=>""

    	);
    	array_push($stat_list,$map8);
    	$map9= array(
    		'StatCode'=>"120101010",
    		'StatName'=>"合生国际花园",
    		'ChargeMan'=>"王五",
    		'Telephone'=>"13912345678",
    		'Department'=>"",
    		'Address'=>"长兴东路1290",
    		'Country'=>"松江区",
    		'Street'=>"",
    		'Square'=>"0",
    		'Flag_la'=>"N",
    		'Latitude'=>"31.088973",
    		'Flag_lo'=>"E",
    		'Longitude'=>"121.295459",
    		'ProStartTime'=>"2016-02-18",
    		'Stage'=>""

    	);
    	array_push($stat_list,$map9);
    	$map10= array(
    		'StatCode'=>"120101011",
    		'StatName'=>"江南国际会议中心",
    		'ChargeMan'=>"王五",
    		'Telephone'=>"13912345678",
    		'Department'=>"",
    		'Address'=>"青浦区Y095(阁游路)",
    		'Country'=>"青浦区",
    		'Street'=>"",
    		'Square'=>"0",
    		'Flag_la'=>"N",
    		'Latitude'=>"31.127234",
    		'Flag_lo'=>"E",
    		'Longitude'=>"121.062241",
    		'ProStartTime'=>"2016-02-18",
    		'Stage'=>""
    	);
    	array_push($stat_list,$map10);
    	$map11= array(

    		'StatCode'=>"120101012",
    		'StatName'=>"佳邸别墅",
    		'ChargeMan'=>"王五",
    		'Telephone'=>"13912345678",
    		'Department'=>"",
    		'Address'=>"盈港路1555弄",
    		'Country'=>"青浦区",
    		'Street'=>"",
    		'Square'=>"0",
    		'Flag_la'=>"N",
    		'Latitude'=>"31.164430",
    		'Flag_lo'=>"E",
    		'Longitude'=>"121.102934",
    		'ProStartTime'=>"2016-02-18",
    		'Stage'=>""
    	);
    	array_push($stat_list,$map11);
    	$map12= array(

    		'StatCode'=>"120101013",
    		'StatName'=>"西郊河畔家园",
    		'ChargeMan'=>"王五",
    		'Telephone'=>"13912345678",
    		'Department'=>"",
    		'Address'=>"繁兴路469弄",
    		'Country'=>"闵行区",
    		'Street'=>"华漕镇",
    		'Square'=>"0",
    		'Flag_la'=>"N",
    		'Latitude'=>"31.218057",
    		'Flag_lo'=>"E",
    		'Longitude'=>"121.297076",
    		'ProStartTime'=>"2016-02-18",
    		'Stage'=>""
    	);
    	array_push($stat_list,$map12);
    	$map13= array(

    		'StatCode'=>"120101014",
    		'StatName'=>"东视大厦",
    		'ChargeMan'=>"赵六",
    		'Telephone'=>"13912345678",
    		'Department'=>"",
    		'Address'=>"东方路2000号",
    		'Country'=>"浦东新区",
    		'Street'=>"南码头",
    		'Square'=>"0",
    		'Flag_la'=>"N",
    		'Latitude'=>"31.203650",
    		'Flag_lo'=>"E",
    		'Longitude'=>"121.526288",
    		'ProStartTime'=>"2016-02-18",
    		'Stage'=>""

    	);
    	array_push($stat_list,$map13);
    	$map14= array(
    		'StatCode'=>"120101015",
    		'StatName'=>"曙光大厦",
    		'ChargeMan'=>"赵六",
    		'Telephone'=>"13912345678",
    		'Department'=>"",
    		'Address'=>"普安路189号",
    		'Country'=>"黄埔区",
    		'Street'=>"淮海中路街道",
    		'Square'=>"0",
    		'Flag_la'=>"N",
    		'Latitude'=>"31.228283",
    		'Flag_lo'=>"E",
    		'Longitude'=>"121.485388",
    		'ProStartTime'=>"2016-02-29",
    		'Stage'=>""

    	);
    	array_push($stat_list,$map14);
    	$map15= array(
    		'StatCode'=>"120101017",
    		'StatName'=>"上海贝尔",
    		'ChargeMan'=>"赵六",
    		'Telephone'=>"13912345678",
    		'Department'=>"",
    		'Address'=>"西藏北路525号",
    		'Country'=>"闸北区",
    		'Street'=>"芷江西路街道",
    		'Square'=>"0",
    		'Flag_la'=>"N",
    		'Latitude'=>"31.256691",
    		'Flag_lo'=>"E",
    		'Longitude'=>"121.475583",
    		'ProStartTime'=>"2016-03-15",
    		'Stage'=>""

    	);
    	array_push($stat_list,$map15);
    	$map16= array(
    		'StatCode'=>"120101018",
    		'StatName'=>"嘉宝大厦",
    		'ChargeMan'=>"赵六",
    		'Telephone'=>"13912345678",
    		'Department'=>"",
    		'Address'=>"洪德路1009号",
    		'Country'=>"嘉定区",
    		'Street'=>"马陆镇",
    		'Square'=>"0",
    		'Flag_la'=>"N",
    		'Latitude'=>"31.357885",
    		'Flag_lo'=>"E",
    		'Longitude'=>"121.256060",
    		'ProStartTime'=>"2015-03-19",
    		'Stage'=>""

    	);
    	array_push($stat_list,$map16);
    	$map17= array(
    		'StatCode'=>"120101019",
    		'StatName'=>"金山豪庭",
    		'ChargeMan'=>"赵六",
    		'Telephone'=>"13912345678",
    		'Department'=>"",
    		'Address'=>"卫清东路2988",
    		'Country'=>"金山区",
    		'Street'=>"",
    		'Square'=>"0",
    		'Flag_la'=>"N",
    		'Latitude'=>"30.739094",
    		'Flag_lo'=>"E",
    		'Longitude'=>"121.360693",
    		'ProStartTime'=>"2015-08-25",
    		'Stage'=>""

    	);
    	array_push($stat_list,$map17);
    	$map18= array(
    		'StatCode'=>"120101020",
    		'StatName'=>"临港城投大厦",
    		'ChargeMan'=>"赵六",
    		'Telephone'=>"13912345678",
    		'Department'=>"",
    		'Address'=>"环湖西一路333号",
    		'Country'=>"浦东新区",
    		'Street'=>"",
    		'Square'=>"0",
    		'Flag_la'=>"N",
    		'Latitude'=>"30.900796",
    		'Flag_lo'=>"E",
    		'Longitude'=>"121.933166",
    		'ProStartTime'=>"2015-11-30",
    		'Stage'=>""
    	);
    	array_push($stat_list,$map18);
    	$retval=array(
    		'status'=>'true',
    		'ret'=> $stat_list,
    		'msg'=>'success',
    		'auth'=>'true'
    	);
        $jsonencode = _encode($retval);
    	echo $jsonencode; break;
	case "GetWarningHandleListTable":
			/*
			REQUEST:
				var map={
					action:"GetWarningHandleListTable",
					type:"query",
					user:usr.id
				};
			RESPONSE:
				$body=array(
					'ColumnName'=> $column_name,
					'TableData'=>$row_content
					);
				$retval=array(
					'status'=>'true',
					'ret'=>$body,
					'msg'=>'success',
					'auth'=>'true'
				);
			*/
			$column = 16;
			$row = 40;
			$column_name = array();
			$row_content = array();
			for( $i=0;$i<$column;$i++){
				array_push($column_name,"第".(string)($i+1)."列");
			}
			for($i=0;$i<$row;$i++){
				$one_row = array();
				array_push($one_row,(string)($i+1));
				$flag = rand(0,1);
				if($flag == 0){
					array_push($one_row,"Y");
				}else{
					array_push($one_row,"N");
				}
				for($j=0;$j<($column-6);$j++) array_push($one_row,rand(10,110));

				//one_row.push("地址"+(i+1)+"xxxxx路"+(i+1)+"xxxxx号");
				array_push($one_row,"地址".((string)($i+1))."xxxxx路".((string)($i+1))."xxxxx号");
				//one_row.push("测试");
				array_push($one_row,"测试");
				//one_row.push("名称");
				array_push($one_row,"名称");
				//one_row.push("长数据长数据长数据"+(i+1)+"xxxxx路"+(i+1)+"xxxxx号");
				array_push($one_row,"长数据长数据长数据".((string)($i+1))."xxxxx路".((string)($i+1))."xxxxx号");
				array_push($row_content,$one_row);
				//row_content.push(one_row);
			}
			$body=array(
				'ColumnName'=> $column_name,
				'TableData'=>$row_content
				);
			$retval=array(
				'status'=>'true',
				'ret'=>$body,
				'msg'=>'success',
				'auth'=>'true'

			);
			$jsonencode = _encode($retval);
			echo $jsonencode; break;
	case "AlarmHandle":
    	/*
        REQUEST:
        	var body={
        		StatCode:StatCode,
        		Mobile:Mobile,
        		Action:Action
        	}
            var map={
                action:"AlarmHandle",
                body:body,
                type:"mod",
                user:usr.id
            };
        RESPONSE:
        	$retval=array(
        		'status'=>'true',
        		'msg'=>'success',
        		'auth'=>'true'
        	);
        */
    		$retval=array(
    			'status'=>'true',
    			'msg'=>'success',
    			'auth'=>'true'
    		);
    		$jsonencode = _encode($retval);
    		echo $jsonencode; break;
	case "AlarmClose":
		/*
		REQUEST:
			var body={
				StatCode:StatCode
			}
			var map={
				action:"AlarmClose",
				body:body,
				type:"mod",
				user:usr.id
			};
		RESPONSE:
			$retval=array(
				'status'=>'true',
				'msg'=>'success',
				'auth'=>'true'
			);
		*/
		$retval=array(
			'status'=>'true',
			'msg'=>'success',
			'auth'=>'true'
		);
		$jsonencode = _encode($retval);
		echo $jsonencode; break;
	case "GetRTUTable":
		/*
		REQUEST:
			var map={
				action:"GetRTUTable",
				type:"query",
				user:usr.id
			};
		RESPONSE:
			$body=array(
				'ColumnName'=> $column_name,
				'TableData'=>$row_content
				);
			$retval=array(
				'status'=>'true',
				'ret'=>$body,
				'msg'=>'success',
				'auth'=>'true'
			);
		*/
		$column = 16;
		$row = 40;
		$column_name = array();
		$row_content = array();
		for( $i=0;$i<$column;$i++){
			array_push($column_name,"第".(string)($i+1)."列");
		}
		for($i=0;$i<$row;$i++){
			$one_row = array();
			array_push($one_row,(string)($i+1));
			$flag = rand(0,1);
			if($flag == 0){
				array_push($one_row,"Y");
			}else{
				array_push($one_row,"N");
			}
			for($j=0;$j<($column-6);$j++) array_push($one_row,rand(10,110));

			//one_row.push("地址"+(i+1)+"xxxxx路"+(i+1)+"xxxxx号");
			array_push($one_row,"地址".((string)($i+1))."xxxxx路".((string)($i+1))."xxxxx号");
			//one_row.push("测试");
			array_push($one_row,"测试");
			//one_row.push("名称");
			array_push($one_row,"名称");
			//one_row.push("长数据长数据长数据"+(i+1)+"xxxxx路"+(i+1)+"xxxxx号");
			array_push($one_row,"长数据长数据长数据".((string)($i+1))."xxxxx路".((string)($i+1))."xxxxx号");
			array_push($row_content,$one_row);
			//row_content.push(one_row);
		}
		$body=array(
			'ColumnName'=> $column_name,
			'TableData'=>$row_content
			);
		$retval=array(
			'status'=>'true',
			'ret'=>$body,
			'msg'=>'success',
			'auth'=>'true'

		);
		$jsonencode = _encode($retval);
		echo $jsonencode; break;
	case "GetOTDRTable":
		/*
		REQUEST:
			var map={
				action:"GetOTDRTable",
				type:"query",
				user:usr.id
			};
		RESPONSE:
			$body=array(
				'ColumnName'=> $column_name,
				'TableData'=>$row_content
				);
			$retval=array(
				'status'=>'true',
				'ret'=>$body,
				'msg'=>'success',
				'auth'=>'true'
			);
		*/
		$column = 16;
		$row = 40;
		$column_name = array();
		$row_content = array();
		for( $i=0;$i<$column;$i++){
			array_push($column_name,"第".(string)($i+1)."列");
		}
		for($i=0;$i<$row;$i++){
			$one_row = array();
			array_push($one_row,(string)($i+1));
			$flag = rand(0,1);
			if($flag == 0){
				array_push($one_row,"Y");
			}else{
				array_push($one_row,"N");
			}
			for($j=0;$j<($column-6);$j++) array_push($one_row,rand(10,110));

			//one_row.push("地址"+(i+1)+"xxxxx路"+(i+1)+"xxxxx号");
			array_push($one_row,"地址".((string)($i+1))."xxxxx路".((string)($i+1))."xxxxx号");
			//one_row.push("测试");
			array_push($one_row,"测试");
			//one_row.push("名称");
			array_push($one_row,"名称");
			//one_row.push("长数据长数据长数据"+(i+1)+"xxxxx路"+(i+1)+"xxxxx号");
			array_push($one_row,"长数据长数据长数据".((string)($i+1))."xxxxx路".((string)($i+1))."xxxxx号");
			array_push($row_content,$one_row);
			//row_content.push(one_row);
		}
		$body=array(
			'ColumnName'=> $column_name,
			'TableData'=>$row_content
			);
		$retval=array(
			'status'=>'true',
			'ret'=>$body,
			'msg'=>'success',
			'auth'=>'true'

		);
		$jsonencode = _encode($retval);
		echo $jsonencode; break;
	case "Favourite_count":
		/*
		REQUEST:
			var body={
				StatCode:StatCode
			}
			var map={
				action:"Favourite_count",
				body:body,
				type:"query",
				user:usr.id
			};
		RESPONSE:
			$retval=array(
				'status'=>'true',
				'msg'=>'success',
				'auth'=>'true'
			);
		*/
			$retval=array(
				'status'=>'true',
				'msg'=>'success',
				'auth'=>'true'
			);
			$jsonencode = _encode($retval);
			echo $jsonencode; break;
	case "Favourite_list":
		/*
		REQUEST:
			var map={
				action:"Favourite_list",
				type:"query",
				user:usr.id
			};
		RESPONSE:
			$retval=array(
				'status'=>'true',
				'ret'=> list,
				'msg'=>'success',
				'auth'=>'true'
			);
		*/
		$stat_list = array();
		$map1=array(
			'StatCode'=>"120101001",
			'StatName'=>"浦东环球金融中心工程",
			'ChargeMan'=>"张三",
			'Telephone'=>"13912345678",
			'Department'=>"",
			'Address'=>"世纪大道100号",
			'Country'=>"浦东新区",
			'Street'=>"",
			'Square'=>"40000",
			'Flag_la'=>"N",
			'Latitude'=>"31.240246",
			'Flag_lo'=>"E",
			'Longitude'=>"121.514168",
			'ProStartTime'=>"2015-01-01",
			'Stage'=>""
		);
		array_push($stat_list,$map1);
		$map2=array(
			'StatCode'=>"120101002",
			'StatName'=>"港运大厦",
			'ChargeMan'=>"张三",
			'Telephone'=>"13912345678",
			'Department'=>"",
			'Address'=>"杨树浦路1963弄24号",
			'Country'=>"虹口区",
			'Street'=>"",
			'Square'=>"0",
			'Flag_la'=>"N",
			'Latitude'=>"31.255719",
			'Flag_lo'=>"E",
			'Longitude'=>"121.517700",
			'ProStartTime'=>"2016-04-01",
			'Stage'=>""
		);
		array_push($stat_list,$map2);
		$map3= array(
			'StatCode'=>"120101003",
			'StatName'=>"万宝国际广场",
			'ChargeMan'=>"张三",
			'Telephone'=>"13912345678",
			'Department'=>"",
			'Address'=>"延安西路500号",
			'Country'=>"长宁区",
			'Street'=>"",
			'Square'=>"0",
			'Flag_la'=>"N",
			'Latitude'=>"31.223441",
			'Flag_lo'=>"E",
			'Longitude'=>"121.442703",
			'ProStartTime'=>"2016-04-01",
			'Stage'=>""
		);
		array_push($stat_list,$map3);
		$map4= array(
			'StatCode'=>"120101004",
			'StatName'=>"金桥创科园",
			'ChargeMan'=>"李四",
			'Telephone'=>"13912345678",
			'Department'=>"",
			'Address'=>"桂桥路255号",
			'Country'=>"浦东新区",
			'Street'=>"",
			'Square'=>"0",
			'Flag_la'=>"N",
			'Latitude'=>"31.248271",
			'Flag_lo'=>"E",
			'Longitude'=>"121.615476",
			'ProStartTime'=>"2016-04-01",
			'Stage'=>""
		);
		array_push($stat_list,$map4);
		$map5= array(
			'StatCode'=>"120101006",
			'StatName'=>"江湾体育场",
			'ChargeMan'=>"李四",
			'Telephone'=>"13912345678",
			'Department'=>"",
			'Address'=>"国和路346号",
			'Country'=>"杨浦区",
			'Street'=>"",
			'Square'=>"0",
			'Flag_la'=>"N",
			'Latitude'=>"31.313004",
			'Flag_lo'=>"E",
			'Longitude'=>"121.525701",
			'ProStartTime'=>"2016-04-13",
			'Stage'=>""
		);
		array_push($stat_list,$map5);
		$retval=array(
			'status'=>'true',
			'ret'=> $stat_list,
			'msg'=>'success',
			'auth'=>'true'
		);
		$jsonencode = _encode($retval);
		echo $jsonencode; break;
	case "Get_user_auth_code":
		/*
		REQUEST:
			var body={
				name:username
			}
			var map={
				action:"Get_user_auth_code",
				body:body,
				type:"query",
				user:null
			};
		RESPONSE:
			$retval=array(
				'status'=>'true',
				'msg'=>'success',
				'auth'=>'true'
			);
		*/
		$retval=array(
			'status'=>'true',
			'msg'=>'success',
			'auth'=>'true'
		);
		$jsonencode = _encode($retval);
		echo $jsonencode; break;
	case "Reset_password":
		/*
		REQUEST:
			var body={
				name:username,
				code:code,
				password:password
			}
			var map={
				action:"Reset_password",
				body:body,
				type:"query",
				user:null
			};
		RESPONSE:
			$retval=array(
				'status'=>'true',
				'msg'=>'success',
				'auth'=>'true'
			);
		*/
		$body = array(
			'key'=> '1234567',
			'admin'=> 'true'
		);
		$retval=array(
		'status'=>'true',
		'auth'=>'true',
		'ret'=>$body,
		'msg'=>'login successfully'
		);
		$jsonencode = _encode($retval);
		echo $jsonencode; break;
	case "GetOpenImg":
		/*
		REQUEST:
			var body={
				openid:id
			}
			var map={
				action:"GetOpenImg",
				body:body,
				type:"query",
				user:user
			};
		RESPONSE:

			$body = array(
						'ifpicture'=>'true',
            			'picture'=> $install_path."/screensaver/assets/img/test".(string)$i.".jpg"
            		);
			$retval=array(
				'status'=>'true',
				'auth'=>'true',
				'ret'=>$body,
				'msg'=>'login successfully'
			);
		*/
		$temp = rand(0,1);
		if($temp ==0){

			$body = array(
				'ifpicture'=>'true',
				'picture'=> $install_path."/screensaver/assets/img/test1.jpg"
			);
		}else{
			$body = array(
				'ifpicture'=>'false',
				'picture'=> $install_path."/screensaver/assets/img/test1.jpg"
			);
		}
		$retval=array(
		'status'=>'true',
		'auth'=>'true',
		'ret'=>$body,
		'msg'=>''
		);
		$jsonencode = _encode($retval);
		echo $jsonencode; break;
	case "GetStationActiveInfo":
	/*
        REQUEST:
            var body={
                StatCode:id
            }
            var map={
                action:"GetStationActiveInfo",
                body:body,
                type:"query",
                user:user
            };
        RESPONSE:

            $body = array(
                        'actived'=>'true'
                    );
            $retval=array(
                'status'=>'true',
                'auth'=>'true',
                'ret'=>$body,
                'msg'=>''
            );
    		*/
        $body_in = $_GET['body'];
        $StatCode = ($body_in['StatCode']);
        $x = rand(1,100);
        $actived = "true";
        if($x>50) $actived = "false";
        $body = array(
            'actived'=>$actived
        );
        $retval=array(
            'status'=>'true',
            'auth'=>'true',
            'ret'=>$body,
            'msg'=>''
        );
        $jsonencode = _encode($retval);
        echo $jsonencode; break;
	case "StationActive":

    /*
        REQUEST:
            var body={
                StatCode:id
            }
            var map={
                action:"StationActive",
                body:body,
                type:"mod",
                user:user
            };
        RESPONSE:
            $retval=array(
                'status'=>'true',
                'auth'=>'true',
                'msg'=>''
            );
            */
        $body_in = $_GET['body'];
        $StatCode = ($body_in['StatCode']);
        $retval=array(
            'status'=>'true',
            'auth'=>'true',
            'msg'=>''
        );
        $jsonencode = _encode($retval);
        echo $jsonencode; break;
	default:
	break;
}


?>