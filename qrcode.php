<?php
    require_once('PHPresource/phpqrcode/qrlib.php');
    require_once('PHPresource/phpqrcode/qrconfig.php');
    $static_url="./qrcode/temp/";
    function getsession(){
    //Fake code, change in real
        return "12345678901234567890123456789012345678901234567890";
    }
    function buildqrcode($session,$filepath,$url){

        //Final url should be www.xxx.com/xxxx/xxx.html?xhsession=[session]#xxxxxcode=[wecharid]&xxxxxx
        $tempDir = $filepath;

        $codeContents = $url."?xhsession=".$session."#";
        $fileName = $session.'.png';

        $pngAbsoluteFilePath = $tempDir.$fileName;

        QRcode::png($codeContents, $pngAbsoluteFilePath);
        return $pngAbsoluteFilePath;
    }
    function buildcontent($QRcodename,$session){
        $filename = "./qrcodelogin.html";
        $handle = fopen($filename, "r");
        $contents = fread($handle, filesize ($filename));
        $contents = str_replace("QRCODE_REPLACE_TAG",$QRcodename,$contents);
        $contents = str_replace("SESSION_REPLACE_TAG",$session,$contents);
        fclose($handle);
        return $contents;
    }

    $session_id= getsession();



    echo buildcontent(buildqrcode($session_id,$static_url,$static_url),$session_id);

?>