<meta charset="UTF-8">
<?php
    require_once $_SERVER['DOCUMENT_ROOT']."/dbconnect.php";

    $sql = "DELETE FROM `topic` WHERE `id` = {$_POST[id]}";
    $result = mysqli_query($conn,$sql);
    if($result){
        header("Location:index.php");
    }else{
        error_log(mysqli_error($conn));
        echo "오류발생시 관리자에게 문의해주세요";
    }
?>