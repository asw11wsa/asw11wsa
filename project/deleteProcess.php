<?php
    require_once $_SERVER['DOCUMENT_ROOT']."/dbconnect.php";
    $filtered_id = mysqli_real_escape_string($conn,$_POST['id']);
    $sql = "DELETE FROM `topic` WHERE `id` = {$filtered_id}";
    $result = mysqli_query($conn,$sql);
    if($result){
        header('Location:/project/design.php');
    }else{
        echo "delete fail";
    }
?>