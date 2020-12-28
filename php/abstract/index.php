<?php

include_once "abstract/paymenttype.abstract.php";
include_once "classes/BuyProdunct.class.php";

$buyProduct = new BuyProduct();
echo $buyProduct->getPayment();
