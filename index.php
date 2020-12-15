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
    <title><?="SION'S-{$contents['title']}"?></title>
    <style>
        body{
            margin:0;
            padding: 0;
            text-align: center;
            background-color: #9AB7B8;
        }
        a{
            text-decoration: none;
            color: black;
        }
        a:hover{
            color: #333333;
        }
        ul{
            list-style: none;
            padding-left:0px;
        }
        .radius{
            border-radius: 10px;
        }
        .page{
            margin: 0 1rem 0 1rem;
            display: grid;
            gap: 0.5rem;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 100px 50px minmax(10px,1fr) 4fr 100px;
            grid-template-areas:
                "header header header"
                "nav nav nav"
                "left_side left_side left_side"
                "main main main"
                "footer footer footer";
        }
        .header{
            grid-area: header;
            position: sticky;
            top: 0;
            display: flex;
            justify-content: center;
            align-content: center;
            text-align: center;
            align-items: center;
            background-color: #EBEBF1;
            border-bottom: 2px solid #9AB7B8;
            margin-bottom: -2px;
        }
        .nav{
            background: #EBEBF1;
            grid-area: nav;
        }
        .js-clock{
            flex: 1;
        }
        .js-clock .js-title{
            font-size: 1rem;
        }
        .logo{
            flex: 3;
        }
        .buttons{
            flex: 1;
        }
        .logo_font{
            font-size: 1.25rem;
        }
        .font_bold{
            font-weight: bold;
        }
        .list{
            margin: 15px 0 15px 0;
            display: flex;
        }
        .list li{
            flex: 1;
        }
        /*.menu{*/
        /*    flex: 3;*/
        /*}*/
        /*.login{*/
        /*    flex: 1;*/
        /*}*/
        .left_side{
            grid-area: left_side;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #EBEBF1;
        }
        .left_box{
            width: 100%;
            height: 100%;
            box-sizing: border-box;
        }
        .main{
            grid-area: main;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #EBEBF1;
        }
        .main_box{
            width: 100%;
            height: 100%;
            padding: 2rem 2rem 2rem 2rem;
            box-sizing: border-box;
        }
        .footer{
            grid-area: footer;
            display: flex;
            justify-content: center;
            align-content: center;
            text-align: center;
            align-items: center;
            background-color: #EBEBF1;
        }
        .info{
            font-size: 1.2rem;
            font-weight: bold;
        }
        .dark{
            background: black;
            color: white;
        }
        .light{
            background: white;
            color: black;
        }
        @media (min-width: 1024px) {
            .page{
                margin: 0 1rem 0 1rem;
                display: grid;
                gap: 2px;
                grid-template-columns: 100px 200px repeat(3, 1fr) 200px 100px;
                grid-template-rows: 100px 50px repeat(3,minmax(243px,1fr)) 100px;
                grid-template-areas:
                    ". header header header header header ."
                    ". nav nav nav nav nav ."
                    ". left_side main main main main ."
                    ". left_side main main main main ."
                    ". left_side main main main main ."
                    ". footer footer footer footer footer .";
            }
            .js-clock .js-title{
                font-size: 1.25rem;
            }
            .logo_font{
                font-size: 2rem;
            }
            .list{
                margin: 0;
                height: 100%;
            }
            .list li{
                height: 100%;
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .list li a{
                display: block;
                height: 50%;
                width: 30%;
            }
        }
    </style>
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
            $topics2->showAllTopicNav();
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
