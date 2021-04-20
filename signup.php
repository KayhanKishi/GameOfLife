<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="./img/title.png" type="image/x-icon">  
    <link rel="stylesheet" type="text/css" href="login.css?v=<?php echo time(); ?>" />

    <title>Game of Life</title>
    <script type="text/javascript">
    function validate() {
         var name = document.forms["form"]["name"].value;
        if(name==""){
            alert("Please enter the name");
            return false;
            }
        var email = document.forms["form"]["email"].value;
        if(email==""){
            alert("Please enter the email");
            return false;
            }else{
                var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
                var x=re.test(email);
                if(x){

                }else{
                    alert("Email id not in correct format");
                    return false;
                    } 
                    } 
                    var password = document.forms["myform"]["password"].value;
                    if(password==""){
                        alert("Please enter the Password");
                        return false;
                    }
                }
</script>



</head>

<body>
    
    <div id="mainDiv">
        <div id="boxDiv">
            <div id="front"></div>
            <div id="back"></div>
            <div id="left"></div>
            <div id="right"></div>
            <div id="top"></div>
            <div id="bottom"></div>
            <!-- <div class="shadow"></div> -->
        </div>
    </div>
    <div class="wrapper">
        <div class="title">
            Signup to create an account!</div>
	<form name= "form" action="signup-submit.php" onsubmit="return validate()"method="post">
            <div class="field">
                <input placeholder="Name" type="text" name="name" >
            </div>
            <div class="field">
                <input placeholder="Email Address" type="text" name="email" >
            </div>
            <div class="field">
                <input placeholder="Password" type="text" name="password" >
            </div>

            <div class="field">
                <input type="submit" name="loginsubmit" value="Signup">
            </div>
            <div class="signup-link">
               <a href="login.php">Go back to login!</a>
            </div>  
        </form>
    </div>
</body>
</html>
