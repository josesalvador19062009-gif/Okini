function calcularPrecio(precioUnitario, cantidad) {
    const total = precioUnitario * cantidad;
    return total;
}
console.log("el precio es", calcularPrecio(5, 6));
console.log("el precio es", calcularPrecio(4 , 7));
console.log("el precio es", calcularPrecio(10 , 4));

// una función que decide

 function puedeReservar(cantidad) {
    if (cantidad <= 2) {
        return true;
    } else {
        return false;
    }
 }
 const cantidad1 = 4;
 if (puedeReservar(2)) {
    console.log("Reserva confirmada:" , cantidad1);
 } else {
    console.log("Lo siento, máximo 2 tazas por persona");
 }

  // una función parecida, generada por IA

  function puedeReservar(cantidad) {
    return cantidad <= 2;
  }
  //llegué a esta conclusion
function puedeReservar(cantidad, totalHoy) {
  return cantidad <= 2 && (totalHoy + cantidad) <= 50;
}

console.log(puedeReservar(1, 47)); // Output: true
console.log(puedeReservar(2, 47));