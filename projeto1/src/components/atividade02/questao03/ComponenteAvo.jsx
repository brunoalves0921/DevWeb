import { useState } from "react"
import PokemonContexto from "./MeuContexto"
import ComponentePai from "./ComponentePai"


const ComponenteAvo = () => {

    // let numero = 1
    const [numero, setNumero] = useState(1)

    const acaoBotao = () => {
        // alert('Clicou no botão novamente')
        // numero = numero + 1
        setNumero(numero + 1)
    }

    return (
        <PokemonContexto.Provider value={numero}>
            <div>
                <h1>Componente Avô</h1>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}
                    style={{width: '400px'}} alt="pokemon"
                    />
                    {/* <button
                        onClick={
                            () => {
                                alert('Clicou no botão')
                            }
                        }
                    >
                        Clique aqui
                    </button> */}
                    <button
                        onClick={acaoBotao}
                    >
                        Clique aqui
                    </button>
                <ComponentePai />
            </div>
        </PokemonContexto.Provider>
    )
}

export default ComponenteAvo