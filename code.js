function calculo() {
    //alert('heh yes');
    var totalCuenta = document.getElementById('total').value;
    var calidadServcio = document.getElementsByName('servicio')[0].value;
    var numPersonas = document.getElementsByClassName('personas')[0].value;
    var res = (totalCuenta * calidadServcio) / numPersonas;
    var result = "el resultado es " + res + " por persona";
    if (isNaN(res)) {
        document.getElementById("pepe").innerHTML = 'Introduce todos los valores';
        z
    } else {
        document.getElementById("pepe").innerHTML = 'Total a pagar';
        document.getElementById("dale").innerHTML = result;
    }
}

function limpiar() {
    document.getElementById("pepe").innerHTML = '';
    document.getElementById("dale").innerHTML = '';
    document.getElementById("total").value = '';
    document.getElementById("personas").value = '';
}