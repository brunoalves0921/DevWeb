import './App.css';
//import HelloWorld from './components/00HelloWorld';
//import Calculadora from './components/01Calculadora';
//import MeusDados from './components/atividade00/01MeusDados';
// import Temperatura from './components/atividade00/03Temperatura';
// import MeusDados from './components/atividade00/02MeusDados';
// import MyProps from './components/02MyProps';
// import FunctionA from './components/03Hierarquia/FunctionA';
// import { Header, Body, Footer } from './components/04Multiplo';
// import { Supermercado, Legume, Bebiba} from './components/05Children';
// import Pai from './components/atividade01/questao01/01Pai';
//Em App.js importe todos os componentes usando um alias “PC”. Chame os componentes no JSX de App.js
// import * as PC from './components/atividade01/02MeuPc';
//import * as Batalha from './components/atividade01/03Batalha';
// import FuncaoA from './components/atividade02/questao01/FuncaoA';
// import ComponenteAvo from './components/atividade02/questao03/ComponenteAvo';
// import SaveData from './components/08Storage/FunctionLocalStorage';
// import Pai from './components/09PaiFilho/Pai';
// import FunctionEstados from './components/10Estados/FunctionEstados';
// import MinhaPromise from './12Promises/MinhaPromise';
import MyRefs from './components/13refs/MyRefs';

function App() {
  return (
    <div className="App">
      {/* <MeusDados 
        nome="Jorge Bruno Costa Alves"
        idade="22"
        curso="Ciência da Computação"
        universidade="Universidade Federal do Ceará"	
      /> */}
      {/* <Temperatura /> */}
      {/* <FunctionA x="10" y="20" /> */}
      {/* <Header />
      <Body />
      <Footer /> */}
    {/* <Supermercado nome="Do povo">
      <Legume nome="Batata"/>
      <Bebiba nome="Coca-cola"/>
    </Supermercado> */}
    {/* <Pai /> */}
    {/* <PC.PlacaMae nome="ASUS" preco={100}/>
    <PC.Memorias nome="Corsair" preco={200}/>
    <PC.PlacaDeVideo nome="Nvidia" preco={300}/> */}
    {/* <Batalha.World>
      <Batalha.Arena/>
    </Batalha.World> */}
    {/* <FuncaoA /> */}
    {/* <ComponenteAvo /> */}
    {/* <SaveData /> */}

    {/* <Pai /> */}
    {/* <FunctionEstados /> */}
    {/* <MinhaPromise /> */}
    <MyRefs />
    </div>
  );
}

export default App;
