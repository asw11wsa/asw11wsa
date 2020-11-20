<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title>Insert title here</title>
    <style>
        #div1 {
            width: 250px;
            height: 250px;
            padding: 10px;
            margin: 0px 10px 0px 0px;
            border: 1px solid #aaaaaa;
            float: left;
        }
        #div2 {
            width: 250px;
            height: 250px;
            padding: 10px;
            margin: 0px 10px 0px 0px;
            border: 1px solid #aaaaaa;
            float: left;
        }
        #div3 {
            width: 250px;
            height: 250px;
            padding: 10px;
            border: 1px solid #aaaaaa;
            float: left;
        }
    </style>
    <script>
        function allowDrop(ev) {
            ev.preventDefault();
        }

        function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
        }

        function drop(ev) {
            ev.preventDefault();
            let data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(data));
        }
    </script>
</head>
<body>
<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
    <img id="drag1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png" draggable="true" ondragstart="drag(event)" width="250px" height="250px">
</div>
<div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)">
</div>
<div id="div3" ondrop="drop(event)" ondragover="allowDrop(event)">
</div>
</body>
</html>
