//Risoluzione else if

let temperatura = parseFloat(prompt('Inserisci la temperatura'));

if (temperatura < -20){
    console.log("Non ci sono piu' le mezze stagioni");
}else if (temperatura >= 30){
    console.log("lu mare, lu sole, lu ientu");
}else if (temperatura < 30){
    console.log("Mi dia una peroni sudata");
}else if (temperatura < 0){
    console.log("Non e' tanto il freddo quanto l'umidita'");
}else if (temperatura < -10){
    console.log("Copriti... ancora ti raffreddi");
}else{
    console.log("Inserisci un valore valido");
}

console.log(temperatura);



//Risoluzione switch

let TEMPERATURA = parseFloat(prompt('Inserisci la temperatura'));

switch(true){
    case (TEMPERATURA < -20):
        console.log("Non ci sono piu' le mezze stagioni");
        break;
    case (TEMPERATURA >= 30):
        console.log("lu mare, lu sole, lu ientu");
        break;
    case (TEMPERATURA < 30):
        console.log("Mi dia una peroni sudata");
        break;
    case (TEMPERATURA  < 0):
        console.log("Non e' tanto il freddo quanto l'umidita'");
        break;
    case (TEMPERATURA  < -10):
        console.log("Copriti... ancora ti raffreddi");
        break;
    default:
        console.log("Inserisci un valore valido");
        break;
}

console.log(TEMPERATURA);