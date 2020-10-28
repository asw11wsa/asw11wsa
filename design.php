<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>design</title>
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
            height: 100vh;
            gap: 2px;
            grid-template-columns: repeat(5, 1fr);
            grid-auto-rows: minmax(100px,auto);
            grid-template-areas:
                "header header header header header"
                "side-l content content content side-r"
                "side-l content content content side-r"
                "side-l content content content side-r"
                "side-l content content content side-r"
                "side-l content content content side-r"
                "side-l content content content side-r"
                "footer footer footer footer footer";
        }
        header{
            grid-area: header;
            background: #999;
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
        }
        .side-l{
            grid-area: side-l;
            background: #fff;
        }
        .side-r{
            grid-area: side-r;
            background: #fff;
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
        <div class="side-l"></div>
        <div class="content"></div>
        <div class="side-r"></div>
        <footer></footer>
    </div>
</body>
</html>
