function CalcularIMC(){
    let nome = prompt("Digite seu nome: ");
    let peso = parseFloat(prompt("Digite seu peso: "));
    let altura = parseFloat(prompt("Digite seu altura: "));
    let imc = 0;
    let resultado;

    console.log(nome);
    console.log(peso);
    console.log(altura);

    imc = peso / (altura*altura); 

    if(imc<18.5){
        resultado="Abaixo do Peso"
    }

    else if(imc >=18.5 && imc<25){
        resultado="Peso Normal"
    }

    else if(imc >=25 && imc<30){
        resultado="Sobrepeso"
    }

    else if(imc >= 30 && imc<35){
        resultado="Obesidade 1"
    }

    else if(imc >=35 && imc<40){
        resultado="Obesidade 2"
    }

    else{
        resultado="Obesidade 3"
    }

    alert(nome + " possui o imc " + imc + " e está " + resultado);

}