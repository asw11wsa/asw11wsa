<?php

class Person {
    // Properties
    private $name;
    private $eyeColor;
    private $age;

    public static $drinkingAge = 21;

    public function __construct($name,$eyeColor,$age) {
        $this->name = $name;
        $this->eyeColor = $eyeColor;
        $this->age = $age;
    }

    //Methods
    public function setName($newName){
        $this->name = $newName;
    }

    public function getDA() {
        return self::$drinkingAge;
    }

    public static function setDrinkingAge($newDA){
        self::$drinkingAge = $newDA;
    }
}
