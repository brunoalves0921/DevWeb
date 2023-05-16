import { useEffect } from "react"


const minhaPromise = new Promise(
    (resolve, reject) => {
        //emulando uma computacao demorada
        setTimeout(
            () => {
                const x = 11
                if (x%2 === 0 ) {
                    resolve('Deu certo')
                } else {
                    reject('Deu errado')
                }
            }, 3000
        )
    }
)

function meuGet(url) {
    return minhaPromise
}

const MinhaPromise = () => {

    useEffect(
        () => {
            meuGet("http://...")
            .then(
                (resultado) => {
                    console.log(resultado)
                }
            )
            .catch(
                (erro) => {
                    console.log(erro)
                }
            )
        }, []
    )
    return (
        <>
            <h1>Testando promessa!</h1>
        </>
    )
}

export default MinhaPromise