"use strict";
/*
    Las constantes generan un tipo de variable para el sistema, ya que este no se podrá cambiar y por eso en la lectura de:
    const a: 10
    y no const a: number
    cómo si pasa con
    let b: number
    ya que la variable let se puede cambiar.

    No dejar que TypeScript infiera el numero, siempre definir el tipo de valor así.
    const a:number = 10;
    let b:number;

*/
const a = 10;
let b;
/*
    Ganamos flexiblidad pero perdemos control, entra el tipo any acá en
    c:any
*/
let c;
b = 10;
/*
    Los argumentos también deben tener los tipos de datos
    esto se consigue gracias a la restricción en tsconfig.json

    */
function sayHello(msg) {
    console.log(msg);
}
/*
    Función anonima y autoinvocada
crear varios archivos desde el mismo proyecto y no caer en el scope global y no caer en error.
*/
(() => {
})();
