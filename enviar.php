<?php
$name = $_POST['name'];
$mail = $_POST['mail'];
$msg = $_POST['msg'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$msg = "Este mensaje fue enviado por: " . $name . " \r\n";
$msg .= "Su e-mail es: " . $mail . " \r\n";
$msg .= "Mensaje: " . $_POST['msg'] . " \r\n";
$msg .= "Enviado el: " . date('d/m/Y', time());

$para = 'alexispiovoso11@hotmail.com';
$asunto = 'Mensaje de portfolio';

mail($para, $asunto, utf8_decode($msg), $header);

header("Location:index.html");
?>
