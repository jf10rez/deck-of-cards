export const deckReducer = (state = [], action) => {
  const { payload } = action;

  switch (action.type) {
    case "AddPlayers":
      return {
        ...state,
        player1: { name: payload.player1 },
        player2: { name: payload.player2 },
        existPlayers: true,
      };
    case "dealCards":
      return {
        ...state,
        player1: {
          ...state.player1,
          win: state.player1.cards?.some(
            (card) => card.value.toString() === payload[0].value.toString()
          )
            ? true
            : false,
          cards: [...(state.player1.cards ?? []), payload[0]],
        },
        player2: {
          ...state.player2,
          win: state.player2.cards?.some(
            (card) => card.value.toString() === payload[1].value.toString()
          )
            ? true
            : false,
          cards: [...(state.player2.cards ?? []), payload[1]],
        },
      };
    case "startLoading":
      return {
        ...state,
        isLoading: true,
      };
    case "finishLoading":
      return {
        ...state,
        isLoading: false,
      };
    case "createGame":
      return {
        ...state,
        game: payload,
      };

    default:
      return state;
  }
};
