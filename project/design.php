<?php
require_once $_SERVER['DOCUMENT_ROOT']."/dbconnect.php";
$GETid = $_GET['id'];
$sql = "SELECT * FROM topic";
$result = mysqli_query($conn, $sql);
$list = '';
while($row = mysqli_fetch_array($result)){
    $list = $list."<li><a href=\"/project/design.php?id={$row[id]}\">{$row[title]}</a></li>";
}
$contents = array(
    $title = 'Welcome',
    $description = 'Nice to meet You'
);
if($GETid){
    $filtered_id = mysqli_real_escape_string($conn,$GETid);
    $sql2 ="SELECT * FROM `topic` WHERE `id` = {$filtered_id}";
    $result2 = mysqli_query($conn, $sql2);
    $row2 = mysqli_fetch_array($result2);
    $contents['title'] = $row2[title];
    $contents['description'] = $row2[description];
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>design</title>
    <script>
        function button_event() {
            if(confirm("정말 삭제하시겠습니까??") == true){
                document.form.submit();
            }else{
                return;
            }
        };
    </script>
    <style>
        body{
            margin: 0;
            padding: 0;
            background: #000000;
        }
        a{
            text-decoration: none;
            color: #333;
        }
        a:hover{
            color: #666;
            transform: scale(1.5);
        }
        .page{
            display: grid;
            /*justify-content: center;*/
            /*align-items: center;*/
            gap: 2px;
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: 8vh minmax(30vh,auto) minmax(54vh,auto) 8vh;
            grid-template-areas:
                "header header header"
                "side-l side-l side-l"
                "content content content "
                "footer footer footer";
        }
        header{
            grid-area: header;
            background: #999;
            position: sticky;
            top: 0;
            display: flex;
            justify-content: center;
            text-align: center;
            align-items: center;
            box-sizing: border-box;
        }
        .logo{
            flex: 1;
        }
        .menu{
            flex: 3;
        }
        .login{
            flex: 1;
        }
        .content{
            grid-area: content;
            background: #fff;
        }
        footer{
            grid-area: footer;
            background: cadetblue;
            display: flex;
            justify-content: center;
            text-align: center;
            align-items: center;
        }
        .footer-name{
            width: 100%;
            text-align: center;
        }
        .side-l{
            grid-area: side-l;
            background: #fff;
        }
        .side-r{
            grid-area: side-r;
            background: #fff;
            display: none;
        }
        @media (min-width: 756px) {
            .page{
                display: grid;
                /*justify-content: center;*/
                /*align-items: center;*/
                gap: 2px;
                grid-template-columns: 250px repeat(3,1fr) 250px;
                grid-auto-rows: 8vh minmax(1200px, auto) 8vh;
                grid-template-areas:
                    "header header header header header"
                    "side-l content content content side-r"
                    "footer footer footer footer footer";
            }
            .side-l{
                display: block;
            }
            .side-r{
                display: block;
            }
            .margin-left10{
                margin-left: 10px;
            }
            .margin-top10{
                margin-top: 10px;
            }
        }
    </style>
</head>
<body>
    <div class="page">
        <header>
            <div class="logo"><a href="">logo</a></div>
            <div class="menu"><a href="">menu</a></div>
            <div class="login"><a href="">login</a></div>
        </header>
        <div class="side-l">
            <h1 class="margin-left10"><a href="/project/design.php">WEB</a></h1>
            <ol><?=$list?></ol>
            <a class="margin-left10" href="/project/design_write.php">write</a>
            <?php
            if($GETid){
                ?>
                <a href="/project/design_update.php?id=<?=$GETid?>">update</a>
                <form name="form" class="margin-left10 margin-top10" action="/project/deleteProcess.php" method="post">
                    <input type="hidden" name="id" value="<?=$GETid?>">
                    <input type="button" value="delete" onclick="button_event()">
                </form>
            <?php
            }

            ?>
        </div>
        <div class="content">
            <h2 class="margin-left10"><?= $contents['title'];?></h2>
            <p class="margin-left10"><?= $contents['description'];?></p>
        </div>
        <div class="side-r"></div>
        <footer><div class="footer-name">footer</div></footer>
    </div>
</body>
</html>