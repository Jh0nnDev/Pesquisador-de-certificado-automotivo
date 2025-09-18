const bnt= document.querySelector("#Button");

bnt.addEventListener("click", function (e)
//função para ser rodada após o click do botão
{
    e.preventDefault();
    //bloqueia o envio do formulário

    const Numero = document.querySelector("#NumbOrd");
    const Carro = Numero.value;
    //armazena o valor do numero de ordem na variavel "carro" 

    let opc1 = document.getElementById("CRLV")
    const CRLV = opc1.value;
    let opc2 = document.getElementById("TCO")
    const TCO = opc2.value;
    if(opc1.checked) 
        window.open("https://expvitoria.com/certificados/" + CRLV + "/" + Carro + ".pdf" , '_blank');
        else if(opc2.checked) 
            window.open("https://expvitoria.com/certificados/" + TCO + "/" + Carro + ".pdf"  , '_blank');
            else alert("Marca alguma ai corno")

    
})


