<?php
    $msg = "First line of text\nSecond line of text";
    $msg = wordwrap($msg,70);
    mail("jjmirandaa86@gmail.com","My subject",$msg);
?>