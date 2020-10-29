<?php
require_once 'dbconnect.php';
$GETid = $_GET['id'];
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
                //location.href = "design.php?id="<?//=$GETid?>//;
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
                grid-template-columns: repeat(5, 1fr);
                grid-auto-rows: 8vh 1fr 8vh;
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
        <h1 style="margin-left: 10px;"><a href="study.php">WEB</a></h1>
        <ol>
            <?php
            $sql = "SELECT * FROM topic";
            $result = mysqli_query($conn, $sql);
            while($row = mysqli_fetch_array($result)){
                echo "<li><a href=\"design.php?id=".$row[id]."\">".$row[title]."</a></li>";
            }
            ?>
        </ol>
        <a style="margin-left: 10px;" href="design_write.php">write</a>
        <?php
        if($GETid){
            ?>
            <a href="upload.php?id=<?=$GETid?>">update</a>
            <form style="margin-left: 10px;margin-top: 10px;" action="deleteProcess.php" method="post">
                <input type="hidden" name="id" value="<?=$GETid?>">
                <input type="submit" value="delete" onclick="button_event()">
            </form>
            <?php
        }
        ?>
    </div>
    <div class="content">
        <?php
        $sql2 ="SELECT * FROM `topic` WHERE `id` = '".$GETid."'";
        $result2 = mysqli_query($conn, $sql2);
        while($row2 = mysqli_fetch_array($result2)){
            ?>
            <form action="upload_process.php" method="post">
                <input type="hidden" name="id" value="<?= $row2[id]?>">
                <p><input type="text" name="title" value="<?= $row2[title]?>"/></p>
                <p><textarea name="description"><?= $row2[description]?></textarea></p>
                <p><input type="submit"></p>
            </form>
            <?php
        }
        ?>
    </div>
    <div class="side-r"></div>
    <footer><div class="footer-name">footer</div></footer>
</div>
</body>
</html>
