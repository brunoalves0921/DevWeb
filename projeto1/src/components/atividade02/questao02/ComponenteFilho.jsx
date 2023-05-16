import React, { useContext } from 'react'
import PokemonContexto from './MeuContexto'

const ComponenteFilho = () => {

    const numero = useContext(PokemonContexto)

    return (
        <div>
            <h1>Componente Filho</h1>            
            <img 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero+2}.png`}
                style={{ width: '400px' }} alt="pokemon"
            />
        </div>
    )
}

export default ComponenteFilho