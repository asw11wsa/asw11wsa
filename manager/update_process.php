<meta charset="UTF-8">
<?php
    require_once $_SERVER['DOCUMENT_ROOT']."/dbconnect.php";
    $filtered = array(
        'title'=> mysqli_real_escape_string($conn, $_POST['title']),
        'description' => mysqli_real_escape_string($conn, $_POST['description']),
        'id' => mysqli_real_escape_string($conn, $_POST['id'])
    );
    $sql = "UPDATE `topic` SET `title` = '{$filtered[title]}',`description` = '{$filtered[description]}' WHERE `id` ={$filtered[id]}";
    $result = mysqli_query($conn, $sql);
    if($result){
        header("Location:index.php?id={$filtered[id]}");
    }else{
        echo "수정이 불가한 경우 관리자에게 문의 하세요";
    }
?>