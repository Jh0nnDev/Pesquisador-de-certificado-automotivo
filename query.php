<?php

    $host = "expressoftp";
    $banco = "expvit47_sistema_elv";
    $usuario = "joaovitor@expvitoria.site";
    $senha = "JoaovitoR@#2323";

    try {
        $conn = new PDO("mysql:host=$host;dbname=$banco", $usuario, $senha);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e){
        die("Could not connect. " . $e->getMessage());
    }

    echo "Connected successfully";
?>