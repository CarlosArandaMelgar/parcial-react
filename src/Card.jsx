import React from 'react';

//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({ characterName, favoriteJutsu }) {
  return (
    <div>
      <h2>Información del Personaje de Naruto:</h2>
      <p>Personaje: {characterName}</p>
      <p>Técnica Favorita: {favoriteJutsu}</p>
    </div>
  );
}

export default Card;