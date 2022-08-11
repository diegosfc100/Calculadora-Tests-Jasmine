function calcular(event){
    const inputValue = event.target.value;
    const expressao = /\+|\-|\*|\//;

    const nums = inputValue.split(expressao);
    
    const num1 = +nums[0];
    const num2 = +nums[1];

    const operacao = inputValue.match(expressao);
    const operador = operacao[0];

    const calcular = new Calcular();
    calcular.add(num1);
    calcular.add(num2);

    console.log(calcular.total);  

    //console.log(num1+num2);
}

document.getElementById('inputValue').addEventListener('change', calcular);