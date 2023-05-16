const MeusDados = ({nome, idade, curso, universidade}) => {
    const estilo = {
        color: 'blue',
        fontSize: '50px',
    }
    return (
        <div>
            <h1 style={estilo}>Nome: {nome}</h1>
            <h1 style={estilo}>Idade: {idade}</h1>
            <h1 style={estilo}>Curso: {curso}</h1>
            <h1 style={estilo}>Universidade: {universidade}</h1>
        </div>
    )
}

export default MeusDados