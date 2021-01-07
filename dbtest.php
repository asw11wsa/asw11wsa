<<<<<<< HEAD
<?php
$conn = mysqli_connect("localhost","asw11wsa","Siu2034!","asw11wsa");

if($conn){
    echo "데이터베이스 연결성공";
}else{
    echo "데이터베이스 연결 실패";
}

$query = "SELECT * FROM `topic`";
$result = mysqli_query($conn,$query);
$num = mysqli_num_rows($result);
