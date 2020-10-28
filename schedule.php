<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>시우 test</title>
    <link rel="shortcut icon" type="image⁄x-icon" href="images/icon/tg.ico">
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/header.css">
    <link rel="stylesheet" type="text/css" href="css/footer.css">
    <link rel="stylesheet" type="text/css" href="css/schedule.css">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css">
    <script defer src="js/header.js"></script>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <script
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDCTD7-P2wzkx_DKZWi4h-ScGNNAKXRPEw&callback=initMap&libraries=&v=weekly"
            defer
    ></script>
    <style type="text/css">
        /* Always set the map height explicitly to define the size of the div
         * element that contains the map. */
        #map {
            height: 100%;
        }

        /* Optional: Makes the sample page fill the window. */
        html,
        body {
            height: 100%;
            margin: 0;
            padding: 0;
        }
        td,th{
            border: 1px solid black;
        }
    </style>
    <script>
        "use strict";

        // This example displays a marker at the center of Australia.
        // When the user clicks the marker, an info window opens.
        function initMap() {
            const uluru = {
                lat: 37.2664398,
                lng: 126.9994077
            };
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 10,
                center: uluru
            });
            const contentString =
                '<div id="content">' +
                '<div id="siteNotice">' +
                "</div>" +
                '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
                '<div id="bodyContent">' +
                "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
                "sandstone rock formation in the southern part of the " +
                "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
                "south west of the nearest large town, Alice Springs; 450&#160;km " +
                "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
                "features of the Uluru - Kata Tjuta National Park. Uluru is " +
                "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
                "Aboriginal people of the area. It has many springs, waterholes, " +
                "rock caves and ancient paintings. Uluru is listed as a World " +
                "Heritage Site.</p>" +
                '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
                "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
                "(last visited June 22, 2009).</p>" +
                "</div>" +
                "</div>";
            const infowindow = new google.maps.InfoWindow({
                content: contentString
            });
            const marker = new google.maps.Marker({
                position: uluru,
                map,
                title: "Uluru (Ayers Rock)"
            });
            marker.addListener("click", () => {
                infowindow.open(map, marker);
            });
        }
    </script>
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
<div class="main_picture_sc">
    <div>
        <p><i class="xi-lock xi-2x"></i></p>
        <p>공개</p>
    </div>
    <div>
        <p><i class="xi-unlock xi-2x"></i></p>
        <p>비공개</p>
    </div>
    <div>
        <h2>여행일정짜기</h2>
        <p>여행지검색을 통해서 나만의 일정을 만들어 보세요.</p>
    </div>
</div>
<div class="map" style="width: 80%;height: 500px; background-color: black;margin: 10px auto; border-radius: 10px;">
    <div id="map"></div>
</div>
<div class="schedule" style="position: relative;width: 80%;margin: 0 auto;">
    <div class="schedule_list" style="position: relative; width: 20%;height: 800px; background-color: blue; ">
        <table>
            <tr style="width: 200px; height: 75px;">
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
            </tr>
            <tr style="width: 200px; height: 75px;">
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
            </tr>
            <tr style="width: 200px; height: 75px;">
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
            </tr>
            <tr style="width: 200px; height: 75px;">
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
            </tr>
            <tr style="width: 200px; height: 75px;">
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
            </tr>
            <tr style="width: 200px; height: 75px;">
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
            </tr>
            <tr style="width: 200px; height: 75px;">
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
            </tr>
            <tr style="width: 200px; height: 75px;">
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
            </tr>
            <tr style="width: 200px; height: 75px;">
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
            </tr>
            <tr style="width: 200px; height: 75px;">
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
            </tr>
        </table>
    </div>
    <div class="schedule_calendar" style="position: absolute; top: 0; left: 20%; width: 80%; height: 800px; background-color: pink;">
        <table>
            <tr style="width: 200px; height: 75px;">
                <td>
                    <div style="width: 100%; height: 70px; background-color: #0aaddf;"></div>
                </td>
                <td>
                    <div style="width: 100%; height: 70px; background-color: #0aaddf;"></div>
                </td>
                <td>
                    <div style="width: 100%; height: 70px; background-color: #0aaddf;"></div>
                </td>
                <td>
                    <div style="width: 100%; height: 70px; background-color: #0aaddf;"></div>
                </td>
            </tr>
            <tr style="width: 200px; height: 75px;">
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
            </tr>
            <tr style="width: 200px; height: 75px;">
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
            </tr>
            <tr style="width: 200px; height: 75px;">
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
            </tr>
            <tr style="width: 200px; height: 75px;">
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
            </tr>
            <tr style="width: 200px; height: 75px;">
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
            </tr>
            <tr style="width: 200px; height: 75px;">
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
            </tr>
            <tr style="width: 200px; height: 75px;">
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
            </tr>
            <tr style="width: 200px; height: 75px;">
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
            </tr>
            <tr style="width: 200px; height: 75px;">
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
                <td>
                    <div style="width: 215px; height: 70px; background-color: #0aaddf;"></div>
                </td>
            </tr>
        </table>
    </div>
</div>
<?php include $_SERVER['DOCUMENT_ROOT']."/include/footer.php";?>
