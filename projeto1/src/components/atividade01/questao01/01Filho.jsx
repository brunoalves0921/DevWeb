const Filho = ({altura, peso}) => {

    const ImcIdeal = () => {
        let imc = peso / (altura * altura);
        if (imc < 18) {
            return (
                <div>
                    <h1> IMC: {peso / (altura * altura)}</h1>
                    <h1> Você está abaixo do peso</h1>
                </div>
            )
        } else if (imc > 25) {
            return (
                <div>
                    <h1> IMC: {peso / (altura * altura)}</h1>
                    <h1> Você está acima do peso</h1>
                </div>
            )
        } else {
            return (
                <div>
                    <h1> IMC: {peso / (altura * altura)}</h1>
                    <h1> Você está no peso ideal</h1>
                </div>
            )
        }
    }
    return (
        <div>
            <h1>Altura: {altura}</h1>
            <h1>Peso: {peso}</h1>
            <ImcIdeal/>
        </div>
    );
}

export default Filho;