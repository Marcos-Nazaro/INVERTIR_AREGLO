/*
Almacene en un arreglo de tamaño N los números ingresados
por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero
*/

let longArr = Number(prompt("Ingrese la cantidad de numeros del arreglo")) - 1;
let ArrNum: number[] = new Array(Number(longArr));
for (let i = longArr; i >= 0; i--) {
  ArrNum[i] = Number(
    prompt(`ingrese el numero correspondienta a la posición ${i}`)
  );
  console.log(`El numero de la posición ${i} es: ${ArrNum[i]}`);
}
console.log(ArrNum);
