
<?php include $_SERVER['DOCUMENT_ROOT']."/include/header.php";?>
<div class="main_picture">
    <div>
        <p>비자</p>
        <p><i class="xi-cc-visa xi-4x"></i></p>
        <p>무비자</p>
        <p>90일 체류가능</p>
    </div>
    <div>
        <p>현지시간</p>
        <p><i class="xi-time xi-4x"></i></p>
        <p>12:02:50</p>
        <p>(시차:0시간)</p>
    </div>
    <div>
        <h2>여행후기</h2>
        <p>여행정보에서 각나라의 정보와 팁을 살펴보세요.</p>
    </div>
    <div>
        <p>비행시간</p>
        <p><i class="xi-flight-on xi-4x"></i></p>
        <p>직항</p>
        <p>1시간 30분</p>
    </div>
    <div>
        <p>환율</p>
        <p><i class="xi-money xi-4x"></i></p>
        <p>100KRW</p>
        <p>대한민국 100원</p>
    </div>
</div>
<div class="main">
    <div class="sub_button">
        <div>
            <p>나라별</p>
            <p>여행정보</p>
        </div>
        <div>
            <p><i class="xi-pen xi-1x"></i> 여행후기</p>
        </div>
        <div>
            <p><i class="xi-note xi-1x"></i> 기초정보</p>
        </div>
        <div>
            <p><i class="xi-router xi-1x"></i> 현지소식</p>
        </div>
        <div>
            <p><i class="xi-group xi-1x"></i> 여행기</p>
        </div>
        <div>
            <p><i class="xi-comment xi-1x"></i> 묻고답하기</p>
        </div>
    </div>
    <div class="list">
        <div>
            <span>여행후기</span>
            <span>여행정보 < HOME</span>
        </div>
        <div>
            <ul>
                <li><a href="#a">관광</a></li>
                <li><a href="#a">맛집</a></li>
                <li><a href="#a">숙박</a></li>
                <li><a href="#a">교통</a></li>
            </ul>
        </div>
        <div class="search">
            <select>
                <option value="place">관광</option>
                <option value="food">맛집</option>
                <option value="hotel">숙박</option>
                <option value="car">교통</option>
            </select>
            <input type="text">
            <a href="#search"><button><i class="xi-search xi-1x"></i></button></a>
            <a href="#write"><button><p>글쓰기</p></button></a>
        </div>
        <div class="dump"></div>
            <div class="list_range">
                <?
                $query = "SELECT * FROM `test_list` WHERE 1 LIMIT 0 , 10";
                $result = mysqli_query($conn,$query);

                while ($row = mysqli_fetch_array($result)) {
                    $timestamp = strtotime($row[wdate]);
                    ?>
                    <div class="list_all">
                        <div class="thum">
                            <a href="detail.php?idx=<?print_r($row[idx]);?>"><img src="/upload/thum/<?print_r($row[t_img]);?>" alt="썸네일" style="width: "></a>
                        </div>
                        <div class="txt">
                            <a href="detail.php?idx=<?print_r($row[idx]);?>">
                                <h2><?print_r($row[city]);?></h2>
                                <h3><?print_r($row[title]);?></h3>
                                <span><?print_r($row[contents]);?></span>
                                <span><?print_r($row[s_name]);?></span>
                                <span><i class="xi-thumbs-up xi-1x"></i>인기도 0</span>
                                <span><i class="xi-library-add xi-1x"></i>포스트 1</span>
                                <span><i class="xi-calendar xi-1x"></i>등록일 <?echo date('Y-m-d', $timestamp);?></span>
                                <span><i class="xi-pen xi-1x"></i>Written by.<?print_r($row[writer]);?></span>
                            </a>
                        </div>
                    </div>
                    <?
                }
                mysqli_close($conn);
                ?>
            <div class="paging">
                <ul>
                    <li><a href="#a">1</a></li>
                    <li><a href="#a">2</a></li>
                    <li><a href="#a">3</a></li>
                    <li><a href="#a">4</a></li>
                    <li><a href="#a">5</a></li>
                    <li><a href="#a">6</a></li>
                    <li><a href="#a">7</a></li>
                    <li><a href="#a">8</a></li>
                    <li><a href="#a">9</a></li>
                    <li><a href="#a">10</a></li>
                    <li><a href="#a"><i class="xi-angle-right xi-1x"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="dump2"></div>
    </div>
    <div class="go_top">
        <a href="#top "><i class="xi-arrow-top xi-3x"></i></a>
    </div>
</div>
<?php include $_SERVER['DOCUMENT_ROOT']."/include/footer.php";?>