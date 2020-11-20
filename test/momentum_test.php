<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>test page</title>
    <style>
        @keyframes bgChange {
            from{
                opacity: 0;
            }
            to{
                opacity: 1;
            }
        }

        body{
            width: 100vw;
            height: 100vh;
            background-repeat: no-repeat;
            background-size: cover;
            background-color: #333333;
            animation: bgChange 0,2s linear;
        }
        li{
            list-style: none;
            margin-bottom: 2px;
        }
        .greeting{
            display: none;
        }
        .greeting-name{
            display: none;
        }
        .showing{
            display: block;
        }
    </style>
</head>
<body>
<section class="todo">
    <div class="js-clock">
        <h1 class="js-title">00:00</h1>
    </div>
    <form class="js-greeting">
        <input class="greeting" type="text" placeholder="What is your name">
    </form>
    <h3 class="greeting-name"></h3>
    <form class="toDoMake">
        <input type="text" class="toDoWrite" placeholder="Write a to do">
    </form>
    <ul class="toDoList">
    </ul>
</section>
    <script>
        const clock_title = document.querySelector("h1.js-title");
        const greeting_form = document.querySelector("form.js-greeting");
        const greeting_input = greeting_form.querySelector("input.greeting");
        const greeting_name = document.querySelector("h3.greeting-name");
        const todo_form = document.querySelector("form.toDoMake");
        const todo_input = document.querySelector("input.toDoWrite");
        const todo_list = document.querySelector("ul.toDoList");

        const NAME = 'name';
        const TODOS_LS = 'todo';

        let toDo = [];

        function getNumber() {
            const number = Math.ceil(Math.random() * 4);
            document.body.style.backgroundImage = `url(/asset/image/${number}.jpg)`;
        }

        function getTime() {
            const date = new Date;
            const hours = date.getHours();
            // console.log(hours);
            const minutes = date.getMinutes();
            // console.log(minutes);
            const seconds = date.getSeconds();
            // console.log(seconds);
            clock_title.innerHTML = `${hours < 10? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`
        }

        function getName() {
            const name = greeting_input.value;
            localStorage.setItem(NAME,name);
            loadName();
        }

        function loadName() {
            const getName = localStorage.getItem("name");
            if(getName !== null){
                greeting_name.classList.add('showing');
                greeting_input.classList.remove('showing');
                greeting_name.innerHTML = `Welcome ${getName}`
            }else{
                greeting_input.classList.add('showing');
                greeting_name.classList.remove('showing');
            }
        }

        function deleteToDo(e) {
            const deleteLi = e.target.parentNode;
            todo_list.removeChild(deleteLi);
            const cleanToDo = toDo.filter(function (toDo) {
                return toDo.id !== parseInt(deleteLi.id);
            });
            toDo = cleanToDo;
            uploadToDo();
        }

        function uploadToDo() {
            localStorage.setItem(TODOS_LS , JSON.stringify(toDo));
        }

        function paintingTodo(text) {
            const li =document.createElement("li");
            const btn = document.createElement("button");
            const span = document.createElement("span");
            const toDoId = toDo.length + 1;
            btn.innerText = '❌';
            btn.addEventListener("click", deleteToDo)
            span.innerHTML = text;
            li.id = toDoId;
            li.appendChild(btn);
            li.appendChild(span);
            todo_list.appendChild(li);
            const toDoObj = {
                text: text,
                id: toDoId
            };
            toDo.push(toDoObj);
            uploadToDo();
        }

        function handleTodo(e) {
            e.preventDefault();
            const currentText = todo_input.value;
            paintingTodo(currentText);
            todo_input.value = "";
        }

        function checkToDo() {
            const toDoList = localStorage.getItem(TODOS_LS);
            if(toDoList !== null){
                const parsedToDos = JSON.parse(toDoList);
                parsedToDos.forEach(function (todo) {
                    paintingTodo(todo.text);
                })
            }
        }

        function init() {
            getTime();
            setInterval(getTime,1000);
            greeting_form.addEventListener("submit",getName);
            loadName();
            todo_form.addEventListener("submit",handleTodo)
            checkToDo();
            getNumber();
        }

        init();
    </script>
</body>
</html>