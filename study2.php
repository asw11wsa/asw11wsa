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
<?php
$sql = "SELECT title FROM topic";
$result = mysqli_query($conn, $sql);
while($row = mysqli_fetch_array($result)){
    echo $row[title];
}
?>
</body>
</html>