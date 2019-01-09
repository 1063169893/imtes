<?php
    include('db.php');
    $phone = $_REQUEST['phone'];
    $pwd=$_REQUEST['password'];
    $add = "INSERT INTO `vip_name`( `name_phone`, `name_pwd`) VALUES ('$phone','$pwd')";
    $res = $mysqli->query($add);
    if($res){
        echo '{"tex":"注册成功","err":1}';
        die;
    }
    echo '{"tex":"注册失败","err":0}';
    $mysqli->close();
?>
