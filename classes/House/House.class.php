<?php

class House {
    public $streetName;
    public $streetNr;

    public function __construct($name,$nr) {
        $this->streetName = $name;
        $this->streetNr = $nr;
    }

    //Methods
    public function getAddress(){
        $address = $this->streetName . " is " . $this->streetNr . "'s house";
        return $address;
    }
}