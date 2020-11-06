<meta charset="UTF-8">
<?php
    require_once $_SERVER['DOCUMENT_ROOT']."/dbconnect.php";

    $sql = "INSERT INTO `topic` (`title`, `description`, `created`) VALUES ('{$_POST[title]}', '{$_POST[description]}', NOW());";
    $result = mysqli_query($conn,$sql);
    if($result){
        $sql1 = "SELECT * FROM `topic` WHERE `title` = '{$_POST[title]}'";
        $result1 = mysqli_query($conn,$sql1);
        $row = mysqli_fetch_array($result1);
        header("Location:index.php?id={$row[id]}");
    }else{
        echo "글작성에 실패하였습니다. 관리자에게 문의 하세요";
    }
?>