let Total = 0;
let buffer = "0";
let operador;

const tela = document.querySelector('.tela');

function buttonClick(value){
    if(isNaN(value)){
        Simbolo(value);
        
    }else{
        numero(value);
    }
    tela.innerText = buffer;
}

function Simbolo(symbol){
    switch(symbol) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '=':
            if(operador === null){
                return
            }
            flushOperation(parseInt(buffer));
            operador = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '←':
            if(buffer.length === 1){
                buffer = '0';
            }else{
                buffer = buffer.toString(0, buffer.length - 1);
            }
            break;
            case '+':
            case '−':
            case '×':
            case '÷':
                handleMath(symbol);
                break;
    }
}

function handleMath(symbol){
    if(buffer == '0'){
        return;
    }

    const intBuffer = parseInt(buffer);

    if(runningTotal === 0){
        runningTotal = intBuffer;
    }else{
        flushOperation(intBuffer);
    }
    operador = symbol;
    buffer = '0'
}

function flushOperation(intBuffer){
    if(operador === '+'){
        runningTotal += intBuffer;
    }else if(operador === '−'){
        runningTotal -= intBuffer;
    }else if(operador === '×'){
        runningTotal *= intBuffer
    }else if(operador === '÷'){
        runningTotal /= intBuffer;
    }
}

function numero(numbersString){
    if(buffer === '0'){
        buffer = numbersString;
    }else{
        buffer += numbersString;
    }
}

function init(){
    document.querySelector('.botao_calculadora').addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })
}

init();