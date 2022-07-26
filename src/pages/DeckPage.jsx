import { useContext, useEffect, useState } from "react";
import { ContainerOne } from "../components/ContainerOne";
import { ContainerTwo } from "../components/ContainerTwo";
import { AddHand } from "../components/AddHand";
import { DeckContext } from "../context/deckContext";
import { validateDraw } from "../helpers/validateDraw";

export const DeckPage = () => {
  const { decks } = useContext(DeckContext);

  const { isLoading, player1, player2 } = decks;
  const [winnerPlayer, setWinnerPlayer] = useState("")

  useEffect(() => {
    if (player1.win && player2.win) {
      const winner = validateDraw(
        player1.cards[player1.cards.length - 1],
        player2.cards[player2.cards.length - 1]
      );
      return setWinnerPlayer( winner )
    }
    if (player1.win) return setWinnerPlayer( 1 )
    if (player2.win) return setWinnerPlayer( 2 )
    
  }, [decks, player1, player2]);

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div className="container-fluid">
      {/* {
        winnerPlayer && <h1> El ganador es el jugador { winnerPlayer } </h1>
      } */}
      <div className="btn-add">
          <AddHand winner={ winnerPlayer } />
      </div>
      <div className="row">
        <ContainerOne cards={ player1.cards } winner={ winnerPlayer } />
        <ContainerTwo cards={ player2.cards } winner={ winnerPlayer } />
      </div>
    </div>
  );
};
