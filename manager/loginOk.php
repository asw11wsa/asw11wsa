<meta charset="UTF-8">
<?php
session_start();
    require_once $_SERVER['DOCUMENT_ROOT']."/dbconnect.php";

    $id = $_POST[id];
    $password = $_POST[password];

    $sql = "SELECT * FROM `user` WHERE `id` = \"{$id}\" AND `password` = \"{$password}\"";
//    die($sql);
    $result = mysqli_query($conn,$sql);
    $row = mysqli_fetch_array($result);
//    echo $id;
//    echo $row['id'];
//    echo "불러온 비번 : ".$password;
//    echo "가져온 비번 : ".$row['password'];
    if($id == $row['id'] && $password == $row['password']){
        $_SESSION['id'] = "$_POST[id]";
//        echo $_SESSION['id'];
//        echo "무엇인가";
        header("Location:/manager/index.php");
    }else{
        print(mysqli_error($conn));
        header("Location:/manager/login.php");
    }
?>