import React, { useState, useEffect } from 'react';

function Questao03() {
  const [maiorPopulacao, setMaiorPopulacao] = useState('');
  const [menorPopulacao, setMenorPopulacao] = useState('');

  useEffect(() => {
    // Realiza a requisição para a API e obtém os países da região europeia com as informações de capital e população
    fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
      .then(response => response.json())
      .then(data => {
        let maiorPopulacaoIndex = 0; // Índice inicial para o país com a maior população
        let menorPopulacaoIndex = 0; // Índice inicial para o país com a menor população

        // Percorre o vetor de objetos 'data' e encontra o índice do país com a maior e menor população
        for (let i = 0; i < data.length; i++) {
          if (data[i].population > data[maiorPopulacaoIndex].population) {
            maiorPopulacaoIndex = i;
          }

          if (data[i].population < data[menorPopulacaoIndex].population) {
            menorPopulacaoIndex = i;
          }
        }

        // Atribui as capitais correspondentes aos estados 'maiorPopulacao' e 'menorPopulacao'
        setMaiorPopulacao(data[maiorPopulacaoIndex].capital[0]);
        setMenorPopulacao(data[menorPopulacaoIndex].capital[0]);
      })
      // Caso ocorra algum erro na requisição, exibe o erro no console
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Capitais dos países</h1>
      <p>Maior população: {maiorPopulacao}</p>
      <p>Menor população: {menorPopulacao}</p>
    </div>
  );
}

export default Questao03;
