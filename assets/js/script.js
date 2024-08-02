const textArea = document.querySelector(".textarea")
const mensagem = document.querySelector(".textarea-recifense")

function encriptar(stringEcriptada){

    let palavrasRecife = [["jogar futebol","bater uma pelada"] ,["vou embora","vou chegar"],["mentira","pala"],["muito bom","do carai"],["triste","na magua"],["melhor comida","cuscuz"],["lerdo","donzelo"],["namorada","boysinha"],["com fome","na larica"],["classe media","play boy"],["muita chuva","toro do karai"],["sol se por","sol esfriar"],["amigo próximo", "chegado"],["com calma", "na manha"], ["corrida rápido", "carreira do caramba"],["ficou com raiva", "ta arretado"], ["muito bom", "massa"], ["parar a brincadeira", "dispense"] ];
    stringEcriptada = stringEcriptada.toLowerCase();

    for(let i = 0; i < palavrasRecife.length; i++){
        if(stringEcriptada.includes(palavrasRecife[i][0])){
            stringEcriptada = stringEcriptada.replaceAll(palavrasRecife[i][0], palavrasRecife[i][1]);
        }
    }
    return stringEcriptada; 
}

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada){

    let palavrasRecife = [["jogar futebol","bater uma pelada"] ,["vou embora","vou chegar"],["mentira","pala"],["muito bom","do carai"],["triste","na magua"],["melhor comida","cuscuz"],["lerdo","donzelo"],["namorada","boysinha"],["com fome","na larica"],["classe media","play boy"],["muita chuva","toro do karai"],["sol se por","sol esfriar"],["amigo próximo", "chegado"],["com calma", "na manha"], ["corrida rápido", "carreira do caramba"],["ficou com raiva", "ta arretado"], ["muito bom", "massa"], ["parar a brincadeira", "dispense"] ];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < palavrasRecife.length; i++){
        if(stringDesencriptada.includes(palavrasRecife[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(palavrasRecife[i][1], palavrasRecife[i][0]);
        }
    }
    return stringDesencriptada; 
}

function btnDesencriptar(stringDesencriptada){
    const textoDesencriptado = desencriptar(mensagem.value);
    textArea.value = textoDesencriptado;
    mensagem.value = "";
}


