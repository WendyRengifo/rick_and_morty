import React from 'react';

import {SearchBarDiv} from './SearchBar.style.js';

export default function SearchBar(props) {

   const {onSearch} = props;
   return (
      <SearchBarDiv>
         <input type='search' />
         <button onClick={onSearch}>Agregar</button>
      </SearchBarDiv>
   );
}
