//import React from 'react' (necessario para usar com classes)

//versao com function
/*function MeusDados() {
    return (
        <div>
            <h1>Nome: Jorge Bruno Costa Alves</h1>
            <h1>Idade: 22</h1>
            <h1>Curso: Ciência da computação</h1>
        </div>
    )
}

export default MeusDados*/


//versão com arrow function e return

const MeusDados = () => {
    const estilo = {
        color: 'blue',
        fontSize: '50px',
    }
    return (
        <div>
            <h1 style={estilo}>Nome: Jorge Bruno Costa Alves</h1>
            <h1 style={estilo}>Idade: 22</h1>
            <h1 style={estilo}>Curso: Ciência da computação</h1>
        </div>
    )
}

export default MeusDados

/*versão com arrow function e sem return
const MeusDados = () => (
    <div>
        <h1>Nome: Jorge Bruno Costa Alves</h1>
        <h1>Idade: 22</h1>
        <h1>Curso: Ciência da computação</h1>
    </div>
)

export default MeusDados*/

/*versao com class e render
class MeusDados extends React.Component {
    render() {
        return (
            <div>
                <h1>Nome: Jorge Bruno Costa Alves</h1>
                <h1>Idade: 22</h1>
                <h1>Curso: Ciência da computação</h1>
            </div>
        )
    }
}

export default MeusDados*/
