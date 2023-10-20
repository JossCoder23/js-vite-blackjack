
/**
 * @param { String } carta 
 * @returns { Number } valor de la carta
 */
export const valorCarta = ( carta ) => {
    // '2D' = carta[0] = 2
    //substring, agarra el primer elemento y carta.length-1 obvia el ultimo elemento
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) 
        ? ( valor === 'A' ) ? 11 : 10
        : valor * 1;
}
