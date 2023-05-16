import Filho from './Filho.jsx';

const Pai = () => {

    const mensagemDoFilho = (mensagem) => {
        alert("Mensagem do filho: " + mensagem);
    }

    return (
        <div>
        <h1>Olá, eu sou o pai</h1>
        <Filho falarComPai={mensagemDoFilho}/>
        </div>
    );
}

export default Pai;
