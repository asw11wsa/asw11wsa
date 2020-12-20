<?php

class Person {
    private $first = "Daniel";
    private $last = "Nielsen";
    private $age = "28";

    public function owner() {
        $a = $this->first;
        return $a;
    }
}

class Pet {
    public function owner() {
        $a = "Hi there!";
        return $a;
    }
}
?>