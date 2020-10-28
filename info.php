<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
</head>
<body STYLE="text-align: center;">
<?php
echo "서버상 위치 : ".$_SERVER['DOCUMENT_ROOT']."<br>";// 현재 사이트가 위치한 서버상의 위치 // webappinclude
echo "사이트 접속한 사용자 IP : ".$_SERVER['REMOTE_ADDR']."<br>";// 사이트 접속한 사용자 IP// xxx.xxx.xxx.xxx
echo "실행되고 있는 위치와 파일명 : ".$_SERVER['SCRIPT_FILENAME']."<br>";// 실행되고 있는 위치와 파일명 // webapp/include/index.php
echo "사이트 도메인 : ".$_SERVER['SERVER_NAME']."<br>";//사이트 도메인 // WWW.X2CHI.COM
echo "현재페이지의 주소에서 도메인 제외 : ".$_SERVER['REQUEST_URI']."<br>";// 현재페이지의 주소에서 도메인 제외 =  index.php?user=&name=

echo "현재페이지의 주소에서 도메인과 넘겨지는 값 제외 : ".$_SERVER['PHP_SELF']."<br>";// 현재페이지의 주소에서 도메인과 넘겨지는 값 제외 = index.php

echo "인코딩 방식 : ".$_SERVER['HTTP_ACCEPT_ENCODING']."<br>";// 인코딩 방식
echo "언어 : ".$_SERVER['HTTP_ACCEPT_LANGUAGE']."<br>";// 언어 = ko
echo "사이트 접속한 사용자 환경 : ".$_SERVER['HTTP_USER_AGENT']."<br>"; /*사트 접속한 사용자 환경*/
echo "사이트가 사용하는 포트 : ".$_SERVER['SERVER_PORT']."<br>"; // 사이트가 사용하는 포트 = 80
echo "서버의 소프트웨어 환경 : ".$_SERVER['SERVER_SOFTWARE']."<br>"; // 서버의 소프트웨어 환경 = Apache
echo "CGI 정보 : ".$_SERVER['GATEWAY_INTERFACE']."<br>"; // cGI 정보 = CGI1.1
echo "사용된 서버 프로토콜 : ".$_SERVER['SERVER_PROTOCOL']."<br>"; // 사용된 서버 프로토콜 = HTTP1.1
?>

</body>
</html>
