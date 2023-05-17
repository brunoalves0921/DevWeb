import React, { useState, useEffect } from 'react';

const Questao01Y = ({ alunos, setMedias }) => {
  useEffect(() => {
    const calcularMedias = () => {
      // Calcula a média de cada aluno com base nas notas fornecidas
      const medias = alunos.map(aluno => (aluno.notas.ap1 + aluno.notas.ap2) / 2);
      setMedias(medias); // Atualiza o estado 'medias' no componente Questao01X
    };

    calcularMedias();
  }, [alunos, setMedias]);

  return null; // Não é necessário renderizar nenhum elemento JSX neste componente
};

function Questao01X() {
  const [medias, setMedias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (medias.length > 0) {
      setLoading(false); // Define o estado 'loading' como falso quando as médias são atualizadas
    }
  }, [medias]);

  const renderAlunosAbaixoDaMedia = () => {
    // Filtra os alunos com média menor ou igual a 5.0
    const alunosAbaixoDaMedia = alunos.filter((aluno, index) => medias[index] <= 5.0);
    return alunosAbaixoDaMedia.map(aluno => <p key={aluno.nome}>{aluno.nome}</p>);
  };

  const alunos = [
    { nome: "Sicrano", notas: { ap1: 1.4, ap2: 5.4 } },
    { nome: "Beltrano", notas: { ap1: 10.0, ap2: 10.0 } },
    { nome: "Fulano", notas: { ap1: 2.3, ap2: 6.2 } }
  ];

  return (
    <div>
      <h1>Alunos abaixo da média:</h1>
      {loading ? <p>Carregando...</p> : renderAlunosAbaixoDaMedia()}
      <Questao01Y alunos={alunos} setMedias={setMedias} />
    </div>
  );
}

export default Questao01X;
