<?php

class UsersView extends Users {

    public function showUser($name){
       $results = $this->getUser($name);
       echo "full name: " . $results[0]['users_firstname'] . " " . $results[0]['users_lastname'] . "<br>";
       echo "date of birth: " . $results[0]['users_dateofbirth'];
    }
}