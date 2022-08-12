function Calcular(event){
    const inputValue = event.target.value;
    const expressao = /\+|\-|\*|\//;

    const nums = inputValue.split(expressao);
    
    const num1 = +nums[0];
    const num2 = +nums[1];

    const operacao = inputValue.match(expressao);
    if(isNaN(num1) || isNaN(num2) || operacao == null){
        updateResult('Operação não reconhecida');
        return;
    }
    const operador = operacao[0];

    const calcular = new Calcular();
    calcular.adicionar(num1);
    
    let result;
    switch(operador){
        case '+':
            result = calcular.adicionar(num2);
            break;
        case '-':
            result = calcular.subtrair(num2);
            break;
        case '*':
            result = calcular.multiplicar(num2);
            break;
        case '/':
            result = calcular.dividir(num2);
            break;
    }
    updateResult(result);
}

function updateResult(result){
    let element = document.getElementById('result');
    if(element){
        element.innerText = result;
    }
}

document.getElementById('inputValue').addEventListener('change', calcular);