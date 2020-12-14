<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
<body>
    <ul class="pop">
        <li>hello</li>
    </ul>
    <script>
        (function ($) {
            $('ul.pop').click(function () {
                $('li',this).css('background-color','blue');
            });
        })(jQuery)
    </script>
    <script>
        const ul = document.querySelector('ul.pop');
        const li = ul.querySelector('li');

        function changeColor() {
            li.style.backgroundColor = "blue";
        }

        function init() {
            ul.addEventListener('click',changeColor);
        }

        init();
    </script>
</body>
</html>