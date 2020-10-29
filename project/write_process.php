<?php
  require_once "dbconnect.php";
  $sql = "INSERT INTO `topic` (`title`,`description`,`created`) VALUES ('".$_POST['title']."','".$_POST['description']."',NOW())";
  $result = mysqli_query($conn,$sql);
  if($result){
      $sql1 = "SELECT * FROM `topic` WHERE `title`='".$_POST['title']."'";
      $result1 = mysqli_query($conn,$sql1);
      echo mysqli_error($result1);
      if($result1){
          while ($row = mysqli_fetch_array($result1)){
              header("Location:design.php?id=".$row[id]."");
          }
      }
  }else{
      echo "no writing";
  }
?>