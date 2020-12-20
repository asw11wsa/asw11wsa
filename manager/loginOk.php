<meta charset="UTF-8">
<?php
session_start();
    require_once $_SERVER['DOCUMENT_ROOT']."/dbconnect.php";

    $id = $_POST['id'];
    $password = $_POST['password'];

    $idCheck = new ViewUser();
    $idCheck->checkUser($id,$password);
?>