<?php
  require_once "dbconnect.php";
  $sql = "INSERT INTO `topic` (`title`,`description`,`created`) VALUES ('".$_POST['title']."','".$_POST['description']."',NOW())"
?>