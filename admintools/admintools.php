<?php
header("Content-type:text/html;charset=utf-8");
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
$key=$_GET["action"];

switch ($key){
    case "GetSoftwareLoadTable":
        /*
        REQUEST:
            var map={
                action:"GetSoftwareLoadTable",
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
    case "SoftwareLoadNew":

    	$body= $_GET['body'];
    	$retval=array(
    		'status'=>'true',
    		'msg'=>'success',
    		'auth'=>'true'
    	);
        $jsonencode = _encode($retval);
    	echo $jsonencode; break;
    case "SoftwareLoadDel":

        $body= $_GET['body'];
        $retval=array(
            'status'=>'true',
            'msg'=>'success',
            'auth'=>'true'
        );
        $jsonencode = _encode($retval);
        echo $jsonencode; break;
    default:
    break;
}



?>