<?php 
 $name = $_POST["name"];
 $email = $_POST["email"];
 $password = $_POST["password"];

foreach(file("username.txt") as $userinfo) {
            $user = explode(",", $userinfo);

			if($user[0] == $email) {
                if (
                ($user[1]) == $password) {
                 header('Location: start.html');
                 break;
                }
              
            }
            else {
                header('Location: login.php'); 
                }
        }      
?>



