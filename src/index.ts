/*Estructura de Control - 
Selección Ejercicio – Aumento de Sueldo
• Una empresa desea premiar a sus empleados con un aumento de sueldo.
Este aumento se ajusta a la siguiente tabla:
Desarrolle un algoritmo dado el salario actual de un empleado determine el
aumento de sueldo a aplicar y se lo muestre
*/
let sueldoActual: number = Number(prompt("Indique su sueldo actual:"));
let aumento: number = 0;
if (sueldoActual <= 15000) {
  aumento = sueldoActual + sueldoActual * 0.2;
  console.log("Su sueldo actual es: " + aumento);
} else {
  if (sueldoActual > 15000 && sueldoActual <= 20000) {
    aumento = sueldoActual + sueldoActual * 0.1;
    console.log("Su sueldo actual es: " + aumento);
  } else {
    if (sueldoActual > 20000 && sueldoActual <= 25000) {
      aumento = sueldoActual + sueldoActual * 0.05;
      console.log("Su sueldo es: " + aumento);
    } else {
      console.log("su sueldoes " + sueldoActual);
    }
  }
}
