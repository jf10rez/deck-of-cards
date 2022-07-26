import { useContext, useState } from "react";
import { DeckContext } from "../context/deckContext";
import Swal from "sweetalert2";

export const AddHand = ({ winner }) => {
  const { decks, dispatch } = useContext(DeckContext);
  const { deck_id } = decks.game;
  const [isDisabled, setIsDisabled] = useState(false)

  const handleAddHand = () => {
    setIsDisabled( true )
    fetch(`http://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`)
      .then((response) => response.json())
      .then((game) => {
        if (!game.success) {
          return Swal.fire("Error", "Se presentó un error con el servidor");
        }
        setIsDisabled( false )
        dispatch({
          type: "dealCards",
          payload: game.cards,
        });

        dispatch({
            type: "anyWin",
            payload: game.cards,
        })
      });
  };

  return (
    <button className="btn btn-primary" onClick={handleAddHand} disabled={ isDisabled || winner }>
      <i className="bi bi-play-circle-fill"></i>
    </button>
  );
};
