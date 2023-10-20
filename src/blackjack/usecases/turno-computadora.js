import { crearCarta, pedirCarta, valorCarta } from "./";

/**
 * @param { Number } puntosMinimos 
 * @param { HTMLElement } puntosHTNL 
 * @param { HTMLElement } divCartasComputadora 
 * @param { Array<String> } deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if( !puntosMinimos ) throw new Error('Puntos minimos son necesario');
    if( !puntosHTML ) throw new Error('Argumento puntosHTML es necesario');

    let puntosComputadora = 0;

    do {

        const carta = pedirCarta( deck );
        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCarta( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while( (puntosComputadora < puntosMinimos) && ( puntosMinimos <= 21 ) ) ;

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('NADIE GANA :c');
        }else if ( puntosMinimos > 21 ) {
            alert('COMPUTADORA GANAA');
        }else if ( puntosComputadora > 21 ) {
            alert('JUGADOR GANAAA!')
        }else {
            alert('COMPUTADORA GANAA');
        }
    }, 100);

}