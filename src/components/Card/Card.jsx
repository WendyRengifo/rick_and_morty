import React from "react";
import { CardsC, CardImg, CardBoton } from "./card.style";

export default function Card(props) {
  const { character, onClose } = props;

  return (
    <CardsC>
      <div>
        <h2>{character.name}</h2>
        <h2>{character.species}</h2>
        <h2>{character.gender}</h2>
      </div>

      <CardImg>
        <img src={character.image} alt={character.name} />
      </CardImg>
      <CardBoton onClick={onClose}>X</CardBoton>
    </CardsC>
  );
}
