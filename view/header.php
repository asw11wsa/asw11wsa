<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title><?php call_title(); ?></title>
    <style>
        a {
            text-decoration: none;
            color: #fff000;
        }

        a:hover {
            color: blue;
        }
    </style>
</head>

<body>
<h1><a href="study.php">WEB</a></h1>
<ol>
    <?php
    call_list();
    ?>
</ol>