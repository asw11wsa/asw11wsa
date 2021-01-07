<?php
 class testFrist{
     const Name = "i am siu hello";

     public static function test(){
         echo "this is frist test";
     }
 }

 echo testFrist::Name;
 echo "<br>";
 echo testFrist::test();
echo "<br>";
 class testSecond extends testFrist{
     public static $Age = 24;

     public static function test2(){
         echo parent::test();
         echo "<br>";
         echo self::$Age;
     }
 }

 echo testSecond::test2();