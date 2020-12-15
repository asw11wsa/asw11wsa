<?php

class Topic extends Database{
    protected function getAllTopic(){
        $sql = "SELECT * FROM topic";
        $result = $this->connect()->query($sql);
        $numRows = $result->num_rows;
        if($numRows > 0){
            while ($row = $result->fetch_assoc()){
                $data[] = $row;
            }
            return $data;
        }
    }
    protected function getAllUsersActive(){
        $sql = "SELECT * FROM topic WHERE active = 1";
        $result = $this->connect()->query($sql);
        $numRows = $result->num_rows;
        if($numRows > 0){
            while ($row = $result->fetch_assoc()){
                $data[] = $row;
            }
            return $data;
        }
    }

    protected function getTopicFromId($id){
        $sql = "SELECT * FROM topic WHERE `id` = $id";
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