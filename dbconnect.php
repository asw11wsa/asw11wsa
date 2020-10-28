<?php
##### 데이터베이스 연결설정 인자 (서버명, 사용자명, 비밀번호, 데이터베이스명)
$host= "localhost";
$user= "asw11wsa";
$password= "tjdghk5328";
$db= "asw11wsa";

##### 데이터베이스에 연결한다.
$conn = @mysqli_connect($host,$user,$password,$db);
if(!$conn) {
    error("데이터베이스 연결실패");
    exit;
}
?>


