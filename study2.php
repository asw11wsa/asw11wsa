<?php
require_once 'dbconnect.php';
$GETid = $_GET['id'];
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>test</title>
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
<?php
$sql = "SELECT * FROM topic";
$result = mysqli_query($conn, $sql);
while($row = mysqli_fetch_array($result)){
    echo "<li><a href=\"study2.php?id=".$row[id]."\">".$row[title]."</a></li>";
}
?>
</ol>
<a href="write.php">write</a>
<?php
if($GETid){
?>
  <a href="upload.php?id=<?=$GETid?>">update</a>
<?php
}
?>
<p>
    <?php
    $sql2 ="SELECT * FROM `topic` WHERE `id` = '".$GETid."'";
    $result2 = mysqli_query($conn, $sql2);
    while($row2 = mysqli_fetch_array($result2)){
        echo $row2[description];
    }
    ?>
</p>
</body>
</html>