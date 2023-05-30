import React from "react";

import Card from "./Card";

export default function Cards(props) {
  const { characters } = props;

  return (
    <div>
      {characters.map((character) => (
        <Card
          key={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          //   origin={character.origin}
          image={character.image}
          onClick={props.onClose}
          // Resto de las propiedades que necesites pasar a la Card
        />
      ))}
    </div>
  );
}
