<?php
Function check_user($session)
{
    $user_name = "";
    if($session == "1234567"){
        $user_name = "admin";
    }
    if($session == "7654321"){
            $user_name = "user";
    }
    return user_name;
}

?>