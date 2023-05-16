import { useContext } from "react"
import FuncaoD from "./FuncaoD"
import CorContexto from "./MeuContexto"

const FuncaoC = () => {
    const objeto = useContext(CorContexto)
    const {cor, cor2, nome } = objeto
    return (
        <div>
            <h1 style={{backgroundColor:cor2}}>Funcao C</h1>
            <FuncaoD/>
        </div>
    )
}

export default FuncaoC