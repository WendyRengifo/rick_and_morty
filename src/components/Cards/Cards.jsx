import React from "react";

import Card from "../Card/Card";



import { CardContainer} from "../Cards/cards.style";

export default function Cards(props) {
  const { characters, onClose } = props;


  return (
    <CardContainer>
      {characters.map((character) => (
        <Card
          key={character.id}
          character={character} 
          onClose={onClose}
        />
      ))}
    </CardContainer>
  );
}
