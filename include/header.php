<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>시우 test</title>
    <link rel="shortcut icon" type="image⁄x-icon" href="images/icon/tg.ico">
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/header.css">
    <link rel="stylesheet" type="text/css" href="css/footer.css">
    <link rel="stylesheet" type="text/css" href="css/list.css">
    <link rel="stylesheet" type="text/css" href="css/detail.css">
    <link rel="stylesheet" type="text/css" href="css/schedule.css">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css">
    <script defer src="js/header.js"></script>
    <? include $_SERVER['DOCUMENT_ROOT']."/session.php";?>
    <? include $_SERVER['DOCUMENT_ROOT']."/dbconnect.php";?>
</head>
<body>
<div class="header" name="top">
    <div class="nav">
        <div class="logo"><a href="index.php"><img src="images/logo.jpg" alt="여행고수"></a></div>
        <div class="main_menu">
            <ul>
                <li><a href="schedule.php"><h2>일정만들기</h2></a>
                    <ul>
                        <li>신규일정만들기</li>
                        <li>여행일정따라가기</li>
                    </ul>
                </li>
                <li><a href="list.php"><h2>여행정보</h2></a>
                    <ul>
                        <li>태국</li>
                        <li>베트남</li>
                        <li>캄보디아</li>
                        <li>대만</li>
                        <li>일본</li>
                    </ul>
                </li>
                <li><a href="#a"><h2>여행맵</h2></a>
                    <ul>
                        <li>태국</li>
                        <li>베트남</li>
                        <li>캄보디아</li>
                        <li>대만</li>
                        <li>일본</li>
                    </ul>
                </li>
                <li><a href="#a"><h2>추천여행</h2></a>
                    <ul>
                        <li>태국</li>
                        <li>베트남</li>
                        <li>캄보디아</li>
                        <li>대만</li>
                        <li>일본</li>
                    </ul>
                </li>
                <li><a href="#a"><h2>커뮤니티</h2></a>
                    <ul>
                        <li>공지사항</li>
                        <li>자유게시판</li>
                        <li>FAQ</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="sub_menu">
            <ul>
                <li><a href="#a">TEST님</a></li>
                <li><a href="#a">로그아웃</a></li>
                <li><a href="#a">마이페이지</a></li>
                <li><a href="#a"><i class="xi-bars xi-2x"></i></a></li>
            </ul>
        </div>
    </div>
</div>