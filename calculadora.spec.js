describe('Calcular.js', () => {

    it('deve adicionar um numero ao total', () => {
        const calc = new Calcular();        
        calc.adicionar(5);
        expect(calc.total).toBe(5);
        // toBe verifica não só se os dois valores são iguais, mas também se eles são do mesmo objeto. Ex: ===
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

    xit('exemplo de teste desativado', () => {

    })

    it('deve testar toEqual Matcher', () => {
        const calc1 = new Calcular();
        const calc2 = new Calcular();

        expect(calc1).toEqual(calc2);
        // toEqual verifica se duas coisas são iguais (e não necessariamente o mesmo objeto).
    })

    
});