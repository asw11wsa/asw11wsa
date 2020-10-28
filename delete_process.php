<?php
    unlink('data/'.$_POST['title']);
    header('Location:/study.php');
?>