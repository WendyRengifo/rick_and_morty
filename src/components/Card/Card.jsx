import React from "react";
import { CardsC, CardImg } from "./card.style";

export default function Card(props) {
  const { character, onClose } = props;

  return (
    <CardsC>
      <button onClick={onClose}>X</button>
      <h2>{character.name}</h2>
      <h2>{character.species}</h2>
      <h2>{character.gender}</h2>
      <CardImg>
        <img src={character.image} alt={character.name} />
      </CardImg>
    </CardsC>
  );
}
