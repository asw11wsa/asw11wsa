<?php
spl_autoload_register('myAutoLoader');

function myAutoLoader($className){
    $path = "classes/";
    $path2 = "$className/";
    $extension = ".class.php";
    $fullPath = $path . $path2 . $className . $extension;

    if(!file_exists($fullPath)){
        return false;
    }

//    echo $fullPath;
    include_once $fullPath;
}

