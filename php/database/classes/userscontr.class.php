<?php

class UsersContr extends Users {

    public function createUser($firstname,$lastname,$birth){
        $this->setUser($firstname,$lastname,$birth);
    }
}