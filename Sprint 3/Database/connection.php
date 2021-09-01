<?php

$dbhost = "localhost";
$dbuser = "root"; //default username
$dbpass = ""; //default password
$dbname = "signupsystem"; //database name

//checks if it cannot connect to database
if(!$conn = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname)) 
{

	die("failed to connect!");
}

?>