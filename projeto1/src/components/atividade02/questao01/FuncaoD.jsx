import CorContexto from "./MeuContexto"
//legado
const FuncaoD = () => {
    return (
        <CorContexto.Consumer> 
            {
                (cores) => {
                    return (
                        <div style={{backgroundColor: cores.bkgD}}>
                            <h1>Funcao D</h1>
                        </div>
                    )
                }
            }
        </CorContexto.Consumer>
    )
}

export default FuncaoD