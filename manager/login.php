<?php
session_start();
if($_SERVER["HTTP_REFERER"] == "http://asw11wsa.cafe24.com/manager/login.php"){
    echo "<script>alert(\"아이디와 비번이 일치하지 않습니다.\");</script>";
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
        body{
            padding: 0;
            margin: 0;
            text-align: center;
            display: flex;
            width: 100vw;
            height: 100vh;
            justify-content: center;
            align-content: center;
        }
        form{
            flex: 1;
            display: inline-block;
            width: 200px;
            height: 200px;
        }
    </style>
</head>
<body>
<form action="loginOk.php" method="post">
    <input type="text" name="id" placeholder="id"><br>
    <input type="password" name="password" placeholder="password"><br>
    <input type="submit" value="login">
</form>
</body>
</html>