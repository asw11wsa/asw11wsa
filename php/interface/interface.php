<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

//interface

//first method   //this method make mistake about someone didn't make function name's payNow or loginFirst you didn't know where is problem but simple
//interface PaymentInterface {
//    public function paymentProcess();
//}

//second method
interface PaymentInterface{
    public function payNow();
}
interface LoginInterface {
    public function loginFirst();
}

class Paypal implements PaymentInterface ,LoginInterface{
    public function loginFirst(){
        echo "loginFirst";
    }
    public function payNow(){
        echo "paypal";
    }
    public function paymentProcess(){
        $this->loginFirst();
        $this->payNow();
    }
}
class BankTransfer implements PaymentInterface ,LoginInterface{
    public function loginFirst(){
        echo "loginFirst";
    }
    public function payNow(){
        echo "paypal";
    }
    public function paymentProcess(){
        $this->loginFirst();
        $this->payNow();
    }
}
class Visa implements PaymentInterface{
    public function payNow(){
        echo "Visa";
    }
    public function paymentProcess(){
        $this->payNow();
    }
}
class Cash implements PaymentInterface{
    public function payNow(){
        echo "Cash";
    }
    public function paymentProcess(){
        $this->payNow();
    }
}

class BuyProduct{
    public function pay(PaymentInterface $paymentType){
        $paymentType->paymentProcess();
    }
    public function onlinePay(LoginInterface $paymentType){
        $paymentType->paymentProcess();
    }
}

$paymentType = new Cash();
$buyProduct = new BuyProduct();
$buyProduct->pay($paymentType);