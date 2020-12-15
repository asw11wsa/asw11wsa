<?php
class ViewUser extends User
{

    public function showAllUsers(){
        $datas = $this->getAllUsers();
        foreach ($datas as $data){
            echo $data['id'].PHP_EOL;
            echo $data['create_date'];
        }
    }
}