import listaFrutas from "./dados/listadefrutas.js";
import {palavraEscolhida,ocultarPalavra,atualizaPalavraOculta,verificaLetra,exibirMensagemFimdeJogo, verificaLetraNapalavra, verificaPalavra } from "./funcoes/funcoes.js";
import input from "readline-sync";

console.log("------------JOGO DA FORCA------------");

let chances = 4;
const palavra = palavraEscolhida(listaFrutas);
let palavraOculta = ocultarPalavra(palavra);
let statusGame = 'andamento';
let palavraAtualizada

while(statusGame === 'andamento'){
    console.log('\nVocê tem '+chances+' tentativas!');
    console.log('Descubra a fruta com '+palavra.length+' letras!\n');
    console.log (`Fruta : ${palavraOculta}`)
    const letra = input.question('Digite uma letra: ').toLowerCase();

    if (verificaLetra(letra)){
      if (verificaLetraNapalavra(palavra,letra)){
         palavraAtualizada = atualizaPalavraOculta(palavraOculta,letra,palavra);
         palavraOculta = palavraAtualizada;
         if(verificaPalavra(palavraAtualizada,palavra)){
               statusGame = 'ganhou';
         }
      }else if(chances === 0){
        statusGame = 'perdeu';
      }else{
        chances -= 1;
      }
         
    }else{
      console.log('\nDigite uma letra válida!!')
    }       
  }    

exibirMensagemFimdeJogo(statusGame, palavra);