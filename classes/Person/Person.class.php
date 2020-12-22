<?php

class Person {
    public $name;
    public $age;

    public function __construct($name,$age) {
        $this->name = $name;
        $this->age = $age;
    }

    //Methods
    public function getPerson(){
        $person = $this->name . " is " . $this->age . " years old!";
        return $person;
    }
    public function setName($name){
        $this->name = $name;
    }

    public function getName(){
        return $this->name ;
    }
}
