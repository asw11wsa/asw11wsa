<?php
session_start();
require_once $_SERVER['DOCUMENT_ROOT']."/dbconnect.php";

$GETid = $_GET['id'];
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="asset/image/logo/logo.png">
    <link rel="stylesheet" href="asset/css/index.css">
    <title><?="SION'S-{$contents['title']}"?></title>
</head>
<body>
<div class="page">
    <header class="header radius">
        <div class="js-clock">
            <h3 class="js-title">00:00</h3>
        </div>
        <div class="logo"><a class="logo_font font_bold" href="index.php">SION'S PLAYGROUND</a></div>
        <!--            <div class="menu"><a href="#a">menu</a></div>-->
        <!--            <div class="login"><a href="#a">login</a></div>-->
        <div class="buttons"><input type="button" id="dark" value="dark" onclick="nightDayHandler(this)"/></div>
    </header>
    <div class="nav radius">
        <ul class="list">
            <?php
            $topics2 = new ViewTopic();
            $topics2->showAllTopicNav_main();
            ?>
        </ul>
    </div>
    <div class="left_side radius">
        <div class="left_box">
            <ul style="margin-top: 30px">
                <li>basic</li>
                <li>speed</li>
                <li>hard</li>
                <li>easy</li>
                <li>new</li>
            </ul>
        </div>
    </div>
    <div class="main radius">
        <div class="main_box">
            <?php
            if($GETid){
                $constant = new ViewTopic();
                $constant->showTopicFromId($GETid);
            }else{
                echo "<h2 class=\"margin-left10\">welcome to sion's page</h2>";
                echo "<p class=\"margin-left10\">enjoy</p>";
            }
            ?>
        </div>
    </div>
    <footer class="footer radius">
        <div class="info">Develop by.SION</div>
    </footer>
</div>
<script>
    function button_event() {
        if(confirm("정말 삭제하시겠습니까??") == true){
            document.form.submit();
        }else{
            return;
        }
    };
</script>
<script defer src="asset/js/index.js"></script>
<script defer src="asset/js/clock2.js"></script>
</body>
</html>
