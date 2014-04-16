<?php
 
    $to = "theweddingnook@gmail.com"; 
    $from = $_REQUEST['email']; 
    $name = $_REQUEST['name']; 
    $headers = "From: $from"; 
    $subject = "Interest in Wedding Nook"; 
 
    $fields = array(); 
    $fields{"email"} = "email"; 

    $send = mail($to, $subject, $body, $headers);
 
?>