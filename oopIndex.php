<?php
 include 'include/class-autoload.inc.php';
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<form action="include/calc.inc.php" method="post">
    <p>My own calculator!</p>
    <input type="number" name="num1" placeholder="First number">
    <select name="operator">
        <option value="add">Addition</option>
        <option value="sub">Subtraction</option>
        <option value="div">Division</option>
        <option value="mul">Multiplication</option>
    </select>
    <input type="number" name="num2" placeholder="Second number">
    <button type="submit" name="submit">Calculate</button>
</form>
</body>
</html>
