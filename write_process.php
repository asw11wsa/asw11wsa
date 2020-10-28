<?php
  require_once "dbconnect.php";
  $sql = "INSERT INTO `topic` (`title`,`description`,`created`) VALUES ('".$_POST['title']."','".$_POST['description']."',NOW())";
  $result = mysqli_query($conn,$sql);
  if($result){
      header("Location:study2.php?id='".$_POST['title']."'");
  }else{
      echo "no writing";
  }
?>