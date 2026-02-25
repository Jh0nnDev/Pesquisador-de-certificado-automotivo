const bnt= document.querySelector("#Button");

bnt.addEventListener("click", function (e)
//função para ser rodada após o click do botão
{
    e.preventDefault();
    //bloqueia o envio do formulário

    const Numero = document.querySelector("#NumbOrd");
    const Carro = Numero.value;
    //armazena o valor do numero de ordem na variavel "carro" 
    
    
    if(document.querySelector("#NumbOrd").value == ""){
        alert('Por favor, coloque o numero do carro');
        document.querySelector("#NumbOrd").focus();
        return false;
    }
    //valida se o input "carro" está vazio

    if(document.querySelector("#NumbOrd").value.length < 3){
        alert('o número do carro deve ter 4 caracteres');
        document.querySelector("#NumbOrd").focus();
        return false;
    }
    //valida se o input "carro" tem 4 caracteres


    let opc1 = document.getElementById("CRLV")
    const CRLV = opc1.value;

    let opc2 = document.getElementById("TCO")
    const TCO = opc2.value;

    if(opc1.checked) 
        window.open("https://expvitoria.site/certificados/" + CRLV + "/" + Carro + ".pdf" , '_blank');
        else if(opc2.checked) 
            window.open("https://expvitoria.site/certificados/" + TCO + "/" + Carro + ".pdf"  , '_blank');
            else alert("Você deve marcar alguma opção")

    
})

console.log("script carregado")
