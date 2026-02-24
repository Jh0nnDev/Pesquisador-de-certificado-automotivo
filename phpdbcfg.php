
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Sistema Expresso</title>
  <style>
    body {
      font-family: 'Roboto', sans-serif;
      background: #f4f6f9;
      margin: 0;
      padding: 0;
    }
    header {
      background: #2c3e50;
      color: white;
      text-align: center;
      padding: 20px;
      font-size: 1.5em;
      font-weight: bold;
    }
    .container {
      max-width: 400px;
      margin: 50px auto;
      background: white;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
    h2 {
      text-align: center;
      margin-bottom: 20px;
      color: #333;
    }
    input[type="text"] {
      width: 100%;
      padding: 12px;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 1em;
    }
    .options {
      display: flex;
      justify-content: space-around;
      margin-bottom: 20px;
    }
    .options label {
      font-weight: bold;
      cursor: pointer;
    }
    button {
      width: 100%;
      padding: 12px;
      background: #27ae60;
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 1em;
      cursor: pointer;
      transition: background 0.3s;
    }
    button:hover {
      background: #219150;
    }
    .title{
        font-size: 1em;
        text-align: center;
        font-weight: bold;
    }
  </style>
</head>
<body>
  <header>Sistema Expresso</header>
  <div class="container">
    <h2>Pesquisador de Certificados</h2>
    <form >
      <p class="title" for="carro">Digite o número do veiculo abaixo:</p>
      <input type="text" id="carro" name="carro" placeholder="APENAS NÚMEROS">
      
      <div class="options">
        <label><input type="radio" name="certificado" value="TCO"> TCO</label>
        <label><input type="radio" name="certificado" value="CRLV"> CRLV</label>
      </div>
      
      <button type="submit">Enviar</button>
    </form>
  </div>
</body>
</html>

<?php


?>