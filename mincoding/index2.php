<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title></title>
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
    <h1><a href="index2.php">WEB</a></h1>
    <ol>
        <?php
        call_list();
        ?>
    </ol>
    <h2>
        <?php
        call_title();
        ?>
    </h2>
    <p>
        <?php
        call_contents();
        ?>
    </p>

    <?php
    function call_list()
    {
        $list = scandir("./data");

        $i = 0;
        while ($i < count($list)) {
            if ($list[$i] != ".") {
                if ($list[$i] != "..") {
                    echo "<li><a href=\"index2.php?id=$list[$i]\">$list[$i]</a></li>\n";
                }
            }
            $i = $i + 1;
        }
    };
    function call_title()
    {
        if (isset($_GET['id'])) {
            echo $_GET['id'];
        } else {
            echo "Home";
        }
    };
    function call_contents()
    {
        if (isset($_GET['id'])) {
            /*data 안에 있는 파일을 아이뒤화 시켜서 내용 가져오기*/
            echo file_get_contents("data/" . $_GET['id']);
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
    calc_num(8, 3, "+");
    calc_num(8, 3, "-");
    calc_num(8, 3, "*");
    calc_num(8, 3, "/");

    function calc_num2($a, $b)
    {
        return $a + $b;
    }
    echo calc_num2(2, 4);
    ?>
</body>

</html>