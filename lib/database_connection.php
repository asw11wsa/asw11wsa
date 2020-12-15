<?php
class Database
{

    private $servername;
    private $username;
    private $password;
    private $dbname;

    protected function connect(){
        $this->servername = "localhost";
        $this->username = "asw11wsa";
        $this->password = "tjdghk5328";
        $this->dbname = "asw11wsa";

        $conn = new mysqli($this->servername,$this->username,$this->password,$this->dbname);
        return $conn;
    }
}
?>
