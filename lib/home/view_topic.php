<?php
class ViewTopic extends Topic
{

    public function showAllTopic(){
        $datas = $this->getAllTopic();
        foreach ($datas as $data){
            echo $data['title']."<br>";
            echo $data['description']."<br>";
        }
    }
    public function showAllTopicNav(){
        $datas = $this->getAllUsersActive();
        foreach ($datas as $data){
            $escaped_title = htmlspecialchars($data['title']);
            echo "<li><a class=\"list_items\" style=\"order:{$data['id']}\" href=\"index.php?id={$data['id']}\">{$escaped_title}</a></li>";
        }
    }

    public function showTopicFromId($id){
        $datas = $this->getTopicFromId($id);
        foreach ($datas as $data){
            $escaped_title = htmlspecialchars($data['title']);
            $escaped_description = htmlspecialchars($data['description']);
            echo "<h2 class=\"margin-left10\">{$escaped_title}</h2>";
            echo "<p class=\"margin-left10\">{$escaped_description}</p>";
        }
    }
}