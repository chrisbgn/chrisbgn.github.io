console.log('leyendo js');
function destinoCambio(value) {
    console.log('dentro de la funcion');
    console.log('destino >>> ', value);
    var origen = document.querySelector("#origenId");
    var destino = document.querySelector("#destinoId"); 
    if(origen == 'CABA' || destino == 'CABA'){
        console.log('adentro del if el peluca sapbeeee');
        alert('No necesitas presentar el pase sapbeeeeee');
        console.log('origen value => ', origen.value);
    } else if(origen == undefined || origen == '' || destino == undefined || destino == '') {
    } else {
        alert('Fuiste causa, entregando el paseeee');
    }
        
}
