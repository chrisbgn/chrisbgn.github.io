var noNecesita = false;

function destinoCambio(event) {
    var destino = event.target.value;
    if(destino == 'CABA'){
        noNecesita = true;
    }
}