<?php
require_once 'dbconnect.php';
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
    echo "<li><a href=\"study2.php?id=".$row[title]."\">".$row[title]."</a></li>";
}
?>
</ol>
<a href="write.php">write</a>
<form action="write_process.php" method="post">
    <p><input type="text" name="title"/></p>
    <p><textarea name="description"></textarea></p>
    <p><input type="submit"></p>
</form>
</body>
</html>