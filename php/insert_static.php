


<?php

//166.62.27.61	

$host = "182.50.151.58";
$user = "mfav";
$password = "G)NGkqKVp)L}uA5*";
$db = "oznzmma";

$con=mysqli_connect($host, $user, $password, $db);
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

// Perform queries 
mysqli_query($con,"INSERT INTO Fighters (country,name,weight_kilos,organisation) 
VALUES ('NZ','Daniel Hooker','77','Bellator')");
echo "added";

mysqli_close($con);
?>