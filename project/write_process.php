<?php
  require_once $_SERVER['DOCUMENT_ROOT']."/dbconnect.php";
  $filtered_title = mysqli_real_escape_string($conn, $_POST['title']);
  $filtered_description = mysqli_real_escape_string($conn, $_POST['description']);
  $sql = "INSERT INTO `topic` (`title`,`description`,`created`) VALUES ('{$filtered_title}','{$filtered_description}',NOW())";
  $result = mysqli_query($conn,$sql);
  if($result) {
      $sql1 = "SELECT * FROM `topic` WHERE `title`='{$filtered_title}'";
      echo "$sql1";
      $result1 = mysqli_query($conn, $sql1);
      if ($result1) {
          $row = mysqli_fetch_array($result1);
          $filtered_id = mysqli_real_escape_string($conn, $row[id]);
          header("Location:/project/design.php?id={$filtered_id}");
      } else {
          echo mysqli_error($result1);
      }
  }
?>