let inputcpf=document.querySelector("#entrada");
let copiar=document.querySelector("#copiar");
let colar=document.querySelector("#colar");

copiar.addEventListener("click", convert );

function convert(){//Função responsavel por copiar cpf

    let inicio,meio,subfim,fim;
    let cpf;

    //responsavel por dividir o cpf em cada seção
    inicio=inputcpf.value.substring(0,3);
    meio=inputcpf.value.substring(3,6);
    subfim=inputcpf.value.substring(6,9);
    fim=inputcpf.value.substring(9,11);

    cpf= inicio+"."+meio+"."+subfim+"-"+fim;//recebe e converte o cpf
    
    inputcpf.value=cpf;

    navigator.clipboard.writeText(inputcpf.value);//ira copiar cpf convertido para area de trabalho

}

colar.addEventListener("click", async (paste) => {//função responsavel por colar cpf copiado

    const cpfcolar= await navigator.clipboard.readText();//
    
    inputcpf.value=cpfcolar;

});

