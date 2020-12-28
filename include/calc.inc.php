<?php
error_reporting(E_ALL);

ini_set("display_errors", 1);

include 'class-autoload.inc.php';
$operator = $_POST["operator"];
$num1 = $_POST["num1"];
$num2 = $_POST["num2"];

$calc = new Calc($operator,$num1,$num2);
$calc->getAllInfo();
?>
