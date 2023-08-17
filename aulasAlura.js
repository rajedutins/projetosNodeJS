let altura = 5;
let comprimento = 7;
let forma = 'retangulo'
let area;


if (forma === 'retangulo'){

    area = altura * comprimento;
}else {
    area = (altura * comprimento) / 2;
}

console.log (area);


//pode declarar a variavel depois. o JS le elas primeiro
//var tem poucas regras, por isso criaram o let
//var area;