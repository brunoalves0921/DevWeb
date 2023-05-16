import CorContexto from "./MeuContexto"
//legado
const FuncaoB = () => {
    return (
        <CorContexto.Consumer> 
            {
                (cores) => {
                    return (
                        <div>
                             <h1 style={{backgroundColor: cores.bkgB}}>Função B</h1>
                        </div>
                    )
                }
            }
        </CorContexto.Consumer>
    )
}

export default FuncaoB