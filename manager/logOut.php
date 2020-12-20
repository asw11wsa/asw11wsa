<?php
    session_start();
    unset( $_SESSION['id'] );
    header("Location:/manager/login.php");
?>