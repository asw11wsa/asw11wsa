<?php
class ViewUser extends User
{

    public function showAllUsers(){
        $datas = $this->getAllUsers();
        foreach ($datas as $data){
            echo $data['id']."<br>";
            echo $data['create_date']."<br>";
        }
    }

    public function checkUser($id,$pass){
        $datas = $this->getUsers($id,$pass);
                echo $datas['id'];
                echo $id;
                echo $pass;
                $_SESSION['id'] = $id;
                echo $_SESSION['id'];
//                header($_SERVER['DOCUMENT_ROOT']."/manager/index.php");
//                header("Location:/manager/login.php");

    }
}