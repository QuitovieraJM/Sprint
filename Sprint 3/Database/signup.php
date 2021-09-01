<?php
	session_start();
	include("connection.php");
	
	if($_SERVER['REQUEST_METHOD'] == "POST")
	{
		//$_POST is used to collect the value of the input field from the form data
		//$_POST['variable'] - variable here refers to the name 

		$firstname = $_POST['fname']; 
		$lastname = $_POST['lname'];
		$email = $_POST['address'];
		$password = $_POST['pass'];


		//gets the user from the database with the same email
		$query = mysqli_query($conn, "SELECT * FROM user WHERE email = '$email'"); 


		//if there is an existing email in the database
		if(mysqli_num_rows($query)>0){
			echo '<script>alert("Email is already used")</script>';
		}
		else{
			//saves into database
			$sql = "INSERT INTO user (firstname, lastname, email, password) VALUES ('$firstname', '$lastname', '$email', '$password');";
			mysqli_query($conn, $sql);
			header("Location: login.php");
			die;

		}
	}

?>

<!DOCTYPE html>

<head>
	<link rel="stylesheet" type="text/css" href="main.css"/> 
<head>
<head> 
	<title>Signup Page</title>
</head>
<body>
	<div class="signup">
	<form id= "signup" method="post" action="#">
		<h2 style= "border-bottom-style: groove;">SIGN UP</h2>
		<label><b>First Name:
		</b>
		</label>	
		<input type="text" name="fname" id="firstName" placeholder="First Name">
		<br><br>
		<label><b>Last Name:
		</b>
		</label>
		<input type="text" name="lname" id="lastName" placeholder="Last Name">
		<br><br>
		<label><b>Email Address:
		</b>
		</label>
		<input type="text" name="address" id="address" placeholder="Email">
		<br><br>
		<label><b>Password:
		</b>
		</label>
		<input type="Password" name="pass" id="pass" placeholder="Password">
		<br><br>
		<div style= "text-align: center;">
			<input type="submit" name= "sign" id="sign" value="SIGN UP">
		</div>
		<br><br>
		<p style= "border-bottom-style: groove; margin-top: 0px;"></p>
		<span>Already have an account?</span>
		<input type="button" onclick="location.href = 'login.php'" name="log" id= "log" value="LOGIN">
	</form>
	</div>

</body>
</html>
