console.log("V60");
console.log("Kyoto drip");
console.log("Siphon");
console.log("Prensa francesa");

// lista de métodos, se llaman arrays 
const metodos = ["V60", "Kyoto drip", "Siphon", "Prensa francesa"] ;

// instrucción que recorre la lista y que hace algo con cada elemento

for (const metodo of metodos) {
    console.log(metodo);
}

console.log("Fin del programa")

// ejemplo de bucle de reservas en un día

const reservasDelDía = [2, 1, 2, 1, 2];
let totalTazas = 2;

// for (const cantidad of reservasDelDía) {
   // totalTazas = totalTazas + cantidad;
//}
// ejemplo de un for que corre pero no hace lo que queremos

// for (const cantidad of reservasDelDía) {
  //  totalTazas = cantidad;
// }

console.log(totalTazas)