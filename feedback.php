<?php
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['fb'])){
  $n=$_POST['name'];
  $e=$_POST['email'];
  $fb=$_POST['fb'];
  if(!empty($n) && !empty($e) && !empty($fb)){
    $sub="FeedBack recived";
    $body="Thank you to sending us FeedBack. We will try our best to get to your feedback.
    \nThank You\nTeam AE " ;
    $header='From: engineeraccidental@gmail.com';
    if(@mail($e,$sub,$body,$header)){
      echo "thank you";
    }
    else{
      echo "Faild";
    }
  }
}

 ?>


<html>
<body>
  <form class="" action="feedback.php" method="post">
    Name : <input type="text" name="name" value=""><br><br>
    Email : <input type="text" name="email" value=""><br><br>
    FeedBack : <input type="text" name="fb" value="">
    <br><br>
    <input type="Submit" name="submit" value="Submit">
  </form>
</body>

</html>
