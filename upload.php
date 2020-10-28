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
    ?>
    <form action="upload_process.php" method="post">
    <input type="hidden" name="id" value="<?= $row2[id]?>">
    <p><input type="text" name="title" value="<?= $row2[title]?>"/></p>
    <p><textarea name="description"><?= $row2[description]?></textarea></p>
    <p><input type="submit"></p>
    </form>
    <?php
    }
    ?>
</p>
</body>
</html>