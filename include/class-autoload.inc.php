<?php
spl_autoload_register('myAutoLoader');

function myAutoLoader($className){
    $url = $_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];

    if (strpos($url, 'includes') !== false){
        $path = '../classes/';
    }else{
        $path = 'classes/';
    }
    $extension = '.class.php';
    require_once $path . $className . $extension;
}

// Check url
//echo $_SERVER['HTTP_HOST'];
//echo "<br>";
//echo $_SERVER['REQUEST_URI'];

