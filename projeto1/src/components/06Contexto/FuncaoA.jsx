import FuncaoB from "./FuncaoB"
import FuncaoC from "./FuncaoC"
import CorContexto from "./MeuContexto" 



const FuncaoA = () => {

    const cor = 'red'

    return (
        <CorContexto.Provider value={{cor:cor, nome:"bruno", cor2:"green"}}>
            <div>
                <h1 style={{ backgroundColor: cor}}>Funcao A</h1>
                <FuncaoB/>
                <FuncaoC/>
            </div>
        </CorContexto.Provider>
    )
}

export default FuncaoA