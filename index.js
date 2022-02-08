console.log('leyendo js');
function destinoCambio(event) {
    console.log('dentro de la funcion');
    var destino = event.target.value;
    console.log('destino >>> ', destino);
    if(destino == 'CABA'){
        console.log('adentro del if el peluca sapbeeee');
        alert('No necesitas presentar el pase sapbeeeeee');
    }
}
