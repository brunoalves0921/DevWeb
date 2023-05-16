import CorContexto from "./MeuContexto"
//legado
const FuncaoB = () => {
    return (
        <CorContexto.Consumer> 
            {
                ({cor,nome}) => {
                    return (
                        <div style={{backgroundColor: cor}}>
                            <h1>Funcao B de {nome}</h1>
                        </div>
                    )
                }
            }
        </CorContexto.Consumer>
    )
}

export default FuncaoB