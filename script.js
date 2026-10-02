function calcularPrecio(precioUnitario, cantidad) {
    const total = precioUnitario * cantidad;
    return total;
}

// function puedeReservar(cantidad) {
   // return cantidad <= 2;
// }

function puedeReservar(tazasdisponibles) {
return tazasdisponibles > 0;
}

// const botonReservar = document.querySelector("#boton-reserva");

// botonReservar.addEventListener("click", function() {
   // console.log("El usuario hizo click");
// });

const botonReservar = document.querySelector("#boton-reserva");
const contadorTazas = document.querySelector("#contador-tazas");

botonReservar.addEventListener("click", function() {
    const tazasActuales = Number(contadorTazas.textContent);

if (puedeReservar(tazasActuales)) {
    contadorTazas.textContent = tazasActuales - 1;
    console.log ("Tazas disponibles hoy", contadorTazas);
} else {
    botonReservar.textContent = "Se terminaron nuestros cupos.";
    botonReservar.disabled = true;
};