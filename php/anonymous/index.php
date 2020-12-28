<?php

include_once "classes/simpleClass.class.php";

$obj = new SimpleClass();
$obj->helloWorld();
echo "<br>";

//Anonymous class

$newObj = new class{
  public function helloWorld(){
      echo "hello world";
  }
};

$newObj->helloWorld();
echo "<br>";

// if you want to use construct function

$newObj2 = new class("siu",29){
    public $name;
    public $age;

    public function __construct($name,$age)
    {
        $this->name = $name;
        $this->age = $age;
    }

    public function helloWorld(){
        echo "hello world $this->name $this->age";
    }
};

$newObj2->helloWorld();