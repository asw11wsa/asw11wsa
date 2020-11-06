<meta charset="UTF-8">
<?php
    require_once $_SERVER['DOCUMENT_ROOT']."/dbconnect.php";

    $sql = "UPDATE `topic` SET `title` = '{$_POST[title]}',`description` = '{$_POST[description]}' WHERE `id` ={$_POST[id]}";
    $result = mysqli_query($conn, $sql);
    if($result){
        header("Location:index.php?id={$_POST[id]}");
    }else{
        echo "수정이 불가한 경우 관리자에게 문의 하세요";
    }
?>