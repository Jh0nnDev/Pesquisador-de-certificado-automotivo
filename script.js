const bnt= document.querySelector("#Button");

bnt.addEventListener("click", function (e)
//função para ser rodada após o click do botão
{
    e.preventDefault();
    //bloqueia o envio do formulário

    const Numero = document.querySelector("#NumbOrd");
    const Carro = Numero.value;
    //armazena o valor do numero de ordem na variavel "carro" 
    console.log(Carro)

    let opc1 = document.getElementById("CRLV")
    const CRLV = opc1.value;
    let opc2 = document.getElementById("TCO")
    const TCO = opc2.value;
    if(opc1.checked) 
        window.open("https://www.google.com/" + Carro + "/" + CRLV , '_blank');
        else if(opc2.checked) 
            window.open("https://www.google.com/" + Carro + "/" + TCO , '_blank');
            else alert("Marca alguma ai corno")

    
})



