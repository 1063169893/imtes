<?php
    include('db.php');
    $name = $_REQUEST['name'];
    $pwd = $_REQUEST['pwd'];
    $sel="SELECT * FROM vip_name WHERE name_phone='$name'and name_pwd='$pwd'";
    $res = $mysqli->query($sel);
    // echo $sel;
    // var_dump($res);
    if($res->num_rows!=0){
        echo '{"tetx":"登录成功","err":1}';
    }else{
        echo '{"tetx":"用户名或密码错误","err":0}';
    };
    $mysqli->close();
?>