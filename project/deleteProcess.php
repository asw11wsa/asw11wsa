<?php
    require_once "dbconnect.php";
    $sql = "DELETE FROM `topic` WHERE `id` = '".$_POST['id']."'";
    $result = mysqli_query($conn,$sql);
    if($result){
        header('Location:project/design.php');
    }else{
        echo "delete fail";
    }
?>