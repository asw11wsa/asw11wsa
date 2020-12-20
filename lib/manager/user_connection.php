<?php
class User extends Database
{

    protected function getAllUsers(){
        $sql = "SELECT * FROM user";
        $result = $this->connect()->query($sql);
        $numRows = $result->num_rows;
        if($numRows > 0){
            while ($row = $result->fetch_assoc()){
                $data[] = $row;
            }
            return $data;
        }
    }
    protected function getUsers($id,$pass){
        $sql = "SELECT *
                FROM `user`
                WHERE `id` = $id
                AND `password` = $pass";
        $result = $this->connect()->query($sql);
        $numRows = $result->num_rows;
        if($numRows > 0){
            while ($row = $result->fetch_assoc()){
                $data[] = $row;
            }
            return $data;
        }
    }
}