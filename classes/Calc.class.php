<?php

class Calc {
    public $operator;
    public $num1;
    public $num2;

    public function __construct($operator, $num1, $num2)
    {
        $this->operator = $operator;
        $this->num1 = $num1;
        $this->num2 = $num2;
    }

    public function getAllInfo()
    {
        echo $this->operator;
        echo $this->num1;
        echo $this->num2;
    }

    public function calculator(){
        switch ($this->operator) {
            case 'add':
                return $this->num1 + $this->num2;
                break;
            case 'sub':
                return $this->num1 - $this->num2;
                break;
            case 'div':
                return $this->num1 / $this->num2;
                break;
            case 'mul':
                return $this->num1 * $this->num2;
                break;
            default:
                return "error";
                break;
        }
    }
}