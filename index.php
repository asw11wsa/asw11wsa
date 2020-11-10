<?php
    require_once $_SERVER['DOCUMENT_ROOT']."/dbconnect.php";

    $GETid = $_GET['id'];
    $sql = "SELECT * FROM topic";
    $result = mysqli_query($conn, $sql);
    $list = '';
    while($row = mysqli_fetch_array($result)){
        $escaped_title = htmlspecialchars($row['title']);
        $list = $list."<li><a class=\"list_items\" href=\"index.php?id={$row[id]}\">{$escaped_title}</a></li>";
    }
    $contents = array(
        'title' => 'Welcome to SION\'s',
        'description' => 'Nice to meet You'
    );
    if($GETid){
        //아이디에 관한 제목과 내용 불러 오기
        $filtered_id = mysqli_real_escape_string($conn,$GETid);
        $sql2 ="SELECT * FROM `topic` WHERE `id` = {$filtered_id}";
        $result2 = mysqli_query($conn, $sql2);
        $row2 = mysqli_fetch_array($result2);
        $escaped_title2 = htmlspecialchars($row2['title']);
        $escaped_description2 = htmlspecialchars($row2['description']);
        $contents['title'] = $escaped_title2;
        $contents['description'] = $escaped_description2;

        //아이디가 있으면 수정 삭제 내용이 나오도록 하기
        $controller = '<a href="update.php?id='.$GETid.'">update</a>
                    <form name="form" class="margin-left10 margin-top10" action="delete_process.php" method="post">
                        <input type="hidden" name="id" value="'.$GETid.'">
                        <input type="button" value="delete" onclick="button_event()">
                    </form>';
    }
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="asset/image/logo/logo.png">
    <title><?=$contents['title']?></title>
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
    <style>
        body{
            margin:0;
            padding: 0;
            text-align: center;
            background-color: #fff000;
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
            grid-template-rows: 100px 1fr 4fr 1fr 100px;
            grid-template-areas:
            "header header header"
            "left_side left_side left_side"
            "main main main"
            "right_side right_side right_side"
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
            background-color: #ffffff;
            border-bottom: 2px solid #fff000;
            margin-bottom: -2px;
        }
        .logo{
            flex: 1;
        }
        .font_20{
            font-size: 1.25rem;
        }
        .font_bold{
            font-weight: bold;
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
        }
        .left_box{
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            background-color: #ffffff;
        }
        .right_side{
            grid-area: right_side;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .right_box{
            width: 100%;
            height: 100%;
            padding: 1rem;
            box-sizing: border-box;
            background-color: #ffffff;
        }
        .main{
            grid-area: main;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .main_box{
            width: 100%;
            height: 100%;
            padding: 0 1rem 0 1rem;
            box-sizing: border-box;
            background-color: #ffffff;
        }
        .footer{
            grid-area: footer;
            display: flex;
            justify-content: center;
            align-content: center;
            text-align: center;
            align-items: center;
            background-color: #ffffff;
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
                grid-template-columns: 300px repeat(3, 1fr) 300px;
                grid-template-rows: 100px repeat(3,minmax(243px,1fr)) 100px;
                grid-template-areas:
                    "header header header header header"
                    "left_side main main main right_side"
                    "left_side main main main right_side"
                    "left_side main main main right_side"
                    "footer footer footer footer footer";
            }
        }
    </style>
</head>
<body>
    <div class="page">
        <header class="header radius">
            <div class="logo"><a class="font_20 font_bold" href="index.php">SION'S PLAYGROUND</a></div>
<!--            <div class="menu"><a href="#a">menu</a></div>-->
<!--            <div class="login"><a href="#a">login</a></div>-->
            <div class="buttons"><input type="button" class="dark" value="dark"><input type="button" class="light" value="light"></div>
        </header>
        <div class="left_side">
            <div class="left_box radius">
                <ul class="list">
                    <?=$list;?>
                </ul>
            </div>
        </div>
        <div class="main">
            <div class="main_box radius">
                <h2 class="margin-left10"><?= $contents['title'];?></h2>
                <p class="margin-left10"><?= $contents['description'];?></p>
            </div>
        </div>
        <div class="right_side">
            <div class="right_box radius">
                <a href="write.php">write</a><br>
                <?= $controller?>
            </div>
        </div>
        <footer class="footer radius">
            <div class="info">Develop by.SION</div>
        </footer>
    </div>
</body>
</html>