describe('Calcular.js', () => {

    it('deve adicionar um numero ao total', () => {
        const calc = new Calcular();        
        calc.adicionar(5);
        expect(calc.total).toBe(5);
    });

    it('deve subtrair um numero do total', () => {
        const calc = new Calcular();
        calc.total = 20;
        calc.subtrair(4);
        expect(calc.total).toBe(16);
    });

    it('deve multiplicar um numero pelo total', () => {
        const calc = new Calcular();
        calc.total = 9;
        calc.multiplicar(9);
        expect(calc.total).toBe(81);
    });

    it('deve dividir um numero pelo total', () => {
        const calc = new Calcular();
        calc.total = 50;
        calc.dividir(5);
        expect(calc.total).toBe(10);
    });
});