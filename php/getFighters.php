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
$result = mysqli_query($con,"SELECT * FROM Fighters");
$fighterArray = array();
for ($i=0; $i < 10; $i++) { 
	$row = mysqli_fetch_array($result);
		$fighterArray[$i] = $row;

}
mysqli_close($con);

echo json_encode( $fighterArray );

?>