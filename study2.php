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
  <form action="deleteProcess.php" method="post">
      <input type="hidden" name="id" value="<?=$GETid?>">
      <input type="submit" value="delete" onclick="button_event()">
  </form>
<?php
}
?>
    <?php
    if($GETid){
    $sql2 ="SELECT * FROM `topic` WHERE `id` = '".$GETid."'";
    $result2 = mysqli_query($conn, $sql2);
    while($row2 = mysqli_fetch_array($result2)){
    ?>
        <h2><?= $row2[title];?></h2>
        <p><?= $row2[description];?></p>
    <?php
    }
    }else{
    ?>
        <h2>HELLO</h2>
        <p>WELCOME TO MY WEBSITE</p>
    <?php
    }
    ?>
<script>
    function button_event() {
        if(confirm("정말 삭제하시겠습니까??") == true){
            document.form.submit();
        }else{

        }
    };
</script>
</body>
</html>