import { VALUE_OF_PINTS, VALUE_OF_TYPES } from "./valueCardTypes"

export const validateUpperCard = ( cards, lastCard ) => {

    let upperCard = {}
    let count = 0

    cards.forEach( card => {
        if( card.value.toString() === lastCard.value.toString() && count === 0 ){
            count++
            if( VALUE_OF_PINTS[card.suit] > VALUE_OF_PINTS[lastCard.suit] ) return upperCard = card
    
            if( VALUE_OF_PINTS[lastCard.suit] > VALUE_OF_PINTS[card.suit] ) return upperCard = lastCard
    
            if( (VALUE_OF_TYPES[card.value] ?? +card.value) > (VALUE_OF_TYPES[lastCard.value] ?? +lastCard.value) ){
                return upperCard = card
            }else{
                return upperCard = lastCard
            }
        }
        return
    } )
    
    return upperCard

}