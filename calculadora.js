function Calcular() {
    this.total = 1;
}

Calcular.prototype.adicionar = function (num) {
    return (this.total += num);
}

Calcular.prototype.subtrair = function (num) {
    return (this.total -= num);
}

Calcular.prototype.multiplicar = function (num) {
    return (this.total *= num);
}

Calcular.prototype.dividir = function (num) {
    if(num == 0){
        throw new Error('Num não pode ser 0');
    }
    return (this.total /= num);
}