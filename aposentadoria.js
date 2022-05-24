function  Aposentadoria() {

    let  nome  =  prompt ( "Digite seu nome" ) ;
    let  nascimento  =  parseInt ( prompt ( "Digite seu ano de nascimento" ) ) ;
    let  AnoAdmissao  =  parseInt ( prompt ( "Digite o ano de admissão na empresa" ) ) ;
    let  TempoTrabalho  =  parseInt ( 0 ) ;
    let  idade  =  parseInt ( 0 ) ;

    idade  =  ( 2022  -  nascimento ) ;
    TempoTrabalho  =  ( 2022  -  AnoAdmissao ) ;

    
    if  ( idade  >=  60  &&  TempoTrabalho  >=  25 )  {
        alert ( "O funcionário(a) "  +  nome  +  " Requerer aposentar, pois tem "  + idade  + " anos de idade e " + TempoTrabalho  + " anos de trabalho." )     
    }  
    
        else  {
        if  ( idade  <  65 )  {
    
        if  ( TempoTrabalho  <  30 )  {
        alert ( "O funcionário(a) "  +  nome  +  " não Requerer aposentar, pois tem apenas "  + idade  + " anos de idade e " + TempoTrabalho  + " anos de trabalho." ) ;     
        }
        }
    }
}
