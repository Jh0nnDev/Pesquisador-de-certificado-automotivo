const bnt= document.querySelector("#Button");

bnt.addEventListener("click", function (e)
//função para ser rodada após o click do botão
{
    e.preventDefault();
    //bloqueia o envio do formulário

    //armazena o valor do numero de ordem na variavel "carro" :
    const Numero = document.querySelector("#NumbOrd");
    const Carro = Numero.value;
    
    //Expressão regular: função para aceitar só números de 0 a 9:
    const apenasNumeros = /^[0-9]+$/;

    //valida se o input "carro" está vazio:
    if(document.querySelector("#NumbOrd").value == ""){
        alert('Por favor, coloque o numero do carro');
        document.querySelector("#NumbOrd").focus();
        return false;
    }
    
    //valida se o input "carro" tem 3 caracteres ou mais
    if(document.querySelector("#NumbOrd").value.length <= 3){
        alert('o numero de ordem não pode ter menos de 3 caracteres');
        document.querySelector("#NumbOrd").focus();
        return false;
    }
   
    //valida se o input "carro" tem apenas números
    if(!apenasNumeros.test(Carro)){
        alert("O campo 'Veículo' só pode conter números!")
        document.querySelector("#NumbOrd").focus();
        return false;
    }


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
