import { VALUE_OF_PINTS, VALUE_OF_TYPES } from "./valueCardTypes"

export const validateDraw = ( player1 = {}, player2 = {} ) => {

    //1: gana jugador 1, 2: gana jugador 2
    
    if( VALUE_OF_PINTS[player1.suit] > VALUE_OF_PINTS[player2.suit] ) return 1

    if( VALUE_OF_PINTS[player2.suit] > VALUE_OF_PINTS[player1.suit] ) return 2

    if( (VALUE_OF_TYPES[player1.value] ?? +player1.value) > (VALUE_OF_TYPES[player2.value] ?? +player2.value) ){
        return 1
    }else{
        return 2
    }

}