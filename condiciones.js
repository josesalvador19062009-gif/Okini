// datos de la condición
const cupoCata= 8;
const inscritos = 5;

// condicional de cata abierta o llena
// si el número de cupos es mayor que el número de inscritos devuelve "Hay cupos, abrir reserva" ,
//si no devuelve "Cata llena, ofrecer lista de espera"

if (cupoCata > inscritos) {
    console.log("Hay cupos, abrir reserva");
} else{
    console.log("Cata llena, ofrecer lista de espera");
}

// operadores de comparación
8 > 5 // true
3 < 10 // true
8 >= 8 // true
4 <= 9 // true
5 === 5 // true
5 !== 3 // true

// revisa el código para predecir el resultado

const tazasReservadasHoy = 47;
const maxTazasDía = 50;
const difTazas = maxTazasDía - tazasReservadasHoy;

console.log(difTazas);

if (tazasReservadasHoy >= maxTazasDía) {
    console.log("Cerrar reservas del día");
} else{
    console.log("Aún hay disponibilidad");
}



// un pedazo de código que corre, pero está mal

const cantidadTazas = 2;

if (cantidadTazas > 2) {0
    console.log("Solo puedes reservar máximo 2 tazas");
} else {
    console.log("Reserva confirmada");
}
