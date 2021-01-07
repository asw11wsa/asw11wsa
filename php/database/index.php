<?php
error_reporting(E_ALL);

ini_set("display_errors", 1);
include 'classes/dbh.class.php';
include 'classes/users.class.php';
include 'classes/userscontr.class.php';
include 'classes/usersview.class.php';
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<?php
    $usersObj1 = new UsersView();
    $usersObj1->showUser("lee");

    $usersObj2 = new UsersContr();
    $usersObj2->createUser("park","chanho","1892-11-10");
?>
</body>
</html>