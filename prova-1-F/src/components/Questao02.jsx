import React, { useState } from 'react';

const Questao02 = () => {
  // Estado para controlar se a imagem de costas deve ser exibida
  const [isBackImage, setIsBackImage] = useState(false);

  // URLs das imagens frontal e de costas do Pikachu
  const frontImageURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
  const backImageURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png";

  // Função para alternar entre a imagem frontal e a de costas
  const toggleImage = () => {
    setIsBackImage(!isBackImage);
  };

  return (
    <div>
      {/* Renderiza a imagem correspondente com base no estado isBackImage */}
      <img src={isBackImage ? backImageURL : frontImageURL} alt="Pokemon" />

      {/* Botão para alternar entre a imagem frontal e a de costas */}
      <button onClick={toggleImage}>Virar</button>
    </div>
  );
};

export default Questao02;
