const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang='pt-Br'
recognition.start()

//cria evento para acionar funcao para pegar o que foi dito
recognition.addEventListener('result', onSpeak)

//funcao que captura o resultado do que foi dito
function onSpeak(resultado){
    chute = resultado.results[0][0].transcript
    exibeChuteNaTela(chute)

    //chama funcao que valida o valor do chute do usuario
    validaValor(chute)
}


//funcao que mostra o numero na tela
function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
        
    `
}

recognition.addEventListener('end', () => recognition.start())