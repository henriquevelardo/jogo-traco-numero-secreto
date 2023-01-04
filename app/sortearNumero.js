const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroSecreto()

//Gera o numero aleatorio transformado em inteiro e multiplica pelo range maior + 1 para incluir o numero final
function gerarNumeroSecreto(){
    return parseInt(Math.random()* maiorValor + 1)

}
console.log('Numero Secreto:', numeroSecreto )

// Atualiza menor e maior valor na interface
const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor


// reinicia o jogo e sorteia numero novamente
document.body.addEventListener('click', event => {
    if(event.target.id === 'jogar-novamente'){
        window.location.reload()
    }
})