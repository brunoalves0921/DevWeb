const SaveData = () => {

    const saveData = () => {
        const aluno = {nome:"Bruno", curso:"CC"}
        localStorage.setItem("aluno01", JSON.stringify(aluno))
        sessionStorage.setItem("disciplina", "React")
    }

    return (
        <div>
            <h1>Save Data...</h1>
            {saveData()}
            <LoadData/>
        </div>
    )
}

const LoadData = () => {

    const loadData = () => {
        const alunoCarregado = JSON.parse(localStorage.getItem("aluno01"))

        return (
            <>
                <h3> nome: {alunoCarregado.nome}</h3>
                <h3> curso: {alunoCarregado.curso}</h3>
            </>
        )
    }

    return (
        <>
            <h1>Load Data...</h1>
            {loadData()}
        </>
    )
}

export default SaveData