function ConverterTemperatura(){

    if(document.getElementById("Centígrados").value ==""){
        alert("O preenchimento é obrigatório!");
        document.getElementById("Centígrados").focus();//manda o cursor para o campo 
        return;
    }
    
    let c = document.getElementById('Centígrados').value;
    let f = (9 * c + 160 ) / 5;

    document.getElementById('Fahrenheit').value = f;

    if (f > 50){
        document.getElementById('Fahrenheit').style.backgroundColor='red';
    }
    else{
        document.getElementById('Fahrenheit').style.backgroundColor='blue';        
    }
}