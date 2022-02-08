console.log('leyendo js');
function destinoCambio(value) {
    console.log('dentro de la funcion');
    var origen = document.querySelector("#origenId");
    var destino = document.querySelector("#destinoId");
    console.log('origen value => ', origen.value);
    if((origen.value == 'CABA' && destino.value != '') || (destino.value == 'CABA' && origen.value != '')){
        console.log('adentro del if el peluca sapbeeee');
        alert('No necesitas presentar el pase sapbeeeeee');
        
    } else if(origen.value == undefined || origen.value == '' || destino.value == undefined || destino.value == '') {
    } else {
        alert('Fuiste causa, entregando el paseeee');
    }
        
}
