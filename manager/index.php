<?php
    session_start();
    require_once $_SERVER['DOCUMENT_ROOT']."/dbconnect.php";

    $GETid = $_GET['id'];

    $sql = "SELECT * FROM topic";
    $result = mysqli_query($conn,$sql);
    $list = "";
    while ($row = mysqli_fetch_array($result)){
        $list = $list."<li class='items'><a href='/manager/index.php?id={$row[id]}'>{$row[title]}</a></li>";
    }

    if($_SESSION['id'] == null){
        header("Location:/manager/login.php");
    }

    $contents = array(
        'title' => 'Welcome',
        'description' => 'Nice to meet You'
    );
    if($GETid) {
    //아이디에 관한 제목과 내용 불러 오기
        $filtered_id = mysqli_real_escape_string($conn, $GETid);
        $sql2 = "SELECT * FROM `topic` WHERE `id` = {$filtered_id}";
        $result2 = mysqli_query($conn, $sql2);
        $row2 = mysqli_fetch_array($result2);
        $escaped_title2 = htmlspecialchars($row2['title']);
        $escaped_description2 = htmlspecialchars($row2['description']);
        $contents['title'] = $escaped_title2;
        $contents['description'] = $escaped_description2;
    }
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        *{
            text-align: center;
        }
        body{
            margin: 0;
            padding: 0;
        }
        li{
            list-style: none;
        }
        a{
            text-decoration: none;
        }
        a:hover{
            text-decoration: underline;
        }
        .page{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 100px 50px 50px 1fr;
            grid-template-areas:
            "header header header"
            "nav nav nav"
            "nav2 nav2 nav2"
            "main main main";
        }
        .header{
            grid-area: header;
            display: flex;
            justify-content: center;
            align-content: center;
            text-align: center;
        }
        .title{
            flex: 5;
        }
        .logout{
            position: absolute;
            top:2rem;
            right: 2rem;
        }
        .nav{
            grid-area: nav;
        }
        .list{
            display: flex;
            padding-left: 0;
        }
        .items{
            flex: 1;
        }
        .items:nth-child(2n){
            background-color: pink;
        }
        .items:nth-child(2n - 1){
            background-color: cadetblue;
        }
        .nav2{
            grid-area: nav2;
        }
        .list2{
            display: flex;
            padding-left: 0;
        }
        .list2 li{
            flex: 1;
        }
        .list2 li:nth-child(2n){
            background-color: black;
        }
        .list2 li:nth-child(2n) a{
            color: white;
        }
        .main{
            grid-area: main;
        }
        .btn{
            background-color: rgba(0,0,0,1);
            color: white;
            border: none;
            font-size: 16px;
        }
        .btn:hover{
            text-decoration: underline;
        }
    </style>
</head>
<body>
<div class="page">
    <div class="header">
        <div class="title">
            <h1>SION'S MANAGE PAGE</h1>
        </div>
        <div class="logout">
            <a href="logOut.php">logout</a>
        </div>
    </div>
    <div class="nav">
        <ol class="list">
            <?= $list?>
        </ol>
    </div>
    <div class="nav2">
        <ol class="list2">
        <li><a href="/manager/makeList.php">리스트 만들기</a></li>
        <li><a href="/manager/write.php">글쓰기</a></li>
        <li><a href="/manager/update.php?id=<?=$GETid?>">수정하기</a></li>
        <li>
            <form name="form" action="/manager/delete_process.php" method="post">
                <input type="hidden" name="id" value="<?=$GETid?>">
                <input class="btn" type="button" value="삭제하기" onclick="delete_check();">
            </form>
        </li>
        </ol>
    </div>
    <div class="main">
        <h2 class="margin-left10"><?= $contents['title'];?></h2>
        <p class="margin-left10"><?= $contents['description'];?></p>
    </div>
</div>
<script>
    function delete_check() {
        if(confirm("정말 삭제하시겠습니까?") == true){
            document.form.submit();
        }else{
            return;
        }
    }
</script>
</body>
</html>