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
        let letraOn = true
        if (letraDigitada === palavraEscolhida[i]){
            arrayPalavraOculta[i] = letraDigitada
            
        }
    }return arrayPalavraOculta.join("")
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
            console.log('Parabéns, vocêganhou, a fruta foi '+ palavraEscolhida+'!');
            break;
        case 'perdeu':
            console.log('Você é burro demais vai estudar.');
            break;
    }
}

export {palavraEscolhida, ocultarPalavra, atualizaPalavraOculta, verificaLetra,exibirMensagemFimdeJogo}