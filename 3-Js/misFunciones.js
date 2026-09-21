/**
 * Conversion de unidades de metros, pies, yardas y pulgadas
 * @method convertirUnidades
 * @param {string} id - Id del elemento input en el html
 * @param {number} valor - Valor ingresado por el usuario
 */
convertirUnidades = (id, valor) => {
    let metros,pulgadas,pies,yardas;

    if (isNaN(valor)) {

        alert("Se ingreso un valor incorrecto: " + id);
        metros ="";
        pulgadas ="";
        pies="";
        yardas = "";

    } else if (id === "metro") {
        metros=valor;
        pulgadas = valor * 39.3701;
        pies= valor * 3.28084;
        yardas = valor * 1.09361;

    } else if (id === "pulgada") {
        pulgadas=valor;
        metros = valor / 39.3701;
        pies = valor / 12;
        yardas = valor / 36;

    } else if (id === "pie") {
        pies=valor;
        metros = valor / 3.28084;
        pulgadas = valor * 12;
        yardas= valor / 3;

    } else if (id === "yarda") {
        yardas=valor;
        metros = valor / 1.09361;
        pulgadas = valor * 36;
        pies = valor * 3;
    }
        document.getElementById("metro").value = metros;
        document.getElementById("pulgada").value = pulgadas;
        document.getElementById("pie").value = pies;
        document.getElementById("yarda").value = yardas;
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