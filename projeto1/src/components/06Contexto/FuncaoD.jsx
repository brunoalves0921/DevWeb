import CorContexto from "./MeuContexto"
//legado
const FuncaoD = () => {
    return (
        <CorContexto.Consumer> 
            {
                ({cor2}) => {
                    return (
                        <div style={{backgroundColor: cor2}}>
                            <h1>Funcao D</h1>
                        </div>
                    )
                }
            }
        </CorContexto.Consumer>
    )
}

export default FuncaoD