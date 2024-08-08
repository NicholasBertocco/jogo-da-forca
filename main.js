import listaFrutas from "./dados/listadefrutas.js";
import { palavraEscolhida,ocultarPalavra,atualizaPalavraOculta,verificaLetra,exibirMensagemFimdeJogo } from "./funcoes/funcoes.js";
import input from "readline-sync";

console.log("------------JOGO DA FORCA------------");

let chances = 4;
const palavra = palavraEscolhida(listaFrutas);
let palavraOculta = ocultarPalavra(palavra);
let statusGame = 'andamento';

while(statusGame === 'andamento'){
    console.log("Descubra a fruta com "+ palavra.length+" letras!");
    console.log("Fruta: "+ palavraOculta);
    const letra = input.question("\nDigite uma letra válida: ").toLowerCase();

    if (verificaLetra(letra) === true){
        palavraOculta = atualizaPalavraOculta(palavraOculta, letra, palavra,chances,statusGame);
        if (palavraOculta !== palavra && chances > 0){
            statusGame = 'andamento'
        }else
    }else{
        console.log("Digite uma letra válida");
    }
    
}

exibirMensagemFimdeJogo(statusGame, palavra);