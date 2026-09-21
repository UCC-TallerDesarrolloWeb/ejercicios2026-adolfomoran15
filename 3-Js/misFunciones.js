/**
 * Conversion de unidades de metros, pies, yardas y pulgadas
 * @method convertirUnidades
 * @param {string} id - Id del elemento input en el html
 * @param {number} valor - Valor ingresado por el usuario
 */
function convertirUnidades(id, valor) {

    if (isNaN(valor)) {

        alert("Se ingreso un valor incorrecto: " + id);

        document.getElementById("metro").value = "";
        document.getElementById("pulgada").value = "";
        document.getElementById("pie").value = "";
        document.getElementById("yarda").value = "";

    } else if (id === "metro") {

        document.getElementById("pulgada").value = valor * 39.3701;
        document.getElementById("pie").value = valor * 3.28084;
        document.getElementById("yarda").value = valor * 1.09361;

    } else if (id === "pulgada") {

        document.getElementById("metro").value = valor / 39.3701;
        document.getElementById("pie").value = valor / 12;
        document.getElementById("yarda").value = valor / 36;

    } else if (id === "pie") {

        document.getElementById("metro").value = valor / 3.28084;
        document.getElementById("pulgada").value = valor * 12;
        document.getElementById("yarda").value = valor / 3;

    } else if (id === "yarda") {

        document.getElementById("metro").value = valor / 1.09361;
        document.getElementById("pulgada").value = valor * 36;
        document.getElementById("pie").value = valor * 3;

    }
}

/**
 * Conversion de grados a radianes 
 * @method convertirGR
 * @param {string} id - Id del elemento input en el html
 */

function convertirGR(id){
    let grad,rad;

    if(id==="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad * Math.PI)/180;
    }else{
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}