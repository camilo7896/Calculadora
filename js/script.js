    let mod = document.getElementById('mod');
    // Numeros
    let uno = document.querySelector('.uno')
    let dos = document.querySelector('.dos')
    let tres = document.querySelector('.tres')
    let cuatro = document.querySelector('.cuatro')
    let cinco = document.querySelector('.cinco')
    let seis = document.querySelector('.seis')
    let siete = document.querySelector('.siete')
    let ocho = document.querySelector('.ocho')
    let nueve = document.querySelector('.nueve')
    let cero = document.querySelector('.cero')
        // simbolos
    let suma = document.getElementById('suma');
    let resta = document.getElementById('resta');
    let mult = document.getElementById('mult');
    let div = document.getElementById('divi');
    let porcet = document.getElementById('percentage');
    let clear = document.getElementById('clear');
    let total = document.getElementById('btnTotal');
    let btnTotal = document.getElementById('btnTotal');

    // variables
    let operandoa;
    let operandob;
    let operacion;

    // campo de resultado
    let resultado = [];
    resultado = document.getElementById('resultado');
    console.log(resultado.values)


    function limpiar() {
        resultado.textContent = "";
    }

    function resetear() {
        resultado.textContent = "";
        let operandoa;
        let operandob;
        let operacion;
    }
    uno.addEventListener('click', function() {
        resultado.textContent = resultado.textContent + '1';
    })
    dos.addEventListener('click', function() {
        resultado.textContent = resultado.textContent + '2';
    })
    tres.addEventListener('click', function() {
        resultado.textContent = resultado.textContent + '3';
    })
    cuatro.addEventListener('click', function() {
        resultado.textContent = resultado.textContent + '4';
    })
    cinco.addEventListener('click', function() {
        resultado.textContent = resultado.textContent + '5';
    })
    seis.addEventListener('click', function() {
        resultado.textContent = resultado.textContent + '6';
    })
    siete.addEventListener('click', function() {
        resultado.textContent = resultado.textContent + '7';
    })
    ocho.addEventListener('click', function() {
        resultado.textContent = resultado.textContent + '8';
    })
    nueve.addEventListener('click', function() {
        resultado.textContent = resultado.textContent + '9';
    })
    cero.addEventListener('click', function() {
        resultado.textContent = resultado.textContent + '0';
    })

    let body = document.getElementById('body');

    mod.addEventListener('click', function() {
        body.style.background = '#000000'
    });



    // funcion su

    suma.addEventListener('click', function() {

            operandoa = resultado.textContent;
            operacion = "+";
            limpiar();
        })
        // funcion resta
    resta.addEventListener('click', function() {
            operandoa = resultado.textContent;
            operacion = "-";
            limpiar();
        })
        // funcion multiplicacion
    mult.addEventListener('click', function() {
            operandoa = resultado.textContent;
            operacion = "*";
            limpiar();
        })
        // funcion multiplicacion
    divi.addEventListener('click', function() {
            operandoa = resultado.textContent;
            operacion = "/";
            limpiar();
        })
        // funcion multiplicacion
    porcet.addEventListener('click', function() {
        operandoa = resultado.textContent;
        operacion = "%";
        limpiar();
    })


    btnTotal.addEventListener('click', function() {
        operandob = resultado.textContent;
        resolver();
    });

    // reset
    clear.addEventListener('click', function() {
        resetear();

    });

    // funcion de resolver
    function resolver() {
        var res = 0;
        switch (operacion) {
            case "+":
                res = parseFloat(operandoa) + parseFloat(operandob);
                break;

            case "-":
                res = parseFloat(operandoa) - parseFloat(operandob);
                break;

            case "*":
                res = parseFloat(operandoa) * parseFloat(operandob);
                break;

            case "/":
                res = parseFloat(operandoa) / parseFloat(operandob);
                break;
            case "%":
                res = parseFloat(operandoa) / parseFloat(operandob);
                break;
        }
        resetear();
        console.log(res)
        resultado.textContent = res;
    }