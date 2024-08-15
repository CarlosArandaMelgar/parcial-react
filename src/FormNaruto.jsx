import React, { useState } from 'react';
import Card from './Card'; 

function FormNaruto() {
  const [Name, setName] = useState('');
  const [favJutsu, setFavJutsu] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      setShowCard(true);
      setErrorMessage('');
    } else {
      setShowCard(false);
      setErrorMessage('Por favor chequea que la información sea correcta');
    }
  };

  const validateInputs = () => {
    if (Name.length < 3 || Name.trimStart().length !== Name.length) {
      return false;
    }
    if (favJutsu.length < 6) {
      return false;
    }
    return true;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="characterName">Nombre del Personaje de Naruto:</label>
          <input
            type="text"
            id="characterName"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="favoriteJutsu">Técnica Favorita (Jutsu):</label>
          <input
            type="text"
            id="favoriteJutsu"
            value={favJutsu}
            onChange={(e) => setFavJutsu(e.target.value)}
          />
        </div>
        <button type="submit" disabled={showCard}>Enviar</button>
      </form>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      {showCard && <Card characterName={Name} favoriteJutsu={favJutsu} />}
    </div>
  );
}

export default FormNaruto;
