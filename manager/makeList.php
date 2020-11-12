<?php
if($_SESSION['id'] == null){
    header("Location:/manager/login.php");
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
</head>
<body>
<table>
<form action="makeList_process.php" method="post">
    <tr>
        <td><input type="text" name="title"></td>
    </tr>
    <tr>
        <td><textarea name="description"></textarea></td>
    </tr>
    <tr>
        <td><input type="submit"></td>
    </tr>
</form>
</table>
</body>
</html>