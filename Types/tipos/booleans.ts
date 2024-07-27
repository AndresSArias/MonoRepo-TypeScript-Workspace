
/* 
    Función anonima y autoinvocada 
crear varios archivos desde el mismo proyecto y no caer en el scope global y no caer en error.

*/
(() => {

    let isSuperman:boolean = true;
    let isBatman:boolean = false;
    /* Si en un log se coloca {} y dentro una variable imprime el nombre de la variable y su valor   */
    console.log({isSuperman});
    /* Condicionales tenemos
    && = and 
    || = or
    ! = no 
    */
    console.log(isSuperman && isBatman);
    console.log (!isSuperman);

    /* Ternarios:
    el_return = (variable_booleana_a_evaluar) ? return_si_variable_es_true : return_si_es_falso;
    */

    let condicion:string = (isBatman) ? 'ABC' : 'XYZ';

    console.log(condicion);


}) ();