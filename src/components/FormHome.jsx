import { useContext, useState } from "react";
import { DeckContext } from "../context/deckContext";
import Swal from "sweetalert2";

export const FormHome = () => {
  const [form, setForm] = useState({
    player1: "",
    player2: "",
  });

  const { dispatch } = useContext(DeckContext);

  const { player1, player2 } = form;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!player1 && !player2) {
      return Swal.fire("Error", "Debe completar los campos", "error");
    }
    dispatch({
      type: "AddPlayers",
      payload: { player1, player2 },
    });

    dispatch({ type: "startLoading" });
    fetch("http://deckofcardsapi.com/api/deck/new/")
      .then((response) => response.json())
      .then((data) => {
        if (!data.success) {
          dispatch({ type: "finishLoading" });
          return Swal.fire("Error", "Se presentó un error con el servidor");
        }
        dispatch( { type: 'createGame', payload: data } )
        fetch(
          `http://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=2`
        )
          .then((response) => response.json())
          .then((game) => {
            console.log(game)
            dispatch({ type: "finishLoading" });
            if( !game.success ){
              dispatch({ type: "finishLoading" });
              return Swal.fire("Error", "Se presentó un error con el servidor");
            }
            dispatch( {
              type: 'dealCards',
              payload: game.cards
            } )
          });
      })
      .catch((error) => Swal.fire("Error", error, "error"));
  };

  return (
    <div className="row">
      <form onSubmit={onSubmit}>
        <label>Jugador #1</label>
        <input
          className="form-control input-home"
          onChange={(e) => setForm({ ...form, player1: e.target.value })}
          value={player1}
        />
        <br />
        <label>Jugador #2</label>
        <input
          className="form-control input-home"
          onChange={(e) => setForm({ ...form, player2: e.target.value })}
          value={player2}
        />
        <br />
        <button type="submit" className="btn btn-primary">
          Ingresar
        </button>
      </form>
    </div>
  );
};
