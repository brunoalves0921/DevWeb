import './App.css';
import React from 'react';
import Questao01X from './components/Questao01';
import Questao02X from './components/Questao02';
import Questao03 from './components/Questao03';

function App() {
  return (
    <div className="App">
      <section className="questao">
        <h2>Questão 01</h2>
        <Questao01X />
      </section>
      <hr />
      <section className="questao">
        <h2>Questão 02</h2>
        <Questao02X />
      </section>
      <hr />
      <section className="questao">
        <h2>Questão 03</h2>
        <Questao03 />
      </section>
    </div>
  );
}

export default App;
