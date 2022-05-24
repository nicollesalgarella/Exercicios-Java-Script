function VerificarNúmerosInteiros(){
    let numero = parseInt(prompt("Digite um número inteiro: ")); 
    let resultado;
    if(numero % 2 == 0 ){   
    resultado = "O número é par."
    }

    else if(numero % 2 == 1){
    resultado = "O número é ímpar."
    }
    alert(resultado);
  
}