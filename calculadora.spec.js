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

    it('deve testar toEqual', () => {
        const calc1 = new Calcular();
        const calc2 = new Calcular();

        expect(calc1).toEqual(calc2);
        // toEqual verifica se duas coisas são iguais (e não necessariamente o mesmo objeto).
    })

    it('deve testar ToBeTruty', () => {
        const calc = new Calcular(); // Calcular({ total: 0 })
        
        expect(calc).toBeTruthy();        
    })
    // Todos os valores são truthy a menos que eles sejam definidos como Falsy.

    it('deve testar ToBeFalsy', () => {
        const calc = new Calcular(); // calc.valor = 0 (false)
                
        expect(calc.total).toBeFalsy();
        expect(calc.total).toEqual(0);
        // Falsy = false, 0, "", null, undefined, e NaN.
    })

    it('deve testar not.toBe', () => {
        const calc1 = new Calcular();
        const calc2 = new Calcular();

        expect(calc1).not.toBe(calc2);
        // not é usado inverter um matcher pra termos certeza de que ele não é um valor true.
    })

    it('deve testar toBeUndefined e toBeDefined', () => {
        const calc = new Calcular();

        expect(calc.adicionar).toBeDefined(); // Definido
        expect(calc.subtrair).toBeDefined();
        expect(calc.multiplicar).not.toBeUndefined(); // not.Indefinido = Definido
        expec(calc.dividir).not.toBeUndefined();
    })

    





    // Todos os valores são truthy a menos que eles sejam definidos como falsy (ou seja., exceto para false, 0, "", null, undefined, e NaN).


});