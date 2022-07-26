import { useContext } from "react";
import { DeckContext } from "../context/deckContext";

import card from "../assets/card.jpg";

export const ContainerOne = ({ cards }) => {
  const { decks } = useContext(DeckContext);

  return (
    <div className="col-md-6 container-cards">
      <div className="title">
        <h2>{decks.player1.name}</h2>
      </div>
      <div className="optional-cards">
        <h6>Cartas opcionadas</h6>
      </div>
      <div className="card-atras">
        <img src={card} alt="1" />
        <img src={card} alt="2" />
      </div>
      <div className="ob-cards">
        <h6>Cartas obtenidas</h6>
      </div>
      <div className="cards-hand">
        {cards?.map((item) => (
          <img key={item.image} src={item.image} alt={item.image} />
        ))}
      </div>
    </div>
  );
};
