const Calculadora = () => {

    const soma = (a, b) => {
        return a + b;
    }

    const subtracao = (a, b) => {
        return a - b;
    }

    const multiplicacao = (a, b) => {
        return a * b;
    }

    const divisao = (a, b) =>  a / b;

    const chamarDivisao = (funcaoDeDivisao) => {
        return funcaoDeDivisao(10, 5);
    }

    
    return (
        <div>
            <h1>A soma dos numeros eh: {soma(10,5)}</h1>
            <h1>A subtracao dos numeros eh: {subtracao(10,5)} </h1>
            <h1>A multiplicacao dos numeros eh: {multiplicacao(10,5)}</h1>
            <h1>A divisao dos numeros eh: {chamarDivisao(divisao)} </h1>
        </div>
    );
}

export default Calculadora;