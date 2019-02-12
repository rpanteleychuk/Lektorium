<?php
$mail = ($_POST['email']);
$login = explode('@', $mail)[0];
echo $login;