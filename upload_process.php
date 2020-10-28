<?php
require_once "dbconnect.php";
$sql = "UPDATE `topic` SET `title` = '".$_POST['title']."',
                               `description` = '".$_POST['description']."',
                               `created` = NOW()
                                WHERE `id` = '".$_POST['id']."'";
$result = mysqli_query($conn,$sql);
if($result){
    header("Location:study2.php?id=".$_POST['id']."");
}else{
    echo "no update";
}
?>
