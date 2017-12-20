<?php

function check_session($s){
	if($s == "1234567"){
        return "admin";
    }
    if($s == "7654321"){
        return "user";
    }
    if($s == "1111111"){
            return "黄";
        }
    return "";
}

$session=$_GET["session"];

$if_jump = check_session($session);

if($if_jump!=""){
	$filename = "./scope.html";
    $handle = fopen($filename, "r");
    $contents = fread($handle, filesize ($filename));
    fclose($handle);
	echo $contents;
}else{
	$filename = "./Login.html";
    $handle = fopen($filename, "r");
    $contents = fread($handle, filesize ($filename));
    fclose($handle);
	echo $contents;
}
?>