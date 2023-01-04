function validaValor(chute){
    const numero = +chute

    if(verificaSeNumero(numero)){
        elementoChute.innerHTML += '<div>Valor invalido!</div>'
    }

    if(verificaSeMaiorouMenor(numero)){
        elementoChute.innerHTML += `<div>Número secreto precisa estar entre ${menorValor} 
        e ${maiorValor} </div>`
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Voce Acertou!!</h2>
            <h3>O numero secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `    
    } else if (numero < numeroSecreto){

            elementoChute.innerHTML += `
            
            <div>O número secreto é maior <i class="fa-solid fa-arrow-up-wide-short"></i></div>

            `
        } else {
            
            elementoChute.innerHTML += `
            
            <div>O número secreto é menor <i class="fa-solid fa-arrow-down-wide-short"></i></div>

            `
            
        }

    if (chute === 'game over'){
        console.log(chute)
        document.body.innerHTML = `
            <h2>GAME OVER</h2>
            <h3>O JOGO FOI FINALIZADO</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>

        `
        const alteraFundo = document.querySelector('body')
        alteraFundo.style.backgroundColor="#000"
    }
}


function verificaSeNumero(numero) {
    return Number.isNaN(numero)
}

function verificaSeMaiorouMenor(numero) {
    return numero > maiorValor || numero < menorValor 
}
