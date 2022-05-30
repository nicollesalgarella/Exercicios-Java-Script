function Converter (){

    let tempo = document.getElementById=("tempo").value;
    let velocidade = document.getElementById=("velocidade").value;
    let distancia = (tempo * velocidade);
    let litrosusados = (distancia / 12);
    document.getElementById=("distancia").value=distancia;
    document.getElementById=("litrosusados").value=litrosusados;
}   
    