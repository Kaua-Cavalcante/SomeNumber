// Operadores Básicos

function somar() {
    let somar1 = document.querySelector(".adicao1").value;
    let somar2 = document.querySelector(".adicao2").value;

    let resultado = parseInt(somar1) + parseInt(somar2);
    document.querySelector(".resultado1").innerHTML = resultado;

    let contraste = document.querySelector(".result1");
    contraste.style.border = "solid 1px #11a8b3";

    let bold = document.querySelector(".font-contrast1");
    bold.style.cssText = "color: #0e8891; font-weight: 700;";
}

function subtrair() {
    let subtrair1 = document.querySelector(".subtracao1").value;
    let subtrair2 = document.querySelector(".subtracao2").value;

    let resultado = parseInt(subtrair1) - parseInt(subtrair2);
    document.querySelector(".resultado2").innerHTML = resultado;

    let contraste = document.querySelector(".result2");
    contraste.style.border = "solid 1px #11a8b3";

    let bold = document.querySelector(".font-contrast2");
    bold.style.cssText = "color: #0e8891; font-weight: 700;";
}

function multiplicar() {
    let multiplicar1 = document.querySelector(".multiplicacao1").value;
    let multiplicar2 = document.querySelector(".multiplicacao2").value;

    let resultado = parseInt(multiplicar1) * parseInt(multiplicar2);
    document.querySelector(".resultado3").innerHTML = resultado;

    let contraste = document.querySelector(".result3");
    contraste.style.border = "solid 1px #11a8b3";

    let bold = document.querySelector(".font-contrast3");
    bold.style.cssText = "color: #0e8891; font-weight: 700;";
}

function dividir() {
    let dividir1 = document.querySelector(".divisao1").value;
    let dividir2 = document.querySelector(".divisao2").value;

    let resultado = parseInt(dividir1) / parseInt(dividir2);
    document.querySelector(".resultado4").innerHTML = resultado;

    let contraste = document.querySelector(".result4");
    contraste.style.border = "solid 1px #11a8b3";

    let bold = document.querySelector(".font-contrast4");
    bold.style.cssText = "color: #0e8891; font-weight: 700;";
}

// Regra de Três

function regraDeTres() {
    let n1 = document.querySelector(".a").value;
    let n2 = document.querySelector(".b").value;
    let n3 = document.querySelector(".c").value;

    let resultado = parseFloat(n2.replace(',', '.')) * parseFloat(n3.replace(',', '.')) / parseFloat(n1.replace(',', '.'));
    document.querySelector(".resultado").innerHTML = resultado;
}

// Resto de Divisão

function restante() {
    let n1 = document.querySelector(".a").value;
    let n2 = document.querySelector(".b").value;

    let resultado = parseInt(n1) % parseInt(n2);
    document.querySelector(".resultado").innerHTML = resultado;
}

// Porcentagem

function porcentagem1() {
    let n1 = document.querySelector(".a1").value;
    let n2 = document.querySelector(".a2").value;
    let n3 = parseFloat(n1.replace(',', '.')) * parseFloat(n2.replace(',', '.'));

    let resultado = parseFloat(n3) / 100;
    document.querySelector(".resultado1").innerHTML = resultado;

    let contraste = document.querySelector(".result1");
    contraste.style.border = "solid 1px #11a8b3";

    let bold = document.querySelector(".font-contrast1");
    bold.style.cssText = "color: #0e8891; font-weight: 700;";
}

function porcentagem2() {
    let n1 = document.querySelector(".b1").value;
    let n2 = document.querySelector(".b2").value;

    let resultado = parseFloat(n1.replace(',', '.')) * 100 / parseFloat(n2.replace(',', '.'));
    document.querySelector(".resultado2").innerHTML = resultado;

    let contraste = document.querySelector(".result2");
    contraste.style.border = "solid 1px #11a8b3";

    let bold = document.querySelector(".font-contrast2");
    bold.style.cssText = "color: #0e8891; font-weight: 700;";
}

function aumento() {
    let n1 = document.querySelector(".c1").value;
    let n2 = document.querySelector(".c2").value;
    let aumento = parseFloat(n2.replace(',', '.')) - parseFloat(n1.replace(',', '.'));

    let resultado = parseFloat(aumento) / parseFloat(n1) * 100;
    document.querySelector(".resultado3").innerHTML = resultado;

    let contraste = document.querySelector(".result3");
    contraste.style.border = "solid 1px #11a8b3";

    let bold = document.querySelector(".font-contrast3");
    bold.style.cssText = "color: #0e8891; font-weight: 700;";
}

function decrescimo() {
    let n1 = document.querySelector(".d1").value;
    let n2 = document.querySelector(".d2").value;
    let decrescimo = parseFloat(n1.replace(',', '.')) - parseFloat(n2.replace(',', '.'));

    let resultado = parseFloat(decrescimo) / parseFloat(n1) * 100;
    document.querySelector(".resultado4").innerHTML = resultado;

    let contraste = document.querySelector(".result4");
    contraste.style.border = "solid 1px #11a8b3";

    let bold = document.querySelector(".font-contrast4");
    bold.style.cssText = "color: #0e8891; font-weight: 700;";
}