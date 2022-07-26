import { AppRouter } from './routers/AppRouter';
import { DeckContext } from './context/deckContext';
import { useReducer } from 'react';
import { deckReducer } from './reducers/deckReducer';

export const DeckApp = () => {

    //TODO: EXAMPLE:
    // player1:
    //     {
            //name: "Jhonatan Florez"
    //         cards: [{
            //     "code": "3S",
            //     "image": "https://deckofcardsapi.com/static/img/3S.png",
            //     "images": {
            //         "svg": "https://deckofcardsapi.com/static/img/3S.svg",
            //         "png": "https://deckofcardsapi.com/static/img/3S.png"
            //     },
            //     "value": "3",
            //     "suit": "SPADES"
        // }]
    // ]

    const initialState = {
        player1: { cards: [], win: false },
        player2: { cards: [], win: false },
        existPlayers: false,
        isLoading: false
    }

    const [ decks, dispatch ] = useReducer( deckReducer, initialState )
  return (
    <DeckContext.Provider value={ { decks, dispatch } }>
      <AppRouter />
    </DeckContext.Provider>
  )
}
