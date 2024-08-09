//escolhe palavra
function palavraEscolhida (lista){
    //Math.floor arredonda um número fracionério
    //Math.floor Retorna um número aleatório de 0 a 1
    //A multiplicação Math.random (0,1) * lista.length irá gerar um número aleatório, que será arrendondado pelo Math.floor().
    const palavra = lista[Math.floor(Math.random(0,1) * lista.length)];
    return palavra
}


//oculta palavra
function ocultarPalavra (palavra){
    let primeiraLetra = palavra[0]
    //.repeat repete a string com o valor do parâmetro
    let underline = "_".repeat(palavra.length - 1);
    let palavraOculta = primeiraLetra+underline;
    return palavraOculta
}


//atualizando palavra
function atualizaPalavraOculta (palavraOculta,letraDigitada,palavraEscolhida){
    let arrayPalavraOculta = palavraOculta.split("");
    // loop para atualizar a palavra 
    for(let i = 0; i<palavraEscolhida.length; i++){
        if (letraDigitada === palavraEscolhida[i]){
            arrayPalavraOculta[i] = letraDigitada      
        }
        
    }return arrayPalavraOculta.join("")
}
//verifica se a letra está na palavra
function verificaLetraNapalavra (palavra, letra){
    for(let i = 0; i < palavra.length; i++){
        if (palavra[i] === letra){
            return true;
        }
    }
}
function verificaPalavra (palavraAtualizada, palavra){
    if (palavraAtualizada === palavra){
        return true
    }
}

//Verificando a se a letra é válida
function verificaLetra (letraDigitada){
    if(letraDigitada.length === 1 && letraDigitada.match(/[a-z]/)){
        return true
    }else{
        return false
    }
}

function exibirMensagemFimdeJogo(statusGame, palavraEscolhida){
    switch(statusGame){
        case 'ganhou':
            console.log('\nParabéns, você ganhou, a fruta foi '+ palavraEscolhida+'!');
            break;
        case 'perdeu':
            console.log('\nVocê é burro demais vai estudar.');
            break;
    }
}

export {verificaPalavra, palavraEscolhida, ocultarPalavra,verificaLetraNapalavra, atualizaPalavraOculta, verificaLetra,exibirMensagemFimdeJogo}