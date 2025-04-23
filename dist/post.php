<?php
header('Access-Control-Allow-Origin: https://keytonic.github.io');
//header('Access-Control-Allow-Origin: *');


if ($_SERVER["REQUEST_METHOD"] != "POST") die();

$name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : "";
$phone = isset($_POST['phone']) ? htmlspecialchars($_POST['phone']) : "";
$email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : "";
$message = isset($_POST['message']) ? htmlspecialchars($_POST['message']) : "";

$txt = wordwrap("Name: ".$name."\nPhone: ".$phone."\nEmail: ".$email."\nMessage: ".$message, 70, "\n");
mail('contact@andrewtowner.com', 'Portfolio Email', $txt, 'From: contact@andrewtowner.com' . "\r\n");
file_put_contents("email.log",$txt . "\n\n", FILE_APPEND);

?>