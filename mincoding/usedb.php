<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <?php
    $host = 'localhost';
    $user = 'root';
    $pw = 'tjdghk5328';
    $dbName = 'siuproject';
    $mysqli = new mysqli($host,$user,$pw,$dbName);

    $sql = 'SELECT * FROM customer';
    $res = $mysqli->query($sql);

     $row = $res->fetch_object();
     echo "$row->name / $row->age / $row->address / $row->sex";
  ?>
</body>
</html>
