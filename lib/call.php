<?php
//출력할 리스트 불러오기
function call_list()
{
    $list = scandir("./data");

    $i = 0;
    while ($i < count($list)) {
        $title = htmlspecialchars($list[$i]);
        if ($list[$i] != ".") {
            if ($list[$i] != "..") {
                echo "<li><a href=\"study.php?id=$title\">$title</a></li>\n";
            }
        }
        $i = $i + 1;
    }
};
//제목 불러오기
function call_title()
{
    if (isset($_GET['id'])) {
        echo htmlspecialchars($_GET['id']);
    } else {
        echo "Home";
    }
};
//안의 내용 불러오기
function call_contents()
{
    if (isset($_GET['id'])) {
        /*data 안에 있는 파일을 아이뒤화 시켜서 내용 가져오기*/
        echo htmlspecialchars(file_get_contents("data/" . $_GET['id']));
    } else {
        echo "Welcome";
    }
};
function calc_num($a, $b, $c)
{
    switch ($c) {
        case "+":
            print($a + $b);
            print("<br>");
            break;
        case "-":
            print($a - $b);
            print("<br>");
            break;
        case "*":
            print($a * $b);
            print("<br>");
            break;
        case "/":
            print($a / $b);
            print("<br>");
            break;
    }
}
//calc_num(8, 3, "+");
//calc_num(8, 3, "-");
//calc_num(8, 3, "*");
//calc_num(8, 3, "/");

function calc_num2($a, $b)
{
    return $a + $b;
}
//echo calc_num2(2, 4);
?>