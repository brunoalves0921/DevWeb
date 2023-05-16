const Filho = ({falarComPai}) => {

    const acaoBotao = () => {
        falarComPai("Olá, pai!");
    }

    return (
        <div>
        <h1>Olá, eu sou o filho</h1>
        <button
            onClick={acaoBotao}    
        >
            Falar com o pai
        </button>
        </div>
    );
}

export default Filho;
