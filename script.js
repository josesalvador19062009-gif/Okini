function calcularPrecio(precioUnitario, cantidad) {
    const total = precioUnitario * cantidad;
    return total;
}

// function puedeReservar(cantidad) {
// return cantidad <= 2;
// }

function puedeReservar(tazasDisponibles) {
    return tazasDisponibles > 0;
}

// const botonReserva = document.querySelector("#boton-reserva");

// botonReserva.addEventListener("click", function() {
// console.log("El usuario hizo click");
// });

const botonReserva = document.querySelector("#boton-reserva");
const contadorTazas = document.querySelector("#contador-tazas");

botonReserva.addEventListener("click", function() {
    const tazasActuales = Number(contadorTazas.textContent);

    if (puedeReservar(tazasActuales)) {
        contadorTazas.textContent = tazasActuales - 1;
        console.log ("Tazas disponibles hoy", contadorTazas);
    } else {
        botonReserva.textContent = "Se terminaron nuestros cupos.";
        botonReserva.disabled = true;
    }
});