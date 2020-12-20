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
    <link rel="stylesheet" href="../asset/css/manager.css">
    <title>Document</title>

</head>
<body>
<div class="page">
    <div class="header">
        <div class="title">
            <h1>SION'S MANAGE PAGE</h1>
        </div>
        <div class="logout">
            <?php
            if($_SESSION['id']){
                echo $_SESSION['id'];
                echo "<a href=\"logOut.php\">logout</a>";
            }
            ?>
        </div>
    </div>
    <div class="nav">
        <ol class="list">
            <?php
            $topics2 = new ViewTopic();
            $topics2->showAllTopicNav_manager();
            ?>
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