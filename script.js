function calcularPrecio(precioUnitario, cantidad) {
    const total = precioUnitario * cantidad;
    return total;
}

function puedeReservar(tazasDisponibles) {
    return tazasDisponibles > 0;
}

const botonReservar = document.querySelector("#boton-reservar");
const contadorTazas = document.querySelector("#contador-tazas");

botonReservar.addEventListener("click", function() {
    const tazasActuales = Number(contadorTazas.textContent);

    if (puedeReservar(tazasActuales)) {
        contadorTazas.textContent = tazasActuales - 1;
        console.log("Tazas disponibles hoy", contadorTazas.textContent);
    } else {
        botonReservar.textContent = "Se terminaron nuestros cupos.";
        botonReservar.disabled = true;
    }
});