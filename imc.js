
    function pularLinha()
    
    {
        document.write("<br>")
        document.write("<br>")

    }

    function mostrar(frase)
    {

        document.write(frase);
        pularLinha();

    }

    function calcularIMC(altura, peso){

        var imc = peso / (altura * altura);
        return imc;

    }
    var nome = require ("Informe o seu nome");
    var alturaInformada = require ("Informe sua altura");
    var pesoInformado = require ("Informe seu peso");
    var imc = calcularIMC(alturaInformada, pesoInformado);

    mostrar(nome +  " , o seu IMC calculado é " + imc);

    if (imc < 18.5){
        mostrar("Você está abaixo do recomendado");
    }

    if (imc > 35){
        mostrar("Você está acima do recomendado");
    }
    if (imc >= 18.5 && imc <= 35){

        mostrar("Você está dentro do recomendado");
    }

