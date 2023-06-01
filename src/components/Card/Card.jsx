import React from "react";
import { CardsC, CardImg, CardBoton, CardTitle,CardSubTitle,CardDivTitles} from "./card.style";

export default function Card(props) {
  const { character, onClose } = props;

  return (
    <CardsC>
      <CardDivTitles>
        <CardTitle>{character.name}</CardTitle>
        <CardSubTitle>{character.species}</CardSubTitle>
        <CardSubTitle>{character.gender}</CardSubTitle>
      </CardDivTitles>

      <CardImg>
        <img src={character.image} alt={character.name} />
      </CardImg>
      <CardBoton onClick={onClose}>X</CardBoton>
    </CardsC>
  );
}
