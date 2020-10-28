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
            /*justify-content: center;*/
            /*align-items: center;*/
            gap: 2px;
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: 8vh minmax(84vh,auto) 8vh;
            grid-template-areas:
                "header header header"
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
            display: none;
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
                grid-auto-rows: 8vh minmax(84vh,auto) 8vh;
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
        <div class="side-l"></div>
        <div class="content"></div>
        <div class="side-r"></div>
        <footer><div class="footer-name">footer</div></footer>
    </div>
</body>
</html>
