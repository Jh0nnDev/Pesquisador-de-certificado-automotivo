<?php
    $host = "localhost";
    $banco = "test";
    $usuario = "root";
    $senha = "";

    try {
        $conn = new PDO("mysql:host=$host;dbname=$banco", $usuario, $senha);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e){
        die("Could not connect. " . $e->getMessage());
    }
    //Este bloco faz a conexão com o banco de dados.
    /*
    try {
        $sql = "INSERT INTO Veiculos (Numero_Ordem, Situacao, Bandeira)
        VALUES ('3590', '0', 'INOVA')";
        $conn->exec($sql);
        echo "GRAVOU NO BANDO DE DADOS";
        } catch(PDOException $e) {
        echo $sql . "<br>" . $e->getMessage();
    }
    // este bloco de codigos ele tem a função de inserir um dado no database 
$conn = null;
    */ 
try {
    $sql = "SELECT Numero_Ordem, Situacao, Bandeira FROM Veiculos";
    // Execute the SQL query
    $result = $conn->query($sql);
    // Process the result set
    if ($result->rowCount() > 0) {
        echo "<table><tr><th>Numero_dem</th><th>Situacao</th><th>Bandeira</th></tr>";
        // Output data of each row
        while($row = $result->fetch()) {
            echo "<tr>";
            echo "<td>" . $row['Numero_Ordem'] . "</td>";
            echo "<td>" . $row['Situacao'] . "</td>";
            echo "<td>" . $row['Bandeira'] . "</td>";
            echo "</tr>";
        }
        echo "</table>";
        unset($result);
        }else {
            echo "No records found.";
        }
        } catch(PDOException $e) {
        echo "Error: " . $e->getMessage();
        }
        

$conn = null;
?>