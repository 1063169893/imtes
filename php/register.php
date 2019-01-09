<?php
    include('db.php');
    $phone = $_REQUEST['phone'];
    $sel = "SELECT * FROM vip_name WHERE name_phone='$phone'";
    $res = $mysqli->query($sel);
    if($res->num_rows>0){
        echo '{"tex":"用户已存在","err":1}';
        die;
    }
    echo '{"tex":"账号可以使用","err":0}';
    $mysqli->close();
?>
