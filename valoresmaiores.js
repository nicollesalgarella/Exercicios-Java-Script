function NumerosMaiores(){

    let Valor1 = parseInt(prompt("Digite um numero"));
    let Valor2 = parseInt(prompt("Digite um numero"));
    let Valor3 = parseInt(prompt("Digite um numero"));
    
    if (Valor3 < Valor1 && Valor1 < Valor2){
        alert(Valor1 + Valor2);
    }
    else if (Valor2 < Valor1 && Valor1 < Valor3){
        alert(Valor1 + Valor3);
    }
    else{
        alert(Valor2 + Valor3);
    }
}