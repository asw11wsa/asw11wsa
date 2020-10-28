<?php //echo $_SERVER['DOCUMENT_ROOT']?>
<?// require_once $_SERVER["DOCUMENT_ROOT"]."/project/process.php"; ?>
<? require_once $_SERVER["DOCUMENT_ROOT"]."/dbconnect.php"; ?>
<?php
function call1_title(){
    $query = "SELECT * FROM study";
    $result = mysqli_query($conn,$query);
    while($row = mysqli_fetch_array($result)){
        echo $row[title];
    }
}
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title><?php call1_title();?></title>
    <style>
        a {
            text-decoration: none;
            color: #fff000;
        }

        a:hover {
            color: blue;
        }
    </style>
</head>

<body>
<h1><a href="study.php">WEB</a></h1>
<ol>
    <?php call1_title();?>
</ol>
<h1><?php call_title();?></h1>
<p><?php call_contents();?></p>
</body>
</html>