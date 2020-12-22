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
<?php
$person1 = new Person("siu",25);

try {
    $person1->setName(2);
    echo $person1->getName();
}catch (TypeError $e){
    echo $e->getMessage();
}
?>
</body>
</html>
