<?php 

    $destinatario = 'sebastiansevsorcia@gmail.com';
    
    $nombre = $_POST["name"];
    $asunto = $_POST["asunto"];
    $email = $_POST["email"];
    $mensaje = $_POST["message"];

    $header = "Te damos la bienvenida a VIRAL";
    
    $mensajeCompleto = $mensaje ."\nAtentamente: ".$nombre;
    
    mail($destinatario,$asunto,$mensajeCompleto,$header);
    
    echo "<script>alert('Mensaje enviado...');</script>";
    
?>
