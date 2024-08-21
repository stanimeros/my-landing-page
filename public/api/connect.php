<?php
    require("keys.php");

    $servername = "localhost";
    $dbname = $keys['dbname'];
    $username = $keys['username'];
    $password = $keys['password'];

    if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 

    $conn = mysqli_connect($servername, $username, $password, $dbname);

    if (!$conn) {
      die("Error: " . mysqli_connect_error());
    }

    mysqli_set_charset($conn, "utf8");
?>