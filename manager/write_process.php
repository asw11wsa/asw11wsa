<meta charset="UTF-8">
<?php
    require_once $_SERVER['DOCUMENT_ROOT']."/dbconnect.php";
    $filtered = array(
        'title'=> mysqli_real_escape_string($conn, $_POST['title']),
        'description' => mysqli_real_escape_string($conn, $_POST['description'])
    );
    $sql = "INSERT INTO `topic` (`title`, `description`, `created`) VALUES ('{$filtered[title]}', '{$filtered[description]}', NOW());";
    $result = mysqli_query($conn,$sql);
    if($result){
        $sql1 = "SELECT * FROM `topic` WHERE `title` = '{$filtered[title]}'";
        $result1 = mysqli_query($conn,$sql1);
        $row = mysqli_fetch_array($result1);
        header("Location:index.php?id={$row[id]}");
    }else{
        echo "글작성에 실패하였습니다. 관리자에게 문의 하세요";
    }
?>